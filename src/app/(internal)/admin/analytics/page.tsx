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
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function AnalyticsPage() {
	const topProducts = [
		{ name: `MacBook Pro 16"`, revenue: `$512,460`, sales: 234, growth: 23 },
		{ name: `iPhone 15 Pro Max`, revenue: `$453,600`, sales: 567, growth: 18 },
		{ name: `AirPods Pro`, revenue: `$222,750`, sales: 891, growth: 12 },
		{ name: `iPad Air`, revenue: `$206,550`, sales: 345, growth: 8 },
		{ name: `Apple Watch Ultra`, revenue: `$187,200`, sales: 234, growth: -5 },
	];

	const topCategories = [
		{ name: `Electronics`, revenue: `$1,234,567`, orders: 2345, share: 45 },
		{ name: `Audio`, revenue: `$456,789`, orders: 1234, share: 20 },
		{ name: `Wearables`, revenue: `$345,678`, orders: 890, share: 15 },
		{ name: `Accessories`, revenue: `$234,567`, orders: 567, share: 12 },
		{ name: `Tablets`, revenue: `$123,456`, orders: 234, share: 8 },
	];

	const recentActivity = [
		{
			id: `1`,
			action: `New order`,
			details: `#3210 - Sofia Martinez - $329.00`,
			time: `2 minutes ago`,
		},
		{
			id: `2`,
			action: `Product updated`,
			details: `MacBook Pro 16" - Stock updated`,
			time: `15 minutes ago`,
		},
		{
			id: `3`,
			action: `New customer`,
			details: `Ivan Petrov registered`,
			time: `1 hour ago`,
		},
		{
			id: `4`,
			action: `Order shipped`,
			details: `#3208 - Elena Dimitrova`,
			time: `2 hours ago`,
		},
		{
			id: `5`,
			action: `Review posted`,
			details: `5 stars - iPhone 15 Pro Max`,
			time: `3 hours ago`,
		},
	];

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
				<Select defaultValue="30days">
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
						<p className="text-2xl font-bold">$2,456,789</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							<TrendingUp className="h-3 w-3 text-green-600" />
							<span className="text-green-600">+23.5%</span> from last month
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
						<p className="text-2xl font-bold">5,678</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							<TrendingUp className="h-3 w-3 text-green-600" />
							<span className="text-green-600">+18.2%</span> from last month
						</p>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between space-y-0 pb-2">
						<h3 className="text-sm font-medium text-muted-foreground">
							Conversion Rate
						</h3>
						<ShoppingBag className="h-4 w-4 text-muted-foreground" />
					</div>
					<div className="space-y-1">
						<p className="text-2xl font-bold">3.24%</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							<TrendingUp className="h-3 w-3 text-green-600" />
							<span className="text-green-600">+0.5%</span> from last month
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
						<p className="text-2xl font-bold">$432.50</p>
						<p className="text-xs text-muted-foreground flex items-center gap-1">
							<TrendingDown className="h-3 w-3 text-red-600" />
							<span className="text-red-600">-2.3%</span> from last month
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
							<p className="text-xl font-bold">234</p>
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
							<p className="text-xl font-bold">8,456</p>
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
							<p className="text-xl font-bold">45,678</p>
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
							<p className="text-xl font-bold">34.5%</p>
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
						{topProducts.map((product, index) => (
							<div
								key={product.name}
								className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
							>
								<div className="flex items-center gap-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
										{index + 1}
									</div>
									<div>
										<p className="font-medium text-sm">{product.name}</p>
										<p className="text-xs text-muted-foreground">
											{product.sales} sales
										</p>
									</div>
								</div>
								<div className="text-right">
									<p className="font-semibold text-sm">{product.revenue}</p>
									<p
										className={`text-xs flex items-center gap-1 justify-end ${
											product.growth > 0 ? `text-green-600` : `text-red-600`
										}`}
									>
										{product.growth > 0 ? (
											<TrendingUp className="h-3 w-3" />
										) : (
											<TrendingDown className="h-3 w-3" />
										)}
										{Math.abs(product.growth)}%
									</p>
								</div>
							</div>
						))}
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
						{topCategories.map((category) => (
							<div key={category.name} className="space-y-2">
								<div className="flex items-center justify-between text-sm">
									<span className="font-medium">{category.name}</span>
									<span className="text-muted-foreground">
										{category.share}%
									</span>
								</div>
								<div className="h-2 bg-secondary rounded-full overflow-hidden">
									<div
										className="h-full bg-primary rounded-full"
										style={{ width: `${category.share}%` }}
									/>
								</div>
								<div className="flex items-center justify-between text-xs text-muted-foreground">
									<span>{category.revenue}</span>
									<span>{category.orders} orders</span>
								</div>
							</div>
						))}
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
					{recentActivity.map((activity) => (
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
					))}
				</div>
			</Card>
		</div>
	);
}
