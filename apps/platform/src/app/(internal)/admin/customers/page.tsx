"use client";

import {
	Download,
	Filter,
	Loader2,
	MoreVertical,
	Plus,
	Search,
	Users,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { deleteCustomer, getCustomers } from "@/server/api/internal/customers";
import {
	CustomerFormDialog,
	DeleteCustomerDialog,
	ViewCustomerDialog,
} from "./_components/customer-dialogs";

// UI Customer type for display
interface Customer {
	id: string;
	name: string;
	email: string;
	phone: string;
	orders: number;
	totalSpent: string;
	status: string;
	joined: string;
}

export default function CustomersPage() {
	const [customers, setCustomers] = useState<Customer[]>([]);
	const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState(``);

	// Dialog states
	const [viewDialog, setViewDialog] = useState(false);
	const [createDialog, setCreateDialog] = useState(false);
	const [editDialog, setEditDialog] = useState(false);
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
		null,
	);

	const fetchCustomers = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getCustomers();
			// Transform API data to UI format
			const transformed = data.map(
				(customer): Customer => ({
					id: customer.id,
					name:
						`${customer.firstName || ""} ${customer.lastName || ""}`.trim() ||
						"Unknown",
					email: customer.email,
					phone: customer.phone || "N/A",
					orders: customer._count.orders,
					totalSpent: "$0.00", // TODO: Calculate from orders
					status: customer.isActive ? "Active" : "Inactive",
					joined: new Date(customer.createdAt).toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					}),
				}),
			);
			setCustomers(transformed);
			setFilteredCustomers(transformed);
		} catch (error) {
			console.error("Failed to fetch customers:", error);
			toast.error("Failed to load customers");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchCustomers();
	}, [fetchCustomers]);

	// Filter customers based on search
	useEffect(() => {
		if (!searchQuery.trim()) {
			setFilteredCustomers(customers);
			return;
		}

		const query = searchQuery.toLowerCase();
		const filtered = customers.filter(
			(customer) =>
				customer.name.toLowerCase().includes(query) ||
				customer.email.toLowerCase().includes(query) ||
				customer.phone.toLowerCase().includes(query),
		);
		setFilteredCustomers(filtered);
	}, [searchQuery, customers]);

	// Event handlers
	const handleView = (customer: Customer) => {
		setSelectedCustomer(customer);
		setViewDialog(true);
	};

	const handleEdit = (customer: Customer) => {
		setSelectedCustomer(customer);
		setEditDialog(true);
	};

	const handleDeleteClick = (customer: Customer) => {
		setSelectedCustomer(customer);
		setDeleteDialog(true);
	};

	const handleDeleteConfirm = async () => {
		if (!selectedCustomer) return;

		try {
			await deleteCustomer(selectedCustomer.id);
			toast.success("Customer deleted successfully");
			setDeleteDialog(false);
			setSelectedCustomer(null);
			fetchCustomers();
		} catch (error) {
			console.error("Failed to delete customer:", error);
			toast.error("Failed to delete customer");
		}
	};

	const handleCreate = () => {
		setSelectedCustomer(null);
		setCreateDialog(true);
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Customers</h1>
					<p className="text-muted-foreground mt-1">
						Manage and view customer information
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Customer
				</PolarisButton>
			</div>{" "}
			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Customers</p>
					<p className="text-2xl font-bold mt-1">{customers.length}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Customers</p>
					<p className="text-2xl font-bold mt-1">
						{customers.filter((c) => c.status === "Active").length}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Orders</p>
					<p className="text-2xl font-bold mt-1">
						{customers.reduce((acc, c) => acc + c.orders, 0)}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Avg. Orders/Customer</p>
					<p className="text-2xl font-bold mt-1">
						{customers.length > 0
							? (
									customers.reduce((acc, c) => acc + c.orders, 0) /
									customers.length
								).toFixed(1)
							: 0}
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
							placeholder="Search by name, email, or phone..."
							className="pl-9"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
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
			{/* Customers Table */}
			<Card>
				{isLoading ? (
					<div className="flex items-center justify-center min-h-[300px]">
						<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
					</div>
				) : filteredCustomers.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<Users className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>
								{searchQuery ? "No customers found" : "No customers yet"}
							</EmptyTitle>
							<EmptyDescription>
								{searchQuery
									? "Try adjusting your search"
									: "Customers will appear here when they sign up"}
							</EmptyDescription>
						</EmptyHeader>
						{!searchQuery && (
							<EmptyContent>
								<PolarisButton type="button" onClick={handleCreate}>
									<Plus className="h-4 w-4" />
									Add Customer
								</PolarisButton>
							</EmptyContent>
						)}
					</Empty>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Customer</TableHead>
								<TableHead>Contact</TableHead>
								<TableHead>Orders</TableHead>
								<TableHead>Total Spent</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Joined</TableHead>
								<TableHead className="w-[70px]"></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredCustomers.map((customer) => (
								<TableRow key={customer.id} className="cursor-pointer">
									<TableCell>
										<div className="flex items-center gap-3">
											<div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
												{customer.name
													.split(` `)
													.map((n) => n[0])
													.join(``)}
											</div>
											<div>
												<p className="font-medium text-sm">{customer.name}</p>
												<p className="text-muted-foreground text-xs">
													ID: {customer.id}
												</p>
											</div>
										</div>
									</TableCell>
									<TableCell>
										<div className="text-sm">
											<p>{customer.email}</p>
											<p className="text-muted-foreground text-xs">
												{customer.phone}
											</p>
										</div>
									</TableCell>
									<TableCell>
										<span className="font-medium">{customer.orders}</span>
									</TableCell>
									<TableCell>
										<span className="font-medium">{customer.totalSpent}</span>
									</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 text-xs font-medium rounded-full ${
												customer.status === `Active`
													? `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`
													: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`
											}`}
										>
											{customer.status}
										</span>
									</TableCell>
									<TableCell className="text-sm">{customer.joined}</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button type="button" variant="ghost" size="icon">
													<MoreVertical className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem onClick={() => handleView(customer)}>
													View profile
												</DropdownMenuItem>
												<DropdownMenuItem>View orders</DropdownMenuItem>
												<DropdownMenuItem onClick={() => handleEdit(customer)}>
													Edit customer
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem>Send email</DropdownMenuItem>
												<DropdownMenuItem>Reset password</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem
													className="text-red-600"
													onClick={() => handleDeleteClick(customer)}
												>
													Delete customer
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
					Showing{" "}
					<span className="font-medium">1-{filteredCustomers.length}</span> of
					{` `}
					<span className="font-medium">{filteredCustomers.length}</span>{" "}
					customers
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
			{/* CRUD Dialogs */}
			<ViewCustomerDialog
				open={viewDialog}
				onOpenChange={setViewDialog}
				customer={selectedCustomer}
			/>
			<CustomerFormDialog
				open={createDialog}
				onOpenChange={setCreateDialog}
				mode="create"
				onSuccess={fetchCustomers}
			/>
			<CustomerFormDialog
				open={editDialog}
				onOpenChange={setEditDialog}
				mode="edit"
				customer={selectedCustomer}
				onSuccess={fetchCustomers}
			/>
			<DeleteCustomerDialog
				open={deleteDialog}
				onOpenChange={setDeleteDialog}
				customer={selectedCustomer}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
}
