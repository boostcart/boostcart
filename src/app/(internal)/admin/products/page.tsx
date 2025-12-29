"use client";

import {
	Download,
	Loader2,
	MoreVertical,
	Package,
	Plus,
	Search,
	Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

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
import type { ProductStatus } from "@/generated/prisma/enums";
import { deleteProduct, getProducts } from "@/server/api/internal/products";
import { useDialogStore } from "@/stores/dialog-store";
import {
	DeleteProductDialog,
	ViewProductDialog,
} from "./_components/product-dialogs";
import { ProductFilters } from "./_components/product-filters";

interface Product {
	id: string;
	slug: string;
	name: string;
	description: string | null;
	status: ProductStatus;
	price: number;
	sku: string | null;
	trackStock: boolean;
	stock: number | null;
	categoryId: string;
	categoryName: string;
	brandId: string | null;
	brandName: string | null;
	imageUrl: string | null;
	createdAt: Date;
	updatedAt: Date;
}

interface ProductsStats {
	total: number;
	active: number;
	outOfStock: number;
	lowStock: number;
}

// TODO: Replace with real data from API
const mockCategories = [
	{ id: "cat-1", name: "Electronics" },
	{ id: "cat-2", name: "Clothing" },
	{ id: "cat-3", name: "Home & Garden" },
	{ id: "cat-4", name: "Sports & Outdoors" },
	{ id: "cat-5", name: "Beauty & Health" },
];

const mockBrands = [
	{ id: "brand-1", name: "Apple" },
	{ id: "brand-2", name: "Samsung" },
	{ id: "brand-3", name: "Nike" },
	{ id: "brand-4", name: "Adidas" },
	{ id: "brand-5", name: "Sony" },
];

function ProductsPageContent() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [products, setProducts] = useState<Product[]>([]);
	const [stats, setStats] = useState<ProductsStats>({
		total: 0,
		active: 0,
		outOfStock: 0,
		lowStock: 0,
	});
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState(
		searchParams.get("search") ?? "",
	);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [pagination, setPagination] = useState({
		page: 1,
		pageSize: 20,
		total: 0,
		totalPages: 0,
	});

	// Dialog states from zustand
	const isViewProductOpen = useDialogStore((state) => state.isViewProductOpen);
	const isDeleteProductOpen = useDialogStore(
		(state) => state.isDeleteProductOpen,
	);
	const openDialog = useDialogStore((state) => state.openDialog);
	const closeDialog = useDialogStore((state) => state.closeDialog);

	// Extract primitive values from searchParams to use as stable dependencies
	const currentPage = searchParams.get("page") ?? "1";
	const statusParam = searchParams.get("status") ?? "";
	const categoryIdParam = searchParams.get("categoryId") ?? "";
	const brandIdParam = searchParams.get("brandId") ?? "";
	const stockStatusParam = searchParams.get("stockStatus") ?? "";
	const searchParam = searchParams.get("search") ?? "";

	// Fetch products with filters
	const fetchProducts = useCallback(async () => {
		setIsLoading(true);
		try {
			const page = parseInt(currentPage, 10);
			const status = statusParam as ProductStatus | null;
			const categoryId = categoryIdParam || null;
			const brandId = brandIdParam || null;

			// Validate stockStatus against allowed values
			const validStockStatuses = [
				"in_stock",
				"out_of_stock",
				"low_stock",
			] as const;
			const stockStatus =
				stockStatusParam &&
				validStockStatuses.includes(
					stockStatusParam as (typeof validStockStatuses)[number],
				)
					? (stockStatusParam as "in_stock" | "out_of_stock" | "low_stock")
					: undefined;

			const result = await getProducts({
				page,
				pageSize: 20,
				status: status ? [status] : undefined,
				categoryIds: categoryId ? [categoryId] : undefined,
				brandIds: brandId ? [brandId] : undefined,
				stockStatus,
				search: searchParam || undefined,
			});

			setProducts(
				result.products.map((p) => ({
					id: p.id,
					slug: p.slug,
					name: p.name,
					description: p.description ?? null,
					status: p.status,
					price: Number(p.price),
					sku: p.sku,
					trackStock: p.trackStock,
					stock: p.stock,
					categoryId: p.categoryId,
					categoryName: p.categoryName ?? "Uncategorized",
					brandId: p.brandId,
					brandName: p.brandName ?? null,
					imageUrl: p.imageUrl ?? null,
					createdAt: new Date(p.createdAt),
					updatedAt: new Date(p.updatedAt),
				})),
			);

			setPagination({
				page: result.pagination.page,
				pageSize: result.pagination.pageSize,
				total: result.pagination.total,
				totalPages: result.pagination.totalPages,
			});

			// Update stats
			setStats({
				total: result.pagination.total,
				active: result.products.filter((p) => p.status === "ACTIVE").length,
				outOfStock: result.products.filter((p) => p.trackStock && p.stock === 0)
					.length,
				lowStock: result.products.filter(
					(p) =>
						p.trackStock && p.stock !== null && p.stock > 0 && p.stock <= 10,
				).length,
			});
		} catch (error) {
			console.error("Failed to fetch products:", error);
			toast.error("Failed to load products");
		} finally {
			setIsLoading(false);
		}
	}, [
		currentPage,
		statusParam,
		categoryIdParam,
		brandIdParam,
		stockStatusParam,
		searchParam,
	]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	// Handle search with debounce - only update URL if searchQuery differs from URL param
	useEffect(() => {
		// Skip if searchQuery matches URL (prevents loop)
		if (searchQuery === searchParam) {
			return;
		}

		const handler = setTimeout(() => {
			const params = new URLSearchParams();
			// Rebuild params from current values
			if (searchQuery) {
				params.set("search", searchQuery);
			}
			if (statusParam) {
				params.set("status", statusParam);
			}
			if (categoryIdParam) {
				params.set("categoryId", categoryIdParam);
			}
			if (brandIdParam) {
				params.set("brandId", brandIdParam);
			}
			if (stockStatusParam) {
				params.set("stockStatus", stockStatusParam);
			}
			// Reset page when searching
			router.push(`/admin/products?${params.toString()}`, { scroll: false });
		}, 300);

		return () => clearTimeout(handler);
	}, [
		searchQuery,
		searchParam,
		statusParam,
		categoryIdParam,
		brandIdParam,
		stockStatusParam,
		router,
	]);

	// Event handlers
	const handleView = (product: Product) => {
		setSelectedProduct(product);
		openDialog("isViewProductOpen");
	};

	const handleEdit = (product: Product) => {
		router.push(`/admin/products/${product.id}/edit`);
	};

	const handleDelete = (product: Product) => {
		setSelectedProduct(product);
		openDialog("isDeleteProductOpen");
	};

	const handleConfirmDelete = async () => {
		if (!selectedProduct) return;

		try {
			await deleteProduct(selectedProduct.id);
			toast.success("Product moved to trash");
			closeDialog("isDeleteProductOpen");
			fetchProducts();
		} catch (error) {
			console.error("Failed to delete product:", error);
			toast.error("Failed to delete product");
		}
	};

	const handleCreate = () => {
		router.push("/admin/products/new");
	};

	const handlePageChange = (newPage: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", newPage.toString());
		router.push(`/admin/products?${params.toString()}`, { scroll: false });
	};

	const getStatusBadge = (status: ProductStatus) => {
		switch (status) {
			case "ACTIVE":
				return (
					<Badge
						variant="secondary"
						className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
					>
						Active
					</Badge>
				);
			case "DRAFT":
				return (
					<Badge
						variant="secondary"
						className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
					>
						Draft
					</Badge>
				);
			case "UNLISTED":
				return (
					<Badge
						variant="secondary"
						className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
					>
						Unlisted
					</Badge>
				);
		}
	};

	const getStockBadge = (product: Product) => {
		if (!product.trackStock) {
			return <span className="text-sm text-muted-foreground">Not tracked</span>;
		}

		const stock = product.stock ?? 0;

		if (stock === 0) {
			return (
				<Badge
					variant="destructive"
					className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
				>
					Out of Stock
				</Badge>
			);
		}

		if (stock <= 10) {
			return (
				<Badge
					variant="secondary"
					className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
				>
					Low: {stock}
				</Badge>
			);
		}

		return (
			<Badge
				variant="secondary"
				className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
			>
				{stock}
			</Badge>
		);
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Products</h1>
					<p className="text-muted-foreground mt-1">
						Manage your product inventory and catalog
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" asChild>
						<Link href="/admin/products/trash">
							<Trash2 className="h-4 w-4 mr-2" />
							Trash
						</Link>
					</Button>
					<PolarisButton type="button" onClick={handleCreate}>
						<Plus className="h-4 w-4" />
						Add Product
					</PolarisButton>
				</div>
			</div>

			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Products</p>
					<p className="text-2xl font-bold mt-1">
						{stats.total.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Products</p>
					<p className="text-2xl font-bold mt-1">
						{stats.active.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Out of Stock</p>
					<p className="text-2xl font-bold mt-1">
						{stats.outOfStock.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Low Stock</p>
					<p className="text-2xl font-bold mt-1">
						{stats.lowStock.toLocaleString()}
					</p>
				</Card>
			</div>

			{/* Filters */}
			<Card className="p-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search by product name, SKU, or brand..."
							className="pl-9"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<ProductFilters categories={mockCategories} brands={mockBrands} />
					<Button type="button" variant="outline">
						<Download className="h-4 w-4 mr-2" />
						Export
					</Button>
				</div>
			</Card>

			{/* Products Table */}
			<Card>
				{isLoading ? (
					<div className="flex items-center justify-center py-16">
						<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
					</div>
				) : products.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-16">
						<div className="rounded-full bg-muted p-4 mb-4">
							<Package className="h-8 w-8 text-muted-foreground" />
						</div>
						<h3 className="text-lg font-medium mb-1">No products found</h3>
						<p className="text-sm text-muted-foreground mb-4">
							{searchQuery || searchParams.toString()
								? "Try adjusting your search or filters"
								: "Get started by adding your first product"}
						</p>
						<Button onClick={handleCreate}>
							<Plus className="h-4 w-4 mr-2" />
							Add Product
						</Button>
					</div>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Product</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>SKU</TableHead>
								<TableHead>Category</TableHead>
								<TableHead>Brand</TableHead>
								<TableHead>Stock</TableHead>
								<TableHead className="text-right">Price</TableHead>
								<TableHead className="w-[70px]" />
							</TableRow>
						</TableHeader>
						<TableBody>
							{products.map((product) => (
								<TableRow key={product.id} className="cursor-pointer">
									<TableCell>
										<div className="flex items-center gap-3">
											<div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm overflow-hidden relative">
												{product.imageUrl ? (
													<Image
														src={product.imageUrl}
														alt={product.name}
														fill
														className="object-cover"
														unoptimized
													/>
												) : (
													<Package className="h-5 w-5 text-muted-foreground" />
												)}
											</div>
											<div>
												<p className="font-medium text-sm">{product.name}</p>
												<p className="text-muted-foreground text-xs truncate max-w-[200px]">
													{product.slug}
												</p>
											</div>
										</div>
									</TableCell>
									<TableCell>{getStatusBadge(product.status)}</TableCell>
									<TableCell className="font-mono text-sm">
										{product.sku ?? "—"}
									</TableCell>
									<TableCell>{product.categoryName}</TableCell>
									<TableCell>{product.brandName ?? "—"}</TableCell>
									<TableCell>{getStockBadge(product)}</TableCell>
									<TableCell className="text-right font-medium">
										€{product.price.toFixed(2)}
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
												<DropdownMenuItem onClick={() => handleView(product)}>
													View details
												</DropdownMenuItem>
												<DropdownMenuItem onClick={() => handleEdit(product)}>
													Edit product
												</DropdownMenuItem>
												<DropdownMenuItem>Duplicate</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem>Manage inventory</DropdownMenuItem>
												<DropdownMenuItem>View analytics</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem
													className="text-red-600"
													onClick={() => handleDelete(product)}
												>
													Delete product
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

			{/* Pagination */}
			{!isLoading && products.length > 0 && (
				<div className="flex items-center justify-between">
					<p className="text-sm text-muted-foreground">
						Showing{" "}
						<span className="font-medium">
							{(pagination.page - 1) * pagination.pageSize + 1}-
							{Math.min(
								pagination.page * pagination.pageSize,
								pagination.total,
							)}
						</span>{" "}
						of <span className="font-medium">{pagination.total}</span> products
					</p>
					<div className="flex gap-2">
						<Button
							type="button"
							variant="outline"
							size="sm"
							disabled={pagination.page <= 1}
							onClick={() => handlePageChange(pagination.page - 1)}
						>
							Previous
						</Button>
						<Button
							type="button"
							variant="outline"
							size="sm"
							disabled={pagination.page >= pagination.totalPages}
							onClick={() => handlePageChange(pagination.page + 1)}
						>
							Next
						</Button>
					</div>
				</div>
			)}

			{/* CRUD Dialogs */}
			<ViewProductDialog
				open={isViewProductOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isViewProductOpen")
						: closeDialog("isViewProductOpen")
				}
				product={
					selectedProduct
						? {
								...selectedProduct,
								price: selectedProduct.price,
								createdAt: selectedProduct.createdAt.toISOString(),
								updatedAt: selectedProduct.updatedAt.toISOString(),
								deletedAt: null,
							}
						: null
				}
			/>
			<DeleteProductDialog
				open={isDeleteProductOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isDeleteProductOpen")
						: closeDialog("isDeleteProductOpen")
				}
				product={
					selectedProduct
						? {
								...selectedProduct,
								price: selectedProduct.price,
								createdAt: selectedProduct.createdAt.toISOString(),
								updatedAt: selectedProduct.updatedAt.toISOString(),
								deletedAt: null,
							}
						: null
				}
				onConfirm={handleConfirmDelete}
			/>
		</div>
	);
}

export default function ProductsPage() {
	return (
		<Suspense
			fallback={
				<div className="flex items-center justify-center min-h-[400px]">
					<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
				</div>
			}
		>
			<ProductsPageContent />
		</Suspense>
	);
}
