const fs = require('fs');
const path = require('path');

// Read the articles.md file
const articlesFile = fs.readFileSync('articles.md', 'utf8');

// Parse the articles
const articles = [];
const lines = articlesFile.split('\n');
let currentArticle = null;

for (const line of lines) {
  // Match article title and path
  const articleMatch = line.match(/\d+\.\s+(.+?)\s+-\s+\(المسار\/الرابط الداخلي:\s+(.+?)\)/);
  
  if (articleMatch) {
    const title = articleMatch[1].trim();
    const path = articleMatch[2].trim();
    currentArticle = { title, path, imagePaths: [] };
    articles.push(currentArticle);
    continue;
  }

  // Match image paths
  const imageMatch = line.match(/صور التصنيفات:\s+(.+)/);
  if (imageMatch && currentArticle) {
    const imagePaths = imageMatch[1].split(',').map(img => img.trim());
    currentArticle.imagePaths = imagePaths;
  }
}

console.log(`Found ${articles.length} articles in articles.md`);

// Create a directory for backup files
if (!fs.existsSync('backups')) {
  fs.mkdirSync('backups');
}

// Process each article
let fixedCount = 0;
let skippedCount = 0;
let errorCount = 0;

console.log('Starting fixes...');

for (const article of articles) {
  try {
    // Extract the slug from the path
    const slug = article.path.replace('/blog/', '');
    const articleFilePath = path.join('app/blog', slug, 'page.tsx');
    
    // Check if the article file exists
    if (!fs.existsSync(articleFilePath)) {
      console.log(`Skipping missing file: ${articleFilePath}`);
      skippedCount++;
      continue;
    }
    
    // Read the article file
    const originalContent = fs.readFileSync(articleFilePath, 'utf8');
    
    // Process the image paths
    let expectedImagePath = article.imagePaths[0];
    
    // Convert from public/images/... to /images/...
    if (expectedImagePath && expectedImagePath.startsWith('public/')) {
      expectedImagePath = expectedImagePath.substring(6);
    }
    
    if (!expectedImagePath) {
      console.log(`No image path specified for ${article.title}. Skipping.`);
      skippedCount++;
      continue;
    }
    
    // Look for Image components
    const hasImages = originalContent.includes('<Image');
    
    if (!hasImages) {
      console.log(`No images found in ${article.title}. Skipping.`);
      skippedCount++;
      continue;
    }
    
    // Create a backup of the original file
    const backupFilePath = path.join('backups', `${slug}.tsx.bak`);
    fs.writeFileSync(backupFilePath, originalContent);
    
    // Find all Image components and extract their props
    const imageRegex = /<Image[^>]*src="([^"]+)"[^>]*>/g;
    const imageMatches = [...originalContent.matchAll(imageRegex)];
    
    if (imageMatches.length === 0) {
      console.log(`No image components found in ${article.title} despite hasImages being true. Skipping.`);
      skippedCount++;
      continue;
    }
    
    // Find the best image to keep
    let bestImageIndex = 0;
    
    // Try to find an image that matches the expected path
    for (let i = 0; i < imageMatches.length; i++) {
      const imagePath = imageMatches[i][1];
      if (imagePath.includes(expectedImagePath)) {
        bestImageIndex = i;
        break;
      }
    }
    
    // If no match found, use the first main image (outside of secondary sections)
    if (bestImageIndex === -1) {
      bestImageIndex = 0;
    }
    
    // Extract the first image and its surrounding context
    const primaryImage = imageMatches[bestImageIndex][0];
    const actualImagePath = imageMatches[bestImageIndex][1];
    
    // Replace content with a version that only has the primary image
    let newContent = originalContent;
    
    // Remove all other images except the primary one
    for (let i = 0; i < imageMatches.length; i++) {
      if (i !== bestImageIndex) {
        const imgMatch = imageMatches[i][0];
        // Replace the image component with an empty string, but keep its container
        newContent = newContent.replace(imgMatch, '');
      }
    }
    
    // Update the primary image src to match the expected path if needed
    if (!actualImagePath.includes(expectedImagePath)) {
      newContent = newContent.replace(
        actualImagePath,
        expectedImagePath
      );
    }
    
    // Write the updated content
    fs.writeFileSync(articleFilePath, newContent);
    console.log(`Fixed article: ${article.title}`);
    fixedCount++;
    
  } catch (error) {
    console.error(`Error processing ${article.title}: ${error.message}`);
    errorCount++;
  }
}

console.log('\nSummary:');
console.log(`Total articles processed: ${articles.length}`);
console.log(`Articles fixed: ${fixedCount}`);
console.log(`Articles skipped: ${skippedCount}`);
console.log(`Errors encountered: ${errorCount}`);
console.log('\nBackups created in the "backups" directory.'); 