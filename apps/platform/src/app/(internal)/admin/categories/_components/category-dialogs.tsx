"use client";

import { FolderTree, Loader2, Upload } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
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
import {
	createCategory,
	updateCategory,
} from "@/server/api/internal/categories";

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
							<p className="text-sm">
								{category.parent?.slug || "None (Root)"}
							</p>
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
	categories?: Category[];
	onSuccess?: () => void;
}

export function CategoryFormDialog({
	open,
	onOpenChange,
	category,
	mode,
	categories = [],
	onSuccess,
}: CategoryFormDialogProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [name, setName] = useState("");
	const [slug, setSlug] = useState("");
	const [description, setDescription] = useState("");
	const [parentId, setParentId] = useState<string | null>(null);
	const [isActive, setIsActive] = useState(true);

	// Reset form when dialog opens or category changes
	useEffect(() => {
		if (open) {
			if (mode === "edit" && category) {
				setName(category.name);
				setSlug(category.slug);
				setDescription("");
				setParentId(category.parentId ?? null);
				setIsActive(category.status === "Active");
			} else {
				setName("");
				setSlug("");
				setDescription("");
				setParentId(null);
				setIsActive(true);
			}
		}
	}, [open, mode, category]);

	// Auto-generate slug from name
	const handleNameChange = useCallback(
		(value: string) => {
			setName(value);
			if (mode === "create") {
				const generatedSlug = value
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, "-")
					.replace(/^-|-$/g, "");
				setSlug(generatedSlug);
			}
		},
		[mode],
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim() || !slug.trim()) {
			toast.error("Name and slug are required");
			return;
		}

		setIsSubmitting(true);
		try {
			const data = {
				name: name.trim(),
				slug: slug.trim(),
				description: description.trim() || undefined,
				parentId: parentId || undefined,
				isActive,
			};

			if (mode === "create") {
				await createCategory(data);
				toast.success("Category created successfully");
			} else if (category) {
				await updateCategory(category.id, data);
				toast.success("Category updated successfully");
			}

			onOpenChange(false);
			onSuccess?.();
		} catch (error) {
			console.error("Failed to save category:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to save category",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	// Filter out current category and its children from parent options
	const availableParents = categories.filter(
		(c) => c.id !== category?.id && c.parentId !== category?.id,
	);

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
							value={name}
							onChange={(e) => handleNameChange(e.target.value)}
							placeholder="Electronics"
							required
							disabled={isSubmitting}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="slug">Slug *</Label>
						<Input
							id="slug"
							value={slug}
							onChange={(e) => setSlug(e.target.value)}
							placeholder="electronics"
							className="font-mono"
							required
							disabled={isSubmitting}
						/>
						<p className="text-xs text-muted-foreground">
							URL-friendly version of the name (e.g., electronics, home-garden)
						</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="parentCategory">Parent Category</Label>
						<Select
							value={parentId ?? "none"}
							onValueChange={(value) =>
								setParentId(value === "none" ? null : value)
							}
							disabled={isSubmitting}
						>
							<SelectTrigger id="parentCategory">
								<SelectValue placeholder="None (Root Category)" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="none">None (Root Category)</SelectItem>
								{availableParents.map((cat) => (
									<SelectItem key={cat.id} value={cat.id}>
										{cat.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Category description for SEO and display..."
							rows={3}
							disabled={isSubmitting}
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
							<Label htmlFor="active">Active Status</Label>
							<p className="text-sm text-muted-foreground">
								Make this category visible
							</p>
						</div>
						<Switch
							id="active"
							checked={isActive}
							onCheckedChange={setIsActive}
							disabled={isSubmitting}
						/>
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
							disabled={isSubmitting}
						>
							Cancel
						</Button>
						<PolarisButton type="submit" disabled={isSubmitting}>
							{isSubmitting ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin mr-2" />
									{mode === "create" ? "Creating..." : "Saving..."}
								</>
							) : mode === "create" ? (
								"Create Category"
							) : (
								"Save Changes"
							)}
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
	onConfirm?: () => void;
}

export function DeleteCategoryDialog({
	open,
	onOpenChange,
	category,
	onConfirm,
}: DeleteCategoryDialogProps) {
	const handleDelete = () => {
		if (onConfirm) {
			onConfirm();
		} else {
			onOpenChange(false);
		}
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
