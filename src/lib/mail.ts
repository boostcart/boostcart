import ForgotPasswordEmail from "@/emails/auth/forgot-password";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * 
 * @param name The name of the user
 * @param email The email to send the reset link to
 * @param token The token to reset the password
 * @param expires The time in hours the token is valid for
 */
export const sendResetEmail = async (name: string, email: string, token: string) => {
	const resetLink = `${process.env.APP_URL}/reset-password?token=${token}`;
	const requestNewLink = `${process.env.APP_URL}/forgot-password`;
	name = name.split(' ')[0];

	await resend.emails.send({
		from: "OW-Ecom <noreply@boostcart.lanoow.dev>",
		to: email,
		subject: "Reset your password | BoostCart",
		react: ForgotPasswordEmail({ name, resetLink, requestNewLink })
	});
}