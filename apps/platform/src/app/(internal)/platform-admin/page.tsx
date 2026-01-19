"use client";

import {
	ChartVerticalIcon,
	OrderIcon,
	PersonIcon,
	ProductIcon,
	StoreIcon,
} from "@shopify/polaris-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getPlatformStats } from "@/server/api/platform/actions";

interface PlatformStats {
	totalTenants: number;
	activeTenants: number;
	totalUsers: number;
	totalProducts: number;
	totalOrders: number;
	totalRevenue: number;
	recentTenants: Array<{
		id: string;
		name: string;
		slug: string;
		isActive: boolean;
		createdAt: string;
		_count: {
			products: number;
			orders: number;
		};
	}>;
}

export default function PlatformAdminDashboard() {
	const [stats, setStats] = useState<PlatformStats | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadStats() {
			try {
				const data = await getPlatformStats();
				setStats(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to load stats");
			} finally {
				setLoading(false);
			}
		}
		loadStats();
	}, []);

	if (loading) {
		return (
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-white">
							Platform Dashboard
						</h1>
						<p className="text-[#8b949e]">
							Overview of all tenants and platform metrics
						</p>
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{[1, 2, 3, 4].map((i) => (
						<Card key={i} className="bg-[#161b22] border-[#30363d]">
							<CardContent className="p-6">
								<div className="h-20 animate-pulse bg-[#21262d] rounded" />
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center h-64">
				<div className="text-center">
					<p className="text-red-400 text-lg">{error}</p>
					<p className="text-[#8b949e] mt-2">
						Make sure you have platform admin access.
					</p>
				</div>
			</div>
		);
	}

	const statCards = [
		{
			title: "Total Tenants",
			value: stats?.totalTenants ?? 0,
			subtitle: `${stats?.activeTenants ?? 0} active`,
			icon: StoreIcon,
			color: "text-blue-400",
			bgColor: "bg-blue-400/10",
		},
		{
			title: "Total Users",
			value: stats?.totalUsers ?? 0,
			subtitle: "Platform users",
			icon: PersonIcon,
			color: "text-green-400",
			bgColor: "bg-green-400/10",
		},
		{
			title: "Total Products",
			value: stats?.totalProducts ?? 0,
			subtitle: "Across all stores",
			icon: ProductIcon,
			color: "text-purple-400",
			bgColor: "bg-purple-400/10",
		},
		{
			title: "Total Orders",
			value: stats?.totalOrders ?? 0,
			subtitle: `${formatCurrency(stats?.totalRevenue ?? 0)} revenue`,
			icon: OrderIcon,
			color: "text-amber-400",
			bgColor: "bg-amber-400/10",
		},
	];

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-white">Platform Dashboard</h1>
					<p className="text-[#8b949e]">
						Overview of all tenants and platform metrics
					</p>
				</div>
			</div>

			{/* Stats Grid */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{statCards.map((stat) => {
					const Icon = stat.icon;
					return (
						<Card
							key={stat.title}
							className="bg-[#161b22] border-[#30363d] hover:border-[#484f58] transition-colors"
						>
							<CardContent className="p-6">
								<div className="flex items-start justify-between">
									<div>
										<p className="text-sm text-[#8b949e]">{stat.title}</p>
										<p className="text-3xl font-bold text-white mt-1">
											{stat.value.toLocaleString()}
										</p>
										<p className="text-xs text-[#8b949e] mt-1">
											{stat.subtitle}
										</p>
									</div>
									<div className={cn("p-2 rounded-lg", stat.bgColor)}>
										<Icon className={cn("size-5", stat.color)} />
									</div>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>

			{/* Recent Tenants */}
			<Card className="bg-[#161b22] border-[#30363d]">
				<CardHeader className="flex flex-row items-center justify-between">
					<CardTitle className="text-white">Recent Tenants</CardTitle>
					<Link
						href="/platform-admin/tenants"
						className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
					>
						View all →
					</Link>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow className="border-[#30363d] hover:bg-transparent">
								<TableHead className="text-[#8b949e]">Store</TableHead>
								<TableHead className="text-[#8b949e]">Slug</TableHead>
								<TableHead className="text-[#8b949e]">Status</TableHead>
								<TableHead className="text-[#8b949e]">Products</TableHead>
								<TableHead className="text-[#8b949e]">Orders</TableHead>
								<TableHead className="text-[#8b949e]">Created</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{stats?.recentTenants.length === 0 ? (
								<TableRow className="border-[#30363d]">
									<TableCell
										colSpan={6}
										className="text-center text-[#8b949e] py-8"
									>
										No tenants yet
									</TableCell>
								</TableRow>
							) : (
								stats?.recentTenants.map((tenant) => (
									<TableRow
										key={tenant.id}
										className="border-[#30363d] hover:bg-[#21262d]"
									>
										<TableCell className="font-medium text-white">
											{tenant.name}
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{tenant.slug}
										</TableCell>
										<TableCell>
											<TenantStatusBadge isActive={tenant.isActive} />
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{tenant._count.products}
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{tenant._count.orders}
										</TableCell>
										<TableCell className="text-[#8b949e]">
											{formatDate(tenant.createdAt)}
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			{/* Quick Actions */}
			<div className="grid gap-4 md:grid-cols-3">
				<Link href="/platform-admin/tenants">
					<Card className="bg-[#161b22] border-[#30363d] hover:border-blue-500/50 transition-colors cursor-pointer group">
						<CardContent className="p-6 flex items-center gap-4">
							<div className="p-3 rounded-lg bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors">
								<StoreIcon className="size-6 text-blue-400" />
							</div>
							<div>
								<p className="font-medium text-white">Manage Tenants</p>
								<p className="text-sm text-[#8b949e]">
									View, suspend, or delete stores
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>

				<Link href="/platform-admin/users">
					<Card className="bg-[#161b22] border-[#30363d] hover:border-green-500/50 transition-colors cursor-pointer group">
						<CardContent className="p-6 flex items-center gap-4">
							<div className="p-3 rounded-lg bg-green-400/10 group-hover:bg-green-400/20 transition-colors">
								<PersonIcon className="size-6 text-green-400" />
							</div>
							<div>
								<p className="font-medium text-white">Manage Users</p>
								<p className="text-sm text-[#8b949e]">
									Platform users and admin roles
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>

				<Link href="/platform-admin/analytics">
					<Card className="bg-[#161b22] border-[#30363d] hover:border-purple-500/50 transition-colors cursor-pointer group">
						<CardContent className="p-6 flex items-center gap-4">
							<div className="p-3 rounded-lg bg-purple-400/10 group-hover:bg-purple-400/20 transition-colors">
								<ChartVerticalIcon className="size-6 text-purple-400" />
							</div>
							<div>
								<p className="font-medium text-white">View Analytics</p>
								<p className="text-sm text-[#8b949e]">
									Platform-wide performance
								</p>
							</div>
						</CardContent>
					</Card>
				</Link>
			</div>
		</div>
	);
}

function TenantStatusBadge({ isActive }: { isActive: boolean }) {
	if (isActive) {
		return (
			<Badge className="bg-green-500/10 text-green-400 border-green-500/20">
				Active
			</Badge>
		);
	}
	return (
		<Badge className="bg-red-500/10 text-red-400 border-red-500/20">
			Inactive
		</Badge>
	);
}

function formatCurrency(value: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "EUR",
	}).format(value);
}

function formatDate(dateString: string) {
	return new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(new Date(dateString));
}
