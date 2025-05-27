import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogPostCard from '@/components/BlogPostCard'

// List of valid categories
const validCategories = [
  "aviation",
  "education",
  "government",
  "healthcare",
  "hospitality",
  "industrial",
  "security"
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

// For dynamic metadata
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = params
  
  if (!validCategories.includes(category.toLowerCase())) {
    return {
      title: 'Category Not Found | Uniform SA',
    }
  }
  
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
  
  return {
    title: `${formattedCategory} Uniforms | Uniform SA Blog`,
    description: `Explore our collection of articles about ${formattedCategory.toLowerCase()} uniforms in Saudi Arabia.`
  }
}

// Generate static params for all categories
export function generateStaticParams() {
  return validCategories.map(category => ({
    category: category
  }))
}

interface Article {
  id: number
  title: string
  internalLink: string
  imagePath: string
  category: string
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params
  
  // Verify category is valid
  if (!validCategories.includes(category.toLowerCase())) {
    notFound()
  }
  
  // Format category name for display (first letter uppercase)
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
  
  // Get articles filtered by category
  const articles = await getArticlesByCategory(category)
  
  return (
    <div className="bg-primary">
      {/* Hero section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{formattedCategory} Uniforms</h1>
        <p className="mx-auto max-w-2xl text-lg text-white/80">
          Explore our articles about {formattedCategory.toLowerCase()} uniforms and attire in Saudi Arabia
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
                  {validCategories.map((cat) => {
                    const formattedCat = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
                    return (
                      <li key={cat}>
                        <Link 
                          href={`/blog/category/${cat}`} 
                          className={`block rounded-lg py-2 font-medium ${
                            cat === category.toLowerCase() 
                              ? 'text-primary font-bold' 
                              : 'text-gray-700 hover:text-primary'
                          }`}
                        >
                          {formattedCat}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link 
                    href="/blog" 
                    className="text-primary hover:underline font-medium"
                  >
                    ← Back to all articles
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Blog posts grid */}
            <div className="lg:col-span-3">
              {articles.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                  {articles.map((article, index) => {
                    // فحص صحة عناصر المقالة قبل محاولة عرضها
                    if (!article || !article.title || !article.internalLink) {
                      // Invalid article detected
                      return null;
                    }
                    
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
              ) : (
                <div className="rounded-xl bg-white p-8 text-center shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-600">
                    There are currently no articles in this category. Please check back later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

async function getArticlesByCategory(category: string): Promise<Article[]> {
  try {
    // Read the articles.md file
    const filePath = path.join(process.cwd(), 'articles.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    // Parse the content to extract article information
    const articles: Article[] = []
    
    // Split the content by lines
    const lines = fileContent.split('\n')
    
    // Lowercase category for case-insensitive comparison
    const searchCategory = category.toLowerCase()
    
    let currentArticle: Partial<Article> = {}
    
    // Process the file line by line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Skip empty lines and the header
      if (!line || line === '# Articles List') continue
      
      // Check if line contains article information (starts with a number)
      const articleMatch = line.match(/^(\d+)\.\s+(.+?)\s+-\s+\(المسار\/الرابط الداخلي:\s+(.+?)\)$/)
      
      if (articleMatch) {
        // If we have a previous article waiting to be added and it matches the category, add it
        if (currentArticle.id && currentArticle.title && currentArticle.internalLink && 
            currentArticle.category === searchCategory) {
          articles.push(currentArticle as Article)
        }
        
        // Start a new article
        const id = parseInt(articleMatch[1])
        const title = articleMatch[2]
        const internalLink = articleMatch[3]
        
        // Determine the category from the title
        const articleCategory = getCategoryFromTitle(title)
        
        // Only continue processing if this article belongs to the requested category
        if (articleCategory === searchCategory) {
          // Default image for this category
          const defaultImage = defaultCategoryImages[searchCategory as keyof typeof defaultCategoryImages] || '/images/placeholder-image.jpg'
          
          currentArticle = {
            id,
            title,
            internalLink,
            imagePath: defaultImage,
            category: searchCategory
          }
        } else {
          // Not in the requested category, reset current article
          currentArticle = {}
        }
      } 
      // Check if the line contains image information and we have a current article in process
      else if (line.startsWith('- صور التصنيفات:') && currentArticle.id) {
        // Extract the image path
        const imagePath = line.replace('- صور التصنيفات:', '').trim()
        
        // Remove 'public' from the beginning if it exists
        const finalImagePath = imagePath.replace('public', '').split(',')[0].trim()
        
        // Set the image path in the current article
        currentArticle.imagePath = finalImagePath
      }
    }
    
    // Add the last article if it exists and matches the category
    if (currentArticle.id && currentArticle.title && currentArticle.internalLink && 
        currentArticle.category === searchCategory) {
      articles.push(currentArticle as Article)
    }
    
    // Make each article have a unique image
    const usedImages: Set<string> = new Set()
    
    // Get a list of all available images for this category
    let availableImages: string[] = []
    
    try {
      const categoryImagesDir = path.join(process.cwd(), 'public', 'images', searchCategory)
      if (fs.existsSync(categoryImagesDir)) {
        availableImages = fs.readdirSync(categoryImagesDir)
          .filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
          .map(file => `/images/${searchCategory}/${file}`)
      }
    } catch (err) {
      // Error reading image directory
    }
    
    // Process each article to ensure unique images
    const processedArticles = articles.map((article, index) => {
      // If no available images, use the default
      if (availableImages.length === 0) {
        return article
      }
      
      // Check if the current image path is valid
      const currentImagePath = article.imagePath
      const publicPath = path.join(process.cwd(), 'public', currentImagePath.replace(/^\//, ''))
      
      // If current image exists and not used before, mark it as used and keep it
      if (fs.existsSync(publicPath) && !usedImages.has(currentImagePath)) {
        usedImages.add(currentImagePath)
        return article
      }
      
      // Current image doesn't exist or already used, pick a new one
      const unusedImages = availableImages.filter(img => !usedImages.has(img))
      
      if (unusedImages.length > 0) {
        // Randomly select one of the unused images
        const newImage = unusedImages[Math.floor(Math.random() * unusedImages.length)]
        usedImages.add(newImage)
        return { ...article, imagePath: newImage }
      }
      
      // If all images are used, reset the used images and pick a new one
      usedImages.clear()
      const newImage = availableImages[Math.floor(Math.random() * availableImages.length)]
      usedImages.add(newImage)
      
      return { ...article, imagePath: newImage }
    })
    
    return processedArticles
    
  } catch (error) {
    // Error parsing articles for category
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