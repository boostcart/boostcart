/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	devIndicators: false,
	experimental: {
		authInterrupts: true,
	},
	// Images from Cloudflare R2 storage
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.r2.cloudflarestorage.com",
			},
			{
				protocol: "https",
				hostname: "*.r2.dev",
			},
		],
	},
};

export default config;
