"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save, X } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	type CreateProductInput,
	CreateProductSchema,
	type CurrencyPriceInput,
	type ProductMediaInput,
	type UpdateProductInput,
} from "@/schemas/product";
import { ProductCollectionsSection } from "./product-collections-section";
import { ProductGeneralSection } from "./product-general-section";
import { ProductInventorySection } from "./product-inventory-section";
import { ProductMediaSection } from "./product-media-section";
import { ProductMultiCurrencyPricing } from "./product-multi-currency-pricing";
import { ProductPricingSection } from "./product-pricing-section";
import { ProductPurchaseOptionsSection } from "./product-purchase-options-section";
import { ProductSeoSection } from "./product-seo-section";
import { ProductShippingSection } from "./product-shipping-section";
import { ProductVariantsSection } from "./product-variants-section";

// Extended media type that includes staged files
interface StagedMedia extends ProductMediaInput {
	_stagedFile?: File;
}

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

	// Store staged files in a ref to avoid them being stripped by Zod validation
	const stagedFilesRef = React.useRef<Map<string, File>>(new Map());

	// Store currency prices for create mode
	const currencyPricesRef = React.useRef<CurrencyPriceInput[]>([]);

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

	// Watch media changes to capture staged files before they get stripped
	const watchedMedia = form.watch("media");
	React.useEffect(() => {
		if (watchedMedia) {
			for (const m of watchedMedia as StagedMedia[]) {
				if (m._stagedFile && m.url) {
					stagedFilesRef.current.set(m.url, m._stagedFile);
				}
			}
		}
	}, [watchedMedia]);

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
			// Get files from our ref (since Zod strips _stagedFile)
			const mediaItems = data.media ?? [];
			const filesToUpload: { blobUrl: string; file: File }[] = [];

			for (const m of mediaItems) {
				// Check if this URL has a staged file (blob URLs start with "blob:")
				if (m.url.startsWith("blob:")) {
					const file = stagedFilesRef.current.get(m.url);
					if (file) {
						filesToUpload.push({ blobUrl: m.url, file });
					}
				}
			}

			const uploadedMedia: Map<string, string> = new Map();

			if (filesToUpload.length > 0) {
				toast.info(`Uploading ${filesToUpload.length} file(s)...`);

				// Upload files in parallel via R2 API
				const uploadPromises = filesToUpload.map(async ({ blobUrl, file }) => {
					const formData = new FormData();
					formData.append("file", file);
					formData.append("folder", "products");

					const response = await fetch("/api/upload", {
						method: "POST",
						body: formData,
					});

					if (!response.ok) {
						const error = await response.json();
						throw new Error(error.error || "Upload failed");
					}

					const result = await response.json();
					return { blobUrl, uploadedUrl: result.media.url };
				});

				try {
					const results = await Promise.all(uploadPromises);
					for (const { blobUrl, uploadedUrl } of results) {
						uploadedMedia.set(blobUrl, uploadedUrl);
					}
				} catch (uploadError) {
					console.error("Upload failed:", uploadError);
					toast.error("Failed to upload media files");
					throw uploadError;
				}
			}

			// Replace blob URLs with uploaded URLs
			const processedMedia: ProductMediaInput[] = mediaItems.map((m) => {
				const uploadedUrl = uploadedMedia.get(m.url);
				return {
					id: m.id,
					url: uploadedUrl ?? m.url,
					mediaType: m.mediaType,
					altText: m.altText,
					order: m.order,
				};
			});

			// Submit with real URLs and currency prices (for create mode)
			const submitData: CreateProductInput = {
				...data,
				media: processedMedia,
			};

			// Add currency prices if in create mode and any are set
			if (mode === "create" && currencyPricesRef.current.length > 0) {
				const validPrices = currencyPricesRef.current.filter(
					(cp) => cp.price !== null,
				);
				if (validPrices.length > 0) {
					submitData.currencyPrices = validPrices;
				}
			}

			await onSubmit(submitData);

			// Clear staged files on success
			stagedFilesRef.current.clear();
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
						{/* Multi-currency pricing */}
						<ProductMultiCurrencyPricing
							productId={mode === "edit" ? initialData?.id : undefined}
							basePrice={form.watch("price") || 0}
							baseCompareAtPrice={form.watch("compareAtPrice")}
							mode={mode}
							onChange={
								mode === "create"
									? (prices) => {
											currencyPricesRef.current = prices;
										}
									: undefined
							}
						/>
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
