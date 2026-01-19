"use server";

import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

export interface StorefrontProduct {
	id: string;
	slug: string;
	name: string;
	description: string | null;
	price: number;
	compareAtPrice: number | null;
	images: { url: string; altText: string | null }[];
	category: { id: string; name: string; slug: string } | null;
	brand: { id: string; name: string; slug: string } | null;
	inStock: boolean;
	hasVariants: boolean;
}

export interface StorefrontCollection {
	id: string;
	slug: string;
	name: string;
	description: string | null;
	imageUrl: string | null;
	productCount: number;
}

export interface StorefrontCategory {
	id: string;
	slug: string;
	name: string;
	description: string | null;
	imageUrl: string | null;
	productCount: number;
	parentId: string | null;
	children: StorefrontCategory[];
}

/**
 * Get tenant info for the storefront (public data only)
 */
export async function getStorefrontTenant(): Promise<{
	id: string;
	name: string;
	slug: string;
	logoUrl: string | null;
	faviconUrl: string | null;
	currency: string;
	locale: string;
	themeConfig: Record<string, unknown>;
} | null> {
	const tenant = await getCurrentTenant();
	if (!tenant) return null;

	return {
		id: tenant.id,
		name: tenant.name,
		slug: tenant.slug,
		logoUrl: tenant.logoUrl,
		faviconUrl: tenant.faviconUrl,
		currency: tenant.currency,
		locale: tenant.locale,
		themeConfig: (tenant.themeConfig as Record<string, unknown>) ?? {},
	};
}

/**
 * Get featured products for homepage
 */
export async function getFeaturedProducts(
	limit = 8,
): Promise<StorefrontProduct[]> {
	const tenant = await getCurrentTenant();
	if (!tenant) return [];

	const products = await db.product.findMany({
		where: {
			tenantId: tenant.id,
			status: "ACTIVE",
			deletedAt: null,
		},
		include: {
			media: {
				orderBy: { order: "asc" },
				take: 2,
			},
			category: {
				include: {
					translations: {
						include: { locale: true },
					},
				},
			},
			brand: {
				include: {
					translations: {
						include: { locale: true },
					},
				},
			},
			translations: {
				include: { locale: true },
			},
			variants: {
				where: { stock: { gt: 0 } },
				take: 1,
			},
		},
		orderBy: { createdAt: "desc" },
		take: limit,
	});

	return products.map((product) => mapProductToStorefront(product));
}

/**
 * Get all products with filtering and pagination
 */
export async function getProducts(options: {
	page?: number;
	limit?: number;
	categorySlug?: string;
	collectionSlug?: string;
	brandSlug?: string;
	search?: string;
	sortBy?: "newest" | "price-asc" | "price-desc" | "name-asc" | "name-desc";
	minPrice?: number;
	maxPrice?: number;
}): Promise<{
	products: StorefrontProduct[];
	total: number;
	page: number;
	totalPages: number;
}> {
	const tenant = await getCurrentTenant();
	if (!tenant) return { products: [], total: 0, page: 1, totalPages: 0 };

	const {
		page = 1,
		limit = 12,
		categorySlug,
		collectionSlug,
		brandSlug,
		search,
		sortBy = "newest",
		minPrice,
		maxPrice,
	} = options;

	const skip = (page - 1) * limit;

	// Build where clause
	// biome-ignore lint/suspicious/noExplicitAny: there's no type for this query structure
	const where: any = {
		tenantId: tenant.id,
		status: "ACTIVE",
		deletedAt: null,
	};

	if (categorySlug) {
		const category = await db.category.findFirst({
			where: { tenantId: tenant.id, slug: categorySlug },
		});
		if (category) {
			where.categoryId = category.id;
		}
	}

	if (collectionSlug) {
		const collection = await db.collection.findFirst({
			where: { tenantId: tenant.id, slug: collectionSlug },
		});
		if (collection) {
			where.collectionProducts = { some: { collectionId: collection.id } };
		}
	}

	if (brandSlug) {
		const brand = await db.brand.findFirst({
			where: { tenantId: tenant.id, slug: brandSlug },
		});
		if (brand) {
			where.brandId = brand.id;
		}
	}

	if (search) {
		where.OR = [
			{
				translations: {
					some: { name: { contains: search, mode: "insensitive" } },
				},
			},
			{ sku: { contains: search, mode: "insensitive" } },
		];
	}

	if (minPrice !== undefined || maxPrice !== undefined) {
		where.price = {};
		if (minPrice !== undefined) where.price.gte = minPrice;
		if (maxPrice !== undefined) where.price.lte = maxPrice;
	}

	// Build orderBy
	// biome-ignore lint/suspicious/noExplicitAny: there's no type for this query structure
	let orderBy: any;
	switch (sortBy) {
		case "price-asc":
			orderBy = { price: "asc" };
			break;
		case "price-desc":
			orderBy = { price: "desc" };
			break;
		case "name-asc":
			orderBy = { slug: "asc" };
			break;
		case "name-desc":
			orderBy = { slug: "desc" };
			break;
		default:
			orderBy = { createdAt: "desc" };
	}

	const [products, total] = await Promise.all([
		db.product.findMany({
			where,
			include: {
				media: {
					orderBy: { order: "asc" },
					take: 2,
				},
				category: {
					include: {
						translations: {
							include: { locale: true },
						},
					},
				},
				brand: {
					include: {
						translations: {
							include: { locale: true },
						},
					},
				},
				translations: {
					include: { locale: true },
				},
				variants: {
					where: { stock: { gt: 0 } },
					take: 1,
				},
			},
			orderBy,
			skip,
			take: limit,
		}),
		db.product.count({ where }),
	]);

	return {
		products: products.map((product) => mapProductToStorefront(product)),
		total,
		page,
		totalPages: Math.ceil(total / limit),
	};
}

