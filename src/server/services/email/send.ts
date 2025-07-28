import { Resend } from "resend";
import { env } from "@/env";
import { generateVerificationToken } from "./utils";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmailVerification(email: string) {
	const validFor = 24; // in hours
	const verificationToken = await generateVerificationToken("verify", email, validFor);

	if (!verificationToken) return;

	await resend.emails.send({
		from: env.EMAIL_FROM,
		to: email,
		subject: "Verify your email",
		html: `
			<p>Click the link below to verify your email:</p>
			<a href="${env.BASE_URL}/api/auth/verify-email?token=${verificationToken.token}">Verify Email</a>
			<br />
			<p>The link expires in ${validFor} ${validFor > 1 ? "hours" : "hour"}, if it has expired you can request a new one by clicking <a href="${env.BASE_URL}/api/auth/resend-verification?email=${email}">here</a>.</p>
			<br />
			<p>If you did not request this email, please ignore it.</p>
		`,
	});
}

export async function sendPasswordReset(email: string) {
	const validFor = 1; // in hours
	const verificationToken = await generateVerificationToken("reset", email, validFor);

	if (!verificationToken) return;

	await resend.emails.send({
		from: env.EMAIL_FROM,
		to: email,
		subject: "Reset your password",
		html: `
			<p>Click the link below to reset your password:</p>
			<a href="${env.BASE_URL}/reset-password?token=${verificationToken.token}">Reset Password</a>
			<br />
			<p>The link expires in ${validFor} ${validFor > 1 ? "hours" : "hour"}, if it has expired you can request a new one by clicking <a href="${env.BASE_URL}/api/auth/resend-reset?email=${email}">here</a>.</p>
			<br />
			<p>If you did not request this email, please ignore it.</p>
		`,
	});
}
