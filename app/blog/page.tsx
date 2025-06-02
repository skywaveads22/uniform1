// "use client"; // Removed as this page will be a Server Component

import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Link from 'next/link'
import LazyBlogGrid from '@/components/LazyBlogGrid'

export const metadata: Metadata = {
  title: 'Blog | Uniform SA',
  description: 'Explore our articles and insights about uniforms across various sectors in Saudi Arabia.',
}

interface Article {
  id: number
  title: string
  internalLink: string
  imagePath: string
  category: string
}

// Array of categories to match the image
const categories = [
  { name: "Aviation", href: "/blog/category/aviation" },
  { name: "Education", href: "/blog/category/education" },
  { name: "Government", href: "/blog/category/government" },
  { name: "Healthcare", href: "/blog/category/healthcare" },
  { name: "Hospitality", href: "/blog/category/hospitality" },
  { name: "Industrial", href: "/blog/category/industrial" },
  { name: "Security", href: "/blog/category/security" },
]

// Default images for each category
const defaultCategoryImages = {
  'aviation': '/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg',
  'education': '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
  'government': '/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg',
  'healthcare': '/images/healthcare/Medical_scrubs_supplier_for_hospitals.jpg',
  'hospitality': '/images/hospitality/Hotel_uniforms.jpeg',
  'industrial': '/images/industrial/Industrial_uniforms.jpeg',
  'security': '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg',
}


