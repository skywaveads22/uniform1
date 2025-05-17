/**
 * Script to generate all possible URLs for the sitemap
 * Used at build time to ensure comprehensive site coverage
 */

const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

console.log('Generating sitemap URLs...');

// Base URL of the site
const baseUrl = 'https://fakhrkhaleej.com';

// Static pages
const staticPages = [
  '',
  '/about',
  '/portfolio',
  '/blog',
  '/contact',
  '/services',
  '/request-quote',
  '/careers',
  '/terms',
  '/privacy',
  '/privacy-ar',
  '/faq',
  '/search',
];

// Services categories
const serviceCategories = [
  'custom-design',
  'bulk-ordering',
  'measurement',
  'program-management',
  'uniform-policies',
];

// Industry categories (used for both main pages and blog categories)
const industryCategories = [
  'aviation',
  'healthcare',
  'hospitality',
  'education',
  'government',
  'security',
  'industrial',
];

// Function to get all blog post paths
function getBlogPaths() {
  try {
    const blogDirs = globSync('app/blog/*/page.tsx');
    return blogDirs.map(dir => {
      // Convert file path to URL path
      const match = dir.match(/app\/blog\/(.+?)\/page\.tsx$/);
      if (match && match[1]) {
        return `/blog/${match[1]}`;
      }
      return null;
    }).filter(Boolean);
  } catch (error) {
    console.error('Error finding blog paths:', error);
    return [];
  }
}

// Function to write sitemap URLs to a file
function writeSitemapUrls(urls) {
  const outputDir = path.join(process.cwd(), 'public');
  const outputFile = path.join(outputDir, 'sitemap-urls.json');
  
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputFile, JSON.stringify(urls, null, 2));
    console.log(`Sitemap URLs written to ${outputFile}`);
  } catch (error) {
    console.error('Error writing sitemap URLs:', error);
  }
}

// Main function
function generateSitemap() {
  const blogPaths = getBlogPaths();
  
  const staticPaths = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/blog'
  ];
  
  const allPaths = [...staticPaths, ...blogPaths];
  writeSitemapUrls(allPaths);
}

// Execute
generateSitemap(); 