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
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/app/services',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/services/aviation',
        destination: '/aviation',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/custom-design',
        destination: '/services/custom-design-branding',
        permanent: true,
      },
      {
        source: '/services/program-management',
        destination: '/services/uniform-program-management',
        permanent: true,
      },
      {
        source: '/industry/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/blog/categories/:category',
        destination: '/blog/category/:category',
        permanent: true,
      },
      {
        source: '/contact-ar',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/aviation-services',
        destination: '/aviation',
        permanent: true,
      },
      {
        source: '/security/all-articles',
        destination: '/security',
        permanent: true,
      },
      {
        source: '/blog/workwear/:slug',
        destination: '/blog/category/industrial',
        permanent: true,
      },
      {
        source: '/blog/temperature-regulating-fabrics-for-security-uniforms-in-saudi-arabia',
        destination: '/blog/temperature-regulating-fabrics-for-enhanced-comfort-during-shifts',
        permanent: true,
      },
      {
        source: '/blog/designing-professional-security-guard-uniforms-for-ksa-context',
        destination: '/blog/key-features-of-effective-security-uniforms-visibility-durability-functionality',
        permanent: true,
      },
      {
        source: '/blog/designing-hotel-uniforms-that-balance-functionality-and-brand-identity',
        destination: '/blog/designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market',
        permanent: true,
      },
      {
        source: '/blog/the-impact-of-uniform-comfort-on-healthcare-worker-performance',
        destination: '/blog/medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals',
        permanent: true,
      },
      {
        source: '/blog/antimicrobial-fabrics-in-healthcare-uniforms-benefits-and-limitations',
        destination: '/blog/medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals',
        permanent: true,
      },
      {
        source: '/blog/uniform-management-systems-for-saudi-hospitals-and-clinics',
        destination: '/blog/saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers',
        permanent: true,
      },
      {
        source: '/blog/advanced-safety-systems-in-industrial-workwear',
        destination: '/blog/flame-resistant-fr-workwear-protecting-workers-in-oil-gas-and-manufacturing',
        permanent: true,
      },
      {
        source: '/blog/material-science-in-industrial-safety',
        destination: '/blog/durable-fabrics-for-heavy-duty-industrial-environments-in-saudi-arabia',
        permanent: true,
      },
      {
        source: '/blog/environmental-adaptation-in-industrial-workwear',
        destination: '/blog/climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces',
        permanent: true,
      },
      {
        source: '/blog/healthcare-uniform-policies-balancing-compliance-with-brand-identity',
        destination: '/blog/saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers',
        permanent: true,
      },
      {
        source: '/blog/cultural-sensitivity-in-healthcare-uniform-design-for-saudi-hospitals',
        destination: '/blog/medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals',
        permanent: true,
      },
      {
        source: '/blog/sustainable-practices-in-security-uniform-production',
        destination: '/blog/sustainable-options-in-industrial-workwear',
        permanent: true,
      },
      {
        source: '/blog/security-uniform-materials-for-extreme-saudi-environments',
        destination: '/blog/choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate',
        permanent: true,
      },
      {
        source: '/blog/advanced-material-science-in-security-uniforms',
        destination: '/blog/choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate',
        permanent: true,
      },
      {
        source: '/blog/biomechanical-optimization-in-security-attire',
        destination: '/blog/footwear-for-security-personnel-comfort-support-and-durability',
        permanent: true,
      },
      {
        source: '/blog/climate-responsive-uniform-technology',
        destination: '/blog/climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces',
        permanent: true,
      },
      {
        source: '/blog/cabin-crew-uniforms-for-saudi-airlines-cultural-considerations-and-functional-design',
        destination: '/blog/cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective',
        permanent: true,
      },
      {
        source: '/blog/the-evolution-of-saudia-airlines-uniform-design-1945-to-present',
        destination: '/blog/cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective',
        permanent: true,
      },
      {
        source: '/blog/uniform-regulations-for-international-carriers-operating-in-saudi-airspace',
        destination: '/blog/bulk-ordering-aviation-uniforms-in-saudi-arabia-a-checklist',
        permanent: true,
      },
      {
        source: '/blog/sustainable-practices-in-aviation-uniform-production',
        destination: '/blog/sustainable-options-in-industrial-workwear',
        permanent: true,
      },
      {
        source: '/blog/role-differentiation-through-security-uniform-design',
        destination: '/blog/distinguishing-ranks-and-roles-through-security-uniform-insignia-in-ksa',
        permanent: true,
      },
      {
        source: '/blog/advanced-materials-in-security-equipment',
        destination: '/blog/ballistic-vest-carriers-and-body-armor-integration',
        permanent: true,
      },
      {
        source: '/blog/heat-management-technologies-for-security-operations',
        destination: '/blog/climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces',
        permanent: true,
      },
      {
        source: '/blog/biodigital-integration-architecture-advanced-attire-systems-for-healthcare-performance-optimization-2025',
        destination: '/blog/medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals',
        permanent: true,
      },
      {
        source: '/blog/protective-integration-architecture-advanced-safety-systems-for-saudi-emergency-medical-personnel-2025',
        destination: '/blog/safety-features-in-paramedic-and-emergency-response-uniforms-in-ksa',
        permanent: true,
      },
      {
        source: '/blog/podiatric-performance-architecture-advanced-support-systems-for-extended-operational-deployment-2025',
        destination: '/blog/footwear-recommendations-for-staff-standing-long-hours',
        permanent: true,
      },
      {
        source: '/blog/material-science-architecture-advanced-substrate-engineering-for-hospitality-performance-enhancement-2025',
        destination: '/blog/fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance',
        permanent: true,
      },
      {
        source: '/blog/chromatic-experience-architecture-advanced-color-systems-for-hospitality-environments-2025',
        destination: '/blog/color-trends-in-modern-hospitality-uniform-design-in-the-middle-east',
        permanent: true,
      },
      {
        source: '/blog/chromatic-experience-architecture-advanced-color-systems-for-saudi-hospitality-environments-2025',
        destination: '/blog/color-trends-in-modern-hospitality-uniform-design-in-the-middle-east',
        permanent: true,
      },
      {
        source: '/blog/identity-integration-systems-advanced-customization-frameworks-for-organizational-attire-2025',
        destination: '/blog/customization-options-embroidery-name-tags-and-accessories',
        permanent: true,
      },
      {
        source: '/blog/multimodal-utility-integration-systems-advanced-garment-frameworks-for-hospitality-service-optimization-2025',
        destination: '/blog/housekeeping-uniforms-ensuring-comfort-durability-and-professionalism',
        permanent: true,
      },
      {
        source: '/blog/performance-enhancement-architecture-advanced-attire-systems-for-workforce-optimization-2025',
        destination: '/blog/how-uniforms-impact-staff-morale-and-guest-satisfaction-scores',
        permanent: true,
      },
      {
        source: '/blog/lifecycle-excellence-architecture-advanced-attire-preservation-systems-for-operational-optimization-2025',
        destination: '/blog/maintaining-uniform-quality-laundry-and-upkeep-tips',
        permanent: true,
      },
      {
        source: '/blog/operational-attire-engineering-advanced-comfort-systems-for-hospitality-maintenance-personnel-2025',
        destination: '/blog/housekeeping-uniforms-ensuring-comfort-durability-and-professionalism',
        permanent: true,
      },
      {
        source: '/blog/ergonomic-optimization-architecture-advanced-systems-for-workplace-injury-prevention-2025',
        destination: '/blog/the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms',
        permanent: true,
      },
      {
        source: '/blog/cultural-identity-integration-architecture-advanced-heritage-systems-for-saudi-hospitality-attire-2025',
        destination: '/blog/integrating-saudi-cultural-elements-into-hospitality-uniform-design',
        permanent: true,
      },
      {
        source: '/blog/perception-enhancement-architecture-advanced-design-systems-for-hospitality-brand-projection-2025',
        destination: '/blog/the-role-of-uniforms-in-creating-a-cohesive-brand-experience-across-hotel-chains-in-ksa',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '(.*)'
          }
        ],
        missing: [
          {
            type: 'header',
            key: 'x-matched-path',
            value: '(.*)'
          }
        ],
        destination: '/blog',
        permanent: false
      }
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
};

module.exports = nextConfig; 