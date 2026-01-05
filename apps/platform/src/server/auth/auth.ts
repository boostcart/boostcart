import { createAuth } from "@boostcart/auth/server";
import { db } from "@/server/db";

/**
 * Platform auth instance using the shared @boostcart/auth package.
 *
 * This configures Better Auth with:
 * - Email/password authentication
 * - Magic link authentication
 * - Google OAuth
 * - Email verification
 */
export const auth = createAuth({
	db,
	baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
	trustedOrigins: [
		process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
		"http://localhost:3000",
	],
	email: {
		resendApiKey: process.env.RESEND_API_KEY,
		from: process.env.EMAIL_FROM || "BoostCart <noreply@boostcart.com>",
	},
	socialProviders: {
		google: {
			clientId: process.env.AUTH_GOOGLE_ID || "",
			clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
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
