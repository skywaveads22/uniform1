const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// قائمة بمسارات الصور الكبيرة التي تحتاج إلى ضغط
const largeImages = [
  'public/images/author/abdullah saad.png',
  'public/images/author/Abdullah_Alruwaili.png',
  'public/images/author/Fahad_Alqahtani.png',
  'public/images/author/Jameela_Alenazi.png',
  'public/images/author/Khalid_Alhanty.png',
  'public/images/author/Mai_Alruwaili.png',
  'public/images/author/Nasser_Alshihri.png',
  'public/images/author/Noura_Almutairi.png',
  'public/images/author/Rahaf_Alsibai.png',
  'public/images/author/Rakan_Alaser.png',
  'public/images/author/Saud_Alghamdi.png',
  'public/images/author/Turki_Alarabi.png',
  'public/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
  'public/images/education/School_uniform_manufacturer.jpg',
  'public/images/government/ChatGPT Image Apr 16, 2025, 04_41_40 PM.png',
  'public/images/government/ChatGPT Image Apr 16, 2025, 04_43_53 PM.png',
  'public/images/government/ChatGPT Image Apr 16, 2025, 04_49_33 PM.png',
  'public/images/government/Government_sector_uniform_supply.jpg',
  'public/images/healthcare/Medical_scrubs_supplier_for_hospitals.jpg'
];

// إعدادات الضغط
const compressionOptions = {
  png: {
    quality: 80,
    compressionLevel: 9,
    palette: true
  },
  jpg: {
    quality: 80,
    chromaSubsampling: '4:2:0'
  }
};

// نسخة احتياطية للصور قبل الضغط
const backupDir = path.join(__dirname, 'public', 'images', 'backup', 'large-images');

// إنشاء مجلد النسخة الاحتياطية إذا لم يكن موجوداً
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
  console.log(`🌟 تم إنشاء مجلد النسخة الاحتياطية: ${backupDir}`);
}

// دالة لضغط صورة واحدة
async function compressImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    const fileNameWithExt = path.basename(imagePath);
    const backupPath = path.join(backupDir, fileNameWithExt);
    
    // نسخ الصورة الأصلية كنسخة احتياطية
    fs.copyFileSync(imagePath, backupPath);
    
    // الحصول على حجم الملف الأصلي
    const originalSize = fs.statSync(imagePath).size;
    const originalMB = (originalSize / 1048576).toFixed(2);
    
    // تطبيق الضغط حسب نوع الصورة
    let sharpInstance = sharp(imagePath);
    
    if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg(compressionOptions.jpg);
    } else if (ext === '.png') {
      sharpInstance = sharpInstance.png(compressionOptions.png);
    } else {
      console.log(`⚠️ نوع الملف غير مدعوم للضغط: ${imagePath}`);
      return;
    }
    
    // ضغط الصورة وحفظها (استبدال الملف الأصلي)
    await sharpInstance.toBuffer().then(data => {
      fs.writeFileSync(imagePath, data);
      
      // الحصول على حجم الملف الجديد
      const newSize = fs.statSync(imagePath).size;
      const newMB = (newSize / 1048576).toFixed(2);
      const savingPercentage = (((originalSize - newSize) / originalSize) * 100).toFixed(2);
      
      console.log(`✅ تم ضغط الصورة: ${imagePath}`);
      console.log(`   الحجم الأصلي: ${originalMB} MB`);
      console.log(`   الحجم الجديد: ${newMB} MB`);
      console.log(`   نسبة التوفير: ${savingPercentage}%`);
    });
  } catch (error) {
    console.error(`❌ خطأ أثناء ضغط الصورة ${imagePath}:`, error);
  }
}

// دالة لضغط جميع الصور
async function compressAllImages() {
  console.log('🔍 بدء عملية ضغط الصور الكبيرة...');
  
  for (const imagePath of largeImages) {
    // التحقق من وجود الصورة
    if (fs.existsSync(imagePath)) {
      await compressImage(imagePath);
    } else {
      console.log(`⚠️ الصورة غير موجودة: ${imagePath}`);
    }
  }
  
  console.log('\n✅ اكتملت عملية ضغط الصور!');
  console.log(`🔒 تم حفظ نسخة احتياطية من الصور الأصلية في: ${backupDir}`);
}

// تنفيذ عملية الضغط
compressAllImages().catch(err => console.error('حدث خطأ:', err)); 