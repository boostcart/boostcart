"use client";

import {
	Download,
	Eye,
	Filter,
	Pencil,
	Plus,
	Search,
	Trash2,
} from "lucide-react";
import { useState } from "react";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	BrandFormDialog,
	DeleteBrandDialog,
	ViewBrandDialog,
} from "./_components/brand-dialogs";

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

	// Dialog states
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const brands: Brand[] = [
		{
			id: `1`,
			name: `Apple`,
			slug: `apple`,
			description: `Premium technology and electronics brand`,
			logo: ``,
			website: `https://www.apple.com`,
			isActive: true,
			isFeatured: true,
			productCount: 1234,
		},
		{
			id: `2`,
			name: `Samsung`,
			slug: `samsung`,
			description: `Global electronics manufacturer`,
			logo: ``,
			website: `https://www.samsung.com`,
			isActive: true,
			isFeatured: false,
			productCount: 987,
		},
		{
			id: `3`,
			name: `Sony`,
			slug: `sony`,
			description: `Consumer and professional electronics`,
			logo: ``,
			website: `https://www.sony.com`,
			isActive: true,
			isFeatured: false,
			productCount: 654,
		},
		{
			id: `4`,
			name: `Dell`,
			slug: `dell`,
			description: `Computer technology company`,
			logo: ``,
			website: `https://www.dell.com`,
			isActive: true,
			isFeatured: false,
			productCount: 432,
		},
		{
			id: `5`,
			name: `HP`,
			slug: `hp`,
			description: `Computing and printing solutions`,
			logo: ``,
			website: `https://www.hp.com`,
			isActive: true,
			isFeatured: false,
			productCount: 389,
		},
		{
			id: `6`,
			name: `LG`,
			slug: `lg`,
			description: `Home appliances and electronics`,
			logo: ``,
			website: `https://www.lg.com`,
			isActive: true,
			isFeatured: false,
			productCount: 267,
		},
	];

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

	const handleDelete = (brand: Brand) => {
		setSelectedBrand(brand);
		setDeleteDialogOpen(true);
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
					<p className="text-2xl font-bold mt-1">24</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Brands</p>
					<p className="text-2xl font-bold mt-1">21</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Products</p>
					<p className="text-2xl font-bold mt-1">3,963</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Avg. per Brand</p>
					<p className="text-2xl font-bold mt-1">165</p>
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
						{brands.map((brand) => (
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
											onClick={() => handleDelete(brand)}
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium">1-{brands.length}</span> of{` `}
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
			/>
			<DeleteBrandDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				brand={selectedBrand}
			/>
		</div>
	);
}
