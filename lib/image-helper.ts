/**
 * دالة بسيطة لتنسيق مسارات الصور بشكل صحيح
 */
export function getImagePath(src: string): string {
  // التحقق من صحة المدخلات
  if (!src || src === '/') {
    console.log('Empty image path, using default image');
    return getDefaultImage();
  }
  
  // إذا كان المسار URL خارجي، نعيده كما هو
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // إزالة public/ من بداية المسار إذا وجدت
  let normalizedSrc = src;
  if (normalizedSrc.startsWith('public/')) {
    normalizedSrc = normalizedSrc.substring(7);
    console.log(`Removed 'public/' prefix from path: ${src} -> ${normalizedSrc}`);
  }

  // التأكد من أن المسار يبدأ بشرطة مائلة
  if (!normalizedSrc.startsWith('/')) {
    normalizedSrc = `/${normalizedSrc}`;
    console.log(`Added leading slash to path: ${normalizedSrc}`);
  }
  
  // استخراج الفئة من المسار
  const categoryMatch = normalizedSrc.match(/\/images\/([^\/]+)\//);
  const category = categoryMatch ? categoryMatch[1].toLowerCase() : null;
  
  // التعامل مع حالات خاصة
  if (category) {
    // حالة خاصة للتعامل مع الامتدادات المختلفة
    if (normalizedSrc.endsWith('.jpg') && category === 'security') {
      // استبدال الامتداد من JPG إلى JPEG لفئة الأمن إذا كان الاسم مطابقاً للنمط المحدد
      if (normalizedSrc.includes('_Saudi_Arabia_KSA')) {
        const jpegPath = normalizedSrc.replace('.jpg', '.jpeg');
        console.log(`Converted jpg to jpeg for security category: ${normalizedSrc} -> ${jpegPath}`);
        normalizedSrc = jpegPath;
      }
    }
    
    // التحقق من وجود الملف على جانب الخادم إذا أمكن
    if (typeof window === 'undefined') {
      try {
        const fs = require('fs');
        const fullPath = `./public${normalizedSrc}`;
        
        if (!fs.existsSync(fullPath)) {
          console.log(`Image not found at path: ${fullPath}, using default image for category: ${category}`);
          return getDefaultImage(category);
        }
      } catch (error) {
        console.error('Error checking image path:', error);
        return getDefaultImage(category);
      }
    }
  }
  
  return normalizedSrc;
}

/**
 * دالة جديدة لاستخدام مسار الصورة الصحيح والتحقق من وجودها
 * تأخذ المسار الأصلي وتعيد مسار صورة موجودة فعلاً
 */
export function getValidImagePath(originalPath: string): string {
  if (!originalPath) {
    console.log('Empty image path provided to getValidImagePath, using default image');
    return getDefaultImage();
  }
  
  // إزالة 'public/' من البداية إذا وجدت
  let imagePath = originalPath;
  if (imagePath.startsWith('public/')) {
    imagePath = imagePath.substring(7);
    console.log(`Removed 'public/' prefix: ${originalPath} -> ${imagePath}`);
  }
  
  // التأكد من أن المسار يبدأ بـ /
  if (!imagePath.startsWith('/')) {
    imagePath = '/' + imagePath;
    console.log(`Added leading slash: ${imagePath}`);
  }
  
  // استخراج الفئة من المسار
  const categoryMatch = imagePath.match(/\/images\/([^\/]+)\//);
  const category = categoryMatch ? categoryMatch[1].toLowerCase() : null;
  
  // إذا لم تكن الصورة موجودة، استخدم بديلاً مناسباً
  if (typeof window === 'undefined') {
    // في جانب الخادم، استخدم require('fs') للتحقق من وجود الملف
    try {
      const fs = require('fs');
      const fullPath = `./public${imagePath}`;
      
      if (!fs.existsSync(fullPath)) {
        // الصورة غير موجودة، استخدم صورة بديلة
        console.log(`Image not found at: ${fullPath}`);
        
        if (category) {
          // حاول العثور على صورة بديلة في نفس فئة الصورة الأصلية
          const fallbackPath = getDefaultImage(category);
          console.log(`Using category default: ${fallbackPath}`);
          return fallbackPath;
        }
        
        // استخدم الصورة الافتراضية العامة
        console.log('Using general default image');
        return getDefaultImage();
      }
    } catch (error) {
      console.error('Error checking image existence:', error);
      return getDefaultImage();
    }
  }
  
  return imagePath;
}

/**
 * Function to get default images for each category
 */
export function getDefaultImage(category?: string): string {
  if (!category) {
    return '/images/blog/Blog_uniforms.jpg';
  }
  
  // Map of default images for each category
  const defaultImages: Record<string, string> = {
    'aviation': '/images/blog/Blog_uniforms.jpg',
    'healthcare': '/images/blog/Blog_uniforms.jpg',
    'hospitality': '/images/blog/Blog_uniforms.jpg',
    'education': '/images/blog/Blog_uniforms.jpg',
    'security': '/images/blog/Blog_uniforms.jpg',
    'industrial': '/images/blog/Blog_uniforms.jpg',
    'government': '/images/blog/Blog_uniforms.jpg',
    'blog': '/images/blog/Blog_uniforms.jpg'
  };
  
  return defaultImages[category.toLowerCase()] || '/images/blog/Blog_uniforms.jpg';
}

/**
 * الحصول على صورة بديلة إذا لم تكن الصورة الأصلية متوفرة
 */
export function getFallbackImage(category: string): string {
  if (!category) {
    return getDefaultImage();
  }
  
  // تحويل اسم الفئة إلى حروف صغيرة وإزالة أي مسافات
  const normalizedCategory = category.toLowerCase().trim();
  
  const fallbacks: Record<string, string[]> = {
    aviation: [
      '/images/blog/Blog_uniforms.jpg'
    ],
    healthcare: [
      '/images/blog/Blog_uniforms.jpg'
    ],
    hospitality: [
      '/images/blog/Blog_uniforms.jpg'
    ],
    education: [
      '/images/blog/Blog_uniforms.jpg'
    ],
    security: [
      '/images/blog/Blog_uniforms.jpg'
    ],
    industrial: [
      '/images/blog/Blog_uniforms.jpg'
    ],
    government: [
      '/images/blog/Blog_uniforms.jpg'
    ]
  };
  
  // Attempt to find the first available image in the fallback list
  if (fallbacks[normalizedCategory]) {
    if (typeof window === 'undefined') {
      try {
        const fs = require('fs');
        
        for (const path of fallbacks[normalizedCategory]) {
          const fullPath = `./public${path}`;
          if (fs.existsSync(fullPath)) {
            console.log(`Found fallback image for ${normalizedCategory}: ${path}`);
            return path;
          }
        }
      } catch (error) {
        console.error('Error checking fallback images:', error);
      }
    }
    
    // If we can't check, return the first option
    console.log(`Using first fallback for ${normalizedCategory}: ${fallbacks[normalizedCategory][0]}`);
    return fallbacks[normalizedCategory][0];
  }
  
  console.log(`No fallbacks found for category: ${normalizedCategory}, using general default image`);
  return getDefaultImage();
}

/**
 * تسجيل الأخطاء المتعلقة بتحميل الصور للتشخيص
 */
export function logImageError(imagePath: string, error?: any): void {
  console.error(`Failed to load image: ${imagePath}`, error || '');
}

/**
 * التحقق من وجود ملف الصورة
 * ملاحظة: تعمل فقط على جانب الخادم
 */
export async function checkImageExists(path: string): Promise<boolean> {
  if (!path) {
    console.log('Empty path provided to checkImageExists');
    return false;
  }
  
  try {
    if (typeof window === 'undefined') {
      const fs = require('fs');
      const fullPath = `./public${path.startsWith('/') ? path : '/' + path}`;
      const exists = fs.existsSync(fullPath);
      console.log(`Checking if image exists: ${fullPath} - Result: ${exists}`);
      return exists;
    }
    return true; // على جانب العميل، نفترض أن الصورة موجودة
  } catch (error) {
    console.error(`Error checking if image exists: ${path}`, error);
    return false;
  }
}