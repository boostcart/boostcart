"use client";

import { Calendar, Filter, MoreVertical, Plus, Search } from "lucide-react";
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
import { useDialogStore } from "@/stores/dialog-store";
import {
	DeleteDiscountDialog,
	DiscountFormDialog,
	ViewDiscountDialog,
} from "./_components/discount-dialogs";

interface Discount {
	id: string;
	name: string;
	code: string;
	description: string;
	type: string;
	value: string;
	scope: string;
	status: string;
	startDate: string;
	endDate: string | null;
	uses: number;
	limit?: number;
	minimumPurchase?: number;
	combinable?: boolean;
}

export default function DiscountsPage() {
	const [searchQuery, setSearchQuery] = useState(``);
	const [typeFilter, setTypeFilter] = useState(`all`);
	const [selectedDiscount, setSelectedDiscount] = useState<Discount | null>(
		null,
	);

	// Dialog states from zustand
	const isAddDiscountOpen = useDialogStore((state) => state.isAddDiscountOpen);
	const isEditDiscountOpen = useDialogStore(
		(state) => state.isEditDiscountOpen,
	);
	const isViewDiscountOpen = useDialogStore(
		(state) => state.isViewDiscountOpen,
	);
	const isDeleteDiscountOpen = useDialogStore(
		(state) => state.isDeleteDiscountOpen,
	);
	const openDialog = useDialogStore((state) => state.openDialog);
	const closeDialog = useDialogStore((state) => state.closeDialog);

	const discounts = [
		{
			id: `1`,
			name: `Black Friday Sale`,
			code: `BF2025`,
			description: `25% off all electronics`,
			type: `PERCENTAGE`,
			value: `25%`,
			scope: `CATEGORY`,
			status: `Active`,
			startDate: `Nov 24, 2025`,
			endDate: `Nov 27, 2025`,
			uses: 1234,
		},
		{
			id: `2`,
			name: `Summer Sale`,
			code: `SUMMER50`,
			description: `$50 off orders over $200`,
			type: `FIXED_AMOUNT`,
			value: `$50`,
			scope: `ALL_PRODUCTS`,
			status: `Active`,
			startDate: `Jun 1, 2025`,
			endDate: `Aug 31, 2025`,
			uses: 856,
		},
		{
			id: `3`,
			name: `iPhone Discount`,
			code: `IPHONE15`,
			description: `15% off all iPhones`,
			type: `PERCENTAGE`,
			value: `15%`,
			scope: `PRODUCT`,
			status: `Active`,
			startDate: `Oct 1, 2025`,
			endDate: `Dec 31, 2025`,
			uses: 567,
		},
		{
			id: `4`,
			name: `Apple Brand Discount`,
			code: `APPLE10`,
			description: `10% off all Apple products`,
			type: `PERCENTAGE`,
			value: `10%`,
			scope: `BRAND`,
			status: `Active`,
			startDate: `Sep 1, 2025`,
			endDate: `Dec 31, 2025`,
			uses: 2345,
		},
		{
			id: `5`,
			name: `Welcome Discount`,
			code: `WELCOME20`,
			description: `$20 off first order`,
			type: `FIXED_AMOUNT`,
			value: `$20`,
			scope: `ALL_PRODUCTS`,
			status: `Active`,
			startDate: `Jan 1, 2025`,
			endDate: ``,
			uses: 4567,
		},
		{
			id: `6`,
			name: `Clearance Sale`,
			code: `CLEAR50`,
			description: `50% off selected items`,
			type: `PERCENTAGE`,
			value: `50%`,
			scope: `PRODUCT`,
			status: `Inactive`,
			startDate: `Jul 1, 2025`,
			endDate: `Jul 31, 2025`,
			uses: 234,
		},
	];

	// Event handlers
	const handleView = (discount: Discount) => {
		setSelectedDiscount(discount);
		openDialog("isViewDiscountOpen");
	};

	const handleEdit = (discount: Discount) => {
		setSelectedDiscount(discount);
		openDialog("isEditDiscountOpen");
	};

	const handleDelete = (discount: Discount) => {
		setSelectedDiscount(discount);
		openDialog("isDeleteDiscountOpen");
	};

	const handleCreate = () => {
		setSelectedDiscount(null);
		openDialog("isAddDiscountOpen");
	};

	const getScopeBadge = (scope: string) => {
		const styles = {
			PRODUCT: `bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300`,
			CATEGORY: `bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300`,
			BRAND: `bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300`,
			ALL_PRODUCTS: `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`,
		};
		return styles[scope as keyof typeof styles] || styles.ALL_PRODUCTS;
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Discounts</h1>
					<p className="text-muted-foreground mt-1">
						Create and manage discount campaigns
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Create Discount
				</PolarisButton>
			</div>{" "}
			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Discounts</p>
					<p className="text-2xl font-bold mt-1">24</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Discounts</p>
					<p className="text-2xl font-bold mt-1">18</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Saved</p>
					<p className="text-2xl font-bold mt-1">$45,234</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Orders with Discount</p>
					<p className="text-2xl font-bold mt-1">1,234</p>
				</Card>
			</div>
			{/* Filters */}
			<Card className="p-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search by discount name or description..."
							className="pl-9"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<Select value={typeFilter} onValueChange={setTypeFilter}>
						<SelectTrigger className="w-full sm:w-[180px]">
							<SelectValue placeholder="Filter by type" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Types</SelectItem>
							<SelectItem value="PERCENTAGE">Percentage</SelectItem>
							<SelectItem value="FIXED_AMOUNT">Fixed Amount</SelectItem>
						</SelectContent>
					</Select>
					<Button type="button" variant="outline">
						<Filter className="h-4 w-4 mr-2" />
						More Filters
					</Button>
				</div>
			</Card>
			{/* Discounts Table */}
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Discount</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Value</TableHead>
							<TableHead>Scope</TableHead>
							<TableHead>Active Period</TableHead>
							<TableHead>Uses</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="w-[70px]"></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{discounts.map((discount) => (
							<TableRow key={discount.id} className="cursor-pointer">
								<TableCell>
									<div>
										<p className="font-medium text-sm">{discount.name}</p>
										<p className="text-muted-foreground text-xs">
											{discount.description}
										</p>
									</div>
								</TableCell>
								<TableCell>
									<span className="text-sm">
										{discount.type === `PERCENTAGE` ? `Percentage` : `Fixed`}
									</span>
								</TableCell>
								<TableCell>
									<span className="font-medium">{discount.value}</span>
								</TableCell>
								<TableCell>
									<span
										className={`px-2 py-1 text-xs font-medium rounded-full ${getScopeBadge(discount.scope)}`}
									>
										{discount.scope.replace(`_`, ` `)}
									</span>
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-1 text-sm">
										<Calendar className="h-3 w-3 text-muted-foreground" />
										<span className="text-xs">
											{discount.startDate} - {discount.endDate || `Ongoing`}
										</span>
									</div>
								</TableCell>
								<TableCell>
									<span className="font-medium">{discount.uses}</span>
								</TableCell>
								<TableCell>
									<span
										className={`px-2 py-1 text-xs font-medium rounded-full ${
											discount.status === `Active`
												? `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`
												: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`
										}`}
									>
										{discount.status}
									</span>
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
											<DropdownMenuItem onClick={() => handleView(discount)}>
												View details
											</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleEdit(discount)}>
												Edit discount
											</DropdownMenuItem>
											<DropdownMenuItem>Duplicate</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem>View analytics</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem
												className="text-red-600"
												onClick={() => handleDelete(discount)}
											>
												Delete discount
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
					Showing <span className="font-medium">1-{discounts.length}</span> of
					{` `}
					<span className="font-medium">{discounts.length}</span> discounts
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
			<ViewDiscountDialog
				open={isViewDiscountOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isViewDiscountOpen")
						: closeDialog("isViewDiscountOpen")
				}
				discount={selectedDiscount}
			/>
			<DiscountFormDialog
				open={isAddDiscountOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isAddDiscountOpen")
						: closeDialog("isAddDiscountOpen")
				}
				mode="create"
			/>
			<DiscountFormDialog
				open={isEditDiscountOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isEditDiscountOpen")
						: closeDialog("isEditDiscountOpen")
				}
				mode="edit"
				discount={selectedDiscount}
			/>
			<DeleteDiscountDialog
				open={isDeleteDiscountOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isDeleteDiscountOpen")
						: closeDialog("isDeleteDiscountOpen")
				}
				discount={selectedDiscount}
			/>
		</div>
	);
}
