"use client";

import { Calendar, MapPin, User } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface Customer {
	id: string;
	name: string;
	email: string;
	phone: string;
	status: string;
	orders: number;
	totalSpent: string;
	joined: string;
}

interface ViewCustomerDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	customer: Customer | null;
}

export function ViewCustomerDialog({
	open,
	onOpenChange,
	customer,
}: ViewCustomerDialogProps) {
	if (!customer) return null;

	const recentOrders = [
		{ id: `#3210`, date: `Nov 8, 2025`, total: `$329.00`, status: `DELIVERED` },
		{
			id: `#3156`,
			date: `Oct 25, 2025`,
			total: `$149.00`,
			status: `DELIVERED`,
		},
		{ id: `#3102`, date: `Oct 10, 2025`, total: `$89.00`, status: `DELIVERED` },
	];

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						<User className="h-5 w-5" />
						{customer.name}
					</DialogTitle>
					<DialogDescription>Complete customer information</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="orders">Orders</TabsTrigger>
						<TabsTrigger value="addresses">Addresses</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4">
						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-4">
								<div>
									<p className="text-sm font-medium text-muted-foreground mb-1">
										Contact Information
									</p>
									<div className="space-y-2 text-sm">
										<p className="flex items-center gap-2">
											<span className="font-medium">Email:</span>
											<span>{customer.email}</span>
										</p>
										<p className="flex items-center gap-2">
											<span className="font-medium">Phone:</span>
											<span>{customer.phone}</span>
										</p>
										<p className="flex items-center gap-2">
											<span className="font-medium">Status:</span>
											<Badge>{customer.status}</Badge>
										</p>
									</div>
								</div>

								<Separator />

								<div>
									<p className="text-sm font-medium text-muted-foreground mb-1">
										Account Details
									</p>
									<div className="space-y-2 text-sm">
										<p className="flex items-center gap-2">
											<Calendar className="h-4 w-4" />
											<span>Joined {customer.joined}</span>
										</p>
										<p className="flex items-center gap-2">
											<span className="font-medium">Customer ID:</span>
											<span className="font-mono">{customer.id}</span>
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<div className="p-4 border rounded-lg bg-muted/30">
									<p className="text-sm text-muted-foreground mb-3">
										Lifetime Value
									</p>
									<p className="text-3xl font-bold">{customer.totalSpent}</p>
								</div>

								<div className="p-4 border rounded-lg bg-muted/30">
									<p className="text-sm text-muted-foreground mb-3">
										Total Orders
									</p>
									<p className="text-3xl font-bold">{customer.orders}</p>
								</div>

								<div className="p-4 border rounded-lg bg-muted/30">
									<p className="text-sm text-muted-foreground mb-3">
										Average Order Value
									</p>
									<p className="text-3xl font-bold">$189.00</p>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="orders" className="space-y-4">
						<div className="space-y-3">
							{recentOrders.map((order) => (
								<div
									key={order.id}
									className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
								>
									<div>
										<p className="font-medium">{order.id}</p>
										<p className="text-sm text-muted-foreground">
											{order.date}
										</p>
									</div>
									<div className="text-right">
										<p className="font-medium">{order.total}</p>
										<Badge variant="outline" className="mt-1">
											{order.status}
										</Badge>
									</div>
								</div>
							))}
						</div>
					</TabsContent>

					<TabsContent value="addresses" className="space-y-4">
						<div className="space-y-4">
							<div className="p-4 border rounded-lg">
								<div className="flex items-start gap-2 mb-2">
									<MapPin className="h-4 w-4 mt-0.5" />
									<p className="font-medium">Shipping Address</p>
								</div>
								<div className="text-sm text-muted-foreground ml-6">
									<p>123 Main Street</p>
									<p>Apt 4B</p>
									<p>New York, NY 10001</p>
									<p>United States</p>
								</div>
							</div>

							<div className="p-4 border rounded-lg">
								<div className="flex items-start gap-2 mb-2">
									<MapPin className="h-4 w-4 mt-0.5" />
									<p className="font-medium">Billing Address</p>
								</div>
								<div className="text-sm text-muted-foreground ml-6">
									<p>123 Main Street</p>
									<p>Apt 4B</p>
									<p>New York, NY 10001</p>
									<p>United States</p>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
					<Button type="button">Send Email</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface CustomerFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	customer?: Customer | null;
	mode: "create" | "edit";
}

export function CustomerFormDialog({
	open,
	onOpenChange,
	customer,
	mode,
}: CustomerFormDialogProps) {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === "create" ? "Create New Customer" : "Edit Customer"}
					</DialogTitle>
					<DialogDescription>
						{mode === "create"
							? "Add a new customer to your database"
							: "Update customer information"}
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit}>
					<Tabs defaultValue="personal" className="w-full">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="personal">Personal Info</TabsTrigger>
							<TabsTrigger value="address">Address</TabsTrigger>
						</TabsList>

						<TabsContent value="personal" className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="customerName">Full Name *</Label>
								<Input
									id="customerName"
									defaultValue={customer?.name}
									placeholder="John Doe"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerEmail">Email *</Label>
								<Input
									id="customerEmail"
									type="email"
									defaultValue={customer?.email}
									placeholder="customer@example.com"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerPhone">Phone *</Label>
								<Input
									id="customerPhone"
									type="tel"
									defaultValue={customer?.phone}
									placeholder="+1 (555) 123-4567"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerStatus">Status</Label>
								<Select defaultValue={customer?.status || "Active"}>
									<SelectTrigger id="customerStatus">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Active">Active</SelectItem>
										<SelectItem value="Inactive">Inactive</SelectItem>
										<SelectItem value="Blocked">Blocked</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="notes">Notes</Label>
								<Textarea
									id="notes"
									placeholder="Internal notes about this customer..."
									rows={3}
								/>
							</div>
						</TabsContent>

						<TabsContent value="address" className="space-y-4">
							<div className="space-y-2">
								<Label>Shipping Address</Label>
								<Input placeholder="Street address" />
								<Input placeholder="Apartment, suite, etc." />
								<div className="grid grid-cols-2 gap-2">
									<Input placeholder="City" />
									<Input placeholder="State/Province" />
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Input placeholder="ZIP/Postal code" />
									<Select>
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
						<PolarisButton type="submit">
							{mode === "create" ? "Create Customer" : "Save Changes"}
						</PolarisButton>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteCustomerDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	customer: Customer | null;
}

export function DeleteCustomerDialog({
	open,
	onOpenChange,
	customer,
}: DeleteCustomerDialogProps) {
	const handleDelete = () => {
		onOpenChange(false);
	};

	if (!customer) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Customer</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this customer? This will also remove
						all associated data. This action cannot be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="p-4 border rounded-lg bg-muted/30 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Name:</span>
						<span className="font-medium">{customer.name}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Email:</span>
						<span className="font-medium">{customer.email}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Total Orders:</span>
						<span className="font-medium">{customer.orders}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Total Spent:</span>
						<span className="font-medium">{customer.totalSpent}</span>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						Delete Customer
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
