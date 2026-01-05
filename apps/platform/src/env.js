import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		BASE_URL: z.url().default("http://localhost:3000"),
		AUTH_SECRET:
			process.env.NODE_ENV === "production"
				? z.string()
				: z.string().optional(),
		AUTH_GOOGLE_ID: z.string().optional(),
		AUTH_GOOGLE_SECRET: z.string().optional(),
		DATABASE_URL: z.url(),
		DIRECT_URL: z.url().optional(),
		RESEND_API_KEY: z.string(),
		EMAIL_FROM: z.string(),
		UPLOADTHING_TOKEN: z.string().optional(),
		// Cloudflare R2 Storage
		R2_ACCOUNT_ID: z.string(),
		R2_ACCESS_KEY_ID: z.string(),
		R2_SECRET_ACCESS_KEY: z.string(),
		R2_BUCKET_NAME: z.string(),
		R2_ENDPOINT: z.string().optional(), // Optional: for regional buckets (e.g., eu.r2.cloudflarestorage.com)
		R2_CUSTOM_DOMAIN: z.string().optional(), // Public URL for files
		// Redis
		REDIS_URL: z.string().optional(),
		// Webhooks
		DOMAIN_WEBHOOK_SECRET: z.string().optional(),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
	},

	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string(),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		BASE_URL: process.env.BASE_URL,
		AUTH_SECRET: process.env.AUTH_SECRET,
		AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
		AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
		DATABASE_URL: process.env.DATABASE_URL,
		DIRECT_URL: process.env.DIRECT_URL,
		RESEND_API_KEY: process.env.RESEND_API_KEY,
		EMAIL_FROM: process.env.EMAIL_FROM,
		UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
		// Cloudflare R2 Storage
		R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
		R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
		R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
		R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
		R2_ENDPOINT: process.env.R2_ENDPOINT,
		R2_CUSTOM_DOMAIN: process.env.R2_CUSTOM_DOMAIN,
		// Redis
		REDIS_URL: process.env.REDIS_URL,
		// Webhooks
		DOMAIN_WEBHOOK_SECRET: process.env.DOMAIN_WEBHOOK_SECRET,
		NODE_ENV: process.env.NODE_ENV,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	/**
	 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
	 * `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,
});
