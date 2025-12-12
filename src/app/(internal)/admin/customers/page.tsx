"use client";

import { Download, Filter, MoreVertical, Plus, Search } from "lucide-react";
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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	CustomerFormDialog,
	DeleteCustomerDialog,
	ViewCustomerDialog,
} from "./_components/customer-dialogs";

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
	const [searchQuery, setSearchQuery] = useState(``);

	// Dialog states
	const [viewDialog, setViewDialog] = useState(false);
	const [createDialog, setCreateDialog] = useState(false);
	const [editDialog, setEditDialog] = useState(false);
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
		null,
	);

	const customers = [
		{
			id: `1`,
			name: `Sofia Martinez`,
			email: `sofia@example.com`,
			phone: `+359 88 123 4567`,
			orders: 12,
			totalSpent: `$2,450.00`,
			status: `Active`,
			joined: `Nov 1, 2024`,
		},
		{
			id: `2`,
			name: `Ivan Petrov`,
			email: `ivan@example.com`,
			phone: `+359 88 234 5678`,
			orders: 8,
			totalSpent: `$1,890.00`,
			status: `Active`,
			joined: `Oct 15, 2024`,
		},
		{
			id: `3`,
			name: `Elena Dimitrova`,
			email: `elena@example.com`,
			phone: `+359 88 345 6789`,
			orders: 23,
			totalSpent: `$5,670.00`,
			status: `Active`,
			joined: `Sep 20, 2024`,
		},
		{
			id: `4`,
			name: `Georgi Ivanov`,
			email: `georgi@example.com`,
			phone: `+359 88 456 7890`,
			orders: 5,
			totalSpent: `$780.00`,
			status: `Active`,
			joined: `Nov 3, 2024`,
		},
		{
			id: `5`,
			name: `Maria Popova`,
			email: `maria@example.com`,
			phone: `+359 88 567 8901`,
			orders: 15,
			totalSpent: `$3,240.00`,
			status: `Active`,
			joined: `Aug 12, 2024`,
		},
		{
			id: `6`,
			name: `Dimitar Petkov`,
			email: `dimitar@example.com`,
			phone: `+359 88 678 9012`,
			orders: 2,
			totalSpent: `$340.00`,
			status: `Inactive`,
			joined: `Jul 5, 2024`,
		},
		{
			id: `7`,
			name: `Svetlana Ivanova`,
			email: `svetlana@example.com`,
			phone: `+359 88 789 0123`,
			orders: 34,
			totalSpent: `$8,920.00`,
			status: `Active`,
			joined: `Jun 18, 2024`,
		},
	];

	// Event handlers
	const handleView = (customer: Customer) => {
		setSelectedCustomer(customer);
		setViewDialog(true);
	};

	const handleEdit = (customer: Customer) => {
		setSelectedCustomer(customer);
		setEditDialog(true);
	};

	const handleDelete = (customer: Customer) => {
		setSelectedCustomer(customer);
		setDeleteDialog(true);
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
					<p className="text-2xl font-bold mt-1">8,456</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Customers</p>
					<p className="text-2xl font-bold mt-1">7,234</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">New This Month</p>
					<p className="text-2xl font-bold mt-1">234</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Avg. Order Value</p>
					<p className="text-2xl font-bold mt-1">$287</p>
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
						{customers.map((customer) => (
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
												onClick={() => handleDelete(customer)}
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
			</Card>
			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium">1-{customers.length}</span> of
					{` `}
					<span className="font-medium">{customers.length}</span> customers
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
			/>
			<CustomerFormDialog
				open={editDialog}
				onOpenChange={setEditDialog}
				mode="edit"
				customer={selectedCustomer}
			/>
			<DeleteCustomerDialog
				open={deleteDialog}
				onOpenChange={setDeleteDialog}
				customer={selectedCustomer}
			/>
		</div>
	);
}
