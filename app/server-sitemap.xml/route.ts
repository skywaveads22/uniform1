import { getServerSideSitemap } from 'next-sitemap'
import type { ISitemapField } from 'next-sitemap'

// Define dynamic routes types to include in the sitemap
const serviceCategories: string[] = [
  // Services to be removed have been excluded
]

const blogCategories = [
  'aviation',
  'healthcare',
  'hospitality',
  'education',
  'government',
  'security',
  'industrial'
]

// Generate the dynamic sitemap
export async function GET(request: Request) {
  // Base URL
  const baseUrl = 'https://fakhrkhaleej.com'
  
  // Generate service pages
  const serviceUrls: ISitemapField[] = serviceCategories.map(category => ({
    loc: `${baseUrl}/services/${category}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.8,
  }))
  
  // Generate blog category pages
  const blogCategoryUrls: ISitemapField[] = blogCategories.map(category => ({
    loc: `${baseUrl}/blog/category/${category}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily' as const,
    priority: 0.7,
  }))
  
  // Generate portfolio pages (IDs 1-6 based on your data)
  const portfolioUrls: ISitemapField[] = Array.from({ length: 6 }, (_, i) => ({
    loc: `${baseUrl}/portfolio/${i + 1}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly' as const,
    priority: 0.6,
  }))
  
  // Combine all URLs
  const allUrls = [
    ...serviceUrls,
    ...blogCategoryUrls,
    ...portfolioUrls,
  ]
  
  return getServerSideSitemap(allUrls)
} 