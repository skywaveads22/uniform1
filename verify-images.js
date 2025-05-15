const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// قائمة بامتدادات الصور المدعومة
const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.avif', '.ico'];

// تخزين نتائج الفحص
const results = {
  total: 0,
  broken: [],
  zeroSize: [],
  largeImages: [],
  missingAlt: [],
  duplicateNames: {}
};

// فحص حجم وصحة الصور
async function checkImageIntegrity(dir = 'public') {
  console.log(`🔍 فحص الصور في المجلد: ${dir}`);
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await checkImageIntegrity(fullPath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        
        if (validExtensions.includes(ext)) {
          results.total++;
          
          // فحص حجم الملف
          const fileStats = await stat(fullPath);
          
          const relativePath = fullPath.replace(/^public/, '');
          
          // تحقق من الصور ذات الحجم صفر
          if (fileStats.size === 0) {
            results.zeroSize.push(relativePath);
          }
          
          // تحقق من الصور الكبيرة جداً (أكبر من 1 ميجابايت)
          if (fileStats.size > 1000000) {
            results.largeImages.push({
              path: relativePath,
              size: (fileStats.size / 1048576).toFixed(2) + ' MB'
            });
          }
          
          // تحقق من وجود نسخ متعددة من نفس الاسم بامتدادات مختلفة
          const baseName = path.basename(entry.name, ext);
          const dirName = path.basename(dir);
          const categoryKey = `${dirName}/${baseName}`;
          
          if (!results.duplicateNames[categoryKey]) {
            results.duplicateNames[categoryKey] = [];
          }
          
          results.duplicateNames[categoryKey].push(relativePath);
        }
      }
    }
  } catch (error) {
    console.error(`خطأ أثناء فحص المجلد ${dir}:`, error.message);
  }
}

// البحث عن الصور التي تفتقر لسمة alt
async function findImagesWithoutAlt(dir = '.') {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // تجاهل المجلدات التي لا تحتوي على كود
        if (!['node_modules', '.next', '.git', 'build', 'dist', 'public'].includes(entry.name)) {
          await findImagesWithoutAlt(fullPath);
        }
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        
        // فحص ملفات الكود فقط
        if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          // البحث عن وسوم الصور بدون سمة alt
          const imageElements = content.match(/<Image[^>]*src=["'][^"']+["'][^>]*>/g) || [];
          const imgElements = content.match(/<img[^>]*src=["'][^"']+["'][^>]*>/g) || [];
          
          const allElements = [...imageElements, ...imgElements];
          
          for (const element of allElements) {
            if (!element.includes('alt=')) {
              results.missingAlt.push({
                file: fullPath,
                element: element.slice(0, 100) + (element.length > 100 ? '...' : '')
              });
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(`خطأ أثناء فحص ملفات الكود في المجلد ${dir}:`, error.message);
  }
}

// تنظيف النتائج بإزالة العناصر الفردية من قائمة التكرارات
function cleanupDuplicateResults() {
  const realDuplicates = {};
  
  for (const [key, paths] of Object.entries(results.duplicateNames)) {
    if (paths.length > 1) {
      realDuplicates[key] = paths;
    }
  }
  
  results.duplicateNames = realDuplicates;
}

// كتابة نتائج الفحص إلى ملف تقرير
function writeReport() {
  const reportContent = `# تقرير جودة الصور في الموقع

تاريخ التقرير: ${new Date().toLocaleString()}

## ملخص
- إجمالي عدد الصور: ${results.total}
- صور ذات حجم صفر: ${results.zeroSize.length}
- صور كبيرة الحجم (> 1MB): ${results.largeImages.length}
- صور بدون سمة alt: ${results.missingAlt.length}
- مجموعات صور متكررة: ${Object.keys(results.duplicateNames).length}

## التفاصيل

${results.zeroSize.length > 0 ? `
### صور ذات حجم صفر
${results.zeroSize.map(path => `- \`${path}\``).join('\n')}
` : ''}

${results.largeImages.length > 0 ? `
### صور كبيرة الحجم (> 1MB)
${results.largeImages.map(img => `- \`${img.path}\` (${img.size})`).join('\n')}
` : ''}

${results.missingAlt.length > 0 ? `
### صور بدون سمة alt (أول 10 نتائج)
${results.missingAlt.slice(0, 10).map(item => `- في الملف \`${item.file}\`:\n  \`${item.element}\``).join('\n\n')}
` : ''}

${Object.keys(results.duplicateNames).length > 0 ? `
### صور متكررة بأسماء متشابهة
${Object.entries(results.duplicateNames)
  .map(([key, paths]) => `#### ${key}\n${paths.map(p => `- \`${p}\``).join('\n')}`)
  .join('\n\n')}
` : ''}

## التوصيات

1. ${results.zeroSize.length > 0 ? 'قم بإصلاح أو استبدال الصور ذات الحجم صفر.' : 'لا توجد صور ذات حجم صفر. 👍'}
2. ${results.largeImages.length > 0 ? 'قم بضغط الصور الكبيرة لتحسين أداء الموقع.' : 'جميع الصور ذات حجم مناسب. 👍'}
3. ${results.missingAlt.length > 0 ? 'أضف سمة alt للصور التي تفتقر إليها لتحسين إمكانية الوصول وSEO.' : 'جميع الصور تحتوي على سمة alt. 👍'}
4. ${Object.keys(results.duplicateNames).length > 0 ? 'قم بمراجعة الصور المتكررة وحذف النسخ غير الضرورية.' : 'لا توجد صور متكررة. 👍'}
`;

  fs.writeFileSync('image-quality-report.md', reportContent, 'utf8');
  console.log('✅ تم إنشاء تقرير جودة الصور في ملف image-quality-report.md');
}

// الدالة الرئيسية
async function verifyImages() {
  console.log('🔍 بدء التحقق من جودة الصور في الموقع...');
  
  await checkImageIntegrity();
  console.log(`✅ تم فحص ${results.total} صورة.`);
  
  await findImagesWithoutAlt();
  console.log('✅ تم فحص سمة alt في جميع عناصر الصور.');
  
  cleanupDuplicateResults();
  
  writeReport();
  
  // عرض ملخص النتائج في وحدة التحكم
  console.log('\n📊 ملخص النتائج:');
  console.log(`- إجمالي عدد الصور: ${results.total}`);
  console.log(`- صور ذات حجم صفر: ${results.zeroSize.length}`);
  console.log(`- صور كبيرة الحجم (> 1MB): ${results.largeImages.length}`);
  console.log(`- صور بدون سمة alt: ${results.missingAlt.length}`);
  console.log(`- مجموعات صور متكررة: ${Object.keys(results.duplicateNames).length}`);
}

// تنفيذ السكريبت
verifyImages().catch(err => console.error('حدث خطأ:', err)); 