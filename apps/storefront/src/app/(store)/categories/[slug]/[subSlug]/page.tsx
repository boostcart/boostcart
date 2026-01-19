import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";
import { ProductCard } from "../../../_components/product-card";

interface SubcategoryPageProps {
	params: Promise<{ slug: string; subSlug: string }>;
	searchParams: Promise<{
		sort?: string;
		page?: string;
	}>;
}

export default async function SubcategoryPage({
	params,
	searchParams,
}: SubcategoryPageProps) {
	const tenant = await getCurrentTenant();
	const { slug, subSlug } = await params;
	const { sort = "newest", page = "1" } = await searchParams;

	if (!tenant) {
		return null;
	}

	// Get the parent category
	const parentCategory = await db.category.findFirst({
		where: {
			tenantId: tenant.id,
			slug,
		},
		include: {
			translations: {
				take: 1,
			},
		},
	});

	if (!parentCategory) {
		notFound();
	}

	// Get the subcategory
	const subcategory = await db.category.findFirst({
		where: {
			tenantId: tenant.id,
			slug: subSlug,
			parentId: parentCategory.id,
		},
		include: {
			translations: {
				take: 1,
			},
		},
	});

	if (!subcategory) {
		notFound();
	}

	const parentName =
		parentCategory.translations[0]?.name || parentCategory.slug;
	const name = subcategory.translations[0]?.name || subcategory.slug;
	const description = subcategory.translations[0]?.description;

	// Sorting
	type OrderByField = "createdAt" | "price";
	let orderBy: Partial<Record<OrderByField, "asc" | "desc">> = {
		createdAt: "desc",
	};
	if (sort === "oldest") orderBy = { createdAt: "asc" };
	else if (sort === "price-low") orderBy = { price: "asc" };
	else if (sort === "price-high") orderBy = { price: "desc" };

	// Pagination
	const pageNumber = Number.parseInt(page) || 1;
	const pageSize = 12;
	const skip = (pageNumber - 1) * pageSize;

	// Get products in this subcategory
	const [products, totalCount] = await Promise.all([
		db.product.findMany({
			where: {
				tenantId: tenant.id,
				categoryId: subcategory.id,
				status: "ACTIVE",
			},
			include: {
				translations: {
					take: 1,
				},
				media: {
					orderBy: { order: "asc" },
					take: 1,
				},
			},
			orderBy,
			skip,
			take: pageSize,
		}),
		db.product.count({
			where: {
				tenantId: tenant.id,
				categoryId: subcategory.id,
				status: "ACTIVE",
			},
		}),
	]);

	const totalPages = Math.ceil(totalCount / pageSize);

	return (
		<div className="container mx-auto py-8">
			<div className="space-y-6">
				{/* Breadcrumb */}
				<nav className="flex items-center text-sm text-muted-foreground">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					<ChevronRight className="h-4 w-4 mx-2" />
					<Link href="/categories" className="hover:text-foreground">
						Categories
					</Link>
					<ChevronRight className="h-4 w-4 mx-2" />
					<Link href={`/categories/${slug}`} className="hover:text-foreground">
						{parentName}
					</Link>
					<ChevronRight className="h-4 w-4 mx-2" />
					<span className="text-foreground font-medium">{name}</span>
				</nav>

				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">{name}</h1>
						{description && (
							<p className="text-muted-foreground mt-2 max-w-2xl">
								{description}
							</p>
						)}
						<p className="text-sm text-muted-foreground mt-2">
							{totalCount} product{totalCount !== 1 ? "s" : ""}
						</p>
					</div>

					{/* Sort dropdown */}
					<div className="flex items-center gap-2">
						<span className="text-sm text-muted-foreground">Sort by:</span>
						<select
							className="h-9 rounded-md border border-input bg-background px-3 text-sm"
							defaultValue={sort}
							onChange={(e) => {
								const url = new URL(window.location.href);
								url.searchParams.set("sort", e.target.value);
								url.searchParams.delete("page");
								window.location.href = url.toString();
							}}
						>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="price-low">Price: Low to High</option>
							<option value="price-high">Price: High to Low</option>
						</select>
					</div>
				</div>

				{/* Products grid */}
				{products.length > 0 ? (
					<>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
							{products.map((product) => {
								const productTranslation = product.translations[0];
								return (
									<ProductCard
										key={product.id}
										product={{
											id: product.id,
											slug: product.slug,
											name: productTranslation?.name || product.slug,
											price: Number(product.price),
											compareAtPrice: product.compareAtPrice
												? Number(product.compareAtPrice)
												: null,
											image: product.media[0]?.url,
											status: product.status,
										}}
									/>
								);
							})}
						</div>

						{/* Pagination */}
						{totalPages > 1 && (
							<div className="flex justify-center gap-2 pt-8">
								{pageNumber > 1 && (
									<Link
										href={`/categories/${slug}/${subSlug}?sort=${sort}&page=${pageNumber - 1}`}
									>
										<Button variant="outline">Previous</Button>
									</Link>
								)}

								<div className="flex items-center gap-1">
									{Array.from({ length: totalPages }, (_, i) => i + 1)
										.filter((p) => {
											return (
												p === 1 ||
												p === totalPages ||
												Math.abs(p - pageNumber) <= 1
											);
										})
										.map((p, index, arr) => {
											const showEllipsis =
												index > 0 && arr[index - 1] !== p - 1;

											return (
												<span key={p} className="flex items-center">
													{showEllipsis && (
														<span className="px-2 text-muted-foreground">
															...
														</span>
													)}
													<Link
														href={`/categories/${slug}/${subSlug}?sort=${sort}&page=${p}`}
													>
														<Button
															variant={p === pageNumber ? "default" : "outline"}
															size="sm"
															className="w-9"
														>
															{p}
														</Button>
													</Link>
												</span>
											);
										})}
								</div>

								{pageNumber < totalPages && (
									<Link
										href={`/categories/${slug}/${subSlug}?sort=${sort}&page=${pageNumber + 1}`}
									>
										<Button variant="outline">Next</Button>
									</Link>
								)}
							</div>
						)}
					</>
				) : (
					<div className="flex flex-col items-center justify-center py-16 text-center">
						<div className="text-6xl mb-4">📦</div>
						<h3 className="text-lg font-semibold">No products yet</h3>
						<p className="text-muted-foreground mt-1">
							This subcategory doesn&apos;t have any products yet
						</p>
						<Link href={`/categories/${slug}`} className="mt-4">
							<Button variant="outline">Back to {parentName}</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
