"use client";

import {
	Calendar,
	CreditCard,
	MapPin,
	Plus,
	Trash2,
	Truck,
	User,
} from "lucide-react";
import { useState } from "react";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface OrderItem {
	id: string;
	productName: string;
	sku: string;
	quantity: number;
	price: number;
}

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

interface ViewOrderDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	order: Order | null;
}

export function ViewOrderDialog({
	open,
	onOpenChange,
	order,
}: ViewOrderDialogProps) {
	if (!order) return null;

	const orderItems: OrderItem[] = [
		{
			id: `1`,
			productName: `Wireless Headphones`,
			sku: `WH-001`,
			quantity: 2,
			price: 89.99,
		},
		{
			id: `2`,
			productName: `USB-C Cable`,
			sku: `CB-002`,
			quantity: 3,
			price: 12.99,
		},
	];

	const getStatusBadge = (status: string) => {
		const variants: Record<
			string,
			"default" | "secondary" | "destructive" | "outline"
		> = {
			PENDING: `secondary`,
			CONFIRMED: `default`,
			PROCESSING: `default`,
			SHIPPED: `default`,
			DELIVERED: `default`,
			CANCELLED: `destructive`,
			REFUNDED: `secondary`,
			FAILED: `destructive`,
		};
		return <Badge variant={variants[status] || `outline`}>{status}</Badge>;
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="flex items-center justify-between">
						<span>Order Details - {order.id}</span>
						{getStatusBadge(order.status)}
					</DialogTitle>
					<DialogDescription>
						Order placed on {order.date} at {order.time}
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="details" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="details">Details</TabsTrigger>
						<TabsTrigger value="items">Items</TabsTrigger>
						<TabsTrigger value="history">History</TabsTrigger>
					</TabsList>

					<TabsContent value="details" className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<div className="flex items-center gap-2 text-sm font-medium">
									<User className="h-4 w-4" />
									Customer Information
								</div>
								<div className="text-sm text-muted-foreground">
									<p className="font-medium text-foreground">
										{order.customer}
									</p>
									<p>{order.email}</p>
									<p>+1 (555) 123-4567</p>
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex items-center gap-2 text-sm font-medium">
									<CreditCard className="h-4 w-4" />
									Payment Information
								</div>
								<div className="text-sm text-muted-foreground">
									<p>Status: {getStatusBadge(order.paymentStatus)}</p>
									<p>Method: Credit Card</p>
									<p>**** **** **** 4242</p>
								</div>
							</div>
						</div>

						<Separator />

						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<div className="flex items-center gap-2 text-sm font-medium">
									<MapPin className="h-4 w-4" />
									Shipping Address
								</div>
								<div className="text-sm text-muted-foreground">
									<p>123 Main Street</p>
									<p>Apt 4B</p>
									<p>New York, NY 10001</p>
									<p>United States</p>
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex items-center gap-2 text-sm font-medium">
									<Truck className="h-4 w-4" />
									Shipping Information
								</div>
								<div className="text-sm text-muted-foreground">
									<p>Method: Express Delivery</p>
									<p>Tracking: 1Z999AA10123456784</p>
									<p>Est. Delivery: Nov 12, 2025</p>
								</div>
							</div>
						</div>

						<Separator />

						<div className="space-y-2">
							<div className="text-sm font-medium">Order Notes</div>
							<p className="text-sm text-muted-foreground">
								Please leave package at front door. Ring bell twice.
							</p>
						</div>
					</TabsContent>

					<TabsContent value="items" className="space-y-4">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Product</TableHead>
									<TableHead>SKU</TableHead>
									<TableHead className="text-right">Qty</TableHead>
									<TableHead className="text-right">Price</TableHead>
									<TableHead className="text-right">Total</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{orderItems.map((item) => (
									<TableRow key={item.id}>
										<TableCell className="font-medium">
											{item.productName}
										</TableCell>
										<TableCell className="text-muted-foreground">
											{item.sku}
										</TableCell>
										<TableCell className="text-right">
											{item.quantity}
										</TableCell>
										<TableCell className="text-right">
											${item.price.toFixed(2)}
										</TableCell>
										<TableCell className="text-right">
											${(item.price * item.quantity).toFixed(2)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>

						<Separator />

						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span className="text-muted-foreground">Subtotal</span>
								<span>$218.95</span>
							</div>
							<div className="flex justify-between text-sm">
								<span className="text-muted-foreground">Shipping</span>
								<span>$15.00</span>
							</div>
							<div className="flex justify-between text-sm">
								<span className="text-muted-foreground">Tax</span>
								<span>$20.35</span>
							</div>
							<Separator />
							<div className="flex justify-between font-medium">
								<span>Total</span>
								<span className="text-lg">{order.total}</span>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="history" className="space-y-4">
						<div className="space-y-4">
							{[
								{
									id: `1`,
									status: `Order Delivered`,
									date: `Nov 10, 2025`,
									time: `2:30 PM`,
									description: `Package delivered to front door`,
								},
								{
									id: `2`,
									status: `Out for Delivery`,
									date: `Nov 10, 2025`,
									time: `9:15 AM`,
									description: `Package is out for delivery`,
								},
								{
									id: `3`,
									status: `In Transit`,
									date: `Nov 9, 2025`,
									time: `6:45 PM`,
									description: `Package arrived at sorting facility`,
								},
								{
									id: `4`,
									status: `Shipped`,
									date: `Nov 8, 2025`,
									time: `3:20 PM`,
									description: `Package shipped from warehouse`,
								},
								{
									id: `5`,
									status: `Processing`,
									date: `Nov 8, 2025`,
									time: `11:00 AM`,
									description: `Order is being prepared`,
								},
								{
									id: `6`,
									status: `Order Confirmed`,
									date: `Nov 8, 2025`,
									time: `10:30 AM`,
									description: `Payment received and order confirmed`,
								},
							].map((event, index) => (
								<div key={event.id} className="flex gap-4">
									<div className="flex flex-col items-center">
										<div className="h-2 w-2 rounded-full bg-primary" />
										{index < 5 && (
											<div className="h-full w-px bg-border mt-2" />
										)}
									</div>
									<div className="flex-1 pb-4">
										<div className="flex items-center justify-between">
											<p className="text-sm font-medium">{event.status}</p>
											<div className="flex items-center gap-1 text-xs text-muted-foreground">
												<Calendar className="h-3 w-3" />
												{event.date} at {event.time}
											</div>
										</div>
										<p className="text-sm text-muted-foreground">
											{event.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
					<Button type="button">Print Order</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface EditOrderDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	order: Order | null;
}

export function EditOrderDialog({
	open,
	onOpenChange,
	order,
}: EditOrderDialogProps) {
	const [orderItems, setOrderItems] = useState<OrderItem[]>([
		{
			id: `1`,
			productName: `Wireless Headphones`,
			sku: `WH-001`,
			quantity: 2,
			price: 89.99,
		},
	]);

	const addOrderItem = () => {
		setOrderItems([
			...orderItems,
			{
				id: Date.now().toString(),
				productName: ``,
				sku: ``,
				quantity: 1,
				price: 0,
			},
		]);
	};

	const removeOrderItem = (id: string) => {
		setOrderItems(orderItems.filter((item) => item.id !== id));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		onOpenChange(false);
	};

	if (!order) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Edit Order - {order.id}</DialogTitle>
					<DialogDescription>
						Update order details, items, and shipping information
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit}>
					<Tabs defaultValue="details" className="w-full">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="details">Order Details</TabsTrigger>
							<TabsTrigger value="items">Items</TabsTrigger>
							<TabsTrigger value="shipping">Shipping</TabsTrigger>
						</TabsList>

						<TabsContent value="details" className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="status">Order Status</Label>
									<Select defaultValue={order.status}>
										<SelectTrigger id="status">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="PENDING">Pending</SelectItem>
											<SelectItem value="CONFIRMED">Confirmed</SelectItem>
											<SelectItem value="PROCESSING">Processing</SelectItem>
											<SelectItem value="SHIPPED">Shipped</SelectItem>
											<SelectItem value="DELIVERED">Delivered</SelectItem>
											<SelectItem value="CANCELLED">Cancelled</SelectItem>
											<SelectItem value="REFUNDED">Refunded</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="paymentStatus">Payment Status</Label>
									<Select defaultValue={order.paymentStatus}>
										<SelectTrigger id="paymentStatus">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="PENDING">Pending</SelectItem>
											<SelectItem value="PAID">Paid</SelectItem>
											<SelectItem value="REFUNDED">Refunded</SelectItem>
											<SelectItem value="FAILED">Failed</SelectItem>
											<SelectItem value="CANCELED">Canceled</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customer">Customer Name</Label>
								<Input
									id="customer"
									defaultValue={order.customer}
									placeholder="Customer name"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									defaultValue={order.email}
									placeholder="customer@example.com"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="notes">Order Notes</Label>
								<Textarea
									id="notes"
									placeholder="Add internal notes about this order..."
									rows={3}
								/>
							</div>
						</TabsContent>

						<TabsContent value="items" className="space-y-4">
							<div className="space-y-4">
								{orderItems.map((item) => (
									<div
										key={item.id}
										className="flex gap-2 p-4 border rounded-lg bg-muted/30"
									>
										<div className="flex-1 grid grid-cols-4 gap-2">
											<div className="space-y-2">
												<Label htmlFor={`product-${item.id}`}>Product</Label>
												<Input
													id={`product-${item.id}`}
													defaultValue={item.productName}
													placeholder="Product name"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor={`sku-${item.id}`}>SKU</Label>
												<Input
													id={`sku-${item.id}`}
													defaultValue={item.sku}
													placeholder="SKU"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor={`quantity-${item.id}`}>Quantity</Label>
												<Input
													id={`quantity-${item.id}`}
													type="number"
													min="1"
													defaultValue={item.quantity}
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor={`price-${item.id}`}>Price</Label>
												<Input
													id={`price-${item.id}`}
													type="number"
													step="0.01"
													min="0"
													defaultValue={item.price}
												/>
											</div>
										</div>
										<Button
											type="button"
											variant="ghost"
											size="icon"
											onClick={() => removeOrderItem(item.id)}
											className="mt-8"
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								))}
							</div>

							<Button
								type="button"
								variant="outline"
								onClick={addOrderItem}
								className="w-full"
							>
								<Plus className="h-4 w-4 mr-2" />
								Add Item
							</Button>
						</TabsContent>

						<TabsContent value="shipping" className="space-y-4">
							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="shippingMethod">Shipping Method</Label>
									<Select defaultValue="express">
										<SelectTrigger id="shippingMethod">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="standard">
												Standard Delivery
											</SelectItem>
											<SelectItem value="express">Express Delivery</SelectItem>
											<SelectItem value="overnight">Overnight</SelectItem>
											<SelectItem value="pickup">Store Pickup</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="tracking">Tracking Number</Label>
									<Input
										id="tracking"
										defaultValue="1Z999AA10123456784"
										placeholder="Tracking number"
									/>
								</div>

								<Separator />

								<div className="space-y-2">
									<Label>Shipping Address</Label>
									<Input
										placeholder="Street address"
										defaultValue="123 Main Street"
									/>
									<Input
										placeholder="Apartment, suite, etc."
										defaultValue="Apt 4B"
									/>
									<div className="grid grid-cols-2 gap-2">
										<Input placeholder="City" defaultValue="New York" />
										<Input placeholder="State/Province" defaultValue="NY" />
									</div>
									<div className="grid grid-cols-2 gap-2">
										<Input placeholder="ZIP/Postal code" defaultValue="10001" />
										<Select defaultValue="US">
											<SelectTrigger>
												<SelectValue placeholder="Country" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="US">United States</SelectItem>
												<SelectItem value="CA">Canada</SelectItem>
												<SelectItem value="UK">United Kingdom</SelectItem>
												<SelectItem value="AU">Australia</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>
						</TabsContent>
					</Tabs>

					<DialogFooter className="mt-6">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<Button type="submit">Save Changes</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface CreateOrderDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function CreateOrderDialog({
	open,
	onOpenChange,
}: CreateOrderDialogProps) {
	const [orderItems, setOrderItems] = useState<OrderItem[]>([
		{
			id: `1`,
			productName: ``,
			sku: ``,
			quantity: 1,
			price: 0,
		},
	]);

	const addOrderItem = () => {
		setOrderItems([
			...orderItems,
			{
				id: Date.now().toString(),
				productName: ``,
				sku: ``,
				quantity: 1,
				price: 0,
			},
		]);
	};

	const removeOrderItem = (id: string) => {
		setOrderItems(orderItems.filter((item) => item.id !== id));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Create New Order</DialogTitle>
					<DialogDescription>
						Add a new order to your store manually
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit}>
					<Tabs defaultValue="customer" className="w-full">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="customer">Customer</TabsTrigger>
							<TabsTrigger value="items">Items</TabsTrigger>
							<TabsTrigger value="shipping">Shipping</TabsTrigger>
							<TabsTrigger value="payment">Payment</TabsTrigger>
						</TabsList>

						<TabsContent value="customer" className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="customerName">Customer Name *</Label>
								<Input id="customerName" placeholder="John Doe" required />
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerEmail">Email *</Label>
								<Input
									id="customerEmail"
									type="email"
									placeholder="customer@example.com"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerPhone">Phone</Label>
								<Input
									id="customerPhone"
									type="tel"
									placeholder="+1 (555) 123-4567"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerNotes">Customer Notes</Label>
								<Textarea
									id="customerNotes"
									placeholder="Any special instructions from the customer..."
									rows={3}
								/>
							</div>
						</TabsContent>

						<TabsContent value="items" className="space-y-4">
							<div className="space-y-4">
								{orderItems.map((item) => (
									<div
										key={item.id}
										className="flex gap-2 p-4 border rounded-lg bg-muted/30"
									>
										<div className="flex-1 grid grid-cols-4 gap-2">
											<div className="space-y-2">
												<Label htmlFor={`product-${item.id}`}>Product *</Label>
												<Input
													id={`product-${item.id}`}
													placeholder="Product name"
													required
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor={`sku-${item.id}`}>SKU</Label>
												<Input id={`sku-${item.id}`} placeholder="SKU-001" />
											</div>
											<div className="space-y-2">
												<Label htmlFor={`quantity-${item.id}`}>Qty *</Label>
												<Input
													id={`quantity-${item.id}`}
													type="number"
													min="1"
													defaultValue="1"
													required
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor={`price-${item.id}`}>Price *</Label>
												<Input
													id={`price-${item.id}`}
													type="number"
													step="0.01"
													min="0"
													placeholder="0.00"
													required
												/>
											</div>
										</div>
										<Button
											type="button"
											variant="ghost"
											size="icon"
											onClick={() => removeOrderItem(item.id)}
											className="mt-8"
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								))}
							</div>

							<Button
								type="button"
								variant="outline"
								onClick={addOrderItem}
								className="w-full"
							>
								<Plus className="h-4 w-4 mr-2" />
								Add Another Item
							</Button>
						</TabsContent>

						<TabsContent value="shipping" className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="shippingMethod">Shipping Method *</Label>
								<Select required>
									<SelectTrigger id="shippingMethod">
										<SelectValue placeholder="Select shipping method" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="standard">Standard Delivery</SelectItem>
										<SelectItem value="express">Express Delivery</SelectItem>
										<SelectItem value="overnight">Overnight</SelectItem>
										<SelectItem value="pickup">Store Pickup</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<Separator />

							<div className="space-y-2">
								<Label>Shipping Address *</Label>
								<Input placeholder="Street address" required />
								<Input placeholder="Apartment, suite, etc. (optional)" />
								<div className="grid grid-cols-2 gap-2">
									<Input placeholder="City" required />
									<Input placeholder="State/Province" required />
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Input placeholder="ZIP/Postal code" required />
									<Select required>
										<SelectTrigger>
											<SelectValue placeholder="Country" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="US">United States</SelectItem>
											<SelectItem value="CA">Canada</SelectItem>
											<SelectItem value="UK">United Kingdom</SelectItem>
											<SelectItem value="AU">Australia</SelectItem>
											<SelectItem value="DE">Germany</SelectItem>
											<SelectItem value="FR">France</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="payment" className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="paymentMethod">Payment Method *</Label>
								<Select required>
									<SelectTrigger id="paymentMethod">
										<SelectValue placeholder="Select payment method" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="credit_card">Credit Card</SelectItem>
										<SelectItem value="debit_card">Debit Card</SelectItem>
										<SelectItem value="paypal">PayPal</SelectItem>
										<SelectItem value="bank_transfer">Bank Transfer</SelectItem>
										<SelectItem value="cash_on_delivery">
											Cash on Delivery
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="paymentStatusNew">Payment Status *</Label>
								<Select defaultValue="PENDING" required>
									<SelectTrigger id="paymentStatusNew">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="PENDING">Pending</SelectItem>
										<SelectItem value="PAID">Paid</SelectItem>
										<SelectItem value="FAILED">Failed</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<Separator />

							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Subtotal</span>
									<span>$0.00</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Shipping</span>
									<Input
										type="number"
										step="0.01"
										min="0"
										defaultValue="0.00"
										className="w-24 h-8 text-right"
									/>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Tax (%)</span>
									<Input
										type="number"
										step="0.01"
										min="0"
										defaultValue="0.00"
										className="w-24 h-8 text-right"
									/>
								</div>
								<Separator />
								<div className="flex justify-between font-medium text-lg">
									<span>Total</span>
									<span>$0.00</span>
								</div>
							</div>
						</TabsContent>
					</Tabs>

					<DialogFooter className="mt-6">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<PolarisButton type="submit">Create Order</PolarisButton>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteOrderDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	order: Order | null;
}

export function DeleteOrderDialog({
	open,
	onOpenChange,
	order,
}: DeleteOrderDialogProps) {
	const handleDelete = () => {
		// Handle delete logic
		onOpenChange(false);
	};

	if (!order) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Order</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete order {order.id}? This action cannot
						be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="p-4 border rounded-lg bg-muted/30 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Order Number:</span>
						<span className="font-medium">{order.id}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Customer:</span>
						<span className="font-medium">{order.customer}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Total:</span>
						<span className="font-medium">{order.total}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Date:</span>
						<span className="font-medium">{order.date}</span>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						Delete Order
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
