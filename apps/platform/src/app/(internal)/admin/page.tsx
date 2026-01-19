"use client";

import {
	AlertCircle,
	BarChart3,
	DollarSign,
	Package,
	ShoppingCart,
	Star,
	Tag,
	TrendingDown,
	TrendingUp,
	Users,
} from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTenant } from "@/providers/tenant-provider";
import { useDialogStore } from "@/stores/dialog-store";
import { DiscountFormDialog } from "./discounts/_components/discount-dialogs";
import { ProductFormDialog } from "./products/_components/product-dialogs";

function formatCurrency(amount: number, currency = "EUR") {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	}).format(amount);
}

function getDaysRemaining(date: Date | null): number | null {
	if (!date) return null;
	const now = new Date();
	const diff = new Date(date).getTime() - now.getTime();
	return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function AdminDashboard() {
	const { tenant, stats, isLoading } = useTenant();
	const openDialog = useDialogStore((state) => state.openDialog);
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const isAddProductOpen = useDialogStore((state) => state.isAddProductOpen);
	const isAddDiscountOpen = useDialogStore((state) => state.isAddDiscountOpen);

	const trialDaysRemaining = getDaysRemaining(tenant?.trialEndsAt ?? null);

	const dashboardStats = [
		{
			title: `Total Revenue`,
			value: formatCurrency(stats.totalRevenue, tenant?.currency ?? "EUR"),
			change: `From paid orders`,
			trend: `up`,
			icon: DollarSign,
		},
		{
			title: `Orders`,
			value: stats.totalOrders.toString(),
			change: `Total orders`,
			trend: `up`,
			icon: ShoppingCart,
		},
		{
			title: `Products`,
			value: stats.totalProducts.toString(),
			change: `In your catalog`,
			trend: `up`,
			icon: Package,
		},
		{
			title: `Customers`,
			value: stats.totalCustomers.toString(),
			change: `Registered customers`,
			trend: `up`,
			icon: Users,
		},
	];

	const recentOrders = [
		{
			id: `#3210`,
			customer: `Sofia Martinez`,
			status: `CONFIRMED`,
			total: `$329.00`,
			date: `2 min ago`,
		},
		{
			id: `#3209`,
			customer: `Ivan Petrov`,
			status: `PROCESSING`,
			total: `$149.00`,
			date: `15 min ago`,
		},
		{
			id: `#3208`,
			customer: `Elena Dimitrova`,
			status: `SHIPPED`,
			total: `$599.00`,
			date: `1 hour ago`,
		},
		{
			id: `#3207`,
			customer: `Georgi Ivanov`,
			status: `DELIVERED`,
			total: `$89.00`,
			date: `3 hours ago`,
		},
		{
			id: `#3206`,
			customer: `Maria Popova`,
			status: `PENDING`,
			total: `$249.00`,
			date: `5 hours ago`,
		},
	];

	const topProducts = [
		{
			name: `MacBook Pro 16" M3`,
			sales: 234,
			revenue: `$512,460`,
			category: `Electronics`,
		},
		{
			name: `iPhone 15 Pro Max`,
			sales: 567,
			revenue: `$453,600`,
			category: `Electronics`,
		},
		{
			name: `AirPods Pro`,
			sales: 891,
			revenue: `$222,750`,
			category: `Audio`,
		},
		{ name: `iPad Air`, sales: 345, revenue: `$206,550`, category: `Tablets` },
		{
			name: `Apple Watch Ultra`,
			sales: 234,
			revenue: `$187,200`,
			category: `Wearables`,
		},
	];

	return (
		<div className="space-y-6">
			{/* Trial Banner */}
			{tenant?.billingStatus === "TRIAL" && trialDaysRemaining !== null && (
				<Alert variant={trialDaysRemaining <= 3 ? "destructive" : "default"}>
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Trial Period</AlertTitle>
					<AlertDescription>
						{trialDaysRemaining > 0 ? (
							<>
								Your free trial ends in{" "}
								<strong>{trialDaysRemaining} days</strong>.{" "}
								<Link
									href="/admin/settings/billing"
									className="underline font-medium"
								>
									Upgrade now
								</Link>{" "}
								to keep your store running.
							</>
						) : (
							<>
								Your trial has expired.{" "}
								<Link
									href="/admin/settings/billing"
									className="underline font-medium"
								>
									Upgrade now
								</Link>{" "}
								to continue using your store.
							</>
						)}
					</AlertDescription>
				</Alert>
			)}

			<div className="flex items-center justify-between">
				<div>
					<div className="flex items-center gap-3">
						<h1 className="text-3xl font-bold tracking-tight">
							{isLoading ? "Loading..." : (tenant?.name ?? "Dashboard")}
						</h1>
						{tenant && (
							<Badge variant="outline" className="text-xs">
								{tenant.slug}.boostcart.bg
							</Badge>
						)}
					</div>
					<p className="text-muted-foreground mt-1">
						Overview of your store performance
					</p>
				</div>
			</div>

			{/* Stats Grid */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{dashboardStats.map((stat) => {
					const Icon = stat.icon;
					return (
						<Card key={stat.title} className="p-6">
							<div className="flex items-center justify-between space-y-0 pb-2">
								<h3 className="text-sm font-medium text-muted-foreground">
									{stat.title}
								</h3>
								<Icon className="h-4 w-4 text-muted-foreground" />
							</div>
							<div className="space-y-1">
								<p className="text-2xl font-bold">
									{isLoading ? "—" : stat.value}
								</p>
								<p className="text-xs text-muted-foreground flex items-center gap-1">
									{stat.trend === `up` ? (
										<TrendingUp className="h-3 w-3 text-green-600" />
									) : (
										<TrendingDown className="h-3 w-3 text-red-600" />
									)}
									{stat.change}
								</p>
							</div>
						</Card>
					);
				})}
			</div>

			{/* Main Content Grid */}
			<div className="grid gap-6 lg:grid-cols-7">
				{/* Recent Orders */}
				<Card className="lg:col-span-4 p-6">
					<div className="flex items-center justify-between mb-6">
						<div>
							<h2 className="text-xl font-bold">Recent Orders</h2>
							<p className="text-sm text-muted-foreground mt-1">
								You have {recentOrders.length} orders today
							</p>
						</div>
						<Link
							href="/admin/orders"
							className="text-sm font-medium text-primary hover:underline"
						>
							View all
						</Link>
					</div>
					<div className="space-y-4">
						{recentOrders.map((order) => (
							<div
								key={order.id}
								className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
							>
								<div className="space-y-1">
									<div className="flex items-center gap-3">
										<p className="font-medium">{order.id}</p>
										<span
											className={`px-2 py-0.5 text-xs font-medium rounded-full ${
												order.status === `CONFIRMED`
													? `bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300`
													: order.status === `PROCESSING`
														? `bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300`
														: order.status === `SHIPPED`
															? `bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300`
															: order.status === `DELIVERED`
																? `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`
																: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`
											}`}
										>
											{order.status}
										</span>
									</div>
									<p className="text-sm text-muted-foreground">
										{order.customer}
									</p>
								</div>
								<div className="text-right">
									<p className="font-medium">{order.total}</p>
									<p className="text-xs text-muted-foreground">{order.date}</p>
								</div>
							</div>
						))}
					</div>
				</Card>

				{/* Top Products */}
				<Card className="lg:col-span-3 p-6">
					<div className="mb-6">
						<h2 className="text-xl font-bold">Top Products</h2>
						<p className="text-sm text-muted-foreground mt-1">
							Best selling products this month
						</p>
					</div>
					<div className="space-y-4">
						{topProducts.map((product, index) => (
							<div
								key={product.name}
								className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
									{index + 1}
								</div>
								<div className="flex-1 space-y-1">
									<p className="font-medium text-sm">{product.name}</p>
									<p className="text-xs text-muted-foreground">
										{product.category}
									</p>
									<p className="text-xs text-muted-foreground">
										{product.sales} sales
									</p>
								</div>
								<p className="font-semibold text-sm">{product.revenue}</p>
							</div>
						))}
					</div>
				</Card>
			</div>

			{/* Quick Actions */}
			<div>
				<h2 className="text-xl font-bold mb-4">Quick Actions</h2>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<button
						type="button"
						onClick={() => openDialog("isAddProductOpen")}
						className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors text-left"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
							<Package className="h-5 w-5 text-blue-600 dark:text-blue-300" />
						</div>
						<div>
							<p className="font-medium">Add Product</p>
							<p className="text-xs text-muted-foreground">Create new item</p>
						</div>
					</button>
					<Link
						href="/admin/reviews"
						className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors text-left"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
							<Star className="h-5 w-5 text-green-600 dark:text-green-300" />
						</div>
						<div>
							<p className="font-medium">See Reviews</p>
							<p className="text-xs text-muted-foreground">View feedback</p>
						</div>
					</Link>
					<button
						type="button"
						onClick={() => openDialog("isAddDiscountOpen")}
						className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors text-left"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
							<Tag className="h-5 w-5 text-purple-600 dark:text-purple-300" />
						</div>
						<div>
							<p className="font-medium">Add Discount</p>
							<p className="text-xs text-muted-foreground">Create promo</p>
						</div>
					</button>
					<Link
						href="/admin/analytics"
						className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors text-left"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
							<BarChart3 className="h-5 w-5 text-orange-600 dark:text-orange-300" />
						</div>
						<div>
							<p className="font-medium">See Full Analytics</p>
							<p className="text-xs text-muted-foreground">View insights</p>
						</div>
					</Link>
				</div>
			</div>

			{/* CRUD Dialogs */}
			<ProductFormDialog
				open={isAddProductOpen}
				onOpenChange={(open) =>
					open
						? openDialog("isAddProductOpen")
						: closeDialog("isAddProductOpen")
				}
				mode="create"
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
		</div>
	);
}
