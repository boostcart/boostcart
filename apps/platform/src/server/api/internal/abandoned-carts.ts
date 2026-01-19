"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { requireAdminTenant } from "@/server/tenant";

async function requireStoreAccess() {
	const session = await auth();
	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const tenant = await requireAdminTenant();

	const staffRecord = await db.tenantStaff.findFirst({
		where: {
			userId: session.user.id,
			tenantId: tenant.id,
		},
	});

	if (!staffRecord) {
		throw new Error("Forbidden: No access to this store");
	}

	return {
		userId: session.user.id,
		tenantId: tenant.id,
		role: staffRecord.role,
	};
}

export async function getAbandonedCarts() {
	const { tenantId } = await requireStoreAccess();

	// A cart is considered abandoned if:
	// 1. It has items
	// 2. It was last updated more than 1 hour ago
	// 3. It hasn't been converted to an order
	const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

	const carts = await db.cart.findMany({
		where: {
			tenantId,
			updatedAt: {
				lt: oneHourAgo,
			},
			items: {
				some: {},
			},
		},
		include: {
			customer: {
				select: {
					id: true,
					email: true,
					firstName: true,
					lastName: true,
				},
			},
			items: {
				include: {
					product: {
						select: {
							id: true,
							slug: true,
							price: true,
							translations: {
								take: 1,
								select: {
									name: true,
								},
							},
						},
					},
					selectedVariant: {
						select: {
							id: true,
							sku: true,
							price: true,
						},
					},
				},
			},
		},
		orderBy: { updatedAt: "desc" },
	});

	return carts.map((cart) => ({
		id: cart.id,
		customer: cart.customer
			? {
					id: cart.customer.id,
					email: cart.customer.email,
					name:
						`${cart.customer.firstName ?? ""} ${cart.customer.lastName ?? ""}`.trim() ||
						"Unknown",
				}
			: null,
		sessionId: cart.sessionId,
		itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0),
		totalValue: cart.items.reduce((sum, item) => {
			const price = item.selectedVariant?.price ?? item.product.price;
			return sum + Number(price) * item.quantity;
		}, 0),
		items: cart.items.map((item) => ({
			id: item.id,
			productId: item.productId,
			productName: item.product.translations[0]?.name ?? item.product.slug,
			variantSku: item.selectedVariant?.sku,
			quantity: item.quantity,
			price: Number(item.selectedVariant?.price ?? item.product.price),
		})),
		abandonedAt: cart.updatedAt,
		createdAt: cart.createdAt,
	}));
}

export async function getAbandonedCart(id: string) {
	const { tenantId } = await requireStoreAccess();

	const cart = await db.cart.findFirst({
		where: { id, tenantId },
		include: {
			customer: {
				select: {
					id: true,
					email: true,
					firstName: true,
					lastName: true,
					phone: true,
				},
			},
			items: {
				include: {
					product: {
						select: {
							id: true,
							slug: true,
							price: true,
							translations: {
								take: 1,
								select: {
									name: true,
								},
							},
							media: {
								orderBy: { order: "asc" },
								take: 1,
								select: {
									url: true,
								},
							},
						},
					},
					selectedVariant: {
						select: {
							id: true,
							sku: true,
							price: true,
							options: true,
						},
					},
				},
			},
		},
	});

	if (!cart) {
		throw new Error("Cart not found");
	}

	return {
		id: cart.id,
		customer: cart.customer
			? {
					id: cart.customer.id,
					email: cart.customer.email,
					name:
						`${cart.customer.firstName ?? ""} ${cart.customer.lastName ?? ""}`.trim() ||
						"Unknown",
					phone: cart.customer.phone,
				}
			: null,
		sessionId: cart.sessionId,
		items: cart.items.map((item) => ({
			id: item.id,
			productId: item.productId,
			productName: item.product.translations[0]?.name ?? item.product.slug,
			productImage: item.product.media[0]?.url,
			variantSku: item.selectedVariant?.sku,
			variantOptions: item.selectedVariant
				? Object.entries(item.selectedVariant.options as Record<string, string>)
						.map(([key, value]) => `${key}: ${value}`)
						.join(", ")
				: null,
			quantity: item.quantity,
			price: Number(item.selectedVariant?.price ?? item.product.price),
		})),
		totalValue: cart.items.reduce((sum, item) => {
			const price = item.selectedVariant?.price ?? item.product.price;
			return sum + Number(price) * item.quantity;
		}, 0),
		abandonedAt: cart.updatedAt,
		createdAt: cart.createdAt,
	};
}

export async function deleteAbandonedCart(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify cart belongs to tenant
	const cart = await db.cart.findFirst({
		where: { id, tenantId },
	});

	if (!cart) {
		throw new Error("Cart not found or access denied");
	}

	await db.cart.delete({
		where: { id },
	});

	return { success: true };
}

export async function getAbandonedCartStats() {
	const { tenantId } = await requireStoreAccess();

	const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
	const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
	const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

	// Get all abandoned carts
	const abandonedCarts = await db.cart.findMany({
		where: {
			tenantId,
			updatedAt: {
				lt: oneHourAgo,
			},
			items: {
				some: {},
			},
		},
		include: {
			items: {
				include: {
					product: {
						select: {
							price: true,
						},
					},
					selectedVariant: {
						select: {
							price: true,
						},
					},
				},
			},
		},
	});

	// Calculate stats
	const totalCarts = abandonedCarts.length;
	const totalValue = abandonedCarts.reduce((sum, cart) => {
		return (
			sum +
			cart.items.reduce((itemSum, item) => {
				const price = item.selectedVariant?.price ?? item.product.price;
				return itemSum + Number(price) * item.quantity;
			}, 0)
		);
	}, 0);

	const last24Hours = abandonedCarts.filter(
		(cart) => cart.updatedAt >= oneDayAgo,
	).length;
	const lastWeek = abandonedCarts.filter(
		(cart) => cart.updatedAt >= oneWeekAgo,
	).length;

	return {
		totalCarts,
		totalValue,
		last24Hours,
		lastWeek,
		averageValue: totalCarts > 0 ? totalValue / totalCarts : 0,
	};
}
