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

// Process each article
let fixedCount = 0;
let createdCount = 0;
let skippedCount = 0;
let errorCount = 0;

console.log('Starting fixes...');

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
                This article is currently being updated with the latest information and will be available soon.
              </p>
              <div className="mt-10 max-w-3xl text-base leading-7 text-neutral-700">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Coming Soon
                </h2>
                <p className="mt-6">
                  We're working on bringing you comprehensive information about ARTICLE_TITLE. Check back in May 2025 for the complete article.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}`;

for (const article of articles) {
  try {
    // Extract the slug from the path
    const slug = article.path.replace('/blog/', '');
    const articleDir = path.join('app/blog', slug);
    const articleFilePath = path.join(articleDir, 'page.tsx');
    
    // Process the image paths
    let expectedImagePath = article.imagePaths[0];
    
    // Convert from public/images/... to /images/...
    if (expectedImagePath && expectedImagePath.startsWith('public/')) {
      expectedImagePath = expectedImagePath.substring(6);
    }
    
    if (!expectedImagePath) {
      console.log(`No image path specified for ${article.title}. Skipping.`);
      skippedCount++;
      continue;
    }
    
    // Check if the article directory exists
    if (!fs.existsSync(articleDir)) {
      // Create the article directory
      fs.mkdirSync(articleDir, { recursive: true });
      
      // Create a new article file from template
      let newArticleContent = templateContent
        .replace(/ARTICLE_TITLE/g, article.title)
        .replace(/ARTICLE_DESCRIPTION/g, `Learn about ${article.title} in our comprehensive guide.`)
        .replace(/ARTICLE_KEYWORDS/g, `${article.title}, uniform, Saudi Arabia, KSA`)
        .replace(/IMAGE_PATH/g, expectedImagePath);
      
      fs.writeFileSync(articleFilePath, newArticleContent);
      console.log(`Created new article file: ${article.title}`);
      createdCount++;
      continue;
    }
    
    // If article exists, check if it has the correct image path
    if (fs.existsSync(articleFilePath)) {
      const content = fs.readFileSync(articleFilePath, 'utf8');
      
      // Check if the file includes the expected image path
      if (content.includes(expectedImagePath)) {
        console.log(`Article already has correct image path: ${article.title}`);
        continue;
      }
      
      // Find any existing image paths
      const imageRegex = /<Image[^>]*src="([^"]+)"[^>]*>/g;
      const imageMatches = [...content.matchAll(imageRegex)];
      
      if (imageMatches.length === 0) {
        console.log(`No images found in ${article.title}. Creating placeholder image.`);
        
        // Create a modified version with the correct image
        let newContent = content.replace(
          /(<Metadata[^>]*>[\s\S]*?)openGraph: \{([\s\S]*?)images: \[[^\]]*\]/g,
          `$1openGraph: {$2images: ['${expectedImagePath}']`
        );
        
        fs.writeFileSync(articleFilePath, newContent);
        fixedCount++;
        continue;
      }
      
      // Update the image src to the expected path
      let newContent = content;
      
      for (const match of imageMatches) {
        const currentImagePath = match[1];
        newContent = newContent.replace(
          new RegExp(currentImagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
          expectedImagePath
        );
      }
      
      // Also update any references in the metadata
      newContent = newContent.replace(
        /(<Metadata[^>]*>[\s\S]*?)images: \[[^\]]*\]/g,
        `$1images: ['${expectedImagePath}']`
      );
      
      fs.writeFileSync(articleFilePath, newContent);
      console.log(`Fixed image path in article: ${article.title}`);
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error processing ${article.title}: ${error.message}`);
    errorCount++;
  }
}

console.log('\nSummary:');
console.log(`Total articles processed: ${articles.length}`);
console.log(`Articles with image paths fixed: ${fixedCount}`);
console.log(`New articles created: ${createdCount}`);
console.log(`Articles skipped: ${skippedCount}`);
console.log(`Errors encountered: ${errorCount}`); 