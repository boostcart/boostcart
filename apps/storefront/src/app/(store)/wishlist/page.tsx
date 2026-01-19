import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/currency";
import { getWishlistItems } from "@/server/actions/wishlist";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { WishlistAddToCart } from "./_components/wishlist-add-to-cart";
import { WishlistRemoveButton } from "./_components/wishlist-remove-button";

export default async function WishlistPage() {
	const customer = await getCurrentCustomer();

	if (!customer) {
		redirect("/auth/login?redirect=/wishlist");
	}

	const items = await getWishlistItems();

	return (
		<div className="container mx-auto py-8">
			<div className="flex items-center gap-3 mb-8">
				<Heart className="h-8 w-8 text-primary" />
				<h1 className="text-3xl font-bold">My Wishlist</h1>
				{items.length > 0 && (
					<span className="text-muted-foreground">
						({items.length} item{items.length !== 1 ? "s" : ""})
					</span>
				)}
			</div>

			{items.length === 0 ? (
				<div className="text-center py-16">
					<div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
						<Heart className="w-12 h-12 text-muted-foreground" />
					</div>
					<h2 className="text-2xl font-semibold mb-2">
						Your wishlist is empty
					</h2>
					<p className="text-muted-foreground mb-8 max-w-md mx-auto">
						Save your favorite products to your wishlist and find them here
						whenever you&apos;re ready to shop.
					</p>
					<Button asChild size="lg">
						<Link href="/products">
							<ShoppingBag className="mr-2 h-5 w-5" />
							Browse Products
						</Link>
					</Button>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{items.map((item) => (
						<Card key={item.id} className="group overflow-hidden">
							<div className="relative aspect-square bg-muted">
								{item.product.imageUrl ? (
									<Image
										src={item.product.imageUrl}
										alt={item.product.name}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
								) : (
									<div className="absolute inset-0 flex items-center justify-center">
										<ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
									</div>
								)}
								{/* Remove button */}
								<WishlistRemoveButton productId={item.productId} />
								{/* Sale badge */}
								{item.product.compareAtPrice &&
									item.product.compareAtPrice > item.product.price && (
										<div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
											Sale
										</div>
									)}
							</div>
							<CardContent className="p-4">
								<Link
									href={`/products/${item.product.slug}`}
									className="block group-hover:text-primary transition-colors"
								>
									<h3 className="font-medium line-clamp-2 mb-2">
										{item.product.name}
									</h3>
								</Link>
								<div className="flex items-center gap-2 mb-4">
									<span className="font-bold text-lg">
										{formatPrice(item.product.price)}
									</span>
									{item.product.compareAtPrice &&
										item.product.compareAtPrice > item.product.price && (
											<span className="text-sm text-muted-foreground line-through">
												{formatPrice(item.product.compareAtPrice)}
											</span>
										)}
								</div>
								{item.product.status === "ACTIVE" &&
								(item.product.stock === null || item.product.stock > 0) ? (
									<WishlistAddToCart
										productId={item.productId}
										productName={item.product.name}
										price={item.product.price}
										slug={item.product.slug}
										image={item.product.imageUrl}
									/>
								) : (
									<Button variant="outline" className="w-full" disabled>
										Out of Stock
									</Button>
								)}
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</div>
	);
}
