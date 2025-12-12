"use client";

import { Building2, Globe, Package, TrendingUp } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

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

interface ViewBrandDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	brand: Brand | null;
}

export function ViewBrandDialog({
	open,
	onOpenChange,
	brand,
}: ViewBrandDialogProps) {
	if (!brand) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Brand Details</DialogTitle>
					<DialogDescription>
						View brand information and statistics
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="products">Products</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<div className="w-24 h-24 border-2 rounded-lg flex items-center justify-center bg-muted">
									{brand.logo ? (
										<div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
									) : (
										<Building2 className="h-12 w-12 text-muted-foreground" />
									)}
								</div>
								<div className="flex-1 space-y-2">
									<div>
										<h3 className="text-2xl font-bold">{brand.name}</h3>
										<p className="text-sm text-muted-foreground">
											/{brand.slug}
										</p>
									</div>
									<div className="flex gap-2">
										<Badge variant={brand.isActive ? `default` : `secondary`}>
											{brand.isActive ? `Active` : `Inactive`}
										</Badge>
										{brand.isFeatured && (
											<Badge variant="outline">Featured</Badge>
										)}
									</div>
								</div>
							</div>

							<Separator />

							<div>
								<p className="text-sm text-muted-foreground mb-1">
									Description
								</p>
								<p className="text-base">{brand.description}</p>
							</div>

							<div className="flex items-center gap-2">
								<Globe className="h-4 w-4 text-muted-foreground" />
								<a
									href={brand.website}
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:underline"
								>
									{brand.website}
								</a>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Package className="h-5 w-5 text-primary" />
										<p className="text-sm text-muted-foreground">
											Total Products
										</p>
									</div>
									<p className="text-3xl font-bold">{brand.productCount}</p>
								</div>
								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<TrendingUp className="h-5 w-5 text-primary" />
										<p className="text-sm text-muted-foreground">Avg. Rating</p>
									</div>
									<p className="text-3xl font-bold">4.5</p>
								</div>
							</div>

							<div className="p-4 bg-muted rounded-lg space-y-2">
								<p className="font-medium">Statistics</p>
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Total Sales:</span>
										<span className="font-medium">$123,456</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Orders:</span>
										<span className="font-medium">1,234</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Customers:</span>
										<span className="font-medium">567</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Avg. Order:</span>
										<span className="font-medium">$100.05</span>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="products" className="space-y-4 mt-4">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<p className="font-medium">Products ({brand.productCount})</p>
								<Button size="sm" variant="outline">
									View All
								</Button>
							</div>

							<div className="space-y-2">
								<div className="p-4 border rounded-lg">
									<div className="flex gap-4">
										<div className="w-16 h-16 bg-muted rounded-lg" />
										<div className="flex-1">
											<p className="font-medium">Product Name 1</p>
											<p className="text-sm text-muted-foreground">
												SKU: PRD-001
											</p>
											<div className="flex items-center gap-2 mt-1">
												<Badge variant="outline">In Stock</Badge>
												<span className="text-sm font-medium">$99.99</span>
											</div>
										</div>
									</div>
								</div>

								<div className="p-4 border rounded-lg">
									<div className="flex gap-4">
										<div className="w-16 h-16 bg-muted rounded-lg" />
										<div className="flex-1">
											<p className="font-medium">Product Name 2</p>
											<p className="text-sm text-muted-foreground">
												SKU: PRD-002
											</p>
											<div className="flex items-center gap-2 mt-1">
												<Badge variant="outline">In Stock</Badge>
												<span className="text-sm font-medium">$149.99</span>
											</div>
										</div>
									</div>
								</div>

								<div className="p-4 border rounded-lg">
									<div className="flex gap-4">
										<div className="w-16 h-16 bg-muted rounded-lg" />
										<div className="flex-1">
											<p className="font-medium">Product Name 3</p>
											<p className="text-sm text-muted-foreground">
												SKU: PRD-003
											</p>
											<div className="flex items-center gap-2 mt-1">
												<Badge variant="secondary">Low Stock</Badge>
												<span className="text-sm font-medium">$79.99</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface BrandFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit";
	brand?: Brand | null;
}

export function BrandFormDialog({
	open,
	onOpenChange,
	mode,
	brand,
}: BrandFormDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` ? `Create Brand` : `Edit Brand`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Add a new brand to your catalog`
							: `Update brand information`}
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="name">Brand Name *</Label>
						<Input
							id="name"
							placeholder="Nike"
							defaultValue={brand?.name}
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="slug">URL Slug *</Label>
						<Input
							id="slug"
							placeholder="nike"
							defaultValue={brand?.slug}
							required
						/>
						<p className="text-xs text-muted-foreground">
							Used in URLs: /brands/nike
						</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							placeholder="Describe this brand..."
							defaultValue={brand?.description}
							rows={4}
						/>
					</div>

					<Separator />

					<div className="space-y-2">
						<Label htmlFor="logo">Brand Logo URL</Label>
						<Input
							id="logo"
							type="url"
							placeholder="https://example.com/logo.png"
							defaultValue={brand?.logo}
						/>
						<p className="text-xs text-muted-foreground">
							URL to the brand's logo image
						</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="website">Website URL</Label>
						<Input
							id="website"
							type="url"
							placeholder="https://www.nike.com"
							defaultValue={brand?.website}
						/>
					</div>

					<Separator />

					<div className="flex items-center justify-between">
						<div>
							<Label htmlFor="isActive">Active</Label>
							<p className="text-xs text-muted-foreground">
								Show this brand in the store
							</p>
						</div>
						<Switch id="isActive" defaultChecked={brand?.isActive ?? true} />
					</div>

					<div className="flex items-center justify-between">
						<div>
							<Label htmlFor="isFeatured">Featured</Label>
							<p className="text-xs text-muted-foreground">
								Highlight this brand on the homepage
							</p>
						</div>
						<Switch
							id="isFeatured"
							defaultChecked={brand?.isFeatured || false}
						/>
					</div>
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
						{mode === `create` ? `Create Brand` : `Save Changes`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteBrandDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	brand: Brand | null;
}

export function DeleteBrandDialog({
	open,
	onOpenChange,
	brand,
}: DeleteBrandDialogProps) {
	if (!brand) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Brand</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this brand? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<Building2 className="h-4 w-4 text-muted-foreground" />
							<p className="font-bold text-lg">{brand.name}</p>
						</div>
						<p className="text-sm text-muted-foreground">{brand.description}</p>
						<div className="grid grid-cols-2 gap-2 text-sm pt-2">
							<div>
								<span className="text-muted-foreground">Products:</span>
								<span className="ml-2 font-medium">{brand.productCount}</span>
							</div>
							<div>
								<span className="text-muted-foreground">Status:</span>
								<span className="ml-2 font-medium">
									{brand.isActive ? `Active` : `Inactive`}
								</span>
							</div>
						</div>
					</div>

					{brand.productCount > 0 && (
						<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
							<p className="text-sm text-yellow-800 dark:text-yellow-200">
								⚠️ This brand has {brand.productCount} products associated with
								it. They will not have a brand after deletion.
							</p>
						</div>
					)}

					<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
						<p className="text-sm text-red-800 dark:text-red-200">
							🚨 This will permanently delete all brand data and cannot be
							reversed.
						</p>
					</div>
				</div>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Cancel
					</Button>
					<Button
						type="button"
						variant="destructive"
						onClick={() => {
							// TODO: Implement delete logic
							console.log(`Deleting brand:`, brand);
							onOpenChange(false);
						}}
					>
						Delete Brand
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
