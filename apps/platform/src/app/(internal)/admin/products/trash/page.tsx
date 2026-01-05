"use client";

import { addDays, differenceInDays, formatDistanceToNow } from "date-fns";
import {
	AlertTriangle,
	ArrowLeft,
	Loader2,
	Package,
	RotateCcw,
	Search,
	Trash2,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
	getTrashedProducts,
	permanentlyDeleteProducts,
	restoreProducts,
} from "@/server/api/internal/products";

interface TrashedProduct {
	id: string;
	name: string;
	sku: string | null;
	price: number;
	deletedAt: Date;
	imageUrl: string | null;
}

const RETENTION_DAYS = 30;

export default function ProductTrashPage() {
	const [products, setProducts] = useState<TrashedProduct[]>([]);
	const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isRestoring, setIsRestoring] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const fetchTrashedProducts = useCallback(async () => {
		setIsLoading(true);
		try {
			const result = await getTrashedProducts();
			const trashedProducts: TrashedProduct[] = result.map((p) => ({
				id: p.id,
				name: p.name,
				sku: p.sku,
				price: Number(p.price),
				deletedAt: new Date(p.deletedAt),
				imageUrl: p.imageUrl ?? null,
			}));
			setProducts(trashedProducts);
		} catch (error) {
			console.error("Failed to fetch trashed products:", error);
			toast.error("Failed to load trashed products");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchTrashedProducts();
	}, [fetchTrashedProducts]);

	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			product.sku?.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const toggleSelect = (id: string) => {
		const newSelected = new Set(selectedIds);
		if (newSelected.has(id)) {
			newSelected.delete(id);
		} else {
			newSelected.add(id);
		}
		setSelectedIds(newSelected);
	};

	const toggleSelectAll = () => {
		if (selectedIds.size === filteredProducts.length) {
			setSelectedIds(new Set());
		} else {
			setSelectedIds(new Set(filteredProducts.map((p) => p.id)));
		}
	};

	const handleRestore = async (ids: string[]) => {
		setIsRestoring(true);
		try {
			await restoreProducts(ids);

			setProducts((prev) => prev.filter((p) => !ids.includes(p.id)));
			setSelectedIds(new Set());

			toast.success(
				ids.length === 1
					? "Product restored successfully"
					: `${ids.length} products restored successfully`,
			);
		} catch (error) {
			console.error("Failed to restore products:", error);
			toast.error("Failed to restore products");
		} finally {
			setIsRestoring(false);
		}
	};

	const handlePermanentDelete = async (ids: string[]) => {
		setIsDeleting(true);
		try {
			await permanentlyDeleteProducts(ids);

			setProducts((prev) => prev.filter((p) => !ids.includes(p.id)));
			setSelectedIds(new Set());

			toast.success(
				ids.length === 1
					? "Product permanently deleted"
					: `${ids.length} products permanently deleted`,
			);
		} catch (error) {
			console.error("Failed to delete products:", error);
			toast.error("Failed to delete products");
		} finally {
			setIsDeleting(false);
		}
	};

	const getDaysRemaining = (deletedAt: Date) => {
		const expiryDate = addDays(deletedAt, RETENTION_DAYS);
		return differenceInDays(expiryDate, new Date());
	};

	return (
		<div className="container max-w-7xl py-6">
			{/* Header */}
			<div className="flex items-center gap-4 mb-6">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/admin/products">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<div>
					<h1 className="text-2xl font-semibold tracking-tight">Trash</h1>
					<p className="text-sm text-muted-foreground">
						Products are automatically deleted after {RETENTION_DAYS} days
					</p>
				</div>
			</div>

			{/* Warning banner */}
			<Card className="mb-6 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
				<CardContent className="flex items-start gap-3 p-4">
					<AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
					<div>
						<p className="text-sm font-medium text-amber-800 dark:text-amber-200">
							Items in trash will be permanently deleted after {RETENTION_DAYS}{" "}
							days
						</p>
						<p className="text-sm text-amber-700 dark:text-amber-300">
							Restore products to keep them, or delete them permanently now.
						</p>
					</div>
				</CardContent>
			</Card>

			{/* Actions bar */}
			<div className="flex items-center justify-between gap-4 mb-4">
				<div className="flex items-center gap-2 flex-1">
					<div className="relative flex-1 max-w-sm">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search deleted products..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-9"
						/>
					</div>
				</div>

				{selectedIds.size > 0 && (
					<div className="flex items-center gap-2">
						<span className="text-sm text-muted-foreground">
							{selectedIds.size} selected
						</span>
						<Button
							variant="outline"
							size="sm"
							onClick={() => handleRestore(Array.from(selectedIds))}
							disabled={isRestoring}
						>
							{isRestoring ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : (
								<RotateCcw className="mr-2 h-4 w-4" />
							)}
							Restore
						</Button>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button variant="destructive" size="sm" disabled={isDeleting}>
									{isDeleting ? (
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									) : (
										<Trash2 className="mr-2 h-4 w-4" />
									)}
									Delete permanently
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Delete permanently?</AlertDialogTitle>
									<AlertDialogDescription>
										This will permanently delete {selectedIds.size} product
										{selectedIds.size > 1 ? "s" : ""}. This action cannot be
										undone.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction
										onClick={() =>
											handlePermanentDelete(Array.from(selectedIds))
										}
										className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
									>
										Delete permanently
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
				)}
			</div>

			{/* Products table */}
			{isLoading ? (
				<Card>
					<CardContent className="flex items-center justify-center py-16">
						<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
					</CardContent>
				</Card>
			) : filteredProducts.length === 0 ? (
				<Card>
					<CardContent className="flex flex-col items-center justify-center py-16">
						<div className="rounded-full bg-muted p-4 mb-4">
							<Package className="h-8 w-8 text-muted-foreground" />
						</div>
						<h3 className="text-lg font-medium mb-1">Trash is empty</h3>
						<p className="text-sm text-muted-foreground mb-4">
							{searchQuery
								? "No deleted products match your search"
								: "Deleted products will appear here"}
						</p>
						<Button variant="outline" asChild>
							<Link href="/admin/products">Back to products</Link>
						</Button>
					</CardContent>
				</Card>
			) : (
				<Card>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-12">
									<Checkbox
										checked={
											selectedIds.size === filteredProducts.length &&
											filteredProducts.length > 0
										}
										onCheckedChange={toggleSelectAll}
									/>
								</TableHead>
								<TableHead>Product</TableHead>
								<TableHead>SKU</TableHead>
								<TableHead>Price</TableHead>
								<TableHead>Deleted</TableHead>
								<TableHead>Expires in</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredProducts.map((product) => {
								const daysRemaining = getDaysRemaining(product.deletedAt);
								const isExpiringSoon = daysRemaining <= 7;

								return (
									<TableRow key={product.id}>
										<TableCell>
											<Checkbox
												checked={selectedIds.has(product.id)}
												onCheckedChange={() => toggleSelect(product.id)}
											/>
										</TableCell>
										<TableCell>
											<div className="flex items-center gap-3">
												<div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
													<Package className="h-5 w-5 text-muted-foreground" />
												</div>
												<span className="font-medium">{product.name}</span>
											</div>
										</TableCell>
										<TableCell className="text-muted-foreground">
											{product.sku || "—"}
										</TableCell>
										<TableCell>€{product.price.toFixed(2)}</TableCell>
										<TableCell className="text-muted-foreground">
											{formatDistanceToNow(product.deletedAt, {
												addSuffix: true,
											})}
										</TableCell>
										<TableCell>
											<Badge
												variant={isExpiringSoon ? "destructive" : "secondary"}
												className={cn(
													isExpiringSoon &&
														"bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900 dark:text-red-300",
												)}
											>
												{daysRemaining} days
											</Badge>
										</TableCell>
										<TableCell className="text-right">
											<div className="flex items-center justify-end gap-1">
												<Button
													variant="ghost"
													size="sm"
													onClick={() => handleRestore([product.id])}
													disabled={isRestoring}
												>
													<RotateCcw className="h-4 w-4" />
												</Button>
												<AlertDialog>
													<AlertDialogTrigger asChild>
														<Button
															variant="ghost"
															size="sm"
															disabled={isDeleting}
														>
															<Trash2 className="h-4 w-4 text-destructive" />
														</Button>
													</AlertDialogTrigger>
													<AlertDialogContent>
														<AlertDialogHeader>
															<AlertDialogTitle>
																Delete permanently?
															</AlertDialogTitle>
															<AlertDialogDescription>
																This will permanently delete "{product.name}".
																This action cannot be undone.
															</AlertDialogDescription>
														</AlertDialogHeader>
														<AlertDialogFooter>
															<AlertDialogCancel>Cancel</AlertDialogCancel>
															<AlertDialogAction
																onClick={() =>
																	handlePermanentDelete([product.id])
																}
																className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
															>
																Delete permanently
															</AlertDialogAction>
														</AlertDialogFooter>
													</AlertDialogContent>
												</AlertDialog>
											</div>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Card>
			)}
		</div>
	);
}
