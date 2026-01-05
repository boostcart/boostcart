import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";
import type { AuthConfig } from "./types";
import { emailTemplates } from "./email-templates";

/**
 * Create a Better Auth instance with the given configuration.
 *
 * @example
 * ```ts
 * import { createAuth } from "@boostcart/auth/server";
 * import { db } from "./db";
 *
 * export const auth = createAuth({
 *   db,
 *   baseURL: process.env.NEXT_PUBLIC_APP_URL!,
 *   email: {
 *     resendApiKey: process.env.RESEND_API_KEY,
 *     from: "BoostCart <noreply@boostcart.com>",
 *   },
 * });
 * ```
 */
export function createAuth(config: AuthConfig) {
	const {
		db,
		baseURL,
		trustedOrigins = [baseURL, "http://localhost:3000"],
		email,
		socialProviders,
		session = {},
	} = config;

	const resend = email?.resendApiKey ? new Resend(email.resendApiKey) : null;
	const emailFrom = email?.from || "BoostCart <noreply@boostcart.com>";

	const auth = betterAuth({
		database: prismaAdapter(db, {
			provider: "postgresql",
		}),
		baseURL,
		trustedOrigins,
		emailAndPassword: {
			enabled: true,
			requireEmailVerification: true,
			sendResetPassword: async ({ user, url }) => {
				if (!resend) {
					console.warn("Resend not configured, skipping password reset email");
					return;
				}

				const template = emailTemplates.resetPassword({ user, url });
				// Don't await to prevent timing attacks
				void resend.emails.send({
					from: emailFrom,
					to: user.email,
					subject: template.subject,
					html: template.html,
				});
			},
		},
		socialProviders: socialProviders?.google
			? {
					google: {
						clientId: socialProviders.google.clientId,
						clientSecret: socialProviders.google.clientSecret,
					},
				}
			: undefined,
		plugins: [
			magicLink({
				sendMagicLink: async ({ email: userEmail, url }) => {
					if (!resend) {
						console.warn("Resend not configured, skipping magic link email");
						return;
					}

					// Auto-verify email when they use magic link
					const user = await db.user.findUnique({ where: { email: userEmail } });
					if (user && !user.emailVerified) {
						await db.user.update({
							where: { email: userEmail },
							data: {
								emailVerified: true,
								emailVerifiedAt: new Date(),
							},
						});
					}

					const template = emailTemplates.magicLink({ email: userEmail, url });
					await resend.emails.send({
						from: emailFrom,
						to: userEmail,
						subject: template.subject,
						html: template.html,
					});
				},
			}),
		],
		emailVerification: {
			sendVerificationEmail: async ({ user, url }) => {
				if (!resend) {
					console.warn("Resend not configured, skipping verification email");
					return;
				}

				const template = emailTemplates.verifyEmail({ user, url });
				await resend.emails.send({
					from: emailFrom,
					to: user.email,
					subject: template.subject,
					html: template.html,
				});
			},
			onVerify: async ({ user }: { user: { id: string } }) => {
				await db.user.update({
					where: { id: user.id },
					data: {
						emailVerifiedAt: new Date(),
					},
				});
			},
		},
		session: {
			expiresIn: session.expiresIn ?? 60 * 60 * 24 * 7, // 7 days
			updateAge: session.updateAge ?? 60 * 60 * 24, // 1 day
		},
	});

	return auth;
}

/**
 * Type helper to infer session type from auth instance
 */
export type InferSession<T extends ReturnType<typeof createAuth>> = T["$Infer"]["Session"];

// Re-export types
export type { Session, User, AuthConfig } from "./types";
