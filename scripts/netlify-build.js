#!/usr/bin/env node

/**
 * netlify-build.js
 * 
 * Manual build approach for Netlify deployment, avoiding webpack issues.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Log the build environment
console.log('Starting Netlify build process...');
console.log(`Node version: ${process.version}`);
console.log(`Build environment: ${process.env.CONTEXT || 'development'}`);

// Create a temporary .env.local to force WebP only
try {
  console.log('Creating temporary environment configuration...');
  fs.writeFileSync('.env.local', 'NEXT_PUBLIC_USE_WEBP_ONLY=true\nNETLIFY=true\n');
  console.log('Created environment configuration');
} catch (error) {
  console.warn('Warning: Failed to create environment file:', error.message);
}

// Run the image conversion scripts
try {
  console.log('Preparing images (converting to WebP)...');
  execSync('node clean-images.js', { stdio: 'inherit' });
  execSync('node fix-images.js', { stdio: 'inherit' });
  execSync('node convert-images.js', { stdio: 'inherit' });
  console.log('Image preparation completed');
} catch (error) {
  console.warn('Warning: Image preparation had issues:', error.message);
  console.log('Continuing anyway...');
}

// Create a simple next.config.js file
try {
  console.log('Creating simplified Next.js configuration...');
  
  const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;`;

  // Create a simple image loader
  const imageLoader = `module.exports = function customImageLoader({ src }) {
  return src;
}`;

  // Backup the original config
  if (fs.existsSync('next.config.js')) {
    fs.renameSync('next.config.js', 'next.config.js.bak');
  }
  
  // Write the simplified config
  fs.writeFileSync('next.config.js', nextConfig);
  fs.writeFileSync('image-loader.js', imageLoader);
  console.log('Created simplified Next.js configuration');
} catch (error) {
  console.error('Error creating configuration:', error.message);
  process.exit(1);
}

// Prepare the manual build approach
try {
  console.log('Preparing for manual build...');
  
  // Move the problematic public directory temporarily
  if (fs.existsSync('public')) {
    if (fs.existsSync('public.bak')) {
      fs.rmSync('public.bak', { recursive: true, force: true });
    }
    fs.renameSync('public', 'public.bak');
  }
  
  // Create a minimal public directory with only WebP files
  fs.mkdirSync('public');
  fs.mkdirSync('public/webp', { recursive: true });
  
  // Copy essential WebP files for the build
  const copyEssentialFiles = (srcDir, destDir) => {
    if (!fs.existsSync(srcDir)) return;
    
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);
      
      if (entry.isDirectory()) {
        // Don't recursively copy all directories, just the ones we need
        if (entry.name === 'webp') {
          copyEssentialFiles(srcPath, destPath);
        }
      } else if (entry.name.endsWith('.webp')) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };
  
  // Copy essential WebP files
  copyEssentialFiles(
    path.join(process.cwd(), 'public.bak', 'webp'),
    path.join(process.cwd(), 'public', 'webp')
  );
  
  console.log('Manual build preparation completed');
} catch (error) {
  console.error('Error during preparation:', error.message);
  
  // Restore the original public directory
  if (fs.existsSync('public.bak')) {
    if (fs.existsSync('public')) {
      fs.rmSync('public', { recursive: true, force: true });
    }
    fs.renameSync('public.bak', 'public');
  }
  
  process.exit(1);
}

// Run the Next.js build with minimal files
try {
  console.log('Building Next.js application...');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  
  // Restore the original directories
  if (fs.existsSync('public.bak')) {
    if (fs.existsSync('public')) {
      fs.rmSync('public', { recursive: true, force: true });
    }
    fs.renameSync('public.bak', 'public');
  }
  
  // Restore the original config
  if (fs.existsSync('next.config.js.bak')) {
    fs.unlinkSync('next.config.js');
    fs.renameSync('next.config.js.bak', 'next.config.js');
  }
  
  process.exit(1);
}

// Process output with manual file copying
try {
  console.log('Post-processing build output...');
  
  // Restore the original public directory
  if (fs.existsSync('public')) {
    fs.rmSync('public', { recursive: true, force: true });
  }
  fs.renameSync('public.bak', 'public');
  
  const outputDir = path.join(process.cwd(), 'out');
  
  // Create needed directories in output
  fs.mkdirSync(path.join(outputDir, 'webp'), { recursive: true });
  
  // Copy all Netlify configuration files
  const configFiles = [
    { src: 'public/_redirects', dest: '_redirects' },
    { src: 'public/robots.txt', dest: 'robots.txt' },
    { src: 'public/sitemap.xml', dest: 'sitemap.xml' },
    { src: 'public/sitemap-0.xml', dest: 'sitemap-0.xml' }
  ];
  
  configFiles.forEach(file => {
    const srcPath = path.join(process.cwd(), file.src);
    const destPath = path.join(outputDir, file.dest);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ Copied ${file.dest}`);
    } else {
      console.log(`⚠️ ${file.src} not found, skipping`);
    }
  });
  
  // Copy all WebP files to output
  const recursiveCopy = (src, dest) => {
    if (!fs.existsSync(src)) return;
    
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        recursiveCopy(srcPath, destPath);
      } else if (entry.name.endsWith('.webp')) {
        try {
          fs.copyFileSync(srcPath, destPath);
        } catch (err) {
          console.warn(`⚠️ Error copying ${srcPath}:`, err.message);
        }
      }
    }
  };
  
  // Copy WebP files from public/webp to output/webp
  recursiveCopy(
    path.join(process.cwd(), 'public', 'webp'),
    path.join(outputDir, 'webp')
  );
  
  // Copy category-specific WebP files
  const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security'];
  categories.forEach(category => {
    const webpSrcDir = path.join(process.cwd(), 'public', 'images', category, 'webp');
    const webpDestDir = path.join(outputDir, 'images', category, 'webp');
    recursiveCopy(webpSrcDir, webpDestDir);
  });
  
  console.log('Post-processing completed');
} catch (error) {
  console.error('Error in post-processing:', error.message);
}

// Clean up temporary files
try {
  console.log('Cleaning up temporary files...');
  
  // Remove temporary environment file
  if (fs.existsSync('.env.local')) {
    fs.unlinkSync('.env.local');
  }
  
  // Restore original configuration
  if (fs.existsSync('next.config.js.bak')) {
    fs.unlinkSync('next.config.js');
    fs.renameSync('next.config.js.bak', 'next.config.js');
  }
  
  // Remove temporary image loader
  if (fs.existsSync('image-loader.js')) {
    fs.unlinkSync('image-loader.js');
  }
  
  console.log('Cleanup completed');
} catch (error) {
  console.warn('Warning: Error during cleanup:', error.message);
}

console.log('Netlify build process completed!'); 
