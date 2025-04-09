"use server";

import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";
import { CategorySchema, CategorySchemaType } from "@/schemas";

export async function getCategories(
	level?: number,
	getAllCategoriesUptoLevel?: boolean,
) {
	try {
		let whereClause = {};

		if (level !== undefined) {
			if (getAllCategoriesUptoLevel) {
				whereClause = {
					level: {
						lte: level,
					},
				};
			} else {
				whereClause = {
					level: level,
				};
			}
		}

		const categories = await prisma.category.findMany({
			where: whereClause,
			orderBy: {
				createdAt: "desc",
			},
			include: {
				translations: true,
				parent: true,
				subcategories: {
					include: {
						parent: true,
						translations: true,
						subcategories: true,
						products: true,
					},
				},
				products: true,
			},
		});

		return categories;
	} catch {
		return [];
	}
}

export async function getCategoryById(id: string) {
	try {
		const category = await prisma.category.findUnique({
			where: { id },
			include: {
				translations: true,
				parent: true,
				subcategories: {
					include: {
						parent: true,
						translations: true,
						subcategories: true,
						products: true,
					},
				},
				products: true,
			},
		});

		return category;
	} catch {
		return null;
	}
}

export async function getCategoryBySlug(slug: string) {
	try {
		const category = await prisma.category.findUnique({
			where: { slug },
			include: {
				translations: true,
				parent: true,
				subcategories: {
					include: {
						parent: true,
						translations: true,
						subcategories: true,
						products: true,
					},
				},
				products: true,
			},
		});

		return category;
	} catch {
		return null;
	}
}

export const newCategory = async (data: CategorySchemaType) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const validatedFields = CategorySchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_data" };

	try {
		// Create post with translation in a transaction
		await prisma.$transaction(async (tx) => {
			// First create the post
			const category = await tx.category.create({
				data: {
					slug: validatedFields.data.slug,
					status: validatedFields.data.status,
					defaultName: validatedFields.data.defaultName,
					level: validatedFields.data.level,
					image: validatedFields.data.image || "",
					parentId: validatedFields.data.parentId || null,
				},
			});

			// If translations array exists, create each translation
			if (
				validatedFields.data.translations &&
				Array.isArray(validatedFields.data.translations)
			) {
				for (const translation of validatedFields.data.translations) {
					await tx.categoryTranslation.create({
						data: {
							categoryId: category.id,
							language: translation.language,
							name: translation.name,
							description: translation.description,
						},
					});
				}
			} else {
				// Create default translation with post data
				await tx.categoryTranslation.create({
					data: {
						categoryId: category.id,
						language: "en", // Default language
						name: validatedFields.data.defaultName,
						description: "",
					},
				});
			}

			return category;
		});

		return { success: "category_created" };
	} catch {
		return { error: "something_went_wrong" };
	}
};

export const editCategory = async (
	categoryId: string,
	data: CategorySchemaType,
) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const category = await prisma.category.findUnique({
		where: { id: categoryId },
	});

	if (!category) return { error: "category_not_found" };

	const validatedFields = CategorySchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_data" };

	try {
		// Update category and its translations in a transaction
		await prisma.$transaction(async (tx) => {
			// Update the category
			await tx.category.update({
				where: { id: categoryId },
				data: {
					defaultName: validatedFields.data.defaultName,
					slug: validatedFields.data.slug,
					image: validatedFields.data.image,
					status: validatedFields.data.status,
					level: validatedFields.data.level,
					parentId: validatedFields.data.parentId || null,
				},
			});

			// If translations array exists, update or create each translation
			if (
				validatedFields.data.translations &&
				Array.isArray(validatedFields.data.translations)
			) {
				for (const translation of validatedFields.data.translations) {
					await tx.categoryTranslation.upsert({
						where: {
							categoryId_language: {
								categoryId,
								language: translation.language,
							},
						},
						update: {
							name: translation.name,
							description: translation.description,
						},
						create: {
							categoryId,
							language: translation.language,
							name: translation.name,
							description: translation.description,
						},
					});
				}
			}
		});

		return { success: "category_updated" };
	} catch {
		return { error: "something_went_wrong" };
	}
};

export const deleteCategory = async (categoryId: string) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const category = await prisma.category.findUnique({
		where: { id: categoryId },
	});

	if (!category) return { error: "category_not_found" };

	try {
		await prisma.category.delete({
			where: { id: categoryId },
		});

		return { success: "category_deleted" };
	} catch {
		return { error: "something_went_wrong" };
	}
};
