const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// قائمة بمسارات الصور الكبيرة المتبقية
const largeImages = [
  'public/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
  'public/images/education/School_uniform_manufacturer.jpg',
  'public/images/government/Government_sector_uniform_supply.jpg',
  'public/images/healthcare/Medical_scrubs_supplier_for_hospitals.jpg'
];

// إعدادات الضغط
const compressionOptions = {
  jpg: {
    quality: 80,
    chromaSubsampling: '4:2:0'
  }
};

// دالة لضغط صورة واحدة
async function compressImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    const fileNameWithExt = path.basename(imagePath);
    const dirName = path.dirname(imagePath);
    
    // إنشاء مسار الوجهة المضغوطة
    const compressedPath = path.join(dirName, 'compressed_' + fileNameWithExt);
    
    console.log(`🔍 جاري ضغط الصورة: ${imagePath}`);
    
    // الحصول على حجم الملف الأصلي
    const originalSize = fs.statSync(imagePath).size;
    const originalMB = (originalSize / 1048576).toFixed(2);
    
    // تطبيق الضغط بناءً على نوع الملف
    if (ext === '.jpg' || ext === '.jpeg') {
      // ضغط الصورة وحفظها في مسار الوجهة
      await sharp(imagePath)
        .jpeg(compressionOptions.jpg)
        .toFile(compressedPath);
      
      // الحصول على حجم الملف الجديد
      const newSize = fs.statSync(compressedPath).size;
      const newMB = (newSize / 1048576).toFixed(2);
      const savingPercentage = (((originalSize - newSize) / originalSize) * 100).toFixed(2);
      
      // حذف الملف الأصلي وإعادة تسمية الملف المضغوط
      try {
        // محاولة حذف الملف الأصلي
        fs.unlinkSync(imagePath);
        
        // إعادة تسمية الملف المضغوط إلى اسم الملف الأصلي
        fs.renameSync(compressedPath, imagePath);
        
        console.log(`✅ تم ضغط الصورة بنجاح: ${imagePath}`);
        console.log(`   الحجم الأصلي: ${originalMB} MB`);
        console.log(`   الحجم الجديد: ${newMB} MB`);
        console.log(`   نسبة التوفير: ${savingPercentage}%`);
      } catch (error) {
        console.log(`⚠️ تم ضغط الصورة لكن تعذر استبدال الملف الأصلي.`);
        console.log(`   يمكنك العثور على النسخة المضغوطة في: ${compressedPath}`);
        console.log(`   الحجم الأصلي: ${originalMB} MB`);
        console.log(`   الحجم الجديد: ${newMB} MB`);
        console.log(`   نسبة التوفير: ${savingPercentage}%`);
      }
    } else {
      console.log(`⚠️ نوع الملف غير مدعوم للضغط: ${imagePath}`);
      return;
    }
  } catch (error) {
    console.error(`❌ خطأ أثناء ضغط الصورة ${imagePath}:`, error.message);
  }
}

// دالة لضغط جميع الصور
async function compressRemainingImages() {
  console.log('🔍 بدء عملية ضغط الصور الكبيرة المتبقية...');
  
  for (const imagePath of largeImages) {
    // التحقق من وجود الصورة
    if (fs.existsSync(imagePath)) {
      await compressImage(imagePath);
    } else {
      console.log(`⚠️ الصورة غير موجودة: ${imagePath}`);
    }
  }
  
  console.log('\n✅ اكتملت عملية ضغط الصور المتبقية!');
}

// تنفيذ عملية الضغط
compressRemainingImages().catch(err => console.error('حدث خطأ:', err)); 