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
  async redirects() {
    return [
      {
        source: '/testimonials',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/education',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/hospitality',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/security',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/aviation',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/government',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/healthcare',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/industrial',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/blog/uniform-management-systems-for-saudi-hospitals-and-clinics',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/protective-integration-architecture-advanced-safety-systems-for-saudi-emergency-medical-personnel-2025',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/chef-whites-and-kitchen-staff-uniforms-for-saudi-arabias-culinary-industry',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/high-visibility-uniforms-for-public-works-employees-in-saudi-cities',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/chromatic-experience-architecture-advanced-color-systems-for-saudi-hospitality-environments-2025',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/lab-coats-material-choices-and-safety-standards-for-saudi-laboratories',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/cultural-identity-integration-architecture-advanced-heritage-systems-for-saudi-hospitality-attire-2025',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/maternity-scrubs-and-uniform-options-for-healthcare-professionals',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/multimodal-utility-integration-systems-advanced-garment-frameworks-for-hospitality-service-optimization-2025',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/laundry-and-maintenance-contracts-for-large-government-departments',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/headwear-etiquette-and-options-within-saudi-government-uniform-policy',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/balancing-tradition-and-modernity-in-official-ksa-attire',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/perception-enhancement-architecture-advanced-design-systems-for-hospitality-brand-projection-2025',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/antimicrobial-fabrics-in-healthcare-uniforms-benefits-and-limitations',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/color-psychology-in-designing-trustworthy-government-uniforms',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/custom-tailoring-vs-standard-sizing-for-government-personnel',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/how-professional-uniforms-influence-patient-trust-and-confidence-in-saudi-healthcare',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/maintaining-professionalism-the-importance-of-well-maintained-government-uniforms',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/uniform-requirements-for-specific-roles-in-government',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/ordering-and-sizing-healthcare-uniforms-for-diverse-staff-bodies',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/case-study-updating-uniforms-for-a-major-saudi-ministry',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/custom-embroidery-for-hospital-logos-and-department-names',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/identity-integration-systems-advanced-customization-frameworks-for-organizational-attire-2025',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/footwear-regulations-for-government-uniforms-in-ksa',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/patient-gowns-in-ksa-balancing-comfort-dignity-and-hygiene',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/aviation-uniform-care-maintenance-guide',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/ranking-insignia-and-badges-on-saudi-government-uniforms',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/uniform-management-solutions-for-hospitals-leasing-vs-buying-in-ksa',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/fluid-resistant-and-barrier-technologies-in-medical-textiles',
        destination: '/blog',
        permanent: true,
      }
    ];
  },
}

module.exports = nextConfig; 