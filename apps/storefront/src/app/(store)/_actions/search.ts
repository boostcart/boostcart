"use server";

import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

interface SearchResult {
	id: string;
	slug: string;
	name: string;
	price: number;
	compareAtPrice: number | null;
	image: string | null;
	category: string | null;
}

export async function searchProducts(
	query: string,
	limit = 8,
): Promise<SearchResult[]> {
	const tenant = await getCurrentTenant();

	if (!tenant || !query.trim()) {
		return [];
	}

	const searchQuery = query.trim();

	const products = await db.product.findMany({
		where: {
			tenantId: tenant.id,
			status: "ACTIVE",
			OR: [
				{
					translations: {
						some: { name: { contains: searchQuery, mode: "insensitive" } },
					},
				},
				{
					translations: {
						some: {
							description: { contains: searchQuery, mode: "insensitive" },
						},
					},
				},
				{ sku: { contains: searchQuery, mode: "insensitive" } },
				{ slug: { contains: searchQuery, mode: "insensitive" } },
			],
		},
		include: {
			translations: {
				take: 1,
			},
			media: {
				orderBy: { order: "asc" },
				take: 1,
			},
			category: {
				include: {
					translations: {
						take: 1,
					},
				},
			},
		},
		orderBy: [
			// Prioritize exact matches in name
			{ createdAt: "desc" },
		],
		take: limit,
	});

	return products.map((product) => ({
		id: product.id,
		slug: product.slug,
		name: product.translations[0]?.name || product.slug,
		price: Number(product.price),
		compareAtPrice: product.compareAtPrice
			? Number(product.compareAtPrice)
			: null,
		image: product.media[0]?.url || null,
		category: product.category?.translations[0]?.name || null,
	}));
}
