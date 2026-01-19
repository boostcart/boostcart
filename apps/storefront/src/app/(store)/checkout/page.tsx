"use client";

import {
	Check,
	ChevronLeft,
	ChevronRight,
	CreditCard,
	Package,
	ShoppingBag,
	Truck,
	User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { createOrder } from "@/server/actions/orders";
import { useCartStore } from "@/stores/cart-store";
import { useCustomerAuth } from "@/stores/customer-auth-store";

type CheckoutStep = "info" | "shipping" | "payment" | "review";

interface CheckoutForm {
	// Contact
	email: string;
	phone: string;
	// Shipping address
	firstName: string;
	lastName: string;
	company: string;
	address1: string;
	address2: string;
	city: string;
	country: string;
	province: string;
	postalCode: string;
	// Options
	saveInfo: boolean;
	// Shipping method
	shippingMethod: string;
	// Payment method
	paymentMethod: string;
}

const initialForm: CheckoutForm = {
	email: "",
	phone: "",
	firstName: "",
	lastName: "",
	company: "",
	address1: "",
	address2: "",
	city: "",
	country: "Bulgaria",
	province: "",
	postalCode: "",
	saveInfo: false,
	shippingMethod: "standard",
	paymentMethod: "cod",
};

const shippingMethods = [
	{
		id: "standard",
		name: "Standard Shipping",
		description: "5-7 business days",
		price: 5.99,
	},
	{
		id: "express",
		name: "Express Shipping",
		description: "2-3 business days",
		price: 12.99,
	},
	{
		id: "pickup",
		name: "Store Pickup",
		description: "Available within 24 hours",
		price: 0,
	},
];

const paymentMethods = [
	{
		id: "cod",
		name: "Cash on Delivery",
		description: "Pay when your order arrives",
		icon: Package,
	},
	{
		id: "card",
		name: "Credit/Debit Card",
		description: "Secure payment via Stripe",
		icon: CreditCard,
		disabled: true,
		note: "Coming soon",
	},
];

const steps: { id: CheckoutStep; label: string; icon: React.ElementType }[] = [
	{ id: "info", label: "Information", icon: User },
	{ id: "shipping", label: "Shipping", icon: Truck },
	{ id: "payment", label: "Payment", icon: CreditCard },
	{ id: "review", label: "Review", icon: Check },
];

export default function CheckoutPage() {
	const router = useRouter();
	const { items, getSubtotal, clearCart } = useCartStore();
	const { customer } = useCustomerAuth();
	const [currentStep, setCurrentStep] = useState<CheckoutStep>("info");
	const [form, setForm] = useState<CheckoutForm>(initialForm);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Hydration fix
	useEffect(() => {
		setMounted(true);
	}, []);

	// Pre-fill form if customer is logged in
	useEffect(() => {
		if (customer) {
			setForm((prev) => ({
				...prev,
				email: customer.email,
				firstName: customer.firstName || "",
				lastName: customer.lastName || "",
				phone: customer.phone || "",
			}));
		}
	}, [customer]);

	const subtotal = mounted ? getSubtotal() : 0;
	const selectedShipping = shippingMethods.find(
		(m) => m.id === form.shippingMethod,
	);
	const shippingCost = selectedShipping?.price || 0;
	const total = subtotal + shippingCost;

	const updateForm = (updates: Partial<CheckoutForm>) => {
		setForm((prev) => ({ ...prev, ...updates }));
	};

	const stepIndex = steps.findIndex((s) => s.id === currentStep);

	const goToStep = (step: CheckoutStep) => {
		setCurrentStep(step);
	};

	const goNext = () => {
		const nextIndex = stepIndex + 1;
		const nextStep = steps[nextIndex];
		if (nextStep) {
			setCurrentStep(nextStep.id);
		}
	};

	const goBack = () => {
		const prevIndex = stepIndex - 1;
		const prevStep = steps[prevIndex];
		if (prevStep) {
			setCurrentStep(prevStep.id);
		}
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);
		try {
			const result = await createOrder({
				email: form.email,
				phone: form.phone || undefined,
				firstName: form.firstName,
				lastName: form.lastName,
				company: form.company || undefined,
				address1: form.address1,
				address2: form.address2 || undefined,
				city: form.city,
				country: form.country,
				postalCode: form.postalCode,
				shippingCost: shippingCost,
				paymentMethod: form.paymentMethod,
				items: items.map((item) => ({
					productId: item.productId,
					variantId: item.variantId,
					quantity: item.quantity,
					price: item.price,
					productName: item.name,
					variantName: item.variantName || undefined,
				})),
				totalAmount: total,
			});

			if (result.success) {
				clearCart();
				router.push(
					`/checkout/success?order=${result.orderNumber || result.orderId}`,
				);
			} else {
				toast.error(result.error || "Failed to place order");
			}
		} catch (error) {
			console.error("Checkout error:", error);
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!mounted) {
		return (
			<div className="container mx-auto py-8">
				<div className="animate-pulse space-y-4">
					<div className="h-8 bg-muted rounded w-1/3" />
					<div className="h-64 bg-muted rounded" />
				</div>
			</div>
		);
	}

	if (items.length === 0) {
		return (
			<div className="container mx-auto py-16">
				<div className="max-w-md mx-auto text-center">
					<div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
						<ShoppingBag className="w-12 h-12 text-muted-foreground" />
					</div>
					<h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
					<p className="text-muted-foreground mb-8">
						Add some products to your cart before checkout.
					</p>
					<Button asChild size="lg">
						<Link href="/products">Browse Products</Link>
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="container py-8">
			{/* Progress steps */}
			<div className="mb-8">
				<div className="flex items-center justify-center gap-2 md:gap-4">
					{steps.map((step, index) => {
						const isCompleted = index < stepIndex;
						const isCurrent = step.id === currentStep;
						const Icon = step.icon;

						return (
							<div key={step.id} className="flex items-center">
								<button
									type="button"
									onClick={() => index <= stepIndex && goToStep(step.id)}
									disabled={index > stepIndex}
									className={cn(
										"flex items-center gap-2 px-3 py-2 rounded-lg transition-colors",
										isCompleted && "text-primary cursor-pointer hover:bg-muted",
										isCurrent && "bg-primary text-primary-foreground",
										!isCompleted &&
											!isCurrent &&
											"text-muted-foreground cursor-not-allowed",
									)}
								>
									<div
										className={cn(
											"w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
											isCompleted && "bg-primary/20",
											isCurrent && "bg-primary-foreground/20",
										)}
									>
										{isCompleted ? (
											<Check className="w-4 h-4" />
										) : (
											<Icon className="w-4 h-4" />
										)}
									</div>
									<span className="hidden md:inline text-sm font-medium">
										{step.label}
									</span>
								</button>
								{index < steps.length - 1 && (
									<ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
								)}
							</div>
						);
					})}
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Main content */}
				<div className="lg:col-span-2">
					{/* Step: Information */}
					{currentStep === "info" && (
						<Card>
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="email">Email *</Label>
										<Input
											id="email"
											type="email"
											required
											value={form.email}
											onChange={(e) => updateForm({ email: e.target.value })}
											placeholder="your@email.com"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">Phone</Label>
										<Input
											id="phone"
											type="tel"
											value={form.phone}
											onChange={(e) => updateForm({ phone: e.target.value })}
											placeholder="+359 888 123 456"
										/>
									</div>
								</div>

								<Separator />

								<h3 className="font-semibold">Shipping Address</h3>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="firstName">First Name *</Label>
										<Input
											id="firstName"
											required
											value={form.firstName}
											onChange={(e) =>
												updateForm({ firstName: e.target.value })
											}
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName">Last Name *</Label>
										<Input
											id="lastName"
											required
											value={form.lastName}
											onChange={(e) => updateForm({ lastName: e.target.value })}
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="company">Company (optional)</Label>
									<Input
										id="company"
										value={form.company}
										onChange={(e) => updateForm({ company: e.target.value })}
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="address1">Address *</Label>
									<Input
										id="address1"
										required
										value={form.address1}
										onChange={(e) => updateForm({ address1: e.target.value })}
										placeholder="Street address"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="address2">
										Apartment, suite, etc. (optional)
									</Label>
									<Input
										id="address2"
										value={form.address2}
										onChange={(e) => updateForm({ address2: e.target.value })}
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="space-y-2">
										<Label htmlFor="city">City *</Label>
										<Input
											id="city"
											required
											value={form.city}
											onChange={(e) => updateForm({ city: e.target.value })}
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="province">Province/State</Label>
										<Input
											id="province"
											value={form.province}
											onChange={(e) => updateForm({ province: e.target.value })}
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="postalCode">Postal Code *</Label>
										<Input
											id="postalCode"
											required
											value={form.postalCode}
											onChange={(e) =>
												updateForm({ postalCode: e.target.value })
											}
										/>
									</div>
								</div>

								<div className="flex items-center space-x-2">
									<Checkbox
										id="saveInfo"
										checked={form.saveInfo}
										onCheckedChange={(checked) =>
											updateForm({ saveInfo: checked as boolean })
										}
									/>
									<Label htmlFor="saveInfo" className="text-sm font-normal">
										Save this information for next time
									</Label>
								</div>

								<div className="flex justify-between pt-4">
									<Button variant="ghost" asChild>
										<Link href="/cart">
											<ChevronLeft className="mr-2 h-4 w-4" />
											Back to cart
										</Link>
									</Button>
									<Button
										onClick={goNext}
										disabled={
											!form.email ||
											!form.firstName ||
											!form.lastName ||
											!form.address1 ||
											!form.city ||
											!form.postalCode
										}
									>
										Continue to shipping
										<ChevronRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Step: Shipping */}
					{currentStep === "shipping" && (
						<Card>
							<CardHeader>
								<CardTitle>Shipping Method</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<RadioGroup
									value={form.shippingMethod}
									onValueChange={(value) =>
										updateForm({ shippingMethod: value })
									}
									className="space-y-3"
								>
									{shippingMethods.map((method) => (
										// biome-ignore lint/a11y/noLabelWithoutControl: RadioGroupItem is wrapped by label
										<label
											key={method.id}
											className={cn(
												"flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors",
												form.shippingMethod === method.id
													? "border-primary bg-primary/5"
													: "hover:border-muted-foreground/50",
											)}
										>
											<div className="flex items-center gap-3">
												<RadioGroupItem value={method.id} />
												<div>
													<p className="font-medium">{method.name}</p>
													<p className="text-sm text-muted-foreground">
														{method.description}
													</p>
												</div>
											</div>
											<span className="font-semibold">
												{method.price === 0
													? "Free"
													: formatPrice(method.price)}
											</span>
										</label>
									))}
								</RadioGroup>

								<div className="flex justify-between pt-4">
									<Button variant="ghost" onClick={goBack}>
										<ChevronLeft className="mr-2 h-4 w-4" />
										Back
									</Button>
									<Button onClick={goNext}>
										Continue to payment
										<ChevronRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Step: Payment */}
					{currentStep === "payment" && (
						<Card>
							<CardHeader>
								<CardTitle>Payment Method</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<RadioGroup
									value={form.paymentMethod}
									onValueChange={(value) =>
										updateForm({ paymentMethod: value })
									}
									className="space-y-3"
								>
									{paymentMethods.map((method) => {
										const Icon = method.icon;
										return (
											// biome-ignore lint/a11y/noLabelWithoutControl: RadioGroupItem is wrapped by label
											<label
												key={method.id}
												className={cn(
													"flex items-center justify-between p-4 border rounded-lg transition-colors",
													method.disabled
														? "opacity-50 cursor-not-allowed"
														: "cursor-pointer",
													form.paymentMethod === method.id && !method.disabled
														? "border-primary bg-primary/5"
														: "hover:border-muted-foreground/50",
												)}
											>
												<div className="flex items-center gap-3">
													<RadioGroupItem
														value={method.id}
														disabled={method.disabled}
													/>
													<Icon className="w-5 h-5 text-muted-foreground" />
													<div>
														<p className="font-medium">{method.name}</p>
														<p className="text-sm text-muted-foreground">
															{method.description}
														</p>
													</div>
												</div>
												{method.note && (
													<span className="text-xs text-muted-foreground">
														{method.note}
													</span>
												)}
											</label>
										);
									})}
								</RadioGroup>

								<div className="flex justify-between pt-4">
									<Button variant="ghost" onClick={goBack}>
										<ChevronLeft className="mr-2 h-4 w-4" />
										Back
									</Button>
									<Button onClick={goNext}>
										Review order
										<ChevronRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Step: Review */}
					{currentStep === "review" && (
						<div className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Review Your Order</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									{/* Contact info */}
									<div>
										<div className="flex justify-between items-center mb-2">
											<h4 className="font-medium">Contact</h4>
											<Button
												variant="link"
												size="sm"
												onClick={() => goToStep("info")}
											>
												Edit
											</Button>
										</div>
										<p className="text-sm text-muted-foreground">
											{form.email}
											{form.phone && ` • ${form.phone}`}
										</p>
									</div>

									<Separator />

									{/* Shipping address */}
									<div>
										<div className="flex justify-between items-center mb-2">
											<h4 className="font-medium">Ship to</h4>
											<Button
												variant="link"
												size="sm"
												onClick={() => goToStep("info")}
											>
												Edit
											</Button>
										</div>
										<p className="text-sm text-muted-foreground">
											{form.firstName} {form.lastName}
											<br />
											{form.address1}
											{form.address2 && `, ${form.address2}`}
											<br />
											{form.city}, {form.postalCode}
											<br />
											{form.country}
										</p>
									</div>

									<Separator />

									{/* Shipping method */}
									<div>
										<div className="flex justify-between items-center mb-2">
											<h4 className="font-medium">Shipping method</h4>
											<Button
												variant="link"
												size="sm"
												onClick={() => goToStep("shipping")}
											>
												Edit
											</Button>
										</div>
										<p className="text-sm text-muted-foreground">
											{selectedShipping?.name} • {formatPrice(shippingCost)}
										</p>
									</div>

									<Separator />

									{/* Payment method */}
									<div>
										<div className="flex justify-between items-center mb-2">
											<h4 className="font-medium">Payment method</h4>
											<Button
												variant="link"
												size="sm"
												onClick={() => goToStep("payment")}
											>
												Edit
											</Button>
										</div>
										<p className="text-sm text-muted-foreground">
											{
												paymentMethods.find((m) => m.id === form.paymentMethod)
													?.name
											}
										</p>
									</div>
								</CardContent>
							</Card>

							{/* Order items */}
							<Card>
								<CardHeader>
									<CardTitle>Order Items ({items.length})</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{items.map((item) => (
											<div key={item.id} className="flex gap-4">
												<div className="w-16 h-16 rounded-md overflow-hidden bg-muted shrink-0 relative">
													{item.image ? (
														<Image
															src={item.image}
															alt={item.name}
															fill
															className="object-cover"
														/>
													) : (
														<div className="w-full h-full flex items-center justify-center">
															<Package className="w-6 h-6 text-muted-foreground" />
														</div>
													)}
												</div>
												<div className="flex-1 min-w-0">
													<p className="font-medium line-clamp-1">
														{item.name}
													</p>
													{item.variantName && (
														<p className="text-sm text-muted-foreground">
															{item.variantName}
														</p>
													)}
													<p className="text-sm text-muted-foreground">
														Qty: {item.quantity}
													</p>
												</div>
												<div className="text-right">
													<span className="font-medium">
														{formatPrice(item.price * item.quantity)}
													</span>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>

							<div className="flex justify-between">
								<Button variant="ghost" onClick={goBack}>
									<ChevronLeft className="mr-2 h-4 w-4" />
									Back
								</Button>
								<Button
									size="lg"
									onClick={handleSubmit}
									disabled={isSubmitting}
								>
									{isSubmitting ? "Processing..." : "Place Order"}
								</Button>
							</div>
						</div>
					)}
				</div>

				{/* Order summary sidebar */}
				<div className="lg:col-span-1">
					<Card className="sticky top-24">
						<CardHeader>
							<CardTitle className="text-base">Order Summary</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{/* Items preview */}
							<div className="space-y-3 max-h-48 overflow-y-auto">
								{items.map((item) => (
									<div key={item.id} className="flex gap-3">
										<div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted shrink-0">
											{item.image ? (
												<Image
													src={item.image}
													alt={item.name}
													fill
													className="object-cover"
												/>
											) : (
												<div className="w-full h-full flex items-center justify-center">
													<Package className="w-4 h-4 text-muted-foreground" />
												</div>
											)}
											<span className="absolute -top-1 -right-1 w-5 h-5 bg-muted-foreground text-background rounded-full text-xs flex items-center justify-center">
												{item.quantity}
											</span>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium line-clamp-1">
												{item.name}
											</p>
											{item.variantName && (
												<p className="text-xs text-muted-foreground">
													{item.variantName}
												</p>
											)}
										</div>
										<span className="text-sm font-medium">
											{formatPrice(item.price * item.quantity)}
										</span>
									</div>
								))}
							</div>

							<Separator />

							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-muted-foreground">Subtotal</span>
									<span>{formatPrice(subtotal)}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">Shipping</span>
									<span>
										{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
									</span>
								</div>
							</div>

							<Separator />

							<div className="flex justify-between font-semibold">
								<span>Total</span>
								<span className="text-lg">{formatPrice(total)}</span>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
