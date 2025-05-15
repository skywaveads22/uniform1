const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Mapping of missing images to existing replacements
const imageReplacements = {
  // Services section replacements
  '/images/services/inventory-1.jpg': '/images/hospitality/hotel_management_uniforms.jpeg',
  '/images/services/inventory-2.jpg': '/images/hospitality/hotel_uniform_stock_management.jpeg',
  '/images/services/inventory-3.jpg': '/images/hospitality/hotel_uniform_stock_management1.jpeg',
  '/images/services/management-1.jpg': '/images/hospitality/hospitality_uniform_consulting.jpeg',
  '/images/services/management-2.jpg': '/images/healthcare/healthcare_uniform_management.jpg',
  '/images/services/management-3.jpg': '/images/industrial/industrial_uniform_fittings.jpeg',
  '/images/services/custom-1.jpg': '/images/healthcare/hospital_logo_printing_uniforms.jpg',
  '/images/services/custom-2.jpg': '/images/aviation/aviation_uniform_embroidery.jpg',
  '/images/services/custom-3.jpg': '/images/hospitality/modern_hospitality_design_uniforms.jpeg',
  
  // Security section replacements
  '/images/security/security_equipment.jpg': '/images/security/Security_uniforms.jpeg',
  '/images/security/inventory_management.jpg': '/images/security/Security_guard_uniforms.jpeg',
  '/images/security/uniform_colors.jpg': '/images/security/Security_uniforms.jpeg',
  '/images/security/professional_uniforms.jpg': '/images/security/Security_guard_uniforms.jpeg',
  '/images/security/heat_management.jpg': '/images/security/Security_uniforms.jpeg',
  '/images/security/temperature_regulation.jpg': '/images/security/Security_uniforms.jpeg',
  '/images/security/security_inventory.jpg': '/images/security/Security_guard_uniforms.jpeg',
  '/images/security/color_choices.jpg': '/images/security/Security_uniforms.jpeg',
  
  // Healthcare section replacements
  '/images/healthcare/biodigital_integration.jpg': '/images/healthcare/Healthcare_uniforms.jpg',
  '/images/healthcare/uniform_comfort.jpg': '/images/healthcare/Nurse_uniforms.jpg',
  '/images/healthcare/healthcare_uniforms.jpg': '/images/healthcare/Healthcare_uniforms.jpg',
  '/images/healthcare/healthcare_technology.jpg': '/images/healthcare/healthcare_header_new.jpg',
  
  // Hospitality section replacements
  '/images/hospitality/hospitality_uniforms.jpg': '/images/hospitality/Hospitality_uniforms.jpeg',
  '/images/hospitality/hotel_uniforms.jpg': '/images/hospitality/Hotel_uniforms.jpeg',
  '/images/hospitality/hospitality_materials.jpg': '/images/hospitality/breathable_hospitality_fabrics.jpeg',
  '/images/hospitality/maintenance_attire.jpg': '/images/hospitality/hotel_maintenance_staff_uniforms.jpeg',
  '/images/hospitality/hospitality_attire.jpg': '/images/hospitality/Hotel_staff_apparel.jpeg',
  
  // Other replacements
  '/images/aviation/Saudi_pilot_uniform_standards.jpg': '/images/aviation/Pilot_uniforms.jpg',
  '/images/aviation/aviation_uniform_maintenance.jpg': '/images/aviation/aviation_uniforms.jpg',
  '/images/education/cultural_uniforms.jpg': '/images/education/Boys_school_uniforms.jpg',
  '/images/education/Education_uniforms.jpg': '/images/education/School_uniforms.jpg',
  '/images/government/national_symbols.jpg': '/images/government/Civil_service_uniforms.jpg',
  '/images/government/procurement_process.jpg': '/images/government/Civil_service_uniforms.jpg',
  '/images/government/uniform_standards.jpg': '/images/government/Civil_service_uniforms.jpg',
  '/images/industrial/Industrial_safety_Saudi_Arabia_KSA.jpg': '/images/industrial/industrial_uniform_fittings.jpeg',
  '/images/industrial/Industrial_workwear.jpeg': '/images/industrial/industrial_uniform_fittings.jpeg',
};

// Function to walk directory recursively and process files
async function walkDir(dir) {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await stat(filePath);
      
      if (stats.isDirectory()) {
        // Skip node_modules and .next directories
        if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
          await walkDir(filePath);
        }
      } else {
        // Process only code files
        if (/\.(tsx|jsx|js|ts)$/.test(file)) {
          await processFile(filePath);
        }
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

// Function to process and fix image paths in a file
async function processFile(filePath) {
  try {
    console.log(`Processing file: ${filePath}`);
    let content = await readFile(filePath, 'utf8');
    let hasChanges = false;
    
    // Replace all missing image paths with their replacements
    for (const [missingPath, replacementPath] of Object.entries(imageReplacements)) {
      const regex = new RegExp(escapeRegExp(missingPath), 'g');
      if (content.match(regex)) {
        content = content.replace(regex, replacementPath);
        hasChanges = true;
        console.log(`  Replaced "${missingPath}" with "${replacementPath}"`);
      }
    }
    
    // Write changes to file if any replacements were made
    if (hasChanges) {
      await writeFile(filePath, content, 'utf8');
      console.log(`  Updated file: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

// Helper function to escape special characters for regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Main function
async function fixImagePaths() {
  console.log('Starting to fix missing image paths...');
  
  // Process app directory
  await walkDir('./app');
  
  // Process components directory
  await walkDir('./components');
  
  console.log('Completed image path fixing process.');
}

// Run the script
fixImagePaths().catch(err => console.error('Error:', err)); 