// Article image fix script
const fs = require('fs');
const path = require('path');

const fixResults = [];

// Fix accessories-for-security-uniforms-belts-pouches-communication-device-holders
(function() {
  const filePath = path.join('app', 'blog', 'accessories-for-security-uniforms-belts-pouches-communication-device-holders', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/duty_belt_keepers.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_accessories_overview.jpg";
  content = content.replace(/(src=["'])/images/security/security_accessories_overview\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_accessories_overview.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_accessories_overview\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'accessories-for-security-uniforms-belts-pouches-communication-device-holders', status: 'FIXED', image: correctImage });
    console.log('Fixed: accessories-for-security-uniforms-belts-pouches-communication-device-holders');
  } else {
    fixResults.push({ slug: 'accessories-for-security-uniforms-belts-pouches-communication-device-holders', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: accessories-for-security-uniforms-belts-pouches-communication-device-holders');
  }
})();

// Fix accessorizing-aviation-uniforms-ties-scarves-and-pins
(function() {
  const filePath = path.join('app', 'blog', 'accessorizing-aviation-uniforms-ties-scarves-and-pins', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/Aviation_uniform_accessories.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/aviation_uniform_accessories.jpg";
  content = content.replace(/(src=["'])/images/aviation/aviation_uniform_accessories\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/aviation_uniform_accessories.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/aviation_uniform_accessories\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'accessorizing-aviation-uniforms-ties-scarves-and-pins', status: 'FIXED', image: correctImage });
    console.log('Fixed: accessorizing-aviation-uniforms-ties-scarves-and-pins');
  } else {
    fixResults.push({ slug: 'accessorizing-aviation-uniforms-ties-scarves-and-pins', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: accessorizing-aviation-uniforms-ties-scarves-and-pins');
  }
})();

// Fix airport-security-uniforms-balancing-authority-functionality-and-passenger-assurance
(function() {
  const filePath = path.join('app', 'blog', 'airport-security-uniforms-balancing-authority-functionality-and-passenger-assurance', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/airport_security_uniforms.jpg";
  content = content.replace(/(src=["'])/images/security/airport_security_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/airport_security_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/airport_security_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'airport-security-uniforms-balancing-authority-functionality-and-passenger-assurance', status: 'FIXED', image: correctImage });
    console.log('Fixed: airport-security-uniforms-balancing-authority-functionality-and-passenger-assurance');
  } else {
    fixResults.push({ slug: 'airport-security-uniforms-balancing-authority-functionality-and-passenger-assurance', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: airport-security-uniforms-balancing-authority-functionality-and-passenger-assurance');
  }
})();

// Fix anti-static-workwear-essential-for-specific-saudi-industries
(function() {
  const filePath = path.join('app', 'blog', 'anti-static-workwear-essential-for-specific-saudi-industries', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/anti_static_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/anti_static_workwear.jpg";
  content = content.replace(/(src=["'])/images/industrial/anti_static_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/anti_static_workwear.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/anti_static_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'anti-static-workwear-essential-for-specific-saudi-industries', status: 'FIXED', image: correctImage });
    console.log('Fixed: anti-static-workwear-essential-for-specific-saudi-industries');
  } else {
    fixResults.push({ slug: 'anti-static-workwear-essential-for-specific-saudi-industries', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: anti-static-workwear-essential-for-specific-saudi-industries');
  }
})();

// Fix aprons-styles-and-functional-choices-for-different-hospitality-roles
(function() {
  const filePath = path.join('app', 'blog', 'aprons-styles-and-functional-choices-for-different-hospitality-roles', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Waiter_aprons_Server_aprons.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/hospitality-aprons-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/hospitality-aprons-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/hospitality-aprons-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/hospitality-aprons-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'aprons-styles-and-functional-choices-for-different-hospitality-roles', status: 'FIXED', image: correctImage });
    console.log('Fixed: aprons-styles-and-functional-choices-for-different-hospitality-roles');
  } else {
    fixResults.push({ slug: 'aprons-styles-and-functional-choices-for-different-hospitality-roles', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: aprons-styles-and-functional-choices-for-different-hospitality-roles');
  }
})();

// Fix arc-flash-protective-clothing-standards-relevant-to-ksa
(function() {
  const filePath = path.join('app', 'blog', 'arc-flash-protective-clothing-standards-relevant-to-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/arc_flash_rated_clothing.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/arc_flash_protection.jpg";
  content = content.replace(/(src=["'])/images/industrial/arc_flash_protection\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/arc_flash_protection.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/arc_flash_protection\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'arc-flash-protective-clothing-standards-relevant-to-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: arc-flash-protective-clothing-standards-relevant-to-ksa');
  } else {
    fixResults.push({ slug: 'arc-flash-protective-clothing-standards-relevant-to-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: arc-flash-protective-clothing-standards-relevant-to-ksa');
  }
})();

// Fix ballistic-vest-carriers-and-body-armor-integration
(function() {
  const filePath = path.join('app', 'blog', 'ballistic-vest-carriers-and-body-armor-integration', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/security_outer_vest_carriers.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/ballistic_vest_systems.jpg";
  content = content.replace(/(src=["'])/images/security/ballistic_vest_systems\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/ballistic_vest_systems.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/ballistic_vest_systems\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'ballistic-vest-carriers-and-body-armor-integration', status: 'FIXED', image: correctImage });
    console.log('Fixed: ballistic-vest-carriers-and-body-armor-integration');
  } else {
    fixResults.push({ slug: 'ballistic-vest-carriers-and-body-armor-integration', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: ballistic-vest-carriers-and-body-armor-integration');
  }
})();

// Fix breathable-armor-carriers-and-base-layers-for-comfort-under-vests
(function() {
  const filePath = path.join('app', 'blog', 'breathable-armor-carriers-and-base-layers-for-comfort-under-vests', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_vest.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/breathable_armor_carriers.jpg";
  content = content.replace(/(src=["'])/images/security/breathable_armor_carriers\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/breathable_armor_carriers.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/breathable_armor_carriers\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'breathable-armor-carriers-and-base-layers-for-comfort-under-vests', status: 'FIXED', image: correctImage });
    console.log('Fixed: breathable-armor-carriers-and-base-layers-for-comfort-under-vests');
  } else {
    fixResults.push({ slug: 'breathable-armor-carriers-and-base-layers-for-comfort-under-vests', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: breathable-armor-carriers-and-base-layers-for-comfort-under-vests');
  }
})();

// Fix bulk-ordering-aviation-uniforms-in-saudi-arabia-a-checklist
(function() {
  const filePath = path.join('app', 'blog', 'bulk-ordering-aviation-uniforms-in-saudi-arabia-a-checklist', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/Buy_aviation_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/bulk_uniform_ordering.jpg";
  content = content.replace(/(src=["'])/images/aviation/bulk_uniform_ordering\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/bulk_uniform_ordering.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/bulk_uniform_ordering\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'bulk-ordering-aviation-uniforms-in-saudi-arabia-a-checklist', status: 'FIXED', image: correctImage });
    console.log('Fixed: bulk-ordering-aviation-uniforms-in-saudi-arabia-a-checklist');
  } else {
    fixResults.push({ slug: 'bulk-ordering-aviation-uniforms-in-saudi-arabia-a-checklist', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: bulk-ordering-aviation-uniforms-in-saudi-arabia-a-checklist');
  }
})();

// Fix cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective
(function() {
  const filePath = path.join('app', 'blog', 'cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/Cabin_crew_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/saudi_cabin_crew_uniforms.jpg";
  content = content.replace(/(src=["'])/images/aviation/saudi_cabin_crew_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/saudi_cabin_crew_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/saudi_cabin_crew_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective', status: 'FIXED', image: correctImage });
    console.log('Fixed: cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective');
  } else {
    fixResults.push({ slug: 'cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: cabin-crew-attire-professionalism-and-functionality-at-30000-feet-saudi-perspective');
  }
})();

// Fix case-study-improving-staff-morale-with-new-uniforms-in-a-saudi-clinic
(function() {
  const filePath = path.join('app', 'blog', 'case-study-improving-staff-morale-with-new-uniforms-in-a-saudi-clinic', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Clinic_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/healthcare/staff_morale_uniforms.jpg";
  content = content.replace(/(src=["'])/images/healthcare/staff_morale_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/healthcare/staff_morale_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/healthcare/staff_morale_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'case-study-improving-staff-morale-with-new-uniforms-in-a-saudi-clinic', status: 'FIXED', image: correctImage });
    console.log('Fixed: case-study-improving-staff-morale-with-new-uniforms-in-a-saudi-clinic');
  } else {
    fixResults.push({ slug: 'case-study-improving-staff-morale-with-new-uniforms-in-a-saudi-clinic', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: case-study-improving-staff-morale-with-new-uniforms-in-a-saudi-clinic');
  }
})();

// Fix case-study-successful-uniform-rollout-for-a-saudi-regional-airline
(function() {
  const filePath = path.join('app', 'blog', 'case-study-successful-uniform-rollout-for-a-saudi-regional-airline', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/aviation_uniforms_riyadh.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/Aviation_uniform_rollout.jpg";
  content = content.replace(/(src=["'])/images/aviation/Aviation_uniform_rollout\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/Aviation_uniform_rollout.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/Aviation_uniform_rollout\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'case-study-successful-uniform-rollout-for-a-saudi-regional-airline', status: 'FIXED', image: correctImage });
    console.log('Fixed: case-study-successful-uniform-rollout-for-a-saudi-regional-airline');
  } else {
    fixResults.push({ slug: 'case-study-successful-uniform-rollout-for-a-saudi-regional-airline', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: case-study-successful-uniform-rollout-for-a-saudi-regional-airline');
  }
})();

// Fix case-study-upgrading-security-uniforms-for-a-large-saudi-facility
(function() {
  const filePath = path.join('app', 'blog', 'case-study-upgrading-security-uniforms-for-a-large-saudi-facility', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Facility_security_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_uniform_upgrade_case_study.jpg";
  content = content.replace(/(src=["'])/images/security/security_uniform_upgrade_case_study\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_uniform_upgrade_case_study.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_uniform_upgrade_case_study\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'case-study-upgrading-security-uniforms-for-a-large-saudi-facility', status: 'FIXED', image: correctImage });
    console.log('Fixed: case-study-upgrading-security-uniforms-for-a-large-saudi-facility');
  } else {
    fixResults.push({ slug: 'case-study-upgrading-security-uniforms-for-a-large-saudi-facility', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: case-study-upgrading-security-uniforms-for-a-large-saudi-facility');
  }
})();

// Fix chef-whites-and-kitchen-staff-uniforms-hygiene-and-safety-standards-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'chef-whites-and-kitchen-staff-uniforms-hygiene-and-safety-standards-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Chef_uniforms_Chef_wear.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/chef-kitchen-uniforms-ksa.jpg";
  content = content.replace(/(src=["'])/images/blog/chef-kitchen-uniforms-ksa\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/chef-kitchen-uniforms-ksa.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/chef-kitchen-uniforms-ksa\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'chef-whites-and-kitchen-staff-uniforms-hygiene-and-safety-standards-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: chef-whites-and-kitchen-staff-uniforms-hygiene-and-safety-standards-in-ksa');
  } else {
    fixResults.push({ slug: 'chef-whites-and-kitchen-staff-uniforms-hygiene-and-safety-standards-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: chef-whites-and-kitchen-staff-uniforms-hygiene-and-safety-standards-in-ksa');
  }
})();

// Fix chemical-resistant-clothing-for-hazardous-environments
(function() {
  const filePath = path.join('app', 'blog', 'chemical-resistant-clothing-for-hazardous-environments', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/chemical_resistant_clothing.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/chemical_resistant_clothing.jpg";
  content = content.replace(/(src=["'])/images/industrial/chemical_resistant_clothing\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/chemical_resistant_clothing.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/chemical_resistant_clothing\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'chemical-resistant-clothing-for-hazardous-environments', status: 'FIXED', image: correctImage });
    console.log('Fixed: chemical-resistant-clothing-for-hazardous-environments');
  } else {
    fixResults.push({ slug: 'chemical-resistant-clothing-for-hazardous-environments', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: chemical-resistant-clothing-for-hazardous-environments');
  }
})();

// Fix choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate
(function() {
  const filePath = path.join('app', 'blog', 'choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/breathable_security_shirts.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_uniform_materials.jpg";
  content = content.replace(/(src=["'])/images/security/security_uniform_materials\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_uniform_materials.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_uniform_materials\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate', status: 'FIXED', image: correctImage });
    console.log('Fixed: choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate');
  } else {
    fixResults.push({ slug: 'choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate');
  }
})();

// Fix choosing-the-right-workwear-for-saudi-arabia-s-industrial-sector-safety-first
(function() {
  const filePath = path.join('app', 'blog', 'choosing-the-right-workwear-for-saudi-arabia-s-industrial-sector-safety-first', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Safety_workwear_PPE_apparel.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/industrial-safety-workwear-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/industrial-safety-workwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/industrial-safety-workwear-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/industrial-safety-workwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'choosing-the-right-workwear-for-saudi-arabia-s-industrial-sector-safety-first', status: 'FIXED', image: correctImage });
    console.log('Fixed: choosing-the-right-workwear-for-saudi-arabia-s-industrial-sector-safety-first');
  } else {
    fixResults.push({ slug: 'choosing-the-right-workwear-for-saudi-arabia-s-industrial-sector-safety-first', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: choosing-the-right-workwear-for-saudi-arabia-s-industrial-sector-safety-first');
  }
})();

// Fix cleaning-and-maintenance-tips-for-aviation-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'cleaning-and-maintenance-tips-for-aviation-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/aviation_winter_wear.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/Aviation_uniform_care.jpg";
  content = content.replace(/(src=["'])/images/aviation/Aviation_uniform_care\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/Aviation_uniform_care.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/Aviation_uniform_care\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'cleaning-and-maintenance-tips-for-aviation-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: cleaning-and-maintenance-tips-for-aviation-uniforms');
  } else {
    fixResults.push({ slug: 'cleaning-and-maintenance-tips-for-aviation-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: cleaning-and-maintenance-tips-for-aviation-uniforms');
  }
})();

// Fix climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces
(function() {
  const filePath = path.join('app', 'blog', 'climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/breathable_industrial_fabrics.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/cooling-fabrics-saudi-workplace.jpg";
  content = content.replace(/(src=["'])/images/blog/cooling-fabrics-saudi-workplace\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/cooling-fabrics-saudi-workplace.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/cooling-fabrics-saudi-workplace\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces', status: 'FIXED', image: correctImage });
    console.log('Fixed: climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces');
  } else {
    fixResults.push({ slug: 'climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces');
  }
})();

// Fix color-trends-in-modern-hospitality-uniform-design-in-the-middle-east
(function() {
  const filePath = path.join('app', 'blog', 'color-trends-in-modern-hospitality-uniform-design-in-the-middle-east', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/modern_hospitality_design_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/middle-east-uniform-colors.jpg";
  content = content.replace(/(src=["'])/images/blog/middle-east-uniform-colors\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/middle-east-uniform-colors.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/middle-east-uniform-colors\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'color-trends-in-modern-hospitality-uniform-design-in-the-middle-east', status: 'FIXED', image: correctImage });
    console.log('Fixed: color-trends-in-modern-hospitality-uniform-design-in-the-middle-east');
  } else {
    fixResults.push({ slug: 'color-trends-in-modern-hospitality-uniform-design-in-the-middle-east', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: color-trends-in-modern-hospitality-uniform-design-in-the-middle-east');
  }
})();

// Fix comfort-considerations-for-long-security-shifts
(function() {
  const filePath = path.join('app', 'blog', 'comfort-considerations-for-long-security-shifts', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/all_weather_security_gear.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/long_shifts_comfort_security.jpg";
  content = content.replace(/(src=["'])/images/security/long_shifts_comfort_security\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/long_shifts_comfort_security.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/long_shifts_comfort_security\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'comfort-considerations-for-long-security-shifts', status: 'FIXED', image: correctImage });
    console.log('Fixed: comfort-considerations-for-long-security-shifts');
  } else {
    fixResults.push({ slug: 'comfort-considerations-for-long-security-shifts', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: comfort-considerations-for-long-security-shifts');
  }
})();

// Fix communication-equipment-integration-features-for-security-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'communication-equipment-integration-features-for-security-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/radio_holder_uniforms.jpeg';
  let updated = false;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'communication-equipment-integration-features-for-security-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: communication-equipment-integration-features-for-security-uniforms');
  } else {
    fixResults.push({ slug: 'communication-equipment-integration-features-for-security-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: communication-equipment-integration-features-for-security-uniforms');
  }
})();

// Fix concierge-and-bell-staff-uniforms-reflecting-service-excellence
(function() {
  const filePath = path.join('app', 'blog', 'concierge-and-bell-staff-uniforms-reflecting-service-excellence', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/concierge_suits.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/concierge-bell-staff-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/concierge-bell-staff-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/concierge-bell-staff-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/concierge-bell-staff-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'concierge-and-bell-staff-uniforms-reflecting-service-excellence', status: 'FIXED', image: correctImage });
    console.log('Fixed: concierge-and-bell-staff-uniforms-reflecting-service-excellence');
  } else {
    fixResults.push({ slug: 'concierge-and-bell-staff-uniforms-reflecting-service-excellence', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: concierge-and-bell-staff-uniforms-reflecting-service-excellence');
  }
})();

// Fix custom-patches-and-embroidery-for-security-company-branding
(function() {
  const filePath = path.join('app', 'blog', 'custom-patches-and-embroidery-for-security-company-branding', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Custom_security_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_patches_embroidery.jpg";
  content = content.replace(/(src=["'])/images/security/security_patches_embroidery\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_patches_embroidery.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_patches_embroidery\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'custom-patches-and-embroidery-for-security-company-branding', status: 'FIXED', image: correctImage });
    console.log('Fixed: custom-patches-and-embroidery-for-security-company-branding');
  } else {
    fixResults.push({ slug: 'custom-patches-and-embroidery-for-security-company-branding', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: custom-patches-and-embroidery-for-security-company-branding');
  }
})();

// Fix custom-security-name-tags-professional-identification-solutions
(function() {
  const filePath = path.join('app', 'blog', 'custom-security-name-tags-professional-identification-solutions', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/security_identification_patches.jpeg';
  let updated = false;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'custom-security-name-tags-professional-identification-solutions', status: 'FIXED', image: correctImage });
    console.log('Fixed: custom-security-name-tags-professional-identification-solutions');
  } else {
    fixResults.push({ slug: 'custom-security-name-tags-professional-identification-solutions', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: custom-security-name-tags-professional-identification-solutions');
  }
})();

// Fix customization-options-embroidery-name-tags-and-accessories
(function() {
  const filePath = path.join('app', 'blog', 'customization-options-embroidery-name-tags-and-accessories', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/School_logo_embroidery.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/uniform-customization-options.jpg";
  content = content.replace(/(src=["'])/images/blog/uniform-customization-options\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/uniform-customization-options.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/uniform-customization-options\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'customization-options-embroidery-name-tags-and-accessories', status: 'FIXED', image: correctImage });
    console.log('Fixed: customization-options-embroidery-name-tags-and-accessories');
  } else {
    fixResults.push({ slug: 'customization-options-embroidery-name-tags-and-accessories', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: customization-options-embroidery-name-tags-and-accessories');
  }
})();

// Fix designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market
(function() {
  const filePath = path.join('app', 'blog', 'designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/boutique_hotel_staff_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/hospitality/luxury_hotel_uniforms.jpg";
  content = content.replace(/(src=["'])/images/hospitality/luxury_hotel_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/hospitality/luxury_hotel_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/hospitality/luxury_hotel_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market', status: 'FIXED', image: correctImage });
    console.log('Fixed: designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market');
  } else {
    fixResults.push({ slug: 'designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market');
  }
})();

// Fix distinguishing-ranks-and-roles-through-security-uniform-insignia-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'distinguishing-ranks-and-roles-through-security-uniform-insignia-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/security_patches_and_badges.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/rank_insignia_systems.jpg";
  content = content.replace(/(src=["'])/images/security/rank_insignia_systems\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/rank_insignia_systems.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/rank_insignia_systems\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'distinguishing-ranks-and-roles-through-security-uniform-insignia-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: distinguishing-ranks-and-roles-through-security-uniform-insignia-in-ksa');
  } else {
    fixResults.push({ slug: 'distinguishing-ranks-and-roles-through-security-uniform-insignia-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: distinguishing-ranks-and-roles-through-security-uniform-insignia-in-ksa');
  }
})();

// Fix durable-fabrics-for-heavy-duty-industrial-environments-in-saudi-arabia
(function() {
  const filePath = path.join('app', 'blog', 'durable-fabrics-for-heavy-duty-industrial-environments-in-saudi-arabia', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Heavy_duty_workwear_Durable_workwear.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/industrial-worker-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/industrial-worker-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/industrial-worker-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/industrial-worker-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'durable-fabrics-for-heavy-duty-industrial-environments-in-saudi-arabia', status: 'FIXED', image: correctImage });
    console.log('Fixed: durable-fabrics-for-heavy-duty-industrial-environments-in-saudi-arabia');
  } else {
    fixResults.push({ slug: 'durable-fabrics-for-heavy-duty-industrial-environments-in-saudi-arabia', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: durable-fabrics-for-heavy-duty-industrial-environments-in-saudi-arabia');
  }
})();

// Fix ensuring-comfort-during-long-haul-flights-fabric-choices-matter
(function() {
  const filePath = path.join('app', 'blog', 'ensuring-comfort-during-long-haul-flights-fabric-choices-matter', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/aviation_winter_wear.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/long_haul_uniform_comfort.jpg";
  content = content.replace(/(src=["'])/images/aviation/long_haul_uniform_comfort\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/long_haul_uniform_comfort.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/long_haul_uniform_comfort\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'ensuring-comfort-during-long-haul-flights-fabric-choices-matter', status: 'FIXED', image: correctImage });
    console.log('Fixed: ensuring-comfort-during-long-haul-flights-fabric-choices-matter');
  } else {
    fixResults.push({ slug: 'ensuring-comfort-during-long-haul-flights-fabric-choices-matter', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: ensuring-comfort-during-long-haul-flights-fabric-choices-matter');
  }
})();

// Fix epaulettes-and-insignia-understanding-ranks-in-saudi-aviation-attire
(function() {
  const filePath = path.join('app', 'blog', 'epaulettes-and-insignia-understanding-ranks-in-saudi-aviation-attire', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/pilot_epaulettes.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/pilot_epaulettes_saudi.jpg";
  content = content.replace(/(src=["'])/images/aviation/pilot_epaulettes_saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/pilot_epaulettes_saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/pilot_epaulettes_saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'epaulettes-and-insignia-understanding-ranks-in-saudi-aviation-attire', status: 'FIXED', image: correctImage });
    console.log('Fixed: epaulettes-and-insignia-understanding-ranks-in-saudi-aviation-attire');
  } else {
    fixResults.push({ slug: 'epaulettes-and-insignia-understanding-ranks-in-saudi-aviation-attire', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: epaulettes-and-insignia-understanding-ranks-in-saudi-aviation-attire');
  }
})();

// Fix fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance
(function() {
  const filePath = path.join('app', 'blog', 'fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/breathable_hospitality_fabrics.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/hospitality-fabric-performance.jpg";
  content = content.replace(/(src=["'])/images/blog/hospitality-fabric-performance\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/hospitality-fabric-performance.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/hospitality-fabric-performance\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance', status: 'FIXED', image: correctImage });
    console.log('Fixed: fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance');
  } else {
    fixResults.push({ slug: 'fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance');
  }
})();

// Fix fire-resistant-materials-in-aviation-workwear-safety-first
(function() {
  const filePath = path.join('app', 'blog', 'fire-resistant-materials-in-aviation-workwear-safety-first', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/durable_aviation_fabrics.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/fire_resistant_aviation_workwear.jpg";
  content = content.replace(/(src=["'])/images/aviation/fire_resistant_aviation_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/fire_resistant_aviation_workwear.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/fire_resistant_aviation_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'fire-resistant-materials-in-aviation-workwear-safety-first', status: 'FIXED', image: correctImage });
    console.log('Fixed: fire-resistant-materials-in-aviation-workwear-safety-first');
  } else {
    fixResults.push({ slug: 'fire-resistant-materials-in-aviation-workwear-safety-first', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: fire-resistant-materials-in-aviation-workwear-safety-first');
  }
})();

// Fix flame-resistant-fr-workwear-protecting-workers-in-oil-gas-and-manufacturing
(function() {
  const filePath = path.join('app', 'blog', 'flame-resistant-fr-workwear-protecting-workers-in-oil-gas-and-manufacturing', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Fire_resistant_uniforms_FR_clothing.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/flame-resistant-workwear-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/flame-resistant-workwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/flame-resistant-workwear-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/flame-resistant-workwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'flame-resistant-fr-workwear-protecting-workers-in-oil-gas-and-manufacturing', status: 'FIXED', image: correctImage });
    console.log('Fixed: flame-resistant-fr-workwear-protecting-workers-in-oil-gas-and-manufacturing');
  } else {
    fixResults.push({ slug: 'flame-resistant-fr-workwear-protecting-workers-in-oil-gas-and-manufacturing', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: flame-resistant-fr-workwear-protecting-workers-in-oil-gas-and-manufacturing');
  }
})();

// Fix footwear-for-security-personnel-comfort-support-and-durability
(function() {
  const filePath = path.join('app', 'blog', 'footwear-for-security-personnel-comfort-support-and-durability', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_uniform_accessories_(belts_epaulettes).jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_footwear_comfort.jpg";
  content = content.replace(/(src=["'])/images/security/security_footwear_comfort\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_footwear_comfort.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_footwear_comfort\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'footwear-for-security-personnel-comfort-support-and-durability', status: 'FIXED', image: correctImage });
    console.log('Fixed: footwear-for-security-personnel-comfort-support-and-durability');
  } else {
    fixResults.push({ slug: 'footwear-for-security-personnel-comfort-support-and-durability', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: footwear-for-security-personnel-comfort-support-and-durability');
  }
})();

// Fix footwear-options-for-security-guards-in-saudi-arabia
(function() {
  const filePath = path.join('app', 'blog', 'footwear-options-for-security-guards-in-saudi-arabia', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_guard_attire.jpeg';
  let updated = false;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'footwear-options-for-security-guards-in-saudi-arabia', status: 'FIXED', image: correctImage });
    console.log('Fixed: footwear-options-for-security-guards-in-saudi-arabia');
  } else {
    fixResults.push({ slug: 'footwear-options-for-security-guards-in-saudi-arabia', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: footwear-options-for-security-guards-in-saudi-arabia');
  }
})();

// Fix footwear-recommendations-for-staff-standing-long-hours
(function() {
  const filePath = path.join('app', 'blog', 'footwear-recommendations-for-staff-standing-long-hours', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Hotel_staff_apparel.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/hospitality-footwear-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/hospitality-footwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/hospitality-footwear-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/hospitality-footwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'footwear-recommendations-for-staff-standing-long-hours', status: 'FIXED', image: correctImage });
    console.log('Fixed: footwear-recommendations-for-staff-standing-long-hours');
  } else {
    fixResults.push({ slug: 'footwear-recommendations-for-staff-standing-long-hours', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: footwear-recommendations-for-staff-standing-long-hours');
  }
})();

// Fix formal-vs-patrol-duty-uniforms-for-security-staff
(function() {
  const filePath = path.join('app', 'blog', 'formal-vs-patrol-duty-uniforms-for-security-staff', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/class_a_security_dress_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_uniform_comparison.jpg";
  content = content.replace(/(src=["'])/images/security/security_uniform_comparison\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_uniform_comparison.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_uniform_comparison\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'formal-vs-patrol-duty-uniforms-for-security-staff', status: 'FIXED', image: correctImage });
    console.log('Fixed: formal-vs-patrol-duty-uniforms-for-security-staff');
  } else {
    fixResults.push({ slug: 'formal-vs-patrol-duty-uniforms-for-security-staff', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: formal-vs-patrol-duty-uniforms-for-security-staff');
  }
})();

// Fix front-desk-attire-making-a-great-first-impression-in-ksa-hotels
(function() {
  const filePath = path.join('app', 'blog', 'front-desk-attire-making-a-great-first-impression-in-ksa-hotels', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/hospitality/front_desk_attire.jpg";
  content = content.replace(/(src=["'])/images/hospitality/front_desk_attire\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/hospitality/front_desk_attire.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/hospitality/front_desk_attire\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'front-desk-attire-making-a-great-first-impression-in-ksa-hotels', status: 'FIXED', image: correctImage });
    console.log('Fixed: front-desk-attire-making-a-great-first-impression-in-ksa-hotels');
  } else {
    fixResults.push({ slug: 'front-desk-attire-making-a-great-first-impression-in-ksa-hotels', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: front-desk-attire-making-a-great-first-impression-in-ksa-hotels');
  }
})();

// Fix future-trends-smart-uniforms-in-healthcare
(function() {
  const filePath = path.join('app', 'blog', 'future-trends-smart-uniforms-in-healthcare', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/medical/smart_healthcare_uniforms.jpg";
  content = content.replace(/(src=["'])/images/medical/smart_healthcare_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/medical/smart_healthcare_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/medical/smart_healthcare_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'future-trends-smart-uniforms-in-healthcare', status: 'FIXED', image: correctImage });
    console.log('Fixed: future-trends-smart-uniforms-in-healthcare');
  } else {
    fixResults.push({ slug: 'future-trends-smart-uniforms-in-healthcare', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: future-trends-smart-uniforms-in-healthcare');
  }
})();

// Fix head-protection-and-other-ppe-integration-with-industrial-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'head-protection-and-other-ppe-integration-with-industrial-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/industrial_site_ppe_management.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/head-protection-ppe-integration.jpg";
  content = content.replace(/(src=["'])/images/blog/head-protection-ppe-integration\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/head-protection-ppe-integration.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/head-protection-ppe-integration\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'head-protection-and-other-ppe-integration-with-industrial-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: head-protection-and-other-ppe-integration-with-industrial-uniforms');
  } else {
    fixResults.push({ slug: 'head-protection-and-other-ppe-integration-with-industrial-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: head-protection-and-other-ppe-integration-with-industrial-uniforms');
  }
})();

// Fix headwear-options-caps-berets-and-climate-considerations
(function() {
  const filePath = path.join('app', 'blog', 'headwear-options-caps-berets-and-climate-considerations', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_cap_hat.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_headwear_options.jpg";
  content = content.replace(/(src=["'])/images/security/security_headwear_options\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_headwear_options.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_headwear_options\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'headwear-options-caps-berets-and-climate-considerations', status: 'FIXED', image: correctImage });
    console.log('Fixed: headwear-options-caps-berets-and-climate-considerations');
  } else {
    fixResults.push({ slug: 'headwear-options-caps-berets-and-climate-considerations', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: headwear-options-caps-berets-and-climate-considerations');
  }
})();

// Fix high-visibility-clothing-standards-and-their-importance-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'high-visibility-clothing-standards-and-their-importance-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/High_visibility_clothing_Hi_vis_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/high-visibility-workwear-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/high-visibility-workwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/high-visibility-workwear-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/high-visibility-workwear-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'high-visibility-clothing-standards-and-their-importance-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: high-visibility-clothing-standards-and-their-importance-in-ksa');
  } else {
    fixResults.push({ slug: 'high-visibility-clothing-standards-and-their-importance-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: high-visibility-clothing-standards-and-their-importance-in-ksa');
  }
})();

// Fix housekeeping-uniforms-ensuring-comfort-durability-and-professionalism
(function() {
  const filePath = path.join('app', 'blog', 'housekeeping-uniforms-ensuring-comfort-durability-and-professionalism', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Housekeeping_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/hospitality/housekeeping_uniforms.jpg";
  content = content.replace(/(src=["'])/images/hospitality/housekeeping_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/hospitality/housekeeping_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/hospitality/housekeeping_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'housekeeping-uniforms-ensuring-comfort-durability-and-professionalism', status: 'FIXED', image: correctImage });
    console.log('Fixed: housekeeping-uniforms-ensuring-comfort-durability-and-professionalism');
  } else {
    fixResults.push({ slug: 'housekeeping-uniforms-ensuring-comfort-durability-and-professionalism', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: housekeeping-uniforms-ensuring-comfort-durability-and-professionalism');
  }
})();

// Fix how-uniform-fit-impacts-performance-and-morale-in-aviation-staff
(function() {
  const filePath = path.join('app', 'blog', 'how-uniform-fit-impacts-performance-and-morale-in-aviation-staff', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/Aviation_uniform_manufacturer.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/aviation_uniform_fitting.jpg";
  content = content.replace(/(src=["'])/images/aviation/aviation_uniform_fitting\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/aviation_uniform_fitting.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/aviation_uniform_fitting\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'how-uniform-fit-impacts-performance-and-morale-in-aviation-staff', status: 'FIXED', image: correctImage });
    console.log('Fixed: how-uniform-fit-impacts-performance-and-morale-in-aviation-staff');
  } else {
    fixResults.push({ slug: 'how-uniform-fit-impacts-performance-and-morale-in-aviation-staff', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: how-uniform-fit-impacts-performance-and-morale-in-aviation-staff');
  }
})();

// Fix how-uniforms-impact-staff-morale-and-guest-satisfaction-scores
(function() {
  const filePath = path.join('app', 'blog', 'how-uniforms-impact-staff-morale-and-guest-satisfaction-scores', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Hotel_staff_apparel.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/uniform-psychology-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/uniform-psychology-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/uniform-psychology-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/uniform-psychology-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'how-uniforms-impact-staff-morale-and-guest-satisfaction-scores', status: 'FIXED', image: correctImage });
    console.log('Fixed: how-uniforms-impact-staff-morale-and-guest-satisfaction-scores');
  } else {
    fixResults.push({ slug: 'how-uniforms-impact-staff-morale-and-guest-satisfaction-scores', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: how-uniforms-impact-staff-morale-and-guest-satisfaction-scores');
  }
})();

// Fix how-uniforms-support-branding-for-private-healthcare-providers-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'how-uniforms-support-branding-for-private-healthcare-providers-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Medical_uniform_fabrics.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/healthcare/healthcare_branding_uniforms.jpg";
  content = content.replace(/(src=["'])/images/healthcare/healthcare_branding_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/healthcare/healthcare_branding_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/healthcare/healthcare_branding_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'how-uniforms-support-branding-for-private-healthcare-providers-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: how-uniforms-support-branding-for-private-healthcare-providers-in-ksa');
  } else {
    fixResults.push({ slug: 'how-uniforms-support-branding-for-private-healthcare-providers-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: how-uniforms-support-branding-for-private-healthcare-providers-in-ksa');
  }
})();

// Fix innovations-in-aviation-uniform-technology
(function() {
  const filePath = path.join('app', 'blog', 'innovations-in-aviation-uniform-technology', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/Aviation_uniform_technology.jpg";
  content = content.replace(/(src=["'])/images/aviation/Aviation_uniform_technology\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/Aviation_uniform_technology.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/Aviation_uniform_technology\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'innovations-in-aviation-uniform-technology', status: 'FIXED', image: correctImage });
    console.log('Fixed: innovations-in-aviation-uniform-technology');
  } else {
    fixResults.push({ slug: 'innovations-in-aviation-uniform-technology', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: innovations-in-aviation-uniform-technology');
  }
})();

// Fix innovations-in-protective-textile-technology
(function() {
  const filePath = path.join('app', 'blog', 'innovations-in-protective-textile-technology', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Industrial_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/protective_textile_innovations.jpg";
  content = content.replace(/(src=["'])/images/industrial/protective_textile_innovations\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/protective_textile_innovations.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/protective_textile_innovations\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'innovations-in-protective-textile-technology', status: 'FIXED', image: correctImage });
    console.log('Fixed: innovations-in-protective-textile-technology');
  } else {
    fixResults.push({ slug: 'innovations-in-protective-textile-technology', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: innovations-in-protective-textile-technology');
  }
})();

// Fix integrating-saudi-cultural-elements-into-hospitality-uniform-design
(function() {
  const filePath = path.join('app', 'blog', 'integrating-saudi-cultural-elements-into-hospitality-uniform-design', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-cultural-uniform-design.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-cultural-uniform-design\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-cultural-uniform-design.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-cultural-uniform-design\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'integrating-saudi-cultural-elements-into-hospitality-uniform-design', status: 'FIXED', image: correctImage });
    console.log('Fixed: integrating-saudi-cultural-elements-into-hospitality-uniform-design');
  } else {
    fixResults.push({ slug: 'integrating-saudi-cultural-elements-into-hospitality-uniform-design', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: integrating-saudi-cultural-elements-into-hospitality-uniform-design');
  }
})();

// Fix integration-of-reflective-material-in-industrial-workwear
(function() {
  const filePath = path.join('app', 'blog', 'integration-of-reflective-material-in-industrial-workwear', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/High_visibility_clothing_Hi_vis_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/reflective_material_integration.jpg";
  content = content.replace(/(src=["'])/images/industrial/reflective_material_integration\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/reflective_material_integration.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/reflective_material_integration\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'integration-of-reflective-material-in-industrial-workwear', status: 'FIXED', image: correctImage });
    console.log('Fixed: integration-of-reflective-material-in-industrial-workwear');
  } else {
    fixResults.push({ slug: 'integration-of-reflective-material-in-industrial-workwear', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: integration-of-reflective-material-in-industrial-workwear');
  }
})();

// Fix key-features-of-effective-security-uniforms-visibility-durability-functionality
(function() {
  const filePath = path.join('app', 'blog', 'key-features-of-effective-security-uniforms-visibility-durability-functionality', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/High_visibility_security_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_uniform_features.jpg";
  content = content.replace(/(src=["'])/images/security/security_uniform_features\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_uniform_features.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_uniform_features\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'key-features-of-effective-security-uniforms-visibility-durability-functionality', status: 'FIXED', image: correctImage });
    console.log('Fixed: key-features-of-effective-security-uniforms-visibility-durability-functionality');
  } else {
    fixResults.push({ slug: 'key-features-of-effective-security-uniforms-visibility-durability-functionality', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: key-features-of-effective-security-uniforms-visibility-durability-functionality');
  }
})();

// Fix maintaining-a-sharp-and-professional-appearance-uniform-care-tips
(function() {
  const filePath = path.join('app', 'blog', 'maintaining-a-sharp-and-professional-appearance-uniform-care-tips', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_suit_uniform_Full_security_uniform.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/security_uniform_care.jpg";
  content = content.replace(/(src=["'])/images/security/security_uniform_care\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/security_uniform_care.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/security_uniform_care\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'maintaining-a-sharp-and-professional-appearance-uniform-care-tips', status: 'FIXED', image: correctImage });
    console.log('Fixed: maintaining-a-sharp-and-professional-appearance-uniform-care-tips');
  } else {
    fixResults.push({ slug: 'maintaining-a-sharp-and-professional-appearance-uniform-care-tips', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: maintaining-a-sharp-and-professional-appearance-uniform-care-tips');
  }
})();

// Fix maintaining-sterility-best-practices-for-laundering-healthcare-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'maintaining-sterility-best-practices-for-laundering-healthcare-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/healthcare_uniform_management.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/healthcare/healthcare_uniform_laundering.jpg";
  content = content.replace(/(src=["'])/images/healthcare/healthcare_uniform_laundering\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/healthcare/healthcare_uniform_laundering.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/healthcare/healthcare_uniform_laundering\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'maintaining-sterility-best-practices-for-laundering-healthcare-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: maintaining-sterility-best-practices-for-laundering-healthcare-uniforms');
  } else {
    fixResults.push({ slug: 'maintaining-sterility-best-practices-for-laundering-healthcare-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: maintaining-sterility-best-practices-for-laundering-healthcare-uniforms');
  }
})();

// Fix maintaining-uniform-quality-laundry-and-upkeep-tips
(function() {
  const filePath = path.join('app', 'blog', 'maintaining-uniform-quality-laundry-and-upkeep-tips', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/hotel_uniform_stock_management.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/uniform-maintenance-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/uniform-maintenance-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/uniform-maintenance-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/uniform-maintenance-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'maintaining-uniform-quality-laundry-and-upkeep-tips', status: 'FIXED', image: correctImage });
    console.log('Fixed: maintaining-uniform-quality-laundry-and-upkeep-tips');
  } else {
    fixResults.push({ slug: 'maintaining-uniform-quality-laundry-and-upkeep-tips', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: maintaining-uniform-quality-laundry-and-upkeep-tips');
  }
})();

// Fix medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals
(function() {
  const filePath = path.join('app', 'blog', 'medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/medical-uniform-design.jpg";
  content = content.replace(/(src=["'])/images/blog/medical-uniform-design\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/medical-uniform-design.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/medical-uniform-design\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals', status: 'FIXED', image: correctImage });
    console.log('Fixed: medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals');
  } else {
    fixResults.push({ slug: 'medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: medical-uniform-design-combining-functionality-and-comfort-for-healthcare-professionals');
  }
})();

// Fix reflective-tape-placement-for-maximum-visibility
(function() {
  const filePath = path.join('app', 'blog', 'reflective-tape-placement-for-maximum-visibility', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Safety_vests.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/reflective_tape_placement.jpg";
  content = content.replace(/(src=["'])/images/industrial/reflective_tape_placement\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/reflective_tape_placement.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/reflective_tape_placement\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'reflective-tape-placement-for-maximum-visibility', status: 'FIXED', image: correctImage });
    console.log('Fixed: reflective-tape-placement-for-maximum-visibility');
  } else {
    fixResults.push({ slug: 'reflective-tape-placement-for-maximum-visibility', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: reflective-tape-placement-for-maximum-visibility');
  }
})();

// Fix restaurant-and-f-b-staff-uniforms-style-meets-practicality-in-saudi-dining
(function() {
  const filePath = path.join('app', 'blog', 'restaurant-and-f-b-staff-uniforms-style-meets-practicality-in-saudi-dining', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Restaurant_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/hospitality/restaurant_uniforms.jpg";
  content = content.replace(/(src=["'])/images/hospitality/restaurant_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/hospitality/restaurant_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/hospitality/restaurant_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'restaurant-and-f-b-staff-uniforms-style-meets-practicality-in-saudi-dining', status: 'FIXED', image: correctImage });
    console.log('Fixed: restaurant-and-f-b-staff-uniforms-style-meets-practicality-in-saudi-dining');
  } else {
    fixResults.push({ slug: 'restaurant-and-f-b-staff-uniforms-style-meets-practicality-in-saudi-dining', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: restaurant-and-f-b-staff-uniforms-style-meets-practicality-in-saudi-dining');
  }
})();

// Fix safety-features-in-paramedic-and-emergency-response-uniforms-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'safety-features-in-paramedic-and-emergency-response-uniforms-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Medical_staff_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/medical/paramedic_uniforms_safety.jpg";
  content = content.replace(/(src=["'])/images/medical/paramedic_uniforms_safety\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/medical/paramedic_uniforms_safety.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/medical/paramedic_uniforms_safety\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'safety-features-in-paramedic-and-emergency-response-uniforms-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: safety-features-in-paramedic-and-emergency-response-uniforms-in-ksa');
  } else {
    fixResults.push({ slug: 'safety-features-in-paramedic-and-emergency-response-uniforms-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: safety-features-in-paramedic-and-emergency-response-uniforms-in-ksa');
  }
})();

// Fix safety-features-in-school-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'safety-features-in-school-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/School_uniform_fabrics.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/school-uniform-safety-features.jpg";
  content = content.replace(/(src=["'])/images/blog/school-uniform-safety-features\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/school-uniform-safety-features.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/school-uniform-safety-features\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'safety-features-in-school-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: safety-features-in-school-uniforms');
  } else {
    fixResults.push({ slug: 'safety-features-in-school-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: safety-features-in-school-uniforms');
  }
})();

// Fix safety-footwear-requirements-for-industrial-sites-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'safety-footwear-requirements-for-industrial-sites-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Safety_workwear_PPE_apparel.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/industrial-safety-footwear.jpg";
  content = content.replace(/(src=["'])/images/blog/industrial-safety-footwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/industrial-safety-footwear.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/industrial-safety-footwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'safety-footwear-requirements-for-industrial-sites-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: safety-footwear-requirements-for-industrial-sites-in-ksa');
  } else {
    fixResults.push({ slug: 'safety-footwear-requirements-for-industrial-sites-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: safety-footwear-requirements-for-industrial-sites-in-ksa');
  }
})();

// Fix saudi-ministry-of-education-school-uniform-guidelines-an-overview
(function() {
  const filePath = path.join('app', 'blog', 'saudi-ministry-of-education-school-uniform-guidelines-an-overview', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/School_uniform_companies_in_Saudi_Arabia.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-moe-uniform-guidelines.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-moe-uniform-guidelines\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-moe-uniform-guidelines.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-moe-uniform-guidelines\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'saudi-ministry-of-education-school-uniform-guidelines-an-overview', status: 'FIXED', image: correctImage });
    console.log('Fixed: saudi-ministry-of-education-school-uniform-guidelines-an-overview');
  } else {
    fixResults.push({ slug: 'saudi-ministry-of-education-school-uniform-guidelines-an-overview', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: saudi-ministry-of-education-school-uniform-guidelines-an-overview');
  }
})();

// Fix saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers
(function() {
  const filePath = path.join('app', 'blog', 'saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Medical_staff_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-moh-healthcare-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-moh-healthcare-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-moh-healthcare-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-moh-healthcare-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers', status: 'FIXED', image: correctImage });
    console.log('Fixed: saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers');
  } else {
    fixResults.push({ slug: 'saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers');
  }
})();

// Fix seasonal-uniform-considerations-for-schools-across-saudi-arabia
(function() {
  const filePath = path.join('app', 'blog', 'seasonal-uniform-considerations-for-schools-across-saudi-arabia', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/school_summer_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/seasonal-school-uniforms-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/seasonal-school-uniforms-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/seasonal-school-uniforms-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/seasonal-school-uniforms-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'seasonal-uniform-considerations-for-schools-across-saudi-arabia', status: 'FIXED', image: correctImage });
    console.log('Fixed: seasonal-uniform-considerations-for-schools-across-saudi-arabia');
  } else {
    fixResults.push({ slug: 'seasonal-uniform-considerations-for-schools-across-saudi-arabia', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: seasonal-uniform-considerations-for-schools-across-saudi-arabia');
  }
})();

// Fix selecting-coveralls-vs-two-piece-workwear-pros-and-cons
(function() {
  const filePath = path.join('app', 'blog', 'selecting-coveralls-vs-two-piece-workwear-pros-and-cons', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Work_coveralls_overalls.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/coveralls-workwear-comparison.jpg";
  content = content.replace(/(src=["'])/images/blog/coveralls-workwear-comparison\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/coveralls-workwear-comparison.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/coveralls-workwear-comparison\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'selecting-coveralls-vs-two-piece-workwear-pros-and-cons', status: 'FIXED', image: correctImage });
    console.log('Fixed: selecting-coveralls-vs-two-piece-workwear-pros-and-cons');
  } else {
    fixResults.push({ slug: 'selecting-coveralls-vs-two-piece-workwear-pros-and-cons', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: selecting-coveralls-vs-two-piece-workwear-pros-and-cons');
  }
})();

// Fix sizing-challenges-and-solutions-for-diverse-hospitality-teams
(function() {
  const filePath = path.join('app', 'blog', 'sizing-challenges-and-solutions-for-diverse-hospitality-teams', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/hospitality_uniform_consulting.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/hospitality-team-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/hospitality-team-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/hospitality-team-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/hospitality-team-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sizing-challenges-and-solutions-for-diverse-hospitality-teams', status: 'FIXED', image: correctImage });
    console.log('Fixed: sizing-challenges-and-solutions-for-diverse-hospitality-teams');
  } else {
    fixResults.push({ slug: 'sizing-challenges-and-solutions-for-diverse-hospitality-teams', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sizing-challenges-and-solutions-for-diverse-hospitality-teams');
  }
})();

// Fix sizing-guides-and-best-practices-for-ordering-school-uniforms-in-bulk
(function() {
  const filePath = path.join('app', 'blog', 'sizing-guides-and-best-practices-for-ordering-school-uniforms-in-bulk', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/school_uniform_purchase.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/school-uniform-bulk-ordering.jpg";
  content = content.replace(/(src=["'])/images/blog/school-uniform-bulk-ordering\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/school-uniform-bulk-ordering.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/school-uniform-bulk-ordering\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sizing-guides-and-best-practices-for-ordering-school-uniforms-in-bulk', status: 'FIXED', image: correctImage });
    console.log('Fixed: sizing-guides-and-best-practices-for-ordering-school-uniforms-in-bulk');
  } else {
    fixResults.push({ slug: 'sizing-guides-and-best-practices-for-ordering-school-uniforms-in-bulk', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sizing-guides-and-best-practices-for-ordering-school-uniforms-in-bulk');
  }
})();

// Fix sourcing-durable-hardware-buttons-zippers-and-buckles-for-security-wear
(function() {
  const filePath = path.join('app', 'blog', 'sourcing-durable-hardware-buttons-zippers-and-buckles-for-security-wear', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_uniform_supplier_KSA.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/hardware_components_security.jpg";
  content = content.replace(/(src=["'])/images/security/hardware_components_security\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/hardware_components_security.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/hardware_components_security\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sourcing-durable-hardware-buttons-zippers-and-buckles-for-security-wear', status: 'FIXED', image: correctImage });
    console.log('Fixed: sourcing-durable-hardware-buttons-zippers-and-buckles-for-security-wear');
  } else {
    fixResults.push({ slug: 'sourcing-durable-hardware-buttons-zippers-and-buckles-for-security-wear', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sourcing-durable-hardware-buttons-zippers-and-buckles-for-security-wear');
  }
})();

// Fix spa-and-wellness-center-uniforms-promoting-relaxation-and-professionalism
(function() {
  const filePath = path.join('app', 'blog', 'spa-and-wellness-center-uniforms-promoting-relaxation-and-professionalism', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/spa_therapist_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/spa-wellness-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/spa-wellness-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/spa-wellness-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/spa-wellness-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'spa-and-wellness-center-uniforms-promoting-relaxation-and-professionalism', status: 'FIXED', image: correctImage });
    console.log('Fixed: spa-and-wellness-center-uniforms-promoting-relaxation-and-professionalism');
  } else {
    fixResults.push({ slug: 'spa-and-wellness-center-uniforms-promoting-relaxation-and-professionalism', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: spa-and-wellness-center-uniforms-promoting-relaxation-and-professionalism');
  }
})();

// Fix sports-kits-and-pe-uniforms-for-saudi-schools
(function() {
  const filePath = path.join('app', 'blog', 'sports-kits-and-pe-uniforms-for-saudi-schools', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/uniforms_sports_kits.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-pe-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-pe-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-pe-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-pe-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sports-kits-and-pe-uniforms-for-saudi-schools', status: 'FIXED', image: correctImage });
    console.log('Fixed: sports-kits-and-pe-uniforms-for-saudi-schools');
  } else {
    fixResults.push({ slug: 'sports-kits-and-pe-uniforms-for-saudi-schools', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sports-kits-and-pe-uniforms-for-saudi-schools');
  }
})();

// Fix stain-resistance-and-easy-care-fabrics-for-younger-students
(function() {
  const filePath = path.join('app', 'blog', 'stain-resistance-and-easy-care-fabrics-for-younger-students', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/easy_care_school_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/easy-care-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/easy-care-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/easy-care-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/easy-care-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'stain-resistance-and-easy-care-fabrics-for-younger-students', status: 'FIXED', image: correctImage });
    console.log('Fixed: stain-resistance-and-easy-care-fabrics-for-younger-students');
  } else {
    fixResults.push({ slug: 'stain-resistance-and-easy-care-fabrics-for-younger-students', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: stain-resistance-and-easy-care-fabrics-for-younger-students');
  }
})();

// Fix sustainable-and-disposable-uniform-options-in-healthcare-settings
(function() {
  const filePath = path.join('app', 'blog', 'sustainable-and-disposable-uniform-options-in-healthcare-settings', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/disposable_medical_gowns.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/sustainable-healthcare-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/sustainable-healthcare-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/sustainable-healthcare-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/sustainable-healthcare-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sustainable-and-disposable-uniform-options-in-healthcare-settings', status: 'FIXED', image: correctImage });
    console.log('Fixed: sustainable-and-disposable-uniform-options-in-healthcare-settings');
  } else {
    fixResults.push({ slug: 'sustainable-and-disposable-uniform-options-in-healthcare-settings', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sustainable-and-disposable-uniform-options-in-healthcare-settings');
  }
})();

// Fix sustainable-and-eco-friendly-school-uniform-options
(function() {
  const filePath = path.join('app', 'blog', 'sustainable-and-eco-friendly-school-uniform-options', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/School_uniform_fabrics.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/sustainable-school-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/sustainable-school-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/sustainable-school-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/sustainable-school-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sustainable-and-eco-friendly-school-uniform-options', status: 'FIXED', image: correctImage });
    console.log('Fixed: sustainable-and-eco-friendly-school-uniform-options');
  } else {
    fixResults.push({ slug: 'sustainable-and-eco-friendly-school-uniform-options', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sustainable-and-eco-friendly-school-uniform-options');
  }
})();

// Fix sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector
(function() {
  const filePath = path.join('app', 'blog', 'sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/government/Public_sector_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/sustainable-public-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/sustainable-public-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/sustainable-public-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/sustainable-public-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector', status: 'FIXED', image: correctImage });
    console.log('Fixed: sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector');
  } else {
    fixResults.push({ slug: 'sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector');
  }
})();

// Fix sustainable-options-in-industrial-workwear
(function() {
  const filePath = path.join('app', 'blog', 'sustainable-options-in-industrial-workwear', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/customized_workwear_programs.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/sustainable_workwear.jpg";
  content = content.replace(/(src=["'])/images/industrial/sustainable_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/sustainable_workwear.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/sustainable_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sustainable-options-in-industrial-workwear', status: 'FIXED', image: correctImage });
    console.log('Fixed: sustainable-options-in-industrial-workwear');
  } else {
    fixResults.push({ slug: 'sustainable-options-in-industrial-workwear', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sustainable-options-in-industrial-workwear');
  }
})();

// Fix sustainable-uniform-programs-for-eco-conscious-hotels-in-saudi-arabia
(function() {
  const filePath = path.join('app', 'blog', 'sustainable-uniform-programs-for-eco-conscious-hotels-in-saudi-arabia', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Hotel_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/sustainable-hotel-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/sustainable-hotel-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/sustainable-hotel-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/sustainable-hotel-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'sustainable-uniform-programs-for-eco-conscious-hotels-in-saudi-arabia', status: 'FIXED', image: correctImage });
    console.log('Fixed: sustainable-uniform-programs-for-eco-conscious-hotels-in-saudi-arabia');
  } else {
    fixResults.push({ slug: 'sustainable-uniform-programs-for-eco-conscious-hotels-in-saudi-arabia', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: sustainable-uniform-programs-for-eco-conscious-hotels-in-saudi-arabia');
  }
})();

// Fix teacher-and-staff-attire-setting-professional-standards-in-ksa-educational-institutions
(function() {
  const filePath = path.join('app', 'blog', 'teacher-and-staff-attire-setting-professional-standards-in-ksa-educational-institutions', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/School_staff_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/teacher-professional-attire.jpg";
  content = content.replace(/(src=["'])/images/blog/teacher-professional-attire\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/teacher-professional-attire.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/teacher-professional-attire\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'teacher-and-staff-attire-setting-professional-standards-in-ksa-educational-institutions', status: 'FIXED', image: correctImage });
    console.log('Fixed: teacher-and-staff-attire-setting-professional-standards-in-ksa-educational-institutions');
  } else {
    fixResults.push({ slug: 'teacher-and-staff-attire-setting-professional-standards-in-ksa-educational-institutions', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: teacher-and-staff-attire-setting-professional-standards-in-ksa-educational-institutions');
  }
})();

// Fix technological-advancements-in-fabrics-for-government-duty-wear
(function() {
  const filePath = path.join('app', 'blog', 'technological-advancements-in-fabrics-for-government-duty-wear', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/government/approved_government_fabrics.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/government-tech-fabrics.jpg";
  content = content.replace(/(src=["'])/images/blog/government-tech-fabrics\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/government-tech-fabrics.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/government-tech-fabrics\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'technological-advancements-in-fabrics-for-government-duty-wear', status: 'FIXED', image: correctImage });
    console.log('Fixed: technological-advancements-in-fabrics-for-government-duty-wear');
  } else {
    fixResults.push({ slug: 'technological-advancements-in-fabrics-for-government-duty-wear', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: technological-advancements-in-fabrics-for-government-duty-wear');
  }
})();

// Fix temperature-regulating-fabrics-for-enhanced-comfort-during-shifts
(function() {
  const filePath = path.join('app', 'blog', 'temperature-regulating-fabrics-for-enhanced-comfort-during-shifts', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/breathable_healthcare_fabrics.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/healthcare/temperature_regulating_fabrics.jpg";
  content = content.replace(/(src=["'])/images/healthcare/temperature_regulating_fabrics\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/healthcare/temperature_regulating_fabrics.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/healthcare/temperature_regulating_fabrics\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'temperature-regulating-fabrics-for-enhanced-comfort-during-shifts', status: 'FIXED', image: correctImage });
    console.log('Fixed: temperature-regulating-fabrics-for-enhanced-comfort-during-shifts');
  } else {
    fixResults.push({ slug: 'temperature-regulating-fabrics-for-enhanced-comfort-during-shifts', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: temperature-regulating-fabrics-for-enhanced-comfort-during-shifts');
  }
})();

// Fix the-evolution-of-nursing-uniforms-in-saudi-arabia
(function() {
  const filePath = path.join('app', 'blog', 'the-evolution-of-nursing-uniforms-in-saudi-arabia', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Nurse_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-nursing-uniforms-evolution.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-nursing-uniforms-evolution\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-nursing-uniforms-evolution.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-nursing-uniforms-evolution\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-evolution-of-nursing-uniforms-in-saudi-arabia', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-evolution-of-nursing-uniforms-in-saudi-arabia');
  } else {
    fixResults.push({ slug: 'the-evolution-of-nursing-uniforms-in-saudi-arabia', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-evolution-of-nursing-uniforms-in-saudi-arabia');
  }
})();

// Fix the-evolution-of-school-uniform-styles-in-saudi-arabia
(function() {
  const filePath = path.join('app', 'blog', 'the-evolution-of-school-uniform-styles-in-saudi-arabia', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-school-uniform-evolution.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-school-uniform-evolution\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-school-uniform-evolution.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-school-uniform-evolution\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-evolution-of-school-uniform-styles-in-saudi-arabia', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-evolution-of-school-uniform-styles-in-saudi-arabia');
  } else {
    fixResults.push({ slug: 'the-evolution-of-school-uniform-styles-in-saudi-arabia', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-evolution-of-school-uniform-styles-in-saudi-arabia');
  }
})();

// Fix the-future-of-hospitality-uniforms-tech-integration-and-personalization
(function() {
  const filePath = path.join('app', 'blog', 'the-future-of-hospitality-uniforms-tech-integration-and-personalization', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/modern_hospitality_design_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/tech-hospitality-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/tech-hospitality-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/tech-hospitality-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/tech-hospitality-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-future-of-hospitality-uniforms-tech-integration-and-personalization', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-future-of-hospitality-uniforms-tech-integration-and-personalization');
  } else {
    fixResults.push({ slug: 'the-future-of-hospitality-uniforms-tech-integration-and-personalization', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-future-of-hospitality-uniforms-tech-integration-and-personalization');
  }
})();

// Fix the-importance-of-brand-representation-through-aviation-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'the-importance-of-brand-representation-through-aviation-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/aviation_uniform_embroidery.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/airline-brand-uniform.jpg";
  content = content.replace(/(src=["'])/images/aviation/airline-brand-uniform\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/airline-brand-uniform.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/airline-brand-uniform\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-importance-of-brand-representation-through-aviation-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-importance-of-brand-representation-through-aviation-uniforms');
  } else {
    fixResults.push({ slug: 'the-importance-of-brand-representation-through-aviation-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-importance-of-brand-representation-through-aviation-uniforms');
  }
})();

// Fix the-importance-of-color-coding-uniforms-in-large-saudi-hospitals
(function() {
  const filePath = path.join('app', 'blog', 'the-importance-of-color-coding-uniforms-in-large-saudi-hospitals', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Hospital_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/hospital-color-coding.jpg";
  content = content.replace(/(src=["'])/images/blog/hospital-color-coding\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/hospital-color-coding.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/hospital-color-coding\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-importance-of-color-coding-uniforms-in-large-saudi-hospitals', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-importance-of-color-coding-uniforms-in-large-saudi-hospitals');
  } else {
    fixResults.push({ slug: 'the-importance-of-color-coding-uniforms-in-large-saudi-hospitals', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-importance-of-color-coding-uniforms-in-large-saudi-hospitals');
  }
})();

// Fix the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/industrial_uniform_fittings.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/proper-uniform-fit.jpg";
  content = content.replace(/(src=["'])/images/industrial/proper-uniform-fit\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/proper-uniform-fit.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/proper-uniform-fit\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms');
  } else {
    fixResults.push({ slug: 'the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms');
  }
})();

// Fix the-link-between-professional-uniforms-and-citizen-confidence
(function() {
  const filePath = path.join('app', 'blog', 'the-link-between-professional-uniforms-and-citizen-confidence', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/government/Civil_service_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/government-uniform-confidence.jpg";
  content = content.replace(/(src=["'])/images/blog/government-uniform-confidence\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/government-uniform-confidence.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/government-uniform-confidence\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-link-between-professional-uniforms-and-citizen-confidence', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-link-between-professional-uniforms-and-citizen-confidence');
  } else {
    fixResults.push({ slug: 'the-link-between-professional-uniforms-and-citizen-confidence', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-link-between-professional-uniforms-and-citizen-confidence');
  }
})();

// Fix the-psychological-impact-of-security-uniforms-on-deterrence-and-public-perception
(function() {
  const filePath = path.join('app', 'blog', 'the-psychological-impact-of-security-uniforms-on-deterrence-and-public-perception', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/authoritative_security_appearance.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/uniform_psychology.jpg";
  content = content.replace(/(src=["'])/images/security/uniform_psychology\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/uniform_psychology.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/uniform_psychology\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-psychological-impact-of-security-uniforms-on-deterrence-and-public-perception', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-psychological-impact-of-security-uniforms-on-deterrence-and-public-perception');
  } else {
    fixResults.push({ slug: 'the-psychological-impact-of-security-uniforms-on-deterrence-and-public-perception', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-psychological-impact-of-security-uniforms-on-deterrence-and-public-perception');
  }
})();

// Fix the-psychology-of-color-in-aviation-uniform-design
(function() {
  const filePath = path.join('app', 'blog', 'the-psychology-of-color-in-aviation-uniform-design', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/Official_aviation_attire.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/aviation_uniforms.jpg";
  content = content.replace(/(src=["'])/images/aviation/aviation_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/Aviation_uniform_colors.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/Aviation_uniform_colors\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-psychology-of-color-in-aviation-uniform-design', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-psychology-of-color-in-aviation-uniform-design');
  } else {
    fixResults.push({ slug: 'the-psychology-of-color-in-aviation-uniform-design', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-psychology-of-color-in-aviation-uniform-design');
  }
})();

// Fix the-psychology-of-color-in-healthcare-environments-and-uniforms
(function() {
  const filePath = path.join('app', 'blog', 'the-psychology-of-color-in-healthcare-environments-and-uniforms', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/healthcare/Healthcare_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/healthcare-color-psychology.jpg";
  content = content.replace(/(src=["'])/images/blog/healthcare-color-psychology\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/healthcare-color-psychology.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/healthcare-color-psychology\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-psychology-of-color-in-healthcare-environments-and-uniforms', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-psychology-of-color-in-healthcare-environments-and-uniforms');
  } else {
    fixResults.push({ slug: 'the-psychology-of-color-in-healthcare-environments-and-uniforms', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-psychology-of-color-in-healthcare-environments-and-uniforms');
  }
})();

// Fix the-role-of-modesty-in-saudi-school-uniform-design
(function() {
  const filePath = path.join('app', 'blog', 'the-role-of-modesty-in-saudi-school-uniform-design', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/education/School_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-modest-school-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-modest-school-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-modest-school-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-modest-school-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-role-of-modesty-in-saudi-school-uniform-design', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-role-of-modesty-in-saudi-school-uniform-design');
  } else {
    fixResults.push({ slug: 'the-role-of-modesty-in-saudi-school-uniform-design', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-role-of-modesty-in-saudi-school-uniform-design');
  }
})();

// Fix the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams
(function() {
  const filePath = path.join('app', 'blog', 'the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/government/government_office_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/government-team-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/government-team-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/government-team-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/government-team-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams');
  } else {
    fixResults.push({ slug: 'the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams');
  }
})();

// Fix the-role-of-uniforms-in-creating-a-cohesive-brand-experience-across-hotel-chains-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'the-role-of-uniforms-in-creating-a-cohesive-brand-experience-across-hotel-chains-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Hospitality_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/hospitality/hotel-chain-uniforms.jpg";
  content = content.replace(/(src=["'])/images/hospitality/hotel-chain-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/hospitality/hotel-chain-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/hospitality/hotel-chain-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-role-of-uniforms-in-creating-a-cohesive-brand-experience-across-hotel-chains-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-role-of-uniforms-in-creating-a-cohesive-brand-experience-across-hotel-chains-in-ksa');
  } else {
    fixResults.push({ slug: 'the-role-of-uniforms-in-creating-a-cohesive-brand-experience-across-hotel-chains-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-role-of-uniforms-in-creating-a-cohesive-brand-experience-across-hotel-chains-in-ksa');
  }
})();

// Fix the-role-of-uniforms-in-passenger-perceptions-of-airline-quality
(function() {
  const filePath = path.join('app', 'blog', 'the-role-of-uniforms-in-passenger-perceptions-of-airline-quality', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/aviation/aviation_uniforms.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/aviation/passenger-perception-uniforms.jpg";
  content = content.replace(/(src=["'])/images/aviation/passenger-perception-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/aviation/passenger-perception-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/aviation/passenger-perception-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-role-of-uniforms-in-passenger-perceptions-of-airline-quality', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-role-of-uniforms-in-passenger-perceptions-of-airline-quality');
  } else {
    fixResults.push({ slug: 'the-role-of-uniforms-in-passenger-perceptions-of-airline-quality', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-role-of-uniforms-in-passenger-perceptions-of-airline-quality');
  }
})();

// Fix the-role-of-uniforms-in-promoting-a-safety-culture-on-ksa-work-sites
(function() {
  const filePath = path.join('app', 'blog', 'the-role-of-uniforms-in-promoting-a-safety-culture-on-ksa-work-sites', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Safety_workwear_PPE_apparel.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/safety_culture_uniforms.jpg";
  content = content.replace(/(src=["'])/images/industrial/safety_culture_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/safety_culture_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/safety_culture_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-role-of-uniforms-in-promoting-a-safety-culture-on-ksa-work-sites', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-role-of-uniforms-in-promoting-a-safety-culture-on-ksa-work-sites');
  } else {
    fixResults.push({ slug: 'the-role-of-uniforms-in-promoting-a-safety-culture-on-ksa-work-sites', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-role-of-uniforms-in-promoting-a-safety-culture-on-ksa-work-sites');
  }
})();

// Fix the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/government/Official_government_suits.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/ksa-government-authority-uniforms.jpg";
  content = content.replace(/(src=["'])/images/blog/ksa-government-authority-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/ksa-government-authority-uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/ksa-government-authority-uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa');
  } else {
    fixResults.push({ slug: 'the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa');
  }
})();

// Fix uniform-considerations-for-government-representatives-attending-international-events
(function() {
  const filePath = path.join('app', 'blog', 'uniform-considerations-for-government-representatives-attending-international-events', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/government/Formal_attire_for_government_events.jpg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/saudi-international-representation.jpg";
  content = content.replace(/(src=["'])/images/blog/saudi-international-representation\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/saudi-international-representation.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/saudi-international-representation\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'uniform-considerations-for-government-representatives-attending-international-events', status: 'FIXED', image: correctImage });
    console.log('Fixed: uniform-considerations-for-government-representatives-attending-international-events');
  } else {
    fixResults.push({ slug: 'uniform-considerations-for-government-representatives-attending-international-events', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: uniform-considerations-for-government-representatives-attending-international-events');
  }
})();

// Fix uniform-considerations-for-theme-parks-and-entertainment-venues-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'uniform-considerations-for-theme-parks-and-entertainment-venues-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/hospitality/Banquet_staff_uniforms_Event_staff_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/theme-park-staff-saudi.jpg";
  content = content.replace(/(src=["'])/images/blog/theme-park-staff-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/theme-park-staff-saudi.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/theme-park-staff-saudi\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'uniform-considerations-for-theme-parks-and-entertainment-venues-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: uniform-considerations-for-theme-parks-and-entertainment-venues-in-ksa');
  } else {
    fixResults.push({ slug: 'uniform-considerations-for-theme-parks-and-entertainment-venues-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: uniform-considerations-for-theme-parks-and-entertainment-venues-in-ksa');
  }
})();

// Fix uniform-needs-for-specific-industries-construction-manufacturing-oil-gas-logistics-in-ksa
(function() {
  const filePath = path.join('app', 'blog', 'uniform-needs-for-specific-industries-construction-manufacturing-oil-gas-logistics-in-ksa', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/blog/industry-specific-workwear-ksa.jpg";
  content = content.replace(/(src=["'])/images/blog/industry-specific-workwear-ksa\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/blog/industry-specific-workwear-ksa.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/blog/industry-specific-workwear-ksa\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'uniform-needs-for-specific-industries-construction-manufacturing-oil-gas-logistics-in-ksa', status: 'FIXED', image: correctImage });
    console.log('Fixed: uniform-needs-for-specific-industries-construction-manufacturing-oil-gas-logistics-in-ksa');
  } else {
    fixResults.push({ slug: 'uniform-needs-for-specific-industries-construction-manufacturing-oil-gas-logistics-in-ksa', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: uniform-needs-for-specific-industries-construction-manufacturing-oil-gas-logistics-in-ksa');
  }
})();

// Fix uniforms-for-event-security-vs-static-guarding-in-saudi-arabia
(function() {
  const filePath = path.join('app', 'blog', 'uniforms-for-event-security-vs-static-guarding-in-saudi-arabia', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/event_security_staff_vests.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/event_vs_static_security.jpg";
  content = content.replace(/(src=["'])/images/security/event_vs_static_security\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/event_vs_static_security.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/event_vs_static_security\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'uniforms-for-event-security-vs-static-guarding-in-saudi-arabia', status: 'FIXED', image: correctImage });
    console.log('Fixed: uniforms-for-event-security-vs-static-guarding-in-saudi-arabia');
  } else {
    fixResults.push({ slug: 'uniforms-for-event-security-vs-static-guarding-in-saudi-arabia', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: uniforms-for-event-security-vs-static-guarding-in-saudi-arabia');
  }
})();

// Fix women-s-uniform-options-in-the-saudi-security-sector
(function() {
  const filePath = path.join('app', 'blog', 'women-s-uniform-options-in-the-saudi-security-sector', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/security/Security_company_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/security/women_security_uniforms.jpg";
  content = content.replace(/(src=["'])/images/security/women_security_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/security/women_security_uniforms.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/security/women_security_uniforms\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'women-s-uniform-options-in-the-saudi-security-sector', status: 'FIXED', image: correctImage });
    console.log('Fixed: women-s-uniform-options-in-the-saudi-security-sector');
  } else {
    fixResults.push({ slug: 'women-s-uniform-options-in-the-saudi-security-sector', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: women-s-uniform-options-in-the-saudi-security-sector');
  }
})();

// Fix workwear-considerations-for-female-employees-in-saudi-industrial-settings
(function() {
  const filePath = path.join('app', 'blog', 'workwear-considerations-for-female-employees-in-saudi-industrial-settings', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  const correctImage = '/images/industrial/Factory_worker_uniforms.jpeg';
  let updated = false;

  // Fix featured image
  const originalFeatured = "/images/industrial/female_industrial_workwear.jpg";
  content = content.replace(/(src=["'])/images/industrial/female_industrial_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  // Fix OG image
  const originalOg = "/images/industrial/female_industrial_workwear.jpg";
  content = content.replace(/(images:\s*\[\s*["'])/images/industrial/female_industrial_workwear\.jpg(["'])/g, '$1' + correctImage + '$2');
  updated = true;

  if (updated) {
    fs.writeFileSync(filePath, content);
    fixResults.push({ slug: 'workwear-considerations-for-female-employees-in-saudi-industrial-settings', status: 'FIXED', image: correctImage });
    console.log('Fixed: workwear-considerations-for-female-employees-in-saudi-industrial-settings');
  } else {
    fixResults.push({ slug: 'workwear-considerations-for-female-employees-in-saudi-industrial-settings', status: 'NO_CHANGE_NEEDED' });
    console.log('No changes needed for: workwear-considerations-for-female-employees-in-saudi-industrial-settings');
  }
})();

console.log(`Fixed ${fixResults.filter(r => r.status === "FIXED").length} articles`);
