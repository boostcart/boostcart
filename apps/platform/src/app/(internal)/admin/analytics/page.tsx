"use client";

import {
	DollarSign,
	Eye,
	Package,
	ShoppingBag,
	ShoppingCart,
	TrendingDown,
	TrendingUp,
	Users,
} from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	getAnalyticsOverview,
	getRecentActivity,
	getTopCategories,
	getTopProducts,
} from "@/server/api/internal/analytics";

type Period = "7days" | "30days" | "90days" | "year";
type Overview = Awaited<ReturnType<typeof getAnalyticsOverview>>;
type TopProduct = Awaited<ReturnType<typeof getTopProducts>>[number];
type TopCategory = Awaited<ReturnType<typeof getTopCategories>>[number];
type Activity = Awaited<ReturnType<typeof getRecentActivity>>[number];

function formatCurrency(amount: number, currency = "EUR"): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(amount);
}

function formatNumber(num: number): string {
	return new Intl.NumberFormat("en-US").format(num);
}

export default function AnalyticsPage() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [period, setPeriod] = React.useState<Period>("30days");
	const [overview, setOverview] = React.useState<Overview | null>(null);
	const [topProducts, setTopProducts] = React.useState<TopProduct[]>([]);
	const [topCategories, setTopCategories] = React.useState<TopCategory[]>([]);
	const [recentActivity, setRecentActivity] = React.useState<Activity[]>([]);

	const fetchAnalytics = React.useCallback(async (selectedPeriod: Period) => {
		setIsLoading(true);
		try {
			const [overviewData, productsData, categoriesData, activityData] =
				await Promise.all([
					getAnalyticsOverview(selectedPeriod),
					getTopProducts(selectedPeriod, 5),
					getTopCategories(selectedPeriod, 5),
					getRecentActivity(5),
				]);

			setOverview(overviewData);
			setTopProducts(productsData);
			setTopCategories(categoriesData);
			setRecentActivity(activityData);
		} catch (error) {
			console.error("Failed to fetch analytics:", error);
			toast.error("Failed to load analytics data");
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchAnalytics(period);
	}, [period, fetchAnalytics]);

	const handlePeriodChange = (value: string) => {
		setPeriod(value as Period);
	};

	if (isLoading && !overview) {
		return (
			<div className="flex items-center justify-center min-h-100">
				<Loader size="lg" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
					<p className="text-muted-foreground mt-1">
						Track your store performance and insights
					</p>
				</div>
				<Select value={period} onValueChange={handlePeriodChange}>
					<SelectTrigger className="w-45">
						<SelectValue placeholder="Select period" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="7days">Last 7 days</SelectItem>
						<SelectItem value="30days">Last 30 days</SelectItem>
						<SelectItem value="90days">Last 90 days</SelectItem>
						<SelectItem value="year">This year</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Key Metrics */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="p-6">
					<div className="flex items-center justify-between space-y-0 pb-2">
						<h3 className="text-sm font-medium text-muted-foreground">
							Total Revenue
						</h3>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</div>
					<div className="space-y-1">
						<p className="text-2xl font-bold">
							{overview ? formatCurrency(overview.revenue.total) : "-"}
						</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							{overview && overview.revenue.growth >= 0 ? (
								<TrendingUp className="h-3 w-3 text-green-600" />
							) : (
								<TrendingDown className="h-3 w-3 text-red-600" />
							)}
							<span
								className={
									overview && overview.revenue.growth >= 0
										? "text-green-600"
										: "text-red-600"
								}
							>
								{overview
									? `${overview.revenue.growth >= 0 ? "+" : ""}${overview.revenue.growth.toFixed(1)}%`
									: "-"}
							</span>{" "}
							from last period
						</p>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between space-y-0 pb-2">
						<h3 className="text-sm font-medium text-muted-foreground">
							Total Orders
						</h3>
						<ShoppingCart className="h-4 w-4 text-muted-foreground" />
					</div>
					<div className="space-y-1">
						<p className="text-2xl font-bold">
							{overview ? formatNumber(overview.orders.total) : "-"}
						</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							{overview && overview.orders.growth >= 0 ? (
								<TrendingUp className="h-3 w-3 text-green-600" />
							) : (
								<TrendingDown className="h-3 w-3 text-red-600" />
							)}
							<span
								className={
									overview && overview.orders.growth >= 0
										? "text-green-600"
										: "text-red-600"
								}
							>
								{overview
									? `${overview.orders.growth >= 0 ? "+" : ""}${overview.orders.growth.toFixed(1)}%`
									: "-"}
							</span>{" "}
							from last period
						</p>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between space-y-0 pb-2">
						<h3 className="text-sm font-medium text-muted-foreground">
							New Customers
						</h3>
						<ShoppingBag className="h-4 w-4 text-muted-foreground" />
					</div>
					<div className="space-y-1">
						<p className="text-2xl font-bold">
							{overview ? formatNumber(overview.customers.total) : "-"}
						</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							{overview && overview.customers.growth >= 0 ? (
								<TrendingUp className="h-3 w-3 text-green-600" />
							) : (
								<TrendingDown className="h-3 w-3 text-red-600" />
							)}
							<span
								className={
									overview && overview.customers.growth >= 0
										? "text-green-600"
										: "text-red-600"
								}
							>
								{overview
									? `${overview.customers.growth >= 0 ? "+" : ""}${overview.customers.growth.toFixed(1)}%`
									: "-"}
							</span>{" "}
							from last period
						</p>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between space-y-0 pb-2">
						<h3 className="text-sm font-medium text-muted-foreground">
							Avg. Order Value
						</h3>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</div>
					<div className="space-y-1">
						<p className="text-2xl font-bold">
							{overview
								? formatCurrency(overview.averageOrderValue.total)
								: "-"}
						</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							{overview && overview.averageOrderValue.growth >= 0 ? (
								<TrendingUp className="h-3 w-3 text-green-600" />
							) : (
								<TrendingDown className="h-3 w-3 text-red-600" />
							)}
							<span
								className={
									overview && overview.averageOrderValue.growth >= 0
										? "text-green-600"
										: "text-red-600"
								}
							>
								{overview
									? `${overview.averageOrderValue.growth >= 0 ? "+" : ""}${overview.averageOrderValue.growth.toFixed(1)}%`
									: "-"}
							</span>{" "}
							from last period
						</p>
					</div>
				</Card>
			</div>

			{/* Secondary Metrics */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
							<Users className="h-5 w-5 text-blue-600 dark:text-blue-300" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground">New Customers</p>
							<p className="text-xl font-bold">
								{overview ? formatNumber(overview.customers.total) : "-"}
							</p>
						</div>
					</div>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
							<Package className="h-5 w-5 text-green-600 dark:text-green-300" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground">Products Sold</p>
							<p className="text-xl font-bold">
								{overview ? formatNumber(overview.productsSold.total) : "-"}
							</p>
						</div>
					</div>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
							<Eye className="h-5 w-5 text-purple-600 dark:text-purple-300" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground">Store Views</p>
							<p className="text-xl font-bold">-</p>
						</div>
					</div>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
							<ShoppingCart className="h-5 w-5 text-orange-600 dark:text-orange-300" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground">Cart Abandonment</p>
							<p className="text-xl font-bold">-</p>
						</div>
					</div>
				</Card>
			</div>

			{/* Charts Section */}
			<div className="grid gap-6 lg:grid-cols-7">
				{/* Top Products */}
				<Card className="lg:col-span-4 p-6">
					<div className="mb-6">
						<h2 className="text-xl font-bold">Top Products</h2>
						<p className="text-sm text-muted-foreground mt-1">
							Best performing products by revenue
						</p>
					</div>
					<div className="space-y-4">
						{topProducts.length === 0 ? (
							<p className="text-sm text-muted-foreground text-center py-8">
								No product data available for this period
							</p>
						) : (
							topProducts.map((product, index) => (
								<div
									key={product.id}
									className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
								>
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
											{index + 1}
										</div>
										<div>
											<p className="font-medium text-sm">{product.name}</p>
											<p className="text-xs text-muted-foreground">
												{formatNumber(product.sales)} sales
											</p>
										</div>
									</div>
									<div className="text-right">
										<p className="font-semibold text-sm">
											{formatCurrency(product.revenue)}
										</p>
									</div>
								</div>
							))
						)}
					</div>
				</Card>

				{/* Top Categories */}
				<Card className="lg:col-span-3 p-6">
					<div className="mb-6">
						<h2 className="text-xl font-bold">Top Categories</h2>
						<p className="text-sm text-muted-foreground mt-1">
							Categories by revenue share
						</p>
					</div>
					<div className="space-y-4">
						{topCategories.length === 0 ? (
							<p className="text-sm text-muted-foreground text-center py-8">
								No category data available for this period
							</p>
						) : (
							topCategories.map((category) => (
								<div key={category.id} className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span className="font-medium">{category.name}</span>
										<span className="text-muted-foreground">
											{category.share.toFixed(1)}%
										</span>
									</div>
									<div className="h-2 bg-secondary rounded-full overflow-hidden">
										<div
											className="h-full bg-primary rounded-full"
											style={{ width: `${Math.min(category.share, 100)}%` }}
										/>
									</div>
									<div className="flex items-center justify-between text-xs text-muted-foreground">
										<span>{formatCurrency(category.revenue)}</span>
										<span>{formatNumber(category.orders)} orders</span>
									</div>
								</div>
							))
						)}
					</div>
				</Card>
			</div>

			{/* Recent Activity */}
			<Card className="p-6">
				<div className="mb-6">
					<h2 className="text-xl font-bold">Recent Activity</h2>
					<p className="text-sm text-muted-foreground mt-1">
						Latest actions in your store
					</p>
				</div>
				<div className="space-y-4">
					{recentActivity.length === 0 ? (
						<p className="text-sm text-muted-foreground text-center py-8">
							No recent activity
						</p>
					) : (
						recentActivity.map((activity) => (
							<div
								key={activity.id}
								className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0"
							>
								<div className="h-2 w-2 rounded-full bg-primary mt-2" />
								<div className="flex-1">
									<p className="font-medium text-sm">{activity.action}</p>
									<p className="text-xs text-muted-foreground">
										{activity.details}
									</p>
								</div>
								<p className="text-xs text-muted-foreground">{activity.time}</p>
							</div>
						))
					)}
				</div>
			</Card>
		</div>
	);
}
