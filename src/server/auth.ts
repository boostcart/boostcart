"use server";

import { sendResetEmail, sendVerificationEmail } from "@/lib/mail";
import { generateResetToken, generateVerificationToken } from "@/lib/utils";
import {
	ForgotPasswordSchema,
	ForgotPasswordSchemaType,
	LoginSchema,
	LoginSchemaType,
	SignUpSchema,
	SignUpSchemaType,
} from "@/schemas";

import { signIn } from "@/auth";
import { getVerificationTokenByToken } from "@/data/email-verification-token";
import { getUserByEmail } from "@/data/user";
import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth";

export async function signUp(data: SignUpSchemaType) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const validatedFields = SignUpSchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_fields" };

	const { name, email, password } = validatedFields.data;

	const hashedPassword = await bcrypt.hash(password, 12);

	try {
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		await sendVerificationLink(email);

		return { success: "signed_up" };
	} catch (error) {
		if (error instanceof PrismaClientKnownRequestError) {
			// P2002 is the error code for unique constraint violation
			if (error.code === "P2002") return { error: "email_already_exists" };
		}

		return { error: "something_went_wrong" };
	}
}

export async function login(data: LoginSchemaType) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const validatedFields = LoginSchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_fields" };

	const { email, password } = validatedFields.data;

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) return { error: "user_not_found" };

	if (!user.password) return { error: "no_password" };

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) return { error: "invalid_password" };

	try {
		const result = await signIn("credentials", {
			email,
			password,
			redirect: false, // Ensure no redirection
		});

		if (result?.error) {
			return { error: "invalid_password" };
		}

		return { success: "signed_in" };
	} catch (error) {
		if (error instanceof CredentialsSignin) {
			if (error.code == "credentials") {
				return { error: "invalid_password" };
			}

			return { error: "something_went_wrong" };
		}

		return { error: "something_went_wrong" };
	}
}

export async function sendVerificationLink(data: string) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(data)) return { error: "invalid_email" };

	const validatedFields = { email: data };

	const { email } = validatedFields;

	const user = await getUserByEmail(email);

	if (!user) return { error: "user_not_found" };

	const verificationToken = await generateVerificationToken(email);

	if (!verificationToken) return { error: "token_could_not_generate" };

	try {
		await sendVerificationEmail(user.name, email, verificationToken.token);
		return { success: "verification_email_sent" };
	} catch {
		return { error: "something_went_wrong" };
	}
}

export async function sendResetLink(data: ForgotPasswordSchemaType) {
	if (!data) return { error: "no_data" };

	const isUserLoggedIn = await getCurrentUser();

	if (isUserLoggedIn) return { error: "already_logged_in" };

	const validatedFields = ForgotPasswordSchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_fields" };

	const { email } = validatedFields.data;

	const user = await getUserByEmail(email);

	if (!user) return { error: "user_not_found" };

	const resetToken = await generateResetToken(email);

	if (!resetToken) return { error: "token_could_not_generate" };

	try {
		await sendResetEmail(user.name, email, resetToken.token);
		return { success: "reset_link_sent" };
	} catch {
		return { error: "something_went_wrong" };
	}
}

export const verifyEmail = async (token: string) => {
	if (!token) return { error: "no_data" };

	const existingToken = await getVerificationTokenByToken(token);

	if (!existingToken) return { error: "email_verification_token_not_found" };

	const hasExpired = new Date(existingToken.expires) < new Date();

	if (hasExpired) return { error: "email_verification_token_not_found" };

	const existingUser = await getUserByEmail(existingToken.email);

	if (!existingUser) return { error: "user_not_found" };

	await prisma.user.update({
		where: {
			id: existingUser.id,
		},
		data: {
			email: existingToken.email,
			emailVerified: new Date(),
		},
	});

	await prisma.emailVerificationToken.delete({
		where: { id: existingToken.id },
	});

	return { success: "email_verified" };
};
