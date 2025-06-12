import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogGrid from '@/components/BlogGrid'
import { ArrowLeft, Home } from 'lucide-react'

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

// Enhanced categories with Arabic names
const categoriesInfo = {
  'aviation': { nameAr: 'الطيران', emoji: '✈️', description: 'أزياء موحدة لقطاع الطيران والمطارات' },
  'education': { nameAr: 'التعليم', emoji: '🎓', description: 'الأزياء المدرسية والجامعية' },
  'government': { nameAr: 'الحكومة', emoji: '🏛️', description: 'أزياء موظفي القطاع الحكومي' },
  'healthcare': { nameAr: 'الرعاية الصحية', emoji: '🏥', description: 'الأزياء الطبية والمستشفيات' },
  'hospitality': { nameAr: 'الضيافة', emoji: '🏨', description: 'أزياء الفنادق والمطاعم' },
  'industrial': { nameAr: 'الصناعة', emoji: '🏭', description: 'ملابس العمل الصناعية والمصانع' },
  'security': { nameAr: 'الأمن', emoji: '🛡️', description: 'أزياء الأمن والحراسة' },
}

// Default images for each category
const defaultCategoryImages = {
  'aviation': '/images/aviation/aviation_uniforms.jpg',
  'education': '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
  'government': '/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg',
  'healthcare': '/images/healthcare/Hospital_uniforms.jpg',
  'hospitality': '/images/hospitality/Hotel_uniforms.jpeg',
  'industrial': '/images/industrial/Industrial_uniforms.jpeg',
  'security': '/images/security/Security_uniforms.jpeg',
}

