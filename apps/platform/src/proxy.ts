import { type NextRequest, NextResponse } from "next/server";

/**
 * Proxy for multi-tenant routing (formerly middleware)
 *
 * As of Next.js 16, middleware has been renamed to proxy.
 * The proxy runs before routes are rendered and handles:
 * - Multi-tenant subdomain routing
 * - Custom domain routing
 * - Setting tenant context headers
 *
 * Routes:
 * - boostcart.bg/* - Main marketing site & platform admin
 * - store.boostcart.bg/* - Tenant storefront
 * - custom.domain.com/* - Tenant storefront (custom domain)
 */
export function proxy(request: NextRequest) {
	const hostname = request.headers.get("host");
	const pathname = request.nextUrl.pathname;

	// Skip static files and API routes
	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/api/") ||
		pathname.includes(".") // Static files
	) {
		return NextResponse.next();
	}

	// Platform domains - no tenant context needed
	const platformDomains = [
		"boostcart.bg",
		"www.boostcart.bg",
		"localhost:3000",
	];
	if (hostname && platformDomains.includes(hostname)) {
		return NextResponse.next();
	}

	// Extract tenant slug from subdomain
	let tenantSlug: string | null = null;

	if (hostname) {
		// Check for subdomain pattern (e.g., store.boostcart.bg)
		const subdomainMatch = hostname.match(/^([a-z0-9-]+)\.boostcart\.bg$/i);
		if (subdomainMatch?.[1]) {
			const slug = subdomainMatch[1];
			// Skip reserved subdomains
			if (!["www", "api", "admin", "staging", "dev", "app"].includes(slug)) {
				tenantSlug = slug;
			}
		}

		// Check for local development subdomain (e.g., store.localhost:3000)
		const localMatch = hostname.match(/^([a-z0-9-]+)\.localhost/i);
		if (localMatch?.[1]) {
			tenantSlug = localMatch[1];
		}
	}

	// Set tenant slug in header for downstream use
	const response = NextResponse.next();

	if (tenantSlug) {
		response.headers.set("x-tenant-slug", tenantSlug);
	}

	// For custom domains, set the hostname for lookup
	if (
		!tenantSlug &&
		hostname &&
		!hostname.includes("boostcart.bg") &&
		!hostname.includes("localhost")
	) {
		const customDomain = hostname.split(":")[0];
		if (customDomain) {
			response.headers.set("x-custom-domain", customDomain);
		}
	}

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public files (public folder)
		 */
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
	],
};
