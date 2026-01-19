"use server";

import { randomBytes } from "node:crypto";
import { hash } from "bcryptjs";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { resend } from "@/server/services/email/send";
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

// Returns store-scoped customers
export async function getCustomers() {
	const { tenantId } = await requireStoreAccess();

	const customers = await db.customer.findMany({
		where: { tenantId },
		include: {
			_count: {
				select: {
					addresses: true,
					orders: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	// Convert Decimal fields to numbers for serialization
	return customers.map((customer) => ({
		...customer,
		totalSpent: Number(customer.totalSpent),
	}));
}

export async function getCustomer(id: string) {
	const { tenantId } = await requireStoreAccess();

	const customer = await db.customer.findFirst({
		where: { id, tenantId },
		include: {
			addresses: true,
			orders: {
				orderBy: { createdAt: "desc" },
				take: 10,
				select: {
					id: true,
					orderNumber: true,
					status: true,
					paymentStatus: true,
					totalAmount: true,
					createdAt: true,
				},
			},
			_count: {
				select: {
					addresses: true,
					orders: true,
				},
			},
		},
	});

	if (!customer) {
		throw new Error("Customer not found");
	}

	// Convert Decimal fields to numbers for serialization
	return {
		...customer,
		totalSpent: Number(customer.totalSpent),
		orders: customer.orders.map((order) => ({
			...order,
			totalAmount: Number(order.totalAmount),
		})),
	};
}

interface CreateCustomerInput {
	email: string;
	password?: string;
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

	// Generate a random password if none provided (customer can reset it)
	const password = input.password || Math.random().toString(36).slice(-12);
	const hashedPassword = await hash(password, 12);

	const customer = await db.customer.create({
		data: {
			email: input.email,
			password: hashedPassword,
			firstName: input.firstName,
			lastName: input.lastName,
			phone: input.phone,
			acceptsMarketing: input.acceptsMarketing ?? false,
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
	locale?: string;
	isActive?: boolean;
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

	// If email is being changed, check for duplicates within the tenant
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

	// Generate anonymized data
	const anonymizedId = id.slice(0, 8);
	const updated = await db.customer.update({
		where: { id },
		data: {
			email: `deleted-${anonymizedId}@anonymized.local`,
			firstName: "Deleted",
			lastName: "Customer",
			phone: null,
			acceptsMarketing: false,
			googleId: null,
			facebookId: null,
		},
	});

	// Delete all addresses for this customer
	await db.customerAddress.deleteMany({
		where: { customerId: id },
	});

	return updated;
}

// Send custom email to customer
interface SendEmailInput {
	subject: string;
	body: string;
}

export async function sendCustomerEmail(
	customerId: string,
	input: SendEmailInput,
) {
	const { tenantId } = await requireStoreAccess();

	// Verify customer belongs to tenant
	const customer = await db.customer.findFirst({
		where: { id: customerId, tenantId },
		include: {
			tenant: {
				select: { name: true },
			},
		},
	});

	if (!customer) {
		throw new Error("Customer not found or access denied");
	}

	const storeName = customer.tenant.name || "BoostCart Store";

	try {
		await resend.emails.send({
			from: `${storeName} <noreply@boostcart.bg>`,
			to: customer.email,
			subject: input.subject,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2>${input.subject}</h2>
					<div style="white-space: pre-wrap;">${input.body}</div>
					<hr style="margin-top: 32px; border: none; border-top: 1px solid #e5e7eb;" />
					<p style="color: #6b7280; font-size: 12px;">
						This email was sent by ${storeName}
					</p>
				</div>
			`,
		});

		return { success: true };
	} catch (error) {
		console.error("Failed to send email:", error);
		throw new Error("Failed to send email");
	}
}

// Send password reset email to customer
export async function resetCustomerPassword(customerId: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify customer belongs to tenant
	const customer = await db.customer.findFirst({
		where: { id: customerId, tenantId },
		include: {
			tenant: {
				select: { name: true, subdomain: true },
			},
		},
	});

	if (!customer) {
		throw new Error("Customer not found or access denied");
	}

	// Generate reset token
	const resetToken = randomBytes(32).toString("hex");
	const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

	// Store the reset token
	await db.customer.update({
		where: { id: customerId },
		data: {
			resetToken,
			resetTokenExpiry,
		},
	});

	const storeName = customer.tenant.name || "BoostCart Store";
	const storeSubdomain = customer.tenant.subdomain;
	// In production, this would be the actual store URL
	const resetUrl = `https://${storeSubdomain}.boostcart.bg/reset-password?token=${resetToken}`;

	try {
		await resend.emails.send({
			from: `${storeName} <noreply@boostcart.bg>`,
			to: customer.email,
			subject: `Password Reset Request - ${storeName}`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2>Password Reset Request</h2>
					<p>Hello${customer.firstName ? ` ${customer.firstName}` : ""},</p>
					<p>We received a request to reset your password for your account at ${storeName}.</p>
					<p>Click the button below to reset your password:</p>
					<p style="margin: 24px 0;">
						<a href="${resetUrl}" 
							 style="background-color: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
							Reset Password
						</a>
					</p>
					<p style="color: #6b7280; font-size: 14px;">
						This link will expire in 1 hour. If you didn't request this reset, you can safely ignore this email.
					</p>
					<hr style="margin-top: 32px; border: none; border-top: 1px solid #e5e7eb;" />
					<p style="color: #6b7280; font-size: 12px;">
						This email was sent by ${storeName}
					</p>
				</div>
			`,
		});

		return { success: true };
	} catch (error) {
		console.error("Failed to send password reset email:", error);
		throw new Error("Failed to send password reset email");
	}
}
