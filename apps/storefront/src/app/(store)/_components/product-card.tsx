import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/currency";

interface ProductCardProps {
	product: {
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
	};
}

export function ProductCard({ product }: ProductCardProps) {
	const primaryImage = product.media[0];
	const lowestPriceVariant = product.variants[0];
	const translation = product.translations[0];
	const title = translation?.name || product.slug;

	// Use variant price if available, otherwise product price
	const price = lowestPriceVariant?.price ?? product.price;
	const compareAtPrice = product.compareAtPrice;
	const hasDiscount = compareAtPrice && Number(compareAtPrice) > Number(price);

	return (
		<Link href={`/products/${product.slug}`}>
			<Card className="group overflow-hidden transition-all hover:shadow-lg">
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
						<Badge variant="destructive" className="absolute top-2 right-2">
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
}
