const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// المسارات
const sourceIcon = path.join(__dirname, 'public', 'favicon.svg');
const outputDir = path.join(__dirname, 'public');

// الأحجام المطلوبة لأيقونات الفافيكون
const sizes = [16, 32, 48, 64, 128, 256];

// إنشاء favicon.ico مباشرة
async function createFavicon() {
  try {
    console.log('بدء إنشاء أيقونات الموقع...');

    // التحقق من وجود ملف المصدر
    if (!fs.existsSync(sourceIcon)) {
      console.error('ملف favicon.svg غير موجود!');
      return;
    }

    // إنشاء صور PNG بأحجام مختلفة
    const promises = sizes.map(async (size) => {
      const outputPath = path.join(outputDir, `favicon-${size}.png`);
      console.log(`إنشاء أيقونة بحجم ${size}x${size} بكسل...`);
      
      await sharp(sourceIcon)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      return { size, path: outputPath };
    });

    await Promise.all(promises);
    
    console.log('تم إنشاء صور الأيقونات بنجاح!');

    // إنشاء ملف favicon.png الرئيسي (سيكون بالحجم الأكبر)
    await sharp(sourceIcon)
      .resize(256, 256)
      .png()
      .toFile(path.join(outputDir, 'favicon.png'));

    // لإنشاء ملف favicon.ico ستحتاج إلى استخدام ico-convert أو أداة أخرى خارجية
    // أو يمكنك استخدام الملف favicon.png في HTML مباشرة

    console.log('تم إنشاء جميع الأيقونات بنجاح!');
    console.log('استخدم الملف favicon.png في ترويسة HTML الخاصة بك:');
    console.log('<link rel="icon" type="image/png" href="/favicon.png">');
    
    // ملحوظة للمطور حول كيفية استخدام الأيقونات المختلفة
    console.log('\nلاستخدام أحجام مختلفة للأيقونات في ترويسة موقعك:');
    console.log('<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">');
    console.log('<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">');
    console.log('<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png">');
    console.log('<link rel="icon" type="image/png" sizes="256x256" href="/favicon-256.png">');
    console.log('<link rel="apple-touch-icon" sizes="256x256" href="/favicon-256.png">');
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
}

// تنفيذ السكريبت
createFavicon(); 