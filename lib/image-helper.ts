/**
 * دالة معالجة مسارات الصور لضمان عرضها بشكل صحيح
 */
export function getImagePath(src: string): string {
  // التحقق من صحة المدخلات
  if (!src) {
    return '/images/placeholder-image.jpg';
  }
  
  // إذا كان المسار URL خارجي، نعيده كما هو
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // التأكد من أن المسار يبدأ بشرطة مائلة
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  // تطبيع المسار للتأكد من أنه يتوافق مع التنسيق المطلوب
  const pathParts = normalizedSrc.split('/');
  
  // تحسين المسار للتأكد من تطابقه مع الهيكل المطلوب
  if (pathParts.includes('images') && pathParts.length >= 4) {
    // المسار يبدو صحيحًا (يحتوي على /images/category/filename.jpg)
    // لا نقوم بأي تعديلات إضافية على الهيكل
  } else if (normalizedSrc.includes('.jpg') || normalizedSrc.includes('.png') || normalizedSrc.includes('.jpeg') || normalizedSrc.includes('.svg')) {
    // المسار يبدو كمسار صورة ولكن قد لا يكون بالتنسيق المطلوب
    console.warn(`Image path may not follow the required format: ${normalizedSrc}`);
  }
  
  // بيئة Netlify تتطلب معالجة خاصة
  const isNetlify = typeof window !== 'undefined' 
    ? (window.location.hostname.includes('netlify.app') || 
       window.location.hostname.includes('netlify.com'))
    : (process.env.NETLIFY === 'true' || process.env.NEXT_PUBLIC_NETLIFY === 'true');

  // تعديل basePath حسب بيئة النشر
  const basePath = (!isNetlify) ? '' : '';
  
  // إرجاع المسار النهائي
  return `${basePath}${normalizedSrc}`;
}

/**
 * تسجيل الأخطاء المتعلقة بتحميل الصور للتشخيص
 */
export function logImageError(imagePath: string, error?: any): void {
  console.error(`Failed to load image: ${imagePath}`, error || '');
}

/**
 * الحصول على صورة بديلة إذا لم تكن الصورة الأصلية متوفرة
 */
export function getFallbackImage(category: string): string {
  const fallbacks: Record<string, string> = {
    aviation: '/images/aviation/aviation_placeholder.jpg',
    healthcare: '/images/healthcare/healthcare_placeholder.jpg',
    hospitality: '/images/hospitality/hospitality_placeholder.jpg',
    education: '/images/education/education_placeholder.jpg',
    government: '/images/government/government_placeholder.jpg',
    security: '/images/security/security_placeholder.jpg',
    industrial: '/images/industrial/industrial_placeholder.jpg',
    default: '/images/placeholder-image.jpg'
  };
  
  return fallbacks[category] || fallbacks.default;
}

/**
 * التحقق من صحة مسار الصورة وتنسيقه
 */
export function validateImagePath(path: string): boolean {
  // تجاهل URLs الخارجية 
  if (path.startsWith('http') || path.startsWith('https')) {
    return true;
  }
  
  // تطبيع المسار
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // تقسيم المسار للتحقق من هيكله
  const parts = normalizedPath.split('/');
  
  // التحقق من أن المسار يتبع النمط /images/category/filename.ext
  const hasCorrectStructure = (
    parts.includes('images') && 
    parts.length >= 4 && 
    (parts[parts.length - 1].includes('.jpg') || 
     parts[parts.length - 1].includes('.png') || 
     parts[parts.length - 1].includes('.jpeg') || 
     parts[parts.length - 1].includes('.svg'))
  );
  
  return hasCorrectStructure;
}