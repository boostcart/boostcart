"use client";

import { FolderTree, Upload } from "lucide-react";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

interface Category {
	id: string;
	name: string;
	slug: string;
	parent?: string | null;
	products: number;
	subcategories: number;
	status: string;
}

interface ViewCategoryDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	category: Category | null;
}

export function ViewCategoryDialog({
	open,
	onOpenChange,
	category,
}: ViewCategoryDialogProps) {
	if (!category) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						<FolderTree className="h-5 w-5" />
						{category.name}
					</DialogTitle>
					<DialogDescription>Category details and hierarchy</DialogDescription>
				</DialogHeader>

				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">
								Category Name
							</p>
							<p className="text-lg font-medium">{category.name}</p>
						</div>
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">Slug</p>
							<p className="text-sm font-mono">{category.slug}</p>
						</div>
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">
								Parent Category
							</p>
							<p className="text-sm">{category.parent || "None (Root)"}</p>
						</div>
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">
								Status
							</p>
							<Badge>{category.status}</Badge>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="p-4 border rounded-lg bg-muted/30">
							<p className="text-sm text-muted-foreground mb-1">Products</p>
							<p className="text-3xl font-bold">{category.products}</p>
						</div>
						<div className="p-4 border rounded-lg bg-muted/30">
							<p className="text-sm text-muted-foreground mb-1">
								Subcategories
							</p>
							<p className="text-3xl font-bold">{category.subcategories}</p>
						</div>
					</div>

					<div className="space-y-2">
						<p className="text-sm font-medium text-muted-foreground">
							Description
						</p>
						<p className="text-sm text-muted-foreground">
							Browse our wide selection of {category.name.toLowerCase()} with
							the best quality and prices.
						</p>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface CategoryFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	category?: Category | null;
	mode: "create" | "edit";
}

export function CategoryFormDialog({
	open,
	onOpenChange,
	category,
	mode,
}: CategoryFormDialogProps) {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === "create" ? "Create New Category" : "Edit Category"}
					</DialogTitle>
					<DialogDescription>
						{mode === "create"
							? "Add a new category to organize your products"
							: "Update category information"}
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="categoryName">Category Name *</Label>
						<Input
							id="categoryName"
							defaultValue={category?.name}
							placeholder="Electronics"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="slug">Slug *</Label>
						<Input
							id="slug"
							defaultValue={category?.slug}
							placeholder="electronics"
							className="font-mono"
							required
						/>
						<p className="text-xs text-muted-foreground">
							URL-friendly version of the name (e.g., electronics, home-garden)
						</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="parentCategory">Parent Category</Label>
						<Select defaultValue={category?.parent || "none"}>
							<SelectTrigger id="parentCategory">
								<SelectValue placeholder="None (Root Category)" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="none">None (Root Category)</SelectItem>
								<SelectItem value="electronics">Electronics</SelectItem>
								<SelectItem value="clothing">Clothing</SelectItem>
								<SelectItem value="home">Home & Garden</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							placeholder="Category description for SEO and display..."
							rows={3}
						/>
					</div>

					<div className="space-y-2">
						<Label>Category Icon</Label>
						<div className="flex items-center gap-4">
							<div className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors">
								<Upload className="h-6 w-6 text-muted-foreground" />
							</div>
							<div className="flex-1">
								<p className="text-sm text-muted-foreground">
									Upload a 512x512px icon for this category
								</p>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label htmlFor="featured">Featured Category</Label>
							<p className="text-sm text-muted-foreground">
								Display on homepage
							</p>
						</div>
						<Switch id="featured" />
					</div>

					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label htmlFor="active">Active Status</Label>
							<p className="text-sm text-muted-foreground">
								Make this category visible
							</p>
						</div>
						<Switch id="active" defaultChecked />
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<PolarisButton type="submit">
							{mode === "create" ? "Create Category" : "Save Changes"}
						</PolarisButton>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteCategoryDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	category: Category | null;
}

export function DeleteCategoryDialog({
	open,
	onOpenChange,
	category,
}: DeleteCategoryDialogProps) {
	const handleDelete = () => {
		onOpenChange(false);
	};

	if (!category) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Category</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this category? All subcategories and
						product associations will be removed. This action cannot be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="p-4 border rounded-lg bg-muted/30 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Category:</span>
						<span className="font-medium">{category.name}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Products:</span>
						<span className="font-medium">{category.products}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Subcategories:</span>
						<span className="font-medium">{category.subcategories}</span>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						Delete Category
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
