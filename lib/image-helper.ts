/**
 * Helper function to properly format image paths for both development and production environments
 * Handles paths consistently across localhost and Netlify deployments
 */
export function getImagePath(src: string): string {
  // إذا كان المسار URL خارجي، أعده كما هو
  if (src && (src.startsWith('http') || src.startsWith('https'))) {
    return src;
  }

  // إذا كان المسار فارغًا أو غير محدد، استخدم صورة افتراضية
  if (!src) {
    return '/images/placeholder-image.jpg';
  }

  // تعامل مع الإشارات إلى دليل public
  if (src.startsWith('public/')) {
    src = src.replace('public/', '/');
  }

  // تأكد من أن المسار يبدأ بشرطة مائلة
  if (!src.startsWith('/')) {
    src = '/' + src;
  }

  // تحديد ما إذا كنا في بيئة Netlify
  // لاحظ: يجب أن تكون هذه المتغيرات موجودة في ملف netlify.toml
  const isNetlify = 
    typeof window !== 'undefined' 
      ? window.location.hostname.includes('netlify.app') 
      : process.env.NETLIFY === 'true' || process.env.NEXT_PUBLIC_NETLIFY === 'true';

  // في بيئة التطوير المحلية نضيف /uniform1 إلى المسار
  // في بيئة Netlify لا نضيف أي prefix
  const basePath = (!isNetlify && process.env.NODE_ENV === 'development') ? '/uniform1' : '';

  return `${basePath}${src}`;
} 