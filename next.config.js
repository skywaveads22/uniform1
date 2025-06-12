/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: []
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(txt|xml|md)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    });
    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
}

module.exports = nextConfig;
