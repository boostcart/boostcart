"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";

interface WishlistAddToCartProps {
	productId: string;
	productName: string;
	variantId?: string;
	variantName?: string;
	price?: number;
	image?: string | null;
	slug?: string;
}

export function WishlistAddToCart({
	productId,
	productName,
	variantId,
	variantName,
	price,
	image,
	slug,
}: WishlistAddToCartProps) {
	const [isLoading, setIsLoading] = useState(false);
	const { addItem, openCart } = useCartStore();

	const handleAddToCart = async () => {
		setIsLoading(true);
		try {
			// For wishlist, we need to fetch the product details first
			// For now, add with basic info and open cart
			addItem({
				id: variantId || productId,
				productId,
				variantId: variantId || null,
				name: productName,
				variantName: variantName || null,
				slug: slug || productId,
				price: price || 0,
				compareAtPrice: null,
				image: image || null,
			});
			toast.success("Added to cart");
			openCart();
		} catch {
			toast.error("Failed to add to cart");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button className="w-full" onClick={handleAddToCart} disabled={isLoading}>
			<ShoppingCart className="mr-2 h-4 w-4" />
			{isLoading ? "Adding..." : "Add to Cart"}
		</Button>
	);
}
