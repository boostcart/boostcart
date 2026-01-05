"use client";

import {
	AlertTriangle,
	Clock,
	DollarSign,
	Eye,
	Mail,
	ShoppingCart,
	Trash2,
	TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	deleteAbandonedCart,
	getAbandonedCartStats,
	getAbandonedCarts,
} from "@/server/api/internal/abandoned-carts";

interface AbandonedCart {
	id: string;
	customer: {
		id: string;
		name: string;
		email: string;
	} | null;
	sessionId: string | null;
	itemCount: number;
	totalValue: number;
	items: {
		id: string;
		productId: string;
		productName: string;
		variantSku: string | null | undefined;
		quantity: number;
		price: number;
	}[];
	abandonedAt: Date;
	createdAt: Date;
}

interface CartStats {
	totalCarts: number;
	totalValue: number;
	last24Hours: number;
	lastWeek: number;
	averageValue: number;
}

export default function AbandonedCheckoutsPage() {
	const [carts, setCarts] = useState<AbandonedCart[]>([]);
	const [stats, setStats] = useState<CartStats | null>(null);
	const [loading, setLoading] = useState(true);
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedCart, setSelectedCart] = useState<AbandonedCart | null>(null);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		loadData();
	}, []);

	async function loadData() {
		try {
			setLoading(true);
			const [cartsData, statsData] = await Promise.all([
				getAbandonedCarts(),
				getAbandonedCartStats(),
			]);
			setCarts(cartsData);
			setStats(statsData);
		} catch (error) {
			toast.error("Failed to load abandoned carts");
		} finally {
			setLoading(false);
		}
	}

	const handleView = (cart: AbandonedCart) => {
		setSelectedCart(cart);
		setViewDialogOpen(true);
	};

	const handleDeleteClick = (cart: AbandonedCart) => {
		setSelectedCart(cart);
		setDeleteDialogOpen(true);
	};

	const handleDelete = async () => {
		if (!selectedCart) return;

		try {
			setDeleting(true);
			await deleteAbandonedCart(selectedCart.id);
			setCarts((prev) => prev.filter((c) => c.id !== selectedCart.id));
			setDeleteDialogOpen(false);
			toast.success("Abandoned cart deleted");
			loadData(); // Refresh stats
		} catch (error) {
			toast.error("Failed to delete cart");
		} finally {
			setDeleting(false);
		}
	};

	const handleSendRecoveryEmail = (cart: AbandonedCart) => {
		if (cart.customer?.email) {
			toast.success(`Recovery email sent to ${cart.customer.email}`);
		} else {
			toast.error("No email address available for this cart");
		}
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("bg-BG", {
			style: "currency",
			currency: "BGN",
		}).format(amount);
	};

	const formatTimeAgo = (date: Date) => {
		const now = new Date();
		const diff = now.getTime() - new Date(date).getTime();
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const days = Math.floor(hours / 24);

		if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<Loader size="lg" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">
					Abandoned Checkouts
				</h1>
				<p className="text-muted-foreground mt-1">
					View and recover abandoned shopping carts
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<ShoppingCart className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Total Abandoned</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.totalCarts ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<DollarSign className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Potential Revenue</p>
					</div>
					<p className="text-2xl font-bold mt-1">
						{formatCurrency(stats?.totalValue ?? 0)}
					</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<Clock className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Last 24 Hours</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.last24Hours ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Average Value</p>
					</div>
					<p className="text-2xl font-bold mt-1">
						{formatCurrency(stats?.averageValue ?? 0)}
					</p>
				</Card>
			</div>

			<Card>
				{carts.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<ShoppingCart className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No abandoned carts</EmptyTitle>
							<EmptyDescription>
								When customers leave items in their cart without completing
								checkout, they&apos;ll appear here
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<p className="text-sm text-muted-foreground">
								All carts are either completed or empty
							</p>
						</EmptyContent>
					</Empty>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Customer</TableHead>
								<TableHead>Items</TableHead>
								<TableHead>Value</TableHead>
								<TableHead>Abandoned</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{carts.map((cart) => (
								<TableRow key={cart.id}>
									<TableCell>
										{cart.customer ? (
											<div>
												<p className="font-medium">{cart.customer.name}</p>
												<p className="text-sm text-muted-foreground">
													{cart.customer.email}
												</p>
											</div>
										) : (
											<p className="text-muted-foreground">Guest</p>
										)}
									</TableCell>
									<TableCell>{cart.itemCount} items</TableCell>
									<TableCell className="font-medium">
										{formatCurrency(cart.totalValue)}
									</TableCell>
									<TableCell>{formatTimeAgo(cart.abandonedAt)}</TableCell>
									<TableCell>
										<Badge variant="secondary">
											<AlertTriangle className="h-3 w-3 mr-1" />
											Abandoned
										</Badge>
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleView(cart)}
												title="View details"
											>
												<Eye className="h-4 w-4" />
											</Button>
											{cart.customer?.email && (
												<Button
													variant="ghost"
													size="icon"
													onClick={() => handleSendRecoveryEmail(cart)}
													title="Send recovery email"
												>
													<Mail className="h-4 w-4" />
												</Button>
											)}
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleDeleteClick(cart)}
												title="Delete"
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</Card>

			{/* View Dialog */}
			<Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
				<DialogContent className="max-w-2xl">
					<DialogHeader>
						<DialogTitle>Abandoned Cart Details</DialogTitle>
						<DialogDescription>
							View the items left in this abandoned cart
						</DialogDescription>
					</DialogHeader>

					{selectedCart && (
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Customer</p>
									{selectedCart.customer ? (
										<div className="mt-1">
											<p className="font-medium">
												{selectedCart.customer.name}
											</p>
											<p className="text-sm">{selectedCart.customer.email}</p>
										</div>
									) : (
										<p className="text-muted-foreground mt-1">Guest visitor</p>
									)}
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Abandoned</p>
									<p className="font-medium mt-1">
										{formatTimeAgo(selectedCart.abandonedAt)}
									</p>
								</div>
							</div>

							<div>
								<p className="text-sm text-muted-foreground mb-2">Cart Items</p>
								<div className="border rounded-lg divide-y">
									{selectedCart.items.map((item) => (
										<div
											key={item.id}
											className="p-3 flex items-center justify-between"
										>
											<div>
												<p className="font-medium">{item.productName}</p>
												{item.variantSku && (
													<p className="text-sm text-muted-foreground">
														SKU: {item.variantSku}
													</p>
												)}
											</div>
											<div className="text-right">
												<p className="font-medium">
													{formatCurrency(item.price)}
												</p>
												<p className="text-sm text-muted-foreground">
													Qty: {item.quantity}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="flex justify-between items-center pt-4 border-t">
								<p className="font-medium">Total Value</p>
								<p className="text-xl font-bold">
									{formatCurrency(selectedCart.totalValue)}
								</p>
							</div>
						</div>
					)}

					<DialogFooter>
						{selectedCart?.customer?.email && (
							<PolarisButton
								onClick={() => {
									handleSendRecoveryEmail(selectedCart);
									setViewDialogOpen(false);
								}}
							>
								<Mail className="h-4 w-4" />
								Send Recovery Email
							</PolarisButton>
						)}
						<Button variant="outline" onClick={() => setViewDialogOpen(false)}>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Abandoned Cart</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete this abandoned cart? This action
							cannot be undone.
						</DialogDescription>
					</DialogHeader>

					{selectedCart && (
						<div className="py-4">
							<p className="text-sm text-muted-foreground">
								Cart contains {selectedCart.itemCount} items worth{" "}
								{formatCurrency(selectedCart.totalValue)}
							</p>
						</div>
					)}

					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setDeleteDialogOpen(false)}
						>
							Cancel
						</Button>
						<Button
							variant="destructive"
							onClick={handleDelete}
							disabled={deleting}
						>
							{deleting ? "Deleting..." : "Delete Cart"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
