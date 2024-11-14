/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.unsplash.com'
			},
			{
				protocol: 'https',
				hostname: 'flagcdn.com'
			}
		]
	}
};

module.exports = nextConfig;
