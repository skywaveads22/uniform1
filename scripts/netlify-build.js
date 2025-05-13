#!/usr/bin/env node

/**
 * netlify-build.js
 * 
 * This script helps with Netlify deployment by ensuring environment variables
 * are correctly loaded and resolving any environment-specific configurations.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Log the build environment
console.log('Starting Netlify build process...');
console.log(`Node version: ${process.version}`);
console.log(`Build environment: ${process.env.CONTEXT || 'development'}`);

// Ensure critical dependencies are installed
console.log('Verifying dependencies are installed...');
try {
  // Check for CSS dependencies
  try {
    require.resolve('autoprefixer');
    console.log('autoprefixer is already installed');
  } catch (e) {
    console.log('Installing autoprefixer...');
    execSync('npm install --no-save autoprefixer', { stdio: 'inherit' });
  }
  
  try {
    require.resolve('postcss');
    console.log('postcss is already installed');
  } catch (e) {
    console.log('Installing postcss...');
    execSync('npm install --no-save postcss', { stdio: 'inherit' });
  }
  
  try {
    require.resolve('tailwindcss');
    console.log('tailwindcss is already installed');
  } catch (e) {
    console.log('Installing tailwindcss...');
    execSync('npm install --no-save tailwindcss', { stdio: 'inherit' });
  }
  
  // Install ESLint plugins
  console.log('Installing ESLint dependencies...');
  execSync('npm install --no-save eslint-plugin-jsx-a11y', { stdio: 'inherit' });

  // Install next-on-netlify which might be needed
  try {
    require.resolve('next-on-netlify');
    console.log('next-on-netlify is already installed');
  } catch (e) {
    console.log('Installing next-on-netlify...');
    execSync('npm install --no-save next-on-netlify', { stdio: 'inherit' });
  }
  
} catch (error) {
  console.warn('Warning: Error verifying dependencies:', error);
}

// Check if we need to create a special environment file for the build
if (process.env.CONTEXT === 'production') {
  console.log('Creating production environment configuration...');
  
  // Map Netlify environment variables to Next.js expected format if needed
  const envVars = [
    `NODE_ENV=production`,
    `NEXT_PUBLIC_SITE_URL=${process.env.URL || 'https://uniform-blogs.netlify.app'}`,
    `NEXT_PUBLIC_VERCEL_URL=${process.env.URL || ''}`,
    `NEXT_PUBLIC_VERCEL_ENV=${process.env.CONTEXT || 'production'}`,
    `NETLIFY=true`,
    `NEXT_TELEMETRY_DISABLED=1`,
    `NEXT_IMAGE_DOMAINS=seeklogo.com`,
    `NETLIFY_CMS_BACKEND_BRANCH=${process.env.BRANCH || 'main'}`,
    `NEXT_PUBLIC_NETLIFY_SWR_CACHE_TTL=3600`,
    `NEXT_PUBLIC_DEFAULT_LOCALE=en`
  ];
  
  fs.writeFileSync('.env.production', envVars.join('\n'));
  console.log('Created .env.production file');
}

// Run the Next.js build command
console.log('Running Next.js build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 
