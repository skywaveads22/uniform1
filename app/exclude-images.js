/**
 * This file lists problematic images that should be excluded from direct imports
 * in Next.js application. It's used by webpack configuration to prevent
 * the build from failing due to corrupted or incompatible image files.
 */

export const EXCLUDED_IMAGES = [
  'public/aviation_uniforms.jpg',
  'public/Hospitality_uniforms.jpeg',
  'public/Medical_uniforms_Saudi_Arabia_KSA.jpg',
  'public/images/aviation/aviation_uniforms.jpg',
  'public/images/hospitality/Hospitality_uniforms.jpeg',
  'public/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
  'public/images/uniform_pattern_bg.jpg',
  'public/images/security/placeholder.jpg',
  'public/images/placeholder-images/generic-placeholder.jpg',
  'public/images/industrial/placeholder.jpg',
  'public/images/healthcare/placeholder.jpg',
  'public/images/healthcare/healthcare_placeholder.jpg',
  'public/images/government/placeholder.jpg',
  'public/images/education/placeholder.jpg',
  'public/images/aviation/placeholder.jpg',
  'public/images/aviation/fabric-selection.jpg',
  'public/backup/aviation_uniforms.jpg',
  'public/backup/Hospitality_uniforms.jpeg',
  'public/backup/Medical_uniforms_Saudi_Arabia_KSA.jpg'
];

// Convert to pattern suitable for webpack exclude function
export function getExcludePattern() {
  return new RegExp(
    EXCLUDED_IMAGES
      .map(path => path.replace(/\//g, '[/\\\\]').replace(/\./g, '\\.'))
      .join('|')
  );
}

export default EXCLUDED_IMAGES; 