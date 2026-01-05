"use client";

import {
	DeleteIcon,
	PersonIcon,
	SearchIcon,
	ShieldCheckMarkIcon,
	ShieldPersonIcon,
} from "@shopify/polaris-icons";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
	deleteUser,
	getPlatformUsers,
	updateUserRole,
} from "@/server/api/platform/actions";

interface User {
	id: string;
	name: string | null;
	email: string;
	emailVerified: boolean;
	image: string | null;
	role: string;
	createdAt: string;
	updatedAt: string;
}

interface Pagination {
	page: number;
	limit: number;
	total: number;
	totalPages: number;
}

export default function UsersPage() {
	const [users, setUsers] = useState<User[]>([]);
	const [pagination, setPagination] = useState<Pagination | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Filters
	const [search, setSearch] = useState("");
	const [roleFilter, setRoleFilter] = useState("all");
	const [page, setPage] = useState(1);

	// Dialogs
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [roleDialogOpen, setRoleDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [newRole, setNewRole] = useState<"USER" | "ADMIN">("USER");

	const loadUsers = useCallback(async () => {
		try {
			setLoading(true);
			const data = await getPlatformUsers({
				page,
				limit: 20,
				search: search || undefined,
				role: roleFilter !== "all" ? roleFilter : undefined,
			});
			setUsers(data.users);
			setPagination(data.pagination);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load users");
		} finally {
			setLoading(false);
		}
	}, [page, search, roleFilter]);

	useEffect(() => {
		loadUsers();
	}, [loadUsers]);

	// Debounced search
	useEffect(() => {
		const timer = setTimeout(() => {
			setPage(1);
		}, 300);
		return () => clearTimeout(timer);
	}, [search]);

	const handleRoleChange = async () => {
		if (!selectedUser) return;
		try {
			await updateUserRole(selectedUser.id, newRole);
			toast.success(`User role updated to ${newRole}`);
			setRoleDialogOpen(false);
			setSelectedUser(null);
			loadUsers();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to update role");
		}
	};

	const handleDelete = async () => {
		if (!selectedUser) return;
		try {
			await deleteUser(selectedUser.id);
			toast.success(`User "${selectedUser.email}" deleted`);
			setDeleteDialogOpen(false);
			setSelectedUser(null);
			loadUsers();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to delete user");
		}
	};

	const openRoleDialog = (user: User, role: typeof newRole) => {
		setSelectedUser(user);
		setNewRole(role);
		setRoleDialogOpen(true);
	};

	const openDeleteDialog = (user: User) => {
		setSelectedUser(user);
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
				<h1 className="text-2xl font-bold text-white">Users</h1>
				<p className="text-[#8b949e]">Manage platform users and admin access</p>
			</div>

			{/* Filters */}
			<div className="flex flex-col sm:flex-row gap-3">
				<div className="relative flex-1 max-w-sm">
					<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#8b949e]" />
					<Input
						placeholder="Search users..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="pl-9 bg-[#161b22] border-[#30363d] text-white placeholder:text-[#8b949e]"
					/>
				</div>
				<Select value={roleFilter} onValueChange={setRoleFilter}>
					<SelectTrigger className="w-40 bg-[#161b22] border-[#30363d] text-white">
						<SelectValue placeholder="Role" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Roles</SelectItem>
						<SelectItem value="ADMIN">Admin</SelectItem>
						<SelectItem value="USER">User</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Table */}
			<Card className="bg-[#161b22] border-[#30363d]">
				<CardContent className="p-0">
					<Table>
						<TableHeader>
							<TableRow className="border-[#30363d] hover:bg-transparent">
								<TableHead className="text-[#8b949e]">User</TableHead>
								<TableHead className="text-[#8b949e]">Email</TableHead>
								<TableHead className="text-[#8b949e]">Role</TableHead>
								<TableHead className="text-[#8b949e]">Verified</TableHead>
								<TableHead className="text-[#8b949e]">Joined</TableHead>
								<TableHead className="text-[#8b949e] text-right">
									Actions
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{loading ? (
								<TableRow className="border-[#30363d]">
									<TableCell
										colSpan={6}
										className="text-center text-[#8b949e] py-8"
									>
										Loading...
									</TableCell>
								</TableRow>
							) : users.length === 0 ? (
								<TableRow className="border-[#30363d]">
									<TableCell
										colSpan={6}
										className="text-center text-[#8b949e] py-8"
									>
										No users found
									</TableCell>
								</TableRow>
							) : (
								users.map((user) => (
									<TableRow
										key={user.id}
										className="border-[#30363d] hover:bg-[#21262d]"
									>
										<TableCell>
											<div className="flex items-center gap-3">
												<Avatar className="size-8 rounded-lg">
													<AvatarImage
														src={user.image || ""}
														alt={user.name || ""}
														className="rounded-lg"
													/>
													<AvatarFallback className="rounded-lg bg-[#30363d] text-white">
														{user.name?.charAt(0).toUpperCase() || (
															<PersonIcon className="size-4" />
														)}
													</AvatarFallback>
												</Avatar>
												<span className="font-medium text-white">
													{user.name || "No name"}
												</span>
											</div>
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{user.email}
										</TableCell>
										<TableCell>
											<UserRoleBadge role={user.role} />
										</TableCell>
										<TableCell>
											{user.emailVerified ? (
												<Badge className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/10">
													Verified
												</Badge>
											) : (
												<Badge className="bg-gray-500/10 text-gray-400 border-gray-500/20 hover:bg-gray-500/10">
													Pending
												</Badge>
											)}
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{formatDate(user.createdAt)}
										</TableCell>
										<TableCell className="text-right">
											<div className="flex items-center justify-end gap-1">
												{user.role === "USER" ? (
													<Button
														variant="ghost"
														size="sm"
														className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10"
														onClick={() => openRoleDialog(user, "ADMIN")}
														title="Make Admin"
													>
														<ShieldCheckMarkIcon className="size-4" />
													</Button>
												) : (
													<Button
														variant="ghost"
														size="sm"
														className="text-gray-400 hover:text-gray-300 hover:bg-gray-400/10"
														onClick={() => openRoleDialog(user, "USER")}
														title="Remove Admin"
													>
														<ShieldPersonIcon className="size-4" />
													</Button>
												)}
												<Button
													variant="ghost"
													size="sm"
													className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
													onClick={() => openDeleteDialog(user)}
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
						{pagination.total} users
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

			{/* Role Change Dialog */}
			<Dialog open={roleDialogOpen} onOpenChange={setRoleDialogOpen}>
				<DialogContent className="bg-[#161b22] border-[#30363d]">
					<DialogHeader>
						<DialogTitle className="text-white">
							{newRole === "ADMIN"
								? "Grant Admin Access"
								: "Remove Admin Access"}
						</DialogTitle>
						<DialogDescription className="text-[#8b949e]">
							Are you sure you want to{" "}
							{newRole === "ADMIN"
								? "grant admin access to"
								: "remove admin access from"}{" "}
							<span className="text-white font-medium">
								{selectedUser?.email}
							</span>
							?
							{newRole === "ADMIN" && (
								<span className="block mt-2 text-amber-400">
									This will give full platform administration access.
								</span>
							)}
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setRoleDialogOpen(false)}
							className="bg-transparent border-[#30363d] text-white hover:bg-[#21262d]"
						>
							Cancel
						</Button>
						<Button
							onClick={handleRoleChange}
							className={
								newRole === "ADMIN"
									? "bg-amber-600 hover:bg-amber-700"
									: "bg-gray-600 hover:bg-gray-700"
							}
						>
							{newRole === "ADMIN" ? "Grant Admin" : "Remove Admin"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent className="bg-[#161b22] border-[#30363d]">
					<DialogHeader>
						<DialogTitle className="text-white">Delete User</DialogTitle>
						<DialogDescription className="text-[#8b949e]">
							Are you sure you want to permanently delete{" "}
							<span className="text-white font-medium">
								{selectedUser?.email}
							</span>
							?
							<span className="block mt-2 text-red-400">
								This action cannot be undone. The user will lose access to all
								their data and stores.
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

function UserRoleBadge({ role }: { role: string }) {
	switch (role) {
		case "ADMIN":
			return (
				<Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/10">
					Admin
				</Badge>
			);
		case "USER":
			return (
				<Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/10">
					User
				</Badge>
			);
		default:
			return (
				<Badge className="bg-gray-500/10 text-gray-400 border-gray-500/20 hover:bg-gray-500/10">
					{role}
				</Badge>
			);
	}
}

function formatDate(dateString: string) {
	return new Intl.DateTimeFormat("bg-BG", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(new Date(dateString));
}
