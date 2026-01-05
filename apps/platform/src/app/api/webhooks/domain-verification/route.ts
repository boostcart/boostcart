import { headers } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/server/db";
import { env } from "@/env";

// Webhook secret for verification (set in environment)
const WEBHOOK_SECRET = env.DOMAIN_WEBHOOK_SECRET;

interface DomainVerificationPayload {
	type: "domain.verified" | "domain.ssl_provisioned" | "domain.ssl_failed";
	domain: string;
	tenantId?: string;
	sslStatus?: "active" | "provisioning" | "failed" | "expired";
	sslExpiry?: string;
	timestamp: string;
}

/**
 * Verify webhook signature using HMAC-SHA256
 */
function verifySignature(payload: string, signature: string): boolean {
	if (!WEBHOOK_SECRET) {
		console.warn("DOMAIN_WEBHOOK_SECRET not set, skipping signature verification");
		return true; // Allow in development
	}

	const expectedSignature = crypto
		.createHmac("sha256", WEBHOOK_SECRET)
		.update(payload)
		.digest("hex");

	return crypto.timingSafeEqual(
		Buffer.from(signature),
		Buffer.from(expectedSignature)
	);
}

/**
 * POST /api/webhooks/domain-verification
 * 
 * Receives domain verification events from external services (Vercel, Cloudflare, etc.)
 * Updates the domain record in the database accordingly.
 */
export async function POST(request: Request) {
	try {
		const headersList = await headers();
		const signature = headersList.get("x-webhook-signature") ?? "";
		const body = await request.text();

		// Verify webhook signature
		if (!verifySignature(body, signature)) {
			return NextResponse.json(
				{ error: "Invalid signature" },
				{ status: 401 }
			);
		}

		const payload: DomainVerificationPayload = JSON.parse(body);

		// Validate payload
		if (!payload.domain || !payload.type) {
			return NextResponse.json(
				{ error: "Invalid payload: missing domain or type" },
				{ status: 400 }
			);
		}

		// Find the domain record
		const domainRecord = await db.tenantDomain.findUnique({
			where: { domain: payload.domain },
		});

		if (!domainRecord) {
			return NextResponse.json(
				{ error: "Domain not found" },
				{ status: 404 }
			);
		}

		// Handle different event types
		switch (payload.type) {
			case "domain.verified": {
				// Mark domain as DNS verified
				await db.tenantDomain.update({
					where: { id: domainRecord.id },
					data: {
						dnsVerified: true,
						sslStatus: "provisioning",
					},
				});
				console.log(`Domain verified via webhook: ${payload.domain}`);
				break;
			}

			case "domain.ssl_provisioned": {
				// SSL certificate is active
				await db.tenantDomain.update({
					where: { id: domainRecord.id },
					data: {
						sslStatus: "active",
						sslExpiry: payload.sslExpiry ? new Date(payload.sslExpiry) : null,
					},
				});
				console.log(`SSL provisioned via webhook: ${payload.domain}`);
				break;
			}

			case "domain.ssl_failed": {
				// SSL provisioning failed
				await db.tenantDomain.update({
					where: { id: domainRecord.id },
					data: {
						sslStatus: "failed",
					},
				});
				console.log(`SSL provisioning failed via webhook: ${payload.domain}`);
				break;
			}

			default:
				return NextResponse.json(
					{ error: `Unknown event type: ${payload.type}` },
					{ status: 400 }
				);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Domain verification webhook error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

/**
 * GET /api/webhooks/domain-verification
 * 
 * Health check endpoint for webhook configuration
 */
export async function GET() {
	return NextResponse.json({
		status: "ok",
		endpoint: "domain-verification",
		supportedEvents: [
			"domain.verified",
			"domain.ssl_provisioned",
			"domain.ssl_failed",
		],
	});
}
