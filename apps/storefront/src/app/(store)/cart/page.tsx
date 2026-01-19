"use client";

import {
	ArrowRight,
	Minus,
	Package,
	Plus,
	ShoppingBag,
	Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";

export default function CartPage() {
	const {
		items,
		removeItem,
		updateQuantity,
		clearCart,
		getSubtotal,
		getSavings,
	} = useCartStore();

	const formatPrice = (amount: number) => {
		return new Intl.NumberFormat("bg-BG", {
			style: "currency",
			currency: "EUR",
		}).format(amount);
	};

	const subtotal = getSubtotal();
	const savings = getSavings();
	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

	if (items.length === 0) {
		return (
			<div className="container py-16">
				<div className="max-w-md mx-auto text-center">
					<div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
						<ShoppingBag className="w-12 h-12 text-muted-foreground" />
					</div>
					<h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
					<p className="text-muted-foreground mb-8">
						Looks like you haven&apos;t added any products yet.
					</p>
					<Button asChild size="lg">
						<Link href="/products">
							Start Shopping
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto py-8">
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-bold">Shopping Cart</h1>
				<Button
					variant="ghost"
					size="sm"
					className="text-muted-foreground"
					onClick={clearCart}
				>
					<Trash2 className="mr-2 h-4 w-4" />
					Clear Cart
				</Button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Cart items */}
				<div className="lg:col-span-2 space-y-4">
					{items.map((item) => (
						<Card key={item.id} className="overflow-hidden">
							<div className="flex gap-4 p-4">
								{/* Product image */}
								<Link href={`/products/${item.slug}`} className="shrink-0">
									<div className="w-24 h-24 rounded-md overflow-hidden bg-muted">
										{item.image ? (
											<Image
												src={item.image}
												alt={item.name}
												width={96}
												height={96}
												className="w-full h-full object-cover"
											/>
										) : (
											<div className="w-full h-full flex items-center justify-center">
												<Package className="w-8 h-8 text-muted-foreground" />
											</div>
										)}
									</div>
								</Link>

								{/* Product info */}
								<div className="flex-1 min-w-0">
									<Link
										href={`/products/${item.slug}`}
										className="font-medium hover:text-primary transition-colors line-clamp-1"
									>
										{item.name}
									</Link>
									{item.variantName && (
										<p className="text-sm text-muted-foreground mt-0.5">
											{item.variantName}
										</p>
									)}

									<div className="flex items-center gap-2 mt-2">
										<span className="font-semibold">
											{formatPrice(item.price)}
										</span>
										{item.compareAtPrice &&
											item.compareAtPrice > item.price && (
												<span className="text-sm text-muted-foreground line-through">
													{formatPrice(item.compareAtPrice)}
												</span>
											)}
									</div>

									{/* Quantity and remove */}
									<div className="flex items-center justify-between mt-4">
										<div className="flex items-center border rounded-md">
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8 rounded-r-none"
												onClick={() =>
													updateQuantity(item.id, item.quantity - 1)
												}
											>
												<Minus className="h-3 w-3" />
											</Button>
											<span className="w-10 text-center text-sm">
												{item.quantity}
											</span>
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8 rounded-l-none"
												onClick={() =>
													updateQuantity(item.id, item.quantity + 1)
												}
												disabled={
													item.maxQuantity
														? item.quantity >= item.maxQuantity
														: false
												}
											>
												<Plus className="h-3 w-3" />
											</Button>
										</div>

										<Button
											variant="ghost"
											size="sm"
											className="text-muted-foreground hover:text-destructive"
											onClick={() => removeItem(item.id)}
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								</div>

								{/* Line total */}
								<div className="text-right">
									<span className="font-bold">
										{formatPrice(item.price * item.quantity)}
									</span>
								</div>
							</div>
						</Card>
					))}
				</div>

				{/* Order summary */}
				<div className="lg:col-span-1">
					<Card className="sticky top-24">
						<CardHeader>
							<CardTitle>Order Summary</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex justify-between text-sm">
								<span className="text-muted-foreground">
									Subtotal ({itemCount} items)
								</span>
								<span>{formatPrice(subtotal)}</span>
							</div>

							{savings > 0 && (
								<div className="flex justify-between text-sm text-green-600">
									<span>You save</span>
									<span>-{formatPrice(savings)}</span>
								</div>
							)}

							<div className="flex justify-between text-sm">
								<span className="text-muted-foreground">Shipping</span>
								<span>Calculated at checkout</span>
							</div>

							<Separator />

							<div className="flex justify-between font-semibold text-lg">
								<span>Total</span>
								<span>{formatPrice(subtotal)}</span>
							</div>
						</CardContent>
						<CardFooter className="flex-col gap-3">
							<Button asChild className="w-full" size="lg">
								<Link href="/checkout">
									Proceed to Checkout
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button asChild variant="outline" className="w-full">
								<Link href="/products">Continue Shopping</Link>
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
