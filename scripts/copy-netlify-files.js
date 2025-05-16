#!/usr/bin/env node

/**
 * Script to copy Netlify configuration files to the build output directory
 * This is needed because Next.js static export doesn't automatically copy these files
 */

const fs = require('fs');
const path = require('path');

// Make sure the destination directory exists
const outputDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outputDir)) {
  console.log('⚠️ Output directory not found. Run "next build" first.');
  process.exit(1);
}

// Function to ensure a directory exists
const ensureDirExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
};

// Helper function to copy a file with better error handling
const copyFileWithRetry = (src, dest, description = 'file') => {
  try {
    // Make sure the destination directory exists
    const destDir = path.dirname(dest);
    ensureDirExists(destDir);
    
    // Copy the file
    fs.copyFileSync(src, dest);
    console.log(`✅ Successfully copied ${description} to ${dest}`);
    return true;
  } catch (error) {
    console.error(`❌ Error copying ${description}:`, error.message);
    
    // Try a different approach if the first one fails
    try {
      const content = fs.readFileSync(src, 'utf8');
      fs.writeFileSync(dest, content, 'utf8');
      console.log(`✅ Successfully copied ${description} content to ${dest} (alternative method)`);
      return true;
    } catch (altError) {
      console.error(`❌ Alternative method failed for ${description}:`, altError.message);
      return false;
    }
  }
};

// Special files that need to be correctly handled
const specialFiles = [
  { src: 'public/_redirects', dest: '_redirects', description: '_redirects file' },
  { src: 'public/sitemap.xml', dest: 'sitemap.xml', description: 'sitemap.xml' },
  { src: 'public/sitemap-0.xml', dest: 'sitemap-0.xml', description: 'sitemap-0.xml' },
  { src: 'public/robots.txt', dest: 'robots.txt', description: 'robots.txt' },
  { src: 'public/sitemap-urls.json', dest: 'sitemap-urls.json', description: 'sitemap-urls.json' },
];

// Process each special file
console.log('Copying special Netlify files...');
specialFiles.forEach(file => {
  const srcPath = path.join(process.cwd(), file.src);
  const destPath = path.join(outputDir, file.dest);
  
  if (fs.existsSync(srcPath)) {
    copyFileWithRetry(srcPath, destPath, file.description);
  } else {
    console.log(`⚠️ ${file.description} not found at ${srcPath}, skipping`);
  }
});

// Ensure WebP files are in the output
try {
  console.log('Ensuring WebP files are in the output directory...');
  
  // Helper function to recursively copy a directory
  const copyFolderSync = (from, to) => {
    if (!fs.existsSync(from)) {
      console.log(`⚠️ Source directory ${from} not found, skipping`);
      return;
    }
    
    ensureDirExists(to);
    
    fs.readdirSync(from).forEach(element => {
      const fromPath = path.join(from, element);
      const toPath = path.join(to, element);
      
      if (fs.lstatSync(fromPath).isFile()) {
        if (fromPath.endsWith('.webp')) {
          try {
            fs.copyFileSync(fromPath, toPath);
          } catch (error) {
            console.warn(`⚠️ Could not copy ${fromPath}: ${error.message}`);
          }
        }
      } else {
        copyFolderSync(fromPath, toPath);
      }
    });
  };
  
  // Copy WebP files from the public directory to the output
  if (fs.existsSync(path.join(process.cwd(), 'public', 'webp'))) {
    copyFolderSync(
      path.join(process.cwd(), 'public', 'webp'),
      path.join(outputDir, 'webp')
    );
    console.log('✅ Successfully copied WebP files to output directory');
  } else {
    console.log('⚠️ WebP directory not found in public directory');
  }
  
  // Copy category WebP files
  const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security'];
  categories.forEach(category => {
    const webpDir = path.join(process.cwd(), 'public', 'images', category, 'webp');
    if (fs.existsSync(webpDir)) {
      const outputWebpDir = path.join(outputDir, 'images', category, 'webp');
      copyFolderSync(webpDir, outputWebpDir);
      console.log(`✅ Copied ${category} WebP files`);
    }
  });
} catch (error) {
  console.error('❌ Error copying WebP files:', error.message);
}

// Verify all required files exist in the output
console.log('Verifying required files in output...');
const requiredFiles = ['_redirects', 'robots.txt', 'sitemap.xml'];
requiredFiles.forEach(file => {
  const filePath = path.join(outputDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Required file ${file} is missing from output!`);
    
    // Try to create the file with minimal content if it's missing
    if (file === '_redirects') {
      fs.writeFileSync(filePath, '# Redirects\n', 'utf8');
      console.log(`✅ Created minimal ${file} file`);
    } else if (file === 'robots.txt') {
      fs.writeFileSync(filePath, 'User-agent: *\nAllow: /\n', 'utf8');
      console.log(`✅ Created minimal ${file} file`);
    } else if (file === 'sitemap.xml') {
      fs.writeFileSync(filePath, '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', 'utf8');
      console.log(`✅ Created minimal ${file} file`);
    }
  } else {
    console.log(`✅ Required file ${file} exists in output`);
  }
});

console.log('Netlify file copying completed!'); 