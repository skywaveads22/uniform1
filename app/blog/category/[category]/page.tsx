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
  categories: string[]
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
                  {articles.map((article) => (
                    <BlogPostCard
                      key={article.id}
                      title={article.title}
                      imagePath={article.imagePath}
                      internalLink={article.internalLink}
                    />
                  ))}
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
    
    // Process the file line by line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Skip empty lines and the header
      if (!line || line === '# Articles List') continue
      
      // Check if line contains article information (starts with a number)
      const articleMatch = line.match(/^(\d+)\.\s+(.+?)\s+-\s+\(المسار\/الرابط الداخلي:\s+(.+?)\)$/)
      
      if (articleMatch) {
        const id = parseInt(articleMatch[1])
        const title = articleMatch[2]
        const internalLink = articleMatch[3]
        
        // Look ahead for the image path in the next line
        let imagePath = ''
        let categories: string[] = []
        
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim()
          if (nextLine.startsWith('- صور التصنيفات:')) {
            // Extract the first image path (if multiple are provided, separated by commas)
            const paths = nextLine.replace('- صور التصنيفات:', '').trim().split(',')
            imagePath = paths[0].trim()
            
            // Extract categories from image path
            const possibleCategories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security']
            categories = possibleCategories.filter(cat => 
              imagePath.toLowerCase().includes(`/images/${cat}/`)
            )
          }
        }
        
        // If article belongs to this category, add it to the result
        if (categories.includes(searchCategory)) {
          articles.push({
            id,
            title,
            internalLink,
            imagePath,
            categories
          })
        }
      }
    }
    
    return articles
    
  } catch (error) {
    console.error(`Error parsing articles for category ${category}:`, error)
    return []
  }
} 