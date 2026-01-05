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

export async function getCustomers() {
	const { tenantId } = await requireStoreAccess();

	const customers = await db.customer.findMany({
		where: { tenantId },
		include: {
			_count: {
				select: {
					orders: true,
					addresses: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return customers;
}

export async function getCustomer(id: string) {
	const { tenantId } = await requireStoreAccess();

	const customer = await db.customer.findFirst({
		where: { id, tenantId },
		include: {
			orders: {
				orderBy: { createdAt: "desc" },
				take: 10,
			},
			addresses: true,
			_count: {
				select: {
					orders: true,
					addresses: true,
				},
			},
		},
	});

	if (!customer) {
		throw new Error("Customer not found");
	}

	return customer;
}

interface CreateCustomerInput {
	email: string;
	firstName?: string;
	lastName?: string;
	phone?: string;
	acceptsMarketing?: boolean;
}

export async function createCustomer(input: CreateCustomerInput) {
	const { tenantId } = await requireStoreAccess();

	// Check if customer with this email already exists for this tenant
	const existing = await db.customer.findFirst({
		where: {
			email: input.email,
			tenantId,
		},
	});

	if (existing) {
		throw new Error("Customer with this email already exists");
	}

	const customer = await db.customer.create({
		data: {
			...input,
			tenantId,
		},
	});

	return customer;
}

interface UpdateCustomerInput {
	email?: string;
	firstName?: string;
	lastName?: string;
	phone?: string;
	acceptsMarketing?: boolean;
}

export async function updateCustomer(id: string, input: UpdateCustomerInput) {
	const { tenantId } = await requireStoreAccess();

	// Verify customer belongs to tenant
	const customer = await db.customer.findFirst({
		where: { id, tenantId },
	});

	if (!customer) {
		throw new Error("Customer not found or access denied");
	}

	// If email is being changed, check for duplicates
	if (input.email && input.email !== customer.email) {
		const existing = await db.customer.findFirst({
			where: {
				email: input.email,
				tenantId,
				id: { not: id },
			},
		});

		if (existing) {
			throw new Error("Customer with this email already exists");
		}
	}

	const updated = await db.customer.update({
		where: { id },
		data: input,
	});

	return updated;
}

export async function deleteCustomer(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify customer belongs to tenant
	const customer = await db.customer.findFirst({
		where: { id, tenantId },
		include: {
			_count: {
				select: { orders: true },
			},
		},
	});

	if (!customer) {
		throw new Error("Customer not found or access denied");
	}

	if (customer._count.orders > 0) {
		throw new Error(
			"Cannot delete customer with existing orders. Consider anonymizing instead.",
		);
	}

	await db.customer.delete({
		where: { id },
	});

	return { success: true };
}

export async function anonymizeCustomer(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify customer belongs to tenant
	const customer = await db.customer.findFirst({
		where: { id, tenantId },
	});

	if (!customer) {
		throw new Error("Customer not found or access denied");
	}

	const updated = await db.customer.update({
		where: { id },
		data: {
			email: `deleted-${id}@anonymized.local`,
			firstName: "Deleted",
			lastName: "Customer",
			phone: null,
			acceptsMarketing: false,
		},
	});

	return updated;
}
