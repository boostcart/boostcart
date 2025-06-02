import { getUserByEmail, getUserById } from "@/data/user";

import { prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@/app/generated/prisma/client";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import authConfig from "../auth.config";
import { LoginSchema } from "./schemas";

// import Facebook from "next-auth/providers/facebook";
// import Apple from "next-auth/providers/apple";

export const { auth, handlers, signIn, signOut } = NextAuth({
	callbacks: {
		async session({ session, token }) {
			if (session.user && token.sub) {
				session.user.id = token.sub;
			}

			if (session.user && token.role) {
				session.user.role = token.role as UserRole;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			token.role = existingUser.role;

			return token;
		},
	},
	adapter: PrismaAdapter(prisma),
	session: { strategy: "jwt" },
	...authConfig,
	providers: [
		Google,
		Credentials({
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			authorize: async (credentials) => {
				const validatedFields = LoginSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await getUserByEmail(email);

					if (!user || !user.password) return null;

					const isValid = await bcrypt.compare(password, user.password);

					if (isValid) return user;

					return null;
				}

				return null;
			},
		}),
	],
});
