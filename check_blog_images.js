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

// Check each article file
const results = {
  total: articles.length,
  found: 0,
  missingFile: [],
  missingImage: [],
  multipleImages: [],
  imagePathMismatch: []
};

for (const article of articles) {
  // Extract the slug from the path
  const slug = article.path.replace('/blog/', '');
  const articleFilePath = path.join('app/blog', slug, 'page.tsx');
  
  // Check if the article file exists
  if (!fs.existsSync(articleFilePath)) {
    results.missingFile.push({ title: article.title, path: article.path });
    continue;
  }
  
  results.found++;
  
  // Read the article file
  const articleContent = fs.readFileSync(articleFilePath, 'utf8');
  
  // Check for images in the file
  const imageMatches = [...articleContent.matchAll(/<Image[^>]*src="([^"]+)"[^>]*>/g)];
  
  if (imageMatches.length === 0) {
    results.missingImage.push({ title: article.title, path: article.path });
    continue;
  }
  
  if (imageMatches.length > 1) {
    results.multipleImages.push({ 
      title: article.title, 
      path: article.path, 
      images: imageMatches.map(match => match[1])
    });
  }
  
  // Compare image paths
  const imagePaths = imageMatches.map(match => match[1]);
  const expectedImagePaths = article.imagePaths.map(p => {
    // Convert from public/images/... to /images/...
    if (p.startsWith('public/')) {
      return p.substring(6);
    }
    return p;
  });
  
  // Check if any expected image path is used
  const hasExpectedImage = imagePaths.some(imagePath => 
    expectedImagePaths.some(expectedPath => imagePath.includes(expectedPath))
  );
  
  if (!hasExpectedImage) {
    results.imagePathMismatch.push({
      title: article.title,
      path: article.path,
      expectedPaths: expectedImagePaths,
      actualPaths: imagePaths
    });
  }
}

// Create output
let output = '\nResults:\n';
output += `Total articles: ${results.total}\n`;
output += `Articles found: ${results.found}\n`;
output += `Articles with missing files: ${results.missingFile.length}\n`;
output += `Articles with missing images: ${results.missingImage.length}\n`;
output += `Articles with multiple images: ${results.multipleImages.length}\n`;
output += `Articles with image path mismatch: ${results.imagePathMismatch.length}\n`;

output += '\nMissing files:\n';
results.missingFile.forEach(a => output += `- ${a.title} (${a.path})\n`);

output += '\nMissing images:\n';
results.missingImage.forEach(a => output += `- ${a.title} (${a.path})\n`);

output += '\nMultiple images:\n';
results.multipleImages.forEach(a => {
  output += `- ${a.title} (${a.path})\n`;
  output += `  Images: ${a.images.join(', ')}\n`;
});

output += '\nImage path mismatch:\n';
results.imagePathMismatch.forEach(a => {
  output += `- ${a.title} (${a.path})\n`;
  output += `  Expected: ${a.expectedPaths.join(', ')}\n`;
  output += `  Actual: ${a.actualPaths.join(', ')}\n`;
});

// Write to file and also print to console
fs.writeFileSync('blog_image_report.txt', output);
console.log(output); 