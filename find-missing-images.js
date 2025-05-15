const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

// تخزين مسارات الصور المستخدمة في الكود
const imageReferences = new Set();

// تخزين مسارات الصور الموجودة فعلياً
const existingImages = new Set();

// تخزين الصور المفقودة
const missingImages = new Set();

// قائمة بامتدادات الصور المعتمدة
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.avif', '.ico'];

// قائمة باللواحق المستخدمة في كود JavaScript/TypeScript/JSX/TSX لمسارات الصور
const jsxImagePatterns = [
  /src=["']([^"']+\.(jpg|jpeg|png|gif|svg|webp|avif))["']/gi,
  /url\(["']?([^"')]+\.(jpg|jpeg|png|gif|svg|webp|avif))["']?\)/gi,
  /(?:background|image):\s*url\(["']?([^"')]+\.(jpg|jpeg|png|gif|svg|webp|avif))["']?\)/gi,
  /getImageUrl\(["']([^"']+)["']\)/gi,
  /require\(["']([^"']+\.(jpg|jpeg|png|gif|svg|webp|avif))["']\)/gi,
  /import\s+.*from\s+["']([^"']+\.(jpg|jpeg|png|gif|svg|webp|avif))["']/gi,
  /backgroundImage:\s*["']url\(([^)]+)\)["']/gi,
  /\bimage:\s*["']([^"']+)["']/gi,
  /\bsrc:\s*["']([^"']+)["']/gi,
  /\bImageLoader\([^)]*["']([^"']+)["']/gi
];

// قائمة بالمجلدات التي يجب تجاهلها
const ignoredDirectories = [
  'node_modules',
  '.next',
  '.git',
  'dist',
  'build'
];

// Normalize a path to use forward slashes
function normalizePath(filePath) {
  return filePath.replace(/\\/g, '/');
}

// Check if a string is a potential image path
function isPotentialImagePath(str) {
  if (!str) return false;
  
  // Clean the path
  const cleanPath = str.trim();
  
  // Must be at least 5 characters long (e.g., "x.jpg")
  if (cleanPath.length < 5) return false;
  
  // Check if it's a valid image extension
  const extension = path.extname(cleanPath).toLowerCase();
  if (!imageExtensions.includes(extension)) return false;
  
  return true;
}

// Extract image paths from a file content
function extractImagePaths(content, filePath) {
  const results = new Set();
  
  // Handle special case for Next.js Images that don't always specify extension
  const nextImageMatches = content.match(/src=["']([^"']+?)["']\s+(?:.*?)(?:alt=["'][^"']*?["'])/gi);
  if (nextImageMatches) {
    nextImageMatches.forEach(match => {
      const srcMatch = match.match(/src=["']([^"']+?)["']/i);
      if (srcMatch && srcMatch[1]) {
        const path = srcMatch[1].trim();
        
        // Only consider paths that point to the public directory or are absolute
        if (path.startsWith('/') || path.startsWith('./public/') || path.startsWith('../public/')) {
          results.add(path.replace(/^\.\/(public\/)?/, '/').replace(/^\.\.\/public\//, '/'));
        }
      }
    });
  }
  
  // Apply all standard patterns
  jsxImagePatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      if (match[1] && isPotentialImagePath(match[1])) {
        let imagePath = match[1].trim();
        
        // Normalize paths
        if (imagePath.startsWith('./public/')) {
          imagePath = imagePath.replace('./public', '');
        } else if (imagePath.startsWith('public/')) {
          imagePath = imagePath.replace('public', '');
        } else if (!imagePath.startsWith('/') && !imagePath.startsWith('http')) {
          // Relative paths without leading slash - not handled here
          continue;
        }
        
        // Add to results only if it's an internal path
        if (!imagePath.startsWith('http')) {
          results.add(imagePath);
        }
      }
    }
    
    // Reset pattern lastIndex for reuse
    pattern.lastIndex = 0;
  });
  
  return results;
}

