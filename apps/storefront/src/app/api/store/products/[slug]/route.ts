import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return NextResponse.json({ error: "Store not found" }, { status: 404 });
	}

	const product = await db.product.findFirst({
		where: {
			tenantId: tenant.id,
			slug,
			status: "ACTIVE",
		},
		include: {
			media: {
				orderBy: { order: "asc" },
			},
			variants: true,
			translations: {
				take: 1,
			},
			brand: true,
			category: {
				include: {
					translations: { take: 1 },
				},
			},
			shippingInfo: true,
			specs: {
				include: {
					translations: { take: 1 },
				},
				orderBy: { order: "asc" },
			},
		},
	});

	if (!product) {
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	}

	const translation = product.translations[0];

	// Fetch related products (same category)
	const relatedProducts = await db.product.findMany({
		where: {
			tenantId: tenant.id,
			status: "ACTIVE",
			id: { not: product.id },
			categoryId: product.categoryId,
		},
		include: {
			media: { orderBy: { order: "asc" }, take: 1 },
			translations: { take: 1 },
		},
		take: 4,
	});

	return NextResponse.json({
		product: {
			id: product.id,
			slug: product.slug,
			sku: product.sku,
			price: Number(product.price),
			compareAtPrice: product.compareAtPrice
				? Number(product.compareAtPrice)
				: null,
			trackStock: product.trackStock,
			stock: product.stock,
			media: product.media.map((m) => ({
				id: m.id,
				url: m.url,
				altText: m.altText,
				order: m.order,
			})),
			translation: translation
				? {
						name: translation.name,
						description: translation.description,
						metaTitle: translation.metaTitle,
						metaDescription: translation.metaDescription,
					}
				: null,
			brand: product.brand
				? {
						name: product.brand.name,
						slug: product.brand.slug,
					}
				: null,
			category: product.category
				? {
						id: product.category.id,
						slug: product.category.slug,
						name:
							product.category.translations[0]?.name || product.category.slug,
					}
				: null,
			variants: product.variants.map((v) => ({
				id: v.id,
				sku: v.sku,
				price: v.price ? Number(v.price) : null,
				priceAdjustment: Number(v.priceAdjustment),
				stock: v.stock,
				imageUrl: v.imageUrl,
				options: v.options as Record<string, string>,
			})),
			shippingInfo: product.shippingInfo
				? {
						packagingWeightKg: product.shippingInfo.packagingWeightKg
							? Number(product.shippingInfo.packagingWeightKg)
							: null,
						packagingLengthCm: product.shippingInfo.packagingLengthCm
							? Number(product.shippingInfo.packagingLengthCm)
							: null,
						packagingWidthCm: product.shippingInfo.packagingWidthCm
							? Number(product.shippingInfo.packagingWidthCm)
							: null,
						packagingHeightCm: product.shippingInfo.packagingHeightCm
							? Number(product.shippingInfo.packagingHeightCm)
							: null,
					}
				: null,
			specs: product.specs.map((s) => ({
				id: s.id,
				name: s.translations[0]?.name || "",
				value: s.translations[0]?.value || "",
			})),
		},
		relatedProducts: relatedProducts.map((p) => ({
			id: p.id,
			slug: p.slug,
			price: Number(p.price),
			compareAtPrice: p.compareAtPrice ? Number(p.compareAtPrice) : null,
			name: p.translations[0]?.name || p.slug,
			imageUrl: p.media[0]?.url || null,
		})),
	});
}
