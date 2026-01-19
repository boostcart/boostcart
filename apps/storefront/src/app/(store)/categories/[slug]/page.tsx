import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";
import { ProductCard } from "../../_components/product-card";

interface CategoryPageProps {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{
		sort?: string;
		page?: string;
	}>;
}

export default async function CategoryPage({
	params,
	searchParams,
}: CategoryPageProps) {
	const tenant = await getCurrentTenant();
	const { slug } = await params;
	const { sort = "newest", page = "1" } = await searchParams;

	if (!tenant) {
		return null;
	}

	// Get the category
	const category = await db.category.findFirst({
		where: {
			tenantId: tenant.id,
			slug,
		},
		include: {
			translations: {
				take: 1,
			},
			parent: {
				include: {
					translations: {
						take: 1,
					},
				},
			},
			subCategories: {
				include: {
					translations: {
						take: 1,
					},
					_count: {
						select: {
							products: true,
						},
					},
				},
			},
		},
	});

	if (!category) {
		notFound();
	}

	const translation = category.translations[0];
	const name = translation?.name || category.slug;
	const description = translation?.description;

	// Sorting
	type OrderByField = "createdAt" | "price" | "name";
	let orderBy:
		| Partial<Record<OrderByField, "asc" | "desc">>
		| { translations: { name: "asc" | "desc" } } = { createdAt: "desc" };
	if (sort === "oldest") orderBy = { createdAt: "asc" };
	else if (sort === "price-low") orderBy = { price: "asc" };
	else if (sort === "price-high") orderBy = { price: "desc" };
	else if (sort === "name-asc") orderBy = { translations: { name: "asc" } };
	else if (sort === "name-desc") orderBy = { translations: { name: "desc" } };

	// Pagination
	const pageNumber = Number.parseInt(page) || 1;
	const pageSize = 12;
	const skip = (pageNumber - 1) * pageSize;

	// Get products in this category
	const [products, totalCount] = await Promise.all([
		db.product.findMany({
			where: {
				tenantId: tenant.id,
				categoryId: category.id,
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
				variants: {
					take: 1,
					orderBy: { price: "asc" },
				},
			},
			orderBy: orderBy as Record<string, "asc" | "desc">,
			skip,
			take: pageSize,
		}),
		db.product.count({
			where: {
				tenantId: tenant.id,
				categoryId: category.id,
				status: "ACTIVE",
			},
		}),
	]);

	const totalPages = Math.ceil(totalCount / pageSize);

	// Build breadcrumb
	const breadcrumb: { name: string; href: string }[] = [
		{ name: "Categories", href: "/categories" },
	];

	if (category.parent) {
		const parentName =
			category.parent.translations[0]?.name || category.parent.slug;
		breadcrumb.push({
			name: parentName,
			href: `/categories/${category.parent.slug}`,
		});
	}

	breadcrumb.push({ name, href: `/categories/${slug}` });

	return (
		<div className="container mx-auto py-8">
			<div className="space-y-6">
				{/* Breadcrumb */}
				<nav className="flex items-center text-sm text-muted-foreground">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					{breadcrumb.map((item, index) => (
						<span key={item.href} className="flex items-center">
							<ChevronRight className="h-4 w-4 mx-2" />
							{index === breadcrumb.length - 1 ? (
								<span className="text-foreground font-medium">{item.name}</span>
							) : (
								<Link href={item.href} className="hover:text-foreground">
									{item.name}
								</Link>
							)}
						</span>
					))}
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
							<option value="name-asc">Name: A-Z</option>
							<option value="name-desc">Name: Z-A</option>
						</select>
					</div>
				</div>

				{/* Subcategories */}
				{category.subCategories.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{category.subCategories.map((sub) => {
							const subName = sub.translations[0]?.name || sub.slug;
							return (
								<Link key={sub.id} href={`/categories/${slug}/${sub.slug}`}>
									<Badge
										variant="secondary"
										className="cursor-pointer hover:bg-secondary/80"
									>
										{subName}
										<span className="ml-1 text-muted-foreground">
											({sub._count.products})
										</span>
									</Badge>
								</Link>
							);
						})}
					</div>
				)}

				{/* Products grid */}
				{products.length > 0 ? (
					<>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>

						{/* Pagination */}
						{totalPages > 1 && (
							<div className="flex justify-center gap-2 pt-8">
								{pageNumber > 1 && (
									<Link
										href={`/categories/${slug}?sort=${sort}&page=${pageNumber - 1}`}
									>
										<Button variant="outline">Previous</Button>
									</Link>
								)}

								<div className="flex items-center gap-1">
									{Array.from({ length: totalPages }, (_, i) => i + 1)
										.filter((p) => {
											// Show first, last, and pages around current
											return (
												p === 1 ||
												p === totalPages ||
												Math.abs(p - pageNumber) <= 1
											);
										})
										.map((p, index, arr) => {
											// Add ellipsis
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
														href={`/categories/${slug}?sort=${sort}&page=${p}`}
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
										href={`/categories/${slug}?sort=${sort}&page=${pageNumber + 1}`}
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
							This category doesn&apos;t have any products yet
						</p>
						<Link href="/products" className="mt-4">
							<Button variant="outline">Browse all products</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
