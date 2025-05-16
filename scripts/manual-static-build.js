#!/usr/bin/env node

/**
 * Manual static site builder for Netlify deployment
 * Creates a minimal static site with HTML files and WebP images
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Log start
console.log('Starting manual static site build...');

// First ensure all images are converted to WebP
try {
  console.log('Preparing WebP images...');
  execSync('node clean-images.js', { stdio: 'inherit' });
  execSync('node fix-images.js', { stdio: 'inherit' });
  execSync('node convert-images.js', { stdio: 'inherit' });
  console.log('Image preparation completed');
} catch (error) {
  console.warn('Warning: Image preparation had issues:', error.message);
  console.log('Continuing with build process anyway...');
}

// Create output directory
const outputDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

// Create category directories and index.html files
const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security'];

// Create a minimal HTML template
function createHtmlTemplate(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Uniform Blogs</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; color: #333; }
    header { margin-bottom: 20px; }
    main { max-width: 1200px; margin: 0 auto; }
    footer { margin-top: 40px; text-align: center; font-size: 0.8em; color: #666; }
    img { max-width: 100%; height: auto; }
    .category-img { max-width: 300px; margin-bottom: 20px; border-radius: 8px; }
    a { color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
    nav { margin-bottom: 30px; }
    nav a { margin-right: 15px; }
    h1 { color: #1a1a1a; }
  </style>
</head>
<body>
  <header>
    <h1>Uniform Blogs</h1>
    <nav>
      <a href="/">Home</a>
      ${categories.map(cat => `<a href="/${cat}/">${cat.charAt(0).toUpperCase() + cat.slice(1)}</a>`).join('\n      ')}
    </nav>
  </header>
  <main>
    ${content}
  </main>
  <footer>
    &copy; ${new Date().getFullYear()} Uniform Blogs. All rights reserved.
  </footer>
</body>
</html>`;
}

// Create homepage
const homeContent = `
<h2>Welcome to Uniform Blogs</h2>
<p>Explore our collection of uniform-related content across various industries:</p>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  ${categories.map(cat => `
  <div style="width: 30%; margin-bottom: 30px;">
    <h3><a href="/${cat}/">${cat.charAt(0).toUpperCase() + cat.slice(1)}</a></h3>
    <a href="/${cat}/">
      <img class="category-img" src="/webp/placeholder-image.webp" alt="${cat} uniforms">
    </a>
    <p>Explore our collection of ${cat} uniforms and latest trends.</p>
  </div>
  `).join('\n  ')}
</div>
`;

fs.writeFileSync(path.join(outputDir, 'index.html'), createHtmlTemplate('Home', homeContent));

// Create category pages
categories.forEach(category => {
  const categoryDir = path.join(outputDir, category);
  fs.mkdirSync(categoryDir, { recursive: true });
  
  // Create a specific image path for this category
  const imagePath = `/webp/${category === 'aviation' ? 'aviation_uniforms' : 
                      category === 'hospitality' ? 'Hospitality_uniforms' :
                      category === 'healthcare' ? 'Medical_uniforms_Saudi_Arabia_KSA' :
                      'placeholder-image'}.webp`;
  
  const categoryContent = `
  <h2>${category.charAt(0).toUpperCase() + category.slice(1)} Uniforms</h2>
  <img class="category-img" src="${imagePath}" alt="${category} uniforms">
  <p>Welcome to our ${category} uniform section where you can explore the latest trends and designs for ${category} professionals.</p>
  <p>Our ${category} uniform collection is designed to meet the specific needs of ${category} workers, providing comfort, functionality, and professional appearance.</p>
  <h3>Why Choose Our ${category.charAt(0).toUpperCase() + category.slice(1)} Uniforms</h3>
  <ul>
    <li>High-quality materials built to last</li>
    <li>Comfortable fit for all-day wear</li>
    <li>Professional appearance that represents your brand</li>
    <li>Customization options available</li>
    <li>Fast delivery and excellent customer service</li>
  </ul>
  `;
  
  fs.writeFileSync(path.join(categoryDir, 'index.html'), createHtmlTemplate(`${category.charAt(0).toUpperCase() + category.slice(1)} Uniforms`, categoryContent));
});

// Copy WebP images
console.log('Copying WebP images to output directory...');

// Create webp directory in output
fs.mkdirSync(path.join(outputDir, 'webp'), { recursive: true });

// Helper function to copy WebP files
const copyWebpFiles = (srcDir, destDir) => {
  if (!fs.existsSync(srcDir)) return;
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    
    if (entry.isDirectory()) {
      copyWebpFiles(srcPath, destPath);
    } else if (entry.name.endsWith('.webp')) {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.warn(`Warning: Failed to copy ${srcPath}:`, err.message);
      }
    }
  }
};

// Copy WebP files from public/webp to output/webp
copyWebpFiles(
  path.join(process.cwd(), 'public', 'webp'),
  path.join(outputDir, 'webp')
);

// Copy category WebP files
categories.forEach(category => {
  const webpSrcDir = path.join(process.cwd(), 'public', 'images', category, 'webp');
  const webpDestDir = path.join(outputDir, 'images', category, 'webp');
  copyWebpFiles(webpSrcDir, webpDestDir);
});

// Copy Netlify configuration files
console.log('Copying Netlify configuration files...');
const netlifyFiles = [
  { src: 'public/_redirects', dest: '_redirects' },
  { src: 'public/robots.txt', dest: 'robots.txt' },
  { src: 'public/sitemap.xml', dest: 'sitemap.xml' },
  { src: 'public/sitemap-0.xml', dest: 'sitemap-0.xml' }
];

netlifyFiles.forEach(file => {
  try {
    const srcPath = path.join(process.cwd(), file.src);
    const destPath = path.join(outputDir, file.dest);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ Copied ${file.dest}`);
    } else {
      console.log(`⚠️ ${file.src} not found, skipping`);
    }
  } catch (err) {
    console.warn(`Warning: Failed to copy ${file.src}:`, err.message);
  }
});

console.log('Manual static site build completed successfully!'); 