import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/currency";

interface RelatedProduct {
	id: string;
	slug: string;
	price: number;
	compareAtPrice: number | null;
	name: string | null;
	imageUrl: string | null;
}

interface RelatedProductsProps {
	products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
	return (
		<section className="space-y-6">
			<h2 className="text-2xl font-bold tracking-tight">Related Products</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{products.map((product) => {
					const title = product.name || product.slug;
					const hasDiscount =
						product.compareAtPrice && product.compareAtPrice > product.price;

					return (
						<Link key={product.id} href={`/products/${product.slug}`}>
							<Card className="group overflow-hidden transition-all hover:shadow-lg h-full">
								<div className="relative aspect-square overflow-hidden bg-muted">
									{product.imageUrl ? (
										<Image
											src={product.imageUrl}
											alt={title}
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
											{formatPrice(product.price)}
										</span>
										{hasDiscount && product.compareAtPrice && (
											<span className="text-sm text-muted-foreground line-through">
												{formatPrice(product.compareAtPrice)}
											</span>
										)}
									</div>
								</CardContent>
							</Card>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
