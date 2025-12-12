"use client";

import {
	Download,
	Edit,
	Eye,
	Filter,
	MoreVertical,
	Plus,
	Search,
	Trash2,
} from "lucide-react";
import { useState } from "react";
import { PolarisButton } from "@/components/admin/polaris-button";
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
import {
	CreateOrderDialog,
	DeleteOrderDialog,
	EditOrderDialog,
	ViewOrderDialog,
} from "./_components/order-dialogs";

interface Order {
	id: string;
	customer: string;
	email: string;
	status: string;
	paymentStatus: string;
	total: string;
	items: number;
	date: string;
	time: string;
}

export default function OrdersPage() {
	const [searchQuery, setSearchQuery] = useState(``);
	const [statusFilter, setStatusFilter] = useState(`all`);
	const [viewOrderDialog, setViewOrderDialog] = useState(false);
	const [editOrderDialog, setEditOrderDialog] = useState(false);
	const [deleteOrderDialog, setDeleteOrderDialog] = useState(false);
	const [createOrderDialog, setCreateOrderDialog] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

	const orders = [
		{
			id: `#3210`,
			customer: `Sofia Martinez`,
			email: `sofia@example.com`,
			status: `CONFIRMED`,
			paymentStatus: `PAID`,
			total: `$329.00`,
			items: 3,
			date: `Nov 8, 2025`,
			time: `10:30 AM`,
		},
		{
			id: `#3209`,
			customer: `Ivan Petrov`,
			email: `ivan@example.com`,
			status: `PROCESSING`,
			paymentStatus: `PAID`,
			total: `$149.00`,
			items: 1,
			date: `Nov 8, 2025`,
			time: `10:15 AM`,
		},
		{
			id: `#3208`,
			customer: `Elena Dimitrova`,
			email: `elena@example.com`,
			status: `SHIPPED`,
			paymentStatus: `PAID`,
			total: `$599.00`,
			items: 5,
			date: `Nov 8, 2025`,
			time: `09:30 AM`,
		},
		{
			id: `#3207`,
			customer: `Georgi Ivanov`,
			email: `georgi@example.com`,
			status: `DELIVERED`,
			paymentStatus: `PAID`,
			total: `$89.00`,
			items: 2,
			date: `Nov 7, 2025`,
			time: `05:20 PM`,
		},
		{
			id: `#3206`,
			customer: `Maria Popova`,
			email: `maria@example.com`,
			status: `PENDING`,
			paymentStatus: `PENDING`,
			total: `$249.00`,
			items: 4,
			date: `Nov 7, 2025`,
			time: `03:15 PM`,
		},
		{
			id: `#3205`,
			customer: `Dimitar Petkov`,
			email: `dimitar@example.com`,
			status: `CANCELLED`,
			paymentStatus: `REFUNDED`,
			total: `$179.00`,
			items: 1,
			date: `Nov 7, 2025`,
			time: `01:45 PM`,
		},
		{
			id: `#3204`,
			customer: `Svetlana Ivanova`,
			email: `svetlana@example.com`,
			status: `DELIVERED`,
			paymentStatus: `PAID`,
			total: `$425.00`,
			items: 3,
			date: `Nov 6, 2025`,
			time: `11:00 AM`,
		},
	];

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
						<SelectTrigger className="w-full sm:w-[180px]">
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
							<TableHead className="w-[70px]"></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{orders.map((order) => (
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
												onClick={() => {
													setSelectedOrder(order);
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
			</Card>

			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium">1-{orders.length}</span> of{` `}
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
				order={selectedOrder}
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
