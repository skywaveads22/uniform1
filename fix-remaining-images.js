const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Mapping of missing images to existing replacements (second round)
const imageReplacements = {
  // Security replacements
  '/images/security/Security_guard_uniforms.jpeg': '/images/security/Security_uniforms.jpeg',

  // Ergonomics replacements
  '/images/ergonomics/ergonomic_design.jpg': '/images/hospitality/modern_hospitality_design_uniforms.jpeg',
  
  // Corporate replacements
  '/images/corporate/Office_employees_uniforms.jpeg': '/images/hospitality/Hotel_staff_apparel.jpeg',
  '/images/corporate/Major_Saudi_bank_uniform_program.jpeg': '/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg',
  '/images/corporate/Corporate_office_uniforms_Saudi_Arabia.jpeg': '/images/hospitality/front_office_attire_hotel.jpeg',
  '/images/corporate/Corporate_wear_Saudi_company.jpeg': '/images/hospitality/Hotel_staff_apparel.jpeg',
  '/images/corporate/Saudi_bank_uniforms.jpeg': '/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg',
  '/images/corporate/Executive_uniforms_Saudi_corporation.jpeg': '/images/hospitality/concierge_suits.jpeg',
  '/images/corporate/Professional_office_attire_Saudi_Arabia.jpeg': '/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg',
  '/images/corporate/Customer_service_uniforms_Saudi.jpeg': '/images/hospitality/Hotel_staff_apparel.jpeg',
  '/images/corporate/Bank_staff_uniforms_Saudi_banks.jpeg': '/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg',
  '/images/corporate/Corporate_event_uniforms_Saudi.jpeg': '/images/hospitality/Banquet_staff_uniforms_Event_staff_uniforms.jpeg',
  '/images/corporate/Support_staff_uniforms_Saudi_office.jpeg': '/images/hospitality/hotel_maintenance_staff_uniforms.jpeg',
  
  // Healthcare replacements
  '/images/healthcare/Saudi_hospital_staff_wearing_uniforms.jpeg': '/images/healthcare/Medical_staff_uniforms.jpg',
  '/images/healthcare/Medical_uniform_quality_control.jpeg': '/images/healthcare/Medical_uniform_fabrics.jpg',
  '/images/healthcare/Major_Saudi_hospital_uniform_program.jpeg': '/images/healthcare/Medical_staff_uniforms.jpg',
  '/images/healthcare/Customized_hospital_uniforms_Saudi.jpeg': '/images/healthcare/Hospital_uniforms.jpg',
  '/images/healthcare/Saudi_hospital_staff_uniforms.jpeg': '/images/healthcare/Medical_staff_uniforms.jpg',
  '/images/healthcare/Medical_uniforms_Saudi_hospitals.jpeg': '/images/healthcare/Medical_staff_uniforms.jpg',
  '/images/healthcare/Nurse_uniforms_Saudi_Arabia.jpeg': '/images/healthcare/Nurse_uniforms.jpg',
  '/images/healthcare/Doctor_uniforms_Saudi_hospitals.jpeg': '/images/healthcare/Doctor_uniforms_attire.jpg',
  '/images/healthcare/Saudi_nurse_uniforms.jpeg': '/images/healthcare/Nurse_uniforms.jpg',
  '/images/healthcare/Surgical_scrubs_Saudi_medical_centers.jpeg': '/images/healthcare/Medical_scrubs.jpg',
  '/images/healthcare/Lab_coats_Saudi_hospitals.jpeg': '/images/healthcare/Lab_coats_medical.jpg',
  '/images/healthcare/Hospital_administration_uniforms_Saudi.jpeg': '/images/healthcare/Medical_receptionist_uniforms.jpg',
  '/images/healthcare/Emergency_staff_uniforms_Saudi_hospitals.jpeg': '/images/healthcare/Medical_staff_uniforms.jpg',
  
  // Industrial replacements
  '/images/industrial/rental-service.jpg': '/images/industrial/industrial_uniform_fittings.jpeg',
  
  // Services replacements
  '/images/services/inventory-main.jpg': '/images/hospitality/hotel_uniform_stock_management.jpeg',
  '/images/services/inventory-software.jpg': '/images/hospitality/hotel_uniform_stock_management1.jpeg',
  '/images/services/inventory-physical.jpg': '/images/hospitality/hotel_management_uniforms.jpeg',
  '/images/services/inventory-case-study.jpg': '/images/hospitality/hotel_management_uniforms.jpeg',
  '/images/services/management-main.jpg': '/images/hospitality/hospitality_uniform_consulting.jpeg',
  '/images/services/management-case-study.jpg': '/images/hospitality/hospitality_uniform_consulting.jpeg',
  '/images/services/management-assessment.jpg': '/images/hospitality/hospitality_uniform_consulting.jpeg',
  '/images/services/management-development.jpg': '/images/healthcare/healthcare_uniform_management.jpg',
  '/images/services/management-implementation.jpg': '/images/healthcare/healthcare_uniform_management.jpg',
  '/images/services/management-ongoing.jpg': '/images/hospitality/hotel_uniform_stock_management.jpeg',
  '/images/services/customization-detail.jpg': '/images/hospitality/hotel_uniform_accessories.jpeg',
  '/images/services/custom-case-study.jpg': '/images/hospitality/modern_hospitality_design_uniforms.jpeg',
  '/images/services/custom-sample-1.jpg': '/images/hospitality/boutique_hotel_staff_uniforms.jpeg',
  '/images/services/custom-sample-2.jpg': '/images/hospitality/modern_hospitality_design_uniforms.jpeg',
  '/images/services/custom-sample-3.jpg': '/images/healthcare/hospital_logo_printing_uniforms.jpg',
  '/images/services/custom-sample-4.jpg': '/images/aviation/aviation_uniform_embroidery.jpg',
  '/images/services/custom-sample-5.jpg': '/images/hospitality/hotel_uniform_accessories.jpeg',
  '/images/services/custom-sample-6.jpg': '/images/hospitality/custom_hospitality_vests.jpeg',
  '/images/services/custom-sample-7.jpg': '/images/healthcare/Embroidery_on_medical_uniforms.jpg',
  '/images/services/custom-sample-8.jpg': '/images/hospitality/hotel_uniform_accessories_(ties_bowties_pins).jpeg',
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
async function fixRemainingImagePaths() {
  console.log('Starting to fix remaining missing image paths...');
  
  // Process app directory
  await walkDir('./app');
  
  // Process components directory
  await walkDir('./components');
  
  console.log('Completed image path fixing process.');
}

// Run the script
fixRemainingImagePaths().catch(err => console.error('Error:', err)); 