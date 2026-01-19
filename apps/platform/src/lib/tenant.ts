import type { Tenant } from "@boostcart/database";
import { db } from "@/server/db";

// Cache for tenant lookups
const tenantCache = new Map<string, { tenant: Tenant; expiry: number }>();
const CACHE_TTL = 60 * 1000; // 1 minute

/**
 * Get tenant by subdomain (slug)
 */
export async function getTenantBySlug(slug: string): Promise<Tenant | null> {
	// Check cache first
	const cached = tenantCache.get(`slug:${slug}`);
	if (cached && cached.expiry > Date.now()) {
		return cached.tenant;
	}

	const tenant = await db.tenant.findFirst({
		where: {
			slug,
			isActive: true,
			deletedAt: null,
		},
	});

	if (tenant) {
		tenantCache.set(`slug:${slug}`, {
			tenant,
			expiry: Date.now() + CACHE_TTL,
		});
	}

	return tenant;
}

/**
 * Get tenant by custom domain
 */
export async function getTenantByDomain(
	domain: string,
): Promise<Tenant | null> {
	// Check cache first
	const cached = tenantCache.get(`domain:${domain}`);
	if (cached && cached.expiry > Date.now()) {
		return cached.tenant;
	}

	const tenantDomain = await db.tenantDomain.findFirst({
		where: {
			domain,
			dnsVerified: true,
		},
		include: {
			tenant: true,
		},
	});

	if (tenantDomain?.tenant?.isActive) {
		tenantCache.set(`domain:${domain}`, {
			tenant: tenantDomain.tenant,
			expiry: Date.now() + CACHE_TTL,
		});
		return tenantDomain.tenant;
	}

	return null;
}

/**
 * Extract tenant from request hostname
 */
export async function getTenantFromRequest(
	hostname: string | null,
): Promise<Tenant | null> {
	if (!hostname) return null;

	// Remove port if present
	const host = hostname.split(":")[0];
	if (!host) return null;

	// Check if it's the main platform domain
	const platformDomains = ["boostcart.bg", "localhost", "127.0.0.1"];
	const isMainDomain = platformDomains.some(
		(d) => host === d || host === `www.${d}`,
	);

	if (isMainDomain) {
		// No tenant for main domain
		return null;
	}

	// Check for subdomain (e.g., store.boostcart.bg)
	const subdomainMatch = host.match(/^([a-z0-9-]+)\.boostcart\.bg$/i);
	if (subdomainMatch?.[1]) {
		const slug = subdomainMatch[1];
		// Skip common subdomains
		if (["www", "api", "admin", "staging", "dev"].includes(slug)) {
			return null;
		}
		return getTenantBySlug(slug);
	}

	// Check for local dev subdomain (e.g., store.localhost)
	const localSubdomainMatch = host.match(/^([a-z0-9-]+)\.localhost$/i);
	if (localSubdomainMatch?.[1]) {
		return getTenantBySlug(localSubdomainMatch[1]);
	}

	// Otherwise, check if it's a custom domain
	return getTenantByDomain(host);
}

/**
 * Clear tenant cache (useful after updates)
 */
export function clearTenantCache(identifier?: string) {
	if (identifier) {
		tenantCache.delete(`slug:${identifier}`);
		tenantCache.delete(`domain:${identifier}`);
	} else {
		tenantCache.clear();
	}
}
