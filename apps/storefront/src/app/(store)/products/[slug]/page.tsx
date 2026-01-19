"use client";

import { ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ProductGallery } from "./_components/product-gallery";
import { ProductInfo } from "./_components/product-info";
import { ProductTabs } from "./_components/product-tabs";
import { RelatedProducts } from "./_components/related-products";

// Type for product data
interface ProductData {
	id: string;
	slug: string;
	sku: string | null;
	price: number;
	compareAtPrice: number | null;
	trackStock: boolean;
	stock: number | null;
	media: Array<{
		id: string;
		url: string;
		altText: string | null;
		order: number;
	}>;
	translation: {
		name: string;
		description: string | null;
		metaTitle: string | null;
		metaDescription: string | null;
	} | null;
	brand: {
		name: string;
		slug: string;
	} | null;
	category: {
		id: string;
		slug: string;
		name: string | null;
	} | null;
	variants: Array<{
		id: string;
		sku: string | null;
		price: number | null;
		priceAdjustment: number;
		stock: number | null;
		imageUrl: string | null;
		options: Record<string, string>;
	}>;
	shippingInfo: {
		packagingWeightKg: number | null;
		packagingLengthCm: number | null;
		packagingWidthCm: number | null;
		packagingHeightCm: number | null;
	} | null;
	specs: Array<{
		id: string;
		name: string;
		value: string;
	}>;
}

interface RelatedProductData {
	id: string;
	slug: string;
	price: number;
	compareAtPrice: number | null;
	name: string | null;
	imageUrl: string | null;
}

export default function ProductDetailPage() {
	const params = useParams();
	const slug = params.slug as string;
	const [product, setProduct] = useState<ProductData | null>(null);
	const [relatedProducts, setRelatedProducts] = useState<RelatedProductData[]>(
		[],
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchProduct() {
			try {
				const response = await fetch(`/api/store/products/${slug}`);
				if (!response.ok) {
					if (response.status === 404) {
						notFound();
					}
					throw new Error("Failed to fetch product");
				}
				const data = await response.json();
				setProduct(data.product);
				setRelatedProducts(data.relatedProducts || []);
			} catch (error) {
				console.error("Error fetching product:", error);
			} finally {
				setLoading(false);
			}
		}

		if (slug) {
			fetchProduct();
		}
	}, [slug]);

	if (loading) {
		return (
			<div className="container py-8">
				<div className="flex items-center justify-center min-h-96">
					<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
				</div>
			</div>
		);
	}

	if (!product) {
		notFound();
	}

	const categoryName = product.category?.name || product.category?.slug;

	return (
		<div className="container mx-auto py-8">
			{/* Breadcrumb */}
			<nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
				<Link href="/" className="hover:text-foreground transition-colors">
					Home
				</Link>
				<ChevronRight className="h-4 w-4" />
				<Link
					href="/products"
					className="hover:text-foreground transition-colors"
				>
					Products
				</Link>
				{categoryName && product.category && (
					<>
						<ChevronRight className="h-4 w-4" />
						<Link
							href={`/products?category=${product.category.slug}`}
							className="hover:text-foreground transition-colors"
						>
							{categoryName}
						</Link>
					</>
				)}
				<ChevronRight className="h-4 w-4" />
				<span className="text-foreground font-medium">
					{product.translation?.name || product.slug}
				</span>
			</nav>

			{/* Product main section */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Gallery */}
				<ProductGallery
					images={product.media.map((m) => ({
						url: m.url,
						altText: m.altText || product.translation?.name || product.slug,
					}))}
				/>

				{/* Product info */}
				<ProductInfo
					product={{
						id: product.id,
						slug: product.slug,
						sku: product.sku,
						name: product.translation?.name || product.slug,
						description: product.translation?.description || null,
						price: product.price,
						compareAtPrice: product.compareAtPrice,
						trackStock: product.trackStock,
						stock: product.stock,
						brand: product.brand,
						variants: product.variants,
						mainImage: product.media[0]?.url || null,
					}}
				/>
			</div>

			<Separator className="my-12" />

			{/* Tabs (Description, Specifications, Reviews) */}
			<ProductTabs
				description={product.translation?.description || null}
				specifications={
					product.shippingInfo
						? {
								weight: product.shippingInfo.packagingWeightKg,
								length: product.shippingInfo.packagingLengthCm,
								width: product.shippingInfo.packagingWidthCm,
								height: product.shippingInfo.packagingHeightCm,
							}
						: null
				}
				specs={product.specs}
			/>

			{/* Related products */}
			{relatedProducts.length > 0 && (
				<>
					<Separator className="my-12" />
					<RelatedProducts products={relatedProducts} />
				</>
			)}
		</div>
	);
}
