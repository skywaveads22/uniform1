import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Link from 'next/link'
import BlogPostCard from '@/components/BlogPostCard'

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

export default async function BlogPage() {
  const articles: Article[] = await getArticlesFromMarkdown()

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
            
            {/* Blog posts grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => {
                  // فحص صحة عناصر المقالة قبل محاولة عرضها
                  if (!article || !article.title || !article.internalLink) {
                    // Invalid article detected
                    return null;
                  }
                  
                  // عرض المقالة باستخدام مكون BlogPostCard
                  return (
                    <BlogPostCard
                      key={article.id || index}
                      title={article.title}
                      imagePath={article.imagePath || ''}
                      internalLink={article.internalLink}
                      category={article.category}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

async function getArticlesFromMarkdown(): Promise<Article[]> {
  try {
    // Read the articles.md file
    const filePath = path.join(process.cwd(), 'articles.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    // Parse the content to extract article information
    const articles: Article[] = []
    
    // Split the content by lines
    const lines = fileContent.split('\n')
    
    let currentArticle: Partial<Article> = {}
    
    // Process the file line by line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Skip empty lines and the header
      if (!line || line === '# Articles List') continue
      
      // Check if line contains article information (starts with a number)
      const articleMatch = line.match(/^(\d+)\.\s+(.+?)\s+-\s+\(المسار\/الرابط الداخلي:\s+(.+?)\)$/)
      
      if (articleMatch) {
        // If we have a previous article waiting to be added, add it
        if (currentArticle.id && currentArticle.title && currentArticle.internalLink) {
          articles.push(currentArticle as Article)
        }
        
        // Start a new article
        const id = parseInt(articleMatch[1])
        const title = articleMatch[2]
        const internalLink = articleMatch[3]
        
        // Determine the category from the title
        const category = getCategoryFromTitle(title) || 'general'
        
        // Start with a default image based on category
        const defaultImage = defaultCategoryImages[category as keyof typeof defaultCategoryImages] || '/images/placeholder-image.jpg'
        
        currentArticle = {
          id,
          title,
          internalLink,
          imagePath: defaultImage,
          category
        }
      } 
      // Check if the line contains image information
      else if (line.startsWith('- صور التصنيفات:') && currentArticle.id) {
        // Extract the image path
        const imagePath = line.replace('- صور التصنيفات:', '').trim()
        
        // Remove 'public' from the beginning if it exists
        const finalImagePath = imagePath.replace('public', '').split(',')[0].trim()
        
        // Set the image path in the current article
        currentArticle.imagePath = finalImagePath
      }
    }
    
    // Add the last article if it exists
    if (currentArticle.id && currentArticle.title && currentArticle.internalLink) {
      articles.push(currentArticle as Article)
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
    // Error parsing articles.md
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