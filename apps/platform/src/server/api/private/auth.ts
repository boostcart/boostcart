"use server";

import { headers } from "next/headers";
import {
	SetPasswordSchema,
	type SetPasswordSchemaType,
	UpdatePasswordSchema,
	type UpdatePasswordSchemaType,
	UpdatePersonalInfoSchema,
	type UpdatePersonalInfoSchemaType,
} from "@/schemas";
import { auth } from "@/server/auth";
import { auth as betterAuthInstance } from "@/server/auth/auth";
import { db } from "@/server/db";
import { getCurrentUser } from "../shared";

/**
 * Update password using better-auth's changePassword.
 * Better-auth handles password hashing internally with scrypt - DO NOT manually hash passwords.
 */
export async function updatePassword(data: UpdatePasswordSchemaType) {
	if (!data) return { error: "no_data" };

	const user = await getCurrentUser();

	if (!user) return { error: "not_logged_in" };

	// Check if user has a credential account (better-auth stores passwords here)
	const credentialsAccount = await db.account.findFirst({
		where: {
			userId: user.id,
			providerId: "credential",
		},
		select: {
			id: true,
			password: true,
		},
	});

	if (!credentialsAccount?.password) {
		return { error: "password_not_set" };
	}

	const validatedData = UpdatePasswordSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { oldPassword, newPassword } = validatedData.data;

	try {
		// Use better-auth's changePassword API - it handles password verification and hashing with scrypt
		const result = await betterAuthInstance.api.changePassword({
			headers: await headers(),
			body: {
				currentPassword: oldPassword,
				newPassword: newPassword,
				revokeOtherSessions: false,
			},
		});

		if (!result) {
			return { error: "invalid_old_password" };
		}

		return { success: true };
	} catch (error: unknown) {
		console.error("Error updating password:", error);

		// Check for specific error types from better-auth
		if (error && typeof error === "object" && "message" in error) {
			const errorMessage = (error as { message: string }).message.toLowerCase();
			if (
				errorMessage.includes("password") ||
				errorMessage.includes("invalid") ||
				errorMessage.includes("incorrect")
			) {
				return { error: "invalid_old_password" };
			}
		}

		return { error: "something_went_wrong" };
	}
}

/**
 * Set password for users who signed up via OAuth and don't have a password.
 * Uses better-auth's setPassword API - it handles password hashing with scrypt internally.
 */
export async function setPassword(data: SetPasswordSchemaType) {
	if (!data) return { error: "no_data" };

	const user = await getCurrentUser();

	if (!user) return { error: "not_logged_in" };

	// Check if user already has a credential account with password
	const existingCredentialsAccount = await db.account.findFirst({
		where: {
			userId: user.id,
			providerId: "credential",
		},
	});

	if (existingCredentialsAccount?.password) {
		return { error: "password_already_set" };
	}

	const validatedData = SetPasswordSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { password, confirmPassword } = validatedData.data;

	if (password !== confirmPassword) {
		return { error: "passwords_do_not_match" };
	}

	try {
		// Use better-auth's setPassword API - it handles password hashing with scrypt
		await betterAuthInstance.api.setPassword({
			headers: await headers(),
			body: {
				newPassword: password,
			},
		});

		return { success: true };
	} catch (error) {
		console.error("Error setting password:", error);
		return { error: "something_went_wrong" };
	}
}

export async function updatePersonalInfo(data: UpdatePersonalInfoSchemaType) {
	if (!data) return { error: "no_data" };

	const user = await getCurrentUser();

	if (!user) return { error: "not_logged_in" };

	const validatedData = UpdatePersonalInfoSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { firstName, lastName, email } = validatedData.data;

	if (email !== user.email) {
		const emailExists = await db.user.findUnique({
			where: { email },
		});

		if (emailExists) {
			return { error: "email_already_taken" };
		}
	}

	if (
		firstName === user.firstName &&
		lastName === user.lastName &&
		email === user.email
	) {
		return { success: true };
	}

	try {
		await db.user.update({
			where: { id: user.id },
			data: { firstName, lastName, email },
		});

		return { success: true };
	} catch {
		return { error: "something_went_wrong" };
	}
}

export async function unlinkAccount({ provider }: { provider: string }) {
	if (!provider) return { error: "invalid_provider" } as const;

	const user = await getCurrentUser();
	if (!user) return { error: "not_logged_in" } as const;

	// Ensure the account exists
	const account = await db.account.findFirst({
		where: { userId: user.id, providerId: provider },
		select: { id: true },
	});

	if (!account) return { error: "account_not_found" } as const;

	// Safety: don't allow unlinking the last sign-in method if user has no password
	const totalLinked = await db.account.count({ where: { userId: user.id } });

	// Check if user has a credential account with password
	const credentialAccount = await db.account.findFirst({
		where: {
			userId: user.id,
			providerId: "credential",
		},
		select: { password: true },
	});

	const hasPassword = !!credentialAccount?.password;
	if (!hasPassword && totalLinked <= 1) {
		return { error: "cannot_unlink_last_method" } as const;
	}

	try {
		await db.account.delete({ where: { id: account.id } });
		// Refresh session to reflect changes
		await auth();
		return { success: true } as const;
	} catch {
		return { error: "something_went_wrong" } as const;
	}
}
