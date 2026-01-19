"use client";

import { Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import type { CreateProductInput, UpdateProductInput } from "@/schemas/product";
import { getBrands } from "@/server/api/internal/brands";
import { getCategories } from "@/server/api/internal/categories";
import { getCollections } from "@/server/api/internal/collections";
import { getProduct, updateProduct } from "@/server/api/internal/products";
import { ProductForm } from "../../_components/product-form";

type SimpleCategory = { id: string; name: string };
type SimpleBrand = { id: string; name: string };
type SimpleCollection = { id: string; name: string };

export default function EditProductPage() {
	const router = useRouter();
	const params = useParams();
	const productId = params.productId as string;

	const [isLoading, setIsLoading] = React.useState(true);
	const [product, setProduct] =
		React.useState<Partial<UpdateProductInput> | null>(null);
	const [categories, setCategories] = React.useState<SimpleCategory[]>([]);
	const [brands, setBrands] = React.useState<SimpleBrand[]>([]);
	const [collections, setCollections] = React.useState<SimpleCollection[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const [productData, categoriesData, brandsData, collectionsData] =
					await Promise.all([
						getProduct(productId),
						getCategories(),
						getBrands(),
						getCollections(),
					]);

				setCategories(categoriesData.map((c) => ({ id: c.id, name: c.slug })));
				setBrands(brandsData.map((b) => ({ id: b.id, name: b.slug })));
				setCollections(
					collectionsData.map((col) => ({ id: col.id, name: col.slug })),
				);

				setProduct({
					id: productData.id,
					name: productData.name,
					description: productData.description,
					slug: productData.slug,
					status: productData.status,
					categoryId: productData.categoryId,
					brandId: productData.brandId ?? undefined,
					collectionIds: productData.collectionIds,
					price: Number(productData.price),
					compareAtPrice: productData.compareAtPrice
						? Number(productData.compareAtPrice)
						: undefined,
					costPerItem: productData.costPerItem
						? Number(productData.costPerItem)
						: undefined,
					sku: productData.sku ?? undefined,
					trackStock: productData.trackStock,
					stock: productData.stock ?? undefined,
					lowStockThreshold: productData.lowStockThreshold ?? undefined,
					media: productData.media.map((m) => ({
						...m,
						mediaType: m.mediaType as "IMAGE" | "VIDEO",
						altText: m.altText ?? undefined,
					})),
					variants: productData.variants.map((v) => ({
						...v,
						sku: v.sku ?? undefined,
						price: v.price ? Number(v.price) : undefined,
						priceAdjustment: Number(v.priceAdjustment) || 0,
						stock: v.stock ?? undefined,
						imageUrl: v.imageUrl ?? undefined,
						optionMeta: (
							v.optionMeta as Array<{ optionName: string; hexColor?: string }>
						)?.map((m) => ({
							optionName: m.optionName,
							hexColor: m.hexColor,
						})),
					})),
					shippingInfo: productData.shippingInfo
						? {
								packageType: productData.shippingInfo.packageType,
								weight: productData.shippingInfo.packagingWeightKg
									? Number(productData.shippingInfo.packagingWeightKg)
									: undefined,
								packageLength: productData.shippingInfo.packagingLengthCm
									? Number(productData.shippingInfo.packagingLengthCm)
									: undefined,
								packageWidth: productData.shippingInfo.packagingWidthCm
									? Number(productData.shippingInfo.packagingWidthCm)
									: undefined,
								packageHeight: productData.shippingInfo.packagingHeightCm
									? Number(productData.shippingInfo.packagingHeightCm)
									: undefined,
								productWeight: productData.shippingInfo.productWeightKg
									? Number(productData.shippingInfo.productWeightKg)
									: undefined,
								productLength: productData.shippingInfo.productLengthCm
									? Number(productData.shippingInfo.productLengthCm)
									: undefined,
								productWidth: productData.shippingInfo.productWidthCm
									? Number(productData.shippingInfo.productWidthCm)
									: undefined,
								productHeight: productData.shippingInfo.productHeightCm
									? Number(productData.shippingInfo.productHeightCm)
									: undefined,
								isFragile: false,
								isFreeShipping: false,
								tags: [],
							}
						: undefined,
					purchaseOptions: {
						type: productData.purchaseType,
						allowOneTimePurchase:
							productData.purchaseType === "ONE_TIME" ||
							productData.purchaseType === "ONE_TIME_AND_SUBSCRIPTION",
						subscriptionDiscount: productData.subscriptionDiscountPercent
							? Number(productData.subscriptionDiscountPercent)
							: undefined,
						subscriptionIntervals: productData.subscriptionIntervals,
						preOrderReleaseDate: productData.preOrderReleaseDate ?? undefined,
						preOrderDepositPercent: productData.preOrderDepositPercent
							? Number(productData.preOrderDepositPercent)
							: undefined,
					},
					seo: {
						metaTitle: productData.seo.metaTitle ?? undefined,
						metaDescription: productData.seo.metaDescription ?? undefined,
						slug: productData.seo.slug ?? undefined,
					},
					unitPrice: productData.unitPriceAmount
						? {
								unitPriceAmount: Number(productData.unitPriceAmount),
								unitPriceMeasurement:
									productData.unitPriceMeasurement ?? undefined,
								unitPriceBaseAmount: productData.unitPriceBaseAmount
									? Number(productData.unitPriceBaseAmount)
									: undefined,
								unitPriceBaseMeasurement:
									productData.unitPriceBaseMeasurement ?? undefined,
							}
						: undefined,
				});
			} catch (error) {
				console.error("Failed to load data:", error);
				toast.error("Failed to load product");
				router.push("/admin/products");
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [productId, router]);

	const handleSubmit = async (data: CreateProductInput) => {
		try {
			const result = await updateProduct({ ...data, id: productId });

			if (result.success) {
				toast.success("Product updated successfully");
				router.push("/admin/products");
			}
		} catch (error) {
			console.error("Failed to update product:", error);
			toast.error("Failed to update product");
			throw error;
		}
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-100">
				<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
			</div>
		);
	}

	if (!product) {
		return (
			<div className="flex items-center justify-center min-h-100">
				<p className="text-muted-foreground">Product not found</p>
			</div>
		);
	}

	return (
		<div className="container max-w-7xl py-6">
			<ProductForm
				mode="edit"
				initialData={product}
				onSubmit={handleSubmit}
				categories={categories}
				brands={brands}
				collections={collections}
			/>
		</div>
	);
}