/**
 * Get single product by slug
 */
export async function getProductBySlug(slug: string): Promise<{
	product: StorefrontProduct & {
		fullDescription: string | null;
		metaTitle: string | null;
		metaDescription: string | null;
		allImages: { url: string; altText: string | null }[];
		variants: {
			id: string;
			sku: string | null;
			price: number | null;
			stock: number | null;
			options: Record<string, string>;
		}[];
		specifications: { name: string; value: string }[];
	};
} | null> {
	const tenant = await getCurrentTenant();
	if (!tenant) return null;

	const product = await db.product.findFirst({
		where: {
			tenantId: tenant.id,
			slug,
			status: "ACTIVE",
			deletedAt: null,
		},
		include: {
			media: { orderBy: { order: "asc" } },
			category: {
				include: {
					translations: {
						include: { locale: true },
					},
				},
			},
			brand: {
				include: {
					translations: {
						include: { locale: true },
					},
				},
			},
			translations: {
				include: { locale: true },
			},
			variants: true,
			specs: {
				include: {
					translations: {
						include: { locale: true },
					},
				},
			},
		},
	});

	if (!product) return null;

	// Get English translation or first available
	const translation =
		product.translations.find((t) => t.locale.code === "en") ||
		product.translations[0];

	const categoryTranslation =
		product.category?.translations.find((t) => t.locale.code === "en") ||
		product.category?.translations[0];

	const brandTranslation =
		product.brand?.translations?.find((t) => t.locale.code === "en") ||
		product.brand?.translations?.[0];

	return {
		product: {
			id: product.id,
			slug: product.slug,
			name: translation?.name || product.slug,
			description: translation?.description?.slice(0, 200) || null,
			fullDescription: translation?.description || null,
			metaTitle: translation?.metaTitle || null,
			metaDescription: translation?.metaDescription || null,
			price: product.price.toNumber(),
			compareAtPrice: product.compareAtPrice?.toNumber() || null,
			images: product.media
				.slice(0, 1)
				.map((m) => ({ url: m.url, altText: m.altText })),
			allImages: product.media.map((m) => ({ url: m.url, altText: m.altText })),
			category: product.category
				? {
						id: product.category.id,
						name: categoryTranslation?.name || product.category.slug,
						slug: product.category.slug,
					}
				: null,
			brand: product.brand
				? {
						id: product.brand.id,
						name: brandTranslation?.name || product.brand.slug,
						slug: product.brand.slug,
					}
				: null,
			inStock: product.trackStock ? (product.stock ?? 0) > 0 : true,
			hasVariants: product.variants.length > 0,
			variants: product.variants.map((v) => ({
				id: v.id,
				sku: v.sku,
				price: v.price?.toNumber() || null,
				stock: v.stock,
				options: (v.options as Record<string, string>) ?? {},
			})),
			specifications: product.specs.map((s) => {
				const specTranslation =
					s.translations.find((t) => t.locale.code === "en") ||
					s.translations[0];
				return {
					name: specTranslation?.name || "",
					value: specTranslation?.value || "",
				};
			}),
		},
	};
}

/**
 * Get featured collections for homepage
 */
export async function getFeaturedCollections(
	limit = 4,
): Promise<StorefrontCollection[]> {
	const tenant = await getCurrentTenant();
	if (!tenant) return [];

	const collections = await db.collection.findMany({
		where: {
			tenantId: tenant.id,
			isActive: true,
		},
		include: {
			products: true,
			translations: {
				include: { locale: true },
			},
		},
		orderBy: { createdAt: "desc" },
		take: limit,
	});

	return collections.map((c) => {
		const translation =
			c.translations.find((t) => t.locale.code === "en") || c.translations[0];
		return {
			id: c.id,
			slug: c.slug,
			name: translation?.name || c.slug,
			description: translation?.description || null,
			imageUrl: c.imageUrl,
			productCount: c.products.length,
		};
	});
}

