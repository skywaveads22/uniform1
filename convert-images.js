#!/usr/bin/env node

/**
 * This script converts all images to WebP format to ensure compatibility
 * with the web build process. It handles errors gracefully.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Turn off libvips warnings
sharp.concurrency(1);
sharp.simd(false);
sharp.cache(false);

// Logger
const log = {
  info: (msg) => console.log(`✅ ${msg}`),
  warn: (msg) => console.log(`⚠️ ${msg}`),
  error: (msg) => console.error(`❌ ${msg}`)
};

// Function to create directory if it doesn't exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    log.info(`Created directory: ${dir}`);
  }
}

// Function to convert a single image to WebP
async function convertToWebP(inputPath) {
  try {
    // Skip if it's already WebP or SVG
    if (inputPath.endsWith('.webp') || inputPath.endsWith('.svg')) {
      return null;
    }

    // Determine output path
    const parsedPath = path.parse(inputPath);
    const webpDir = path.join(parsedPath.dir, 'webp');
    const webpPath = path.join(webpDir, `${parsedPath.name}.webp`);
    
    // Skip if WebP already exists and is newer than the source file
    if (fs.existsSync(webpPath)) {
      const sourceStats = fs.statSync(inputPath);
      const webpStats = fs.statSync(webpPath);
      
      if (webpStats.mtime > sourceStats.mtime) {
        log.info(`Skipping already converted: ${webpPath}`);
        return { source: inputPath, webp: webpPath };
      }
    }
    
    // Create WebP directory if needed
    ensureDir(webpDir);
    
    // Convert the image
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(webpPath);
      
    log.info(`Converted: ${inputPath} -> ${webpPath}`);
    return { source: inputPath, webp: webpPath };
  } catch (error) {
    log.error(`Failed to convert ${inputPath}: ${error.message}`);
    
    // If conversion fails, create a placeholder WebP
    try {
      const parsedPath = path.parse(inputPath);
      const webpDir = path.join(parsedPath.dir, 'webp');
      const webpPath = path.join(webpDir, `${parsedPath.name}.webp`);
      
      ensureDir(webpDir);
      
      // Use a placeholder instead
      if (fs.existsSync('public/placeholder-image.webp')) {
        fs.copyFileSync('public/placeholder-image.webp', webpPath);
        log.warn(`Created placeholder for failed conversion: ${webpPath}`);
        return { source: inputPath, webp: webpPath, isPlaceholder: true };
      } else {
        // Create a simple default placeholder
        await sharp({
          create: {
            width: 300,
            height: 300,
            channels: 3,
            background: '#f0f0f0'
          }
        })
        .toFile(webpPath);
        log.warn(`Created default placeholder: ${webpPath}`);
        return { source: inputPath, webp: webpPath, isPlaceholder: true };
      }
    } catch (placeholderError) {
      log.error(`Failed to create placeholder for ${inputPath}: ${placeholderError.message}`);
      return null;
    }
  }
}

// Create category-specific placeholders
async function createCategoryPlaceholders() {
  const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security'];
  
  for (const category of categories) {
    try {
      // Create directory structure
      const webpDir = `public/webp`;
      const categoryWebpDir = `public/images/${category}/webp`;
      
      ensureDir(webpDir);
      ensureDir(categoryWebpDir);
      
      // Create WebP placeholders if they don't exist
      const categoryPlaceholder = `${webpDir}/${category}_uniforms.webp`;
      if (!fs.existsSync(categoryPlaceholder)) {
        await sharp({
          create: {
            width: 800,
            height: 600,
            channels: 3,
            background: '#f0f0f0'
          }
        })
        .webp()
        .toFile(categoryPlaceholder);
        log.info(`Created category placeholder: ${categoryPlaceholder}`);
      }
      
      const dirPlaceholder = `${categoryWebpDir}/placeholder.webp`;
      if (!fs.existsSync(dirPlaceholder)) {
        fs.copyFileSync(`public/placeholder-image.webp`, dirPlaceholder);
        log.info(`Created directory placeholder: ${dirPlaceholder}`);
      }
    } catch (error) {
      log.error(`Error creating placeholder for ${category}: ${error.message}`);
    }
  }
}

// Main function
async function main() {
  console.log('Starting image conversion process...');
  
  // First, ensure we have a placeholder image
  if (!fs.existsSync('public/placeholder-image.webp')) {
    try {
      log.info('Creating default placeholder image...');
      await sharp({
        create: {
          width: 800,
          height: 600,
          channels: 3,
          background: '#f0f0f0'
        }
      })
      .webp()
      .toFile('public/placeholder-image.webp');
      log.info('Created default placeholder image');
    } catch (error) {
      log.error(`Failed to create default placeholder: ${error.message}`);
    }
  }
  
  // Create category placeholders
  await createCategoryPlaceholders();
  
  // Find all image files
  const imageFiles = glob.sync('public/**/*.{jpg,jpeg,png,gif}', {
    ignore: ['public/node_modules/**', 'public/.next/**']
  });
  
  log.info(`Found ${imageFiles.length} images to process`);
  
  // Process all images
  let successful = 0;
  let failed = 0;
  let skipped = 0;
  let placeholders = 0;
  
  const results = await Promise.all(imageFiles.map(convertToWebP));
  
  results.forEach(result => {
    if (!result) {
      skipped++;
    } else if (result.isPlaceholder) {
      placeholders++;
    } else {
      successful++;
    }
  });
  
  console.log('\nImage conversion summary:');
  console.log(`- Successfully converted: ${successful}`);
  console.log(`- Replaced with placeholders: ${placeholders}`);
  console.log(`- Skipped (already WebP/SVG): ${skipped}`);
  console.log(`- Total processed: ${imageFiles.length}`);
  
  console.log('\nImage conversion completed!');
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
}); 