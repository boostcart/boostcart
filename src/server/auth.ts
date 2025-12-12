import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@/server/db";

export const auth = betterAuth({
  database: prismaAdapter(db, {
		provider: "postgresql"
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			clientId: process.env.BETTER_AUTH_GOOGLE_ID as string || "",
			clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET as string || "",
		}
	}
});