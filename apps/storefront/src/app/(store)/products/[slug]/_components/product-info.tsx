"use client";

import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { WishlistButton } from "@/components/wishlist-button";
import { formatPrice } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { type CartItem, useCartStore } from "@/stores/cart-store";

interface ProductVariant {
	id: string;
	sku: string | null;
	price: number | null;
	priceAdjustment: number;
	stock: number | null;
	imageUrl: string | null;
	options: Record<string, string>; // e.g., { "Color": "Red", "Size": "Large" }
}

interface ProductInfoProps {
	product: {
		id: string;
		slug: string;
		sku: string | null;
		name: string;
		description: string | null;
		price: number;
		compareAtPrice: number | null;
		trackStock: boolean;
		stock: number | null;
		brand: { name: string; slug: string } | null;
		variants: ProductVariant[];
		mainImage: string | null;
	};
}

export function ProductInfo({ product }: ProductInfoProps) {
	const { addItem } = useCartStore();
	const [quantity, setQuantity] = useState(1);
	const [justAdded, setJustAdded] = useState(false);

	// Extract available options from variants
	const availableOptions = useMemo(() => {
		const optionsMap: Record<string, Set<string>> = {};

		for (const variant of product.variants) {
			for (const [optionName, optionValue] of Object.entries(variant.options)) {
				if (!optionsMap[optionName]) {
					optionsMap[optionName] = new Set();
				}
				optionsMap[optionName].add(optionValue);
			}
		}

		return Object.entries(optionsMap).map(([name, values]) => ({
			name,
			values: Array.from(values),
		}));
	}, [product.variants]);

	// Selected options state
	const [selectedOptions, setSelectedOptions] = useState<
		Record<string, string>
	>(() => {
		const defaults: Record<string, string> = {};
		for (const option of availableOptions) {
			if (option.values[0]) {
				defaults[option.name] = option.values[0];
			}
		}
		return defaults;
	});

	// Find the selected variant based on selected options
	const selectedVariant = useMemo(() => {
		if (product.variants.length === 0) return null;

		return product.variants.find((variant) => {
			return Object.entries(selectedOptions).every(
				([optionName, optionValue]) =>
					variant.options[optionName] === optionValue,
			);
		});
	}, [product.variants, selectedOptions]);

	// Calculate current price and stock
	const currentPrice = selectedVariant?.price ?? product.price;
	const compareAtPrice = product.compareAtPrice;
	const hasDiscount = compareAtPrice && compareAtPrice > currentPrice;
	const discountPercent = hasDiscount
		? Math.round(((compareAtPrice - currentPrice) / compareAtPrice) * 100)
		: 0;

	// Stock calculation
	const maxQuantity = product.trackStock
		? (selectedVariant?.stock ?? product.stock ?? 0)
		: 999;
	const inStock = !product.trackStock || maxQuantity > 0;

	const handleOptionChange = useCallback(
		(optionName: string, optionValue: string) => {
			setSelectedOptions((prev) => ({
				...prev,
				[optionName]: optionValue,
			}));
		},
		[],
	);

	const handleQuantityChange = useCallback(
		(delta: number) => {
			setQuantity((prev) => {
				const newQty = prev + delta;
				if (newQty < 1) return 1;
				if (newQty > maxQuantity) return maxQuantity;
				return newQty;
			});
		},
		[maxQuantity],
	);

	const handleAddToCart = useCallback(() => {
		const variantName = selectedVariant
			? Object.values(selectedVariant.options).join(" / ")
			: null;

		const cartItem: Omit<CartItem, "quantity"> = {
			id: selectedVariant?.id || product.id,
			productId: product.id,
			variantId: selectedVariant?.id || null,
			name: product.name,
			variantName,
			slug: product.slug,
			price: currentPrice,
			compareAtPrice,
			image: selectedVariant?.imageUrl || product.mainImage,
			maxQuantity: product.trackStock ? maxQuantity : undefined,
		};

		addItem({ ...cartItem, quantity });
		setJustAdded(true);
		setTimeout(() => setJustAdded(false), 2000);
	}, [
		addItem,
		quantity,
		product,
		selectedVariant,
		currentPrice,
		compareAtPrice,
		maxQuantity,
	]);

	return (
		<div className="space-y-6">
			{/* Brand */}
			{product.brand && (
				<Link
					href={`/products?brand=${product.brand.slug}`}
					className="text-sm text-muted-foreground hover:text-primary transition-colors"
				>
					{product.brand.name}
				</Link>
			)}

			{/* Title */}
			<h1 className="text-3xl font-bold">{product.name}</h1>

			{/* Price */}
			<div className="flex items-center gap-4">
				<span className="text-3xl font-bold">{formatPrice(currentPrice)}</span>
				{hasDiscount && compareAtPrice && (
					<>
						<span className="text-xl text-muted-foreground line-through">
							{formatPrice(compareAtPrice)}
						</span>
						<Badge variant="destructive">-{discountPercent}%</Badge>
					</>
				)}
			</div>

			{/* Stock status */}
			<div className="flex items-center gap-2">
				{inStock ? (
					<Badge variant="secondary" className="bg-green-100 text-green-800">
						<Check className="w-3 h-3 mr-1" />
						In Stock
						{product.trackStock && maxQuantity <= 10 && (
							<span className="ml-1">({maxQuantity} left)</span>
						)}
					</Badge>
				) : (
					<Badge variant="secondary" className="bg-red-100 text-red-800">
						Out of Stock
					</Badge>
				)}
				{product.sku && (
					<span className="text-sm text-muted-foreground">
						SKU: {selectedVariant?.sku || product.sku}
					</span>
				)}
			</div>

			{/* Short description */}
			{product.description && (
				<p className="text-muted-foreground leading-relaxed line-clamp-3">
					{product.description}
				</p>
			)}

			<Separator />

			{/* Options (variants) */}
			{availableOptions.length > 0 && (
				<div className="space-y-4">
					{availableOptions.map((option) => (
						<div key={option.name} className="space-y-2">
							<Label className="text-sm font-medium">{option.name}</Label>
							<div className="flex flex-wrap gap-2">
								{option.values.map((value) => {
									const isSelected = selectedOptions[option.name] === value;
									return (
										<Button
											key={value}
											type="button"
											variant={isSelected ? "default" : "outline"}
											size="sm"
											className={cn(
												"min-w-15",
												isSelected && "ring-2 ring-offset-2 ring-primary",
											)}
											onClick={() => handleOptionChange(option.name, value)}
										>
											{value}
										</Button>
									);
								})}
							</div>
						</div>
					))}
				</div>
			)}

			{/* Quantity selector */}
			<div className="space-y-2">
				<Label className="text-sm font-medium">Quantity</Label>
				<div className="flex items-center gap-4">
					<div className="flex items-center border rounded-md">
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="h-10 w-10 rounded-r-none"
							onClick={() => handleQuantityChange(-1)}
							disabled={quantity <= 1}
						>
							<Minus className="h-4 w-4" />
							<span className="sr-only">Decrease quantity</span>
						</Button>
						<span className="w-12 text-center font-medium">{quantity}</span>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="h-10 w-10 rounded-l-none"
							onClick={() => handleQuantityChange(1)}
							disabled={quantity >= maxQuantity}
						>
							<Plus className="h-4 w-4" />
							<span className="sr-only">Increase quantity</span>
						</Button>
					</div>
					{product.trackStock && (
						<span className="text-sm text-muted-foreground">
							{maxQuantity} available
						</span>
					)}
				</div>
			</div>

			{/* Add to cart button */}
			<div className="flex gap-4">
				<Button
					size="lg"
					className="flex-1"
					onClick={handleAddToCart}
					disabled={!inStock}
				>
					{justAdded ? (
						<>
							<Check className="mr-2 h-5 w-5" />
							Added to Cart!
						</>
					) : (
						<>
							<ShoppingCart className="mr-2 h-5 w-5" />
							Add to Cart
						</>
					)}
				</Button>
				<WishlistButton productId={product.id} />
			</div>

			{/* View cart link */}
			{justAdded && (
				<div className="text-center">
					<Link href="/cart" className="text-sm text-primary hover:underline">
						View Cart →
					</Link>
				</div>
			)}
		</div>
	);
}
