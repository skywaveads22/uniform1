export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = async (images) => {
  try {
    await Promise.all(images.map(src => preloadImage(src)));
  } catch (error) {
    console.warn('Failed to preload some images:', error);
  }
}; 