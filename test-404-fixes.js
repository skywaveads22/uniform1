// Test script to validate 404 fixes by checking if the redirects have been applied correctly
const fs = require('fs');
const path = require('path');

// Extract the redirects from next.config.js
function extractRedirects() {
  try {
    const content = fs.readFileSync('next.config.js', 'utf8');
    const redirectsPattern = /async redirects\(\) \{[\s\S]*?return \[([\s\S]*?)\]\;/;
    const redirectsMatch = content.match(redirectsPattern);
    
    if (!redirectsMatch || !redirectsMatch[1]) {
      return [];
    }
    
    const redirectsSection = redirectsMatch[1];
    const redirects = [];
    
    // Extract individual redirect objects
    const redirectPattern = /\{\s*source:\s*['"]([^'"]+)['"]\s*,\s*destination:\s*['"]([^'"]+)['"]\s*,\s*permanent:\s*(true|false)/g;
    let match;
    
    while ((match = redirectPattern.exec(redirectsSection)) !== null) {
      redirects.push({
        source: match[1],
        destination: match[2],
        permanent: match[3] === 'true'
      });
    }
    
    return redirects;
  } catch (error) {
    console.error('Error extracting redirects:', error);
    return [];
  }
}

// Validate if the destination paths actually exist
function validateDestinations(redirects) {
  const validDestinations = [];
  const invalidDestinations = [];
  
  redirects.forEach(redirect => {
    const destination = redirect.destination;
    
    // Skip special paths and paths with parameters
    if (
      destination === '/' || 
      destination === '/blog' || 
      destination === '/search' || 
      destination.includes(':') ||
      destination.includes('*') ||
      destination.startsWith('/app/')
    ) {
      validDestinations.push(redirect);
      return;
    }
    
    // Check if the destination exists as a directory in the app folder
    const appPath = path.join('app', destination.replace(/^\//, ''));
    
    if (fs.existsSync(appPath)) {
      validDestinations.push(redirect);
    } else {
      invalidDestinations.push(redirect);
    }
  });
  
  return { validDestinations, invalidDestinations };
}

// Main function
function testRedirects() {
  console.log('Testing 404 fixes and redirects...');
  
  // Get redirects from next.config.js
  const redirects = extractRedirects();
  console.log(`Found ${redirects.length} redirects in next.config.js`);
  
  // Validate destinations
  const { validDestinations, invalidDestinations } = validateDestinations(redirects);
  
  console.log(`\n${validDestinations.length} redirects have valid destinations`);
  
  if (invalidDestinations.length > 0) {
    console.log(`\n${invalidDestinations.length} redirects have potentially invalid destinations:`);
    invalidDestinations.forEach(redirect => {
      console.log(`- ${redirect.source} → ${redirect.destination}`);
    });
  }
  
  // Check 404 page
  if (fs.existsSync('app/not-found.tsx')) {
    console.log('\nCustom 404 page exists (app/not-found.tsx) ✓');
  } else {
    console.log('\nWarning: Custom 404 page not found!');
  }
  
  // Check search page
  if (fs.existsSync('app/search/page.tsx')) {
    console.log('Search page exists (app/search/page.tsx) ✓');
  } else {
    console.log('Warning: Search page not found!');
  }
  
  // Check workwear redirect
  if (fs.existsSync('app/blog/workwear/page.tsx')) {
    console.log('Workwear redirect page exists (app/blog/workwear/page.tsx) ✓');
  } else {
    console.log('Warning: Workwear redirect page not found!');
  }
  
  console.log('\nSummary:');
  console.log(`- Total redirects: ${redirects.length}`);
  console.log(`- Valid destinations: ${validDestinations.length}`);
  console.log(`- Potentially invalid destinations: ${invalidDestinations.length}`);
  console.log(`- 404 handling solution is ${fs.existsSync('app/not-found.tsx') ? 'complete' : 'incomplete'}`);
  
  // Final status
  if (invalidDestinations.length === 0 && fs.existsSync('app/not-found.tsx')) {
    console.log('\n✅ 404 error handling system appears to be fully functional');
  } else {
    console.log('\n⚠️ 404 error handling system needs additional attention');
  }
}

// Run the test
testRedirects(); 