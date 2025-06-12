/**
 * Script to generate all possible URLs for the sitemap
 * Used at build time to ensure comprehensive site coverage
 */

const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

console.log('Generating sitemap URLs...');

// Base URL of the site
const baseUrl = 'https://skywaveads22.github.io/uniform1';

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
    console.log('Looking for blog posts in app/blog/*/page.tsx...');
    const blogDirs = globSync('app/blog/*/page.tsx', { cwd: process.cwd() });
    console.log(`Found ${blogDirs.length} blog directories:`, blogDirs.slice(0, 10)); // Show first 10 for debugging
    
    return blogDirs.map(dir => {
      // Convert file path to URL path - handle both Windows and Unix paths
      const normalizedPath = dir.replace(/\\/g, '/');
      const match = normalizedPath.match(/app\/blog\/(.+?)\/page\.tsx$/);
      if (match && match[1] && match[1] !== '[slug]') { // Exclude dynamic route
        const blogPath = `/blog/${match[1]}`;
        console.log(`Generated blog path: ${blogPath}`);
        return blogPath;
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
    console.log(`Total URLs generated: ${urls.length}`);
  } catch (error) {
    console.error('Error writing sitemap URLs:', error);
  }
}

// Main function
function generateSitemap() {
  console.log('Starting sitemap generation...');
  
  const staticPaths = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/blog',
    '/portfolio',
    '/request-quote',
    '/careers',
    '/terms',
    '/privacy',
    '/faq'
  ];
  
  console.log('Static paths:', staticPaths);
  
  const blogPaths = getBlogPaths();
  console.log('Blog paths found:', blogPaths);
  
  const allPaths = [...staticPaths, ...blogPaths];
  console.log('All paths to include in sitemap:', allPaths);
  
  writeSitemapUrls(allPaths);
}

// Execute
generateSitemap(); 