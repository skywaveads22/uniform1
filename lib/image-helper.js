export const getImagePath = (path) => {
  if (!path) return '/images/placeholder-images/generic-placeholder.jpg';
  
  // List of known placeholder files to replace
  const placeholderFiles = [
    '/images/aviation/placeholder.jpg',
    '/images/education/placeholder.jpg',
    '/images/government/placeholder.jpg',
    '/images/healthcare/placeholder.jpg',
    '/images/hospitality/placeholder.jpg',
    '/images/industrial/placeholder.jpg',
    '/images/security/placeholder.jpg',
    '/images/author/placeholder.png'
  ];

  // If the path is a known placeholder, return the generic placeholder
  if (placeholderFiles.includes(path)) {
    return '/images/placeholder-images/generic-placeholder.jpg';
  }

  return path;
}; 

export const getValidImagePath = (path) => {
  if (!path) return '/images/placeholder-images/generic-placeholder.jpg';
  
  try {
    // Try to require the image file
    require(`../public${path}`);
    return path;
  } catch (error) {
    // If the image doesn't exist, return the generic placeholder
    console.warn(`Image not found: ${path}, using placeholder instead`);
    return '/images/placeholder-images/generic-placeholder.jpg';
  }
}; 