"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { requireAdminTenant } from "@/server/tenant";

async function requireStoreAccess() {
	const session = await auth();
	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const tenant = await requireAdminTenant();

	const staffRecord = await db.tenantStaff.findFirst({
		where: {
			userId: session.user.id,
			tenantId: tenant.id,
		},
	});

	if (!staffRecord) {
		throw new Error("Forbidden: No access to this store");
	}

	return {
		userId: session.user.id,
		tenantId: tenant.id,
		role: staffRecord.role,
	};
}

// Get date range for analytics
function getDateRange(period: string): { startDate: Date; endDate: Date } {
	const endDate = new Date();
	const startDate = new Date();

	switch (period) {
		case "7days":
			startDate.setDate(endDate.getDate() - 7);
			break;
		case "30days":
			startDate.setDate(endDate.getDate() - 30);
			break;
		case "90days":
			startDate.setDate(endDate.getDate() - 90);
			break;
		case "year":
			startDate.setFullYear(endDate.getFullYear() - 1);
			break;
		default:
			startDate.setDate(endDate.getDate() - 30);
	}

	return { startDate, endDate };
}

// Get overview stats
export async function getAnalyticsOverview(period = "30days") {
	const { tenantId } = await requireStoreAccess();
	const { startDate, endDate } = getDateRange(period);

	// Get previous period for comparison
	const periodLength = endDate.getTime() - startDate.getTime();
	const previousStartDate = new Date(startDate.getTime() - periodLength);
	const previousEndDate = startDate;

	// Current period orders
	const currentOrders = await db.order.findMany({
		where: {
			tenantId,
			createdAt: {
				gte: startDate,
				lte: endDate,
			},
		},
		select: {
			id: true,
			totalAmount: true,
			status: true,
		},
	});

	// Previous period orders
	const previousOrders = await db.order.findMany({
		where: {
			tenantId,
			createdAt: {
				gte: previousStartDate,
				lte: previousEndDate,
			},
		},
		select: {
			id: true,
			totalAmount: true,
		},
	});

	// Current period customers
	const currentCustomers = await db.customer.count({
		where: {
			tenantId,
			createdAt: {
				gte: startDate,
				lte: endDate,
			},
		},
	});

	// Previous period customers
	const previousCustomers = await db.customer.count({
		where: {
			tenantId,
			createdAt: {
				gte: previousStartDate,
				lte: previousEndDate,
			},
		},
	});

	// Current period products
	const currentProducts = await db.product.count({
		where: {
			tenantId,
			createdAt: {
				gte: startDate,
				lte: endDate,
			},
		},
	});

	// Total products
	const totalProducts = await db.product.count({
		where: { tenantId },
	});

	// Get products sold in current period
	const currentOrderItems = await db.orderItem.findMany({
		where: {
			order: {
				tenantId,
				createdAt: {
					gte: startDate,
					lte: endDate,
				},
			},
		},
		select: {
			quantity: true,
		},
	});

	// Get products sold in previous period
	const previousOrderItems = await db.orderItem.findMany({
		where: {
			order: {
				tenantId,
				createdAt: {
					gte: previousStartDate,
					lte: previousEndDate,
				},
			},
		},
		select: {
			quantity: true,
		},
	});

	const currentProductsSold = currentOrderItems.reduce(
		(sum, item) => sum + item.quantity,
		0,
	);
	const previousProductsSold = previousOrderItems.reduce(
		(sum, item) => sum + item.quantity,
		0,
	);

	const productsSoldGrowth =
		previousProductsSold > 0
			? ((currentProductsSold - previousProductsSold) / previousProductsSold) *
				100
			: 0;

	// Calculate metrics
	const currentRevenue = currentOrders.reduce(
		(sum, order) => sum + Number(order.totalAmount),
		0,
	);
	const previousRevenue = previousOrders.reduce(
		(sum, order) => sum + Number(order.totalAmount),
		0,
	);

	const revenueGrowth =
		previousRevenue > 0
			? ((currentRevenue - previousRevenue) / previousRevenue) * 100
			: 0;

	const ordersGrowth =
		previousOrders.length > 0
			? ((currentOrders.length - previousOrders.length) /
					previousOrders.length) *
				100
			: 0;

	const customersGrowth =
		previousCustomers > 0
			? ((currentCustomers - previousCustomers) / previousCustomers) * 100
			: 0;

	const currentAverageOrderValue =
		currentOrders.length > 0 ? currentRevenue / currentOrders.length : 0;

	const previousAverageOrderValue =
		previousOrders.length > 0 ? previousRevenue / previousOrders.length : 0;

	const averageOrderValueGrowth =
		previousAverageOrderValue > 0
			? ((currentAverageOrderValue - previousAverageOrderValue) /
					previousAverageOrderValue) *
				100
			: 0;

	return {
		revenue: {
			total: currentRevenue,
			previous: previousRevenue,
			growth: Math.round(revenueGrowth * 10) / 10,
		},
		orders: {
			total: currentOrders.length,
			previous: previousOrders.length,
			growth: Math.round(ordersGrowth * 10) / 10,
		},
		customers: {
			total: currentCustomers,
			previous: previousCustomers,
			growth: Math.round(customersGrowth * 10) / 10,
		},
		products: {
			total: totalProducts,
			new: currentProducts,
		},
		productsSold: {
			total: currentProductsSold,
			previous: previousProductsSold,
			growth: Math.round(productsSoldGrowth * 10) / 10,
		},
		averageOrderValue: {
			total: Math.round(currentAverageOrderValue * 100) / 100,
			previous: Math.round(previousAverageOrderValue * 100) / 100,
			growth: Math.round(averageOrderValueGrowth * 10) / 10,
		},
	};
}

