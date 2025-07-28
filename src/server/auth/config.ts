import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from "@prisma/client";
import type { DefaultSession, NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { db } from "@/server/db";

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
	providers: [GoogleProvider],
	// @ts-ignore I don't know why the fuck this gives an error but it works.
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
