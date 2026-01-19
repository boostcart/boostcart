"use server";

import { cookies, headers } from "next/headers";
import { cache } from "react";
import { db } from "@/server/db";

export interface ThemeConfig {
	// Colors
	primaryColor?: string;
	secondaryColor?: string;
	accentColor?: string;
	backgroundColor?: string;
	foregroundColor?: string;
	mutedColor?: string;
	borderColor?: string;
	// Typography
	fontFamily?: string;
	headingFontFamily?: string;
	fontSizeScale?: "compact" | "default" | "comfortable" | "large";
	// Layout
	headerStyle?: "default" | "centered" | "minimal";
	footerStyle?: "default" | "simple" | "expanded";
	productCardStyle?: "default" | "minimal" | "detailed";
	spacingScale?: "compact" | "default" | "comfortable" | "spacious";
	borderRadius?: "none" | "small" | "medium" | "large" | "full";
	shadowStyle?: "none" | "subtle" | "medium" | "dramatic";
	// Features
	showBanner?: boolean;
	bannerText?: string;
	bannerBackgroundColor?: string;
	bannerTextColor?: string;
	// Social
	facebookUrl?: string;
	instagramUrl?: string;
	twitterUrl?: string;
	youtubeUrl?: string;
	tiktokUrl?: string;
	// Contact
	contactEmail?: string;
	contactPhone?: string;
	address?: string;
}

export interface StorefrontTenant {
	id: string;
	name: string;
	slug: string;
	subdomain: string; // Added for URL generation
	description: string | null;
	logoUrl: string | null;
	logo: string | null; // Alias for logoUrl
	faviconUrl: string | null;
	currency: string;
	locale: string;
	timezone: string;
	isActive: boolean;
	contactEmail: string | null; // Added for order emails
	themeConfig: ThemeConfig;
}

/**
 * Get the current tenant from the request
 * This is cached per request to avoid multiple database calls
 */
export const getCurrentTenant = cache(
	async (): Promise<StorefrontTenant | null> => {
		const headersList = await headers();
		const host = headersList.get("host") || "";

		// Extract subdomain or use custom domain
		// Patterns:
		// - {slug}.boostcart.bg -> slug
		// - {slug}.localhost:3001 -> slug (dev)
		// - custom-domain.com -> lookup by domain

		let tenant: StorefrontTenant | null = null;

		// Check for subdomain pattern
		const subdomainMatch = host.match(
			/^([^.]+)\.(boostcart\.bg|localhost:\d+)$/,
		);

		if (subdomainMatch?.[1]) {
			const slug = subdomainMatch[1];

			// Skip non-store subdomains
			if (["www", "admin", "api", "app"].includes(slug)) {
				return null;
			}

			const dbTenant = await db.tenant.findFirst({
				where: {
					slug,
					isActive: true,
					deletedAt: null,
				},
				select: {
					id: true,
					name: true,
					slug: true,
					description: true,
					email: true,
					logoUrl: true,
					faviconUrl: true,
					currency: true,
					locale: true,
					timezone: true,
					isActive: true,
					themeConfig: true,
				},
			});

			tenant = dbTenant
				? {
						...dbTenant,
						subdomain: slug,
						logo: dbTenant.logoUrl,
						contactEmail: dbTenant.email,
						themeConfig: (dbTenant.themeConfig as ThemeConfig) || {},
					}
				: null;
		} else {
			// Check for custom domain
			const domainRecord = await db.tenantDomain.findFirst({
				where: {
					domain: host.replace(/:\d+$/, ""), // Remove port
					dnsVerified: true,
				},
			});

			if (domainRecord) {
				const dbTenant = await db.tenant.findFirst({
					where: {
						id: domainRecord.tenantId,
						isActive: true,
						deletedAt: null,
					},
					select: {
						id: true,
						name: true,
						slug: true,
						description: true,
						email: true,
						logoUrl: true,
						faviconUrl: true,
						currency: true,
						locale: true,
						timezone: true,
						isActive: true,
						themeConfig: true,
					},
				});

				tenant = dbTenant
					? {
							...dbTenant,
							subdomain: dbTenant.slug,
							logo: dbTenant.logoUrl,
							contactEmail: dbTenant.email,
							themeConfig: (dbTenant.themeConfig as ThemeConfig) || {},
						}
					: null;
			}
		}

		// Development fallback: if no tenant found and accessing localhost directly,
		// use the first active tenant for testing
		if (!tenant && process.env.NODE_ENV === "development" && host.startsWith("localhost")) {
			const fallbackTenant = await db.tenant.findFirst({
				where: {
					isActive: true,
					deletedAt: null,
				},
				orderBy: { createdAt: "asc" },
				select: {
					id: true,
					name: true,
					slug: true,
					description: true,
					email: true,
					logoUrl: true,
					faviconUrl: true,
					currency: true,
					locale: true,
					timezone: true,
					isActive: true,
					themeConfig: true,
				},
			});

			if (fallbackTenant) {
				console.log(`[Dev] Using fallback tenant: ${fallbackTenant.name} (${fallbackTenant.slug})`);
				tenant = {
					...fallbackTenant,
					subdomain: fallbackTenant.slug,
					logo: fallbackTenant.logoUrl,
					contactEmail: fallbackTenant.email,
					themeConfig: (fallbackTenant.themeConfig as ThemeConfig) || {},
				};
			}
		}

		return tenant;
	},
);

/**
 * Require a valid tenant or throw
 */
export async function requireTenant(): Promise<StorefrontTenant> {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		throw new Error("Store not found");
	}

	if (!tenant.isActive) {
		throw new Error("Store is not active");
	}

	return tenant;
}

/**
 * Get tenant ID from cookies (for API routes)
 */
export async function getTenantIdFromCookie(): Promise<string | null> {
	const cookieStore = await cookies();
	return cookieStore.get("tenant_id")?.value ?? null;
}