// For dynamic metadata
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = params
  
  if (!validCategories.includes(category.toLowerCase())) {
    return {
      title: 'التصنيف غير موجود | UniformSA',
      description: 'التصنيف المطلوب غير متاح في الوقت الحالي'
    }
  }
  
  const categoryInfo = categoriesInfo[category.toLowerCase() as keyof typeof categoriesInfo]
  
  return {
    title: `أزياء ${categoryInfo.nameAr} | مدونة UniformSA`,
    description: `اكتشف مجموعتنا من المقالات المتخصصة في أزياء ${categoryInfo.nameAr} في المملكة العربية السعودية. ${categoryInfo.description}`,
    keywords: `أزياء ${categoryInfo.nameAr} السعودية، زي موحد ${categoryInfo.nameAr}، ملابس عمل ${categoryInfo.nameAr}`,
    openGraph: {
      title: `أزياء ${categoryInfo.nameAr} المتخصصة - UniformSA`,
      description: categoryInfo.description,
      images: [defaultCategoryImages[category.toLowerCase() as keyof typeof defaultCategoryImages]],
    }
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
  slug: string
  description: string
  imagePath: string
  category: string
  tags: string[]
  publishDate: string
  readTime: string
  author: string
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params
  
  // Verify category is valid
  if (!validCategories.includes(category.toLowerCase())) {
    notFound()
  }
  
  const categoryInfo = categoriesInfo[category.toLowerCase() as keyof typeof categoriesInfo]
  
  // Get all articles and filter by category
  const allArticles = await getArticlesFromFileSystem()
  const categoryArticles = allArticles.filter(article => article.category === category.toLowerCase())
  
  // Prepare categories data for the BlogGrid component
  const categories = validCategories.map(cat => {
    const info = categoriesInfo[cat as keyof typeof categoriesInfo]
    return {
      name: cat,
      nameAr: info.nameAr,
      href: `/blog/category/${cat}`,
      description: info.description,
      count: allArticles.filter(article => article.category === cat).length
    }
  })
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center space-x-2 space-x-reverse text-sm text-white/80">
            <Link href="/" className="flex items-center hover:text-white transition-colors">
              <Home className="h-4 w-4 ml-1" />
              الرئيسية
            </Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              المدونة
            </Link>
            <span>›</span>
            <span className="text-white font-medium">{categoryInfo.nameAr}</span>
          </nav>

          <div className="text-center">
            <div className="mb-4 text-6xl">{categoryInfo.emoji}</div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              أزياء {categoryInfo.nameAr}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
              {categoryInfo.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                {categoryArticles.length} مقال متخصص
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                محتوى سعودي حصري
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content section */}
      <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Enhanced sidebar */}
            <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Back to blog */}
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <Link 
                  href="/blog" 
                  className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <ArrowLeft className="h-4 w-4 ml-2" />
                  العودة إلى جميع المقالات
                </Link>
              </div>

              {/* Categories */}
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-xl font-bold text-gray-900 flex items-center">
                  <span className="ml-2">📂</span>
                  التصنيفات الأخرى
                </h2>
                <ul className="space-y-3">
                  {categories
                    .filter(cat => cat.name !== category.toLowerCase())
                    .map((cat) => (
                    <li key={cat.name}>
                        <Link 
                        href={cat.href} 
                        className="flex items-center justify-between rounded-lg py-3 px-4 font-medium text-gray-700 transition-all hover:bg-primary/5 hover:text-primary group"
                        title={cat.description}
                      >
                        <span className="flex items-center">
                          <span className="ml-2">
                            {categoriesInfo[cat.name as keyof typeof categoriesInfo].emoji}
                          </span>
                          {cat.nameAr}
                        </span>
                        <span className="text-sm text-gray-500 group-hover:text-primary">
                          {cat.count}
                        </span>
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Category Stats */}
              <div className="rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 flex items-center">
                  <span className="ml-2">📊</span>
                  إحصائيات التصنيف
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">مقالات {categoryInfo.nameAr}:</span>
                    <span className="font-bold text-primary">{categoryArticles.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">إجمالي المقالات:</span>
                    <span className="font-bold text-primary">{allArticles.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">النسبة:</span>
                    <span className="font-bold text-primary">
                      {Math.round((categoryArticles.length / allArticles.length) * 100)}%
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            {/* Blog posts grid */}
            <div className="lg:col-span-3">
            {categoryArticles.length > 0 ? (
              <BlogGrid 
                articles={categoryArticles} 
                categories={categories.filter(cat => cat.name === category.toLowerCase())}
              />
            ) : (
              <div className="rounded-xl bg-white p-12 text-center shadow-lg">
                <div className="mb-4 text-6xl">{categoryInfo.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  لا توجد مقالات في تصنيف {categoryInfo.nameAr} حالياً
                </h3>
                <p className="text-gray-600 mb-6">
                  نعمل على إضافة محتوى متخصص في هذا التصنيف. تابعونا للحصول على أحدث المقالات.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/blog"
                    className="rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90 transition-colors"
                  >
                    استعراض جميع المقالات
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    اقترح موضوعاً
                  </Link>
                </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

async function getArticlesFromFileSystem(): Promise<Article[]> {
  try {
    const articlesDir = path.join(process.cwd(), 'app', 'blog')
    const articleSlugs = fs.readdirSync(articlesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name !== 'category' && dirent.name !== '[slug]')
      .map(dirent => dirent.name)

    const articles: Article[] = []
    let articleIdCounter = 1

    // Create image pools for each category
    const categoryImagePools: Record<string, string[]> = {}
    const usedImages: Record<string, Set<string>> = {}

    // Initialize image pools
    const categoryDirs = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security']
    
    for (const category of categoryDirs) {
      try {
        const categoryImagesDir = path.join(process.cwd(), 'public', 'images', category)
        if (fs.existsSync(categoryImagesDir)) {
          const imageFiles = fs.readdirSync(categoryImagesDir)
            .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .map(file => `/images/${category}/${file}`)
          
          categoryImagePools[category] = imageFiles
          usedImages[category] = new Set()
        }
      } catch (error) {
        console.error(`Error reading images for category ${category}:`, error)
        categoryImagePools[category] = []
        usedImages[category] = new Set()
        }
    }

    for (const slug of articleSlugs) {
      const articlePagePath = path.join(articlesDir, slug, 'page.tsx')
      if (fs.existsSync(articlePagePath)) {
        try {
          const fileContent = fs.readFileSync(articlePagePath, 'utf8')
          
          // Extract metadata using regex
          let title = formatSlugToTitle(slug)
          let description = ''
          let imagePath = '/images/placeholder-image.jpg'
          let category = getCategoryFromTitle(title) || 'general'
          let author = 'فريق UniformSA'
          let readTime = '5 دقائق'
          let publishDate = '2025'
          let tags: string[] = []

          const metadataBlockMatch = fileContent.match(/export\s+const\s+generateMetadata[^}]*?:\s*Metadata\s*=\s*({[\s\S]*?})/m) ||
                                   fileContent.match(/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*({[\s\S]*?})/m)

          if (metadataBlockMatch && metadataBlockMatch[1]) {
            let metadataString = metadataBlockMatch[1]
            metadataString = metadataString.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '')

            // Extract title
            const titleMatch = metadataString.match(/title:\s*['"`]([^'"`]+?)['"`]/i) ||
                              metadataString.match(/title:\s*{\s*default:\s*['"`]([^'"`]+?)['"`]/i)
            if (titleMatch && titleMatch[1]) {
              title = titleMatch[1].replace(/\|\s*UniformSA.*$/, '').trim()
            }

            // Extract description
            const descMatch = metadataString.match(/description:\s*['"`]([^'"`]+?)['"`]/i)
            if (descMatch && descMatch[1]) {
              description = descMatch[1].trim()
            }

            // Extract keywords for tags
            const keywordsMatch = metadataString.match(/keywords:\s*['"`]([^'"`]+?)['"`]/i)
            if (keywordsMatch && keywordsMatch[1]) {
              tags = keywordsMatch[1].split(',').map(tag => tag.trim()).slice(0, 3)
            }

            // Extract image path from metadata
            const imageMatch = metadataString.match(/images:\s*\[\s*['"`]([^'"`]+?)['"`]/i) ||
                              metadataString.match(/url:\s*['"`]([^'"`]+?)['"`]/i)
            if (imageMatch && imageMatch[1]) {
              imagePath = imageMatch[1].trim()
      }
    }
    
          // Extract author from content
          const authorMatch = fileContent.match(/<h4[^>]*>([^<]+?(?:المهندس|الدكتور|الكابتن|الرائد|الشيف|Chef|Captain|Major|Dr\.|Eng\.)[^<]*?)<\/h4>/i)
          if (authorMatch && authorMatch[1]) {
            author = authorMatch[1].replace(/(<([^>]+)>)/gi, '').trim()
    }
    
          // Extract read time from content
          const readTimeMatch = fileContent.match(/(\d+)\s*min\s*read/i) ||
                               fileContent.match(/(\d+)\s*دقائق/i)
          if (readTimeMatch && readTimeMatch[1]) {
            readTime = `${readTimeMatch[1]} دقائق`
          }

          // Extract publish date
          const dateMatch = fileContent.match(/(\w+\s+\d+,\s+2025)/) ||
                           fileContent.match(/(2025)/)
          if (dateMatch && dateMatch[1]) {
            publishDate = dateMatch[1]
    }
    
          // Update category based on final title
          category = getCategoryFromTitle(title) || category

          // Smart image assignment - assign unique images from category pool
          if (imagePath === '/images/placeholder-image.jpg' || !imagePath) {
            imagePath = assignUniqueImage(category, categoryImagePools, usedImages, slug)
          } else {
            // If image exists in metadata, mark it as used
            if (categoryImagePools[category]?.includes(imagePath)) {
              usedImages[category].add(imagePath)
            }
          }

          articles.push({
            id: articleIdCounter++,
            title,
            slug,
            description: description || `مقال متخصص حول ${title}`,
            imagePath,
            category,
            tags,
            publishDate,
            readTime,
            author
          })
        } catch (readError) {
          console.error(`Error processing article file ${articlePagePath}:`, readError)
        }
      }
      }
      
    // Sort articles by relevance/date
    return articles.sort((a, b) => {
      // Prioritize articles with better metadata
      const aScore = (a.description.length > 50 ? 2 : 0) + (a.tags.length > 0 ? 1 : 0)
      const bScore = (b.description.length > 50 ? 2 : 0) + (b.tags.length > 0 ? 1 : 0)
      return bScore - aScore
    })
    
  } catch (error) {
    console.error('Error in getArticlesFromFileSystem:', error)
    return []
  }
}

// Function to assign unique images to articles
function assignUniqueImage(
  category: string, 
  categoryImagePools: Record<string, string[]>, 
  usedImages: Record<string, Set<string>>,
  slug: string
): string {
  const imagePool = categoryImagePools[category] || []
  
  if (imagePool.length === 0) {
    return defaultCategoryImages[category as keyof typeof defaultCategoryImages] || '/images/placeholder-image.jpg'
  }

  // Find unused images
  const unusedImages = imagePool.filter(img => !usedImages[category]?.has(img))
  
  if (unusedImages.length > 0) {
    // Use hash of slug to consistently assign same image to same article
    const hash = slug.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    const imageIndex = Math.abs(hash) % unusedImages.length
    const selectedImage = unusedImages[imageIndex]
    
    usedImages[category].add(selectedImage)
    return selectedImage
  }
  
  // If all images are used, reset and start over
  usedImages[category].clear()
  const hash = slug.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  
  const imageIndex = Math.abs(hash) % imagePool.length
  const selectedImage = imagePool[imageIndex]
  
  usedImages[category].add(selectedImage)
  return selectedImage
}

function formatSlugToTitle(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\bAnd\b/g, 'and')
    .replace(/\bFor\b/g, 'for')
    .replace(/\bIn\b/g, 'in')
    .replace(/\bOf\b/g, 'of')
    .replace(/\bThe\b/g, 'the')
}

function getCategoryFromTitle(title: string): string | null {
  const categoryKeywords = {
    'aviation': ['aviation', 'airline', 'airport', 'flight', 'pilot', 'cabin crew', 'aircraft'],
    'education': ['education', 'school', 'college', 'university', 'student', 'teacher', 'academic'],
    'government': ['government', 'ministry', 'public sector', 'civil service', 'municipal', 'official'],
    'healthcare': ['healthcare', 'medical', 'hospital', 'clinic', 'nurse', 'doctor', 'health', 'scrubs'],
    'hospitality': ['hospitality', 'hotel', 'restaurant', 'resort', 'chef', 'housekeeping', 'banquet', 'culinary'],
    'industrial': ['industrial', 'workwear', 'factory', 'manufacturing', 'construction', 'worker', 'safety'],
    'security': ['security', 'guard', 'protection', 'safety officer', 'tactical', 'armor', 'enforcement']
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