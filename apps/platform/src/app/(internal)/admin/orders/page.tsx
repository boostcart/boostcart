"use client";

import {
	Download,
	Edit,
	Eye,
	Filter,
	MoreVertical,
	Plus,
	Search,
	ShoppingCart,
	Trash2,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getOrder, getOrders } from "@/server/api/internal/orders";
import {
	CreateOrderDialog,
	DeleteOrderDialog,
	EditOrderDialog,
	ViewOrderDialog,
} from "./_components/order-dialogs";

// UI Order type for display
interface Order {
	id: string;
	customer: string;
	email: string;
	status: string;
	paymentStatus: string;
	total: string;
	totalAmount: number;
	items: number;
	date: string;
	time: string;
}

interface OrderStats {
	total: number;
	pending: number;
	processing: number;
	totalRevenue: number;
}

export default function OrdersPage() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState(``);
	const [statusFilter, setStatusFilter] = useState(`all`);
	const [viewOrderDialog, setViewOrderDialog] = useState(false);
	const [editOrderDialog, setEditOrderDialog] = useState(false);
	const [deleteOrderDialog, setDeleteOrderDialog] = useState(false);
	const [createOrderDialog, setCreateOrderDialog] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
	const [fullOrderData, setFullOrderData] = useState<Awaited<
		ReturnType<typeof getOrder>
	> | null>(null);
	const [stats, setStats] = useState<OrderStats>({
		total: 0,
		pending: 0,
		processing: 0,
		totalRevenue: 0,
	});

	const fetchOrders = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getOrders();
			// Transform API data to UI format
			const transformed = data.map(
				(order): Order => ({
					id: `#${order.orderNumber || order.id.slice(-4).toUpperCase()}`,
					customer: order.customer
						? `${order.customer.firstName || ""} ${order.customer.lastName || ""}`.trim() ||
							"Guest"
						: "Guest",
					email: order.customer?.email || order.guestEmail || "N/A",
					status: order.status,
					paymentStatus: order.paymentStatus,
					total: `$${Number(order.totalAmount).toFixed(2)}`,
					totalAmount: Number(order.totalAmount),
					items: order.items.length,
					date: new Date(order.createdAt).toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					}),
					time: new Date(order.createdAt).toLocaleTimeString("en-US", {
						hour: "numeric",
						minute: "2-digit",
						hour12: true,
					}),
				}),
			);
			setOrders(transformed);
			setFilteredOrders(transformed);

			// Calculate stats
			setStats({
				total: transformed.length,
				pending: transformed.filter((o) => o.status === "PENDING").length,
				processing: transformed.filter((o) => o.status === "PROCESSING").length,
				totalRevenue: transformed.reduce((sum, o) => sum + o.totalAmount, 0),
			});
		} catch (error) {
			console.error("Failed to fetch orders:", error);
			toast.error("Failed to load orders");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);

	// Filter orders based on search and status
	useEffect(() => {
		let filtered = orders;

		if (statusFilter !== "all") {
			filtered = filtered.filter((order) => order.status === statusFilter);
		}

		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(order) =>
					order.id.toLowerCase().includes(query) ||
					order.customer.toLowerCase().includes(query) ||
					order.email.toLowerCase().includes(query),
			);
		}

		setFilteredOrders(filtered);
	}, [searchQuery, statusFilter, orders]);

	const getStatusBadge = (status: string) => {
		const styles = {
			PENDING: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`,
			CONFIRMED: `bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300`,
			PROCESSING: `bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300`,
			SHIPPED: `bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300`,
			DELIVERED: `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`,
			CANCELLED: `bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300`,
			REFUNDED: `bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300`,
			FAILED: `bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300`,
		};
		return styles[status as keyof typeof styles] || styles.PENDING;
	};

	const getPaymentBadge = (status: string) => {
		const styles = {
			PENDING: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`,
			PAID: `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`,
			REFUNDED: `bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300`,
			FAILED: `bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300`,
			CANCELED: `bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300`,
		};
		return styles[status as keyof typeof styles] || styles.PENDING;
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Orders</h1>
					<p className="text-muted-foreground mt-1">
						Manage and track all customer orders
					</p>
				</div>
				<PolarisButton type="button" onClick={() => setCreateOrderDialog(true)}>
					<Plus className="h-4 w-4" />
					Create Order
				</PolarisButton>
			</div>

			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Orders</p>
					<p className="text-2xl font-bold mt-1">
						{stats.total.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Pending</p>
					<p className="text-2xl font-bold mt-1">
						{stats.pending.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Processing</p>
					<p className="text-2xl font-bold mt-1">
						{stats.processing.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Revenue</p>
					<p className="text-2xl font-bold mt-1">
						$
						{stats.totalRevenue.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</p>
				</Card>
			</div>

			{/* Filters */}
			<Card className="p-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search by order ID, customer name, or email..."
							className="pl-9"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<Select value={statusFilter} onValueChange={setStatusFilter}>
						<SelectTrigger className="w-full sm:w-45">
							<SelectValue placeholder="Filter by status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Statuses</SelectItem>
							<SelectItem value="PENDING">Pending</SelectItem>
							<SelectItem value="CONFIRMED">Confirmed</SelectItem>
							<SelectItem value="PROCESSING">Processing</SelectItem>
							<SelectItem value="SHIPPED">Shipped</SelectItem>
							<SelectItem value="DELIVERED">Delivered</SelectItem>
							<SelectItem value="CANCELLED">Cancelled</SelectItem>
							<SelectItem value="REFUNDED">Refunded</SelectItem>
						</SelectContent>
					</Select>
					<Button type="button" variant="outline">
						<Filter className="h-4 w-4 mr-2" />
						More Filters
					</Button>
					<Button type="button" variant="outline">
						<Download className="h-4 w-4 mr-2" />
						Export
					</Button>
				</div>
			</Card>

			{/* Orders Table */}
			<Card>
				{isLoading ? (
					<div className="flex items-center justify-center min-h-75">
						<Loader size="lg" />
					</div>
				) : filteredOrders.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<ShoppingCart className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>
								{searchQuery || statusFilter !== "all"
									? "No orders found"
									: "No orders yet"}
							</EmptyTitle>
							<EmptyDescription>
								{searchQuery || statusFilter !== "all"
									? "Try adjusting your search or filter"
									: "Orders will appear here when customers place them"}
							</EmptyDescription>
						</EmptyHeader>
						{!searchQuery && statusFilter === "all" && (
							<EmptyContent>
								<PolarisButton
									type="button"
									onClick={() => setCreateOrderDialog(true)}
								>
									<Plus className="h-4 w-4" />
									Create Order
								</PolarisButton>
							</EmptyContent>
						)}
					</Empty>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Order</TableHead>
								<TableHead>Date</TableHead>
								<TableHead>Customer</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Payment</TableHead>
								<TableHead>Items</TableHead>
								<TableHead className="text-right">Total</TableHead>
								<TableHead className="w-17.5"></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredOrders.map((order) => (
								<TableRow key={order.id} className="cursor-pointer">
									<TableCell className="font-medium">{order.id}</TableCell>
									<TableCell>
										<div className="text-sm">
											<p>{order.date}</p>
											<p className="text-muted-foreground text-xs">
												{order.time}
											</p>
										</div>
									</TableCell>
									<TableCell>
										<div>
											<p className="font-medium text-sm">{order.customer}</p>
											<p className="text-muted-foreground text-xs">
												{order.email}
											</p>
										</div>
									</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(order.status)}`}
										>
											{order.status}
										</span>
									</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentBadge(order.paymentStatus)}`}
										>
											{order.paymentStatus}
										</span>
									</TableCell>
									<TableCell>{order.items}</TableCell>
									<TableCell className="text-right font-medium">
										{order.total}
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button type="button" variant="ghost" size="icon">
													<MoreVertical className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem
													onClick={async () => {
														setSelectedOrder(order);
														try {
															// Extract order ID from formatted string like "#123" -> get raw ID
															const rawOrders = await getOrders();
															const rawOrder = rawOrders.find(
																(o) =>
																	`#${o.orderNumber || o.id.slice(-4).toUpperCase()}` ===
																	order.id,
															);
															if (rawOrder) {
																// Fetch full order details with history
																const fullOrder = await getOrder(rawOrder.id);
																setFullOrderData(fullOrder);
															}
														} catch (error) {
															console.error(
																"Failed to fetch order details:",
																error,
															);
															toast.error("Failed to load order details");
														}
														setViewOrderDialog(true);
													}}
												>
													<Eye className="h-4 w-4 mr-2" />
													View details
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => {
														setSelectedOrder(order);
														setEditOrderDialog(true);
													}}
												>
													<Edit className="h-4 w-4 mr-2" />
													Edit order
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem
													className="text-red-600"
													onClick={() => {
														setSelectedOrder(order);
														setDeleteOrderDialog(true);
													}}
												>
													<Trash2 className="h-4 w-4 mr-2" />
													Delete order
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</Card>

			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium">1-{filteredOrders.length}</span>{" "}
					of{` `}
					<span className="font-medium">{orders.length}</span> orders
				</p>
				<div className="flex gap-2">
					<Button type="button" variant="outline" size="sm" disabled>
						Previous
					</Button>
					<Button type="button" variant="outline" size="sm" disabled>
						Next
					</Button>
				</div>
			</div>

			{/* Dialogs */}
			<ViewOrderDialog
				open={viewOrderDialog}
				onOpenChange={setViewOrderDialog}
				order={fullOrderData}
			/>
			<EditOrderDialog
				open={editOrderDialog}
				onOpenChange={setEditOrderDialog}
				order={selectedOrder}
			/>
			<DeleteOrderDialog
				open={deleteOrderDialog}
				onOpenChange={setDeleteOrderDialog}
				order={selectedOrder}
			/>
			<CreateOrderDialog
				open={createOrderDialog}
				onOpenChange={setCreateOrderDialog}
			/>
		</div>
	);
}
