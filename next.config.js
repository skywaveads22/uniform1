/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['seeklogo.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig; 