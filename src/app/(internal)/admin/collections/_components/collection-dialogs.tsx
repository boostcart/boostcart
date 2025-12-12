"use client";

import { Package, Tag, X } from "lucide-react";
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

interface Collection {
	id: string;
	name: string;
	slug: string;
	description: string;
	type: string;
	products: number;
	featured: boolean;
	status: string;
	image?: string;
	rules?: string[];
}

interface ViewCollectionDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	collection: Collection | null;
}

export function ViewCollectionDialog({
	open,
	onOpenChange,
	collection,
}: ViewCollectionDialogProps) {
	if (!collection) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Collection Details</DialogTitle>
					<DialogDescription>
						View collection information and products
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="products">Products</TabsTrigger>
						<TabsTrigger value="rules">Rules</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<p className="text-sm text-muted-foreground">Collection Name</p>
								<p className="text-base font-medium">{collection.name}</p>
							</div>

							<div>
								<p className="text-sm text-muted-foreground">Slug</p>
								<p className="text-base font-mono">{collection.slug}</p>
							</div>

							<div>
								<p className="text-sm text-muted-foreground">Description</p>
								<p className="text-base">{collection.description}</p>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Type</p>
									<Badge variant="outline" className="mt-1">
										{collection.type}
									</Badge>
								</div>

								<div>
									<p className="text-sm text-muted-foreground">Status</p>
									<Badge
										variant={
											collection.status === `Active` ? `default` : `secondary`
										}
										className="mt-1"
									>
										{collection.status}
									</Badge>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Featured</p>
									<Badge
										variant={collection.featured ? `default` : `secondary`}
										className="mt-1"
									>
										{collection.featured ? `Yes` : `No`}
									</Badge>
								</div>

								<div>
									<p className="text-sm text-muted-foreground">
										Total Products
									</p>
									<p className="text-2xl font-bold mt-1">
										{collection.products}
									</p>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="products" className="space-y-4 mt-4">
						<div className="space-y-3">
							<div className="flex items-center justify-between p-4 border rounded-lg">
								<div className="flex items-center gap-3">
									<Package className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="font-medium">Product 1</p>
										<p className="text-sm text-muted-foreground">$99.00</p>
									</div>
								</div>
								<Badge>In Stock</Badge>
							</div>
							<div className="flex items-center justify-between p-4 border rounded-lg">
								<div className="flex items-center gap-3">
									<Package className="h-5 w-5 text-muted-foreground" />
									<div>
										<p className="font-medium">Product 2</p>
										<p className="text-sm text-muted-foreground">$149.00</p>
									</div>
								</div>
								<Badge>In Stock</Badge>
							</div>
							<p className="text-sm text-muted-foreground text-center py-4">
								Showing {Math.min(collection.products, 2)} of{` `}
								{collection.products} products
							</p>
						</div>
					</TabsContent>

					<TabsContent value="rules" className="space-y-4 mt-4">
						<div className="space-y-3">
							{collection.rules && collection.rules.length > 0 ? (
								collection.rules.map((rule, index) => (
									<div key={rule} className="p-4 border rounded-lg">
										<div className="flex items-start gap-3">
											<Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
											<div>
												<p className="font-medium">Rule {index + 1}</p>
												<p className="text-sm text-muted-foreground">{rule}</p>
											</div>
										</div>
									</div>
								))
							) : (
								<div className="text-center py-8">
									<p className="text-muted-foreground">
										No automated rules configured
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										Products are manually added to this collection
									</p>
								</div>
							)}
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

interface CollectionFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit";
	collection?: Collection | null;
}

