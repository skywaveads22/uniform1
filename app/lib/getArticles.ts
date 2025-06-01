import fs from 'fs'
import path from 'path'
import { Article } from '@/types/article'

const categories = [
  "Aviation",
  "Education",
  "Government",
  "Healthcare",
  "Hospitality",
  "Industrial",
  "Security",
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

export async function getArticlesFromMarkdown(): Promise<Article[]> {
  try {
    const filePath = path.join(process.cwd(), 'articles.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const articles: Article[] = []
    const lines = fileContent.split('\n')
    let currentArticle: Partial<Article> = {}
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line || line === '# Articles List') continue
      
      const articleMatch = line.match(/^(\d+)\.\s+(.+?)\s+-\s+\(المسار\/الرابط الداخلي:\s+(.+?)\)$/)
      
      if (articleMatch) {
        if (currentArticle.id && currentArticle.title && currentArticle.internalLink) {
          articles.push(currentArticle as Article)
        }
        
        const id = parseInt(articleMatch[1])
        const title = articleMatch[2]
        const internalLink = articleMatch[3]
        const category = getCategoryFromTitle(title) || 'general'
        const defaultImage = defaultCategoryImages[category as keyof typeof defaultCategoryImages] || '/images/placeholder-image.jpg'
        
        currentArticle = {
          id,
          title,
          internalLink,
          imagePath: defaultImage,
          category
        }
      } 
      else if (line.startsWith('- صور التصنيفات:') && currentArticle.id) {
        const imagePath = line.replace('- صور التصنيفات:', '').trim()
        const finalImagePath = imagePath.replace('public', '').split(',')[0].trim()
        currentArticle.imagePath = finalImagePath
      }
    }
    
    if (currentArticle.id && currentArticle.title && currentArticle.internalLink) {
      articles.push(currentArticle as Article)
    }
    
    const usedImages: Record<string, Set<string>> = {}
    categories.forEach(cat => {
      usedImages[cat.toLowerCase()] = new Set()
    })
    
    const processedArticles = articles.map((article) => {
      const cat = article.category.toLowerCase()
      let availableImages: string[] = []
      
      try {
        const categoryImagesDir = path.join(process.cwd(), 'public', 'images', cat)
        if (fs.existsSync(categoryImagesDir)) {
          availableImages = fs.readdirSync(categoryImagesDir)
            .filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
            .map(file => `/images/${cat}/${file}`)
        }
      } catch (err) {
        console.error('Error reading category images:', err)
      }
      
      if (availableImages.length === 0) {
        return article
      }
      
      const currentImagePath = article.imagePath
      const publicPath = path.join(process.cwd(), 'public', currentImagePath.replace(/^\//, ''))
      
      if (fs.existsSync(publicPath) && !usedImages[cat]?.has(currentImagePath)) {
        usedImages[cat].add(currentImagePath)
        return article
      }
      
      const unusedImages = availableImages.filter(img => !usedImages[cat]?.has(img))
      
      if (unusedImages.length > 0) {
        const newImage = unusedImages[Math.floor(Math.random() * unusedImages.length)]
        usedImages[cat].add(newImage)
        return { ...article, imagePath: newImage }
      }
      
      usedImages[cat].clear()
      const newImage = availableImages[Math.floor(Math.random() * availableImages.length)]
      usedImages[cat].add(newImage)
      
      return { ...article, imagePath: newImage }
    })
    
    return processedArticles
    
  } catch (error) {
    console.error('Error parsing articles:', error)
    return []
  }
}
