"use server";

import type { PaymentMethodType } from "@boostcart/database";
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

export async function getPaymentMethods() {
	const { tenantId } = await requireStoreAccess();

	const methods = await db.paymentMethod.findMany({
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

	return methods;
}

export async function getPaymentMethod(id: string) {
	const { tenantId } = await requireStoreAccess();

	const method = await db.paymentMethod.findFirst({
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
		throw new Error("Payment method not found");
	}

	return method;
}

interface PaymentMethodInput {
	name: string;
	type: PaymentMethodType;
	description?: string;
	isActive?: boolean;
}

export async function createPaymentMethod(input: PaymentMethodInput) {
	const { tenantId } = await requireStoreAccess();

	const method = await db.paymentMethod.create({
		data: {
			...input,
			tenantId,
		},
	});

	return method;
}

export async function updatePaymentMethod(
	id: string,
	input: Partial<PaymentMethodInput>,
) {
	const { tenantId } = await requireStoreAccess();

	// Verify method belongs to tenant
	const method = await db.paymentMethod.findFirst({
		where: { id, tenantId },
	});

	if (!method) {
		throw new Error("Payment method not found or access denied");
	}

	const updated = await db.paymentMethod.update({
		where: { id },
		data: input,
	});

	return updated;
}

export async function deletePaymentMethod(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify method belongs to tenant
	const method = await db.paymentMethod.findFirst({
		where: { id, tenantId },
		include: {
			_count: {
				select: { orders: true },
			},
		},
	});

	if (!method) {
		throw new Error("Payment method not found or access denied");
	}

	if (method._count.orders > 0) {
		throw new Error(
			"Cannot delete payment method that has been used in orders. Consider deactivating instead.",
		);
	}

	await db.paymentMethod.delete({
		where: { id },
	});

	return { success: true };
}

export async function togglePaymentMethodStatus(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify method belongs to tenant
	const method = await db.paymentMethod.findFirst({
		where: { id, tenantId },
	});

	if (!method) {
		throw new Error("Payment method not found or access denied");
	}

	const updated = await db.paymentMethod.update({
		where: { id },
		data: { isActive: !method.isActive },
	});

	return updated;
}
