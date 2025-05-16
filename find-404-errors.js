const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

// Array to store all image references found in code
const imageReferences = [];
// Array to store actual images that exist in the public directory
const existingImages = [];
// Array to store missing images
const missingImages = [];

// Function to walk directory recursively and process files
async function walkDir(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      // Skip node_modules and .next directories
      if (file !== 'node_modules' && file !== '.next') {
        await walkDir(filePath);
      }
    } else {
      // Process only TypeScript/JavaScript/JSX files
      if (/\.(tsx|jsx|js|ts)$/.test(file)) {
        await processFile(filePath);
      }
    }
  }
}

// Function to extract image paths from file content
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Find all image paths in the content
    const srcRegex = /src=["']([^"']*\.(jpg|jpeg|png|gif|svg|webp))["']/g;
    const imgRegex = /["'](\/images\/[^"']*\.(jpg|jpeg|png|gif|svg|webp))["']/g;
    
    let match;
    
    // Extract image paths from src attributes
    while ((match = srcRegex.exec(content)) !== null) {
      if (match[1].startsWith('/')) {
        imageReferences.push(match[1]);
      }
    }
    
    // Extract image paths from string literals
    while ((match = imgRegex.exec(content)) !== null) {
      imageReferences.push(match[1]);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

// Function to collect all existing images in public directory
async function collectExistingImages(dir) {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await stat(filePath);
      
      if (stats.isDirectory()) {
        await collectExistingImages(filePath);
      } else {
        // Only add image files
        if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file)) {
          // Store the path relative to public directory
          const relativePath = filePath.replace(/^public/, '').replace(/\\/g, '/');
          existingImages.push(relativePath);
        }
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

// Main function
async function findMissingImages() {
  console.log('Scanning codebase for image references...');
  await walkDir('app');
  await walkDir('components');
  
  console.log('Collecting existing images...');
  await collectExistingImages('public');
  
  console.log(`Found ${imageReferences.length} image references in code`);
  console.log(`Found ${existingImages.length} actual images in public directory`);
  
  // Filter out duplicates from imageReferences
  const uniqueImageReferences = [...new Set(imageReferences)];
  
  // Find missing images
  for (const imgRef of uniqueImageReferences) {
    if (!existingImages.includes(imgRef)) {
      missingImages.push(imgRef);
    }
  }
  
  console.log('\n===== MISSING IMAGES (Potential 404 Errors) =====');
  if (missingImages.length === 0) {
    console.log('No missing images found!');
  } else {
    missingImages.forEach(img => console.log(img));
    console.log(`\nTotal missing images: ${missingImages.length}`);
  }
}

// Run the script
findMissingImages().catch(err => console.error('Error:', err)); 