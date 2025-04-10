import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	trailingSlash: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.**.**",
			},
			{
				protocol: "https",
				hostname: "utfs.io",
			},
		],
	},
	experimental: {
		serverSourceMaps: false,
		serverActions: {
			bodySizeLimit: "100mb",
		},
		authInterrupts: true,
		useLightningcss: true,
	},
	productionBrowserSourceMaps: false,
	serverExternalPackages: ["yjs"],
	devIndicators: false,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
