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

// Get tenant settings
export async function getTenantSettings() {
	const { tenantId } = await requireStoreAccess();

	const tenant = await db.tenant.findUnique({
		where: { id: tenantId },
		select: {
			id: true,
			slug: true,
			name: true,
			description: true,
			email: true,
			phone: true,
			logoUrl: true,
			faviconUrl: true,
			currency: true,
			locale: true,
			timezone: true,
			themeId: true,
			themeConfig: true,
			billingStatus: true,
			billingCycle: true,
			planId: true,
			trialEndsAt: true,
			currentPeriodEnd: true,
			isActive: true,
			domains: {
				select: {
					id: true,
					domain: true,
					isPrimary: true,
					sslStatus: true,
					dnsVerified: true,
				},
			},
		},
	});

	if (!tenant) {
		throw new Error("Tenant not found");
	}

	return tenant;
}

// Update store information
export interface UpdateStoreInfoInput {
	name: string;
	description?: string;
	email: string;
	phone?: string;
}

export async function updateStoreInfo(input: UpdateStoreInfoInput) {
	const { tenantId } = await requireStoreAccess();

	const updated = await db.tenant.update({
		where: { id: tenantId },
		data: {
			name: input.name,
			description: input.description,
			email: input.email,
			phone: input.phone,
		},
	});

	return updated;
}

// Update localization settings
export interface UpdateLocalizationInput {
	currency: string;
	locale: string;
	timezone: string;
}

export async function updateLocalization(input: UpdateLocalizationInput) {
	const { tenantId } = await requireStoreAccess();

	const updated = await db.tenant.update({
		where: { id: tenantId },
		data: {
			currency: input.currency,
			locale: input.locale,
			timezone: input.timezone,
		},
	});

	return updated;
}

// Update theme settings
export interface UpdateThemeInput {
	themeId?: string;
	themeConfig?: Record<string, unknown>;
}

export async function updateTheme(input: UpdateThemeInput) {
	const { tenantId } = await requireStoreAccess();

	const updated = await db.tenant.update({
		where: { id: tenantId },
		data: {
			themeId: input.themeId,
			themeConfig: input.themeConfig
				? JSON.parse(JSON.stringify(input.themeConfig))
				: undefined,
		},
	});

	return updated;
}

// Update store logo
export async function updateStoreLogo(logoUrl: string) {
	const { tenantId } = await requireStoreAccess();

	const updated = await db.tenant.update({
		where: { id: tenantId },
		data: { logoUrl },
	});

	return updated;
}

// Update store favicon
export async function updateStoreFavicon(faviconUrl: string) {
	const { tenantId } = await requireStoreAccess();

	const updated = await db.tenant.update({
		where: { id: tenantId },
		data: { faviconUrl },
	});

	return updated;
}

// Get enabled payment methods for tenant
export async function getEnabledPaymentMethods() {
	const { tenantId } = await requireStoreAccess();

	const paymentMethods = await db.paymentMethod.findMany({
		where: { tenantId },
		orderBy: { createdAt: "asc" },
	});

	return paymentMethods;
}

// Get enabled shipping methods for tenant
export async function getEnabledShippingMethods() {
	const { tenantId } = await requireStoreAccess();

	const shippingMethods = await db.shippingMethod.findMany({
		where: { tenantId },
		orderBy: { createdAt: "asc" },
	});

	return shippingMethods;
}

// Toggle payment method
export async function togglePaymentMethod(paymentMethodId: string) {
	const { tenantId } = await requireStoreAccess();

	const paymentMethod = await db.paymentMethod.findFirst({
		where: { id: paymentMethodId, tenantId },
	});

	if (!paymentMethod) {
		throw new Error("Payment method not found");
	}

	const updated = await db.paymentMethod.update({
		where: { id: paymentMethodId },
		data: { isActive: !paymentMethod.isActive },
	});

	return updated;
}

// Toggle shipping method
export async function toggleShippingMethod(shippingMethodId: string) {
	const { tenantId } = await requireStoreAccess();

	const shippingMethod = await db.shippingMethod.findFirst({
		where: { id: shippingMethodId, tenantId },
	});

	if (!shippingMethod) {
		throw new Error("Shipping method not found");
	}

	const updated = await db.shippingMethod.update({
		where: { id: shippingMethodId },
		data: { isActive: !shippingMethod.isActive },
	});

	return updated;
}

// Add custom domain
export async function addCustomDomain(domain: string) {
	const { tenantId } = await requireStoreAccess();

	// Check if domain already exists
	const existing = await db.tenantDomain.findUnique({
		where: { domain },
	});

	if (existing) {
		throw new Error("Domain already in use");
	}

	const newDomain = await db.tenantDomain.create({
		data: {
			tenantId,
			domain,
			isPrimary: false,
			sslStatus: "pending",
			dnsVerified: false,
		},
	});

	return newDomain;
}

// Remove custom domain
export async function removeCustomDomain(domainId: string) {
	const { tenantId } = await requireStoreAccess();

	const domain = await db.tenantDomain.findFirst({
		where: { id: domainId, tenantId },
	});

	if (!domain) {
		throw new Error("Domain not found");
	}

	await db.tenantDomain.delete({
		where: { id: domainId },
	});

	return { success: true };
}

// Set primary domain
export async function setPrimaryDomain(domainId: string) {
	const { tenantId } = await requireStoreAccess();

	// First, unset all other primary domains
	await db.tenantDomain.updateMany({
		where: { tenantId, isPrimary: true },
		data: { isPrimary: false },
	});

	// Set the new primary domain
	const updated = await db.tenantDomain.update({
		where: { id: domainId },
		data: { isPrimary: true },
	});

	return updated;
}
