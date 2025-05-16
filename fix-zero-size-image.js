const fs = require('fs');
const path = require('path');

// المسارات
const sourceImagePath = path.join(__dirname, 'public', 'images', 'author', 'Turki_Alarabi.png');
const destinationImagePath = path.join(__dirname, 'public', 'images', 'author', 'default-author.jpg');

// التحقق من وجود الصورة المصدر
if (!fs.existsSync(sourceImagePath)) {
  console.error(`الصورة المصدر غير موجودة: ${sourceImagePath}`);
  process.exit(1);
}

// نسخ الصورة
try {
  fs.copyFileSync(sourceImagePath, destinationImagePath);
  console.log(`✅ تم استبدال الصورة ذات الحجم صفر بنجاح: ${destinationImagePath}`);
} catch (error) {
  console.error(`حدث خطأ أثناء نسخ الصورة:`, error);
} 