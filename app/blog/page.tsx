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
                {articles.map((article) => (
                  <BlogPostCard
                    key={article.id}
                    title={article.title}
                    imagePath={article.imagePath}
                    internalLink={article.internalLink}
                  />
                ))}
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
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim()
          if (nextLine.startsWith('- صور التصنيفات:')) {
            // Extract the first image path (if multiple are provided, separated by commas)
            const paths = nextLine.replace('- صور التصنيفات:', '').trim().split(',')
            imagePath = paths[0].trim()
          }
        }
        
        articles.push({
          id,
          title,
          internalLink,
          imagePath
        })
      }
    }
    
    console.log(`Parsed ${articles.length} articles from articles.md`)
    return articles
    
  } catch (error) {
    console.error('Error parsing articles.md:', error)
    return []
  }
} 