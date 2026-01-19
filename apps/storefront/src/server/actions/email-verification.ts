"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { db } from "@/server/db";
import { emailService } from "@/server/email";
import { getCurrentTenant } from "@/server/tenant";

/**
 * Send verification email to customer
 */
export async function sendVerificationEmail(customerId: string) {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return { success: false, error: "Store not found" };
	}

	try {
		// Find customer
		const customer = await db.customer.findUnique({
			where: {
				id: customerId,
				tenantId: tenant.id,
			},
		});

		if (!customer) {
			return { success: false, error: "Customer not found" };
		}

		if (customer.emailVerified) {
			return { success: false, error: "Email already verified" };
		}

		// Generate verification token
		const token = randomBytes(32).toString("hex");
		const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

		// Save or update token
		await db.emailVerification.upsert({
			where: {
				customerId: customer.id,
			},
			create: {
				customerId: customer.id,
				token,
				expiresAt,
			},
			update: {
				token,
				expiresAt,
				verifiedAt: null, // Reset if previously verified
			},
		});

		// Send email
		const verificationUrl = `https://${tenant.subdomain}.boostcart.bg/account/verify-email?token=${token}`;

		await emailService.sendVerificationEmail({
			email: customer.email,
			verificationUrl,
			storeName: tenant.name,
			expiresIn: "24 часа",
		});

		return { success: true };
	} catch (error) {
		console.error("Send verification email error:", error);
		return { success: false, error: "Failed to send verification email" };
	}
}

/**
 * Verify email using token
 */
export async function verifyEmail(token: string) {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return { success: false, error: "Store not found" };
	}

	try {
		// Find valid verification token
		const verificationToken = await db.emailVerification.findUnique({
			where: { token },
			include: { customer: true },
		});

		if (!verificationToken) {
			return { success: false, error: "Invalid or expired verification link" };
		}

		// Check if expired
		if (verificationToken.expiresAt < new Date()) {
			return { success: false, error: "Verification link has expired" };
		}

		// Check if already verified
		if (verificationToken.verifiedAt) {
			return { success: false, error: "Email already verified" };
		}

		// Verify customer belongs to this tenant
		if (verificationToken.customer.tenantId !== tenant.id) {
			return { success: false, error: "Invalid verification link" };
		}

		// Mark as verified
		await db.$transaction([
			db.customer.update({
				where: { id: verificationToken.customerId },
				data: {
					emailVerified: true,
					emailVerifiedAt: new Date(),
				},
			}),
			db.emailVerification.update({
				where: { id: verificationToken.id },
				data: { verifiedAt: new Date() },
			}),
		]);

		revalidatePath("/account");

		return { success: true };
	} catch (error) {
		console.error("Email verification error:", error);
		return { success: false, error: "Failed to verify email" };
	}
}
