import {
	ArrowLeft,
	CheckCircle,
	Clock,
	CreditCard,
	MapPin,
	Package,
	Truck,
	XCircle,
} from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";
import Image from "next/image";

interface OrderDetailPageProps {
	params: Promise<{ orderNumber: string }>;
}

const ORDER_STATUS_COLORS: Record<string, string> = {
	PENDING: "bg-yellow-100 text-yellow-800",
	CONFIRMED: "bg-blue-100 text-blue-800",
	PROCESSING: "bg-purple-100 text-purple-800",
	SHIPPED: "bg-indigo-100 text-indigo-800",
	DELIVERED: "bg-green-100 text-green-800",
	CANCELLED: "bg-red-100 text-red-800",
	REFUNDED: "bg-gray-100 text-gray-800",
};

const PAYMENT_STATUS_COLORS: Record<string, string> = {
	PENDING: "bg-yellow-100 text-yellow-800",
	PAID: "bg-green-100 text-green-800",
	FAILED: "bg-red-100 text-red-800",
	REFUNDED: "bg-gray-100 text-gray-800",
	PARTIALLY_REFUNDED: "bg-orange-100 text-orange-800",
};

const ORDER_STATUS_ICONS: Record<string, typeof Package> = {
	PENDING: Clock,
	CONFIRMED: CheckCircle,
	PROCESSING: Package,
	SHIPPED: Truck,
	DELIVERED: CheckCircle,
	CANCELLED: XCircle,
	REFUNDED: XCircle,
};

