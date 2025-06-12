// "use client"; // Removed as this page will be a Server Component

import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Link from 'next/link'
import BlogGrid from '../../components/BlogGrid'

export const metadata: Metadata = {
  title: 'مدونة الأزياء الموحدة | UniformSA',
  description: 'اكتشف مقالاتنا ونصائحنا حول الأزياء الموحدة لمختلف القطاعات في المملكة العربية السعودية',
  keywords: 'مدونة الأزياء الموحدة، أزياء العمل السعودية، مقالات الزي الموحد، نصائح الأزياء المهنية',
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

// Enhanced categories with Arabic names and descriptions
const categories = [
  { 
    name: "aviation", 
    nameAr: "الطيران",
    href: "/blog/category/aviation",
    description: "أزياء موحدة لقطاع الطيران والمطارات",
    count: 0
  },
  { 
    name: "education", 
    nameAr: "التعليم",
    href: "/blog/category/education",
    description: "الأزياء المدرسية والجامعية",
    count: 0
  },
  { 
    name: "government", 
    nameAr: "الحكومة",
    href: "/blog/category/government",
    description: "أزياء موظفي القطاع الحكومي",
    count: 0
  },
  { 
    name: "healthcare", 
    nameAr: "الرعاية الصحية",
    href: "/blog/category/healthcare",
    description: "الأزياء الطبية والمستشفيات",
    count: 0
  },
  { 
    name: "hospitality", 
    nameAr: "الضيافة",
    href: "/blog/category/hospitality",
    description: "أزياء الفنادق والمطاعم",
    count: 0
  },
  { 
    name: "industrial", 
    nameAr: "الصناعة",
    href: "/blog/category/industrial",
    description: "ملابس العمل الصناعية والمصانع",
    count: 0
  },
  { 
    name: "security", 
    nameAr: "الأمن",
    href: "/blog/category/security",
    description: "أزياء الأمن والحراسة",
    count: 0
  },
]

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

export default async function BlogPage() {
  const articles = await getArticlesFromFileSystem()
  
  // Count articles per category
  const categoriesWithCount = categories.map(cat => ({
    ...cat,
    count: articles.filter(article => article.category === cat.name).length
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            مدونة الأزياء الموحدة
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
            اكتشف أحدث المقالات والنصائح المتخصصة في الأزياء الموحدة لجميع القطاعات في المملكة العربية السعودية
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white">
              {articles.length} مقال متخصص
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white">
              {categoriesWithCount.length} تصنيف رئيسي
            </span>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white">
              محتوى سعودي متخصص
            </span>
          </div>
        </div>
      </div>
      
      {/* Main content section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Enhanced sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-xl font-bold text-gray-900 flex items-center">
                  <span className="ml-2">📂</span>
                  التصنيفات
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/blog" 
                      className="flex items-center justify-between rounded-lg py-3 px-4 font-medium text-gray-700 transition-all hover:bg-primary/5 hover:text-primary group"
                    >
                      <span>جميع المقالات</span>
                      <span className="text-sm text-gray-500 group-hover:text-primary">
                        {articles.length}
                      </span>
                    </Link>
                  </li>
                  {categoriesWithCount.map((category) => (
                    <li key={category.href}>
                      <Link 
                        href={category.href} 
                        className="flex items-center justify-between rounded-lg py-3 px-4 font-medium text-gray-700 transition-all hover:bg-primary/5 hover:text-primary group"
                        title={category.description}
                      >
                        <span>{category.nameAr}</span>
                        <span className="text-sm text-gray-500 group-hover:text-primary">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Categories */}
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 flex items-center">
                  <span className="ml-2">⭐</span>
                  التصنيفات الأكثر شعبية
                </h3>
                <div className="space-y-3">
                  {categoriesWithCount
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 4)
                    .map((category) => (
                      <Link 
                        key={category.name} 
                        href={category.href}
                        className="block group"
                      >
                        <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
                            <span className="text-lg">
                              {category.name === 'healthcare' && '🏥'}
                              {category.name === 'security' && '🛡️'}
                              {category.name === 'aviation' && '✈️'}
                              {category.name === 'hospitality' && '🏨'}
                              {category.name === 'industrial' && '🏭'}
                              {category.name === 'education' && '🎓'}
                              {category.name === 'government' && '🏛️'}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                              {category.nameAr}
                            </h4>
                            <p className="text-xs text-gray-500 truncate">
                              {category.count} مقال
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Blog Stats */}
              <div className="rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 flex items-center">
                  <span className="ml-2">📊</span>
                  إحصائيات المدونة
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">إجمالي المقالات:</span>
                    <span className="font-bold text-primary">{articles.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">التصنيفات:</span>
                    <span className="font-bold text-primary">{categoriesWithCount.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">محتوى حديث:</span>
                    <span className="font-bold text-primary">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced blog posts grid */}
          <div className="lg:col-span-3">
            <BlogGrid articles={articles} categories={categoriesWithCount} />
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