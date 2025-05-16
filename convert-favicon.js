const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const favicons = require('favicons');

// المسارات
const sourceIcon = path.join(__dirname, 'public', 'favicon.svg');
const outputDir = path.join(__dirname, 'public');

// إنشاء صور favicon بأحجام مختلفة
async function generateFavicons() {
  try {
    console.log('بدء إنشاء الـ favicons...');

    // التحقق من وجود الملف المصدر
    if (!fs.existsSync(sourceIcon)) {
      console.error('ملف favicon.svg غير موجود!');
      return;
    }

    // إنشاء favicon.ico وأيقونات أخرى متعددة الأحجام
    const config = {
      path: '/', // المسار للويب
      appName: 'UniformSA',
      appShortName: 'UniformSA',
      appDescription: 'Premium Uniform Solutions',
      background: '#0066CC',
      theme_color: '#0066CC',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        windows: false,
        yandex: false
      }
    };

    console.log('إنشاء جميع الصور المطلوبة...');
    const response = await favicons(sourceIcon, config);

    // حفظ الملفات
    response.images.forEach(image => {
      fs.writeFileSync(path.join(outputDir, image.name), image.contents);
    });

    // حفظ الملفات HTML (اختياري)
    // response.files.forEach(file => {
    //   fs.writeFileSync(path.join(outputDir, file.name), file.contents);
    // });

    console.log('تم إنشاء جميع ملفات الأيقونات بنجاح!');
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
}

// تنفيذ السكريبت
generateFavicons(); 