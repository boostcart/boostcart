"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";

// Helper to check if user is platform admin
async function requirePlatformAdmin() {
	const session = await auth();

	if (!session?.user) {
		throw new Error("Unauthorized: Not authenticated");
	}

	if (session.user.role !== "ADMIN") {
		throw new Error("Unauthorized: Platform admin access required");
	}

	return session.user;
}

// Get platform dashboard stats
export async function getPlatformStats() {
	await requirePlatformAdmin();

	const [
		totalTenants,
		activeTenants,
		totalUsers,
		totalProducts,
		totalOrders,
		recentTenants,
	] = await Promise.all([
		db.tenant.count(),
		db.tenant.count({ where: { isActive: true } }),
		db.user.count(),
		db.product.count(),
		db.order.count(),
		db.tenant.findMany({
			take: 5,
			orderBy: { createdAt: "desc" },
			select: {
				id: true,
				name: true,
				slug: true,
				isActive: true,
				createdAt: true,
				_count: {
					select: {
						products: true,
						orders: true,
					},
				},
			},
		}),
	]);

	// Calculate revenue (sum of all orders)
	const revenueResult = await db.order.aggregate({
		_sum: {
			totalAmount: true,
		},
	});

	return {
		totalTenants,
		activeTenants,
		totalUsers,
		totalProducts,
		totalOrders,
		totalRevenue: revenueResult._sum?.totalAmount?.toNumber() ?? 0,
		recentTenants: recentTenants.map((t) => ({
			id: t.id,
			name: t.name,
			slug: t.slug,
			isActive: t.isActive,
			createdAt: t.createdAt.toISOString(),
			_count: t._count,
		})),
	};
}

// Get all tenants with pagination and filtering
export async function getTenants(options?: {
	page?: number;
	limit?: number;
	search?: string;
	status?: string;
}) {
	await requirePlatformAdmin();

	const page = options?.page ?? 1;
	const limit = options?.limit ?? 20;
	const skip = (page - 1) * limit;

	const where: Record<string, unknown> = {};

	if (options?.search) {
		where.OR = [
			{ name: { contains: options.search, mode: "insensitive" } },
			{ slug: { contains: options.search, mode: "insensitive" } },
		];
	}

	if (options?.status && options.status !== "all") {
		// Map status string to isActive boolean
		if (options.status === "ACTIVE") {
			where.isActive = true;
		} else if (
			options.status === "INACTIVE" ||
			options.status === "SUSPENDED"
		) {
			where.isActive = false;
		}
	}

	const [tenants, total] = await Promise.all([
		db.tenant.findMany({
			where,
			skip,
			take: limit,
			orderBy: { createdAt: "desc" },
			include: {
				_count: {
					select: {
						products: true,
						orders: true,
						staff: true,
					},
				},
			},
		}),
		db.tenant.count({ where }),
	]);

	return {
		tenants: tenants.map((t) => ({
			id: t.id,
			name: t.name,
			slug: t.slug,
			isActive: t.isActive,
			email: t.email,
			createdAt: t.createdAt.toISOString(),
			updatedAt: t.updatedAt.toISOString(),
			productCount: t._count.products,
			orderCount: t._count.orders,
			staffCount: t._count.staff,
		})),
		pagination: {
			page,
			limit,
			total,
			totalPages: Math.ceil(total / limit),
		},
	};
}

// Update tenant status (activate/deactivate)
export async function updateTenantStatus(tenantId: string, isActive: boolean) {
	await requirePlatformAdmin();

	const tenant = await db.tenant.update({
		where: { id: tenantId },
		data: { isActive },
		select: {
			id: true,
			name: true,
			isActive: true,
		},
	});

	return tenant;
}

// Delete a tenant (with caution)
export async function deleteTenant(tenantId: string) {
	await requirePlatformAdmin();

	// First check if tenant exists and get info
	const tenant = await db.tenant.findUnique({
		where: { id: tenantId },
		select: {
			name: true,
			_count: {
				select: {
					orders: true,
					products: true,
				},
			},
		},
	});

	if (!tenant) {
		throw new Error("Tenant not found");
	}

	// Delete tenant (cascading deletes should handle related data)
	await db.tenant.delete({
		where: { id: tenantId },
	});

	return { success: true, name: tenant.name };
}

// Get all platform users with pagination
export async function getPlatformUsers(options?: {
	page?: number;
	limit?: number;
	search?: string;
	role?: string;
}) {
	await requirePlatformAdmin();

	const page = options?.page ?? 1;
	const limit = options?.limit ?? 20;
	const skip = (page - 1) * limit;

	const where: Record<string, unknown> = {};

	if (options?.search) {
		where.OR = [
			{ name: { contains: options.search, mode: "insensitive" } },
			{ email: { contains: options.search, mode: "insensitive" } },
		];
	}

	if (options?.role && options.role !== "all") {
		where.role = options.role;
	}

	const [users, total] = await Promise.all([
		db.user.findMany({
			where,
			skip,
			take: limit,
			orderBy: { createdAt: "desc" },
			select: {
				id: true,
				name: true,
				email: true,
				emailVerified: true,
				image: true,
				role: true,
				createdAt: true,
				updatedAt: true,
			},
		}),
		db.user.count({ where }),
	]);

	return {
		users: users.map((u) => ({
			...u,
			createdAt: u.createdAt.toISOString(),
			updatedAt: u.updatedAt.toISOString(),
		})),
		pagination: {
			page,
			limit,
			total,
			totalPages: Math.ceil(total / limit),
		},
	};
}

// Update user role
export async function updateUserRole(userId: string, role: "USER" | "ADMIN") {
	const admin = await requirePlatformAdmin();

	// Prevent removing own admin role
	if (userId === admin.id && role !== "ADMIN") {
		throw new Error("Cannot remove your own admin role");
	}

	const user = await db.user.update({
		where: { id: userId },
		data: { role },
		select: {
			id: true,
			name: true,
			email: true,
			role: true,
		},
	});

	return user;
}

// Delete a user
export async function deleteUser(userId: string) {
	const admin = await requirePlatformAdmin();

	// Prevent self-deletion
	if (userId === admin.id) {
		throw new Error("Cannot delete your own account");
	}

	const user = await db.user.findUnique({
		where: { id: userId },
		select: { name: true, email: true },
	});

	if (!user) {
		throw new Error("User not found");
	}

	await db.user.delete({
		where: { id: userId },
	});

	return { success: true, name: user.name, email: user.email };
}
