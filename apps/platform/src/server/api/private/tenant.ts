"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";

/**
 * Check if a store slug is available
 */
export async function checkSlugAvailability(slug: string): Promise<{
	available: boolean;
	suggestion?: string;
}> {
	const normalized = slug.toLowerCase().trim();

	// Reserved slugs that cannot be used
	const reservedSlugs = [
		"admin",
		"api",
		"app",
		"www",
		"mail",
		"ftp",
		"blog",
		"help",
		"support",
		"docs",
		"status",
		"cdn",
		"assets",
		"static",
		"boostcart",
	];

	if (reservedSlugs.includes(normalized)) {
		return {
			available: false,
			suggestion: `${normalized}-store`,
		};
	}

	const existing = await db.tenant.findUnique({
		where: { slug: normalized },
		select: { id: true },
	});

	if (existing) {
		// Generate suggestion by appending random number
		const suggestion = `${normalized}-${Math.floor(Math.random() * 1000)}`;
		return {
			available: false,
			suggestion,
		};
	}

	return { available: true };
}

/**
 * Create a new store (tenant) for the current user
 */
export async function createStore(data: {
	storeName: string;
	storeSlug: string;
	industry?: string;
}): Promise<{
	success: boolean;
	error?: string;
	tenant?: { id: string; slug: string };
}> {
	try {
		const session = await auth();

		if (!session?.user?.id) {
			return {
				success: false,
				error: "You must be logged in to create a store.",
			};
		}

		const userId = session.user.id;
		const userEmail = session.user.email;

		// Check if user already has a store
		const existingStaff = await db.tenantStaff.findFirst({
			where: { userId, role: "OWNER" },
			include: { tenant: true },
		});

		if (existingStaff) {
			return {
				success: false,
				error:
					"You already own a store. Multiple stores are not supported yet.",
			};
		}

		// Validate slug availability
		const slugCheck = await checkSlugAvailability(data.storeSlug);
		if (!slugCheck.available) {
			return {
				success: false,
				error: `This store URL is not available. Try: ${slugCheck.suggestion}`,
			};
		}

		// Create tenant and link to user in a transaction
		const tenant = await db.$transaction(async (tx) => {
			// Create the tenant
			const newTenant = await tx.tenant.create({
				data: {
					slug: data.storeSlug.toLowerCase().trim(),
					name: data.storeName.trim(),
					email: userEmail,
					billingStatus: "TRIAL",
					trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days trial
					themeConfig: JSON.stringify({
						industry: data.industry || "general",
					}),
				},
			});

			// Link user as owner
			await tx.tenantStaff.create({
				data: {
					tenantId: newTenant.id,
					userId: userId,
					role: "OWNER",
					permissions: JSON.stringify(["*"]), // Full permissions for owner
				},
			});

			return newTenant;
		});

		return {
			success: true,
			tenant: { id: tenant.id, slug: tenant.slug },
		};
	} catch (error) {
		console.error("Error creating store:", error);
		return {
			success: false,
			error: "An unexpected error occurred. Please try again.",
		};
	}
}

/**
 * Get the current user's stores
 */
export async function getUserStores(): Promise<{
	stores: Array<{
		id: string;
		name: string;
		slug: string;
		role: string;
		billingStatus: string;
	}>;
}> {
	try {
		const session = await auth();

		if (!session?.user?.id) {
			return { stores: [] };
		}

		const staffRecords = await db.tenantStaff.findMany({
			where: { userId: session.user.id },
			include: {
				tenant: {
					select: {
						id: true,
						name: true,
						slug: true,
						billingStatus: true,
					},
				},
			},
		});

		return {
			stores: staffRecords.map((s) => ({
				id: s.tenant.id,
				name: s.tenant.name,
				slug: s.tenant.slug,
				role: s.role,
				billingStatus: s.tenant.billingStatus,
			})),
		};
	} catch (error) {
		console.error("Error fetching user stores:", error);
		return { stores: [] };
	}
}

/**
 * Check if the current user has any stores
 */
export async function userHasStore(): Promise<boolean> {
	try {
		const session = await auth();

		if (!session?.user?.id) {
			return false;
		}

		const count = await db.tenantStaff.count({
			where: { userId: session.user.id },
		});

		return count > 0;
	} catch {
		return false;
	}
}

/**
 * Get the current user's primary tenant with stats
 */
export async function getCurrentTenant(): Promise<{
	tenant: {
		id: string;
		name: string;
		slug: string;
		email: string;
		billingStatus: string;
		trialEndsAt: Date | null;
		currency: string;
		locale: string;
		logoUrl: string | null;
	} | null;
	role: string | null;
	stats: {
		totalProducts: number;
		totalOrders: number;
		totalCustomers: number;
		totalRevenue: number;
	};
}> {
	try {
		const session = await auth();

		if (!session?.user?.id) {
			return {
				tenant: null,
				role: null,
				stats: {
					totalProducts: 0,
					totalOrders: 0,
					totalCustomers: 0,
					totalRevenue: 0,
				},
			};
		}

		// Get the first store the user has access to (for now, single store per user)
		const staffRecord = await db.tenantStaff.findFirst({
			where: { userId: session.user.id },
			include: {
				tenant: {
					select: {
						id: true,
						name: true,
						slug: true,
						email: true,
						billingStatus: true,
						trialEndsAt: true,
						currency: true,
						locale: true,
						logoUrl: true,
					},
				},
			},
			orderBy: { createdAt: "asc" }, // Get the first/oldest store
		});

		if (!staffRecord) {
			return {
				tenant: null,
				role: null,
				stats: {
					totalProducts: 0,
					totalOrders: 0,
					totalCustomers: 0,
					totalRevenue: 0,
				},
			};
		}

		const tenantId = staffRecord.tenant.id;

		// Get stats for this tenant
		const [totalProducts, totalOrders, totalCustomers, revenueResult] =
			await Promise.all([
				db.product.count({ where: { tenantId } }),
				db.order.count({ where: { tenantId } }),
				db.customer.count({ where: { tenantId } }),
				db.order.aggregate({
					where: { tenantId, paymentStatus: "PAID" },
					_sum: { totalAmount: true },
				}),
			]);

		return {
			tenant: staffRecord.tenant,
			role: staffRecord.role,
			stats: {
				totalProducts,
				totalOrders,
				totalCustomers,
				totalRevenue: revenueResult._sum.totalAmount?.toNumber() ?? 0,
			},
		};
	} catch (error) {
		console.error("Error fetching current tenant:", error);
		return {
			tenant: null,
			role: null,
			stats: {
				totalProducts: 0,
				totalOrders: 0,
				totalCustomers: 0,
				totalRevenue: 0,
			},
		};
	}
}
