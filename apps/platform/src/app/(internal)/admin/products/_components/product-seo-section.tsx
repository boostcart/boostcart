"use client";

import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import slugify from "slugify";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SeoPreview } from "@/components/ui/seo-preview";
import { Textarea } from "@/components/ui/textarea";
import type { CreateProductInput } from "@/schemas/product";

export function ProductSeoSection() {
	const form = useFormContext<CreateProductInput>();
	const productName = useWatch({ control: form.control, name: "name" });
	const seo = form.watch("seo");
	const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

	// Stable callback for setting form value
	const setSeoSlug = useCallback(
		(slug: string) => form.setValue("seo.slug", slug, { shouldValidate: true }),
		[form.setValue],
	);

	// Auto-generate slug from product name (only if not manually edited)
	useEffect(() => {
		if (productName && !slugManuallyEdited) {
			const generatedSlug = slugify(productName, {
				lower: true,
				strict: true,
				trim: true,
			});
			setSeoSlug(generatedSlug);
		}
	}, [productName, slugManuallyEdited, setSeoSlug]);

	const handleSlugChange = (value: string) => {
		setSlugManuallyEdited(true);
		const cleanSlug = slugify(value, {
			lower: true,
			strict: true,
			trim: true,
		});
		form.setValue("seo.slug", cleanSlug, { shouldValidate: true });
	};

	const handleRegenerateSlug = () => {
		if (productName) {
			const generatedSlug = slugify(productName, {
				lower: true,
				strict: true,
				trim: true,
			});
			form.setValue("seo.slug", generatedSlug, { shouldValidate: true });
			setSlugManuallyEdited(false);
		}
	};

	// Get preview values (fallback to product name if meta title is empty)
	const previewTitle = seo?.metaTitle || productName || "Product Title";
	const previewDescription = seo?.metaDescription || "";
	const previewSlug = seo?.slug || "product-url-slug";

	return (
		<Card>
			<CardHeader>
				<CardTitle>Search engine listing</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Google Preview */}
				<div className="space-y-2">
					<span className="text-sm font-medium">Preview</span>
					<SeoPreview
						title={previewTitle}
						description={previewDescription}
						url={`/products/${previewSlug}`}
					/>
				</div>

				{/* Meta Title */}
				<FormField
					control={form.control}
					name="seo.metaTitle"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Page title
								<span className="ml-2 text-muted-foreground font-normal">
									{(field.value || "").length}/70
								</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder={productName || "Enter page title"}
									maxLength={70}
									{...field}
									value={field.value ?? ""}
								/>
							</FormControl>
							<FormDescription>
								Title shown in search engine results. Leave empty to use product
								name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Meta Description */}
				<FormField
					control={form.control}
					name="seo.metaDescription"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Meta description
								<span className="ml-2 text-muted-foreground font-normal">
									{(field.value || "").length}/160
								</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Briefly describe your product for search engines..."
									maxLength={160}
									rows={3}
									className="resize-none"
									{...field}
									value={field.value ?? ""}
								/>
							</FormControl>
							<FormDescription>
								Description shown below the title in search results. Aim for
								120-160 characters.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* URL Handle / Slug */}
				<FormField
					control={form.control}
					name="seo.slug"
					render={({ field }) => (
						<FormItem>
							<FormLabel>URL handle</FormLabel>
							<div className="flex gap-2">
								<FormControl>
									<div className="flex-1 flex items-center rounded-md border bg-muted/50">
										<span className="px-3 text-sm text-muted-foreground">
											/products/
										</span>
										<Input
											placeholder="product-url-slug"
											className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
											value={field.value ?? ""}
											onChange={(e) => handleSlugChange(e.target.value)}
										/>
									</div>
								</FormControl>
								<Button
									type="button"
									variant="outline"
									size="icon"
									onClick={handleRegenerateSlug}
									title="Regenerate from product name"
								>
									<RefreshCw className="h-4 w-4" />
								</Button>
							</div>
							<FormDescription>
								The URL path for this product. Auto-generated from product name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</CardContent>
		</Card>
	);
}
