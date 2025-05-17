/**
 * سكريبت لتحديث مكونات الصور في جميع صفحات المقالات
 * يوفر التعليمات اللازمة لتطبيق الحل على كل ملف
 */

const fs = require('fs');
const path = require('path');

/**
 * المسار الأساسي لمجلد المدونة
 * @type {string}
 */
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');

/**
 * قائمة بالتعديلات المطلوبة في الملفات
 * @type {Array<{search: RegExp, replace: string}>}
 */
const REPLACEMENTS = [
  // إضافة استيراد مكون ArticleImage ووظيفة getValidImagePath
  {
    search: /import Image from ['"]next\/image['"];/,
    replace: `import Image from 'next/image';\nimport ArticleImage from '@/components/ArticleImage';\nimport { getValidImagePath } from '@/lib/image-helper';`
  },
  // استبدال مكون Image بمكون ArticleImage مع الخصائص الإضافية
  {
    search: /<Image\s+src=["']([^"']+)["']\s+alt=["']([^"']+)["']\s+([^/>]+)\s*\/>/g,
    replace: (match, src, alt, props) => {
      return `<ArticleImage
      src={getValidImagePath("${src}")}
      alt="${alt}"
      ${props}
      priority
    />`;
    }
  },
  // توفير حل بديل للاستخدام المختلف لمكون Image
  {
    search: /<Image\s+([^>]+)src=["']([^"']+)["']\s+([^/>]+)\s*\/>/g,
    replace: (match, prefix, src, suffix) => {
      return `<ArticleImage ${prefix}src={getValidImagePath("${src}")} ${suffix} />`;
    }
  }
];

/**
 * تلميحات للتطبيق اليدوي للتغييرات
 */
const INSTRUCTIONS = `
لتطبيق تعديلات الصور على جميع صفحات المقالات، اتبع الخطوات التالية:

1. إضافة استيراد ArticleImage وgetValidImagePath في بداية كل ملف:
   import ArticleImage from '@/components/ArticleImage';
   import { getValidImagePath } from '@/lib/image-helper';

2. استبدال كل استخدام لمكون Image بـ ArticleImage:
   <Image src="/path/to/image.jpg" alt="وصف الصورة" ... />
   
   يصبح:
   
   <ArticleImage src={getValidImagePath("/path/to/image.jpg")} alt="وصف الصورة" ... priority />

3. إذا كانت هناك صور متعددة في النفس الصفحة، تأكد من تطبيق التغيير على جميعها.

4. تأكد من إعطاء الصورة الرئيسية خاصية priority لتحميلها بشكل أسرع.

5. تأكد دائماً من وجود سمة alt مع وصف مناسب للصورة لتحسين إمكانية الوصول وSEO.

ملاحظة: يمكن تحديث ملفات المقالات بشكل تلقائي باستخدام أداة مثل sed أو برنامج جماعي آخر.
`;

// طباعة التعليمات
console.log(INSTRUCTIONS);

// تحقق من وجود المجلد
if (!fs.existsSync(BLOG_DIR)) {
  console.error(`Error: Blog directory not found at ${BLOG_DIR}`);
  process.exit(1);
}

// الحصول على قائمة بجميع المجلدات داخل مجلد المدونة
const directories = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .filter(dirent => !dirent.name.startsWith('[') && dirent.name !== 'category')
  .map(dirent => dirent.name);

console.log(`Found ${directories.length} blog post directories`);

// نموذج للتحديث التلقائي (يحتاج إلى مزيد من التطوير)
/*
for (const dir of directories) {
  const pagePath = path.join(BLOG_DIR, dir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    console.log(`Processing: ${pagePath}`);
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // تطبيق التعديلات
    for (const { search, replace } of REPLACEMENTS) {
      content = content.replace(search, replace);
    }
    
    // حفظ التغييرات
    fs.writeFileSync(pagePath, content, 'utf8');
  }
}
*/

// طباعة قائمة الملفات التي تحتاج إلى تحديث
console.log('Files that need updating:');
for (const dir of directories) {
  const pagePath = path.join(BLOG_DIR, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    console.log(pagePath);
  }
} 