"use client";

import { FolderTree, MoreVertical, Plus, Search } from "lucide-react";
import { useState } from "react";
import { PolarisButton } from "@/components/admin/polaris-button";
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
import {
	CategoryFormDialog,
	DeleteCategoryDialog,
	ViewCategoryDialog,
} from "./_components/category-dialogs";

interface Category {
	id: string;
	name: string;
	slug: string;
	parent: string | null;
	products: number;
	subcategories: number;
	status: string;
}

export default function CategoriesPage() {
	const [searchQuery, setSearchQuery] = useState(``);

	// Dialog states
	const [viewDialog, setViewDialog] = useState(false);
	const [createDialog, setCreateDialog] = useState(false);
	const [editDialog, setEditDialog] = useState(false);
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null,
	);

	const categories = [
		{
			id: `1`,
			name: `Electronics`,
			slug: `electronics`,
			parent: null,
			products: 3456,
			subcategories: 12,
			status: `Active`,
		},
		{
			id: `2`,
			name: `Smartphones`,
			slug: `smartphones`,
			parent: `Electronics`,
			products: 567,
			subcategories: 5,
			status: `Active`,
		},
		{
			id: `3`,
			name: `Laptops`,
			slug: `laptops`,
			parent: `Electronics`,
			products: 234,
			subcategories: 3,
			status: `Active`,
		},
		{
			id: `4`,
			name: `Audio`,
			slug: `audio`,
			parent: null,
			products: 1234,
			subcategories: 8,
			status: `Active`,
		},
		{
			id: `5`,
			name: `Headphones`,
			slug: `headphones`,
			parent: `Audio`,
			products: 456,
			subcategories: 0,
			status: `Active`,
		},
		{
			id: `6`,
			name: `Speakers`,
			slug: `speakers`,
			parent: `Audio`,
			products: 234,
			subcategories: 0,
			status: `Active`,
		},
		{
			id: `7`,
			name: `Wearables`,
			slug: `wearables`,
			parent: null,
			products: 567,
			subcategories: 4,
			status: `Active`,
		},
		{
			id: `8`,
			name: `Smart Watches`,
			slug: `smart-watches`,
			parent: `Wearables`,
			products: 123,
			subcategories: 0,
			status: `Active`,
		},
		{
			id: `9`,
			name: `Accessories`,
			slug: `accessories`,
			parent: null,
			products: 2345,
			subcategories: 15,
			status: `Active`,
		},
		{
			id: `10`,
			name: `Clearance`,
			slug: `clearance`,
			parent: null,
			products: 89,
			subcategories: 0,
			status: `Inactive`,
		},
	];

	// Event handlers
	const handleView = (category: Category) => {
		setSelectedCategory(category);
		setViewDialog(true);
	};

	const handleEdit = (category: Category) => {
		setSelectedCategory(category);
		setEditDialog(true);
	};

	const handleDelete = (category: Category) => {
		setSelectedCategory(category);
		setDeleteDialog(true);
	};

	const handleCreate = () => {
		setSelectedCategory(null);
		setCreateDialog(true);
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Categories</h1>
					<p className="text-muted-foreground mt-1">
						Organize products into categories and subcategories
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Category
				</PolarisButton>
			</div>{" "}
			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Categories</p>
					<p className="text-2xl font-bold mt-1">48</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Parent Categories</p>
					<p className="text-2xl font-bold mt-1">12</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Subcategories</p>
					<p className="text-2xl font-bold mt-1">36</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Avg. Products</p>
					<p className="text-2xl font-bold mt-1">267</p>
				</Card>
			</div>
			{/* Search */}
			<Card className="p-4">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search categories by name or slug..."
						className="pl-9"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</Card>
			{/* Categories Table */}
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Category</TableHead>
							<TableHead>Slug</TableHead>
							<TableHead>Parent</TableHead>
							<TableHead>Products</TableHead>
							<TableHead>Subcategories</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="w-[70px]"></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{categories.map((category) => (
							<TableRow key={category.id} className="cursor-pointer">
								<TableCell>
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
											<FolderTree className="h-5 w-5 text-white" />
										</div>
										<div>
											<p className="font-medium text-sm">{category.name}</p>
											<p className="text-muted-foreground text-xs">
												ID: {category.id}
											</p>
										</div>
									</div>
								</TableCell>
								<TableCell className="font-mono text-sm">
									{category.slug}
								</TableCell>
								<TableCell>
									{category.parent ? (
										<span className="text-sm">{category.parent}</span>
									) : (
										<span className="text-muted-foreground text-sm">Root</span>
									)}
								</TableCell>
								<TableCell>
									<span className="font-medium">{category.products}</span>
								</TableCell>
								<TableCell>
									<span className="font-medium">{category.subcategories}</span>
								</TableCell>
								<TableCell>
									<span
										className={`px-2 py-1 text-xs font-medium rounded-full ${
											category.status === `Active`
												? `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`
												: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`
										}`}
									>
										{category.status}
									</span>
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
											<DropdownMenuItem onClick={() => handleView(category)}>
												View details
											</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleEdit(category)}>
												Edit category
											</DropdownMenuItem>
											<DropdownMenuItem>Add subcategory</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem>View products</DropdownMenuItem>
											<DropdownMenuItem>Manage filters</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem
												className="text-red-600"
												onClick={() => handleDelete(category)}
											>
												Delete category
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium">1-{categories.length}</span> of
					{` `}
					<span className="font-medium">{categories.length}</span> categories
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
			{/* CRUD Dialogs */}
			<ViewCategoryDialog
				open={viewDialog}
				onOpenChange={setViewDialog}
				category={selectedCategory}
			/>
			<CategoryFormDialog
				open={createDialog}
				onOpenChange={setCreateDialog}
				mode="create"
			/>
			<CategoryFormDialog
				open={editDialog}
				onOpenChange={setEditDialog}
				mode="edit"
				category={selectedCategory}
			/>
			<DeleteCategoryDialog
				open={deleteDialog}
				onOpenChange={setDeleteDialog}
				category={selectedCategory}
			/>
		</div>
	);
}
