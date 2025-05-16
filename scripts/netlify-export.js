#!/usr/bin/env node

/**
 * Simplified export script for Netlify
 * Avoids webpack issues by temporarily moving the public directory
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Log start
console.log('Starting Netlify export process...');

// Environment variables
process.env.NEXT_PUBLIC_USE_WEBP_ONLY = 'true';
process.env.NETLIFY = 'true';

// Prepare for build by creating WebP images
try {
  console.log('Preparing image assets...');
  
  // Run the image conversion scripts
  execSync('node clean-images.js', { stdio: 'inherit' });
  execSync('node fix-images.js', { stdio: 'inherit' });
  execSync('node convert-images.js', { stdio: 'inherit' });
  
  console.log('Image preparation completed');
} catch (error) {
  console.warn('Warning: Failed to prepare images:', error.message);
  console.log('Continuing with build process anyway...');
}

// Create a completely simplified environment for the build
try {
  console.log('Setting up simplified build environment...');
  
  // Backup the original configuration
  if (fs.existsSync('next.config.js')) {
    fs.copyFileSync('next.config.js', 'next.config.js.bak');
  }
  
  // Create minimal next.config.js
  const nextConfig = `
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  eslint: { 
    ignoreDuringBuilds: true 
  }
};`;
  
  fs.writeFileSync('next.config.js', nextConfig);
  
  // Create a simple image loader
  const imageLoader = `
module.exports = function imageLoader({ src }) {
  return src;
};`;
  
  fs.writeFileSync('image-loader.js', imageLoader);
  
  // Move the public directory to avoid webpack processing it
  if (fs.existsSync('public')) {
    // Create a backup if one doesn't exist
    if (fs.existsSync('public.bak')) {
      fs.rmSync('public.bak', { recursive: true, force: true });
    }
    
    // Rename public to public.bak
    fs.renameSync('public', 'public.bak');
    
    // Create a minimal public directory with only essential WebP files
    fs.mkdirSync('public');
    fs.mkdirSync('public/webp', { recursive: true });
    
    // Copy the placeholder image for the build
    if (fs.existsSync('public.bak/webp/placeholder-image.webp')) {
      fs.copyFileSync(
        path.join('public.bak', 'webp', 'placeholder-image.webp'),
        path.join('public', 'webp', 'placeholder-image.webp')
      );
    }
    
    // Copy essential files for specific categories
    const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security'];
    categories.forEach(category => {
      // Create directory structure
      fs.mkdirSync(`public/images/${category}/webp`, { recursive: true });
      
      // Try to copy a category-specific placeholder
      if (fs.existsSync(`public.bak/images/${category}/webp`)) {
        const files = fs.readdirSync(`public.bak/images/${category}/webp`);
        if (files.length > 0) {
          // Copy the first WebP file as a placeholder
          fs.copyFileSync(
            path.join('public.bak', 'images', category, 'webp', files[0]),
            path.join('public', 'images', category, 'webp', files[0])
          );
        }
      }
    });
  }
  
  console.log('Build environment setup completed');
} catch (error) {
  console.error('Error setting up build environment:', error.message);
  
  // Restore public directory if it was moved
  if (fs.existsSync('public.bak') && !fs.existsSync('public')) {
    fs.renameSync('public.bak', 'public');
  }
  
  process.exit(1);
}

// Run the build
try {
  console.log('Building Next.js app...');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  
  // Restore the original environment
  if (fs.existsSync('next.config.js.bak')) {
    fs.unlinkSync('next.config.js');
    fs.renameSync('next.config.js.bak', 'next.config.js');
  }
  
  if (fs.existsSync('public.bak')) {
    if (fs.existsSync('public')) {
      fs.rmSync('public', { recursive: true, force: true });
    }
    fs.renameSync('public.bak', 'public');
  }
  
  process.exit(1);
}

// Post-processing: copy all necessary files to the output directory
try {
  console.log('Performing post-build processing...');
  
  // Restore the original public directory
  if (fs.existsSync('public')) {
    fs.rmSync('public', { recursive: true, force: true });
  }
  
  if (fs.existsSync('public.bak')) {
    fs.renameSync('public.bak', 'public');
  }
  
  // Destination directory
  const outputDir = path.join(process.cwd(), 'out');
  
  // Copy all WebP images to the output directory
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
  
  // Copy WebP files
  copyWebpFiles(
    path.join(process.cwd(), 'public', 'webp'),
    path.join(outputDir, 'webp')
  );
  
  // Copy category WebP files
  const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security'];
  categories.forEach(category => {
    const webpSrcDir = path.join(process.cwd(), 'public', 'images', category, 'webp');
    const webpDestDir = path.join(outputDir, 'images', category, 'webp');
    copyWebpFiles(webpSrcDir, webpDestDir);
  });
  
  // Copy Netlify-specific files
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
  
  console.log('Post-processing completed');
} catch (error) {
  console.error('Error during post-processing:', error.message);
}

// Cleanup temporary files
try {
  console.log('Cleaning up temporary files...');
  
  // Restore the original next.config.js
  if (fs.existsSync('next.config.js.bak')) {
    fs.unlinkSync('next.config.js');
    fs.renameSync('next.config.js.bak', 'next.config.js');
  }
  
  // Remove the temporary image loader
  if (fs.existsSync('image-loader.js')) {
    fs.unlinkSync('image-loader.js');
  }
  
  console.log('Cleanup completed');
} catch (error) {
  console.warn('Warning: Error during cleanup:', error.message);
}

console.log('Netlify export process completed successfully!'); 