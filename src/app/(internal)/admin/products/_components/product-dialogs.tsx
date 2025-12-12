"use client";

import { Image as ImageIcon, Plus, Trash2, Upload } from "lucide-react";
import { useState } from "react";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface Product {
	id: string;
	slug: string;
	price: number;
	sku: string | null;
	trackStock: boolean;
	stock: number | null;
	categoryId: string;
	categoryName?: string; // For display purposes
	brandId: string | null;
	brandName?: string | null; // For display purposes
	name: string; // From translations
	description?: string | null; // From translations
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
}

interface ViewProductDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	product: Product | null;
}

export function ViewProductDialog({
	open,
	onOpenChange,
	product,
}: ViewProductDialogProps) {
	if (!product) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Product Details - {product.name}</DialogTitle>
					<DialogDescription>
						View complete product information
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="general" className="w-full">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="general">General</TabsTrigger>
						<TabsTrigger value="inventory">Inventory</TabsTrigger>
						<TabsTrigger value="pricing">Pricing</TabsTrigger>
						<TabsTrigger value="media">Media</TabsTrigger>
					</TabsList>

					<TabsContent value="general" className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Product Name
								</p>
								<p className="text-sm">{product.name}</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">SKU</p>
								<p className="text-sm font-mono">{product.sku || "N/A"}</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Slug
								</p>
								<p className="text-sm font-mono">{product.slug}</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Category
								</p>
								<p className="text-sm">
									{product.categoryName || product.categoryId}
								</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Brand
								</p>
								<p className="text-sm">
									{product.brandName || product.brandId || "N/A"}
								</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Status
								</p>
								<Badge>{product.deletedAt ? "Deleted" : "Active"}</Badge>
							</div>
						</div>
						<Separator />
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">
								Description
							</p>
							<p className="text-sm text-muted-foreground">
								High-quality wireless headphones with active noise cancellation,
								40-hour battery life, and premium sound quality. Perfect for
								music lovers and professionals.
							</p>
						</div>
					</TabsContent>

					<TabsContent value="inventory" className="space-y-4">
						<div className="grid grid-cols-3 gap-4">
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Current Stock
								</p>
								<p className="text-2xl font-bold">{product.stock}</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Reserved
								</p>
								<p className="text-2xl font-bold">5</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Available
								</p>
								<p className="text-2xl font-bold">{(product.stock ?? 0) - 5}</p>
							</div>
						</div>
						<Separator />
						<div className="space-y-2">
							<p className="text-sm font-medium">Stock History</p>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-muted-foreground">Initial stock</span>
									<span>+150</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">Sold</span>
									<span className="text-red-600">-35</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">Restocked</span>
									<span className="text-green-600">+50</span>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="pricing" className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Price
								</p>
								<p className="text-2xl font-bold">{product.price}</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Cost
								</p>
								<p className="text-2xl font-bold">$45.00</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Margin
								</p>
								<p className="text-2xl font-bold text-green-600">95%</p>
							</div>
							<div className="space-y-2">
								<p className="text-sm font-medium text-muted-foreground">
									Compare at Price
								</p>
								<p className="text-2xl font-bold line-through text-muted-foreground">
									$129.99
								</p>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="media" className="space-y-4">
						<div className="grid grid-cols-3 gap-4">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="aspect-square border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/30"
								>
									<ImageIcon className="h-8 w-8 text-muted-foreground" />
								</div>
							))}
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface ProductFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	product?: Product | null;
	mode: "create" | "edit";
}