// Get top products by revenue
export async function getTopProducts(period = "30days", limit = 5) {
	const { tenantId } = await requireStoreAccess();
	const { startDate, endDate } = getDateRange(period);

	// Get order items with product info
	const orderItems = await db.orderItem.findMany({
		where: {
			order: {
				tenantId,
				createdAt: {
					gte: startDate,
					lte: endDate,
				},
			},
		},
		include: {
			product: {
				select: {
					id: true,
					slug: true,
					translations: {
						select: {
							name: true,
						},
						take: 1,
					},
				},
			},
		},
	});

	// Aggregate by product
	const productStats = new Map<
		string,
		{ name: string; revenue: number; sales: number }
	>();

	for (const item of orderItems) {
		if (!item.product) continue;

		const productId = item.product.id;
		const productName = item.product.translations[0]?.name ?? item.product.slug;
		const revenue = Number(item.price) * item.quantity;

		const existing = productStats.get(productId);
		if (existing) {
			existing.revenue += revenue;
			existing.sales += item.quantity;
		} else {
			productStats.set(productId, {
				name: productName,
				revenue,
				sales: item.quantity,
			});
		}
	}

	// Sort by revenue and take top N
	const topProducts = Array.from(productStats.entries())
		.map(([id, stats]) => ({
			id,
			...stats,
		}))
		.sort((a, b) => b.revenue - a.revenue)
		.slice(0, limit);

	return topProducts;
}

// Get top categories by revenue
export async function getTopCategories(period = "30days", limit = 5) {
	const { tenantId } = await requireStoreAccess();
	const { startDate, endDate } = getDateRange(period);

	// Get order items with product and category info
	const orderItems = await db.orderItem.findMany({
		where: {
			order: {
				tenantId,
				createdAt: {
					gte: startDate,
					lte: endDate,
				},
			},
		},
		include: {
			product: {
				select: {
					id: true,
					categoryId: true,
					category: {
						select: {
							id: true,
							slug: true,
							translations: {
								select: {
									name: true,
								},
								take: 1,
							},
						},
					},
				},
			},
		},
	});

	// Aggregate by category
	const categoryStats = new Map<
		string,
		{ name: string; revenue: number; orders: Set<string> }
	>();

	for (const item of orderItems) {
		if (!item.product?.category) continue;

		const categoryId = item.product.category.id;
		const categoryName =
			item.product.category.translations[0]?.name ?? item.product.category.slug;
		const revenue = Number(item.price) * item.quantity;

		const existing = categoryStats.get(categoryId);
		if (existing) {
			existing.revenue += revenue;
			existing.orders.add(item.orderId);
		} else {
			categoryStats.set(categoryId, {
				name: categoryName,
				revenue,
				orders: new Set([item.orderId]),
			});
		}
	}

	// Calculate total revenue for percentage
	const totalRevenue = Array.from(categoryStats.values()).reduce(
		(sum, stats) => sum + stats.revenue,
		0,
	);

	// Sort by revenue and take top N
	const topCategories = Array.from(categoryStats.entries())
		.map(([id, stats]) => ({
			id,
			name: stats.name,
			revenue: stats.revenue,
			orders: stats.orders.size,
			share:
				totalRevenue > 0 ? Math.round((stats.revenue / totalRevenue) * 100) : 0,
		}))
		.sort((a, b) => b.revenue - a.revenue)
		.slice(0, limit);

	return topCategories;
}

