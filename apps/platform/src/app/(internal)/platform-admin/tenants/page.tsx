"use client";

import {
	AlertCircleIcon,
	CheckIcon,
	DeleteIcon,
	SearchIcon,
} from "@shopify/polaris-icons";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
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
	deleteTenant,
	getTenants,
	updateTenantStatus,
} from "@/server/api/platform/actions";

interface Tenant {
	id: string;
	name: string;
	slug: string;
	isActive: boolean;
	email: string | null;
	createdAt: string;
	updatedAt: string;
	productCount: number;
	orderCount: number;
	staffCount: number;
}

interface Pagination {
	page: number;
	limit: number;
	total: number;
	totalPages: number;
}

export default function TenantsPage() {
	const [tenants, setTenants] = useState<Tenant[]>([]);
	const [pagination, setPagination] = useState<Pagination | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Filters
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");
	const [page, setPage] = useState(1);

	// Dialogs
	const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
	const [statusDialogOpen, setStatusDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [newIsActive, setNewIsActive] = useState<boolean>(true);

	const loadTenants = useCallback(async () => {
		try {
			setLoading(true);
			const data = await getTenants({
				page,
				limit: 20,
				search: search || undefined,
				status: statusFilter !== "all" ? statusFilter : undefined,
			});
			setTenants(data.tenants);
			setPagination(data.pagination);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load tenants");
		} finally {
			setLoading(false);
		}
	}, [page, search, statusFilter]);

	useEffect(() => {
		loadTenants();
	}, [loadTenants]);

	// Debounced search
	useEffect(() => {
		const timer = setTimeout(() => {
			setPage(1);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

	const handleStatusChange = async () => {
		if (!selectedTenant) return;
		try {
			await updateTenantStatus(selectedTenant.id, newIsActive);
			toast.success(`Tenant ${newIsActive ? "activated" : "deactivated"}`);
			setStatusDialogOpen(false);
			setSelectedTenant(null);
			loadTenants();
		} catch (err) {
			toast.error(
				err instanceof Error ? err.message : "Failed to update status",
			);
		}
	};

	const handleDelete = async () => {
		if (!selectedTenant) return;
		try {
			await deleteTenant(selectedTenant.id);
			toast.success(`Tenant "${selectedTenant.name}" deleted`);
			setDeleteDialogOpen(false);
			setSelectedTenant(null);
			loadTenants();
		} catch (err) {
			toast.error(
				err instanceof Error ? err.message : "Failed to delete tenant",
			);
		}
	};

	const openStatusDialog = (tenant: Tenant, isActive: boolean) => {
		setSelectedTenant(tenant);
		setNewIsActive(isActive);
		setStatusDialogOpen(true);
	};

	const openDeleteDialog = (tenant: Tenant) => {
		setSelectedTenant(tenant);
		setDeleteDialogOpen(true);
	};

	if (error && !loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<div className="text-center">
					<p className="text-red-400 text-lg">{error}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-white">Tenants</h1>
				<p className="text-[#8b949e]">Manage all stores on the platform</p>
			</div>

			{/* Filters */}
			<div className="flex flex-col sm:flex-row gap-3">
				<div className="relative flex-1 max-w-sm">
					<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#8b949e]" />
					<Input
						placeholder="Search tenants..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="pl-9 bg-[#161b22] border-[#30363d] text-white placeholder:text-[#8b949e]"
					/>
				</div>
				<Select value={statusFilter} onValueChange={setStatusFilter}>
					<SelectTrigger className="w-40 bg-[#161b22] border-[#30363d] text-white">
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Statuses</SelectItem>
						<SelectItem value="ACTIVE">Active</SelectItem>
						<SelectItem value="SUSPENDED">Suspended</SelectItem>
						<SelectItem value="INACTIVE">Inactive</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Table */}
			<Card className="bg-[#161b22] border-[#30363d]">
				<CardContent className="p-0">
					<Table>
						<TableHeader>
							<TableRow className="border-[#30363d] hover:bg-transparent">
								<TableHead className="text-[#8b949e]">Store</TableHead>
								<TableHead className="text-[#8b949e]">Slug</TableHead>
								<TableHead className="text-[#8b949e]">Status</TableHead>
								<TableHead className="text-[#8b949e]">Products</TableHead>
								<TableHead className="text-[#8b949e]">Orders</TableHead>
								<TableHead className="text-[#8b949e]">Staff</TableHead>
								<TableHead className="text-[#8b949e]">Created</TableHead>
								<TableHead className="text-[#8b949e] text-right">
									Actions
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{loading ? (
								<TableRow className="border-[#30363d]">
									<TableCell
										colSpan={8}
										className="text-center text-[#8b949e] py-8"
									>
										Loading...
									</TableCell>
								</TableRow>
							) : tenants.length === 0 ? (
								<TableRow className="border-[#30363d]">
									<TableCell
										colSpan={8}
										className="text-center text-[#8b949e] py-8"
									>
										No tenants found
									</TableCell>
								</TableRow>
							) : (
								tenants.map((tenant) => (
									<TableRow
										key={tenant.id}
										className="border-[#30363d] hover:bg-[#21262d]"
									>
										<TableCell>
											<div>
												<p className="font-medium text-white">{tenant.name}</p>
												{tenant.email && (
													<p className="text-xs text-[#8b949e]">
														{tenant.email}
													</p>
												)}
											</div>
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{tenant.slug}
										</TableCell>
										<TableCell>
											<TenantStatusBadge isActive={tenant.isActive} />
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{tenant.productCount}
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{tenant.orderCount}
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{tenant.staffCount}
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{formatDate(tenant.createdAt)}
										</TableCell>
										<TableCell className="text-right">
											<div className="flex items-center justify-end gap-1">
												{tenant.isActive ? (
													<Button
														variant="ghost"
														size="sm"
														className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10"
														onClick={() => openStatusDialog(tenant, false)}
													>
														<AlertCircleIcon className="size-4" />
													</Button>
												) : (
													<Button
														variant="ghost"
														size="sm"
														className="text-green-400 hover:text-green-300 hover:bg-green-400/10"
														onClick={() => openStatusDialog(tenant, true)}
													>
														<CheckIcon className="size-4" />
													</Button>
												)}
												<Button
													variant="ghost"
													size="sm"
													className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
													onClick={() => openDeleteDialog(tenant)}
												>
													<DeleteIcon className="size-4" />
												</Button>
											</div>
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			{/* Pagination */}
			{pagination && pagination.totalPages > 1 && (
				<div className="flex items-center justify-between">
					<p className="text-sm text-[#8b949e]">
						Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
						{Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
						{pagination.total} tenants
					</p>
					<div className="flex gap-2">
						<Button
							variant="outline"
							size="sm"
							disabled={pagination.page === 1}
							onClick={() => setPage((p) => p - 1)}
							className="bg-[#161b22] border-[#30363d] text-white hover:bg-[#21262d]"
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							disabled={pagination.page === pagination.totalPages}
							onClick={() => setPage((p) => p + 1)}
							className="bg-[#161b22] border-[#30363d] text-white hover:bg-[#21262d]"
						>
							Next
						</Button>
					</div>
				</div>
			)}

			{/* Status Change Dialog */}
			<Dialog open={statusDialogOpen} onOpenChange={setStatusDialogOpen}>
				<DialogContent className="bg-[#161b22] border-[#30363d]">
					<DialogHeader>
						<DialogTitle className="text-white">
							{newIsActive ? "Activate" : "Deactivate"} Tenant
						</DialogTitle>
						<DialogDescription className="text-[#8b949e]">
							Are you sure you want to {newIsActive ? "activate" : "deactivate"}{" "}
							<span className="text-white font-medium">
								{selectedTenant?.name}
							</span>
							?
							{!newIsActive && (
								<span className="block mt-2 text-amber-400">
									This will prevent the store from processing orders.
								</span>
							)}
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setStatusDialogOpen(false)}
							className="bg-transparent border-[#30363d] text-white hover:bg-[#21262d]"
						>
							Cancel
						</Button>
						<Button
							onClick={handleStatusChange}
							className={
								!newIsActive
									? "bg-amber-600 hover:bg-amber-700"
									: "bg-green-600 hover:bg-green-700"
							}
						>
							{newIsActive ? "Activate" : "Deactivate"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent className="bg-[#161b22] border-[#30363d]">
					<DialogHeader>
						<DialogTitle className="text-white">Delete Tenant</DialogTitle>
						<DialogDescription className="text-[#8b949e]">
							Are you sure you want to permanently delete{" "}
							<span className="text-white font-medium">
								{selectedTenant?.name}
							</span>
							?
							<span className="block mt-2 text-red-400">
								This action cannot be undone. All store data including products,
								orders, and customers will be permanently deleted.
							</span>
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setDeleteDialogOpen(false)}
							className="bg-transparent border-[#30363d] text-white hover:bg-[#21262d]"
						>
							Cancel
						</Button>
						<Button
							onClick={handleDelete}
							className="bg-red-600 hover:bg-red-700"
						>
							Delete Permanently
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

function TenantStatusBadge({ isActive }: { isActive: boolean }) {
	if (isActive) {
		return (
			<Badge className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/10">
				Active
			</Badge>
		);
	}
	return (
		<Badge className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/10">
			Inactive
		</Badge>
	);
}

function formatDate(dateString: string) {
	return new Intl.DateTimeFormat("bg-BG", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(new Date(dateString));
}
