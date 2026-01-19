import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";
import { ProductsFilters } from "./_components/products-filters";
import { ProductsGrid } from "./_components/products-grid";
import { ProductsSearch } from "./_components/products-search";
import { ProductsSorting } from "./_components/products-sorting";

interface ProductsPageProps {
	searchParams: Promise<{
		q?: string;
		category?: string;
		brand?: string;
		collection?: string;
		minPrice?: string;
		maxPrice?: string;
		sort?: string;
		page?: string;
	}>;
}

export default async function ProductsPage({
	searchParams,
}: ProductsPageProps) {
	const tenant = await getCurrentTenant();
	const params = await searchParams;

	if (!tenant) {
		return null;
	}

	// Fetch filter options
	const [categories, brands, collections] = await Promise.all([
		db.category.findMany({
			where: { tenantId: tenant.id },
			select: {
				id: true,
				slug: true,
				translations: {
					select: { name: true },
					take: 1,
				},
			},
			orderBy: { createdAt: "asc" },
		}),
		db.brand.findMany({
			where: { tenantId: tenant.id },
			select: { id: true, name: true, slug: true },
			orderBy: { name: "asc" },
		}),
		db.collection.findMany({
			where: { tenantId: tenant.id, isActive: true },
			select: {
				id: true,
				slug: true,
				translations: {
					select: { name: true },
					take: 1,
				},
			},
		}),
	]);

	// Parse filters from params
	const filters = {
		search: params.q || "",
		categorySlug: params.category || "",
		brandSlug: params.brand || "",
		collectionSlug: params.collection || "",
		minPrice: params.minPrice ? Number(params.minPrice) : undefined,
		maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
		sort: params.sort || "newest",
		page: params.page ? Number(params.page) : 1,
	};

	return (
		<div className="container mx-auto py-8">
			<div className="flex flex-col gap-6">
				{/* Header */}
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Products</h1>
					<p className="text-muted-foreground mt-1">
						Browse our collection of products
					</p>
				</div>

				{/* Search & Sort bar */}
				<div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
					<ProductsSearch defaultValue={filters.search} />
					<ProductsSorting currentSort={filters.sort} />
				</div>

				<Separator />

				{/* Main content */}
				<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
					{/* Filters Sidebar */}
					<aside className="space-y-6">
						<ProductsFilters
							categories={categories.map((c) => ({
								id: c.id,
								slug: c.slug,
								name: c.translations[0]?.name || c.slug,
							}))}
							brands={brands}
							collections={collections.map((c) => ({
								id: c.id,
								slug: c.slug,
								name: c.translations[0]?.name || c.slug,
							}))}
							currentFilters={{
								category: filters.categorySlug,
								brand: filters.brandSlug,
								collection: filters.collectionSlug,
								minPrice: filters.minPrice,
								maxPrice: filters.maxPrice,
							}}
						/>
					</aside>

					{/* Products Grid */}
					<div className="min-h-150">
						<Suspense fallback={<ProductsGridSkeleton />}>
							<ProductsGridServer tenantId={tenant.id} filters={filters} />
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
}

interface ProductsGridServerProps {
	tenantId: string;
	filters: {
		search: string;
		categorySlug: string;
		brandSlug: string;
		collectionSlug: string;
		minPrice?: number;
		maxPrice?: number;
		sort: string;
		page: number;
	};
}

async function ProductsGridServer({
	tenantId,
	filters,
}: ProductsGridServerProps) {
	const pageSize = 12;
	const skip = (filters.page - 1) * pageSize;

	// Build where clause
	// biome-ignore lint/suspicious/noExplicitAny: dynamic query building
	const where: any = {
		tenantId,
		status: "ACTIVE",
	};

	if (filters.search) {
		where.OR = [
			{
				translations: {
					some: { name: { contains: filters.search, mode: "insensitive" } },
				},
			},
			{
				translations: {
					some: {
						description: { contains: filters.search, mode: "insensitive" },
					},
				},
			},
			{ sku: { contains: filters.search, mode: "insensitive" } },
		];
	}

	if (filters.categorySlug) {
		const category = await db.category.findFirst({
			where: { tenantId, slug: filters.categorySlug },
			select: { id: true },
		});
		if (category) {
			where.categoryId = category.id;
		}
	}

	if (filters.brandSlug) {
		const brand = await db.brand.findFirst({
			where: { tenantId, slug: filters.brandSlug },
			select: { id: true },
		});
		if (brand) {
			where.brandId = brand.id;
		}
	}

	if (filters.collectionSlug) {
		const collection = await db.collection.findFirst({
			where: { tenantId, slug: filters.collectionSlug },
			select: { id: true },
		});
		if (collection) {
			where.collectionProducts = { some: { collectionId: collection.id } };
		}
	}

	if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
		where.price = {};
		if (filters.minPrice !== undefined) {
			where.price.gte = filters.minPrice;
		}
		if (filters.maxPrice !== undefined) {
			where.price.lte = filters.maxPrice;
		}
	}

	// Build orderBy
	// biome-ignore lint/suspicious/noExplicitAny: dynamic ordering
	let orderBy: any = { createdAt: "desc" };
	switch (filters.sort) {
		case "price-asc":
			orderBy = { price: "asc" };
			break;
		case "price-desc":
			orderBy = { price: "desc" };
			break;
		case "name-asc":
			orderBy = { translations: { _count: "asc" } }; // Workaround - ideally sort by name
			break;
		case "oldest":
			orderBy = { createdAt: "asc" };
			break;
		default:
			orderBy = { createdAt: "desc" };
	}

	const [products, totalCount] = await Promise.all([
		db.product.findMany({
			where,
			include: {
				media: {
					orderBy: { order: "asc" },
					take: 1,
				},
				variants: {
					take: 1,
					orderBy: { price: "asc" },
				},
				translations: {
					take: 1,
				},
			},
			orderBy,
			skip,
			take: pageSize,
		}),
		db.product.count({ where }),
	]);

	// Convert Decimal objects to numbers for client component compatibility
	const serializedProducts = products.map((product) => ({
		...product,
		price: Number(product.price),
		compareAtPrice: product.compareAtPrice
			? Number(product.compareAtPrice)
			: null,
		costPerItem: product.costPerItem ? Number(product.costPerItem) : null,
		unitPriceAmount: product.unitPriceAmount
			? Number(product.unitPriceAmount)
			: null,
		unitPriceBaseAmount: product.unitPriceBaseAmount
			? Number(product.unitPriceBaseAmount)
			: null,
		subscriptionDiscountPercent: product.subscriptionDiscountPercent
			? Number(product.subscriptionDiscountPercent)
			: null,
		preOrderDepositPercent: product.preOrderDepositPercent
			? Number(product.preOrderDepositPercent)
			: null,
		variants: product.variants.map((v) => ({
			...v,
			price: v.price ? Number(v.price) : null,
			priceAdjustment: v.priceAdjustment ? Number(v.priceAdjustment) : null,
		})),
	}));

	const totalPages = Math.ceil(totalCount / pageSize);

	return (
		<ProductsGrid
			products={serializedProducts}
			totalCount={totalCount}
			currentPage={filters.page}
			totalPages={totalPages}
		/>
	);
}

function ProductsGridSkeleton() {
	return (
		<div className="space-y-6">
			<div className="text-sm text-muted-foreground">
				<Skeleton className="h-4 w-32" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{Array.from({ length: 6 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton items
					<div key={i} className="space-y-3">
						<Skeleton className="aspect-square w-full rounded-lg" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-4 w-1/2" />
					</div>
				))}
			</div>
		</div>
	);
}
