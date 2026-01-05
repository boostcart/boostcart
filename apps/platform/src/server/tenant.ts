"use server";

import type { Tenant } from "@boostcart/database";
import { headers } from "next/headers";
import { cache } from "react";
import { getTenantByDomain, getTenantBySlug } from "@/lib/tenant";
import { auth } from "./auth";
import { db } from "./db";

/**
 * Get the current tenant from the request context (storefront)
 * This is cached per-request using React's cache()
 */
export const getCurrentTenant = cache(async (): Promise<Tenant | null> => {
	const headersList = await headers();

	// Check for tenant slug from subdomain
	const tenantSlug = headersList.get("x-tenant-slug");
	if (tenantSlug) {
		return getTenantBySlug(tenantSlug);
	}

	// Check for custom domain
	const customDomain = headersList.get("x-custom-domain");
	if (customDomain) {
		return getTenantByDomain(customDomain);
	}

	return null;
});

/**
 * Get the current tenant for admin context (from user's store ownership)
 * This is used when accessing via boostcart.bg/admin (not subdomain)
 */
export const getAdminTenant = cache(async (): Promise<Tenant | null> => {
	const session = await auth();
	if (!session?.user?.id) {
		return null;
	}

	// Get the user's primary store (first store they have access to)
	const staffRecord = await db.tenantStaff.findFirst({
		where: { userId: session.user.id },
		include: { tenant: true },
		orderBy: { createdAt: "asc" },
	});

	return staffRecord?.tenant ?? null;
});

/**
 * Require tenant to be present (storefront context), throws if not found
 */
export async function requireTenant(): Promise<Tenant> {
	const tenant = await getCurrentTenant();
	if (!tenant) {
		throw new Error("Tenant not found");
	}
	return tenant;
}

/**
 * Require tenant for admin operations
 * First checks storefront context, then falls back to user's store
 */
export async function requireAdminTenant(): Promise<Tenant> {
	// First try storefront context (subdomain access)
	const storefrontTenant = await getCurrentTenant();
	if (storefrontTenant) {
		return storefrontTenant;
	}

	// Fall back to user's store (main domain admin access)
	const adminTenant = await getAdminTenant();
	if (adminTenant) {
		return adminTenant;
	}

	throw new Error("No tenant context found. Please create or select a store.");
}

/**
 * Check if we're in a tenant context
 */
export async function hasTenantContext(): Promise<boolean> {
	const tenant = await getCurrentTenant();
	return tenant !== null;
}
