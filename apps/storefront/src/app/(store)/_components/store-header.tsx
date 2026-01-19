"use client";

import {
	Heart,
	Menu,
	Minus,
	Package,
	Plus,
	Search,
	ShoppingCart,
	Trash2,
	User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice } from "@/lib/currency";
import type { StorefrontTenant } from "@/server/tenant";
import { useCartStore } from "@/stores/cart-store";
import { GlobalSearch } from "./global-search";

interface StoreHeaderProps {
	tenant: StorefrontTenant;
	customer: {
		firstName: string | null;
		lastName: string | null;
		email: string;
	} | null;
}

export function StoreHeader({ tenant, customer }: StoreHeaderProps) {
	const {
		items,
		removeItem,
		updateQuantity,
		getItemCount,
		getSubtotal,
		isOpen,
		toggleCart,
		closeCart,
	} = useCartStore();
	const [mounted, setMounted] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	// Hydration fix for localStorage state
	useEffect(() => {
		setMounted(true);
	}, []);

	const itemCount = mounted ? getItemCount() : 0;
	const subtotal = mounted ? getSubtotal() : 0;

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container flex h-16 items-center mx-auto">
				{/* Mobile Menu */}
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-75 sm:w-100">
						<nav className="flex flex-col gap-4 mt-8">
							<Link href="/" className="text-lg font-medium hover:text-primary">
								Home
							</Link>
							<Link
								href="/products"
								className="text-lg font-medium hover:text-primary"
							>
								Products
							</Link>
							<Link
								href="/collections"
								className="text-lg font-medium hover:text-primary"
							>
								Collections
							</Link>
							<Link
								href="/categories"
								className="text-lg font-medium hover:text-primary"
							>
								Categories
							</Link>
						</nav>
					</SheetContent>
				</Sheet>

				{/* Logo */}
				<Link href="/" className="mr-6 flex items-center space-x-2">
					{tenant.logoUrl ? (
						<Image
							src={tenant.logoUrl}
							alt={tenant.name}
							width={32}
							height={32}
							className="h-8 w-auto"
						/>
					) : (
						<span className="text-xl font-bold">{tenant.name}</span>
					)}
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
					<Link
						href="/products"
						className="transition-colors hover:text-primary"
					>
						Products
					</Link>
					<Link
						href="/collections"
						className="transition-colors hover:text-primary"
					>
						Collections
					</Link>
					<Link
						href="/categories"
						className="transition-colors hover:text-primary"
					>
						Categories
					</Link>
				</nav>

				{/* Right Side Actions */}
				<div className="ml-auto flex items-center space-x-4">
					{/* Search */}
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setSearchOpen(true)}
					>
						<Search className="h-5 w-5" />
						<span className="sr-only">Search</span>
					</Button>
					<GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />

					{/* Account */}
					{customer ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon">
									<User className="h-5 w-5" />
									<span className="sr-only">Account</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<div className="px-2 py-1.5">
									<p className="text-sm font-medium">
										{customer.firstName
											? `${customer.firstName} ${customer.lastName || ""}`
											: customer.email}
									</p>
									<p className="text-xs text-muted-foreground">
										{customer.email}
									</p>
								</div>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/account">My Account</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/account/orders">Orders</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/wishlist">
										<Heart className="mr-2 h-4 w-4" />
										Wishlist
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/account/addresses">Addresses</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/account/logout">Sign Out</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Button variant="ghost" size="icon" asChild>
							<Link href="/account/login">
								<User className="h-5 w-5" />
								<span className="sr-only">Sign In</span>
							</Link>
						</Button>
					)}

					{/* Cart Sheet */}
					<Sheet open={isOpen} onOpenChange={toggleCart}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="relative">
								<ShoppingCart className="h-5 w-5" />
								{itemCount > 0 && (
									<Badge
										variant="destructive"
										className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
									>
										{itemCount > 99 ? "99+" : itemCount}
									</Badge>
								)}
								<span className="sr-only">Cart</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="flex flex-col w-full sm:max-w-lg">
							<SheetHeader>
								<SheetTitle>Shopping Cart ({itemCount})</SheetTitle>
							</SheetHeader>

							{items.length === 0 ? (
								<div className="flex-1 flex flex-col items-center justify-center text-center py-8">
									<ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
									<p className="text-muted-foreground">Your cart is empty</p>
									<Button
										asChild
										variant="outline"
										className="mt-4"
										onClick={closeCart}
									>
										<Link href="/products">Start Shopping</Link>
									</Button>
								</div>
							) : (
								<>
									<ScrollArea className="flex-1 -mx-6 px-6">
										<div className="space-y-4 py-4">
											{items.map((item) => (
												<div key={item.id} className="flex gap-3">
													<Link
														href={`/products/${item.slug}`}
														onClick={closeCart}
														className="shrink-0"
													>
														<div className="w-16 h-16 rounded-md overflow-hidden bg-muted">
															{item.image ? (
																<Image
																	src={item.image}
																	alt={item.name}
																	width={64}
																	height={64}
																	className="w-full h-full object-cover"
																/>
															) : (
																<div className="w-full h-full flex items-center justify-center">
																	<Package className="w-6 h-6 text-muted-foreground" />
																</div>
															)}
														</div>
													</Link>
													<div className="flex-1 min-w-0">
														<Link
															href={`/products/${item.slug}`}
															onClick={closeCart}
															className="font-medium text-sm line-clamp-1 hover:text-primary"
														>
															{item.name}
														</Link>
														{item.variantName && (
															<p className="text-xs text-muted-foreground">
																{item.variantName}
															</p>
														)}
														<p className="text-sm font-medium mt-1">
															{formatPrice(item.price)}
														</p>
														<div className="flex items-center justify-between mt-2">
															<div className="flex items-center border rounded-md">
																<Button
																	variant="ghost"
																	size="icon"
																	className="h-7 w-7"
																	onClick={() =>
																		updateQuantity(item.id, item.quantity - 1)
																	}
																>
																	<Minus className="h-3 w-3" />
																</Button>
																<span className="w-8 text-center text-sm">
																	{item.quantity}
																</span>
																<Button
																	variant="ghost"
																	size="icon"
																	className="h-7 w-7"
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
																size="icon"
																className="h-7 w-7 text-muted-foreground hover:text-destructive"
																onClick={() => removeItem(item.id)}
															>
																<Trash2 className="h-4 w-4" />
															</Button>
														</div>
													</div>
												</div>
											))}
										</div>
									</ScrollArea>

									<Separator />

									<div className="pt-4 space-y-4">
										<div className="flex items-center justify-between font-medium">
											<span>Subtotal</span>
											<span>{formatPrice(subtotal)}</span>
										</div>
										<p className="text-xs text-muted-foreground">
											Shipping and taxes calculated at checkout
										</p>
										<div className="flex flex-col gap-2">
											<Button asChild size="lg" onClick={closeCart}>
												<Link href="/checkout">Checkout</Link>
											</Button>
											<Button asChild variant="outline" onClick={closeCart}>
												<Link href="/cart">View Cart</Link>
											</Button>
										</div>
									</div>
								</>
							)}
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
