"use server";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcrypt";
import { CredentialsSignin } from "next-auth";
import {
	ForgotPasswordSchema,
	type ForgotPasswordSchemaType,
	ResetPasswordSchema,
	type ResetPasswordSchemaType,
	SignInSchema,
	type SignInSchemaType,
	SignUpSchema,
	type SignUpSchemaType,
} from "@/schemas";
import { signIn } from "@/server/auth";
import { db } from "@/server/db";
import {
	sendEmailVerification,
	sendPasswordReset,
} from "@/server/services/email/send";
import { getUserByEmail, getVerificationTokenByToken } from "../helpers";
import { getCurrentUser } from "../shared";

/**
 * Public API
 * This file contains the public API. Used for user authentication and registration.
 * The functions here are intended to be used from unauthenticated users.
 */

/**
 * @param data Takes first and last name, email, and password.
 * @returns success or error message.
 */
export async function userSignUp(data: SignUpSchemaType) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const validatedData = SignUpSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { firstName, lastName, email, password } = validatedData.data;

	const hashedPassword = await bcrypt.hash(password, 12);

	try {
		await db.user.create({
			data: {
				firstName,
				lastName,
				name: `${firstName} ${lastName}`,
				email,
				password: hashedPassword,
			},
		});

		await sendEmailVerification(email);

		return { success: true };
	} catch (error) {
		if (error instanceof PrismaClientKnownRequestError) {
			// P2002 is the error code for unique constraint violation
			if (error.code === "P2002") return { error: "email_already_exists" };
		}

		return { error: "something_went_wrong" };
	}
}

/**
 * @param data Takes email and password.
 * @returns success or error message.
 */
export async function userSignIn(data: SignInSchemaType) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const validatedData = SignInSchema.safeParse(data);

	if (!validatedData.success) {
		return { error: "invalid_data" };
	}

	const { email, password } = validatedData.data;

	const user = await getUserByEmail(email);

	if (!user) return { error: "user_not_found" };

	if (!user.password) return { error: "password_not_set" };

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) return { error: "invalid_password" };

	try {
		const result = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		if (result?.error) {
			return { error: "sign_in_failed" };
		}

		return { success: true };
	} catch (error) {
		if (error instanceof CredentialsSignin) {
			if (error.code === "credentials") {
				return { error: "invalid_password" };
			}

			return { error: "something_went_wrong" };
		}

		return { error: "something_went_wrong" };
	}
}

/**
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

	if (!user.password) return { error: "password_not_set" };

	try {
		await sendPasswordReset(email);

		return { success: true };
	} catch {
		return { error: "something_went_wrong" };
	}
}

/**
 * @param data Takes token, email, password, and confirmPassword.
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

	const verificationToken = await getVerificationTokenByToken("reset", token);
	
	if (!verificationToken) return { error: "invalid_token" };

	if (new Date() > verificationToken.expires) {
		return { error: "token_expired" };
	}

	const user = await getUserByEmail(verificationToken?.email);

	if (!user || !user.email) return { error: "user_not_found" };

	if (!user.password) return { error: "password_not_set" };

	const hashedPassword = await bcrypt.hash(password, 12);

	try {
		await db.user.update({
			where: { email: user.email },
			data: { password: hashedPassword },
		});

		return { success: true };
	} catch {
		return { error: "something_went_wrong" };
	}
}
