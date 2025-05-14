/**
 * دالة بسيطة لتنسيق مسارات الصور بشكل صحيح
 */
export function getImagePath(src: string): string {
  // التحقق من صحة المدخلات
  if (!src) {
    return '/placeholder-image.jpg';
  }
  
  // إذا كان المسار URL خارجي، نعيده كما هو
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // التأكد من أن المسار يبدأ بشرطة مائلة
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  // تحديد ما إذا كنا في بيئة Netlify
  const isNetlify = typeof window !== 'undefined' 
    ? (window.location.hostname.includes('netlify.app') || 
       window.location.hostname.includes('netlify.com'))
    : (process.env.NETLIFY === 'true' || process.env.NEXT_PUBLIC_NETLIFY === 'true');

  // ملاحظة: قد نحتاج إلى تعديل basePath حسب بيئة النشر
  // حالياً نستخدم '/uniform1' محلياً فقط
  const basePath = (!isNetlify) ? '/uniform1' : '';
  
  // عائد المسار النهائي
  return `${basePath}${normalizedSrc}`;
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
  try {
    if (typeof window === 'undefined') {
      const fs = require('fs');
      const fullPath = `./public${path.replace('/uniform1', '')}`;
      return fs.existsSync(fullPath);
    }
    return true; // على جانب العميل، نفترض أن الصورة موجودة
  } catch (error) {
    return false;
  }
}

/**
 * الحصول على صورة بديلة إذا لم تكن الصورة الأصلية متوفرة
 */
export function getFallbackImage(category: string): string {
  const fallbacks: Record<string, string> = {
    aviation: '/images/aviation/aviation_uniforms.jpg',
    healthcare: '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
    hospitality: '/images/hospitality/Hospitality_uniforms.jpeg',
    education: '/images/education/School_uniforms.jpg',
    security: '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg',
    default: '/images/placeholder-image.jpg'
  };
  
  return fallbacks[category] || fallbacks.default;
}