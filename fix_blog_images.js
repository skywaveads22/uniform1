const fs = require('fs');
const path = require('path');

// Read the image inventory
const imageInventory = fs.readFileSync('img.md', 'utf8');

// Extract all image paths from the inventory by category
const imagesByCategory = {
  aviation: [],
  security: [],
  hospitality: [],
  healthcare: [],
  industrial: [],
  education: [],
  government: [],
  author: [],
  blog: []
};

// Parse the inventory by sections
const sections = imageInventory.split('## ');
for (const section of sections) {
  if (section.includes('صور الطيران')) {
    extractImagesForCategory(section, 'aviation');
  } else if (section.includes('صور الأمن والحماية')) {
    extractImagesForCategory(section, 'security');
  } else if (section.includes('صور الضيافة والفنادق')) {
    extractImagesForCategory(section, 'hospitality');
  } else if (section.includes('صور الرعاية الصحية')) {
    extractImagesForCategory(section, 'healthcare');
  } else if (section.includes('صور الصناعة')) {
    extractImagesForCategory(section, 'industrial');
  } else if (section.includes('صور التعليم')) {
    extractImagesForCategory(section, 'education');
  } else if (section.includes('صور الحكومة')) {
    extractImagesForCategory(section, 'government');
  } else if (section.includes('صور المؤلفين')) {
    extractImagesForCategory(section, 'author');
  } else if (section.includes('صور المدونة العامة')) {
    extractImagesForCategory(section, 'blog');
  }
}

function extractImagesForCategory(section, category) {
  const regex = /- `([^`]+)`/g;
  let match;
  while ((match = regex.exec(section)) !== null) {
    imagesByCategory[category].push(match[1]);
  }
}

// Function to get a replacement image for a missing image
function getReplacementImage(missingImage) {
  // Determine which category the missing image belongs to
  const categories = ['aviation', 'security', 'hospitality', 'healthcare', 'industrial', 'education', 'government', 'blog'];
  let category = 'aviation'; // Default category
  
  for (const cat of categories) {
    if (missingImage.includes(cat)) {
      category = cat;
      break;
    }
  }
  
  // Special case for team/author images
  if (missingImage.includes('team') || missingImage.includes('author')) {
    return imagesByCategory.author.length > 0 ? imagesByCategory.author[0] : '/images/author/default-author.jpg';
  }
  
  // Get an appropriate replacement from the same category
  if (imagesByCategory[category].length > 0) {
    return imagesByCategory[category][0]; // Use the first available image in the category
  }
  
  // Fallback to any available image
  for (const cat of categories) {
    if (imagesByCategory[cat].length > 0) {
      return imagesByCategory[cat][0];
    }
  }
  
  return '/images/author/default-author.jpg'; // Ultimate fallback
}

// Read the report of missing images
const reportContent = fs.readFileSync('blog_image_report.txt', 'utf8');
const fileBlocks = reportContent.split('---').filter(block => block.trim());

const filesToFix = [];

for (const block of fileBlocks) {
  const lines = block.trim().split('\n');
  const filePath = lines[0].replace('File: ', '').trim();
  
  if (!lines[1].includes('Missing images:')) continue;
  
  const missingImages = [];
  for (let i = 2; i < lines.length; i++) {
    if (lines[i].startsWith('- ')) {
      missingImages.push(lines[i].substring(2).trim());
    }
  }
  
  filesToFix.push({ filePath, missingImages });
}

console.log(`Found ${filesToFix.length} files to fix`);

// Fix each file
let fixedFiles = 0;
let errors = 0;

for (const file of filesToFix) {
  try {
    let content = fs.readFileSync(file.filePath, 'utf8');
    let modified = false;
    
    for (const missingImage of file.missingImages) {
      const replacement = getReplacementImage(missingImage);
      
      // Replace in metadata
      const metadataRegex = new RegExp(`images: \\[\\s*['"]${escapeRegExp(missingImage)}['"]\\s*\\]`, 'g');
      if (metadataRegex.test(content)) {
        content = content.replace(metadataRegex, `images: ['${replacement}']`);
        modified = true;
      }
      
      // Replace in Image components
      const imageComponentRegex = new RegExp(`src=\\s*['"]${escapeRegExp(missingImage)}['"]`, 'g');
      if (imageComponentRegex.test(content)) {
        content = content.replace(imageComponentRegex, `src="${replacement}"`);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(file.filePath, content);
      fixedFiles++;
      console.log(`Fixed: ${file.filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${file.filePath}:`, error.message);
    errors++;
  }
}

console.log(`\nSummary:`);
console.log(`Total files to fix: ${filesToFix.length}`);
console.log(`Fixed successfully: ${fixedFiles}`);
console.log(`Errors: ${errors}`);

// Helper function to escape special characters in string for use in regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
} 