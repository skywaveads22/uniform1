const fs = require('fs');
const path = require('path');

// المسار إلى ملف المقالات
const articlesFile = path.join(process.cwd(), 'articles.md');

// قراءة محتوى الملف
function updateLinks() {
  try {
    const content = fs.readFileSync(articlesFile, 'utf8');
    
    // استبدال الروابط بحيث نزيل الدومين ونبدأ مباشرة بـ /blog
    const updatedContent = content.replace(/\(https:\/\/uniformsa\.com(\/blog\/[^)]+)\)/g, '($1)');
    
    // كتابة المحتوى المحدث في الملف
    fs.writeFileSync(articlesFile, updatedContent, 'utf8');
    
    console.log('تم تحديث الروابط بنجاح في ملف articles.md');
  } catch (error) {
    console.error('حدث خطأ أثناء تحديث الروابط:', error.message);
  }
}

// تنفيذ الدالة
updateLinks(); 