"use server";

import { revalidatePath } from "next/cache";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

// Get wishlist items for current customer
export async function getWishlistItems() {
	const customer = await getCurrentCustomer();
	const tenant = await getCurrentTenant();

	if (!customer || !tenant) {
		return [];
	}

	const items = await db.wishlistItem.findMany({
		where: {
			customerId: customer.customerId,
			tenantId: tenant.id,
		},
		include: {
			product: {
				include: {
					translations: {
						take: 1,
					},
					media: {
						orderBy: { order: "asc" },
						take: 1,
					},
					variants: {
						take: 1,
						orderBy: { price: "asc" },
					},
				},
			},
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	// Convert Decimal fields to numbers
	return items.map((item) => ({
		id: item.id,
		productId: item.productId,
		createdAt: item.createdAt,
		product: {
			id: item.product.id,
			slug: item.product.slug,
			name: item.product.translations[0]?.name ?? "Untitled",
			price: Number(item.product.price),
			compareAtPrice: item.product.compareAtPrice
				? Number(item.product.compareAtPrice)
				: null,
			imageUrl: item.product.media[0]?.url ?? null,
			status: item.product.status,
			stock: item.product.stock,
		},
	}));
}

// Check if a product is in wishlist
export async function isInWishlist(productId: string): Promise<boolean> {
	const customer = await getCurrentCustomer();
	const tenant = await getCurrentTenant();

	if (!customer || !tenant) {
		return false;
	}

	const item = await db.wishlistItem.findFirst({
		where: {
			customerId: customer.customerId,
			productId: productId,
			tenantId: tenant.id,
		},
	});

	return !!item;
}

// Add product to wishlist
export async function addToWishlist(productId: string) {
	const customer = await getCurrentCustomer();
	const tenant = await getCurrentTenant();

	if (!customer || !tenant) {
		return { success: false, error: "Not authenticated" };
	}

	// Check if product exists and belongs to tenant
	const product = await db.product.findFirst({
		where: {
			id: productId,
			tenantId: tenant.id,
			status: "ACTIVE",
			deletedAt: null,
		},
	});

	if (!product) {
		return { success: false, error: "Product not found" };
	}

	// Check if already in wishlist
	const existing = await db.wishlistItem.findFirst({
		where: {
			customerId: customer.customerId,
			productId: productId,
		},
	});

	if (existing) {
		return { success: true, message: "Already in wishlist" };
	}

	// Add to wishlist
	await db.wishlistItem.create({
		data: {
			customerId: customer.customerId,
			productId: productId,
			tenantId: tenant.id,
		},
	});

	revalidatePath("/wishlist");
	revalidatePath(`/products/${product.slug}`);

	return { success: true };
}

// Remove product from wishlist
export async function removeFromWishlist(productId: string) {
	const customer = await getCurrentCustomer();
	const tenant = await getCurrentTenant();

	if (!customer || !tenant) {
		return { success: false, error: "Not authenticated" };
	}

	await db.wishlistItem.deleteMany({
		where: {
			customerId: customer.customerId,
			productId: productId,
			tenantId: tenant.id,
		},
	});

	revalidatePath("/wishlist");

	return { success: true };
}

// Toggle wishlist status
export async function toggleWishlist(productId: string) {
	const customer = await getCurrentCustomer();
	const tenant = await getCurrentTenant();

	if (!customer || !tenant) {
		return { success: false, error: "Not authenticated", isInWishlist: false };
	}

	// Check if in wishlist
	const existing = await db.wishlistItem.findFirst({
		where: {
			customerId: customer.customerId,
			productId: productId,
			tenantId: tenant.id,
		},
	});

	if (existing) {
		// Remove from wishlist
		await db.wishlistItem.delete({
			where: { id: existing.id },
		});
		revalidatePath("/wishlist");
		return { success: true, isInWishlist: false };
	} else {
		// Check if product exists
		const product = await db.product.findFirst({
			where: {
				id: productId,
				tenantId: tenant.id,
				status: "ACTIVE",
				deletedAt: null,
			},
		});

		if (!product) {
			return {
				success: false,
				error: "Product not found",
				isInWishlist: false,
			};
		}

		// Add to wishlist
		await db.wishlistItem.create({
			data: {
				customerId: customer.customerId,
				productId: productId,
				tenantId: tenant.id,
			},
		});
		revalidatePath("/wishlist");
		return { success: true, isInWishlist: true };
	}
}

// Get wishlist count
export async function getWishlistCount(): Promise<number> {
	const customer = await getCurrentCustomer();
	const tenant = await getCurrentTenant();

	if (!customer || !tenant) {
		return 0;
	}

	return db.wishlistItem.count({
		where: {
			customerId: customer.customerId,
			tenantId: tenant.id,
		},
	});
}
