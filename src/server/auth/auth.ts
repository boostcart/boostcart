import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";
import { db } from "@/server/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
	database: prismaAdapter(db, {
		provider: "postgresql",
	}),
	baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
	trustedOrigins: [
		process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
		"http://localhost:3000",
	],
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		// Password reset configuration - better-auth handles hashing internally with scrypt
		sendResetPassword: async ({ user, url }) => {
			// Don't await to prevent timing attacks
			void resend.emails.send({
				from: process.env.EMAIL_FROM || "BoostCart <noreply@boostcart.com>",
				to: user.email,
				subject: "Reset your password",
				html: `
					<!DOCTYPE html>
					<html>
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
						</head>
						<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
							<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
								<h1 style="color: white; margin: 0; font-size: 28px;">Reset Your Password</h1>
							</div>
							<div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
								<p style="font-size: 16px; margin-bottom: 20px;">Hi ${user.name || "there"}!</p>
								<p style="font-size: 16px; margin-bottom: 20px;">We received a request to reset your password. Click the button below to create a new password:</p>
								<div style="text-align: center; margin: 30px 0;">
									<a href="${url}" style="background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;">Reset Password</a>
								</div>
								<p style="font-size: 14px; color: #666; margin-top: 30px;">If you didn't request this password reset, you can safely ignore this email.</p>
								<p style="font-size: 14px; color: #666; margin-top: 10px;">This link will expire in 1 hour.</p>
							</div>
							<div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
								<p>© ${new Date().getFullYear()} BoostCart. All rights reserved.</p>
							</div>
						</body>
					</html>
				`,
			});
		},
	},
	socialProviders: {
		google: {
			clientId: process.env.AUTH_GOOGLE_ID || "",
			clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
		},
	},
	plugins: [
		magicLink({
			sendMagicLink: async ({ email, url }) => {
				// Send magic link via Resend
				const { Resend } = await import("resend");
				const resend = new Resend(process.env.RESEND_API_KEY);
				
				// Auto-verify email when they use magic link
				const user = await db.user.findUnique({ where: { email } });
				if (user && !user.emailVerified) {
					await db.user.update({
						where: { email },
						data: {
							emailVerified: true,
							emailVerifiedAt: new Date(),
						},
					});
				}
				
				await resend.emails.send({
					from: process.env.EMAIL_FROM || "BoostCart <noreply@boostcart.com>",
					to: email,
					subject: "Sign in to BoostCart",
					html: `
						<!DOCTYPE html>
						<html>
							<head>
								<meta charset="utf-8">
								<meta name="viewport" content="width=device-width, initial-scale=1.0">
							</head>
							<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
								<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
									<h1 style="color: white; margin: 0; font-size: 28px;">Welcome back!</h1>
								</div>
								<div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
									<p style="font-size: 16px; margin-bottom: 20px;">Click the button below to sign in to your BoostCart account:</p>
									<div style="text-align: center; margin: 30px 0;">
										<a href="${url}" style="background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;">Sign In</a>
									</div>
									<p style="font-size: 14px; color: #666; margin-top: 30px;">If you didn't request this email, you can safely ignore it.</p>
									<p style="font-size: 14px; color: #666; margin-top: 10px;">This link will expire in 5 minutes.</p>
								</div>
								<div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
									<p>© ${new Date().getFullYear()} BoostCart. All rights reserved.</p>
								</div>
							</body>
						</html>
					`,
				});
			},
		}),
	],
	emailVerification: {
		sendVerificationEmail: async ({ user, url }) => {
			// Send verification email
			const { Resend } = await import("resend");
			const resend = new Resend(process.env.RESEND_API_KEY);
			
			await resend.emails.send({
				from: process.env.EMAIL_FROM || "BoostCart <noreply@boostcart.com>",
				to: user.email,
				subject: "Verify your email address",
				html: `
					<!DOCTYPE html>
					<html>
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
						</head>
						<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
							<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
								<h1 style="color: white; margin: 0; font-size: 28px;">Verify Your Email</h1>
							</div>
							<div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
								<p style="font-size: 16px; margin-bottom: 20px;">Hi ${user.name || "there"}!</p>
								<p style="font-size: 16px; margin-bottom: 20px;">Thanks for signing up for BoostCart. Please verify your email address by clicking the button below:</p>
								<div style="text-align: center; margin: 30px 0;">
									<a href="${url}" style="background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;">Verify Email</a>
								</div>
								<p style="font-size: 14px; color: #666; margin-top: 30px;">If you didn't create an account, you can safely ignore this email.</p>
							</div>
							<div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
								<p>© ${new Date().getFullYear()} BoostCart. All rights reserved.</p>
							</div>
						</body>
					</html>
				`,
			});
		},
		onVerify: async ({ user }: { user: { id: string } }) => {
			// Update emailVerifiedAt when user verifies
			await db.user.update({
				where: { id: user.id },
				data: {
					emailVerifiedAt: new Date(),
				},
			});
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24, // 1 day
	},
});

export type Session = typeof auth.$Infer.Session.session & {
	user: typeof auth.$Infer.Session.user & {
		role: "USER" | "ADMIN";
		firstName?: string | null;
		lastName?: string | null;
	};
};

export type User = typeof auth.$Infer.Session.user & {
	role: "USER" | "ADMIN";
	firstName?: string | null;
	lastName?: string | null;
};
