import type { OrderStatus, Prisma } from "@boostcart/database";
import { ArrowLeft, ChevronRight, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

interface OrdersPageProps {
	searchParams: Promise<{
		page?: string;
		status?: string;
	}>;
}

type OrderWithRelations = Prisma.OrderGetPayload<{
	include: {
		items: {
			include: {
				product: {
					include: {
						media: true;
					};
				};
			};
		};
		currency: true;
		shippingMethod: true;
	};
}>;

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

export default async function OrdersPage({ searchParams }: OrdersPageProps) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		redirect("/account/login");
	}

	const { page = "1", status } = await searchParams;
	const pageNumber = Number.parseInt(page) || 1;
	const pageSize = 10;
	const skip = (pageNumber - 1) * pageSize;

	// Build where clause
	const whereClause: Prisma.OrderWhereInput = (
		status
			? {
					customerId: session.customerId,
					tenantId: tenant.id,
					status: status as OrderStatus,
				}
			: {
					customerId: session.customerId,
					tenantId: tenant.id,
				}
	) as Prisma.OrderWhereInput;

	// Fetch orders with pagination
	const [orders, totalCount] = (await Promise.all([
		db.order.findMany({
			where: whereClause,
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
					},
				},
				currency: true,
				shippingMethod: true,
			},
			orderBy: { createdAt: "desc" },
			skip,
			take: pageSize,
		}),
		db.order.count({ where: whereClause }),
	])) as [OrderWithRelations[], number];

	const totalPages = Math.ceil(totalCount / pageSize);

	// Get order counts by status for filter
	const statusCounts = await db.order.groupBy({
		by: ["status"],
		where: {
			customerId: session.customerId,
			tenantId: tenant.id,
		},
		_count: true,
	});

	const statusCountMap = statusCounts.reduce(
		(acc, { status, _count }) => {
			acc[status] = _count;
			return acc;
		},
		{} as Record<string, number>,
	);

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4">
				<Link href="/account">
					<Button variant="ghost" size="icon">
						<ArrowLeft className="h-4 w-4" />
					</Button>
				</Link>
				<div>
					<h1 className="text-2xl font-bold">Order History</h1>
					<p className="text-sm text-muted-foreground">
						{totalCount} order{totalCount !== 1 ? "s" : ""} total
					</p>
				</div>
			</div>

			{/* Status filters */}
			<div className="flex flex-wrap gap-2">
				<Link href="/account/orders">
					<Badge
						variant={!status ? "default" : "outline"}
						className="cursor-pointer"
					>
						All ({totalCount})
					</Badge>
				</Link>
				{Object.entries(statusCountMap).map(([s, count]) => (
					<Link key={s} href={`/account/orders?status=${s}`}>
						<Badge
							variant={status === s ? "default" : "outline"}
							className="cursor-pointer"
						>
							{s.charAt(0) + s.slice(1).toLowerCase().replace(/_/g, " ")} (
							{count})
						</Badge>
					</Link>
				))}
			</div>

			{/* Orders list */}
			{orders.length > 0 ? (
				<div className="space-y-4">
					{orders.map((order: OrderWithRelations) => (
						<Card key={order.id}>
							<CardHeader className="pb-3">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
									<div>
										<CardTitle className="text-lg">
											Order #{order.orderNumber}
										</CardTitle>
										<CardDescription>
											Placed on{" "}
											{new Date(order.createdAt).toLocaleDateString("en-GB", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</CardDescription>
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
											className={
												PAYMENT_STATUS_COLORS[order.paymentStatus] || ""
											}
											variant="secondary"
										>
											{order.paymentStatus.charAt(0) +
												order.paymentStatus
													.slice(1)
													.toLowerCase()
													.replace(/_/g, " ")}
										</Badge>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								{/* Order items preview */}
								<div className="space-y-3">
									{order.items.slice(0, 3).map((item) => (
										<div key={item.id} className="flex items-center gap-4">
											<div className="h-16 w-16 bg-muted rounded-md overflow-hidden shrink-0">
												{item.product.media[0] ? (
													<Image
														src={item.product.media[0].url}
														alt={item.productName}
														width={64}
														height={64}
														className="h-full w-full object-cover"
													/>
												) : (
													<div className="h-full w-full flex items-center justify-center text-2xl">
														📦
													</div>
												)}
											</div>
											<div className="flex-1 min-w-0">
												<p className="font-medium truncate">
													{item.productName}
												</p>
												{item.selectedVariantName && (
													<p className="text-sm text-muted-foreground">
														{item.selectedVariantName}
													</p>
												)}
												<p className="text-sm text-muted-foreground">
													Qty: {item.quantity} ×{" "}
													{new Intl.NumberFormat("en", {
														style: "currency",
														currency: order.currency.code,
													}).format(Number(item.price))}
												</p>
											</div>
										</div>
									))}
									{order.items.length > 3 && (
										<p className="text-sm text-muted-foreground">
											+{order.items.length - 3} more item
											{order.items.length - 3 !== 1 ? "s" : ""}
										</p>
									)}
								</div>

								{/* Order summary */}
								<div className="mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
									<div className="space-y-1 text-sm">
										<p>
											<span className="text-muted-foreground">Shipping:</span>{" "}
											{order.shippingMethod.name}
										</p>
										<p>
											<span className="text-muted-foreground">Ship to:</span>{" "}
											{order.shippingCity}, {order.shippingCountry}
										</p>
									</div>
									<div className="flex items-center justify-between sm:justify-end gap-4">
										<div className="text-right">
											<p className="text-sm text-muted-foreground">Total</p>
											<p className="text-lg font-bold">
												{new Intl.NumberFormat("en", {
													style: "currency",
													currency: order.currency.code,
												}).format(Number(order.totalAmount))}
											</p>
										</div>
										<Link href={`/account/orders/${order.orderNumber}`}>
											<Button variant="outline" size="sm">
												View Details
												<ChevronRight className="h-4 w-4 ml-1" />
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<Card>
					<CardContent className="flex flex-col items-center justify-center py-16">
						<Package className="h-16 w-16 text-muted-foreground" />
						<h3 className="mt-4 text-lg font-medium">No orders found</h3>
						<p className="text-sm text-muted-foreground mt-1">
							{status
								? `You don't have any ${status.toLowerCase().replace(/_/g, " ")} orders`
								: "You haven't placed any orders yet"}
						</p>
						<Button className="mt-4" asChild>
							<Link href="/products">Start Shopping</Link>
						</Button>
					</CardContent>
				</Card>
			)}

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex justify-center gap-2 pt-4">
					{pageNumber > 1 && (
						<Link
							href={`/account/orders?${status ? `status=${status}&` : ""}page=${pageNumber - 1}`}
						>
							<Button variant="outline">Previous</Button>
						</Link>
					)}

					<div className="flex items-center gap-1">
						{Array.from({ length: totalPages }, (_, i) => i + 1)
							.filter((p) => {
								return (
									p === 1 || p === totalPages || Math.abs(p - pageNumber) <= 1
								);
							})
							.map((p, index, arr) => {
								const showEllipsis = index > 0 && arr[index - 1] !== p - 1;

								return (
									<span key={p} className="flex items-center">
										{showEllipsis && (
											<span className="px-2 text-muted-foreground">...</span>
										)}
										<Link
											href={`/account/orders?${status ? `status=${status}&` : ""}page=${p}`}
										>
											<Button
												variant={p === pageNumber ? "default" : "outline"}
												size="sm"
												className="w-9"
											>
												{p}
											</Button>
										</Link>
									</span>
								);
							})}
					</div>

					{pageNumber < totalPages && (
						<Link
							href={`/account/orders?${status ? `status=${status}&` : ""}page=${pageNumber + 1}`}
						>
							<Button variant="outline">Next</Button>
						</Link>
					)}
				</div>
			)}
		</div>
	);
}
