"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import type { CreateProductInput } from "@/schemas/product";
import { getBrands } from "@/server/api/internal/brands";
import { getCategories } from "@/server/api/internal/categories";
import { getCollections } from "@/server/api/internal/collections";
import { createProduct } from "@/server/api/internal/products";
import { ProductForm } from "../_components/product-form";

type SimpleCategory = { id: string; name: string };
type SimpleBrand = { id: string; name: string };
type SimpleCollection = { id: string; name: string };

export default function NewProductPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = React.useState(true);
	const [categories, setCategories] = React.useState<SimpleCategory[]>([]);
	const [brands, setBrands] = React.useState<SimpleBrand[]>([]);
	const [collections, setCollections] = React.useState<SimpleCollection[]>([]);

	// Fetch categories, brands, and collections on mount
	React.useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			try {
				const [categoriesData, brandsData, collectionsData] = await Promise.all(
					[getCategories(), getBrands(), getCollections()],
				);

				setCategories(categoriesData.map((c) => ({ id: c.id, name: c.slug })));
				setBrands(brandsData.map((b) => ({ id: b.id, name: b.slug })));
				setCollections(
					collectionsData.map((col) => ({ id: col.id, name: col.slug })),
				);
			} catch (error) {
				console.error("Failed to fetch data:", error);
				toast.error("Failed to load form data");
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	const handleSubmit = async (data: CreateProductInput) => {
		try {
			const result = await createProduct(data);

			if (result.success) {
				toast.success("Product created successfully");
				router.push("/admin/products");
			}
		} catch (error) {
			console.error("Failed to create product:", error);
			toast.error("Failed to create product");
			throw error;
		}
	};

	if (isLoading) {
		return (
			<div className="container flex max-w-7xl items-center justify-center py-24">
				<Loader size="lg" />
			</div>
		);
	}

	return (
		<div className="container max-w-7xl py-6">
			<ProductForm
				mode="create"
				onSubmit={handleSubmit}
				categories={categories}
				brands={brands}
				collections={collections}
			/>
		</div>
	);
}
