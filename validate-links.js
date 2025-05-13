const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to check if a directory or file exists
function pathExists(relativePath) {
  // Handle special cases
  if (relativePath === '/' || relativePath === '/blog' || relativePath === '/services') {
    return true;
  }
  
  // Remove leading slash and construct path to app directory
  const appPath = path.join('app', relativePath.replace(/^\//, ''));
  return fs.existsSync(appPath);
}

// Extract links from code files
function extractLinksFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hrefMatches = content.match(/href=["']([^"']+)["']/g) || [];
    
    return hrefMatches
      .map(match => {
        const href = match.match(/href=["']([^"']+)["']/)[1];
        // Only include internal links
        if (href.startsWith('/') && !href.startsWith('//')) {
          return {
            href,
            source: filePath
          };
        }
        return null;
      })
      .filter(Boolean);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// Main function
async function validateLinks() {
  // Find all tsx, jsx, js files
  const files = glob.sync('{app,components}/**/*.{tsx,jsx,js}');
  
  let allLinks = [];
  
  // Extract links from all files
  files.forEach(file => {
    const links = extractLinksFromFile(file);
    allLinks = [...allLinks, ...links];
  });
  
  // Organize and deduplicate links
  const uniqueLinks = [...new Set(allLinks.map(link => link.href))];
  
  console.log(`Found ${uniqueLinks.length} unique internal links`);
  
  // Validate links against existing paths
  const brokenLinks = uniqueLinks.filter(link => !pathExists(link));
  
  console.log('\nPotential broken links:');
  brokenLinks.forEach(link => {
    const sources = allLinks
      .filter(l => l.href === link)
      .map(l => l.source);
    
    console.log(`- ${link}`);
    console.log('  Found in:');
    sources.forEach(source => {
      console.log(`  - ${source}`);
    });
  });
  
  console.log(`\nFound ${brokenLinks.length} potentially broken links`);
  
  return {
    totalLinks: uniqueLinks.length,
    brokenLinks: brokenLinks,
    brokenLinksCount: brokenLinks.length
  };
}

validateLinks(); 