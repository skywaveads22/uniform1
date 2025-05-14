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
  // تحديد المجلدات الرئيسية للصور حسب الفئة
  const primaryFallbacks: Record<string, string> = {
    aviation: '/images/aviation/aviation_uniforms.jpg',
    healthcare: '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
    hospitality: '/images/hospitality/Hospitality_uniforms.jpeg',
    education: '/images/education/School_uniforms.jpg',
    security: '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg',
    industrial: '/images/industrial/industrial_uniforms.jpg',
    government: '/images/government/Government_uniforms.jpg',
  };
  
  // صور محددة للمقالات المعينة (المقالات الجديدة)
  const specificFallbacks: Record<string, string> = {
    // صور لمقالات الأمن
    'heat_management.jpg': '/images/security/Security_workwear.jpeg',
    'inventory_management.jpg': '/images/security/managed_security_uniform_programs.jpeg',
    'professional_uniforms.jpg': '/images/security/authoritative_security_appearance.jpeg',
    'temperature_regulation.jpg': '/images/security/breathable_security_shirts.jpeg',
    'uniform_colors.jpg': '/images/security/Security_uniform_companies.jpeg',
    
    // صور للمقالات الطبية
    'biodigital_integration.jpg': '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
    'uniform_comfort.jpg': '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
    
    // صور لمقالات الضيافة
    'hotel_uniforms.jpg': '/images/hospitality/Hospitality_uniforms.jpeg',
    'maintenance_attire.jpg': '/images/hospitality/Hospitality_uniforms.jpeg',
    
    // صور لمقالات الحكومة
    'procurement_process.jpg': '/images/government/Government_uniform_tenders_procurement.jpg'
  };
  
  // صور محددة للصفحات المطلوبة بالتحديد في المهمة
  const pageSpecificImages: Record<string, string> = {
    // المدارس والتعليم
    'kindergarten-uniforms-prioritizing-comfort-safety-and-playfulness': '/images/education/School_uniforms.jpg',
    'benefits-of-school-uniforms-in-fostering-discipline-and-equality-in-saudi-schools': '/images/education/Uniform_discipline.jpg',
    'fabric-guide-best-materials-for-student-uniforms': '/images/education/Uniform_fabrics.jpg',
    'designing-culturally-appropriate-school-uniforms-in-saudi-arabia': '/images/education/Cultural_school_uniforms.jpg',
    'choosing-durable-and-comfortable-school-uniforms-for-the-ksa-climate': '/images/education/Durable_school_uniforms.jpg',
    'accessorizing-school-uniforms-approved-items-in-ksa-schools': '/images/education/School_accessories.jpg',
    'iron-free-school-uniform-options-a-parent-s-guide': '/images/education/Iron_free_uniforms.jpg',
    
    // الرعاية الصحية
    'footwear-guide-for-healthcare-workers-prioritizing-comfort-and-safety': '/images/healthcare/Healthcare_footwear.jpg',
    'infection-control-features-in-modern-healthcare-uniforms': '/images/healthcare/Infection_control_uniforms.jpg',
    'head-coverings-and-modesty-considerations-in-saudi-healthcare-uniforms': '/images/healthcare/Modest_healthcare_uniforms.jpg',
    'breathable-fabrics-for-medical-staff-working-in-hot-saudi-climates': '/images/healthcare/Breathable_medical_uniforms.jpg',
    'choosing-the-right-scrubs-for-saudi-hospitals-comfort-hygiene-and-professionalism': '/images/healthcare/Hospital_scrubs.jpg',
    'different-uniform-needs-doctors-vs-nurses-vs-lab-technicians-vs-support-staff-in-ksa': '/images/healthcare/Staff_uniform_differences.jpg',
    'the-impact-of-uniform-comfort-on-healthcare-worker-performance': '/images/healthcare/Comfortable_medical_wear.jpg',
    'biodigital-integration-architecture-advanced-attire-systems-for-healthcare-performance-optimization-2025': '/images/healthcare/Advanced_medical_technology.jpg',
    
    // الحكومة
    'dress-codes-and-uniform-policies-in-saudi-public-sector-offices': '/images/government/Public_sector_dress_code.jpg',
    'ensuring-comfort-for-government-employees-working-outdoors-in-ksa': '/images/government/Outdoor_government_uniforms.jpg',
    'durable-workwear-for-field-operatives-in-government-agencies': '/images/government/Field_operative_workwear.jpg',
    'procurement-processes-for-government-uniforms-in-saudi-arabia': '/images/government/Government_uniform_tenders_procurement.jpg',
    'ceremonial-vs-duty-uniforms-for-saudi-government-officials': '/images/government/Ceremonial_uniforms.jpg',
    'choosing-appropriate-fabrics-for-official-government-attire-in-the-saudi-climate': '/images/government/Government_fabrics.jpg',
    'incorporating-national-symbols-and-colors-in-government-uniform-design': '/images/government/National_symbols_uniforms.jpg',
    'uniform-standards-across-different-saudi-government-ministries-a-comparative-look': '/images/government/Ministry_uniform_standards.jpg',
    
    // الضيافة
    'case-study-rebranding-a-saudi-hotel-through-new-uniform-concepts': '/images/hospitality/Hotel_rebranding.jpeg',
    'climate-appropriate-uniforms-for-outdoor-hospitality-staff-in-saudi-arabia': '/images/hospitality/Outdoor_hospitality_uniforms.jpeg',
    'designing-hotel-uniforms-that-balance-functionality-and-brand-identity': '/images/hospitality/Hotel_branding_uniforms.jpeg',
    'operational-attire-engineering-advanced-comfort-systems-for-hospitality-maintenance-personnel-': '/images/hospitality/Maintenance_attire.jpeg',
    'material-science-architecture-advanced-substrate-engineering-for-hospitality-performance-enhancement-2025': '/images/hospitality/Advanced_hospitality_materials.jpeg',

    // الأمن
    'future-trends-integrating-wearable-technology-into-security-uniforms': '/images/security/Wearable_security_tech.jpeg',
    'advanced-materials-in-security-equipment': '/images/security/Advanced_security_materials.jpeg',
    'temperature-regulating-fabrics-for-security-uniforms-in-saudi-arabia': '/images/security/Temperature_regulation.jpeg',
    'bulk-ordering-and-inventory-management-for-security-firms-in-ksa': '/images/security/Security_inventory.jpeg',
    'heat-management-technologies-for-security-operations': '/images/security/Heat_management.jpeg',
    'color-choices-for-security-uniforms-practicality-and-perception': '/images/security/Security_colors.jpeg',
    'designing-authoritative-and-professional-security-guard-uniforms-for-ksa': '/images/security/Professional_security_uniforms.jpeg',
    
    // الصناعة
    'layering-systems-for-varying-temperatures-in-industrial-settings': '/images/industrial/Layering_systems.jpg',
    'ergonomic-optimization-architecture-advanced-systems-for-workplace-injury-prevention-2025': '/images/industrial/Ergonomic_workwear.jpg',
    
    // صفحات أخرى
    'privacy-policy': '/images/placeholder-image.jpg',
  };
  
  // التحقق من وجود مسار محدد للصفحة
  if (category.includes('/blog/') || category.includes('/privacy-policy')) {
    // استخراج اسم الصفحة من المسار
    const pageName = category.split('/').pop() || '';
    
    // البحث في قائمة الصور المحددة للصفحات
    if (pageSpecificImages[pageName]) {
      return pageSpecificImages[pageName];
    }
  }
  
  // البحث عن اسم الملف المحدد في الصورة (للصور المحددة مثل heat_management.jpg)
  if (category.includes('/')) {
    const fileName = category.split('/').pop() || '';
    if (specificFallbacks[fileName]) {
      return specificFallbacks[fileName];
    }
  }
  
  // البحث عن صورة بديلة حسب الفئة
  for (const cat of Object.keys(primaryFallbacks)) {
    if (category.includes(cat)) {
      return primaryFallbacks[cat];
    }
  }
  
  // الرجوع إلى الصورة الاحتياطية للفئة إذا كانت موجودة
  if (primaryFallbacks[category]) {
    return primaryFallbacks[category];
  }
  
  // الرجوع إلى صورة افتراضية إذا لم يتم العثور على صورة احتياطية مناسبة
  return '/images/placeholder-image.jpg';
}