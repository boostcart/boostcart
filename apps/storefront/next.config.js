/**
 * Storefront Next.js configuration
 * This app handles customer-facing store pages
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	devIndicators: false,

	// Enable experimental features
	experimental: {
		// Server actions for customer auth
		serverActions: {
			bodySizeLimit: "2mb",
		},
	},

	// Images from store media (Cloudflare R2)
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
			{
				protocol: "https",
				hostname: "bcm.lanoow.dev",
			},
		],
	},
};

export default config;
