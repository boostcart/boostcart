"use client";

import { Download, Filter, MoreVertical, Plus, Search } from "lucide-react";
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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useDialogStore } from "@/stores/dialog-store";
import {
	DeleteProductDialog,
	ProductFormDialog,
	ViewProductDialog,
} from "./_components/product-dialogs";

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

export default function ProductsPage() {
	const [searchQuery, setSearchQuery] = useState(``);
	const [categoryFilter, setCategoryFilter] = useState(`all`);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	// Dialog states from zustand
	const isAddProductOpen = useDialogStore((state) => state.isAddProductOpen);
	const isEditProductOpen = useDialogStore((state) => state.isEditProductOpen);
	const isViewProductOpen = useDialogStore((state) => state.isViewProductOpen);
	const isDeleteProductOpen = useDialogStore(
		(state) => state.isDeleteProductOpen,
	);
	const openDialog = useDialogStore((state) => state.openDialog);
	const closeDialog = useDialogStore((state) => state.closeDialog);

	const products: Product[] = [
		{
			id: `1`,
			slug: `macbook-pro-16-m3`,
			name: `MacBook Pro 16" M3`,
			description: `Powerful laptop with M3 chip and stunning display`,
			sku: `MBP-16-M3-001`,
			categoryId: `cat-electronics`,
			categoryName: `Electronics`,
			brandId: `brand-apple`,
			brandName: `Apple`,
			price: 2499.0,
			trackStock: true,
			stock: 45,
			createdAt: new Date(`2024-01-15`).toISOString(),
			updatedAt: new Date(`2024-01-20`).toISOString(),
			deletedAt: null,
		},
		{
			id: `2`,
			slug: `iphone-15-pro-max`,
			name: `iPhone 15 Pro Max`,
			description: `Latest iPhone with titanium design and advanced camera`,
			sku: `IPH-15-PM-002`,
			categoryId: `cat-electronics`,
			categoryName: `Electronics`,
			brandId: `brand-apple`,
			brandName: `Apple`,
			price: 1199.0,
			trackStock: true,
			stock: 128,
			createdAt: new Date(`2024-01-10`).toISOString(),
			updatedAt: new Date(`2024-01-18`).toISOString(),
			deletedAt: null,
		},
		{
			id: `3`,
			slug: `airpods-pro-2nd-gen`,
			name: `AirPods Pro (2nd gen)`,
			description: `Premium wireless earbuds with active noise cancellation`,
			sku: `APP-2ND-003`,
			categoryId: `cat-audio`,
			categoryName: `Audio`,
			brandId: `brand-apple`,
			brandName: `Apple`,
			price: 249.0,
			trackStock: true,
			stock: 234,
			createdAt: new Date(`2024-01-05`).toISOString(),
			updatedAt: new Date(`2024-01-22`).toISOString(),
			deletedAt: null,
		},
		{
			id: `4`,
			slug: `ipad-air-11`,
			name: `iPad Air 11"`,
			description: `Lightweight tablet with M2 chip and all-day battery`,
			sku: `IPAD-AIR-11-004`,
			categoryId: `cat-tablets`,
			categoryName: `Tablets`,
			brandId: `brand-apple`,
			brandName: `Apple`,
			price: 599.0,
			trackStock: true,
			stock: 87,
			createdAt: new Date(`2024-01-12`).toISOString(),
			updatedAt: new Date(`2024-01-25`).toISOString(),
			deletedAt: null,
		},
		{
			id: `5`,
			slug: `apple-watch-ultra-2`,
			name: `Apple Watch Ultra 2`,
			description: `Rugged smartwatch designed for adventure and exploration`,
			sku: `AW-U2-005`,
			categoryId: `cat-wearables`,
			categoryName: `Wearables`,
			brandId: `brand-apple`,
			brandName: `Apple`,
			price: 799.0,
			trackStock: true,
			stock: 56,
			createdAt: new Date(`2024-01-08`).toISOString(),
			updatedAt: new Date(`2024-01-19`).toISOString(),
			deletedAt: null,
		},
		{
			id: `6`,
			slug: `magic-keyboard`,
			name: `Magic Keyboard`,
			description: `Wireless keyboard with rechargeable battery`,
			sku: `MK-BLK-006`,
			categoryId: `cat-accessories`,
			categoryName: `Accessories`,
			brandId: `brand-apple`,
			brandName: `Apple`,
			price: 99.0,
			trackStock: true,
			stock: 0,
			createdAt: new Date(`2024-01-03`).toISOString(),
			updatedAt: new Date(`2024-01-21`).toISOString(),
			deletedAt: null,
		},
		{
			id: `7`,
			slug: `samsung-galaxy-s24-ultra`,
			name: `Samsung Galaxy S24 Ultra`,
			description: `Flagship Android phone with S Pen and advanced AI features`,
			sku: `SGS-24U-007`,
			categoryId: `cat-electronics`,
			categoryName: `Electronics`,
			brandId: `brand-samsung`,
			brandName: `Samsung`,
			price: 1299.0,
			trackStock: true,
			stock: 67,
			createdAt: new Date(`2024-01-14`).toISOString(),
			updatedAt: new Date(`2024-01-23`).toISOString(),
			deletedAt: null,
		},
	];

	// Event handlers
	const handleView = (product: Product) => {
		setSelectedProduct(product);
		openDialog("isViewProductOpen");
	};

	const handleEdit = (product: Product) => {
		setSelectedProduct(product);
		openDialog("isEditProductOpen");
	};

	const handleDelete = (product: Product) => {
		setSelectedProduct(product);
		openDialog("isDeleteProductOpen");
	};

	const handleCreate = () => {
		setSelectedProduct(null);
		openDialog("isAddProductOpen");
	};

	const getStockBadge = (stock: number) => {
		if (stock === 0) {
			return `bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300`;
		}
		if (stock < 20) {
			return `bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300`;
		}
		return `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`;
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
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Product
				</PolarisButton>
			</div>{" "}
			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Products</p>
					<p className="text-2xl font-bold mt-1">12,234</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Products</p>
					<p className="text-2xl font-bold mt-1">11,567</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Out of Stock</p>
					<p className="text-2xl font-bold mt-1">234</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Low Stock</p>
					<p className="text-2xl font-bold mt-1">433</p>
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
					<Select value={categoryFilter} onValueChange={setCategoryFilter}>
						<SelectTrigger className="w-full sm:w-[180px]">
							<SelectValue placeholder="Filter by category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Categories</SelectItem>
							<SelectItem value="electronics">Electronics</SelectItem>
							<SelectItem value="audio">Audio</SelectItem>
							<SelectItem value="tablets">Tablets</SelectItem>
							<SelectItem value="wearables">Wearables</SelectItem>
							<SelectItem value="accessories">Accessories</SelectItem>
						</SelectContent>
					</Select>
					<Button type="button" variant="outline">
						<Filter className="h-4 w-4 mr-2" />
						More Filters
					</Button>
					<Button type="button" variant="outline">
						<Download className="h-4 w-4 mr-2" />
						Export
					</Button>
				</div>
			</Card>
			{/* Products Table */}
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Product</TableHead>
							<TableHead>SKU</TableHead>
							<TableHead>Category</TableHead>
							<TableHead>Brand</TableHead>
							<TableHead>Stock</TableHead>
							<TableHead className="text-right">Price</TableHead>
							<TableHead className="w-[70px]"></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{products.map((product) => (
							<TableRow key={product.id} className="cursor-pointer">
								<TableCell>
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm">
											📦
										</div>
										<div>
											<p className="font-medium text-sm">{product.name}</p>
											<p className="text-muted-foreground text-xs">
												{product.deletedAt ? `Deleted` : `Active`}
											</p>
										</div>
									</div>
								</TableCell>
								<TableCell className="font-mono text-sm">
									{product.sku ?? `N/A`}
								</TableCell>
								<TableCell>
									{product.categoryName ?? product.categoryId}
								</TableCell>
								<TableCell>
									{product.brandName ?? product.brandId ?? `N/A`}
								</TableCell>
								<TableCell>
									<span
										className={`px-2 py-1 text-xs font-medium rounded-full ${getStockBadge(product.stock ?? 0)}`}
									>
										{product.stock === null || product.stock === 0
											? `Out of Stock`
											: product.stock < 20
												? `Low: ${product.stock}`
												: product.stock}
									</span>
								</TableCell>
								<TableCell className="text-right font-medium">
									${product.price.toFixed(2)}
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
			</Card>
			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium">1-{products.length}</span> of
					{` `}
					<span className="font-medium">{products.length}</span> products
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
			<ViewProductDialog
				open={isViewProductOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isViewProductOpen")
						: closeDialog("isViewProductOpen")
				}
				product={selectedProduct}
			/>
			<ProductFormDialog
				open={isAddProductOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isAddProductOpen")
						: closeDialog("isAddProductOpen")
				}
				mode="create"
			/>
			<ProductFormDialog
				open={isEditProductOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isEditProductOpen")
						: closeDialog("isEditProductOpen")
				}
				mode="edit"
				product={selectedProduct}
			/>
			<DeleteProductDialog
				open={isDeleteProductOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isDeleteProductOpen")
						: closeDialog("isDeleteProductOpen")
				}
				product={selectedProduct}
			/>
		</div>
	);
}
