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

export async function getBrands() {
	const { tenantId } = await requireStoreAccess();

	const brands = await db.brand.findMany({
		where: { tenantId },
		include: {
			_count: {
				select: {
					products: true,
				},
			},
		},
		orderBy: { name: "asc" },
	});

	return brands;
}

export async function getBrand(id: string) {
	const { tenantId } = await requireStoreAccess();

	const brand = await db.brand.findFirst({
		where: { id, tenantId },
		include: {
			products: {
				take: 10,
				orderBy: { createdAt: "desc" },
			},
			_count: {
				select: {
					products: true,
				},
			},
		},
	});

	if (!brand) {
		throw new Error("Brand not found");
	}

	return brand;
}

interface BrandInput {
	name: string;
	slug: string;
	description?: string;
	logoUrl?: string;
	websiteUrl?: string;
	isActive?: boolean;
	seoTitle?: string;
	seoDescription?: string;
}

export async function createBrand(input: BrandInput) {
	const { tenantId } = await requireStoreAccess();

	// Check if slug already exists for this tenant
	const existing = await db.brand.findFirst({
		where: {
			slug: input.slug,
			tenantId,
		},
	});

	if (existing) {
		throw new Error("Brand with this slug already exists");
	}

	const brand = await db.brand.create({
		data: {
			...input,
			tenantId,
		},
	});

	return brand;
}

export async function updateBrand(id: string, input: Partial<BrandInput>) {
	const { tenantId } = await requireStoreAccess();

	// Verify brand belongs to tenant
	const brand = await db.brand.findFirst({
		where: { id, tenantId },
	});

	if (!brand) {
		throw new Error("Brand not found or access denied");
	}

	// If slug is being changed, check for duplicates
	if (input.slug && input.slug !== brand.slug) {
		const existing = await db.brand.findFirst({
			where: {
				slug: input.slug,
				tenantId,
				id: { not: id },
			},
		});

		if (existing) {
			throw new Error("Brand with this slug already exists");
		}
	}

	const updated = await db.brand.update({
		where: { id },
		data: input,
	});

	return updated;
}

export async function deleteBrand(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify brand belongs to tenant
	const brand = await db.brand.findFirst({
		where: { id, tenantId },
		include: {
			_count: {
				select: {
					products: true,
				},
			},
		},
	});

	if (!brand) {
		throw new Error("Brand not found or access denied");
	}

	if (brand._count.products > 0) {
		throw new Error(
			"Cannot delete brand with products. Please remove or reassign products first.",
		);
	}

	await db.brand.delete({
		where: { id },
	});

	return { success: true };
}
