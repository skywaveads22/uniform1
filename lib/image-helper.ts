/**
 * Helper function to properly format image paths for both development and GitHub Pages
 * Handles the repository base path in the URL
 */
export function getImagePath(src: string): string {
  // If it's an external URL, return as is
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // Handle public directory references
  if (src.startsWith('public/')) {
    src = src.replace('public/', '/');
  }

  // Make sure the path starts with a slash
  if (!src.startsWith('/')) {
    src = '/' + src;
  }

  // For GitHub Pages, we need to prepend the repository name in production
  const basePath = process.env.NODE_ENV === 'production' ? '/uniform1' : '';
  
  return `${basePath}${src}`;
} 