export function ProductFormDialog({
	open,
	onOpenChange,
	product,
	mode,
}: ProductFormDialogProps) {
	const [variants, setVariants] = useState([{ id: `1`, name: ``, value: `` }]);

	const addVariant = () => {
		setVariants([
			...variants,
			{ id: Date.now().toString(), name: ``, value: `` },
		]);
	};

	const removeVariant = (id: string) => {
		setVariants(variants.filter((v) => v.id !== id));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === "create" ? "Create New Product" : `Edit Product`}
					</DialogTitle>
					<DialogDescription>
						{mode === "create"
							? "Add a new product to your catalog"
							: "Update product information"}
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit}>
					<Tabs defaultValue="general" className="w-full">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="general">General</TabsTrigger>
							<TabsTrigger value="pricing">Pricing</TabsTrigger>
							<TabsTrigger value="inventory">Inventory</TabsTrigger>
							<TabsTrigger value="variants">Variants</TabsTrigger>
						</TabsList>

						<TabsContent value="general" className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="productName">Product Name *</Label>
								<Input
									id="productName"
									defaultValue={product?.name}
									placeholder="Wireless Headphones"
									required
								/>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="sku">SKU *</Label>
									<Input
										id="sku"
										defaultValue={product?.sku ?? ""}
										placeholder="WH-001"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="barcode">Barcode</Label>
									<Input id="barcode" placeholder="1234567890123" />
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="category">Category *</Label>
									<Select defaultValue={product?.categoryId}>
										<SelectTrigger id="category">
											<SelectValue placeholder="Select category" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Electronics">Electronics</SelectItem>
											<SelectItem value="Clothing">Clothing</SelectItem>
											<SelectItem value="Home">Home & Garden</SelectItem>
											<SelectItem value="Sports">Sports</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<Label htmlFor="brand">Brand</Label>
									<Select defaultValue={product?.brandId ?? ""}>
										<SelectTrigger id="brand">
											<SelectValue placeholder="Select brand" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Apple">Apple</SelectItem>
											<SelectItem value="Samsung">Samsung</SelectItem>
											<SelectItem value="Sony">Sony</SelectItem>
											<SelectItem value="Nike">Nike</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									placeholder="Detailed product description..."
									rows={4}
								/>
							</div>

							<div className="flex items-center justify-between">
								<div className="space-y-0.5">
									<Label htmlFor="active">Product Status</Label>
									<p className="text-sm text-muted-foreground">
										Make this product available for purchase
									</p>
								</div>
								<Switch id="active" defaultChecked />
							</div>
						</TabsContent>

						<TabsContent value="pricing" className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="price">Price *</Label>
									<Input
										id="price"
										type="number"
										step="0.01"
										min="0"
										defaultValue={product?.price ?? ""}
										placeholder="89.99"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="comparePrice">Compare at Price</Label>
									<Input
										id="comparePrice"
										type="number"
										step="0.01"
										min="0"
										placeholder="129.99"
									/>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="cost">Cost per Item</Label>
									<Input
										id="cost"
										type="number"
										step="0.01"
										min="0"
										placeholder="45.00"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="profit">Profit</Label>
									<Input
										id="profit"
										placeholder="Calculated automatically"
										disabled
									/>
								</div>
							</div>

							<Separator />

							<div className="flex items-center justify-between">
								<div className="space-y-0.5">
									<Label htmlFor="taxable">Charge Tax</Label>
									<p className="text-sm text-muted-foreground">
										This product is taxable
									</p>
								</div>
								<Switch id="taxable" defaultChecked />
							</div>
						</TabsContent>

						<TabsContent value="inventory" className="space-y-4">
							<div className="grid grid-cols-3 gap-4">
								<div className="space-y-2">
									<Label htmlFor="stock">Stock Quantity *</Label>
									<Input
										id="stock"
										type="number"
										min="0"
										defaultValue={product?.stock ?? ""}
										placeholder="100"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lowStock">Low Stock Alert</Label>
									<Input
										id="lowStock"
										type="number"
										min="0"
										defaultValue="10"
										placeholder="10"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="weight">Weight (kg)</Label>
									<Input
										id="weight"
										type="number"
										step="0.01"
										min="0"
										placeholder="0.5"
									/>
								</div>
							</div>

							<Separator />

							<div className="flex items-center justify-between">
								<div className="space-y-0.5">
									<Label htmlFor="trackInventory">Track Inventory</Label>
									<p className="text-sm text-muted-foreground">
										Enable stock management for this product
									</p>
								</div>
								<Switch id="trackInventory" defaultChecked />
							</div>

							<div className="flex items-center justify-between">
								<div className="space-y-0.5">
									<Label htmlFor="allowBackorder">Allow Backorders</Label>
									<p className="text-sm text-muted-foreground">
										Customers can purchase when out of stock
									</p>
								</div>
								<Switch id="allowBackorder" />
							</div>
						</TabsContent>

						<TabsContent value="variants" className="space-y-4">
							<div className="space-y-4">
								{variants.map((variant) => (
									<div
										key={variant.id}
										className="flex gap-2 p-4 border rounded-lg bg-muted/30"
									>
										<div className="flex-1 grid grid-cols-2 gap-2">
											<div className="space-y-2">
												<Label htmlFor={`variantName-${variant.id}`}>
													Option Name
												</Label>
												<Input
													id={`variantName-${variant.id}`}
													placeholder="Size, Color, Material..."
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor={`variantValue-${variant.id}`}>
													Values
												</Label>
												<Input
													id={`variantValue-${variant.id}`}
													placeholder="S, M, L, XL"
												/>
											</div>
										</div>
										<Button
											type="button"
											variant="ghost"
											size="icon"
											onClick={() => removeVariant(variant.id)}
											className="mt-8"
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								))}
							</div>

							<Button
								type="button"
								variant="outline"
								onClick={addVariant}
								className="w-full"
							>
								<Plus className="h-4 w-4 mr-2" />
								Add Variant Option
							</Button>
						</TabsContent>
					</Tabs>

					<Separator className="my-6" />

					<div className="space-y-4">
						<Label>Product Images</Label>
						<div className="grid grid-cols-4 gap-4">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors"
								>
									<Upload className="h-6 w-6 text-muted-foreground mb-2" />
									<span className="text-xs text-muted-foreground">Upload</span>
								</div>
							))}
						</div>
					</div>

					<DialogFooter className="mt-6">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<PolarisButton type="submit">
							{mode === "create" ? "Create Product" : "Save Changes"}
						</PolarisButton>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteProductDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	product: Product | null;
}

export function DeleteProductDialog({
	open,
	onOpenChange,
	product,
}: DeleteProductDialogProps) {
	const handleDelete = () => {
		onOpenChange(false);
	};

	if (!product) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Product</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this product? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<div className="p-4 border rounded-lg bg-muted/30 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Product:</span>
						<span className="font-medium">{product.name}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">SKU:</span>
						<span className="font-medium font-mono">{product.sku}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Stock:</span>
						<span className="font-medium">{product.stock} units</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Price:</span>
						<span className="font-medium">{product.price}</span>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						Delete Product
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
