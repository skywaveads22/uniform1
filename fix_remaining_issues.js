const fs = require('fs');
const path = require('path');

// Read the articles.md file
const articlesFile = fs.readFileSync('articles.md', 'utf8');

// Parse the articles
const articles = [];
const lines = articlesFile.split('\n');
let currentArticle = null;

for (const line of lines) {
  // Match article title and path
  const articleMatch = line.match(/\d+\.\s+(.+?)\s+-\s+\(المسار\/الرابط الداخلي:\s+(.+?)\)/);
  
  if (articleMatch) {
    const title = articleMatch[1].trim();
    const path = articleMatch[2].trim();
    currentArticle = { title, path, imagePaths: [] };
    articles.push(currentArticle);
    continue;
  }

  // Match image paths
  const imageMatch = line.match(/صور التصنيفات:\s+(.+)/);
  if (imageMatch && currentArticle) {
    const imagePaths = imageMatch[1].split(',').map(img => img.trim());
    currentArticle.imagePaths = imagePaths;
  }
}

console.log(`Found ${articles.length} articles in articles.md`);

// Create a directory for template article
if (!fs.existsSync('templates')) {
  fs.mkdirSync('templates');
}

// First, let's create a template for missing articles
const templateContent = `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { CTA } from '@/components/CTA'
import { RelatedArticles } from '@/components/RelatedArticles'
import { ShareButtons } from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'ARTICLE_TITLE | Uniform Junction',
  description: 'ARTICLE_DESCRIPTION',
  keywords: 'ARTICLE_KEYWORDS',
  openGraph: {
    title: 'ARTICLE_TITLE',
    description: 'ARTICLE_DESCRIPTION',
    images: ['IMAGE_PATH'],
  },
}

export default function BlogPost() {
  return (
    <main className="flex-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              ARTICLE_TITLE
            </h1>
            <div className="mt-6 text-base text-neutral-600">
              <time dateTime="2025-05-15" className="flex items-center">
                <span>May 15, 2025</span>
              </time>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <div className="relative bg-neutral-50 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure>
                <Image
                  src="IMAGE_PATH"
                  alt="ARTICLE_TITLE"
                  width={1408}
                  height={960}
                  className="rounded-2xl"
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-neutral-500">
                  <span>ARTICLE_TITLE</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:flex lg:gap-x-14">
            <div className="lg:flex-auto">
              <p className="text-lg leading-8 text-neutral-600">
                This article is currently being updated with the latest information for May 2025 and will be available soon.
              </p>
              <div className="mt-10 max-w-3xl text-base leading-7 text-neutral-700">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Coming Soon
                </h2>
                <p className="mt-6">
                  We're working on bringing you comprehensive information about ARTICLE_TITLE. Check back in May 2025 for the complete article with all the latest updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}`;

// List of specific issues to fix
const specificFixes = [
  // Create missing article
  {
    title: "Uniform Solutions for Theme Parks and Entertainment Venues",
    path: "/blog/uniform-solutions-for-theme-parks-and-entertainment-venues",
    imagePath: "/images/hospitality/Banquet_staff_uniforms_Event_staff_uniforms.jpeg"
  },
  // Fix missing image articles
  {
    title: "Communication Equipment Integration Features for Security Uniforms",
    path: "/blog/communication-equipment-integration-features-for-security-uniforms",
    imagePath: "/images/security/radio_holder_uniforms.jpeg",
    create: true
  },
  {
    title: "Custom Security Name Tags: Professional Identification Solutions",
    path: "/blog/custom-security-name-tags-professional-identification-solutions",
    imagePath: "/images/security/security_identification_patches.jpeg",
    create: true
  }
];

// Process specific fixes
console.log('Processing specific fixes...');
specificFixes.forEach(fix => {
  try {
    const slug = fix.path.replace('/blog/', '');
    const articleDir = path.join('app/blog', slug);
    const articleFilePath = path.join(articleDir, 'page.tsx');
    
    if (!fs.existsSync(articleDir)) {
      fs.mkdirSync(articleDir, { recursive: true });
      console.log(`Created directory for ${fix.title}`);
    }
    
    if (!fs.existsSync(articleFilePath) || fix.create) {
      // Create a new article file from template
      let newArticleContent = templateContent
        .replace(/ARTICLE_TITLE/g, fix.title)
        .replace(/ARTICLE_DESCRIPTION/g, `Learn about ${fix.title} in our comprehensive guide.`)
        .replace(/ARTICLE_KEYWORDS/g, `${fix.title}, uniform, Saudi Arabia, KSA`)
        .replace(/IMAGE_PATH/g, fix.imagePath);
      
      fs.writeFileSync(articleFilePath, newArticleContent);
      console.log(`Created article file for ${fix.title}`);
    } else {
      console.log(`Article file already exists for ${fix.title}. Adding the correct image.`);
      
      // Read the file
      let content = fs.readFileSync(articleFilePath, 'utf8');
      
      // Update the image src in the page component
      content = content.replace(
        /<Image[^>]*src="([^"]+)"[^>]*>/g, 
        (match, oldPath) => match.replace(oldPath, fix.imagePath)
      );
      
      // Update the image in the metadata
      content = content.replace(
        /images:\s*\[\s*['"]([^'"]+)['"]\s*\]/g,
        `images: ['${fix.imagePath}']`
      );
      
      fs.writeFileSync(articleFilePath, content);
      console.log(`Updated image in article ${fix.title}`);
    }
  } catch (error) {
    console.error(`Error processing ${fix.title}: ${error.message}`);
  }
});

// Process the image path mismatches for other articles
console.log('\nProcessing image path mismatches...');

