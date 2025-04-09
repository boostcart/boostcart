import ForgotPasswordEmail from "@/emails/auth/forgot-password";
import VerifyEmail from "@/emails/auth/verify-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 *
 * @param name The name of the user
 * @param email The email to send the reset link to
 * @param code The code required to verify the email
 */
export const sendVerificationEmail = async (
	name: string,
	email: string,
	token: string,
) => {
	const verifyLink = `${process.env.APP_URL}/verify-email?token=${token}`;
	const requestNewLink = `${process.env.APP_URL}/verify-email?resend=true&email=${email}`;
	name = name.split(" ")[0];

	await resend.emails.send({
		from: "BoostCart <noreply@boostcart.lanoow.dev>",
		to: email,
		subject: "Verify your email 🚀 BoostCart",
		react: VerifyEmail({ name, email, verifyLink, requestNewLink }),
	});
};

/**
 *
 * @param name The name of the user
 * @param email The email to send the reset link to
 * @param token The token required to reset the password
 * @param expires The time in hours the token is valid for
 */
export const sendResetEmail = async (
	name: string,
	email: string,
	token: string,
) => {
	const resetLink = `${process.env.APP_URL}/reset-password?token=${token}`;
	const requestNewLink = `${process.env.APP_URL}/forgot-password`;
	name = name.split(" ")[0];

	await resend.emails.send({
		from: "BoostCart <noreply@boostcart.lanoow.dev>",
		to: email,
		subject: "Reset your password 🚀 BoostCart",
		react: ForgotPasswordEmail({ name, email, resetLink, requestNewLink }),
	});
};
