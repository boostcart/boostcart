"use server";

import type { OrderStatus, PaymentStatus } from "@boostcart/database";
import {
	requireManagePermission,
	requireViewPermission,
} from "@/server/api/permissions";
import { db } from "@/server/db";

async function requireOrderViewAccess() {
	return await requireViewPermission("orders");
}

async function requireOrderManageAccess() {
	return await requireManagePermission("orders");
}

// Helper to convert Decimal fields to numbers for serialization
function serializeOrder<
	T extends {
		totalAmount: unknown;
		shippingCost: unknown;
		discountAmount: unknown;
		shippingMethod?: {
			cost: unknown;
			freeAboveAmount?: unknown;
			[key: string]: unknown;
		} | null;
		items?: Array<{
			price: unknown;
			selectedVariant?: { price?: unknown; priceAdjustment?: unknown } | null;
			product?: {
				price: unknown;
				compareAtPrice?: unknown;
				costPerItem?: unknown;
			};
		}>;
	},
>(order: T) {
	return {
		...order,
		totalAmount: Number(order.totalAmount),
		shippingCost: Number(order.shippingCost),
		discountAmount: Number(order.discountAmount),
		shippingMethod: order.shippingMethod
			? {
					...order.shippingMethod,
					cost: Number(order.shippingMethod.cost),
					freeAboveAmount: order.shippingMethod.freeAboveAmount
						? Number(order.shippingMethod.freeAboveAmount)
						: null,
				}
			: null,
		items: order.items?.map((item) => ({
			...item,
			price: Number(item.price),
			selectedVariant: item.selectedVariant
				? {
						...item.selectedVariant,
						price: item.selectedVariant.price
							? Number(item.selectedVariant.price)
							: null,
						priceAdjustment: item.selectedVariant.priceAdjustment
							? Number(item.selectedVariant.priceAdjustment)
							: 0,
					}
				: null,
			product: item.product
				? {
						...item.product,
						price: Number(item.product.price),
						compareAtPrice: item.product.compareAtPrice
							? Number(item.product.compareAtPrice)
							: null,
						costPerItem: item.product.costPerItem
							? Number(item.product.costPerItem)
							: null,
					}
				: undefined,
		})),
	};
}

export async function getOrders() {
	const { tenantId } = await requireOrderViewAccess();

	const orders = await db.order.findMany({
		where: { tenantId },
		include: {
			customer: {
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
				},
			},
			items: {
				include: {
					selectedVariant: true,
					product: true,
				},
			},
			shippingMethod: true,
			paymentMethod: true,
		},
		orderBy: { createdAt: "desc" },
	});

	// Convert Decimal fields to numbers for serialization
	return orders.map(serializeOrder);
}

export async function getOrder(id: string) {
	const { tenantId } = await requireOrderViewAccess();

	const order = await db.order.findFirst({
		where: { id, tenantId },
		include: {
			customer: {
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
					phone: true,
				},
			},
			items: {
				include: {
					selectedVariant: true,
					product: true,
				},
			},
			shippingMethod: true,
			paymentMethod: true,
			history: true,
			tenant: true,
		},
	});

	if (!order) {
		throw new Error("Order not found");
	}

	// Convert Decimal fields to numbers for serialization
	return serializeOrder(order);
}

export async function updateOrderStatus(orderId: string, status: OrderStatus) {
	const { tenantId } = await requireOrderManageAccess();

	// Verify order belongs to tenant
	const order = await db.order.findFirst({
		where: { id: orderId, tenantId },
	});

	if (!order) {
		throw new Error("Order not found or access denied");
	}

	const updated = await db.order.update({
		where: { id: orderId },
		data: { status },
	});

	return updated;
}

export async function updatePaymentStatus(
	orderId: string,
	paymentStatus: PaymentStatus,
) {
	const { tenantId } = await requireOrderManageAccess();

	// Verify order belongs to tenant
	const order = await db.order.findFirst({
		where: { id: orderId, tenantId },
	});

	if (!order) {
		throw new Error("Order not found or access denied");
	}

	const updated = await db.order.update({
		where: { id: orderId },
		data: { paymentStatus },
	});

	return updated;
}

export async function addOrderNote(orderId: string, note: string) {
	const { tenantId, userId } = await requireOrderManageAccess();

	// Verify order belongs to tenant
	const order = await db.order.findFirst({
		where: { id: orderId, tenantId },
	});

	if (!order) {
		throw new Error("Order not found or access denied");
	}

	// Add note to order history instead
	const historyEntry = await db.orderHistory.create({
		data: {
			orderId,
			status: order.status,
			notes: note,
			userId,
		},
	});

	return historyEntry;
}

export async function cancelOrder(orderId: string, reason?: string) {
	const { tenantId, userId } = await requireOrderManageAccess();

	// Verify order belongs to tenant
	const order = await db.order.findFirst({
		where: { id: orderId, tenantId },
	});

	if (!order) {
		throw new Error("Order not found or access denied");
	}

	const updated = await db.order.update({
		where: { id: orderId },
		data: {
			status: "CANCELLED",
			cancelledAt: new Date(),
		},
	});

	// Add cancellation reason to history
	if (reason) {
		await db.orderHistory.create({
			data: {
				orderId,
				status: "CANCELLED",
				notes: `Cancellation reason: ${reason}`,
				userId,
			},
		});
	}

	return updated;
}

export async function fulfillOrder(
	orderId: string,
	trackingNumber?: string,
	trackingUrl?: string,
) {
	const { tenantId, userId } = await requireOrderManageAccess();

	// Verify order belongs to tenant
	const order = await db.order.findFirst({
		where: { id: orderId, tenantId },
	});

	if (!order) {
		throw new Error("Order not found or access denied");
	}

	const updated = await db.order.update({
		where: { id: orderId },
		data: {
			status: "DELIVERED",
		},
	});

	// Add fulfillment info to history
	await db.orderHistory.create({
		data: {
			orderId,
			status: "DELIVERED",
			notes: trackingNumber
				? `Tracking: ${trackingNumber}${trackingUrl ? ` - ${trackingUrl}` : ""}`
				: undefined,
			userId,
		},
	});

	return updated;
}
