"use client";

import {
	Calendar,
	Filter,
	MoreVertical,
	Percent,
	Plus,
	Search,
} from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
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
	deleteDiscount,
	getDiscounts,
	toggleDiscountStatus,
} from "@/server/api/internal/discounts";
import { useDialogStore } from "@/stores/dialog-store";
import {
	DeleteDiscountDialog,
	DiscountFormDialog,
	ViewDiscountDialog,
} from "./_components/discount-dialogs";

// Type from server action
type ServerDiscount = Awaited<ReturnType<typeof getDiscounts>>[number];

interface DiscountDisplay {
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
	isActive: boolean;
}

function mapDiscountToDisplay(discount: ServerDiscount): DiscountDisplay {
	const value =
		discount.type === "PERCENTAGE"
			? `${discount.value}%`
			: `$${Number(discount.value).toFixed(2)}`;

	return {
		id: discount.id,
		name: discount.name,
		code: "",
		description: discount.description ?? "",
		type: discount.type,
		value,
		scope: discount.scope,
		status: discount.isActive ? "Active" : "Inactive",
		startDate: new Date(discount.startDate).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		}),
		endDate: discount.endDate
			? new Date(discount.endDate).toLocaleDateString("en-US", {
					month: "short",
					day: "numeric",
					year: "numeric",
				})
			: null,
		uses: 0,
		limit: undefined,
		minimumPurchase: undefined,
		combinable: undefined,
		isActive: discount.isActive,
	};
}

export default function DiscountsPage() {
	const [discounts, setDiscounts] = React.useState<DiscountDisplay[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [searchQuery, setSearchQuery] = React.useState("");
	const [typeFilter, setTypeFilter] = React.useState("all");
	const [selectedDiscount, setSelectedDiscount] =
		React.useState<DiscountDisplay | null>(null);

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

	const fetchDiscounts = React.useCallback(async () => {
		try {
			const data = await getDiscounts();
			setDiscounts(data.map(mapDiscountToDisplay));
		} catch (error) {
			console.error("Failed to fetch discounts:", error);
			toast.error("Failed to load discounts");
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchDiscounts();
	}, [fetchDiscounts]);

	// Filter discounts based on search and type filter
	const filteredDiscounts = React.useMemo(() => {
		return discounts.filter((discount) => {
			const matchesSearch =
				searchQuery === "" ||
				discount.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				discount.description
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				discount.code.toLowerCase().includes(searchQuery.toLowerCase());

			const matchesType = typeFilter === "all" || discount.type === typeFilter;

			return matchesSearch && matchesType;
		});
	}, [discounts, searchQuery, typeFilter]);

	// Stats calculations
	const totalDiscounts = discounts.length;
	const activeDiscounts = discounts.filter((d) => d.status === "Active").length;
	const totalUses = discounts.reduce((acc, d) => acc + d.uses, 0);

	// Event handlers
	const handleView = (discount: DiscountDisplay) => {
		setSelectedDiscount(discount);
		openDialog("isViewDiscountOpen");
	};

	const handleEdit = (discount: DiscountDisplay) => {
		setSelectedDiscount(discount);
		openDialog("isEditDiscountOpen");
	};

	const handleDelete = (discount: DiscountDisplay) => {
		setSelectedDiscount(discount);
		openDialog("isDeleteDiscountOpen");
	};

	const handleCreate = () => {
		setSelectedDiscount(null);
		openDialog("isAddDiscountOpen");
	};

	const handleToggleStatus = async (discountId: string) => {
		try {
			await toggleDiscountStatus(discountId);
			toast.success("Discount status updated");
			await fetchDiscounts();
		} catch (error) {
			console.error("Failed to toggle discount status:", error);
			toast.error("Failed to update discount status");
		}
	};

	const handleDeleteConfirm = async () => {
		if (!selectedDiscount) return;
		try {
			await deleteDiscount(selectedDiscount.id);
			toast.success("Discount deleted");
			closeDialog("isDeleteDiscountOpen");
			await fetchDiscounts();
		} catch (error) {
			console.error("Failed to delete discount:", error);
			toast.error("Failed to delete discount");
		}
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

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<Loader size="lg" />
			</div>
		);
	}

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
			</div>
			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Discounts</p>
					<p className="text-2xl font-bold mt-1">{totalDiscounts}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Discounts</p>
					<p className="text-2xl font-bold mt-1">{activeDiscounts}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Uses</p>
					<p className="text-2xl font-bold mt-1">
						{totalUses.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Inactive</p>
					<p className="text-2xl font-bold mt-1">
						{totalDiscounts - activeDiscounts}
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
				{filteredDiscounts.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<Percent className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No discounts found</EmptyTitle>
							<EmptyDescription>
								{searchQuery || typeFilter !== "all"
									? "Try adjusting your search or filter"
									: "Create your first discount to get started"}
							</EmptyDescription>
						</EmptyHeader>
						{!searchQuery && typeFilter === "all" && (
							<EmptyContent>
								<PolarisButton type="button" onClick={handleCreate}>
									<Plus className="h-4 w-4" />
									Create Discount
								</PolarisButton>
							</EmptyContent>
						)}
					</Empty>
				) : (
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
							{filteredDiscounts.map((discount) => (
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
											{discount.type === "PERCENTAGE" ? "Percentage" : "Fixed"}
										</span>
									</TableCell>
									<TableCell>
										<span className="font-medium">{discount.value}</span>
									</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 text-xs font-medium rounded-full ${getScopeBadge(discount.scope)}`}
										>
											{discount.scope.replace("_", " ")}
										</span>
									</TableCell>
									<TableCell>
										<div className="flex items-center gap-1 text-sm">
											<Calendar className="h-3 w-3 text-muted-foreground" />
											<span className="text-xs">
												{discount.startDate} - {discount.endDate || "Ongoing"}
											</span>
										</div>
									</TableCell>
									<TableCell>
										<span className="font-medium">{discount.uses}</span>
									</TableCell>
									<TableCell>
										<button
											type="button"
											onClick={() => handleToggleStatus(discount.id)}
										>
											<span
												className={`px-2 py-1 text-xs font-medium rounded-full cursor-pointer ${
													discount.status === "Active"
														? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
														: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
												}`}
											>
												{discount.status}
											</span>
										</button>
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
				)}
			</Card>
			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing{" "}
					<span className="font-medium">1-{filteredDiscounts.length}</span> of{" "}
					<span className="font-medium">{totalDiscounts}</span> discounts
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
				onSuccess={fetchDiscounts}
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
				onSuccess={fetchDiscounts}
			/>
			<DeleteDiscountDialog
				open={isDeleteDiscountOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isDeleteDiscountOpen")
						: closeDialog("isDeleteDiscountOpen")
				}
				discount={selectedDiscount}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
}
