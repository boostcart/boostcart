"use server";

import bcrypt from "bcrypt";
import {
	SetPasswordSchema,
	type SetPasswordSchemaType,
	UpdatePasswordSchema,
	type UpdatePasswordSchemaType,
	UpdatePersonalInfoSchema,
	type UpdatePersonalInfoSchemaType,
} from "@/schemas";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { getCurrentUser } from "../shared";

export async function updatePassword(data: UpdatePasswordSchemaType) {
	if (!data) return { error: "no_data" };

	const user = await getCurrentUser();

	if (!user) return { error: "not_logged_in" };

	if (!user.password) return { error: "password_not_set" };

	const validatedData = UpdatePasswordSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { oldPassword, newPassword } = validatedData.data;

	const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

	if (!isPasswordValid) return { error: "invalid_old_password" };

	const hashedPassword = await bcrypt.hash(newPassword, 12);

	try {
		await db.user.update({
			where: { id: user.id },
			data: { password: hashedPassword },
		});

		return { success: true };
	} catch {
		return { error: "something_went_wrong" };
	}
}

export async function setPassword(data: SetPasswordSchemaType) {
	if (!data) return { error: "no_data" };

	const user = await getCurrentUser();

	if (!user) return { error: "not_logged_in" };

	if (user.password) return { error: "password_already_set" };

	const validatedData = SetPasswordSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { password, confirmPassword } = validatedData.data;

	if (password !== confirmPassword) {
		return { error: "passwords_do_not_match" };
	}

	const hashedPassword = await bcrypt.hash(password, 12);

	try {
		await db.user.update({
			where: { id: user.id },
			data: { password: hashedPassword },
		});

		return { success: true };
	} catch {
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
		where: { userId: user.id, provider },
		select: { id: true },
	});

	if (!account) return { error: "account_not_found" } as const;

	// Safety: don't allow unlinking the last sign-in method if user has no password
	const totalLinked = await db.account.count({ where: { userId: user.id } });
	const hasPassword = !!user.password;
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
