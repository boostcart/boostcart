import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

interface CategoryWithDetails {
	id: string;
	slug: string;
	iconUrl: string | null;
	coverImageUrl: string | null;
	parentId: string | null;
	translations: { name: string; description: string | null }[];
	_count: { products: number; subCategories: number };
	subCategories: {
		id: string;
		slug: string;
		translations: { name: string }[];
		_count: { products: number };
	}[];
}

export default async function CategoriesPage() {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return null;
	}

	// Get top-level categories (no parent)
	const categories = (await db.category.findMany({
		where: {
			tenantId: tenant.id,
			parentId: null, // Top-level only
		},
		include: {
			translations: {
				take: 1,
			},
			_count: {
				select: {
					products: true,
					subCategories: true,
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
				take: 4, // Show up to 4 subcategories
			},
		},
		orderBy: { createdAt: "asc" },
	})) as unknown as CategoryWithDetails[];

	return (
		<div className="container mx-auto py-8">
			<div className="space-y-6">
				{/* Header */}
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Categories</h1>
					<p className="text-muted-foreground mt-1">
						Browse products by category
					</p>
				</div>

				{/* Categories grid */}
				{categories.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{categories.map((category) => {
							const translation = category.translations[0];
							const name = translation?.name || category.slug;
							const description = translation?.description;

							return (
								<Card
									key={category.id}
									className="group overflow-hidden transition-all hover:shadow-lg"
								>
									<Link href={`/categories/${category.slug}`}>
										<div className="relative aspect-video overflow-hidden bg-linear-to-br from-primary/20 to-primary/5">
											{category.coverImageUrl ? (
												<Image
													src={category.coverImageUrl}
													alt={name}
													fill
													className="object-cover transition-transform group-hover:scale-105"
												/>
											) : category.iconUrl ? (
												<Image
													src={category.iconUrl}
													alt={name}
													width={96}
													height={96}
													className="object-contain w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
												/>
											) : (
												<div className="w-full h-full flex items-center justify-center text-5xl">
													📁
												</div>
											)}
										</div>
									</Link>
									<CardContent className="p-6">
										<Link href={`/categories/${category.slug}`}>
											<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
												{name}
											</h3>
										</Link>
										{description && (
											<p className="text-muted-foreground mt-2 line-clamp-2">
												{description}
											</p>
										)}
										<p className="text-sm text-muted-foreground mt-3">
											{category._count.products} products
											{category._count.subCategories > 0 && (
												<span>
													{" "}
													• {category._count.subCategories} subcategories
												</span>
											)}
										</p>

										{/* Subcategories preview */}
										{category.subCategories.length > 0 && (
											<div className="mt-4 pt-4 border-t">
												<p className="text-xs font-medium text-muted-foreground mb-2">
													SUBCATEGORIES
												</p>
												<div className="flex flex-wrap gap-2">
													{category.subCategories.map((sub) => {
														const subName =
															sub.translations[0]?.name || sub.slug;
														return (
															<Link
																key={sub.id}
																href={`/categories/${category.slug}/${sub.slug}`}
																className="text-sm text-primary hover:underline flex items-center"
															>
																{subName}
																<ChevronRight className="h-3 w-3 ml-0.5" />
															</Link>
														);
													})}
												</div>
											</div>
										)}
									</CardContent>
								</Card>
							);
						})}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center py-16 text-center">
						<div className="text-6xl mb-4">📁</div>
						<h3 className="text-lg font-semibold">No categories yet</h3>
						<p className="text-muted-foreground mt-1">
							Check back later for product categories
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
