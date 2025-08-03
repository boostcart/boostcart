"use server";

import bcrypt from "bcrypt";
import {
	SetPasswordSchema,
	type SetPasswordSchemaType,
	UpdatePasswordSchema,
	type UpdatePasswordSchemaType,
} from "@/schemas";
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