/**
 * Get all collections
 */
export async function getCollections(): Promise<StorefrontCollection[]> {
	const tenant = await getCurrentTenant();
	if (!tenant) return [];

	const collections = await db.collection.findMany({
		where: {
			tenantId: tenant.id,
			isActive: true,
		},
		include: {
			products: true,
			translations: {
				include: { locale: true },
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return collections.map((c) => {
		const translation =
			c.translations.find((t) => t.locale.code === "en") || c.translations[0];
		return {
			id: c.id,
			slug: c.slug,
			name: translation?.name || c.slug,
			description: translation?.description || null,
			imageUrl: c.imageUrl,
			productCount: c.products.length,
		};
	});
}

/**
 * Get single collection by slug
 */
export async function getCollectionBySlug(slug: string): Promise<{
	collection: StorefrontCollection;
	metaTitle: string | null;
	metaDescription: string | null;
} | null> {
	const tenant = await getCurrentTenant();
	if (!tenant) return null;

	const collection = await db.collection.findFirst({
		where: {
			tenantId: tenant.id,
			slug,
			isActive: true,
		},
		include: {
			products: true,
			translations: {
				include: { locale: true },
			},
		},
	});

	if (!collection) return null;

	const translation =
		collection.translations.find((t) => t.locale.code === "en") ||
		collection.translations[0];

	return {
		collection: {
			id: collection.id,
			slug: collection.slug,
			name: translation?.name || collection.slug,
			description: translation?.description || null,
			imageUrl: collection.imageUrl,
			productCount: collection.products.length,
		},
		metaTitle: null,
		metaDescription: null,
	};
}

/**
 * Get categories with hierarchy
 */
export async function getCategories(): Promise<StorefrontCategory[]> {
	const tenant = await getCurrentTenant();
	if (!tenant) return [];

	const categories = await db.category.findMany({
		where: {
			tenantId: tenant.id,
		},
		include: {
			_count: { select: { products: true } },
			translations: {
				include: { locale: true },
			},
		},
		orderBy: { createdAt: "asc" },
	});

	// Build hierarchy
	const categoryMap = new Map<string, StorefrontCategory>();
	const rootCategories: StorefrontCategory[] = [];

	for (const c of categories) {
		const translation =
			c.translations.find((t) => t.locale.code === "en") || c.translations[0];
		const category: StorefrontCategory = {
			id: c.id,
			slug: c.slug,
			name: translation?.name || c.slug,
			description: translation?.description || null,
			imageUrl: c.coverImageUrl || c.iconUrl,
			productCount: c._count.products,
			parentId: c.parentId,
			children: [],
		};
		categoryMap.set(c.id, category);
	}

	for (const category of categoryMap.values()) {
		if (category.parentId) {
			const parent = categoryMap.get(category.parentId);
			if (parent) {
				parent.children.push(category);
			}
		} else {
			rootCategories.push(category);
		}
	}

	return rootCategories;
}

/**
 * Helper to map database product to storefront product
 */
// biome-ignore lint/suspicious/noExplicitAny: tbh no idea, weird ai shit
function mapProductToStorefront(product: any): StorefrontProduct {
	const translation =
		product.translations?.find(
			(t: { locale: { code: string } }) => t.locale.code === "en",
		) || product.translations?.[0];

	const categoryTranslation =
		product.category?.translations?.find(
			(t: { locale: { code: string } }) => t.locale.code === "en",
		) || product.category?.translations?.[0];

	const brandTranslation =
		product.brand?.translations?.find(
			(t: { locale: { code: string } }) => t.locale.code === "en",
		) || product.brand?.translations?.[0];

	return {
		id: product.id,
		slug: product.slug,
		name: translation?.name || product.slug,
		description: translation?.description?.slice(0, 150) || null,
		price: product.price.toNumber(),
		compareAtPrice: product.compareAtPrice?.toNumber() || null,
		images: product.media.map((m: { url: string; altText: string | null }) => ({
			url: m.url,
			altText: m.altText,
		})),
		category: product.category
			? {
					id: product.category.id,
					name: categoryTranslation?.name || product.category.slug,
					slug: product.category.slug,
				}
			: null,
		brand: product.brand
			? {
					id: product.brand.id,
					name: brandTranslation?.name || product.brand.slug,
					slug: product.brand.slug,
				}
			: null,
		inStock: product.trackStock ? (product.stock ?? 0) > 0 : true,
		hasVariants: product.variants.length > 0,
	};
}
