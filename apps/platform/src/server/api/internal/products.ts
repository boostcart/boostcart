"use server";

import { revalidatePath } from "next/cache";
import {
	type CreateProductInput,
	CreateProductSchema,
	type ProductFilterInput,
	ProductFilterSchema,
	type UpdateProductInput,
	UpdateProductSchema,
} from "@/schemas/product";
import { db } from "@/server/db";
import { cleanupProductMedia } from "@/server/services/media-cleanup";
import {
	requireViewPermission,
	requireManagePermission,
	requireDeletePermission,
} from "@/server/api/permissions";

// Helper to check access and get tenant context for admin operations (read access)
async function requireStoreAccess() {
	const context = await requireViewPermission("products");
	return context;
}

// Helper for write operations (create/update)
async function requireProductManageAccess() {
	const context = await requireManagePermission("products");
	return context;
}

// Helper for delete operations
async function requireProductDeleteAccess() {
	const context = await requireDeletePermission("products");
	return context;
}

// Get products with filters
export async function getProducts(filters?: ProductFilterInput) {
	const { tenantId } = await requireStoreAccess();

	const validatedFilters = filters
		? ProductFilterSchema.parse(filters)
		: { page: 1, pageSize: 20 };

	const {
		page,
		pageSize,
		search,
		status,
		categoryIds,
		brandIds,
		stockStatus,
		priceMin,
		priceMax,
		sortBy,
	} = validatedFilters;

	const where: Record<string, unknown> = {
		tenantId, // Filter by current tenant
		deletedAt: null, // Only active products
	};

	// Search
	if (search) {
		where.OR = [
			{ sku: { contains: search, mode: "insensitive" } },
			{
				translations: {
					some: { name: { contains: search, mode: "insensitive" } },
				},
			},
		];
	}

	// Status filter
	if (status && status.length > 0) {
		where.status = { in: status };
	}

	// Category filter
	if (categoryIds && categoryIds.length > 0) {
		where.categoryId = { in: categoryIds };
	}

	// Brand filter
	if (brandIds && brandIds.length > 0) {
		where.brandId = { in: brandIds };
	}

	// Stock status filter
	if (stockStatus) {
		switch (stockStatus) {
			case "in_stock":
				where.OR = [{ trackStock: false }, { stock: { gt: 10 } }];
				break;
			case "low_stock":
				where.trackStock = true;
				where.stock = { gt: 0, lte: 10 };
				break;
			case "out_of_stock":
				where.trackStock = true;
				where.stock = 0;
				break;
		}
	}

	// Price filter
	if (priceMin !== undefined || priceMax !== undefined) {
		where.price = {};
		if (priceMin !== undefined) {
			(where.price as Record<string, number>).gte = priceMin;
		}
		if (priceMax !== undefined) {
			(where.price as Record<string, number>).lte = priceMax;
		}
	}

	// Sorting
	const orderBy: Record<string, string>[] = [];
	if (sortBy) {
		switch (sortBy) {
			case "name_asc":
			case "name_desc":
				// For name sorting, we need to sort by translation
				// This is a workaround - ideally we'd join and sort
				break;
			case "price_asc":
				orderBy.push({ price: "asc" });
				break;
			case "price_desc":
				orderBy.push({ price: "desc" });
				break;
			case "created_asc":
				orderBy.push({ createdAt: "asc" });
				break;
			case "created_desc":
				orderBy.push({ createdAt: "desc" });
				break;
			case "stock_asc":
				orderBy.push({ stock: "asc" });
				break;
			case "stock_desc":
				orderBy.push({ stock: "desc" });
				break;
		}
	}

	if (orderBy.length === 0) {
		orderBy.push({ createdAt: "desc" });
	}

	const [products, total] = await Promise.all([
		db.product.findMany({
			where,
			orderBy,
			skip: (page - 1) * pageSize,
			take: pageSize,
			include: {
				category: {
					include: {
						translations: {
							where: { localeId: "en" },
							take: 1,
						},
					},
				},
				brand: {
					include: {
						translations: {
							where: { localeId: "en" },
							take: 1,
						},
					},
				},
				translations: {
					where: { localeId: "en" },
					take: 1,
				},
				media: {
					orderBy: { order: "asc" },
					take: 1,
				},
			},
		}),
		db.product.count({ where }),
	]);

	return {
		products: products.map((p) => ({
			id: p.id,
			slug: p.slug,
			status: p.status,
			price: p.price,
			compareAtPrice: p.compareAtPrice,
			sku: p.sku,
			trackStock: p.trackStock,
			stock: p.stock,
			name: p.translations[0]?.name ?? "Untitled",
			description: p.translations[0]?.description,
			categoryId: p.categoryId,
			categoryName: p.category?.translations[0]?.name ?? "Uncategorized",
			brandId: p.brandId,
			brandName: p.brand?.translations[0]?.name,
			imageUrl: p.media[0]?.url,
			createdAt: p.createdAt,
			updatedAt: p.updatedAt,
		})),
		pagination: {
			page,
			pageSize,
			total,
			totalPages: Math.ceil(total / pageSize),
		},
	};
}

