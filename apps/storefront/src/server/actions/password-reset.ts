"use server";

import { randomBytes } from "node:crypto";
import { db } from "@/server/db";
import { emailService } from "@/server/email";
import { getCurrentTenant } from "@/server/tenant";

/**
 * Request password reset - sends email with reset link
 */
export async function requestPasswordReset(email: string) {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return { success: false, error: "Store not found" };
	}

	try {
		// Find customer
		const customer = await db.customer.findUnique({
			where: {
				tenantId_email: {
					tenantId: tenant.id,
					email: email.toLowerCase(),
				},
			},
		});

		// Always return success to prevent email enumeration
		if (!customer) {
			return { success: true };
		}

		// Generate reset token (32 random bytes)
		const token = randomBytes(32).toString("hex");
		const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

		// Save token
		await db.passwordReset.upsert({
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
				usedAt: null, // Reset if previously used
			},
		});

		// Send email
		const resetUrl = `https://${tenant.subdomain}.boostcart.bg/account/reset-password?token=${token}`;

		await emailService.sendPasswordReset({
			email: customer.email,
			resetUrl,
			storeName: tenant.name,
			expiresIn: "1 час",
		});

		return { success: true };
	} catch (error) {
		console.error("Password reset request error:", error);
		return { success: false, error: "Failed to process request" };
	}
}

/**
 * Reset password using token
 */
export async function resetPassword(token: string, newPassword: string) {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return { success: false, error: "Store not found" };
	}

	if (!newPassword || newPassword.length < 8) {
		return { success: false, error: "Password must be at least 8 characters" };
	}

	try {
		// Find valid reset token
		const resetToken = await db.passwordReset.findUnique({
			where: { token },
			include: { customer: true },
		});

		if (!resetToken) {
			return { success: false, error: "Invalid or expired reset link" };
		}

		// Check if expired
		if (resetToken.expiresAt < new Date()) {
			return { success: false, error: "Reset link has expired" };
		}

		// Check if already used
		if (resetToken.usedAt) {
			return { success: false, error: "Reset link has already been used" };
		}

		// Verify customer belongs to this tenant
		if (resetToken.customer.tenantId !== tenant.id) {
			return { success: false, error: "Invalid reset link" };
		}

		// Hash password
		const bcrypt = await import("bcryptjs");
		const hashedPassword = await bcrypt.hash(newPassword, 10);

		// Update password and mark token as used
		await db.$transaction([
			db.customer.update({
				where: { id: resetToken.customerId },
				data: { password: hashedPassword },
			}),
			db.passwordReset.update({
				where: { id: resetToken.id },
				data: { usedAt: new Date() },
			}),
		]);

		return { success: true };
	} catch (error) {
		console.error("Password reset error:", error);
		return { success: false, error: "Failed to reset password" };
	}
}
