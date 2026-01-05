"use server";

import type { OrderStatus, PaymentStatus } from "@boostcart/database";
import { db } from "@/server/db";
import {
	requireViewPermission,
	requireManagePermission,
} from "@/server/api/permissions";

async function requireOrderViewAccess() {
	return await requireViewPermission("orders");
}

async function requireOrderManageAccess() {
	return await requireManagePermission("orders");
}

export async function getOrders() {
	const { tenantId } = await requireOrderViewAccess();

	const orders = await db.order.findMany({
		where: { tenantId },
		include: {
			customer: true,
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

	return orders;
}

export async function getOrder(id: string) {
	const { tenantId } = await requireOrderViewAccess();

	const order = await db.order.findFirst({
		where: { id, tenantId },
		include: {
			customer: true,
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

	return order;
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
