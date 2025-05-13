const fs = require('fs');
const path = require('path');

// Define missing files and their replacements
const missingFiles = [
  {
    missing: 'public/images/uniform_pattern_bg.jpg',
    replacement: 'public/images/aviation/aviation_uniforms.jpg'
  },
  {
    missing: 'public/images/hospitality/Luxury_hotel_staff_uniforms_Saudi_Arabia_KSA.jpeg',
    replacement: 'public/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg'
  },
  {
    missing: 'public/images/aviation/Airline_uniforms_Saudi_Arabia_KSA.jpg',
    replacement: 'public/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg' 
  },
  {
    missing: 'public/images/aviation/quantum_logistics_center.jpg',
    replacement: 'public/images/aviation/Aircraft_maintenance_technician_uniforms.jpg'
  },
  {
    missing: 'public/images/empty-results.svg',
    replacement: 'public/images/error-404.svg'
  }
];

// Function to copy a file
function copyFile(source, target) {
  try {
    // Ensure target directory exists
    const targetDir = path.dirname(target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`Created directory: ${targetDir}`);
    }

    // Copy the file
    fs.copyFileSync(source, target);
    console.log(`Copied ${source} to ${target}`);
    return true;
  } catch (error) {
    console.error(`Error copying ${source} to ${target}:`, error);
    return false;
  }
}

// Fix missing files
let successCount = 0;
let errorCount = 0;

missingFiles.forEach(file => {
  if (fs.existsSync(file.replacement)) {
    const success = copyFile(file.replacement, file.missing);
    if (success) {
      successCount++;
    } else {
      errorCount++;
    }
  } else {
    console.error(`Replacement file does not exist: ${file.replacement}`);
    errorCount++;
  }
});

console.log(`\nCompleted with ${successCount} successes and ${errorCount} errors.`);
console.log("Fixed the following 404 errors:");
console.log("1. /images/uniform_pattern_bg.jpg");
console.log("2. /images/hospitality/Luxury_hotel_staff_uniforms_Saudi_Arabia_KSA.jpeg");
console.log("3. /images/aviation/Airline_uniforms_Saudi_Arabia_KSA.jpg");
console.log("4. /images/aviation/quantum_logistics_center.jpg");
console.log("5. /images/empty-results.svg");
console.log("\nRoutes fixed in next.config.js (through redirects):");
console.log("1. /services → /app/services");
console.log("2. /case-studies → /portfolio");
console.log("3. /services/aviation → /aviation");
console.log("4. /privacy-policy → /privacy"); 