// Get recent activity
export async function getRecentActivity(limit = 10) {
	const { tenantId } = await requireStoreAccess();

	// Get recent orders
	const recentOrders = await db.order.findMany({
		where: { tenantId },
		orderBy: { createdAt: "desc" },
		take: limit,
		select: {
			id: true,
			orderNumber: true,
			totalAmount: true,
			status: true,
			createdAt: true,
			customer: {
				select: {
					firstName: true,
					lastName: true,
					email: true,
				},
			},
		},
	});

	// Get recent customers
	const recentCustomers = await db.customer.findMany({
		where: { tenantId },
		orderBy: { createdAt: "desc" },
		take: limit,
		select: {
			id: true,
			firstName: true,
			lastName: true,
			email: true,
			createdAt: true,
		},
	});

	// Get recent reviews
	const recentReviews = await db.review.findMany({
		where: { tenantId },
		orderBy: { createdAt: "desc" },
		take: limit,
		select: {
			id: true,
			rating: true,
			createdAt: true,
			product: {
				select: {
					slug: true,
					translations: {
						select: {
							name: true,
						},
						take: 1,
					},
				},
			},
		},
	});

	// Combine and sort by date
	type Activity = {
		id: string;
		type: "order" | "customer" | "review";
		action: string;
		details: string;
		timestamp: Date;
	};

	const activities: Activity[] = [];

	for (const order of recentOrders) {
		const customerName = order.customer
			? `${order.customer.firstName ?? ""} ${order.customer.lastName ?? ""}`.trim() ||
				order.customer.email
			: "Guest";

		activities.push({
			id: `order-${order.id}`,
			type: "order",
			action:
				order.status === "PENDING"
					? "New order"
					: `Order ${order.status.toLowerCase()}`,
			details: `#${order.orderNumber} - ${customerName} - $${Number(order.totalAmount).toFixed(2)}`,
			timestamp: order.createdAt,
		});
	}

	for (const customer of recentCustomers) {
		const customerName =
			`${customer.firstName ?? ""} ${customer.lastName ?? ""}`.trim() ||
			customer.email;

		activities.push({
			id: `customer-${customer.id}`,
			type: "customer",
			action: "New customer",
			details: `${customerName} registered`,
			timestamp: customer.createdAt,
		});
	}

	for (const review of recentReviews) {
		const productName =
			review.product.translations[0]?.name ?? review.product.slug;

		activities.push({
			id: `review-${review.id}`,
			type: "review",
			action: "Review posted",
			details: `${review.rating} stars - ${productName}`,
			timestamp: review.createdAt,
		});
	}

	// Sort by timestamp and take top N
	activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

	return activities.slice(0, limit).map((activity) => ({
		...activity,
		time: getRelativeTime(activity.timestamp),
	}));
}

// Helper function to get relative time
function getRelativeTime(date: Date): string {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffMins = Math.floor(diffMs / 60000);
	const diffHours = Math.floor(diffMs / 3600000);
	const diffDays = Math.floor(diffMs / 86400000);

	if (diffMins < 1) return "Just now";
	if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
	if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
	if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

	return date.toLocaleDateString();
}

// Get orders by status
export async function getOrdersByStatus(period = "30days") {
	const { tenantId } = await requireStoreAccess();
	const { startDate, endDate } = getDateRange(period);

	const orders = await db.order.groupBy({
		by: ["status"],
		where: {
			tenantId,
			createdAt: {
				gte: startDate,
				lte: endDate,
			},
		},
		_count: {
			id: true,
		},
	});

	return orders.map((o) => ({
		status: o.status,
		count: o._count.id,
	}));
}

// Get revenue by day for chart
export async function getRevenueByDay(period = "30days") {
	const { tenantId } = await requireStoreAccess();
	const { startDate, endDate } = getDateRange(period);

	const orders = await db.order.findMany({
		where: {
			tenantId,
			createdAt: {
				gte: startDate,
				lte: endDate,
			},
		},
		select: {
			totalAmount: true,
			createdAt: true,
		},
		orderBy: {
			createdAt: "asc",
		},
	});

	// Group by day
	const dailyRevenue = new Map<string, number>();

	for (const order of orders) {
		const day = order.createdAt.toISOString().split("T")[0];
		if (!day) continue;
		const amount = Number(order.totalAmount);

		dailyRevenue.set(day, (dailyRevenue.get(day) ?? 0) + amount);
	}

	return Array.from(dailyRevenue.entries()).map(([date, revenue]) => ({
		date,
		revenue: Math.round(revenue * 100) / 100,
	}));
}
