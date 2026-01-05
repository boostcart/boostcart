"use client";

import {
	Download,
	Edit,
	Eye,
	MoreVertical,
	Package,
	Plus,
	Search,
	Trash2,
} from "lucide-react";
import { useState } from "react";
import {
	DeleteDialog,
	DisplayField,
	FormField,
	FormLayout,
	SimpleFormDialog,
	ViewDialog,
} from "@/components/admin/generic-dialogs";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface Brand {
	id: string;
	name: string;
	slug: string;
	products: number;
	status: string;
}

export default function BrandsWithCRUDPage() {
	const [searchQuery, setSearchQuery] = useState(``);
	const [viewDialog, setViewDialog] = useState(false);
	const [createDialog, setCreateDialog] = useState(false);
	const [editDialog, setEditDialog] = useState(false);
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

	const brands: Brand[] = [
		{
			id: `1`,
			name: `Apple`,
			slug: `apple`,
			products: 145,
			status: `Active`,
		},
		{
			id: `2`,
			name: `Samsung`,
			slug: `samsung`,
			products: 98,
			status: `Active`,
		},
		{
			id: `3`,
			name: `Nike`,
			slug: `nike`,
			products: 234,
			status: `Active`,
		},
		{
			id: `4`,
			name: `Adidas`,
			slug: `adidas`,
			products: 187,
			status: `Active`,
		},
	];

	const handleView = (brand: Brand) => {
		setSelectedBrand(brand);
		setViewDialog(true);
	};

	const handleEdit = (brand: Brand) => {
		setSelectedBrand(brand);
		setEditDialog(true);
	};

	const handleDelete = (brand: Brand) => {
		setSelectedBrand(brand);
		setDeleteDialog(true);
	};

	const handleCreate = () => {
		setSelectedBrand(null);
		setCreateDialog(true);
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
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-muted-foreground">
								Total Brands
							</p>
							<p className="text-2xl font-bold mt-2">{brands.length}</p>
						</div>
						<Package className="h-8 w-8 text-muted-foreground" />
					</div>
				</Card>
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-muted-foreground">
								Active Brands
							</p>
							<p className="text-2xl font-bold mt-2">
								{brands.filter((b) => b.status === `Active`).length}
							</p>
						</div>
						<Badge className="h-8 w-8" />
					</div>
				</Card>
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-muted-foreground">
								Total Products
							</p>
							<p className="text-2xl font-bold mt-2">
								{brands.reduce((sum, b) => sum + b.products, 0)}
							</p>
						</div>
						<Package className="h-8 w-8 text-muted-foreground" />
					</div>
				</Card>
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-muted-foreground">
								Avg Products/Brand
							</p>
							<p className="text-2xl font-bold mt-2">
								{Math.round(
									brands.reduce((sum, b) => sum + b.products, 0) /
										brands.length,
								)}
							</p>
						</div>
						<Package className="h-8 w-8 text-muted-foreground" />
					</div>
				</Card>
			</div>
			{/* Search & Filters */}
			<Card className="p-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search brands..."
							className="pl-9"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
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
							<TableHead>Brand Name</TableHead>
							<TableHead>Slug</TableHead>
							<TableHead>Products</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="w-[70px]"></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{brands.map((brand) => (
							<TableRow key={brand.id}>
								<TableCell className="font-medium">{brand.name}</TableCell>
								<TableCell className="font-mono text-sm">
									{brand.slug}
								</TableCell>
								<TableCell>{brand.products}</TableCell>
								<TableCell>
									<Badge variant="default">{brand.status}</Badge>
								</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button type="button" variant="ghost" size="icon">
												<MoreVertical className="h-4 w-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuItem onClick={() => handleView(brand)}>
												<Eye className="h-4 w-4 mr-2" />
												View details
											</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleEdit(brand)}>
												<Edit className="h-4 w-4 mr-2" />
												Edit brand
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem
												className="text-red-600"
												onClick={() => handleDelete(brand)}
											>
												<Trash2 className="h-4 w-4 mr-2" />
												Delete brand
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
			{/* CRUD Dialogs */}
			{/* View Dialog */}
			{selectedBrand && (
				<ViewDialog
					open={viewDialog}
					onOpenChange={setViewDialog}
					title={selectedBrand.name}
					description="Brand details and statistics"
				>
					<FormLayout.Grid cols={2}>
						<DisplayField.Text
							label="Brand Name"
							value={selectedBrand.name}
							variant="large"
						/>
						<DisplayField.Badge
							label="Status"
							value={selectedBrand.status}
							variant="default"
						/>
					</FormLayout.Grid>

					<FormLayout.Separator />

					<FormLayout.Grid cols={2}>
						<DisplayField.Text
							label="Slug"
							value={selectedBrand.slug}
							variant="mono"
						/>
						<DisplayField.Text
							label="Brand ID"
							value={selectedBrand.id}
							variant="mono"
						/>
					</FormLayout.Grid>

					<FormLayout.Separator />

					<FormLayout.Grid cols={2}>
						<DisplayField.Stat
							label="Products"
							value={selectedBrand.products}
						/>
						<DisplayField.Stat label="Collections" value={12} />
					</FormLayout.Grid>

					<DisplayField.Section title="Description">
						<p>
							{selectedBrand.name} is a leading manufacturer known for quality
							and innovation. Browse our extensive collection of{" "}
							{selectedBrand.name}
							{` `}
							products.
						</p>
					</DisplayField.Section>
				</ViewDialog>
			)}
			{/* Create Dialog */}
			<SimpleFormDialog
				open={createDialog}
				onOpenChange={setCreateDialog}
				title="Create New Brand"
				description="Add a new brand to your catalog"
				mode="create"
				onSubmit={(e) => {
					console.log(`Create brand form submitted`, e);
				}}
			>
				<FormField.Text
					id="name"
					label="Brand Name"
					placeholder="Apple"
					required
				/>

				<FormField.Text
					id="slug"
					label="Slug"
					placeholder="apple"
					type="text"
				/>

				<FormField.Textarea
					id="description"
					label="Description"
					placeholder="Brand description for SEO and display..."
					rows={4}
				/>

				<FormField.Switch
					id="featured"
					label="Featured Brand"
					description="Display on homepage"
				/>

				<FormField.Switch
					id="active"
					label="Active Status"
					description="Make this brand visible"
					defaultChecked
				/>
			</SimpleFormDialog>
			{/* Edit Dialog */}
			{selectedBrand && (
				<SimpleFormDialog
					open={editDialog}
					onOpenChange={setEditDialog}
					title="Edit Brand"
					description="Update brand information"
					mode="edit"
					onSubmit={(e) => {
						console.log(`Edit brand form submitted`, e);
					}}
				>
					<FormField.Text
						id="name"
						label="Brand Name"
						placeholder="Apple"
						defaultValue={selectedBrand.name}
						required
					/>

					<FormField.Text
						id="slug"
						label="Slug"
						placeholder="apple"
						defaultValue={selectedBrand.slug}
						type="text"
					/>

					<FormField.Textarea
						id="description"
						label="Description"
						placeholder="Brand description..."
						rows={4}
					/>

					<FormField.Switch
						id="featured"
						label="Featured Brand"
						description="Display on homepage"
					/>

					<FormField.Switch
						id="active"
						label="Active Status"
						description="Make this brand visible"
						defaultChecked
					/>
				</SimpleFormDialog>
			)}
			{/* Delete Dialog */}
			{selectedBrand && (
				<DeleteDialog
					open={deleteDialog}
					onOpenChange={setDeleteDialog}
					title="Delete Brand"
					description="Are you sure you want to delete this brand? All product associations will be removed. This action cannot be undone."
					itemName={selectedBrand.name}
					itemDetails={{
						products: selectedBrand.products,
						collections: 12,
					}}
					onConfirm={() => {
						console.log(`Delete brand:`, selectedBrand.id);
					}}
				/>
			)}
		</div>
	);
}
