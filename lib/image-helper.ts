/**
 * Enhanced image path helper with robust validation
 * Uses environment variable to force WebP only mode for builds
 */

// No file system imports or public directory importing
// Only use hardcoded paths for WebP images

// Map of category names to their fallback image paths
const CATEGORY_FALLBACKS: Record<string, string> = {
  aviation: '/webp/aviation_uniforms.webp',
  hospitality: '/webp/Hospitality_uniforms.webp',
  healthcare: '/webp/Medical_uniforms_Saudi_Arabia_KSA.webp',
  education: '/webp/placeholder-image.webp',
  security: '/webp/placeholder-image.webp',
  industrial: '/webp/placeholder-image.webp',
  government: '/webp/placeholder-image.webp',
};

// Default fallback in case no category-specific fallback exists
const DEFAULT_FALLBACK = '/webp/placeholder-image.webp';

/**
 * Gets a category-specific fallback image path
 * @param category The category to get a fallback for
 * @returns Path to the fallback image
 */
export function getCategoryFallbackImage(category: string): string {
  if (category && CATEGORY_FALLBACKS[category]) {
    return CATEGORY_FALLBACKS[category];
  }
  return DEFAULT_FALLBACK;
}

/**
 * Converts a JPG/JPEG/PNG image path to its WebP equivalent
 * 
 * @param imagePath The original image path
 * @returns The WebP version path
 */
function convertToWebpPath(imagePath: string): string {
  // If it's already a WebP, just return it
  if (imagePath.endsWith('.webp')) {
    return imagePath;
  }
  
  // Handle special cases for known problematic images
  const fileNameLower = imagePath.toLowerCase();
  if (fileNameLower.includes('medical_uniforms_saudi_arabia_ksa')) {
    return '/webp/Medical_uniforms_Saudi_Arabia_KSA.webp';
  } else if (fileNameLower.includes('hospitality_uniforms')) {
    return '/webp/Hospitality_uniforms.webp';
  } else if (fileNameLower.includes('aviation_uniforms')) {
    return '/webp/aviation_uniforms.webp';
  }

  // Special handling for images in category subdirectories
  const categories = ['aviation', 'hospitality', 'healthcare', 'education', 'security', 'industrial', 'government'];
  for (const category of categories) {
    if (fileNameLower.includes(`/images/${category}/`)) {
      // Get filename without extension and path
      const fileName = imagePath.split('/').pop() || '';
      const fileNameWithoutExt = fileName.split('.')[0];
      return `/images/${category}/webp/${fileNameWithoutExt}.webp`;
    }
  }

  // Default WebP conversion for other images in root public directory
  // Get filename without extension
  const fileName = imagePath.split('/').pop() || '';
  const fileNameWithoutExt = fileName.split('.')[0];
  
  return `/webp/${fileNameWithoutExt}.webp`;
}

/**
 * Gets a valid image path, converting to WebP when available
 * @param src The original image source path
 * @returns A safe image path
 */
export default function getValidImagePath(src: string): string {
  if (!src) {
    return DEFAULT_FALLBACK;
  }
  
  // Handle SVG files directly (no conversion needed)
  if (src.endsWith('.svg')) {
    return src;
  }
  
  // Always convert to WebP path
  return convertToWebpPath(src);
}

/**
 * Log image loading errors for diagnostics
 */
export function logImageError(imagePath: string, error?: any): void {
  console.error(`Failed to load image: ${imagePath}`, error || '');
}