export default async function OrderDetailPage({
	params,
}: OrderDetailPageProps) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		redirect("/account/login");
	}

	const { orderNumber } = await params;

	const order = await db.order.findFirst({
		where: {
			orderNumber,
			customerId: session.customerId,
			tenantId: tenant.id,
		},
		include: {
			items: {
				include: {
					product: {
						include: {
							media: {
								orderBy: { order: "asc" },
								take: 1,
							},
						},
					},
					selectedVariant: true,
				},
			},
			currency: true,
			shippingMethod: true,
			paymentMethod: true,
			history: {
				orderBy: { timestamp: "desc" },
			},
		},
	});

	if (!order) {
		notFound();
	}

	const StatusIcon = ORDER_STATUS_ICONS[order.status] || Package;

	// Calculate subtotal
	const subtotal = order.items.reduce(
		(sum, item) => sum + Number(item.price) * item.quantity,
		0,
	);

	const formatCurrency = (amount: number) =>
		new Intl.NumberFormat("en", {
			style: "currency",
			currency: order.currency.code,
		}).format(amount);

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4">
				<Link href="/account/orders">
					<Button variant="ghost" size="icon">
						<ArrowLeft className="h-4 w-4" />
					</Button>
				</Link>
				<div className="flex-1">
					<h1 className="text-2xl font-bold">Order #{order.orderNumber}</h1>
					<p className="text-sm text-muted-foreground">
						Placed on{" "}
						{new Date(order.createdAt).toLocaleDateString("en-GB", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
				</div>
			</div>

			{/* Status banner */}
			<Card>
				<CardContent className="py-6">
					<div className="flex items-center gap-4">
						<div
							className={`p-3 rounded-full ${ORDER_STATUS_COLORS[order.status]}`}
						>
							<StatusIcon className="h-6 w-6" />
						</div>
						<div className="flex-1">
							<h2 className="font-semibold text-lg">
								{order.status.charAt(0) +
									order.status.slice(1).toLowerCase().replace(/_/g, " ")}
							</h2>
							<p className="text-sm text-muted-foreground">
								{order.status === "PENDING" &&
									"Your order is awaiting confirmation"}
								{order.status === "CONFIRMED" &&
									"Your order has been confirmed and is being prepared"}
								{order.status === "PROCESSING" &&
									"Your order is being processed"}
								{order.status === "SHIPPED" &&
									"Your order is on its way to you"}
								{order.status === "DELIVERED" &&
									"Your order has been delivered"}
								{order.status === "CANCELLED" && "Your order was cancelled"}
								{order.status === "REFUNDED" && "Your order has been refunded"}
							</p>
						</div>
						<div className="flex gap-2">
							<Badge
								className={ORDER_STATUS_COLORS[order.status] || ""}
								variant="secondary"
							>
								{order.status.charAt(0) +
									order.status.slice(1).toLowerCase().replace(/_/g, " ")}
							</Badge>
							<Badge
								className={PAYMENT_STATUS_COLORS[order.paymentStatus] || ""}
								variant="secondary"
							>
								{order.paymentStatus.charAt(0) +
									order.paymentStatus.slice(1).toLowerCase().replace(/_/g, " ")}
							</Badge>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Order items */}
				<div className="lg:col-span-2 space-y-6">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Package className="h-5 w-5" />
								Order Items ({order.items.length})
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{order.items.map((item) => (
									<div key={item.id} className="flex gap-4">
										<div className="h-20 w-20 bg-muted rounded-md overflow-hidden shrink-0">
											{item.product.media[0] ? (
												<Image
													src={item.product.media[0].url}
													alt={item.productName}
													className="h-full w-full object-cover"
													width={80}
													height={80}
												/>
											) : (
												<div className="h-full w-full flex items-center justify-center text-3xl">
													📦
												</div>
											)}
										</div>
										<div className="flex-1">
											<Link
												href={`/products/${item.product.slug}`}
												className="font-medium hover:underline"
											>
												{item.productName}
											</Link>
											{item.selectedVariantName && (
												<p className="text-sm text-muted-foreground">
													{item.selectedVariantName}
												</p>
											)}
											{item.productSku && (
												<p className="text-xs text-muted-foreground">
													SKU: {item.productSku}
												</p>
											)}
											<div className="flex items-center gap-4 mt-2">
												<p className="text-sm">
													{formatCurrency(Number(item.price))} × {item.quantity}
												</p>
												<p className="font-medium">
													{formatCurrency(Number(item.price) * item.quantity)}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Order history/timeline */}
					{order.history.length > 0 && (
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Clock className="h-5 w-5" />
									Order Timeline
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="relative">
									{order.history.map((event, index) => (
										<div key={event.id} className="flex gap-4 pb-4">
											<div className="relative flex flex-col items-center">
												<div
													className={`h-3 w-3 rounded-full ${
														index === 0
															? "bg-primary"
															: "bg-muted-foreground/30"
													}`}
												/>
												{index < order.history.length - 1 && (
													<div className="absolute top-3 w-px h-full bg-muted-foreground/30" />
												)}
											</div>
											<div className="flex-1 pb-2">
												<p className="font-medium">
													{event.status.charAt(0) +
														event.status
															.slice(1)
															.toLowerCase()
															.replace(/_/g, " ")}
												</p>
												<p className="text-sm text-muted-foreground">
													{new Date(event.timestamp).toLocaleDateString(
														"en-GB",
														{
															month: "short",
															day: "numeric",
															hour: "2-digit",
															minute: "2-digit",
														},
													)}
												</p>
												{event.notes && (
													<p className="text-sm text-muted-foreground mt-1">
														{event.notes}
													</p>
												)}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					)}
				</div>

				{/* Order summary sidebar */}
				<div className="space-y-6">
					{/* Summary card */}
					<Card>
						<CardHeader>
							<CardTitle>Order Summary</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex justify-between">
								<span className="text-muted-foreground">Subtotal</span>
								<span>{formatCurrency(subtotal)}</span>
							</div>
							<div className="flex justify-between">
								<span className="text-muted-foreground">Shipping</span>
								<span>{formatCurrency(Number(order.shippingCost))}</span>
							</div>
							{Number(order.discountAmount) > 0 && (
								<div className="flex justify-between text-green-600">
									<span>Discount</span>
									<span>-{formatCurrency(Number(order.discountAmount))}</span>
								</div>
							)}
							<Separator />
							<div className="flex justify-between text-lg font-bold">
								<span>Total</span>
								<span>{formatCurrency(Number(order.totalAmount))}</span>
							</div>
						</CardContent>
					</Card>

					{/* Shipping address */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<MapPin className="h-5 w-5" />
								Shipping Address
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm space-y-1">
							<p className="font-medium">
								{order.shippingFirstName} {order.shippingLastName}
							</p>
							{order.shippingCompany && <p>{order.shippingCompany}</p>}
							<p>{order.shippingAddressLine1}</p>
							{order.shippingAddressLine2 && (
								<p>{order.shippingAddressLine2}</p>
							)}
							<p>
								{order.shippingCity}, {order.shippingPostcode}
							</p>
							<p>{order.shippingCountry}</p>
							<Separator className="my-2" />
							<p className="text-muted-foreground">{order.shippingEmail}</p>
							<p className="text-muted-foreground">{order.shippingPhone}</p>
							{order.shippingNotes && (
								<>
									<Separator className="my-2" />
									<p className="text-muted-foreground italic">
										Note: {order.shippingNotes}
									</p>
								</>
							)}
						</CardContent>
					</Card>

					{/* Shipping method */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Truck className="h-5 w-5" />
								Shipping Method
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{order.shippingMethod.name}</p>
							{order.shippingMethod.estimatedDays && (
								<p className="text-sm text-muted-foreground">
									Estimated {order.shippingMethod.estimatedDays} day
									{order.shippingMethod.estimatedDays !== 1 ? "s" : ""} delivery
								</p>
							)}
							{order.deliveryBoxName && (
								<p className="text-sm text-muted-foreground mt-1">
									📦 {order.deliveryBoxName}
								</p>
							)}
							{order.deliveryOfficeName && (
								<p className="text-sm text-muted-foreground mt-1">
									🏢 {order.deliveryOfficeName}
								</p>
							)}
						</CardContent>
					</Card>

					{/* Payment method */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<CreditCard className="h-5 w-5" />
								Payment Method
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{order.paymentMethod.name}</p>
							<p className="text-sm text-muted-foreground">
								{order.paymentMethod.type
									.replace(/_/g, " ")
									.toLowerCase()
									.replace(/\b\w/g, (l) => l.toUpperCase())}
							</p>
							{order.paymentTransactionId && (
								<p className="text-xs text-muted-foreground mt-1 font-mono">
									Ref: {order.paymentTransactionId}
								</p>
							)}
						</CardContent>
					</Card>

					{/* Actions */}
					<div className="space-y-2">
						{order.status === "DELIVERED" && (
							<Button className="w-full" asChild>
								<Link href={`/products/${order.items[0]?.product.slug}`}>
									Buy Again
								</Link>
							</Button>
						)}
						<Button variant="outline" className="w-full" asChild>
							<Link href="/contact">Need Help?</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
