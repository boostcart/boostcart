"use client";

import { FolderTree, MoreVertical, Plus, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
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
	deleteCategory,
	getCategories,
} from "@/server/api/internal/categories";
import {
	CategoryFormDialog,
	DeleteCategoryDialog,
	ViewCategoryDialog,
} from "./_components/category-dialogs";

// Backend API type
interface ApiCategory {
	id: string;
	slug: string;
	iconUrl: string | null;
	coverImageUrl: string | null;
	parentId: string | null;
	tenantId: string;
	createdAt: Date;
	updatedAt: Date;
	parent?: {
		id: string;
		slug: string;
	} | null;
	_count: {
		products: number;
		subCategories: number;
	};
}

// Dialog component type (compatible with component usage)
interface Category {
	id: string;
	name: string;
	slug: string;
	parentId?: string | null;
	parent?: {
		slug: string;
	} | null;
	products: number;
	subcategories: number;
	status: string;
	_count: {
		products: number;
		subCategories: number;
	};
}

export default function CategoriesPage() {
	const [searchQuery, setSearchQuery] = useState(``);
	const [categories, setCategories] = useState<Category[]>([]);
	const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Dialog states
	const [viewDialog, setViewDialog] = useState(false);
	const [createDialog, setCreateDialog] = useState(false);
	const [editDialog, setEditDialog] = useState(false);
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null,
	);

	const fetchCategories = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getCategories();
			// Transform API data to match dialog types
			const transformed = data.map(
				(cat: ApiCategory): Category => ({
					id: cat.id,
					name: cat.slug, // TODO: Add name field to Category model
					slug: cat.slug,
					parentId: cat.parentId,
					parent: cat.parent,
					products: cat._count.products,
					subcategories: cat._count.subCategories,
					status: "Active", // TODO: Add status field to Category model
					_count: cat._count,
				}),
			);
			setCategories(transformed);
			setFilteredCategories(transformed);
		} catch (error) {
			console.error("Failed to fetch categories:", error);
			toast.error("Failed to load categories");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);

	useEffect(() => {
		if (!searchQuery.trim()) {
			setFilteredCategories(categories);
			return;
		}

		const query = searchQuery.toLowerCase();
		const filtered = categories.filter(
			(cat) =>
				cat.slug.toLowerCase().includes(query) ||
				cat.parent?.slug.toLowerCase().includes(query),
		);
		setFilteredCategories(filtered);
	}, [searchQuery, categories]);

	const handleDelete = async (id: string) => {
		try {
			await deleteCategory(id);
			toast.success("Category deleted successfully");
			fetchCategories();
			setDeleteDialog(false);
		} catch (error) {
			console.error("Failed to delete category:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to delete category",
			);
		}
	};

	const handleDeleteConfirm = async () => {
		if (!selectedCategory) return;
		await handleDelete(selectedCategory.id);
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
				<PolarisButton type="button" onClick={() => setCreateDialog(true)}>
					<Plus className="h-4 w-4" />
					Add Category
				</PolarisButton>
			</div>

			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Categories</p>
					<p className="text-2xl font-bold mt-1">{categories.length}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Parent Categories</p>
					<p className="text-2xl font-bold mt-1">
						{categories.filter((c) => !c.parentId).length}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Subcategories</p>
					<p className="text-2xl font-bold mt-1">
						{categories.filter((c) => c.parentId).length}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Products</p>
					<p className="text-2xl font-bold mt-1">
						{categories.reduce((sum, c) => sum + c._count.products, 0)}
					</p>
				</Card>
			</div>

			{/* Search */}
			<Card className="p-4">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search categories by slug..."
						className="pl-9"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</Card>

			{/* Categories Table */}
			<Card>
				{isLoading ? (
					<div className="flex items-center justify-center py-12">
						<Loader size="lg" />
					</div>
				) : filteredCategories.length === 0 ? (
					<div className="text-center py-12">
						<FolderTree className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
						<h3 className="text-lg font-semibold mb-2">No categories found</h3>
						<p className="text-muted-foreground mb-4">
							{searchQuery
								? `No categories match "${searchQuery}"`
								: "Get started by creating your first category"}
						</p>
						{!searchQuery && (
							<PolarisButton onClick={() => setCreateDialog(true)}>
								<Plus className="h-4 w-4" />
								Add Category
							</PolarisButton>
						)}
					</div>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Category</TableHead>
								<TableHead>Slug</TableHead>
								<TableHead>Parent</TableHead>
								<TableHead>Products</TableHead>
								<TableHead>Subcategories</TableHead>
								<TableHead className="w-[70px]"></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredCategories.map((category) => (
								<TableRow key={category.id} className="cursor-pointer">
									<TableCell>
										<div className="flex items-center gap-3">
											<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
												<FolderTree className="h-5 w-5 text-white" />
											</div>
											<span className="font-medium">{category.slug}</span>
										</div>
									</TableCell>
									<TableCell>
										<code className="text-sm text-muted-foreground">
											{category.slug}
										</code>
									</TableCell>
									<TableCell>
										{category.parent?.slug ? (
											<span className="text-sm">{category.parent.slug}</span>
										) : (
											<span className="text-sm text-muted-foreground">
												Root category
											</span>
										)}
									</TableCell>
									<TableCell>
										<span className="text-sm">{category._count.products}</span>
									</TableCell>
									<TableCell>
										<span className="text-sm">
											{category._count.subCategories}
										</span>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" size="icon">
													<MoreVertical className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem
													onClick={() => {
														setSelectedCategory(category);
														setViewDialog(true);
													}}
												>
													View Details
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => {
														setSelectedCategory(category);
														setEditDialog(true);
													}}
												>
													Edit
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem
													onClick={() => {
														setSelectedCategory(category);
														setDeleteDialog(true);
													}}
													className="text-destructive focus:text-destructive"
												>
													Delete
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</Card>

			{/* Dialogs */}
			<ViewCategoryDialog
				open={viewDialog}
				onOpenChange={setViewDialog}
				category={selectedCategory}
			/>
			<CategoryFormDialog
				open={createDialog}
				onOpenChange={setCreateDialog}
				mode="create"
				categories={categories}
				onSuccess={fetchCategories}
			/>
			<CategoryFormDialog
				open={editDialog}
				onOpenChange={setEditDialog}
				mode="edit"
				category={selectedCategory}
				categories={categories}
				onSuccess={fetchCategories}
			/>
			<DeleteCategoryDialog
				open={deleteDialog}
				onOpenChange={setDeleteDialog}
				category={selectedCategory}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
}