// Get single product by ID
export async function getProduct(productId: string) {
	const { tenantId } = await requireStoreAccess();

	const product = await db.product.findFirst({
		where: { id: productId, tenantId },
		include: {
			translations: true,
			media: { orderBy: { order: "asc" } },
			variants: {
				include: {
					optionMeta: true,
				},
			},
			shippingInfo: true,
			collectionProducts: {
				include: {
					collection: {
						include: {
							translations: {
								where: { localeId: "en" },
								take: 1,
							},
						},
					},
				},
			},
		},
	});

	if (!product) {
		throw new Error("Product not found");
	}

	const englishTranslation = product.translations.find(
		(t: { localeId: string }) => t.localeId === "en",
	);

	return {
		id: product.id,
		slug: product.slug,
		status: product.status,
		categoryId: product.categoryId,
		brandId: product.brandId,
		price: product.price,
		compareAtPrice: product.compareAtPrice,
		costPerItem: product.costPerItem,
		sku: product.sku,
		trackStock: product.trackStock,
		stock: product.stock,
		lowStockThreshold: product.lowStockThreshold,
		purchaseType: product.purchaseType,
		subscriptionDiscountPercent: product.subscriptionDiscountPercent,
		subscriptionIntervals: product.subscriptionIntervals,
		preOrderReleaseDate: product.preOrderReleaseDate,
		preOrderDepositPercent: product.preOrderDepositPercent,
		unitPriceAmount: product.unitPriceAmount,
		unitPriceMeasurement: product.unitPriceMeasurement,
		unitPriceBaseAmount: product.unitPriceBaseAmount,
		unitPriceBaseMeasurement: product.unitPriceBaseMeasurement,
		name: englishTranslation?.name ?? "",
		description: englishTranslation?.description ?? "",
		media: product.media.map(
			(m: {
				id: string;
				url: string;
				mediaType: string;
				altText: string | null;
				order: number;
			}) => ({
				id: m.id,
				url: m.url,
				mediaType: m.mediaType,
				altText: m.altText,
				order: m.order,
			}),
		),
		variants: product.variants.map(
			(v: {
				id: string;
				sku: string | null;
				price: unknown;
				priceAdjustment: unknown;
				stock: number | null;
				imageUrl: string | null;
				options: unknown;
				optionMeta: unknown[];
			}) => ({
				id: v.id,
				sku: v.sku,
				price: v.price,
				priceAdjustment: v.priceAdjustment,
				stock: v.stock,
				imageUrl: v.imageUrl,
				options: v.options as Record<string, string>,
				optionMeta: v.optionMeta,
			}),
		),
		shippingInfo: product.shippingInfo
			? {
					packageType: product.shippingInfo.packageType,
					packagingWeightKg: product.shippingInfo.packagingWeightKg,
					packagingLengthCm: product.shippingInfo.packagingLengthCm,
					packagingWidthCm: product.shippingInfo.packagingWidthCm,
					packagingHeightCm: product.shippingInfo.packagingHeightCm,
					productWeightKg: product.shippingInfo.productWeightKg,
					productLengthCm: product.shippingInfo.productLengthCm,
					productWidthCm: product.shippingInfo.productWidthCm,
					productHeightCm: product.shippingInfo.productHeightCm,
				}
			: null,
		seo: {
			metaTitle: englishTranslation?.metaTitle,
			metaDescription: englishTranslation?.metaDescription,
			slug: product.slug,
		},
		collectionIds: product.collectionProducts.map(
			(c: { collectionId: string }) => c.collectionId,
		),
	};
}

