"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { CreateProductInput } from "@/schemas/product";
import { createProduct } from "@/server/api/internal/products";
import { ProductForm } from "../_components/product-form";

// TODO: Replace with real data from server
const mockCategories = [
	{ id: "cat-1", name: "Electronics" },
	{ id: "cat-2", name: "Clothing" },
	{ id: "cat-3", name: "Home & Garden" },
	{ id: "cat-4", name: "Sports & Outdoors" },
	{ id: "cat-5", name: "Beauty & Health" },
];

const mockBrands = [
	{ id: "brand-1", name: "Apple" },
	{ id: "brand-2", name: "Samsung" },
	{ id: "brand-3", name: "Nike" },
	{ id: "brand-4", name: "Adidas" },
	{ id: "brand-5", name: "Sony" },
];

const mockCollections = [
	{ id: "col-1", name: "Summer Sale" },
	{ id: "col-2", name: "New Arrivals" },
	{ id: "col-3", name: "Best Sellers" },
	{ id: "col-4", name: "Featured" },
];

export default function NewProductPage() {
	const router = useRouter();

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

	return (
		<div className="container max-w-7xl py-6">
			<ProductForm
				mode="create"
				onSubmit={handleSubmit}
				categories={mockCategories}
				brands={mockBrands}
				collections={mockCollections}
			/>
		</div>
	);
}
