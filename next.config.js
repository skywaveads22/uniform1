/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  output: 'export',
  basePath: process.env.NETLIFY ? '' : '/uniform1',
  assetPrefix: process.env.NETLIFY ? '' : '/uniform1/',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Exclude specific files from being processed by webpack
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
  // Note: redirects and middleware won't work with output: 'export'
  // We're keeping these configurations for reference only
}

module.exports = nextConfig; 