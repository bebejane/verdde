export const locales = ["sv"];
export const defaultLocale = "sv";

const sassOptions = {
	includePaths: ["./components", "./pages"],
	prependData: `
    @use "sass:math";
    @import "./styles/mediaqueries"; 
    @import "./styles/fonts";
  `,
};

export default async (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		sassOptions,
		typescript: {
			ignoreBuildErrors: true,
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
		devIndicators: {
			buildActivity: false,
		},
		experimental: {
			scrollRestoration: true,
		},
		webpack: (config, ctx) => {
			config.module.rules.push({
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: "graphql-tag/loader",
			});
			config.module.rules.push({
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: ["@svgr/webpack"],
			});
			return config;
		},
		async headers() {
			return [
				{
					source: "/api/web-previews",
					headers: [
						{ key: "Access-Control-Allow-Credentials", value: "true" },
						{ key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
						{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
						{
							key: "Content-Security-Policy",
							value: "frame-ancestors 'self' https://plugins-cdn.datocms.com",
						},
						{
							key: "Access-Control-Allow-Headers",
							value:
								"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
						},
					],
				},
				{
					source: "/api/:path*",
					headers: [
						{ key: "Access-Control-Allow-Credentials", value: "true" },
						{ key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
						{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
						{
							key: "Content-Security-Policy",
							value: "frame-ancestors 'self' https://plugins-cdn.datocms.com",
						},
						{
							key: "Access-Control-Allow-Headers",
							value:
								"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
						},
					],
				},
			];
		},
	};
	return nextConfig;
};