// Create product
export async function createProduct(input: CreateProductInput) {
	const { tenantId } = await requireProductManageAccess();

	const validatedInput = CreateProductSchema.parse(input);

	const product = await db.$transaction(async (tx) => {
		// Create the product
		const newProduct = await tx.product.create({
			data: {
				tenantId,
				slug: validatedInput.slug,
				status: validatedInput.status,
				categoryId: validatedInput.categoryId,
				brandId: validatedInput.brandId || null,
				price: validatedInput.price,
				compareAtPrice: validatedInput.compareAtPrice,
				costPerItem: validatedInput.costPerItem,
				sku: validatedInput.sku,
				trackStock: validatedInput.trackStock,
				stock: validatedInput.stock,
				lowStockThreshold: validatedInput.lowStockThreshold,
				// Purchase options
				purchaseType: validatedInput.purchaseOptions?.type ?? "ONE_TIME",
				subscriptionDiscountPercent:
					validatedInput.purchaseOptions?.subscriptionDiscount,
				subscriptionIntervals:
					validatedInput.purchaseOptions?.subscriptionIntervals ?? [],
				preOrderReleaseDate:
					validatedInput.purchaseOptions?.preOrderReleaseDate,
				preOrderDepositPercent:
					validatedInput.purchaseOptions?.preOrderDepositPercent,
				// Unit pricing
				unitPriceAmount: validatedInput.unitPrice?.unitPriceAmount,
				unitPriceMeasurement: validatedInput.unitPrice?.unitPriceMeasurement,
				unitPriceBaseAmount: validatedInput.unitPrice?.unitPriceBaseAmount,
				unitPriceBaseMeasurement:
					validatedInput.unitPrice?.unitPriceBaseMeasurement,
			},
		});

		// Create translation (English by default)
		await tx.productTranslation.create({
			data: {
				productId: newProduct.id,
				localeId: "en",
				name: validatedInput.name,
				description: validatedInput.description,
				metaTitle: validatedInput.seo?.metaTitle,
				metaDescription: validatedInput.seo?.metaDescription,
			},
		});

		// Create media
		if (validatedInput.media && validatedInput.media.length > 0) {
			await tx.productMedia.createMany({
				data: validatedInput.media.map((m, index) => ({
					productId: newProduct.id,
					url: m.url,
					mediaType: m.mediaType,
					altText: m.altText,
					order: m.order ?? index,
				})),
			});
		}

		// Create variants
		if (validatedInput.variants && validatedInput.variants.length > 0) {
			for (const variant of validatedInput.variants) {
				const createdVariant = await tx.productVariant.create({
					data: {
						productId: newProduct.id,
						sku: variant.sku,
						price: variant.price,
						priceAdjustment: variant.priceAdjustment ?? 0,
						stock: variant.stock,
						imageUrl: variant.imageUrl,
						options: variant.options,
					},
				});

				// Create variant option meta (for colors)
				if (variant.optionMeta && variant.optionMeta.length > 0) {
					await tx.variantOptionMeta.createMany({
						data: variant.optionMeta.map((meta) => ({
							variantId: createdVariant.id,
							optionName: meta.optionName,
							hexColor: meta.hexColor,
						})),
					});
				}
			}
		}

		// Create shipping info
		if (validatedInput.shippingInfo) {
			await tx.productShippingInfo.create({
				data: {
					productId: newProduct.id,
					packageType: validatedInput.shippingInfo.packageType,
					packagingWeightKg: validatedInput.shippingInfo.weight,
					packagingLengthCm: validatedInput.shippingInfo.packageLength,
					packagingWidthCm: validatedInput.shippingInfo.packageWidth,
					packagingHeightCm: validatedInput.shippingInfo.packageHeight,
					productWeightKg: validatedInput.shippingInfo.productWeight,
					productLengthCm: validatedInput.shippingInfo.productLength,
					productWidthCm: validatedInput.shippingInfo.productWidth,
					productHeightCm: validatedInput.shippingInfo.productHeight,
				},
			});
		}

		// Link to collections
		if (
			validatedInput.collectionIds &&
			validatedInput.collectionIds.length > 0
		) {
			await tx.collectionProduct.createMany({
				data: validatedInput.collectionIds.map((collectionId) => ({
					productId: newProduct.id,
					collectionId,
				})),
			});
		}

		return newProduct;
	});

	revalidatePath("/admin/products");

	return { success: true, productId: product.id };
}

