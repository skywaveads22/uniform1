/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NETLIFY ? '' : '/uniform1',
  assetPrefix: process.env.NETLIFY ? '' : '/uniform1/',
  images: {
    unoptimized: true,
    domains: ['seeklogo.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  experimental: {
    scrollRestoration: true,
    optimizeCss: true
  }
};

module.exports = nextConfig; 