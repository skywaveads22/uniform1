export const getImagePath = (path) => {
  if (!path) return '/images/placeholder-images/generic-placeholder.webp';
  
  // List of known placeholder files to replace
  const placeholderFiles = [
    '/images/aviation/placeholder.webp',
    '/images/education/placeholder.webp',
    '/images/government/placeholder.webp',
    '/images/healthcare/placeholder.webp',
    '/images/hospitality/placeholder.webp',
    '/images/industrial/placeholder.webp',
    '/images/security/placeholder.webp',
    '/images/author/placeholder.webp'
  ];

  // If the path is a known placeholder, return the generic placeholder
  if (placeholderFiles.includes(path)) {
    return '/images/placeholder-images/generic-placeholder.webp';
  }

  // Convert any jpg/png paths to webp
  return path.replace(/\.(jpg|png|jpeg)$/, '.webp');
}; 

export const getValidImagePath = (path) => {
  if (!path) return '/images/placeholder-images/generic-placeholder.webp';
  
  try {
    // Try to require the image file
    require(`../public${path}`);
    return path;
  } catch (error) {
    // If the image doesn't exist, return the generic placeholder
    console.warn(`Image not found: ${path}, using placeholder instead`);
    return '/images/placeholder-images/generic-placeholder.webp';
  }
}; 