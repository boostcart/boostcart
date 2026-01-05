"use client";

import { Loader2, Package, Tag, X } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
	createCollection,
	updateCollection,
} from "@/server/api/internal/collections";

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
	onSuccess?: () => void;
}

export function CollectionFormDialog({
	open,
	onOpenChange,
	mode,
	collection,
	onSuccess,
}: CollectionFormDialogProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [name, setName] = useState("");
	const [slug, setSlug] = useState("");
	const [description, setDescription] = useState("");
	const [collectionType, setCollectionType] = useState("MANUAL");
	const [isActive, setIsActive] = useState(true);
	const [isFeatured, setIsFeatured] = useState(false);
	const [rules, setRules] = useState<string[]>([]);
	const [newRule, setNewRule] = useState("");

	// Reset form when dialog opens or collection changes
	useEffect(() => {
		if (open) {
			if (mode === "edit" && collection) {
				setName(collection.name);
				setSlug(collection.slug);
				setDescription(collection.description || "");
				setCollectionType(collection.type || "MANUAL");
				setIsActive(collection.status === "Active");
				setIsFeatured(collection.featured);
				setRules(collection.rules || []);
			} else {
				setName("");
				setSlug("");
				setDescription("");
				setCollectionType("MANUAL");
				setIsActive(true);
				setIsFeatured(false);
				setRules([]);
			}
			setNewRule("");
		}
	}, [open, mode, collection]);

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

	const addRule = () => {
		if (newRule.trim()) {
			setRules([...rules, newRule.trim()]);
			setNewRule("");
		}
	};

	const removeRule = (index: number) => {
		setRules(rules.filter((_, i) => i !== index));
	};

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
				isActive,
				isFeatured,
			};

			if (mode === "create") {
				await createCollection(data);
				toast.success("Collection created successfully");
			} else if (collection) {
				await updateCollection(collection.id, data);
				toast.success("Collection updated successfully");
			}

			onOpenChange(false);
			onSuccess?.();
		} catch (error) {
			console.error("Failed to save collection:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to save collection",
			);
		} finally {
			setIsSubmitting(false);
		}
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

				<form onSubmit={handleSubmit}>
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
									value={name}
									onChange={(e) => handleNameChange(e.target.value)}
									required
									disabled={isSubmitting}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="slug">Slug *</Label>
								<Input
									id="slug"
									placeholder="summer-sale"
									value={slug}
									onChange={(e) => setSlug(e.target.value)}
									required
									disabled={isSubmitting}
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
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									disabled={isSubmitting}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="type">Collection Type *</Label>
								<Select
									value={collectionType}
									onValueChange={setCollectionType}
									disabled={isSubmitting}
								>
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
									checked={isFeatured}
									onCheckedChange={setIsFeatured}
									disabled={isSubmitting}
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
									checked={isActive}
									onCheckedChange={setIsActive}
									disabled={isSubmitting}
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
									<Input
										placeholder="Search products..."
										disabled={isSubmitting}
									/>
								</div>

								<div className="border rounded-lg p-4 space-y-3 max-h-[300px] overflow-y-auto">
									<div className="text-center py-8">
										<p className="text-muted-foreground">
											Product selection will be available after creating the
											collection
										</p>
									</div>
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
											Automation rules are only available for Automated and
											Smart collections
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
													disabled={isSubmitting}
												/>
												<Button
													type="button"
													onClick={addRule}
													disabled={isSubmitting}
												>
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
															disabled={isSubmitting}
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

					<DialogFooter className="mt-6">
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
								"Create Collection"
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

interface DeleteCollectionDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	collection: Collection | null;
	onConfirm?: (collectionId: string) => void | Promise<void>;
}

export function DeleteCollectionDialog({
	open,
	onOpenChange,
	collection,
	onConfirm,
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
							if (onConfirm && collection) {
								onConfirm(collection.id);
							} else {
								onOpenChange(false);
							}
						}}
					>
						Delete Collection
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
