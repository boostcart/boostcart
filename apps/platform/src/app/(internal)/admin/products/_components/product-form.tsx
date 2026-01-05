"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save, X } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import slugify from "slugify";

import { Button } from "@/components/ui/button";
import {
	type CreateProductInput,
	CreateProductSchema,
	type UpdateProductInput,
} from "@/schemas/product";
import { ProductCollectionsSection } from "./product-collections-section";
import { ProductGeneralSection } from "./product-general-section";
import { ProductInventorySection } from "./product-inventory-section";
import { ProductMediaSection } from "./product-media-section";
import { ProductPricingSection } from "./product-pricing-section";
import { ProductPurchaseOptionsSection } from "./product-purchase-options-section";
import { ProductSeoSection } from "./product-seo-section";
import { ProductShippingSection } from "./product-shipping-section";
import { ProductVariantsSection } from "./product-variants-section";

interface ProductFormProps {
	mode: "create" | "edit";
	initialData?: Partial<UpdateProductInput>;
	onSubmit: (data: CreateProductInput) => Promise<void>;
	categories: { id: string; name: string }[];
	brands: { id: string; name: string }[];
	collections: { id: string; name: string }[];
}

export function ProductForm({
	mode,
	initialData,
	onSubmit,
	categories,
	brands,
	collections,
}: ProductFormProps) {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	const form = useForm({
		resolver: zodResolver(CreateProductSchema),
		defaultValues: {
			name: "",
			description: "",
			slug: "",
			status: "DRAFT" as const,
			categoryId: "",
			brandId: undefined,
			collectionIds: [],
			price: 0,
			compareAtPrice: undefined,
			costPerItem: undefined,
			unitPrice: undefined,
			sku: undefined,
			trackStock: false,
			stock: undefined,
			lowStockThreshold: undefined,
			media: [],
			variants: [],
			shippingInfo: {
				packageType: "BOX" as const,
				isFragile: false,
				isFreeShipping: false,
				tags: [],
			},
			purchaseOptions: {
				type: "ONE_TIME" as const,
				allowOneTimePurchase: true,
			},
			seo: {},
			...initialData,
		},
	});

	// Auto-generate slug from name
	const watchName = form.watch("name");
	const currentSlug = form.watch("slug");

	// Use a ref to get form.setValue without adding it as a dependency
	const formRef = React.useRef(form);
	formRef.current = form;

	React.useEffect(() => {
		if (mode === "create" && watchName && !currentSlug) {
			const generatedSlug = slugify(watchName, { lower: true, strict: true });
			formRef.current.setValue("slug", generatedSlug);
		}
	}, [watchName, currentSlug, mode]);

	const handleSubmit = async (data: CreateProductInput) => {
		setIsSubmitting(true);
		try {
			await onSubmit(data);
		} catch (error) {
			console.error("Failed to save product:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleDiscard = () => {
		if (form.formState.isDirty) {
			const confirmed = window.confirm(
				"You have unsaved changes. Are you sure you want to discard them?",
			);
			if (!confirmed) return;
		}
		router.push("/admin/products");
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
				{/* Sticky header with actions */}
				<div className="sticky top-0 z-10 -mx-6 -mt-6 mb-6 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
					<div className="flex items-center justify-between px-6 py-4">
						<div>
							<h1 className="text-2xl font-semibold tracking-tight">
								{mode === "create" ? "Add product" : "Edit product"}
							</h1>
							{mode === "edit" && initialData?.name && (
								<p className="text-sm text-muted-foreground">
									{initialData.name}
								</p>
							)}
						</div>
						<div className="flex items-center gap-2">
							<Button
								type="button"
								variant="outline"
								onClick={handleDiscard}
								disabled={isSubmitting}
							>
								<X className="mr-2 h-4 w-4" />
								Discard
							</Button>
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting ? (
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								) : (
									<Save className="mr-2 h-4 w-4" />
								)}
								{mode === "create" ? "Create product" : "Save changes"}
							</Button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main content - 2 columns */}
					<div className="lg:col-span-2 space-y-6">
						<ProductGeneralSection categories={categories} brands={brands} />
						<ProductMediaSection />
						<ProductPricingSection />
						<ProductVariantsSection />
						<ProductShippingSection />
						<ProductPurchaseOptionsSection />
						<ProductSeoSection />
					</div>

					{/* Sidebar - 1 column */}
					<div className="space-y-6">
						<ProductInventorySection />
						<ProductCollectionsSection collections={collections} />
					</div>
				</div>
			</form>
		</FormProvider>
	);
}
