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

export async function getCollections() {
	const { tenantId } = await requireStoreAccess();

	const collections = await db.collection.findMany({
		where: { tenantId },
		include: {
			_count: {
				select: {
					products: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return collections;
}

export async function getCollection(id: string) {
	const { tenantId } = await requireStoreAccess();

	const collection = await db.collection.findFirst({
		where: { id, tenantId },
		include: {
			products: {
				take: 20,
				include: {
					product: true,
				},
			},
			_count: {
				select: {
					products: true,
				},
			},
		},
	});

	if (!collection) {
		throw new Error("Collection not found");
	}

	return collection;
}

interface CollectionInput {
	name: string;
	slug: string;
	description?: string;
	imageUrl?: string;
	isActive?: boolean;
	isFeatured?: boolean;
	sortOrder?: number;
	seoTitle?: string;
	seoDescription?: string;
}

export async function createCollection(input: CollectionInput) {
	const { tenantId } = await requireStoreAccess();

	// Check if slug already exists for this tenant
	const existing = await db.collection.findFirst({
		where: {
			slug: input.slug,
			tenantId,
		},
	});

	if (existing) {
		throw new Error("Collection with this slug already exists");
	}

	const collection = await db.collection.create({
		data: {
			...input,
			tenantId,
		},
	});

	return collection;
}

export async function updateCollection(
	id: string,
	input: Partial<CollectionInput>,
) {
	const { tenantId } = await requireStoreAccess();

	// Verify collection belongs to tenant
	const collection = await db.collection.findFirst({
		where: { id, tenantId },
	});

	if (!collection) {
		throw new Error("Collection not found or access denied");
	}

	// If slug is being changed, check for duplicates
	if (input.slug && input.slug !== collection.slug) {
		const existing = await db.collection.findFirst({
			where: {
				slug: input.slug,
				tenantId,
				id: { not: id },
			},
		});

		if (existing) {
			throw new Error("Collection with this slug already exists");
		}
	}

	const updated = await db.collection.update({
		where: { id },
		data: input,
	});

	return updated;
}

export async function deleteCollection(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify collection belongs to tenant
	const collection = await db.collection.findFirst({
		where: { id, tenantId },
	});

	if (!collection) {
		throw new Error("Collection not found or access denied");
	}

	await db.collection.delete({
		where: { id },
	});

	return { success: true };
}

export async function addProductsToCollection(
	collectionId: string,
	productIds: string[],
) {
	const { tenantId } = await requireStoreAccess();

	// Verify collection belongs to tenant
	const collection = await db.collection.findFirst({
		where: { id: collectionId, tenantId },
	});

	if (!collection) {
		throw new Error("Collection not found or access denied");
	}

	// Verify all products belong to tenant
	const products = await db.product.findMany({
		where: {
			id: { in: productIds },
			tenantId,
		},
	});

	if (products.length !== productIds.length) {
		throw new Error("One or more products not found or access denied");
	}

	// Add products to collection
	await db.collectionProduct.createMany({
		data: productIds.map((productId) => ({
			collectionId,
			productId,
		})),
		skipDuplicates: true,
	});

	return { success: true };
}

export async function removeProductsFromCollection(
	collectionId: string,
	productIds: string[],
) {
	const { tenantId } = await requireStoreAccess();

	// Verify collection belongs to tenant
	const collection = await db.collection.findFirst({
		where: { id: collectionId, tenantId },
	});

	if (!collection) {
		throw new Error("Collection not found or access denied");
	}

	await db.collectionProduct.deleteMany({
		where: {
			collectionId,
			productId: { in: productIds },
		},
	});

	return { success: true };
}
