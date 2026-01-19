"use client";

import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface FilterOption {
	id: string;
	slug: string;
	name: string;
}

interface ProductsFiltersProps {
	categories: FilterOption[];
	brands: FilterOption[];
	collections: FilterOption[];
	currentFilters: {
		category: string;
		brand: string;
		collection: string;
		minPrice?: number;
		maxPrice?: number;
	};
}

export function ProductsFilters({
	categories,
	brands,
	collections,
	currentFilters,
}: ProductsFiltersProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();

	const updateFilter = useCallback(
		(key: string, value: string | undefined) => {
			const params = new URLSearchParams(searchParams.toString());

			if (value) {
				params.set(key, value);
			} else {
				params.delete(key);
			}

			// Reset to page 1 when filters change
			params.delete("page");

			startTransition(() => {
				router.push(`/products?${params.toString()}`);
			});
		},
		[router, searchParams],
	);

	const clearAllFilters = useCallback(() => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete("category");
		params.delete("brand");
		params.delete("collection");
		params.delete("minPrice");
		params.delete("maxPrice");
		params.delete("page");

		startTransition(() => {
			router.push(`/products?${params.toString()}`);
		});
	}, [router, searchParams]);

	const hasActiveFilters =
		currentFilters.category ||
		currentFilters.brand ||
		currentFilters.collection ||
		currentFilters.minPrice !== undefined ||
		currentFilters.maxPrice !== undefined;

	return (
		<div className={`space-y-6 ${isPending ? "opacity-60" : ""}`}>
			{/* Clear filters button */}
			{hasActiveFilters && (
				<Button
					variant="ghost"
					size="sm"
					className="w-full justify-start text-muted-foreground"
					onClick={clearAllFilters}
				>
					<X className="mr-2 h-4 w-4" />
					Clear all filters
				</Button>
			)}

			{/* Categories */}
			{categories.length > 0 && (
				<div className="space-y-3">
					<h3 className="font-semibold text-sm">Categories</h3>
					<ScrollArea className="max-h-48">
						<div className="space-y-2">
							{categories.map((category) => (
								<div key={category.id} className="flex items-center space-x-2">
									<Checkbox
										id={`cat-${category.id}`}
										checked={currentFilters.category === category.slug}
										onCheckedChange={(checked) =>
											updateFilter(
												"category",
												checked ? category.slug : undefined,
											)
										}
									/>
									<Label
										htmlFor={`cat-${category.id}`}
										className="text-sm font-normal cursor-pointer"
									>
										{category.name}
									</Label>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			)}

			{categories.length > 0 && <Separator />}

			{/* Brands */}
			{brands.length > 0 && (
				<div className="space-y-3">
					<h3 className="font-semibold text-sm">Brands</h3>
					<ScrollArea className="max-h-48">
						<div className="space-y-2">
							{brands.map((brand) => (
								<div key={brand.id} className="flex items-center space-x-2">
									<Checkbox
										id={`brand-${brand.id}`}
										checked={currentFilters.brand === brand.slug}
										onCheckedChange={(checked) =>
											updateFilter("brand", checked ? brand.slug : undefined)
										}
									/>
									<Label
										htmlFor={`brand-${brand.id}`}
										className="text-sm font-normal cursor-pointer"
									>
										{brand.name}
									</Label>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			)}

			{brands.length > 0 && <Separator />}

			{/* Collections */}
			{collections.length > 0 && (
				<div className="space-y-3">
					<h3 className="font-semibold text-sm">Collections</h3>
					<ScrollArea className="max-h-48">
						<div className="space-y-2">
							{collections.map((collection) => (
								<div
									key={collection.id}
									className="flex items-center space-x-2"
								>
									<Checkbox
										id={`coll-${collection.id}`}
										checked={currentFilters.collection === collection.slug}
										onCheckedChange={(checked) =>
											updateFilter(
												"collection",
												checked ? collection.slug : undefined,
											)
										}
									/>
									<Label
										htmlFor={`coll-${collection.id}`}
										className="text-sm font-normal cursor-pointer"
									>
										{collection.name}
									</Label>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			)}

			{collections.length > 0 && <Separator />}

			{/* Price Range */}
			<div className="space-y-3">
				<h3 className="font-semibold text-sm">Price Range</h3>
				<div className="flex items-center gap-2">
					<Input
						type="number"
						placeholder="Min"
						min={0}
						value={currentFilters.minPrice ?? ""}
						onChange={(e) =>
							updateFilter("minPrice", e.target.value || undefined)
						}
						className="w-full"
					/>
					<span className="text-muted-foreground">-</span>
					<Input
						type="number"
						placeholder="Max"
						min={0}
						value={currentFilters.maxPrice ?? ""}
						onChange={(e) =>
							updateFilter("maxPrice", e.target.value || undefined)
						}
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
}
