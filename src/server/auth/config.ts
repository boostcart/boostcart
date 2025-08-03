import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import type { DefaultSession, NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import ResendProvider from "next-auth/providers/resend";
import { SignInSchema } from "@/schemas";
import { db } from "@/server/db";
import { getUserByEmail } from "../api/helpers";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
			role: UserRole; // Custom property for user role
		} & DefaultSession["user"];
	}

	interface User {
		role: UserRole;
	}
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
	providers: [
		ResendProvider({
			apiKey: process.env.RESEND_API_KEY || "",
			from: process.env.EMAIL_FROM || "BoostCart <noreply@example.com>",
		}),
		GoogleProvider,
		CredentialsProvider({
			credentials: {
				email: {
					type: "email",
					label: "Email",
					placeholder: "Enter your email",
				},
				password: {
					type: "password",
					label: "Password",
					placeholder: "Enter your password",
				},
			},
			authorize: async (credentials) => {
				const validatedData = SignInSchema.safeParse(credentials);

				if (!validatedData.success) return null;

				const { email, password } = validatedData.data;

				const user = await getUserByEmail(email);

				if (!user || !user.password) {
					return null; // User not found or no password set
				}

				const isPasswordValid = await bcrypt.compare(password, user.password);

				if (!isPasswordValid) {
					return null; // Invalid password
				}

				return user;
			},
		}),
	],
	// @ts-expect-error I don't know why the fuck this gives an error but it works.
	adapter: PrismaAdapter(db),
	session: {
		strategy: "database",
	},
	callbacks: {
		session({ session, user }) {
			return {
				...session,
				user: {
					...session.user,
					role: user.role as UserRole, // Ensure the user role is typed correctly
				},
			};
		},
	},
} satisfies NextAuthConfig;