export function CollectionFormDialog({
	open,
	onOpenChange,
	mode,
	collection,
}: CollectionFormDialogProps) {
	const [collectionType, setCollectionType] = useState(
		collection?.type || `MANUAL`,
	);
	const [rules, setRules] = useState<string[]>(collection?.rules || []);
	const [newRule, setNewRule] = useState(``);

	const addRule = () => {
		if (newRule.trim()) {
			setRules([...rules, newRule.trim()]);
			setNewRule(``);
		}
	};

	const removeRule = (index: number) => {
		setRules(rules.filter((_, i) => i !== index));
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` ? `Create Collection` : `Edit Collection`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Add a new collection to organize your products`
							: `Update collection information`}
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="general" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="general">General</TabsTrigger>
						<TabsTrigger value="products">Products</TabsTrigger>
						<TabsTrigger value="rules">Automation Rules</TabsTrigger>
					</TabsList>

					<TabsContent value="general" className="space-y-4 mt-4">
						<div className="space-y-2">
							<Label htmlFor="name">Collection Name *</Label>
							<Input
								id="name"
								placeholder="e.g., Summer Sale, Best Sellers"
								defaultValue={collection?.name}
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="slug">Slug *</Label>
							<Input
								id="slug"
								placeholder="summer-sale"
								defaultValue={collection?.slug}
								required
							/>
							<p className="text-xs text-muted-foreground">
								URL-friendly identifier
							</p>
						</div>

						<div className="space-y-2">
							<Label htmlFor="description">Description</Label>
							<Textarea
								id="description"
								placeholder="Describe this collection..."
								rows={4}
								defaultValue={collection?.description}
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="type">Collection Type *</Label>
							<Select value={collectionType} onValueChange={setCollectionType}>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="MANUAL">Manual</SelectItem>
									<SelectItem value="AUTOMATED">Automated</SelectItem>
									<SelectItem value="SMART">Smart Collection</SelectItem>
								</SelectContent>
							</Select>
							<p className="text-xs text-muted-foreground">
								{collectionType === `MANUAL` &&
									`Products are manually selected`}
								{collectionType === `AUTOMATED` &&
									`Products automatically added based on rules`}
								{collectionType === `SMART` &&
									`Dynamic collection based on conditions`}
							</p>
						</div>

						<Separator />

						<div className="flex items-center justify-between">
							<div>
								<Label htmlFor="featured">Featured Collection</Label>
								<p className="text-xs text-muted-foreground">
									Display on homepage
								</p>
							</div>
							<Switch
								id="featured"
								defaultChecked={collection?.featured || false}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div>
								<Label htmlFor="active">Active</Label>
								<p className="text-xs text-muted-foreground">
									Visible to customers
								</p>
							</div>
							<Switch
								id="active"
								defaultChecked={collection?.status === `Active`}
							/>
						</div>
					</TabsContent>

					<TabsContent value="products" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<Label>Product Selection</Label>
								<p className="text-sm text-muted-foreground mb-4">
									Choose which products belong to this collection
								</p>
							</div>

							<div className="space-y-2">
								<Input placeholder="Search products..." />
							</div>

							<div className="border rounded-lg p-4 space-y-3 max-h-[300px] overflow-y-auto">
								{[1, 2, 3, 4, 5].map((i) => (
									<div
										key={i}
										className="flex items-center justify-between p-3 border rounded"
									>
										<div className="flex items-center gap-3">
											<input type="checkbox" />
											<div>
												<p className="font-medium">Product {i}</p>
												<p className="text-sm text-muted-foreground">
													SKU-00{i}
												</p>
											</div>
										</div>
										<p className="text-sm font-medium">$99.00</p>
									</div>
								))}
							</div>
						</div>
					</TabsContent>

					<TabsContent value="rules" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<Label>Automation Rules</Label>
								<p className="text-sm text-muted-foreground">
									Define conditions to automatically add products
								</p>
							</div>

							{collectionType === `MANUAL` ? (
								<div className="text-center py-8 border rounded-lg">
									<p className="text-muted-foreground">
										Automation rules are only available for Automated and Smart
										collections
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										Change collection type to enable this feature
									</p>
								</div>
							) : (
								<>
									<div className="space-y-2">
										<div className="flex gap-2">
											<Input
												placeholder="e.g., Category = Electronics"
												value={newRule}
												onChange={(e) => setNewRule(e.target.value)}
												onKeyDown={(e) => {
													if (e.key === `Enter`) {
														e.preventDefault();
														addRule();
													}
												}}
											/>
											<Button type="button" onClick={addRule}>
												Add Rule
											</Button>
										</div>
									</div>

									<div className="space-y-2">
										{rules.length > 0 ? (
											rules.map((rule, index) => (
												<div
													key={rule}
													className="flex items-center justify-between p-3 border rounded-lg"
												>
													<div className="flex items-center gap-3">
														<Tag className="h-4 w-4 text-muted-foreground" />
														<p className="text-sm">{rule}</p>
													</div>
													<Button
														type="button"
														variant="ghost"
														size="icon"
														onClick={() => removeRule(index)}
													>
														<X className="h-4 w-4" />
													</Button>
												</div>
											))
										) : (
											<div className="text-center py-8 border rounded-lg">
												<p className="text-muted-foreground">
													No rules added yet
												</p>
											</div>
										)}
									</div>
								</>
							)}
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Cancel
					</Button>
					<PolarisButton type="submit">
						{mode === `create` ? `Create Collection` : `Save Changes`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteCollectionDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	collection: Collection | null;
}

export function DeleteCollectionDialog({
	open,
	onOpenChange,
	collection,
}: DeleteCollectionDialogProps) {
	if (!collection) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Collection</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this collection? This action cannot
						be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<p className="font-medium">{collection.name}</p>
						<div className="grid grid-cols-2 gap-2 text-sm">
							<div>
								<span className="text-muted-foreground">Products:</span>
								<span className="ml-2 font-medium">{collection.products}</span>
							</div>
							<div>
								<span className="text-muted-foreground">Type:</span>
								<span className="ml-2 font-medium">{collection.type}</span>
							</div>
						</div>
					</div>

					<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
						<p className="text-sm text-yellow-800 dark:text-yellow-200">
							⚠️ Products in this collection will not be deleted, but they will
							be removed from the collection.
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
							console.log(`Deleting collection:`, collection);
							onOpenChange(false);
						}}
					>
						Delete Collection
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
