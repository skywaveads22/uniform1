const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all directory paths in app folder
function getAllPaths() {
  // Get directories in app folder
  const dirs = glob.sync('app/**/*/').map(dir => 
    '/' + dir.replace(/^app\//, '').replace(/\/$/, '')
  );
  
  // Add top level directories without the app prefix
  const topDirs = glob.sync('app/*/').map(dir => 
    '/' + dir.replace(/^app\//, '').replace(/\/$/, '')
  );
  
  return [...dirs, ...topDirs, '/'];
}

// Generate common path variations that might cause 404s
function generatePathVariations(path) {
  const variations = [];
  
  // Remove hyphens
  if (path.includes('-')) {
    variations.push(path.replace(/-/g, ''));
  }
  
  // Replace hyphens with underscores
  if (path.includes('-')) {
    variations.push(path.replace(/-/g, '_'));
  }
  
  // Add/remove trailing slash
  if (path.endsWith('/')) {
    variations.push(path.slice(0, -1));
  } else {
    variations.push(path + '/');
  }
  
  // All uppercase
  variations.push(path.toUpperCase());
  
  // All lowercase
  variations.push(path.toLowerCase());
  
  // Handle common category/service path variations
  if (path.startsWith('/services/')) {
    variations.push('/service/' + path.slice(10));
  }
  
  if (path.startsWith('/blog/category/')) {
    variations.push('/blog/categories/' + path.slice(15));
    variations.push('/blog/' + path.slice(15));
  }
  
  return variations;
}

// Generate redirects configuration
function generateRedirects() {
  const actualPaths = getAllPaths();
  console.log(`Found ${actualPaths.length} actual paths`);
  
  const redirects = [];
  
  // Generate variations for each actual path
  actualPaths.forEach(actualPath => {
    const variations = generatePathVariations(actualPath);
    
    variations.forEach(variation => {
      // Don't create redirects for actual paths or duplicates
      if (!actualPaths.includes(variation) && variation !== actualPath) {
        redirects.push({
          source: variation,
          destination: actualPath,
          permanent: true
        });
      }
    });
  });
  
  // Special case redirects
  redirects.push({
    source: '/services/old-service-name',
    destination: '/services', 
    permanent: true
  });
  
  redirects.push({
    source: '/careers/jobs',
    destination: '/careers',
    permanent: true
  });
  
  // Return unique redirects
  const uniqueRedirects = Array.from(
    new Set(redirects.map(r => JSON.stringify(r)))
  ).map(r => JSON.parse(r));
  
  console.log(`Generated ${uniqueRedirects.length} potential redirects`);
  
  // Format for next.config.js
  const redirectsConfig = uniqueRedirects.map(redirect => 
    `  {\n    source: '${redirect.source}',\n    destination: '${redirect.destination}',\n    permanent: ${redirect.permanent}\n  }`
  ).join(',\n');
  
  // Write to file for easy copy-paste
  fs.writeFileSync('suggested-redirects.js', 
    `// Additional redirects to add to next.config.js\n\nasync redirects() {\n  return [\n${redirectsConfig}\n  ];\n}`
  );
  
  console.log('Suggested redirects written to suggested-redirects.js');
}

generateRedirects(); 