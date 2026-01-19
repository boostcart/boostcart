"use server";

import type { ShippingMethodType } from "@boostcart/database";
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

export async function getShippingMethods() {
	const { tenantId } = await requireStoreAccess();

	const methods = await db.shippingMethod.findMany({
		where: { tenantId },
		include: {
			_count: {
				select: {
					orders: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	// Serialize Decimal types to numbers for client components
	return methods.map((method) => ({
		...method,
		cost: method.cost.toNumber(),
		freeAboveAmount: method.freeAboveAmount?.toNumber() ?? null,
	}));
}

export async function getShippingMethod(id: string) {
	const { tenantId } = await requireStoreAccess();

	const method = await db.shippingMethod.findFirst({
		where: { id, tenantId },
		include: {
			_count: {
				select: {
					orders: true,
				},
			},
		},
	});

	if (!method) {
		throw new Error("Shipping method not found");
	}

	// Serialize Decimal types to numbers for client components
	return {
		...method,
		cost: method.cost.toNumber(),
		freeAboveAmount: method.freeAboveAmount?.toNumber() ?? null,
	};
}

interface ShippingMethodInput {
	name: string;
	type: ShippingMethodType;
	cost: number;
	description?: string;
	estimatedDays?: number;
	freeAboveAmount?: number;
	isActive?: boolean;
}

export async function createShippingMethod(input: ShippingMethodInput) {
	const { tenantId } = await requireStoreAccess();

	const method = await db.shippingMethod.create({
		data: {
			...input,
			tenantId,
		},
	});

	// Serialize Decimal types to numbers for client components
	return {
		...method,
		cost: method.cost.toNumber(),
		freeAboveAmount: method.freeAboveAmount?.toNumber() ?? null,
	};
}

export async function updateShippingMethod(
	id: string,
	input: Partial<ShippingMethodInput>,
) {
	const { tenantId } = await requireStoreAccess();

	// Verify method belongs to tenant
	const method = await db.shippingMethod.findFirst({
		where: { id, tenantId },
	});

	if (!method) {
		throw new Error("Shipping method not found or access denied");
	}

	const updated = await db.shippingMethod.update({
		where: { id },
		data: input,
	});

	// Serialize Decimal types to numbers for client components
	return {
		...updated,
		cost: updated.cost.toNumber(),
		freeAboveAmount: updated.freeAboveAmount?.toNumber() ?? null,
	};
}

export async function deleteShippingMethod(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify method belongs to tenant
	const method = await db.shippingMethod.findFirst({
		where: { id, tenantId },
		include: {
			_count: {
				select: { orders: true },
			},
		},
	});

	if (!method) {
		throw new Error("Shipping method not found or access denied");
	}

	if (method._count.orders > 0) {
		throw new Error(
			"Cannot delete shipping method that has been used in orders. Consider deactivating instead.",
		);
	}

	await db.shippingMethod.delete({
		where: { id },
	});

	return { success: true };
}

export async function toggleShippingMethodStatus(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify method belongs to tenant
	const method = await db.shippingMethod.findFirst({
		where: { id, tenantId },
	});

	if (!method) {
		throw new Error("Shipping method not found or access denied");
	}

	const updated = await db.shippingMethod.update({
		where: { id },
		data: { isActive: !method.isActive },
	});

	// Serialize Decimal types to numbers for client components
	return {
		...updated,
		cost: updated.cost.toNumber(),
		freeAboveAmount: updated.freeAboveAmount?.toNumber() ?? null,
	};
}
