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

export async function getCategories() {
	const { tenantId } = await requireStoreAccess();

	const categories = await db.category.findMany({
		where: { tenantId },
		include: {
			parent: {
				include: {
					translations: true,
				},
			},
			translations: true,
			_count: {
				select: {
					products: true,
					subCategories: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return categories;
}

export async function getCategory(id: string) {
	const { tenantId } = await requireStoreAccess();

	const category = await db.category.findFirst({
		where: { id, tenantId },
		include: {
			parent: {
				include: {
					translations: true,
				},
			},
			subCategories: {
				include: {
					translations: true,
				},
			},
			translations: true,
			products: {
				take: 10,
				orderBy: { createdAt: "desc" },
			},
			_count: {
				select: {
					products: true,
					subCategories: true,
				},
			},
		},
	});

	if (!category) {
		throw new Error("Category not found");
	}

	return category;
}

interface CategoryInput {
	name: string;
	slug: string;
	description?: string;
	parentId?: string;
	iconUrl?: string;
	coverImageUrl?: string;
}

async function getDefaultLocale() {
	let locale = await db.locale.findFirst({
		where: { isDefault: true },
	});

	if (!locale) {
		// Create default locale if not exists
		locale = await db.locale.upsert({
			where: { code: "bg-BG" },
			create: { code: "bg-BG", name: "Български", isDefault: true },
			update: {},
		});
	}

	return locale;
}

export async function createCategory(input: CategoryInput) {
	const { tenantId } = await requireStoreAccess();
	const locale = await getDefaultLocale();

	// Check if slug already exists for this tenant
	const existing = await db.category.findFirst({
		where: {
			slug: input.slug,
			tenantId,
		},
	});

	if (existing) {
		throw new Error("Category with this slug already exists");
	}

	// If parentId provided, verify it belongs to tenant
	if (input.parentId) {
		const parent = await db.category.findFirst({
			where: { id: input.parentId, tenantId },
		});

		if (!parent) {
			throw new Error("Parent category not found or access denied");
		}
	}

	const category = await db.category.create({
		data: {
			slug: input.slug,
			iconUrl: input.iconUrl,
			coverImageUrl: input.coverImageUrl,
			parentId: input.parentId,
			tenantId,
			translations: {
				create: {
					localeId: locale.id,
					name: input.name,
					description: input.description,
				},
			},
		},
		include: {
			translations: true,
		},
	});

	return category;
}

export async function updateCategory(
	id: string,
	input: Partial<CategoryInput>,
) {
	const { tenantId } = await requireStoreAccess();
	const locale = await getDefaultLocale();

	// Verify category belongs to tenant
	const category = await db.category.findFirst({
		where: { id, tenantId },
		include: { translations: true },
	});

	if (!category) {
		throw new Error("Category not found or access denied");
	}

	// If slug is being changed, check for duplicates
	if (input.slug && input.slug !== category.slug) {
		const existing = await db.category.findFirst({
			where: {
				slug: input.slug,
				tenantId,
				id: { not: id },
			},
		});

		if (existing) {
			throw new Error("Category with this slug already exists");
		}
	}

	// If parentId is being changed, verify it belongs to tenant
	if (input.parentId) {
		const parent = await db.category.findFirst({
			where: { id: input.parentId, tenantId },
		});

		if (!parent) {
			throw new Error("Parent category not found or access denied");
		}

		// Prevent circular references
		if (input.parentId === id) {
			throw new Error("Category cannot be its own parent");
		}
	}

	// Update category and translations
	const updated = await db.category.update({
		where: { id },
		data: {
			slug: input.slug,
			iconUrl: input.iconUrl,
			coverImageUrl: input.coverImageUrl,
			parentId: input.parentId,
			translations: {
				upsert: {
					where: {
						categoryId_localeId: {
							categoryId: id,
							localeId: locale.id,
						},
					},
					create: {
						localeId: locale.id,
						name: input.name ?? "",
						description: input.description,
					},
					update: {
						name: input.name,
						description: input.description,
					},
				},
			},
		},
		include: {
			translations: true,
		},
	});

	return updated;
}

export async function deleteCategory(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify category belongs to tenant
	const category = await db.category.findFirst({
		where: { id, tenantId },
		include: {
			_count: {
				select: {
					products: true,
					subCategories: true,
				},
			},
		},
	});

	if (!category) {
		throw new Error("Category not found or access denied");
	}

	if (category._count.products > 0) {
		throw new Error(
			"Cannot delete category with products. Please remove or reassign products first.",
		);
	}

	if (category._count.subCategories > 0) {
		throw new Error(
			"Cannot delete category with subcategories. Please delete or reassign subcategories first.",
		);
	}

	await db.category.delete({
		where: { id },
	});

	return { success: true };
}
