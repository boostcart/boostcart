"use server";

import { auth } from "@/server/auth/auth";
import { db } from "@/server/db";

export async function checkAndResendVerification(email: string) {
	try {
		// Check if user exists
		const user = await db.user.findUnique({ where: { email } });

		if (!user) {
			return { error: "user_not_found" };
		}

		// Check if email is already verified
		if (user.emailVerified) {
			return { error: "already_verified" };
		}

		// Check for existing verification token from better-auth
		const existingToken = await db.verification.findFirst({
			where: { identifier: email },
			orderBy: { expiresAt: "desc" },
		});

		// If token exists and is not expired, do nothing
		if (existingToken && existingToken.expiresAt > new Date()) {
			return {
				success: true,
				message: "verification_email_already_sent",
				expiresAt: existingToken.expiresAt,
			};
		}

		// Use better-auth to send verification email
		await auth.api.sendVerificationEmail({
			body: { email },
		});

		return {
			success: true,
			message: "verification_email_sent",
		};
	} catch (error) {
		console.error("Error checking/resending verification:", error);
		return { error: "something_went_wrong" };
	}
}