// Update product
export async function updateProduct(input: UpdateProductInput) {
	const { tenantId } = await requireProductManageAccess();

	const validatedInput = UpdateProductSchema.parse(input);

	// Verify product belongs to tenant
	const existingProduct = await db.product.findFirst({
		where: { id: validatedInput.id, tenantId },
	});
	if (!existingProduct) {
		throw new Error("Product not found");
	}

	await db.$transaction(async (tx) => {
		// Update the main product
		await tx.product.update({
			where: { id: validatedInput.id },
			data: {
				...(validatedInput.slug && { slug: validatedInput.slug }),
				...(validatedInput.status && { status: validatedInput.status }),
				...(validatedInput.categoryId && {
					categoryId: validatedInput.categoryId,
				}),
				brandId: validatedInput.brandId || null,
				...(validatedInput.price !== undefined && {
					price: validatedInput.price,
				}),
				compareAtPrice: validatedInput.compareAtPrice,
				costPerItem: validatedInput.costPerItem,
				sku: validatedInput.sku,
				trackStock: validatedInput.trackStock,
				stock: validatedInput.stock,
				lowStockThreshold: validatedInput.lowStockThreshold,
				// Purchase options
				...(validatedInput.purchaseOptions && {
					purchaseType: validatedInput.purchaseOptions.type,
					subscriptionDiscountPercent:
						validatedInput.purchaseOptions.subscriptionDiscount,
					subscriptionIntervals:
						validatedInput.purchaseOptions.subscriptionIntervals ?? [],
					preOrderReleaseDate:
						validatedInput.purchaseOptions.preOrderReleaseDate,
					preOrderDepositPercent:
						validatedInput.purchaseOptions.preOrderDepositPercent,
				}),
				// Unit pricing
				...(validatedInput.unitPrice && {
					unitPriceAmount: validatedInput.unitPrice.unitPriceAmount,
					unitPriceMeasurement: validatedInput.unitPrice.unitPriceMeasurement,
					unitPriceBaseAmount: validatedInput.unitPrice.unitPriceBaseAmount,
					unitPriceBaseMeasurement:
						validatedInput.unitPrice.unitPriceBaseMeasurement,
				}),
			},
		});

		// Update translation
		if (
			validatedInput.name ||
			validatedInput.description ||
			validatedInput.seo
		) {
			await tx.productTranslation.upsert({
				where: {
					productId_localeId: {
						productId: validatedInput.id,
						localeId: "en",
					},
				},
				update: {
					...(validatedInput.name && { name: validatedInput.name }),
					...(validatedInput.description !== undefined && {
						description: validatedInput.description,
					}),
					...(validatedInput.seo?.metaTitle !== undefined && {
						metaTitle: validatedInput.seo.metaTitle,
					}),
					...(validatedInput.seo?.metaDescription !== undefined && {
						metaDescription: validatedInput.seo.metaDescription,
					}),
				},
				create: {
					productId: validatedInput.id,
					localeId: "en",
					name: validatedInput.name ?? "Untitled",
					description: validatedInput.description,
					metaTitle: validatedInput.seo?.metaTitle,
					metaDescription: validatedInput.seo?.metaDescription,
				},
			});
		}

		// Update media (replace all)
		if (validatedInput.media) {
			await tx.productMedia.deleteMany({
				where: { productId: validatedInput.id },
			});

			if (validatedInput.media.length > 0) {
				await tx.productMedia.createMany({
					data: validatedInput.media.map((m, index) => ({
						productId: validatedInput.id,
						url: m.url,
						mediaType: m.mediaType,
						altText: m.altText,
						order: m.order ?? index,
					})),
				});
			}
		}

		// Update variants (replace all)
		if (validatedInput.variants) {
			// Delete existing variants and their meta
			const existingVariants = await tx.productVariant.findMany({
				where: { productId: validatedInput.id },
				select: { id: true },
			});

			for (const v of existingVariants) {
				await tx.variantOptionMeta.deleteMany({ where: { variantId: v.id } });
			}

			await tx.productVariant.deleteMany({
				where: { productId: validatedInput.id },
			});

			// Create new variants
			for (const variant of validatedInput.variants) {
				const createdVariant = await tx.productVariant.create({
					data: {
						productId: validatedInput.id,
						sku: variant.sku,
						price: variant.price,
						priceAdjustment: variant.priceAdjustment ?? 0,
						stock: variant.stock,
						imageUrl: variant.imageUrl,
						options: variant.options,
					},
				});

				if (variant.optionMeta && variant.optionMeta.length > 0) {
					await tx.variantOptionMeta.createMany({
						data: variant.optionMeta.map((meta) => ({
							variantId: createdVariant.id,
							optionName: meta.optionName,
							hexColor: meta.hexColor,
						})),
					});
				}
			}
		}

		// Update shipping info
		if (validatedInput.shippingInfo) {
			await tx.productShippingInfo.upsert({
				where: { productId: validatedInput.id },
				update: {
					packageType: validatedInput.shippingInfo.packageType,
					packagingWeightKg: validatedInput.shippingInfo.weight,
					packagingLengthCm: validatedInput.shippingInfo.packageLength,
					packagingWidthCm: validatedInput.shippingInfo.packageWidth,
					packagingHeightCm: validatedInput.shippingInfo.packageHeight,
					productWeightKg: validatedInput.shippingInfo.productWeight,
					productLengthCm: validatedInput.shippingInfo.productLength,
					productWidthCm: validatedInput.shippingInfo.productWidth,
					productHeightCm: validatedInput.shippingInfo.productHeight,
				},
				create: {
					productId: validatedInput.id,
					packageType: validatedInput.shippingInfo.packageType,
					packagingWeightKg: validatedInput.shippingInfo.weight,
					packagingLengthCm: validatedInput.shippingInfo.packageLength,
					packagingWidthCm: validatedInput.shippingInfo.packageWidth,
					packagingHeightCm: validatedInput.shippingInfo.packageHeight,
					productWeightKg: validatedInput.shippingInfo.productWeight,
					productLengthCm: validatedInput.shippingInfo.productLength,
					productWidthCm: validatedInput.shippingInfo.productWidth,
					productHeightCm: validatedInput.shippingInfo.productHeight,
				},
			});
		}

		// Update collection links
		if (validatedInput.collectionIds) {
			await tx.collectionProduct.deleteMany({
				where: { productId: validatedInput.id },
			});

			if (validatedInput.collectionIds.length > 0) {
				await tx.collectionProduct.createMany({
					data: validatedInput.collectionIds.map((collectionId) => ({
						productId: validatedInput.id,
						collectionId,
					})),
				});
			}
		}
	});

	revalidatePath("/admin/products");
	revalidatePath(`/admin/products/${validatedInput.id}/edit`);

	return { success: true };
}

