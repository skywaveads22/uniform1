/**
 * دالة بسيطة لتنسيق مسارات الصور بشكل صحيح
 */
export function getImagePath(src: string): string {
  // التحقق من صحة المدخلات
  if (!src || src === '/') {
    return '/images/education/School_uniforms.jpg';
  }
  
  // إذا كان المسار URL خارجي، نعيده كما هو
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // إزالة public/ من بداية المسار إذا وجدت
  let normalizedSrc = src;
  if (normalizedSrc.startsWith('public/')) {
    normalizedSrc = normalizedSrc.substring(7);
  }

  // التأكد من أن المسار يبدأ بشرطة مائلة
  if (!normalizedSrc.startsWith('/')) {
    normalizedSrc = `/${normalizedSrc}`;
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
        normalizedSrc = jpegPath;
      }
    }
    
    // التحقق من وجود الملف على جانب الخادم إذا أمكن
    if (typeof window === 'undefined') {
      try {
        const fs = require('fs');
        const fullPath = `./public${normalizedSrc}`;
        
        if (!fs.existsSync(fullPath)) {
          return getFallbackImage(category);
        }
      } catch (error) {
        return getFallbackImage(category);
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
    return '/images/education/School_uniforms.jpg';
  }
  
  // إزالة 'public/' من البداية إذا وجدت
  let imagePath = originalPath;
  if (imagePath.startsWith('public/')) {
    imagePath = imagePath.substring(7);
  }
  
  // التأكد من أن المسار يبدأ بـ /
  if (!imagePath.startsWith('/')) {
    imagePath = '/' + imagePath;
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
        if (category) {
          // حاول العثور على صورة بديلة في نفس فئة الصورة الأصلية
          const fallbackPath = getFallbackImage(category);
          return fallbackPath;
        }
        
        // استخدم الصورة الافتراضية العامة
        return '/images/default-article-image.jpg';
      }
    } catch (error) {
      return '/images/default-article-image.jpg';
    }
  }
  
  return imagePath;
}

/**
 * الحصول على صورة بديلة إذا لم تكن الصورة الأصلية متوفرة
 */
export function getFallbackImage(category: string): string {
  if (!category) {
    return '/images/default-article-image.jpg';
  }
  
  // تحويل اسم الفئة إلى حروف صغيرة وإزالة أي مسافات
  const normalizedCategory = category.toLowerCase().trim();
  
  const fallbacks: Record<string, string[]> = {
    aviation: [
      '/images/aviation/aviation_uniforms.jpg',
      '/images/aviation/Aviation_uniform_manufacturer.jpg'
    ],
    healthcare: [
      '/images/healthcare/Healthcare_uniforms.jpg',
      '/images/healthcare/Medical_staff_uniforms.jpg',
      '/images/healthcare/Doctor_uniforms_attire.jpg',
      '/images/healthcare/Nurse_uniforms.jpg'
    ],
    hospitality: [
      '/images/hospitality/Hotel_uniforms.jpeg',
      '/images/hospitality/Hotel_uniforms.jpeg',
      '/images/hospitality/Hotel_uniforms.jpeg'
    ],
    education: [
      '/images/education/School_uniforms.jpg',
      '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
      '/images/education/School_staff_uniforms.jpg'
    ],
    security: [
      '/images/security/Security_uniforms.jpeg',
      '/images/security/Security_guard_uniforms.jpeg',
      '/images/security/Security_company_uniforms.jpeg'
    ],
    industrial: [
      '/images/industrial/Industrial_uniforms.jpeg',
      '/images/industrial/industrial_uniform_fittings.jpeg',
      '/images/industrial/Safety_workwear_PPE_apparel.jpeg'
    ],
    government: [
      '/images/government/Government_uniforms.jpg',
      '/images/government/Civil_service_uniforms.jpg',
      '/images/government/Government_employee_uniforms.jpg'
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
            return path;
          }
        }
      } catch (error) {
        // Error checking fallback images
      }
    }
    
    // If we can't check, return the first option
    return fallbacks[normalizedCategory][0];
  }
  
  return '/images/default-article-image.jpg';
}

/**
 * تسجيل الأخطاء المتعلقة بتحميل الصور للتشخيص
 */
export function logImageError(imagePath: string, _error?: any): void {
  // Log image loading errors for debugging
}

/**
 * التحقق من وجود ملف الصورة
 * ملاحظة: تعمل فقط على جانب الخادم
 */
export async function checkImageExists(path: string): Promise<boolean> {
  if (!path) {
    return false;
  }
  
  try {
    if (typeof window === 'undefined') {
      const fs = require('fs');
      const fullPath = `./public${path.startsWith('/') ? path : '/' + path}`;
      const exists = fs.existsSync(fullPath);
      return exists;
    }
    return true; // على جانب العميل، نفترض أن الصورة موجودة
  } catch (_error) {
    return false;
  }
}
