#!/usr/bin/env node

/**
 * This script ensures that all required images exist and creates placeholders
 * for any missing or corrupt images to prevent build failures.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Configuration
const PLACEHOLDER_JPG = 'public/placeholder-image.jpg';
const PLACEHOLDER_WEBP = 'public/placeholder-image.webp';

// List of problematic images that should be fixed
const PROBLEM_IMAGES = [
  'public/aviation_uniforms.jpg',
  'public/Hospitality_uniforms.jpeg',
  'public/Medical_uniforms_Saudi_Arabia_KSA.jpg',
  'public/images/aviation/aviation_uniforms.jpg',
  'public/images/hospitality/Hospitality_uniforms.jpeg',
  'public/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
  'public/images/uniform_pattern_bg.jpg',
  'public/images/security/placeholder.jpg',
  'public/images/placeholder-images/generic-placeholder.jpg',
  'public/images/industrial/placeholder.jpg',
  'public/backup/aviation_uniforms.jpg',
  'public/backup/Hospitality_uniforms.jpeg',
  'public/backup/Medical_uniforms_Saudi_Arabia_KSA.jpg'
];

// WebP versions that should be created for each problematic image
const WEBP_VERSIONS = [
  'public/webp/aviation_uniforms.webp',
  'public/webp/Hospitality_uniforms.webp',
  'public/webp/Medical_uniforms_Saudi_Arabia_KSA.webp',
  'public/images/aviation/webp/aviation_uniforms.webp',
  'public/images/hospitality/webp/Hospitality_uniforms.webp',
  'public/images/healthcare/webp/Medical_uniforms_Saudi_Arabia_KSA.webp'
];

// Ensure the placeholder image exists
async function ensurePlaceholderExists() {
  try {
    if (!fs.existsSync(PLACEHOLDER_JPG)) {
      console.log('Creating placeholder image...');
      
      // Create directory if it doesn't exist
      const dir = path.dirname(PLACEHOLDER_JPG);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Create a simple placeholder image
      await sharp({ 
        create: { 
          width: 300, 
          height: 300, 
          channels: 3, 
          background: '#f0f0f0' 
        } 
      })
      .composite([{ 
        input: Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="12" cy="12" r="3"/></svg>'), 
        top: 75, 
        left: 75 
      }])
      .jpeg()
      .toFile(PLACEHOLDER_JPG);
      
      console.log(`Created placeholder JPEG at ${PLACEHOLDER_JPG}`);
    }
    
    if (!fs.existsSync(PLACEHOLDER_WEBP)) {
      console.log('Creating WebP version of placeholder...');
      
      // Create directory if it doesn't exist
      const dir = path.dirname(PLACEHOLDER_WEBP);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Create WebP version of placeholder
      await sharp(PLACEHOLDER_JPG)
        .webp({ quality: 80 })
        .toFile(PLACEHOLDER_WEBP);
        
      console.log(`Created placeholder WebP at ${PLACEHOLDER_WEBP}`);
    }
  } catch (error) {
    console.error('Error creating placeholder image:', error.message);
  }
}

// Fix all problematic images
async function fixProblemImages() {
  try {
    for (const imagePath of PROBLEM_IMAGES) {
      // Make sure directory exists
      const dir = path.dirname(imagePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
      }
      
      // Check if image needs fixing
      let needsFixing = false;
      
      if (!fs.existsSync(imagePath)) {
        console.log(`Image doesn't exist, will create: ${imagePath}`);
        needsFixing = true;
      } else {
        try {
          // Try to check the image with sharp (verify it's a valid image)
          await sharp(imagePath).metadata();
          console.log(`Image is valid: ${imagePath}`);
        } catch (error) {
          console.log(`Image is corrupt or invalid: ${imagePath}`);
          needsFixing = true;
        }
      }
      
      // Copy placeholder if needed
      if (needsFixing) {
        fs.copyFileSync(PLACEHOLDER_JPG, imagePath);
        console.log(`Fixed: ${imagePath}`);
      }
    }
    
    // Create WebP versions
    for (const webpPath of WEBP_VERSIONS) {
      const dir = path.dirname(webpPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
      }
      
      await sharp(PLACEHOLDER_JPG)
        .webp({ quality: 80 })
        .toFile(webpPath);
        
      console.log(`Created WebP: ${webpPath}`);
    }

    // Find and fix all JPG/JPEG files in public directory
    console.log('Checking all image files in public directory...');
    const allImageFiles = glob.sync('public/**/*.{jpg,jpeg,png}', {
      ignore: ['public/**/*.webp', 'public/**/webp/**', 'public/placeholder-image.jpg']
    });

    for (const imagePath of allImageFiles) {
      try {
        await sharp(imagePath).metadata();
        
        // Create WebP version for all valid images
        const parsedPath = path.parse(imagePath);
        const webpDir = path.join(parsedPath.dir, 'webp');
        const webpPath = path.join(webpDir, `${parsedPath.name}.webp`);
        
        if (!fs.existsSync(webpDir)) {
          fs.mkdirSync(webpDir, { recursive: true });
        }

        if (!fs.existsSync(webpPath)) {
          await sharp(imagePath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          console.log(`Created WebP version: ${webpPath}`);
        }
      } catch (error) {
        console.log(`Found corrupt image: ${imagePath}, replacing with placeholder...`);
        
        // Replace the corrupt image with placeholder
        fs.copyFileSync(PLACEHOLDER_JPG, imagePath);
        
        // Create WebP version 
        const parsedPath = path.parse(imagePath);
        const webpDir = path.join(parsedPath.dir, 'webp');
        const webpPath = path.join(webpDir, `${parsedPath.name}.webp`);
        
        if (!fs.existsSync(webpDir)) {
          fs.mkdirSync(webpDir, { recursive: true });
        }
        
        await sharp(PLACEHOLDER_JPG)
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        console.log(`Created placeholder WebP version: ${webpPath}`);
      }
    }
    
    console.log('Image fixing completed successfully');
  } catch (error) {
    console.error('Error fixing images:', error.message);
  }
}

// Main function
async function main() {
  console.log('Starting image verification and fixing process...');
  
  // First, ensure placeholder exists
  await ensurePlaceholderExists();
  
  // Fix problem images
  await fixProblemImages();
  
  console.log('All images checked and fixed');
}

// Run the main function
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
}); 