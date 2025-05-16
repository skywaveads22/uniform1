/**
 * Script to generate all possible URLs for the sitemap
 * Used at build time to ensure comprehensive site coverage
 */

const fs = require('fs');
const path = require('path');

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

// Generate all URLs
const generateAllUrls = () => {
  const urls = [];
  
  // Add static pages
  staticPages.forEach(page => {
    urls.push(`${baseUrl}${page}`);
  });
  
  // Add service category pages
  serviceCategories.forEach(category => {
    urls.push(`${baseUrl}/services/${category}`);
  });
  
  // Add industry category pages
  industryCategories.forEach(category => {
    urls.push(`${baseUrl}/${category}`);
    urls.push(`${baseUrl}/${category}/all-articles`);
    urls.push(`${baseUrl}/blog/category/${category}`);
  });
  
  // Add portfolio detail pages (based on the data in portfolio page)
  for (let i = 1; i <= 6; i++) {
    urls.push(`${baseUrl}/portfolio/${i}`);
  }
  
  return urls;
};

// Generate sitemap URLs JSON file
const generateSitemapUrlsJson = () => {
  const urls = generateAllUrls();
  const outputPath = path.join(__dirname, '../public/sitemap-urls.json');
  
  const sitemapData = {
    urls,
    generated: new Date().toISOString(),
  };
  
  fs.writeFileSync(outputPath, JSON.stringify(sitemapData, null, 2));
  console.log(`Generated ${urls.length} URLs in sitemap-urls.json`);
};

// Execute
generateSitemapUrlsJson(); 