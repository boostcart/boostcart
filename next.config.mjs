import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: false,
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.**.**'
			},
			{
				protocol: 'https',
				hostname: 'utfs.io'
			}
		]
	},
	experimental: {
		serverSourceMaps: false,
		serverActions: {
			bodySizeLimit: '100mb'
		},
		authInterrupts: true
	},
	productionBrowserSourceMaps: false,
	serverExternalPackages: ["yjs"],
	devIndicators: false,
};

export default withNextIntl(nextConfig);
