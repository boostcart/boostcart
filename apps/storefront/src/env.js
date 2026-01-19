import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Server-side environment variables schema
	 */
	server: {
		DATABASE_URL: z.string().url(),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),

		// JWT Secret for customer auth
		JWT_SECRET: z.string().min(32),

		// Email (Resend)
		RESEND_API_KEY: z.string().optional(),

		// Cookie settings
		COOKIE_DOMAIN: z.string().optional(),
	},

	/**
	 * Client-side environment variables schema
	 */
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string(),
	},

	/**
	 * Runtime environment variables
	 */
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		NODE_ENV: process.env.NODE_ENV,
		JWT_SECRET: process.env.JWT_SECRET,
		RESEND_API_KEY: process.env.RESEND_API_KEY,
		COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
	},

	/**
	 * Skip validation in certain environments
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,

	/**
	 * Makes it so that empty strings are treated as undefined
	 */
	emptyStringAsUndefined: true,
});
