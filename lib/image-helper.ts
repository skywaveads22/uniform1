/**
 * Simple image path helper
 */

// Default fallback image that is guaranteed to exist
const DEFAULT_FALLBACK = '/images/placeholder-image.jpg';

// Define valid category types
type ImageCategory = 'author' | 'authors' | 'aviation' | 'education' | 'government' | 'healthcare' | 'hospitality' | 'industrial' | 'security';

// Category-specific fallbacks with proper typing
const CATEGORY_FALLBACKS: Record<ImageCategory, string> = {
  author: '/images/author/default-author.jpg',
  authors: '/images/author/default-author.jpg',
  aviation: '/images/aviation/aviation_uniforms.jpg',
  education: '/images/education/School_uniforms.jpg',
  government: '/images/government/Government_uniforms.jpg',
  healthcare: '/images/healthcare/Healthcare_uniforms.jpg',
  hospitality: '/images/hospitality/Hotel_uniforms.jpeg',
  industrial: '/images/industrial/Industrial_uniforms.jpeg',
  security: '/images/security/Security_uniforms.jpeg'
};

export function getImagePath(src: string): string {
  // Handle undefined or empty paths
  if (!src || typeof src !== 'string') {
    return DEFAULT_FALLBACK;
  }

  // Handle external URLs
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // Normalize path
  const normalizedPath = src.startsWith('/') ? src : `/${src}`;
  
  // Extract category from path
  const categoryMatch = normalizedPath.match(/\/images\/([^\/]+)\//);
  const category = categoryMatch?.[1]?.toLowerCase() as ImageCategory | undefined;

  // Return category fallback for placeholder images
  if (normalizedPath.includes('placeholder') || normalizedPath.endsWith('.png')) {
    return category && category in CATEGORY_FALLBACKS 
      ? CATEGORY_FALLBACKS[category]
      : DEFAULT_FALLBACK;
  }

  return normalizedPath;
}

export function getFallbackImage(category?: string): string {
  if (!category || typeof category !== 'string') {
    return DEFAULT_FALLBACK;
  }

  const normalizedCategory = category.toLowerCase().trim() as ImageCategory;
  return normalizedCategory in CATEGORY_FALLBACKS 
    ? CATEGORY_FALLBACKS[normalizedCategory] 
    : DEFAULT_FALLBACK;
}

/**
 * Log image loading errors for diagnostics
 */
export function logImageError(imagePath: string, error?: any): void {
  console.error(`Failed to load image: ${imagePath}`, error || '');
}