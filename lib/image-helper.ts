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
  
  // تحقق من مسار الصور في المجلد العام
  // لمسارات المجلد public/images/category_name/image.jpg
  if (normalizedSrc.includes('/images/') && !normalizedSrc.startsWith('/public/')) {
    // المسار صحيح ولا يحتاج لتعديل إضافي
    return normalizedSrc;
  }
  
  // تحديد ما إذا كنا في بيئة Netlify
  const isNetlify = typeof window !== 'undefined' 
    ? (window.location.hostname.includes('netlify.app') || 
       window.location.hostname.includes('netlify.com'))
    : (process.env.NETLIFY === 'true' || process.env.NEXT_PUBLIC_NETLIFY === 'true');

  // ملاحظة: قد نحتاج إلى تعديل basePath حسب بيئة النشر
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
  // تحديد الصور الاحتياطية الأساسية لكل فئة
  const primaryFallbacks: Record<string, string> = {
    aviation: '/images/aviation/aviation_uniforms.jpg',
    healthcare: '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
    hospitality: '/images/hospitality/Hospitality_uniforms.jpeg',
    education: '/images/education/School_uniforms.jpg',
    security: '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg',
    industrial: '/images/industrial/industrial_uniforms.jpg',
    government: '/images/government/Government_uniforms.jpg',
  };
  
  // تحديد صور احتياطية للصور المحددة في المقالات الجديدة
  const specificFallbacks: Record<string, string> = {
    'heat_management.jpg': '/images/security/Security_workwear.jpeg',
    'inventory_management.jpg': '/images/security/managed_security_uniform_programs.jpeg',
    'professional_uniforms.jpg': '/images/security/authoritative_security_appearance.jpeg',
    'temperature_regulation.jpg': '/images/security/breathable_security_shirts.jpeg',
    'uniform_colors.jpg': '/images/security/Security_uniform_companies.jpeg',
    'biodigital_integration.jpg': '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
    'uniform_comfort.jpg': '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
    'hotel_uniforms.jpg': '/images/hospitality/Hospitality_uniforms.jpeg',
    'maintenance_attire.jpg': '/images/hospitality/Hospitality_uniforms.jpeg',
    'procurement_process.jpg': '/images/government/Government_uniform_tenders_procurement.jpg'
  };
  
  // البحث عن اسم الملف المحدد في الصورة
  if (category.includes('/')) {
    const fileName = category.split('/').pop() || '';
    if (specificFallbacks[fileName]) {
      return specificFallbacks[fileName];
    }
  }
  
  // الرجوع إلى الصورة الاحتياطية للفئة إذا كانت موجودة
  if (primaryFallbacks[category]) {
    return primaryFallbacks[category];
  }
  
  // الرجوع إلى صورة افتراضية إذا لم يتم العثور على صورة احتياطية مناسبة
  return '/images/placeholder-image.jpg';
}