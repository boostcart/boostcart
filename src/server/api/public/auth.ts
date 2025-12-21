"use server";

import {
	ForgotPasswordSchema,
	type ForgotPasswordSchemaType,
	ResetPasswordSchema,
	type ResetPasswordSchemaType,
} from "@/schemas";
import { auth as betterAuthInstance } from "@/server/auth/auth";
import { db } from "@/server/db";
import { getUserByEmail } from "../helpers";
import { getCurrentUser } from "../shared";

/**
 * Public API
 * This file contains the public API for password reset flow using better-auth.
 * Better-auth handles password hashing internally with scrypt - DO NOT manually hash passwords.
 */

/**
 * Request a password reset email.
 * Uses better-auth's built-in forgetPassword which handles token generation and email sending.
 * @param data Takes email.
 * @returns success or error message.
 */
export async function userForgotPassword(data: ForgotPasswordSchemaType) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const validatedData = ForgotPasswordSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { email } = validatedData.data;

	const user = await getUserByEmail(email);

	if (!user) return { error: "user_not_found" };

	// Check if user has a credential account with password
	const credentialAccount = await db.account.findFirst({
		where: {
			userId: user.id,
			providerId: "credential",
		},
		select: { password: true },
	});

	if (!credentialAccount?.password) {
		return { error: "password_not_set" };
	}

	try {
		// Use better-auth's password reset - it handles everything including email sending
		await betterAuthInstance.api.requestPasswordReset({
			body: {
				email,
				redirectTo: "/reset-password",
			},
		});

		return { success: true };
	} catch (error) {
		console.error("Error requesting password reset:", error);
		return { error: "something_went_wrong" };
	}
}

/**
 * Reset password using better-auth's resetPassword.
 * Better-auth handles password hashing internally with scrypt - DO NOT manually hash passwords.
 * @param data Takes token and new password.
 * @returns success or error message.
 */
export async function userResetPassword(data: ResetPasswordSchemaType) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const validatedData = ResetPasswordSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { token, password } = validatedData.data;

	try {
		// Use better-auth's resetPassword - it handles password hashing with scrypt internally
		const result = await betterAuthInstance.api.resetPassword({
			body: {
				newPassword: password,
				token,
			},
		});

		if (!result) {
			return { error: "invalid_token" };
		}

		return { success: true };
	} catch (error: unknown) {
		console.error("Error resetting password:", error);
		
		// Check for specific error types
		if (error && typeof error === "object" && "message" in error) {
			const errorMessage = (error as { message: string }).message.toLowerCase();
			if (errorMessage.includes("token") || errorMessage.includes("expired")) {
				return { error: "invalid_token" };
			}
		}
		
		return { error: "something_went_wrong" };
	}
}

/**
 * Check if a user has a credential account with password
 * @param email User's email address
 * @returns Object indicating if password exists
 */
export async function checkUserHasPassword(email: string) {
	try {
		const user = await getUserByEmail(email);
		
		if (!user) {
			return { hasPassword: false, error: "user_not_found" };
		}

		const credentialAccount = await db.account.findFirst({
			where: {
				userId: user.id,
				providerId: "credential",
			},
			select: { password: true },
		});

		return { 
			hasPassword: !!credentialAccount?.password,
			userId: user.id,
		};
	} catch {
		return { hasPassword: false, error: "something_went_wrong" };
	}
}
