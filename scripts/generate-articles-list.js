const fs = require('fs');
const path = require('path');

// قراءة محتويات مجلد المقالات
const blogDir = path.join(process.cwd(), 'app/blog');
const articlesFile = path.join(process.cwd(), 'articles.md');

// تجاهل المجلدات والملفات الخاصة
const ignoreDirs = ['category', '[slug]'];
const ignoreFiles = ['page.tsx', 'layout.tsx'];

// الحصول على قائمة المقالات
const getArticles = () => {
  const articles = [];
  const dirs = fs.readdirSync(blogDir);

  dirs.forEach(dir => {
    if (!ignoreDirs.includes(dir) && fs.statSync(path.join(blogDir, dir)).isDirectory()) {
      const title = dir
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // تحديد الفئة بناءً على اسم المقال
      let category = 'general';
      if (dir.includes('aviation')) category = 'aviation';
      else if (dir.includes('education') || dir.includes('school')) category = 'education';
      else if (dir.includes('healthcare') || dir.includes('medical') || dir.includes('hospital')) category = 'healthcare';
      else if (dir.includes('security')) category = 'security';
      else if (dir.includes('hospitality') || dir.includes('hotel')) category = 'hospitality';
      else if (dir.includes('industrial') || dir.includes('workwear')) category = 'industrial';
      else if (dir.includes('government')) category = 'government';

      // تحديد الصورة الافتراضية بناءً على الفئة
      const defaultImages = {
        'aviation': '/images/aviation/Aviation_uniforms.jpg',
        'education': '/images/education/School_uniforms.jpg',
        'healthcare': '/images/healthcare/Medical_uniforms.jpg',
        'security': '/images/security/Security_uniforms.jpg',
        'hospitality': '/images/hospitality/Hotel_uniforms.jpg',
        'industrial': '/images/industrial/Industrial_uniforms.jpg',
        'government': '/images/government/Government_uniforms.jpg',
        'general': '/images/blog/Blog_uniforms.jpg'
      };

      articles.push({
        title,
        internalLink: `/blog/${dir}`,
        imagePath: defaultImages[category],
        category
      });
    }
  });

  return articles;
};

// إنشاء محتوى ملف articles.md
const generateMarkdown = (articles) => {
  let markdown = '# Articles List\n\n';
  
  articles.forEach((article, index) => {
    markdown += `${index + 1}. ${article.title} - (المسار/الرابط الداخلي: ${article.internalLink})\n`;
    markdown += `   - صور التصنيفات: public${article.imagePath}\n\n`;
  });

  return markdown;
};

// كتابة الملف
const articles = getArticles();
const markdown = generateMarkdown(articles);
fs.writeFileSync(articlesFile, markdown);

console.log(`تم إنشاء ${articles.length} مقال في articles.md`);
