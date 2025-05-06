const fs = require('fs');
const path = require('path');

// Read the image inventory
const imageInventory = fs.readFileSync('img.md', 'utf8');

// Extract all image paths from the inventory
const availableImages = [];
const imageRegex = /- `([^`]+)`/g;
let match;

while ((match = imageRegex.exec(imageInventory)) !== null) {
  availableImages.push(match[1]);
}

// Function to scan a blog post file for image references
function scanBlogPost(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find images in metadata and in Image components
    const metadataImageRegex = /images: \[\s*['"]([^'"]+)['"]\s*\]/g;
    const imageComponentRegex = /src=\s*['"]([^'"]+)['"]/g;
    
    const missingImages = [];
    
    // Check metadata images
    while ((match = metadataImageRegex.exec(content)) !== null) {
      const imagePath = match[1];
      if (!availableImages.includes(imagePath)) {
        missingImages.push(imagePath);
      }
    }
    
    // Check Image component src
    while ((match = imageComponentRegex.exec(content)) !== null) {
      const imagePath = match[1];
      if (!imagePath.startsWith('http') && !availableImages.includes(imagePath)) {
        missingImages.push(imagePath);
      }
    }
    
    return missingImages.length > 0 ? { 
      filePath, 
      missingImages: [...new Set(missingImages)] // Remove duplicates
    } : null;
  } catch (error) {
    console.error(`Error scanning ${filePath}:`, error.message);
    return null;
  }
}

// Function to recursively find all blog post files
function findBlogPosts(dir) {
  const results = [];
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results.push(...findBlogPosts(filePath));
    } else if (file === 'page.tsx') {
      results.push(filePath);
    }
  }
  
  return results;
}

// Main function
function main() {
  // Find all blog posts
  const blogDir = path.join('app', 'blog');
  const blogPosts = findBlogPosts(blogDir);
  
  console.log(`Found ${blogPosts.length} blog posts`);
  
  // Scan each blog post for missing images
  const issues = [];
  
  for (const blogPost of blogPosts) {
    const result = scanBlogPost(blogPost);
    if (result) {
      issues.push(result);
    }
  }
  
  // Write report to file
  const report = issues.map(issue => {
    return `File: ${issue.filePath}\nMissing images:\n${issue.missingImages.map(img => `- ${img}`).join('\n')}\n`;
  }).join('\n---\n\n');
  
  const summary = `Found ${issues.length} blog posts with missing images out of ${blogPosts.length} total posts.\n\n`;
  
  fs.writeFileSync('blog_image_report.txt', summary + report);
  
  console.log(`Scan complete. Found ${issues.length} blog posts with missing images.`);
  console.log('Report written to blog_image_report.txt');
}

main(); 