// Soft delete product (move to trash)
export async function deleteProduct(productId: string) {
	const { tenantId } = await requireProductManageAccess();

	// Verify product belongs to tenant
	const product = await db.product.findFirst({
		where: { id: productId, tenantId },
	});
	if (!product) {
		throw new Error("Product not found");
	}

	await db.product.update({
		where: { id: productId },
		data: { deletedAt: new Date() },
	});

	revalidatePath("/admin/products");
	revalidatePath("/admin/products/trash");

	return { success: true };
}

// Restore product from trash
export async function restoreProduct(productId: string) {
	const { tenantId } = await requireProductManageAccess();

	// Verify product belongs to tenant
	const product = await db.product.findFirst({
		where: { id: productId, tenantId },
	});
	if (!product) {
		throw new Error("Product not found");
	}

	await db.product.update({
		where: { id: productId },
		data: { deletedAt: null },
	});

	revalidatePath("/admin/products");
	revalidatePath("/admin/products/trash");

	return { success: true };
}

// Bulk restore products
export async function restoreProducts(productIds: string[]) {
	const { tenantId } = await requireStoreAccess();

	await db.product.updateMany({
		where: { id: { in: productIds }, tenantId },
		data: { deletedAt: null },
	});

	revalidatePath("/admin/products");
	revalidatePath("/admin/products/trash");

	return { success: true };
}