// Scan a file for image references
async function scanFileForImages(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const imagePaths = extractImagePaths(content, filePath);
    
    imagePaths.forEach(imagePath => {
      imageReferences.add(imagePath);
    });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
  }
}

// Walk through directory recursively
async function walkDir(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (!ignoredDirectories.includes(entry.name)) {
          await walkDir(fullPath);
        }
      } else {
        // Scan code files
        const ext = path.extname(entry.name).toLowerCase();
        if (['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md'].includes(ext)) {
          await scanFileForImages(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error.message);
  }
}

// Scan public directory to find all actual images
async function findExistingImages(dir = 'public') {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = normalizePath('/' + path.relative('public', fullPath));
      
      if (entry.isDirectory()) {
        await findExistingImages(fullPath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (imageExtensions.includes(ext)) {
          existingImages.add(relativePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning public directory ${dir}:`, error.message);
  }
}

// Create a category mapping from image path
function categorizeImage(imagePath) {
  if (!imagePath) return 'Unknown';
  
  const parts = imagePath.split('/');
  if (parts.length >= 3 && parts[1] === 'images') {
    return parts[2].charAt(0).toUpperCase() + parts[2].slice(1);
  }
  
  return 'Other';
}

// Main function
async function findMissingImages() {
  console.log('🔍 بدء البحث عن الصور المفقودة...');
  
  // Find all image references in code
  console.log('🔍 جاري فحص الكود للعثور على مسارات الصور...');
  await walkDir('app');
  await walkDir('components');
  await walkDir('pages');
  
  console.log(`✅ تم العثور على ${imageReferences.size} صورة مستخدمة في الكود.`);
  
  // Find all existing images
  console.log('🔍 جاري فحص مجلد public للعثور على الصور الموجودة...');
  await findExistingImages();
  
  console.log(`✅ تم العثور على ${existingImages.size} صورة موجودة في مجلد public.`);
  
  // Determine missing images
  console.log('🔍 جاري تحديد الصور المفقودة...');
  
  // Organize by category
  const categorizedMissing = {};
  
  for (const imagePath of imageReferences) {
    // Skip external URLs
    if (imagePath.startsWith('http')) continue;
    
    // Apply a simple normalization for comparison
    const normalizedPath = normalizePath(imagePath);
    
    if (!existingImages.has(normalizedPath)) {
      const category = categorizeImage(normalizedPath);
      
      if (!categorizedMissing[category]) {
        categorizedMissing[category] = [];
      }
      
      categorizedMissing[category].push(normalizedPath);
      missingImages.add(normalizedPath);
    }
  }
  
  // Print results
  console.log(`\n⚠️ تم العثور على ${missingImages.size} صورة مفقودة:`);
  
  // Print by category
  for (const [category, images] of Object.entries(categorizedMissing)) {
    console.log(`\n📁 قسم ${category} (${images.length} صورة):`);
    images.forEach(image => console.log(`  - ${image}`));
  }
  
  // Create a report file
  const reportContent = `# تقرير الصور المفقودة
  
تاريخ التقرير: ${new Date().toLocaleString()}

## ملخص
- إجمالي الصور المستخدمة في الكود: ${imageReferences.size}
- إجمالي الصور الموجودة في مجلد public: ${existingImages.size}
- إجمالي الصور المفقودة: ${missingImages.size}

## قائمة الصور المفقودة حسب القسم

${Object.entries(categorizedMissing)
  .map(([category, images]) => `### قسم ${category} (${images.length} صورة)
${images.map(image => `- \`${image}\``).join('\n')}`)
  .join('\n\n')}
`;

  fs.writeFileSync('missing-images-report.md', reportContent, 'utf8');
  console.log('\n✅ تم إنشاء تقرير شامل في ملف missing-images-report.md');
  
  return {
    totalReferences: imageReferences.size,
    totalExisting: existingImages.size,
    totalMissing: missingImages.size,
    categorizedMissing
  };
}

// Run the script
findMissingImages().catch(err => console.error('حدث خطأ:', err)); 