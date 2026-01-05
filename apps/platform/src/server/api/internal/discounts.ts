"use server";

import type { DiscountScope, DiscountType } from "@boostcart/database";
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

export async function getDiscounts() {
	const { tenantId } = await requireStoreAccess();

	const discounts = await db.discount.findMany({
		where: { tenantId },
		include: {
			_count: {
				select: {
					products: true,
					categories: true,
					brands: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return discounts;
}

export async function getDiscount(id: string) {
	const { tenantId } = await requireStoreAccess();

	const discount = await db.discount.findFirst({
		where: { id, tenantId },
		include: {
			products: {
				include: {
					product: true,
				},
			},
			categories: {
				include: {
					category: true,
				},
			},
			brands: {
				include: {
					brand: true,
				},
			},
		},
	});

	if (!discount) {
		throw new Error("Discount not found");
	}

	return discount;
}

interface DiscountInput {
	name: string;
	description?: string;
	type: DiscountType;
	value: number;
	scope: DiscountScope;
	startDate: Date;
	endDate?: Date;
	isActive?: boolean;
	productIds?: string[];
	categoryIds?: string[];
	brandIds?: string[];
}

export async function createDiscount(input: DiscountInput) {
	const { tenantId } = await requireStoreAccess();

	const { productIds, categoryIds, brandIds, ...discountData } = input;

	const discount = await db.discount.create({
		data: {
			...discountData,
			tenantId,
			products: productIds?.length
				? {
						create: productIds.map((productId) => ({ productId })),
					}
				: undefined,
			categories: categoryIds?.length
				? {
						create: categoryIds.map((categoryId) => ({ categoryId })),
					}
				: undefined,
			brands: brandIds?.length
				? {
						create: brandIds.map((brandId) => ({ brandId })),
					}
				: undefined,
		},
	});

	return discount;
}

export async function updateDiscount(
	id: string,
	input: Partial<DiscountInput>,
) {
	const { tenantId } = await requireStoreAccess();

	// Verify discount belongs to tenant
	const discount = await db.discount.findFirst({
		where: { id, tenantId },
	});

	if (!discount) {
		throw new Error("Discount not found or access denied");
	}

	const { productIds, categoryIds, brandIds, ...discountData } = input;

	// If scope-specific IDs are provided, update the relationships
	if (productIds !== undefined) {
		// Delete existing and create new
		await db.discountProduct.deleteMany({
			where: { discountId: id },
		});
		if (productIds.length > 0) {
			await db.discountProduct.createMany({
				data: productIds.map((productId) => ({
					discountId: id,
					productId,
				})),
			});
		}
	}

	if (categoryIds !== undefined) {
		await db.discountCategory.deleteMany({
			where: { discountId: id },
		});
		if (categoryIds.length > 0) {
			await db.discountCategory.createMany({
				data: categoryIds.map((categoryId) => ({
					discountId: id,
					categoryId,
				})),
			});
		}
	}

	if (brandIds !== undefined) {
		await db.discountBrand.deleteMany({
			where: { discountId: id },
		});
		if (brandIds.length > 0) {
			await db.discountBrand.createMany({
				data: brandIds.map((brandId) => ({
					discountId: id,
					brandId,
				})),
			});
		}
	}

	const updated = await db.discount.update({
		where: { id },
		data: discountData,
	});

	return updated;
}

export async function deleteDiscount(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify discount belongs to tenant
	const discount = await db.discount.findFirst({
		where: { id, tenantId },
	});

	if (!discount) {
		throw new Error("Discount not found or access denied");
	}

	await db.discount.delete({
		where: { id },
	});

	return { success: true };
}

export async function toggleDiscountStatus(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify discount belongs to tenant
	const discount = await db.discount.findFirst({
		where: { id, tenantId },
	});

	if (!discount) {
		throw new Error("Discount not found or access denied");
	}

	const updated = await db.discount.update({
		where: { id },
		data: { isActive: !discount.isActive },
	});

	return updated;
}
