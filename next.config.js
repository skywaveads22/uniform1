/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
    formats: ["image/webp"],
    // Disable image optimization completely
    remotePatterns: [],
    deviceSizes: [],
    imageSizes: []
  },
  basePath: process.env.NETLIFY ? '' : '/uniform1',
  assetPrefix: process.env.NETLIFY ? '' : '/uniform1/',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  webpack: (config) => {
    // Prevent webpack from processing any files in the public directory
    config.plugins.push(
      new (require('webpack').IgnorePlugin)({
        resourceRegExp: /^\.\/public\//,
        contextRegExp: /\/$/,
      })
    );
    
    // Explicitly exclude specific file types and patterns in public directory
    const publicDirPath = path.resolve(__dirname, 'public');
    
    // Create a more specific rule for handling public directory files
    config.module.rules.push({
      test: (filepath) => {
        // Only apply to files in the public directory
        if (!filepath.startsWith(publicDirPath)) {
          return false;
        }
        
        // Skip processing for configuration files, sitemaps, and text files
        return filepath.includes('_redirects') || 
               filepath.endsWith('.xml') || 
               filepath.endsWith('.txt') || 
               filepath.endsWith('.json');
      },
      use: {
        loader: 'null-loader',
      },
    });
    
    // Handle image files separately
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|webp|svg)$/i,
      include: publicDirPath,
      type: 'asset/resource',
      generator: {
        filename: '[path][name][ext]',
        publicPath: '/',
      },
    });
    
    // Explicitly configure CSS loading
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('css')
    );
    
    if (cssRule) {
      // Make sure the rule applies to CSS modules
      cssRule.test = /\.css$/;
      
      // Make sure postcss-loader is configured
      if (cssRule.use && cssRule.use.length) {
        const postcssLoader = cssRule.use.find(
          (loader) => loader.loader && loader.loader.includes('postcss-loader')
        );
        
        if (!postcssLoader) {
          cssRule.use.push({
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['tailwindcss', 'autoprefixer'],
              },
            },
          });
        }
      }
    } else {
      // Add CSS rule if none exists
      config.module.rules.push({
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['tailwindcss', 'autoprefixer'],
              },
            },
          },
        ],
      });
    }
    
    // Handle all other files in public
    config.module.rules.push({
      test: /\.(.*)$/,
      include: publicDirPath,
      exclude: /\.(jpe?g|png|gif|webp|svg|xml|txt|json)$/i,
      type: 'asset/resource',
      generator: {
        filename: '[path][name][ext]',
        publicPath: '/',
      },
    });
    
    return config
  },
  // Skip type checking in build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint in build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip linting files added to gitignore
  poweredByHeader: false,
}

module.exports = nextConfig 