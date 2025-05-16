const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

async function convertToWebP(inputPath) {
  try {
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
    
    // Skip if already WebP
    if (inputPath.toLowerCase().endsWith('.webp')) {
      console.log(`Skipping already WebP image: ${inputPath}`);
      return;
    }

    // Create output directory if it doesn't exist
    await ensureDirectoryExists(path.dirname(outputPath));

    // Read image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Convert image to WebP with appropriate settings
    const sharpInstance = sharp(inputPath)
      .webp({
        quality: 90,
        lossless: false,
        force: true,
        effort: 6 // Higher compression effort
      });

    // If image has transparency, preserve it
    if (metadata.hasAlpha) {
      sharpInstance.ensureAlpha();
    }

    // Save the converted image
    await sharpInstance.toFile(outputPath);
    console.log(`✓ Converted ${inputPath} to ${outputPath}`);

    try {
      // Delete original file only if conversion was successful
      await fs.unlink(inputPath);
      console.log(`  Deleted original file: ${inputPath}`);
    } catch (deleteError) {
      console.warn(`  Warning: Could not delete original file ${inputPath}:`, deleteError.message);
    }

    // Create a placeholder version for lazy loading
    const placeholderPath = outputPath.replace(/\.webp$/, '.placeholder.webp');
    await sharp(outputPath)
      .resize(20) // Tiny size for placeholder
      .webp({ quality: 20 })
      .toFile(placeholderPath);
    console.log(`  Created placeholder: ${placeholderPath}`);

  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    // Log detailed error information to a file
    await fs.appendFile('image-conversion-errors.log', 
      `${new Date().toISOString()} - Error converting ${inputPath}:\n${error.stack}\n\n`);
  }
}

async function main() {
  console.log('Starting image conversion process...');
  
  // Get all image files
  const imagePatterns = [
    'public/images/**/*.{jpg,jpeg,png,gif}',
    'public/assets/**/*.{jpg,jpeg,png,gif}',
    'public/uploads/**/*.{jpg,jpeg,png,gif}'
  ];

  const imageFiles = imagePatterns.reduce((acc, pattern) => {
    return acc.concat(glob.sync(pattern, {
      nocase: true,
      ignore: ['**/node_modules/**', '**/*.placeholder.*', '**/*.webp']
    }));
  }, []);

  console.log(`Found ${imageFiles.length} images to convert`);

  // Convert all images to WebP
  let converted = 0;
  let failed = 0;

  for (const file of imageFiles) {
    try {
      await convertToWebP(file);
      converted++;
    } catch (error) {
      failed++;
      console.error(`Failed to convert ${file}:`, error.message);
    }
  }

  console.log('\nConversion Summary:');
  console.log(`✓ Successfully converted: ${converted} images`);
  console.log(`❌ Failed conversions: ${failed} images`);
  
  if (failed > 0) {
    console.log('Check image-conversion-errors.log for detailed error information');
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
}); 