#!/usr/bin/env node

/**
 * This script completely removes problematic images from the codebase
 * and ensures that WebP versions exist for all necessary files.
 */

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

// List of known problematic files
const PROBLEMATIC_FILES = [
  'public/Hospitality_uniforms.jpeg',
  'public/Medical_uniforms_Saudi_Arabia_KSA.jpg',
  'public/aviation_uniforms.jpg',
  'public/images/aviation/aviation_uniforms.jpg',
  'public/images/hospitality/Hospitality_uniforms.jpeg',
  'public/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
  'public/images/uniform_pattern_bg.jpg',
  'public/images/security/placeholder.jpg',
  'public/images/placeholder-images/generic-placeholder.jpg',
  'public/images/industrial/placeholder.jpg',
  'public/images/healthcare/placeholder.jpg',
  'public/images/healthcare/healthcare_placeholder.jpg',
  'public/images/government/placeholder.jpg',
  'public/images/education/placeholder.jpg',
  'public/images/aviation/placeholder.jpg',
  'public/images/aviation/fabric-selection.jpg',
];

// Function to ensure WebP placeholders are in place
async function ensurePlaceholders() {
  console.log('Ensuring WebP placeholders are in place...');
  
  // Create placeholder image if it doesn't exist
  if (!fs.existsSync('public/placeholder-image.jpg')) {
    console.log('Creating placeholder image...');
    try {
      await sharp({
        create: {
          width: 800,
          height: 600,
          channels: 3,
          background: '#f0f0f0'
        }
      })
      .composite([{
        input: Buffer.from(
          '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 24 24">' +
          '<rect x="1" y="1" width="22" height="22" rx="2" ry="2" fill="none" stroke="#ccc" stroke-width="1"/>' +
          '<circle cx="12" cy="8" r="3" fill="#ccc"/>' + 
          '<path d="M6,21v-2c0-3.3,2.7-6,6-6s6,2.7,6,6v2" fill="#ccc"/>' +
          '</svg>'
        ),
        top: 200,
        left: 250
      }])
      .jpeg()
      .toFile('public/placeholder-image.jpg');
      
      console.log('✅ Created placeholder-image.jpg');
    } catch (err) {
      console.error('❌ Error creating placeholder image:', err);
    }
  }
  
  // Create WebP version if doesn't exist
  if (!fs.existsSync('public/placeholder-image.webp')) {
    try {
      await sharp('public/placeholder-image.jpg')
        .webp()
        .toFile('public/placeholder-image.webp');
      console.log('✅ Created placeholder-image.webp');
    } catch (err) {
      console.error('❌ Error creating WebP placeholder:', err);
    }
  }
  
  // Create category placeholder directories and files
  const categories = ['aviation', 'hospitality', 'healthcare', 'education', 'government', 'industrial', 'security'];
  
  for (const category of categories) {
    // Ensure webp directory exists
    try {
      const webpDir = `public/webp`;
      const categoryWebpDir = `public/images/${category}/webp`;
      
      await fsPromises.mkdir(webpDir, { recursive: true });
      await fsPromises.mkdir(categoryWebpDir, { recursive: true });
      
      // Create category-specific placeholders
      if (!fs.existsSync(`public/webp/${category}_uniforms.webp`)) {
        await sharp('public/placeholder-image.jpg')
          .webp()
          .toFile(`public/webp/${category}_uniforms.webp`);
        console.log(`✅ Created ${category} placeholder in webp directory`);
      }
      
      if (!fs.existsSync(`public/images/${category}/webp/placeholder.webp`)) {
        await sharp('public/placeholder-image.jpg')
          .webp()
          .toFile(`public/images/${category}/webp/placeholder.webp`);
        console.log(`✅ Created ${category} directory placeholder`);
      }
    } catch (err) {
      console.error(`❌ Error creating ${category} placeholders:`, err);
    }
  }
}

// Function to delete problematic files
async function deleteProblematicFiles() {
  console.log('Removing problematic files...');
  
  for (const file of PROBLEMATIC_FILES) {
    try {
      await fsPromises.access(file);
      await fsPromises.unlink(file);
      console.log(`✅ Deleted: ${file}`);
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.log(`⚠️ File already removed: ${file}`);
      } else {
        console.error(`❌ Error deleting ${file}:`, err);
      }
    }
  }
}

// Main function
async function main() {
  console.log('Starting clean-images.js...');
  
  try {
    await ensurePlaceholders();
    await deleteProblematicFiles();
    
    console.log('\nAll tasks completed! The codebase should now be free of problematic images.');
    console.log('WebP placeholders have been created for all necessary directories.');
  } catch (err) {
    console.error('❌ An unexpected error occurred:', err);
    process.exit(1);
  }
}

// Run the script
main(); 