"use client";

import { Filter, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface FilterOption {
	id: string;
	name: string;
}

interface ProductFiltersProps {
	categories: FilterOption[];
	brands: FilterOption[];
	onFiltersChange?: (filters: ProductFilterState) => void;
}

export interface ProductFilterState {
	status: string | null;
	categoryId: string | null;
	brandId: string | null;
	stockStatus: string | null;
	purchaseType: string | null;
}

const STATUS_OPTIONS = [
	{ value: "ACTIVE", label: "Active" },
	{ value: "DRAFT", label: "Draft" },
	{ value: "UNLISTED", label: "Unlisted" },
];

const STOCK_OPTIONS = [
	{ value: "in_stock", label: "In Stock" },
	{ value: "low_stock", label: "Low Stock" },
	{ value: "out_of_stock", label: "Out of Stock" },
];

const PURCHASE_TYPE_OPTIONS = [
	{ value: "ONE_TIME", label: "One-time purchase" },
	{ value: "SUBSCRIPTION", label: "Subscription" },
	{ value: "PRE_ORDER", label: "Pre-order" },
];

export function ProductFilters({
	categories,
	brands,
	onFiltersChange,
}: ProductFiltersProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [filters, setFilters] = useState<ProductFilterState>({
		status: searchParams.get("status"),
		categoryId: searchParams.get("categoryId"),
		brandId: searchParams.get("brandId"),
		stockStatus: searchParams.get("stockStatus"),
		purchaseType: searchParams.get("purchaseType"),
	});

	const [isOpen, setIsOpen] = useState(false);

	// Count active filters
	const activeFilterCount = Object.values(filters).filter(Boolean).length;

	// Sync URL params with filters
	const updateURLParams = useCallback(
		(newFilters: ProductFilterState) => {
			const params = new URLSearchParams(searchParams.toString());

			// Update or remove each filter param
			Object.entries(newFilters).forEach(([key, value]) => {
				if (value) {
					params.set(key, value);
				} else {
					params.delete(key);
				}
			});

			// Reset to page 1 when filters change
			params.delete("page");

			router.push(`${pathname}?${params.toString()}`, { scroll: false });
		},
		[pathname, router, searchParams],
	);

	const handleFilterChange = (
		key: keyof ProductFilterState,
		value: string | null,
	) => {
		const newFilters = { ...filters, [key]: value === "all" ? null : value };
		setFilters(newFilters);
		updateURLParams(newFilters);
		onFiltersChange?.(newFilters);
	};

	const clearAllFilters = () => {
		const clearedFilters: ProductFilterState = {
			status: null,
			categoryId: null,
			brandId: null,
			stockStatus: null,
			purchaseType: null,
		};
		setFilters(clearedFilters);
		updateURLParams(clearedFilters);
		onFiltersChange?.(clearedFilters);
	};

	const clearFilter = (key: keyof ProductFilterState) => {
		handleFilterChange(key, null);
	};

	// Get label for filter value
	const getFilterLabel = (key: keyof ProductFilterState, value: string) => {
		switch (key) {
			case "status":
				return STATUS_OPTIONS.find((o) => o.value === value)?.label ?? value;
			case "stockStatus":
				return STOCK_OPTIONS.find((o) => o.value === value)?.label ?? value;
			case "purchaseType":
				return (
					PURCHASE_TYPE_OPTIONS.find((o) => o.value === value)?.label ?? value
				);
			case "categoryId":
				return categories.find((c) => c.id === value)?.name ?? value;
			case "brandId":
				return brands.find((b) => b.id === value)?.name ?? value;
			default:
				return value;
		}
	};

	return (
		<div className="flex flex-wrap items-center gap-2">
			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline" className="relative">
						<Filter className="h-4 w-4 mr-2" />
						Filters
						{activeFilterCount > 0 && (
							<Badge
								variant="secondary"
								className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs"
							>
								{activeFilterCount}
							</Badge>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-80" align="start">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h4 className="font-medium">Filters</h4>
							{activeFilterCount > 0 && (
								<Button
									variant="ghost"
									size="sm"
									onClick={clearAllFilters}
									className="h-auto p-0 text-muted-foreground hover:text-foreground"
								>
									Clear all
								</Button>
							)}
						</div>

						<Separator />

						{/* Status Filter */}
						<div className="space-y-2">
							<span className="text-sm font-medium">Status</span>
							<Select
								value={filters.status ?? "all"}
								onValueChange={(value) => handleFilterChange("status", value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="All statuses" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All statuses</SelectItem>
									{STATUS_OPTIONS.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						{/* Category Filter */}
						<div className="space-y-2">
							<span className="text-sm font-medium">Category</span>
							<Select
								value={filters.categoryId ?? "all"}
								onValueChange={(value) =>
									handleFilterChange("categoryId", value)
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="All categories" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All categories</SelectItem>
									{categories.map((category) => (
										<SelectItem key={category.id} value={category.id}>
											{category.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						{/* Brand Filter */}
						<div className="space-y-2">
							<span className="text-sm font-medium">Brand</span>
							<Select
								value={filters.brandId ?? "all"}
								onValueChange={(value) => handleFilterChange("brandId", value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="All brands" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All brands</SelectItem>
									{brands.map((brand) => (
										<SelectItem key={brand.id} value={brand.id}>
											{brand.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						{/* Stock Status Filter */}
						<div className="space-y-2">
							<span className="text-sm font-medium">Stock Status</span>
							<Select
								value={filters.stockStatus ?? "all"}
								onValueChange={(value) =>
									handleFilterChange("stockStatus", value)
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="All stock statuses" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All stock statuses</SelectItem>
									{STOCK_OPTIONS.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						{/* Purchase Type Filter */}
						<div className="space-y-2">
							<span className="text-sm font-medium">Purchase Type</span>
							<Select
								value={filters.purchaseType ?? "all"}
								onValueChange={(value) =>
									handleFilterChange("purchaseType", value)
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="All purchase types" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All purchase types</SelectItem>
									{PURCHASE_TYPE_OPTIONS.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</PopoverContent>
			</Popover>

			{/* Active filter badges */}
			{activeFilterCount > 0 && (
				<div className="flex flex-wrap items-center gap-2">
					{Object.entries(filters).map(([key, value]) => {
						if (!value) return null;
						const filterKey = key as keyof ProductFilterState;
						return (
							<Badge
								key={key}
								variant="secondary"
								className="pl-2 pr-1 py-1 flex items-center gap-1"
							>
								<span className="text-xs">
									{getFilterLabel(filterKey, value)}
								</span>
								<button
									type="button"
									onClick={() => clearFilter(filterKey)}
									className="ml-1 rounded-full p-0.5 hover:bg-muted"
								>
									<X className="h-3 w-3" />
								</button>
							</Badge>
						);
					})}
					<Button
						variant="ghost"
						size="sm"
						onClick={clearAllFilters}
						className="h-7 px-2 text-xs text-muted-foreground"
					>
						Clear all
					</Button>
				</div>
			)}
		</div>
	);
}