export default async function BlogPage() { // Made async to await getArticlesFromMarkdown
  // const [articles, setArticles] = useState<Article[]>([]) // Removed useState

  // useEffect(() => { // Removed useEffect
  //   async function loadArticles() {
  //     try {
  //       const loadedArticles = await getArticlesFromMarkdown()
  //       setArticles(loadedArticles)
  //     } catch (error) {
  //       console.error('Error loading articles:', error)
  //       setArticles([])
  //     }
  //   }
  //   loadArticles()
  // }, [])

  const articles = await getArticlesFromMarkdown(); // Fetch articles directly

  return (
    <div className="bg-primary">
      {/* Hero section with white Blog text */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Our Blog</h1>
        <p className="mx-auto max-w-2xl text-lg text-white/80">
          Expert insights and articles about uniforms across various sectors in Saudi Arabia
        </p>
      </div>
      
      {/* Main content section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Categories sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-4 text-xl font-bold text-gray-900">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.href}>
                      <Link 
                        href={category.href} 
                        className="block rounded-lg py-2 font-medium text-gray-700 transition-colors hover:text-primary"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Blog posts grid with lazy loading */}
            <div className="lg:col-span-3">
              <LazyBlogGrid articles={articles} itemsPerPage={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

async function getArticlesFromMarkdown(): Promise<Article[]> {
  try {
    const articlesDir = path.join(process.cwd(), 'app', 'blog')
    const articleSlugs = fs.readdirSync(articlesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name !== 'category' && dirent.name !== '[slug]')
      .map(dirent => dirent.name)

    const articles: Article[] = []
    let articleIdCounter = 1

    for (const slug of articleSlugs) {
      const articlePagePath = path.join(articlesDir, slug, 'page.tsx')
      if (fs.existsSync(articlePagePath)) {
        try {
          const fileContent = fs.readFileSync(articlePagePath, 'utf8')
          
          // Extract title from metadata
          let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) // Fallback title
          const metadataMatch = fileContent.match(/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*({[\s\S]*?};?)/m);

          if (metadataMatch && metadataMatch[1]) {
            const metadataString = metadataMatch[1].replace(/;\s*$/, ''); // Remove trailing semicolon if present
            try {
                // A bit hacky: wrap in parentheses and use eval-like approach
                // This is risky and should be replaced with a proper parser if possible
                const evaluatedMetadata = new Function(`return ${metadataString}`)();
                if (evaluatedMetadata.title) {
                    if (typeof evaluatedMetadata.title === 'string') {
                        title = evaluatedMetadata.title;
                    } else if (typeof evaluatedMetadata.title === 'object' && evaluatedMetadata.title.default) {
                        title = evaluatedMetadata.title.default;
                    }
                }
            } catch (e) {
                console.warn(`Could not parse metadata for ${slug}:`, e);
            }
          }

          const internalLink = `/blog/${slug}`
          const category = getCategoryFromTitle(title) || 'general'
          let imagePath = defaultCategoryImages[category as keyof typeof defaultCategoryImages] || '/images/placeholder-image.jpg'
          
          // Attempt to extract imagePath from metadata
          if (metadataMatch && metadataMatch[1]) {
            const metadataString = metadataMatch[1].replace(/;\s*$/, '');
            try {
                const evaluatedMetadata = new Function(`return ${metadataString}`)();
                if (evaluatedMetadata.openGraph && evaluatedMetadata.openGraph.images && evaluatedMetadata.openGraph.images[0]) {
                    if (typeof evaluatedMetadata.openGraph.images[0] === 'string') {
                        imagePath = evaluatedMetadata.openGraph.images[0];
                    } else if (typeof evaluatedMetadata.openGraph.images[0] === 'object' && evaluatedMetadata.openGraph.images[0].url) {
                        imagePath = evaluatedMetadata.openGraph.images[0].url;
                    }
                } else if (evaluatedMetadata.twitter && evaluatedMetadata.twitter.images && evaluatedMetadata.twitter.images[0]) {
                     if (typeof evaluatedMetadata.twitter.images[0] === 'string') {
                        imagePath = evaluatedMetadata.twitter.images[0];
                    } else if (typeof evaluatedMetadata.twitter.images[0] === 'object' && evaluatedMetadata.twitter.images[0].url) {
                        imagePath = evaluatedMetadata.twitter.images[0].url;
                    }
                }
            } catch (e) {
                // console.warn(`Could not parse metadata for image in ${slug}:`, e);
            }
          }

          articles.push({
            id: articleIdCounter++,
            title,
            internalLink,
            imagePath, // Placeholder, will need to implement image extraction
            category,
          })
        } catch (readError) {
          console.error(`Error reading article file ${articlePagePath}:`, readError)
        }
      }
    }

    // Make each article have a unique image within its category
    const usedImages: Record<string, Set<string>> = {}
    
    // Initialize usedImages sets for each category
    categories.forEach(cat => {
      usedImages[cat.name.toLowerCase()] = new Set()
    })
    
    // Process each article to ensure unique images per category
    const processedArticles = articles.map((article, index) => {
      const cat = article.category.toLowerCase()
      
      // Get a list of all available images for this category
      let availableImages: string[] = []
      
      try {
        const categoryImagesDir = path.join(process.cwd(), 'public', 'images', cat)
        if (fs.existsSync(categoryImagesDir)) {
          availableImages = fs.readdirSync(categoryImagesDir)
            .filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
            .map(file => `/images/${cat}/${file}`)
        }
      } catch (err) {
        // Error reading image directory
      }
      
      // If no available images, use the default
      if (availableImages.length === 0) {
        return article
      }
      
      // Check if the current image path is valid
      const currentImagePath = article.imagePath
      const publicPath = path.join(process.cwd(), 'public', currentImagePath.replace(/^\//, ''))
      
      // If current image exists and not used before, mark it as used and keep it
      if (fs.existsSync(publicPath) && !usedImages[cat]?.has(currentImagePath)) {
        usedImages[cat].add(currentImagePath)
        return article
      }
      
      // Current image doesn't exist or already used, pick a new one
      const unusedImages = availableImages.filter(img => !usedImages[cat]?.has(img))
      
      if (unusedImages.length > 0) {
        // Randomly select one of the unused images
        const newImage = unusedImages[Math.floor(Math.random() * unusedImages.length)]
        usedImages[cat].add(newImage)
        return { ...article, imagePath: newImage }
      }
      
      // If all images are used, reset the used images for this category and pick a new one
      usedImages[cat].clear()
      const newImage = availableImages[Math.floor(Math.random() * availableImages.length)]
      usedImages[cat].add(newImage)
      
      return { ...article, imagePath: newImage }
    })
    
    return processedArticles
    
  } catch (error) {
    console.error('Error in getArticlesFromMarkdown:', error)
    return []
  }
}

// دالة مساعدة لاستخراج الفئة من العنوان
function getCategoryFromTitle(title: string): string | null {
  const categoryKeywords = {
    'aviation': ['aviation', 'airline', 'airport', 'flight', 'pilot', 'cabin crew'],
    'education': ['education', 'school', 'college', 'university', 'student', 'teacher'],
    'government': ['government', 'ministry', 'public sector', 'civil service'],
    'healthcare': ['healthcare', 'medical', 'hospital', 'clinic', 'nurse', 'doctor', 'health'],
    'hospitality': ['hospitality', 'hotel', 'restaurant', 'resort', 'chef', 'housekeeping'],
    'industrial': ['industrial', 'workwear', 'factory', 'manufacturing', 'construction'],
    'security': ['security', 'guard', 'protection', 'safety officer']
  }
  
  const lowercaseTitle = title.toLowerCase()
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    for (const keyword of keywords) {
      if (lowercaseTitle.includes(keyword)) {
        return category
      }
    }
  }
  
  return null
} 