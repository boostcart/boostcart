"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/currency";

interface Product {
	slug: string;
	price: { toString: () => string };
	compareAtPrice: { toString: () => string } | null;
	media: Array<{
		url: string;
		altText: string | null;
	}>;
	variants: Array<{
		price: { toString: () => string } | null;
	}>;
	translations: Array<{
		name: string;
	}>;
}

interface ProductsGridProps {
	products: Product[];
	totalCount: number;
	currentPage: number;
	totalPages: number;
}

export function ProductsGrid({
	products,
	totalCount,
	currentPage,
	totalPages,
}: ProductsGridProps) {
	const searchParams = useSearchParams();

	const createPageUrl = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());
		return `/products?${params.toString()}`;
	};

	if (products.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-16 text-center">
				<div className="text-6xl mb-4">🔍</div>
				<h3 className="text-lg font-semibold">No products found</h3>
				<p className="text-muted-foreground mt-1">
					Try adjusting your filters or search terms
				</p>
				<Button asChild variant="outline" className="mt-4">
					<Link href="/products">Clear all filters</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Results count */}
			<p className="text-sm text-muted-foreground">
				Showing {(currentPage - 1) * 12 + 1}-
				{Math.min(currentPage * 12, totalCount)} of {totalCount} products
			</p>

			{/* Products grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => {
					const primaryImage = product.media[0];
					const lowestPriceVariant = product.variants[0];
					const translation = product.translations[0];
					const title = translation?.name || product.slug;
					const price = lowestPriceVariant?.price ?? product.price;
					const compareAtPrice = product.compareAtPrice;
					const hasDiscount =
						compareAtPrice && Number(compareAtPrice) > Number(price);

					return (
						<Link key={product.slug} href={`/products/${product.slug}`}>
							<Card className="group overflow-hidden transition-all hover:shadow-lg h-full">
								<div className="relative aspect-square overflow-hidden bg-muted">
									{primaryImage?.url ? (
										<Image
											src={primaryImage.url}
											alt={primaryImage.altText || title}
											fill
											className="object-cover transition-transform group-hover:scale-105"
										/>
									) : (
										<div className="w-full h-full flex items-center justify-center text-4xl">
											📦
										</div>
									)}
									{hasDiscount && (
										<Badge
											variant="destructive"
											className="absolute top-2 right-2"
										>
											Sale
										</Badge>
									)}
								</div>
								<CardContent className="p-4">
									<h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
										{title}
									</h3>
									<div className="mt-2 flex items-center gap-2">
										<span className="font-bold">
											{formatPrice(Number(price.toString()))}
										</span>
										{hasDiscount && compareAtPrice && (
											<span className="text-sm text-muted-foreground line-through">
												{formatPrice(Number(compareAtPrice.toString()))}
											</span>
										)}
									</div>
								</CardContent>
							</Card>
						</Link>
					);
				})}
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-2 pt-6">
					<Button
						variant="outline"
						size="sm"
						disabled={currentPage === 1}
						asChild={currentPage !== 1}
					>
						{currentPage === 1 ? (
							<span>
								<ChevronLeft className="h-4 w-4 mr-1" />
								Previous
							</span>
						) : (
							<Link href={createPageUrl(currentPage - 1)}>
								<ChevronLeft className="h-4 w-4 mr-1" />
								Previous
							</Link>
						)}
					</Button>

					<div className="flex items-center gap-1">
						{Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
							let pageNum: number;
							if (totalPages <= 5) {
								pageNum = i + 1;
							} else if (currentPage <= 3) {
								pageNum = i + 1;
							} else if (currentPage >= totalPages - 2) {
								pageNum = totalPages - 4 + i;
							} else {
								pageNum = currentPage - 2 + i;
							}

							return (
								<Button
									key={pageNum}
									variant={currentPage === pageNum ? "default" : "outline"}
									size="sm"
									className="w-9"
									asChild={currentPage !== pageNum}
								>
									{currentPage === pageNum ? (
										<span>{pageNum}</span>
									) : (
										<Link href={createPageUrl(pageNum)}>{pageNum}</Link>
									)}
								</Button>
							);
						})}
					</div>

					<Button
						variant="outline"
						size="sm"
						disabled={currentPage === totalPages}
						asChild={currentPage !== totalPages}
					>
						{currentPage === totalPages ? (
							<span>
								Next
								<ChevronRight className="h-4 w-4 ml-1" />
							</span>
						) : (
							<Link href={createPageUrl(currentPage + 1)}>
								Next
								<ChevronRight className="h-4 w-4 ml-1" />
							</Link>
						)}
					</Button>
				</div>
			)}
		</div>
	);
}
