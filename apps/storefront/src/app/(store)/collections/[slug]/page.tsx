import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";
import { ProductsGrid } from "../../products/_components/products-grid";
import { ProductsSorting } from "../../products/_components/products-sorting";

interface CollectionPageProps {
	params: Promise<{
		slug: string;
	}>;
	searchParams: Promise<{
		sort?: string;
		page?: string;
	}>;
}

export default async function CollectionDetailPage({
	params,
	searchParams,
}: CollectionPageProps) {
	const { slug } = await params;
	const search = await searchParams;
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return null;
	}

	const collection = await db.collection.findFirst({
		where: {
			tenantId: tenant.id,
			slug,
			isActive: true,
		},
		include: {
			translations: {
				take: 1,
			},
		},
	});

	if (!collection) {
		notFound();
	}

	const translation = collection.translations[0];
	const name = translation?.name || collection.slug;
	const description = translation?.description;
	const sort = search.sort || "newest";
	const page = search.page ? Number(search.page) : 1;

	return (
		<div className="container mx-auto py-8">
			{/* Breadcrumb */}
			<nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
				<Link href="/" className="hover:text-foreground transition-colors">
					Home
				</Link>
				<ChevronRight className="h-4 w-4" />
				<Link
					href="/collections"
					className="hover:text-foreground transition-colors"
				>
					Collections
				</Link>
				<ChevronRight className="h-4 w-4" />
				<span className="text-foreground font-medium">{name}</span>
			</nav>

			{/* Collection header */}
			<div className="space-y-4 mb-8">
				{collection.imageUrl && (
					<div className="relative aspect-21/9 overflow-hidden rounded-lg">
						<Image
							src={collection.imageUrl}
							alt={name}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
						<div className="absolute bottom-0 left-0 p-8">
							<h1 className="text-4xl font-bold text-white">{name}</h1>
							{description && (
								<p className="text-white/80 mt-2 max-w-2xl">{description}</p>
							)}
						</div>
					</div>
				)}
				{!collection.imageUrl && (
					<>
						<h1 className="text-3xl font-bold tracking-tight">{name}</h1>
						{description && (
							<p className="text-muted-foreground max-w-3xl">{description}</p>
						)}
					</>
				)}
			</div>

			{/* Sort bar */}
			<div className="flex items-center justify-between mb-6">
				<div />
				<ProductsSorting currentSort={sort} />
			</div>

			<Separator className="mb-8" />

			{/* Products grid */}
			<Suspense fallback={<ProductsGridSkeleton />}>
				<CollectionProductsServer
					tenantId={tenant.id}
					collectionId={collection.id}
					sort={sort}
					page={page}
				/>
			</Suspense>
		</div>
	);
}

interface CollectionProductsServerProps {
	tenantId: string;
	collectionId: string;
	sort: string;
	page: number;
}

async function CollectionProductsServer({
	tenantId,
	collectionId,
	sort,
	page,
}: CollectionProductsServerProps) {
	const pageSize = 12;
	const skip = (page - 1) * pageSize;

	// Build orderBy
	// biome-ignore lint/suspicious/noExplicitAny: dynamic ordering
	let orderBy: any = { createdAt: "desc" };
	switch (sort) {
		case "price-asc":
			orderBy = { price: "asc" };
			break;
		case "price-desc":
			orderBy = { price: "desc" };
			break;
		case "oldest":
			orderBy = { createdAt: "asc" };
			break;
		default:
			orderBy = { createdAt: "desc" };
	}

	const [products, totalCount] = await Promise.all([
		db.product.findMany({
			where: {
				tenantId,
				status: "ACTIVE",
				collectionProducts: {
					some: { collectionId },
				},
			},
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
		db.product.count({
			where: {
				tenantId,
				status: "ACTIVE",
				collectionProducts: {
					some: { collectionId },
				},
			},
		}),
	]);

	const totalPages = Math.ceil(totalCount / pageSize);

	return (
		<ProductsGrid
			products={products}
			totalCount={totalCount}
			currentPage={page}
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
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{Array.from({ length: 8 }).map((_, i) => (
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

export async function generateMetadata({ params }: CollectionPageProps) {
	const { slug } = await params;
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return { title: "Collection" };
	}

	const collection = await db.collection.findFirst({
		where: {
			tenantId: tenant.id,
			slug,
		},
		include: {
			translations: { take: 1 },
		},
	});

	if (!collection) {
		return { title: "Collection Not Found" };
	}

	const translation = collection.translations[0];

	return {
		title: translation?.name || collection.slug,
		description: translation?.description?.slice(0, 160),
	};
}