// Permanently delete product
export async function permanentlyDeleteProduct(productId: string) {
	const { tenantId } = await requireProductDeleteAccess();

	// Verify product belongs to tenant and get media for cleanup
	const product = await db.product.findFirst({
		where: { id: productId, tenantId },
		include: {
			media: {
				select: { url: true },
			},
		},
	});
	if (!product) {
		throw new Error("Product not found");
	}

	// Collect media URLs for cleanup
	const mediaUrls = product.media.map((m) => m.url);

	await db.$transaction(async (tx) => {
		// Delete related data
		const variants = await tx.productVariant.findMany({
			where: { productId },
			select: { id: true },
		});

		for (const v of variants) {
			await tx.variantOptionMeta.deleteMany({ where: { variantId: v.id } });
		}

		await tx.productVariant.deleteMany({ where: { productId } });
		await tx.productMedia.deleteMany({ where: { productId } });
		await tx.productShippingInfo.deleteMany({ where: { productId } });
		await tx.productTranslation.deleteMany({ where: { productId } });
		await tx.collectionProduct.deleteMany({ where: { productId } });

		// Finally delete the product
		await tx.product.delete({ where: { id: productId } });
	});

	// Cleanup media files from R2 (after DB deletion)
	if (mediaUrls.length > 0) {
		await cleanupProductMedia(mediaUrls, tenantId);
	}

	revalidatePath("/admin/products/trash");

	return { success: true };
}

// Bulk permanently delete products
export async function permanentlyDeleteProducts(productIds: string[]) {
	await requireProductDeleteAccess(); // Verify delete permission

	for (const productId of productIds) {
		await permanentlyDeleteProduct(productId);
	}

	return { success: true };
}

// Get trashed products
export async function getTrashedProducts() {
	const { tenantId } = await requireStoreAccess();

	const products = await db.product.findMany({
		where: {
			tenantId,
			deletedAt: { not: null },
		},
		orderBy: { deletedAt: "desc" },
		include: {
			translations: {
				where: { localeId: "en" },
				take: 1,
			},
			media: {
				orderBy: { order: "asc" },
				take: 1,
			},
		},
	});

	return products.map((p) => ({
		id: p.id,
		name: p.translations[0]?.name ?? "Untitled",
		sku: p.sku,
		price: p.price,
		deletedAt: p.deletedAt ?? new Date(),
		imageUrl: p.media[0]?.url ?? null,
	}));
}

// Clean up old trashed products (called by cron job)
export async function cleanupTrashedProducts(retentionDays = 30) {
	// This function should be called by a cron job
	// Don't require admin - it runs as a system task

	const cutoffDate = new Date();
	cutoffDate.setDate(cutoffDate.getDate() - retentionDays);

	const oldProducts = await db.product.findMany({
		where: {
			deletedAt: { lte: cutoffDate },
		},
		select: { id: true },
	});

	for (const product of oldProducts) {
		await permanentlyDeleteProduct(product.id);
	}

	return { deleted: oldProducts.length };
}