// Get articles with image path mismatches
const articlesToFix = [
  { name: "The Role of Modesty in Saudi School Uniform Design", imgPath: "/images/education/School_uniforms.jpg" },
  { name: "The Evolution of School Uniform Styles in Saudi Arabia", imgPath: "/images/education/School_uniforms_Saudi_Arabia_KSA.jpg" },
  { name: "The Evolution of Nursing Uniforms in Saudi Arabia", imgPath: "/images/healthcare/Nurse_uniforms.jpg" },
  { name: "Technological Advancements in Fabrics for Government Duty Wear", imgPath: "/images/government/approved_government_fabrics.jpg" },
  { name: "Sustainable and Ethical Uniform Solutions for the Saudi Public Sector", imgPath: "/images/government/Public_sector_uniforms.jpg" },
  { name: "The Future of Hospitality Uniforms: Tech Integration and Personalization", imgPath: "/images/hospitality/modern_hospitality_design_uniforms.jpeg" },
  { name: "Teacher and Staff Attire: Setting Professional Standards in KSA Educational Institutions", imgPath: "/images/education/School_staff_uniforms.jpg" },
  { name: "Sustainable Uniform Programs for Eco-Conscious Hotels in Saudi Arabia", imgPath: "/images/hospitality/Hotel_uniforms.jpeg" },
  { name: "Stain Resistance and Easy-Care Fabrics for Younger Students", imgPath: "/images/education/easy_care_school_uniforms.jpg" },
  { name: "Sports Kits and PE Uniforms for Saudi Schools", imgPath: "/images/education/uniforms_sports_kits.jpg" },
  { name: "Sizing Guides and Best Practices for Ordering School Uniforms in Bulk", imgPath: "/images/education/school_uniform_purchase.jpg" },
  { name: "Sustainable and Eco-Friendly School Uniform Options", imgPath: "/images/education/School_uniform_fabrics.jpg" },
  { name: "Sustainable and Disposable Uniform Options in Healthcare Settings", imgPath: "/images/healthcare/disposable_medical_gowns.jpg" },
  { name: "Seasonal Uniform Considerations for Schools Across Saudi Arabia", imgPath: "/images/education/school_summer_uniforms.jpg" },
  { name: "Saudi Ministry of Health (MoH) Uniform Guidelines for Healthcare Workers", imgPath: "/images/healthcare/Medical_staff_uniforms.jpg" },
  { name: "Saudi Ministry of Education School Uniform Guidelines: An Overview", imgPath: "/images/education/School_uniform_companies_in_Saudi_Arabia.jpg" },
  { name: "Safety Features in School Uniforms", imgPath: "/images/education/School_uniform_fabrics.jpg" },
  { name: "Uniform Considerations for Government Representatives Attending International Events", imgPath: "/images/government/Formal_attire_for_government_events.jpg" },
  { name: "The Significance of Uniforms in Projecting Government Authority and Trust in KSA", imgPath: "/images/government/Official_government_suits.jpg" },
  { name: "The Role of Uniforms in Building Esprit de Corps among Government Teams", imgPath: "/images/government/government_office_uniforms.jpg" },
  { name: "The Role of Uniforms in Creating a Cohesive Brand Experience Across Hotel Chains in KSA", imgPath: "/images/hospitality/Hospitality_uniforms.jpeg" },
  { name: "The Role of Uniforms in Passenger Perceptions of Airline Quality", imgPath: "/images/aviation/aviation_uniforms.jpg" },
  { name: "The Psychology of Color in Healthcare Environments and Uniforms", imgPath: "/images/healthcare/Healthcare_uniforms.jpg" },
  { name: "The Importance of Proper Fit for Safety and Comfort in Industrial Uniforms", imgPath: "/images/industrial/industrial_uniform_fittings.jpeg" },
  { name: "The Importance of Color-Coding Uniforms in Large Saudi Hospitals", imgPath: "/images/healthcare/Hospital_uniforms.jpg" },
  { name: "The Link Between Professional Uniforms and Citizen Confidence", imgPath: "/images/government/Civil_service_uniforms.jpg" },
  { name: "The Importance of Brand Representation Through Aviation Uniforms", imgPath: "/images/aviation/aviation_uniform_embroidery.jpg" },
  { name: "Choosing the Right Materials for Security Uniforms in the Saudi Climate", imgPath: "/images/security/breathable_security_shirts.jpeg" }
];

// Helper function to find article by name
function findArticleByName(name) {
  return articles.find(article => article.title.trim() === name.trim());
}

// Fix each article
articlesToFix.forEach(fix => {
  try {
    const article = findArticleByName(fix.name);
    
    if (!article) {
      console.log(`Could not find article with name: ${fix.name}`);
      return;
    }
    
    const slug = article.path.replace('/blog/', '');
    const articleFilePath = path.join('app/blog', slug, 'page.tsx');
    
    if (!fs.existsSync(articleFilePath)) {
      console.log(`Article file does not exist for ${fix.name}`);
      return;
    }
    
    // Read the file
    let content = fs.readFileSync(articleFilePath, 'utf8');
    
    // Update the image src
    content = content.replace(
      /<Image[^>]*src="([^"]+)"[^>]*>/g,
      (match, oldPath) => match.replace(oldPath, fix.imgPath)
    );
    
    // Update the image in the metadata
    content = content.replace(
      /images:\s*\[\s*['"]([^'"]+)['"]\s*\]/g,
      `images: ['${fix.imgPath}']`
    );
    
    fs.writeFileSync(articleFilePath, content);
    console.log(`Updated image path for ${fix.name} to ${fix.imgPath}`);
  } catch (error) {
    console.error(`Error fixing ${fix.name}: ${error.message}`);
  }
});

console.log('\nImage path fixes completed!'); 