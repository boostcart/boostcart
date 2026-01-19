"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
	requireManagePermission,
	requireViewPermission,
} from "@/server/api/permissions";
import { db } from "@/server/db";

// Validation schemas
const AddDomainSchema = z.object({
	domain: z
		.string()
		.min(1, "Domain is required")
		.regex(
			/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
			"Invalid domain format",
		)
		.transform((d) => d.toLowerCase()),
});

// Get all custom domains for the current tenant
export async function getDomains() {
	const { tenantId } = await requireViewPermission("settings");

	const domains = await db.tenantDomain.findMany({
		where: { tenantId },
		orderBy: [{ isPrimary: "desc" }, { createdAt: "asc" }],
	});

	return domains;
}

// Get a single domain by ID
export async function getDomain(domainId: string) {
	const { tenantId } = await requireViewPermission("settings");

	const domain = await db.tenantDomain.findFirst({
		where: { id: domainId, tenantId },
	});

	if (!domain) {
		throw new Error("Domain not found");
	}

	return domain;
}

// Add a new custom domain
export async function addDomain(input: { domain: string }) {
	const { tenantId } = await requireManagePermission("settings");

	const validated = AddDomainSchema.parse(input);

	// Check if domain already exists (globally)
	const existingDomain = await db.tenantDomain.findUnique({
		where: { domain: validated.domain },
	});

	if (existingDomain) {
		throw new Error("This domain is already in use");
	}

	// Check domain limit (e.g., max 5 custom domains per tenant)
	const domainCount = await db.tenantDomain.count({
		where: { tenantId },
	});

	if (domainCount >= 5) {
		throw new Error("Maximum number of custom domains reached (5)");
	}

	// Create the domain with a verification token
	const domain = await db.tenantDomain.create({
		data: {
			tenantId,
			domain: validated.domain,
			isPrimary: domainCount === 0, // First domain is primary
			sslStatus: "pending",
			dnsVerified: false,
		},
	});

	revalidatePath("/admin/settings/domains");

	return domain;
}

// Remove a custom domain
export async function removeDomain(domainId: string) {
	const { tenantId } = await requireManagePermission("settings");

	const domain = await db.tenantDomain.findFirst({
		where: { id: domainId, tenantId },
	});

	if (!domain) {
		throw new Error("Domain not found");
	}

	// Don't allow removing the primary domain if others exist
	if (domain.isPrimary) {
		const otherDomains = await db.tenantDomain.count({
			where: { tenantId, id: { not: domainId } },
		});

		if (otherDomains > 0) {
			throw new Error(
				"Cannot remove primary domain. Set another domain as primary first.",
			);
		}
	}

	await db.tenantDomain.delete({
		where: { id: domainId },
	});

	revalidatePath("/admin/settings/domains");

	return { success: true };
}

// Set a domain as primary
export async function setPrimaryDomain(domainId: string) {
	const { tenantId } = await requireManagePermission("settings");

	const domain = await db.tenantDomain.findFirst({
		where: { id: domainId, tenantId },
	});

	if (!domain) {
		throw new Error("Domain not found");
	}

	if (!domain.dnsVerified) {
		throw new Error("Domain must be verified before setting as primary");
	}

	// Update all domains: unset current primary, set new primary
	await db.$transaction([
		db.tenantDomain.updateMany({
			where: { tenantId, isPrimary: true },
			data: { isPrimary: false },
		}),
		db.tenantDomain.update({
			where: { id: domainId },
			data: { isPrimary: true },
		}),
	]);

	revalidatePath("/admin/settings/domains");

	return { success: true };
}

// Verify domain DNS records
export async function verifyDomain(domainId: string) {
	const { tenantId } = await requireManagePermission("settings");

	const domain = await db.tenantDomain.findFirst({
		where: { id: domainId, tenantId },
	});

	if (!domain) {
		throw new Error("Domain not found");
	}

	// Perform DNS verification
	const isVerified = await checkDnsVerification(domain.domain, domain.dnsToken);

	if (isVerified) {
		await db.tenantDomain.update({
			where: { id: domainId },
			data: {
				dnsVerified: true,
				sslStatus: "provisioning", // SSL will be provisioned by Vercel/Cloudflare
			},
		});

		revalidatePath("/admin/settings/domains");

		return { success: true, verified: true };
	}

	return { success: true, verified: false };
}

// Refresh verification token
export async function refreshDnsToken(domainId: string) {
	const { tenantId } = await requireManagePermission("settings");

	const domain = await db.tenantDomain.findFirst({
		where: { id: domainId, tenantId },
	});

	if (!domain) {
		throw new Error("Domain not found");
	}

	// Generate a new token by updating the record (cuid will auto-generate)
	const updated = await db.tenantDomain.update({
		where: { id: domainId },
		data: {
			dnsToken: generateVerificationToken(),
			dnsVerified: false,
		},
	});

	revalidatePath("/admin/settings/domains");

	return updated;
}

// Helper function to check DNS TXT record
async function checkDnsVerification(
	domain: string,
	expectedToken: string,
): Promise<boolean> {
	try {
		// Use DNS over HTTPS (Cloudflare) for verification
		const response = await fetch(
			`https://cloudflare-dns.com/dns-query?name=_boostcart-verification.${domain}&type=TXT`,
			{
				headers: {
					Accept: "application/dns-json",
				},
			},
		);

		if (!response.ok) {
			return false;
		}

		const data = await response.json();

		if (!data.Answer || !Array.isArray(data.Answer)) {
			return false;
		}

		// Check if any TXT record contains our verification token
		for (const answer of data.Answer) {
			if (answer.type === 16) {
				// TXT record type
				const txtValue = answer.data?.replace(/"/g, "");
				if (txtValue === `boostcart-verify=${expectedToken}`) {
					return true;
				}
			}
		}

		return false;
	} catch (error) {
		console.error("DNS verification error:", error);
		return false;
	}
}

// Helper function to generate verification token
function generateVerificationToken(): string {
	const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
	let token = "";
	for (let i = 0; i < 32; i++) {
		token += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return token;
}

// Get verification instructions for a domain
export async function getDomainVerificationInstructions(domainId: string) {
	const { tenantId } = await requireViewPermission("settings");

	const domain = await db.tenantDomain.findFirst({
		where: { id: domainId, tenantId },
	});

	if (!domain) {
		throw new Error("Domain not found");
	}

	return {
		domain: domain.domain,
		dnsToken: domain.dnsToken,
		verified: domain.dnsVerified,
		instructions: {
			type: "TXT",
			host: `_boostcart-verification.${domain.domain}`,
			value: `boostcart-verify=${domain.dnsToken}`,
			ttl: 3600,
			cname: {
				host: domain.domain,
				value: "cname.boostcart.bg",
			},
		},
	};
}
