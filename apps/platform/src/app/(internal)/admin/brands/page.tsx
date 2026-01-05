"use client";

import {
	Download,
	Eye,
	Filter,
	Pencil,
	Plus,
	Search,
	Tag,
	Trash2,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { deleteBrand, getBrands } from "@/server/api/internal/brands";
import {
	BrandFormDialog,
	DeleteBrandDialog,
	ViewBrandDialog,
} from "./_components/brand-dialogs";

// Backend API type
interface ApiBrand {
	id: string;
	name: string;
	slug: string;
	description: string | null;
	logoUrl: string | null;
	tenantId: string;
	createdAt: Date;
	updatedAt: Date;
	_count: {
		products: number;
	};
}

// Dialog component type
interface Brand {
	id: string;
	name: string;
	slug: string;
	description: string;
	logo: string;
	website: string;
	isActive: boolean;
	isFeatured: boolean;
	productCount: number;
}

export default function BrandsPage() {
	const [searchQuery, setSearchQuery] = useState(``);
	const [brands, setBrands] = useState<Brand[]>([]);
	const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Dialog states
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const fetchBrands = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getBrands();
			// Transform API data to match dialog types
			const transformed = data.map(
				(brand): Brand => ({
					id: brand.id,
					name: brand.name,
					slug: brand.slug,
					description: brand.description || "",
					logo: brand.logoUrl || "",
					website: "", // TODO: Add websiteUrl field to Brand model
					isActive: true, // TODO: Add isActive field to Brand model
					isFeatured: false, // TODO: Add isFeatured field to Brand model
					productCount: brand._count.products,
				}),
			);
			setBrands(transformed);
			setFilteredBrands(transformed);
		} catch (error) {
			console.error("Failed to fetch brands:", error);
			toast.error("Failed to load brands");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchBrands();
	}, [fetchBrands]);

	useEffect(() => {
		if (!searchQuery.trim()) {
			setFilteredBrands(brands);
			return;
		}

		const query = searchQuery.toLowerCase();
		const filtered = brands.filter(
			(brand) =>
				brand.name.toLowerCase().includes(query) ||
				brand.slug.toLowerCase().includes(query) ||
				brand.description.toLowerCase().includes(query),
		);
		setFilteredBrands(filtered);
	}, [searchQuery, brands]);

	// Event handlers
	const handleView = (brand: Brand) => {
		setSelectedBrand(brand);
		setViewDialogOpen(true);
	};

	const handleEdit = (brand: Brand) => {
		setSelectedBrand(brand);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDeleteClick = (brand: Brand) => {
		setSelectedBrand(brand);
		setDeleteDialogOpen(true);
	};

	const handleDeleteConfirm = async (brandId: string) => {
		try {
			await deleteBrand(brandId);
			toast.success("Brand deleted successfully");
			await fetchBrands();
			setDeleteDialogOpen(false);
			setSelectedBrand(null);
		} catch (error) {
			console.error("Failed to delete brand:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to delete brand",
			);
		}
	};

	const handleCreate = () => {
		setSelectedBrand(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Brands</h1>
					<p className="text-muted-foreground mt-1">
						Manage product brands and manufacturers
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Brand
				</PolarisButton>
			</div>{" "}
			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Brands</p>
					<p className="text-2xl font-bold mt-1">{brands.length}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Brands</p>
					<p className="text-2xl font-bold mt-1">
						{brands.filter((b) => b.isActive).length}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Products</p>
					<p className="text-2xl font-bold mt-1">
						{brands.reduce((acc, b) => acc + b.productCount, 0)}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Avg. per Brand</p>
					<p className="text-2xl font-bold mt-1">
						{brands.length > 0
							? Math.round(
									brands.reduce((acc, b) => acc + b.productCount, 0) /
										brands.length,
								)
							: 0}
					</p>
				</Card>
			</div>
			{/* Filters */}
			<Card className="p-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search brands by name or slug..."
							className="pl-9"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<Button type="button" variant="outline">
						<Filter className="h-4 w-4 mr-2" />
						More Filters
					</Button>
					<Button type="button" variant="outline">
						<Download className="h-4 w-4 mr-2" />
						Export
					</Button>
				</div>
			</Card>
			{/* Brands Table */}
			<Card>
				{isLoading ? (
					<div className="flex items-center justify-center min-h-[300px]">
						<Loader size="lg" />
					</div>
				) : filteredBrands.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<Tag className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>
								{searchQuery ? "No brands found" : "No brands yet"}
							</EmptyTitle>
							<EmptyDescription>
								{searchQuery
									? "Try adjusting your search"
									: "Create your first brand to get started"}
							</EmptyDescription>
						</EmptyHeader>
						{!searchQuery && (
							<EmptyContent>
								<PolarisButton type="button" onClick={handleCreate}>
									<Plus className="h-4 w-4" />
									Add Brand
								</PolarisButton>
							</EmptyContent>
						)}
					</Empty>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Brand</TableHead>
								<TableHead>Slug</TableHead>
								<TableHead>Website</TableHead>
								<TableHead>Products</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="w-[70px]"></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredBrands.map((brand) => (
								<TableRow key={brand.id} className="cursor-pointer">
									<TableCell>
										<div className="flex items-center gap-3">
											<div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm">
												🏷️
											</div>
											<div>
												<p className="font-medium text-sm">{brand.name}</p>
												<p className="text-muted-foreground text-xs">
													{brand.description}
												</p>
											</div>
										</div>
									</TableCell>
									<TableCell className="font-mono text-sm">
										{brand.slug}
									</TableCell>
									<TableCell className="text-sm">{brand.website}</TableCell>
									<TableCell>
										<span className="font-medium">{brand.productCount}</span>
									</TableCell>
									<TableCell>
										<Badge variant={brand.isActive ? "default" : "secondary"}>
											{brand.isActive ? "Active" : "Inactive"}
										</Badge>
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleView(brand)}
											>
												<Eye className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleEdit(brand)}
											>
												<Pencil className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleDeleteClick(brand)}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</Card>
			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium">1-{filteredBrands.length}</span>{" "}
					of{` `}
					<span className="font-medium">{brands.length}</span> brands
				</p>
				<div className="flex gap-2">
					<Button type="button" variant="outline" size="sm" disabled>
						Previous
					</Button>
					<Button type="button" variant="outline" size="sm" disabled>
						Next
					</Button>
				</div>
			</div>
			<ViewBrandDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				brand={selectedBrand}
			/>
			<BrandFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				brand={selectedBrand}
				mode={formMode}
				onSuccess={fetchBrands}
			/>
			<DeleteBrandDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				brand={selectedBrand}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
}
