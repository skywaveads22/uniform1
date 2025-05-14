import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, Filter, ArrowDownAZ, Calendar as CalendarIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getImagePath, getFallbackImage } from '@/lib/image-helper'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  createdAt: string
  category: string
}

const CATEGORIES = [
  'aviation',
  'education',
  'government',
  'healthcare',
  'hospitality',
  'industrial',
  'security'
]

const CATEGORY_METADATA = {
  'aviation': {
    title: 'All Aviation Articles & Resources | Aviation Uniform Knowledge Hub',
    description: 'Complete collection of expert articles about aviation uniforms, gear integration, regulations, and professional aviation attire in Saudi Arabia.',
    keywords: 'aviation articles, aviation uniform resources, Saudi Arabia aviation guides, aviation gear information, aviation uniform regulations, professional aviation attire',
    image: '/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg',
  },
  'education': {
    title: 'All Education Articles & Resources | Education Uniform Knowledge Hub',
    description: 'Complete collection of expert articles about education uniforms, gear integration, regulations, and professional education attire in Saudi Arabia.',
    keywords: 'education articles, education uniform resources, Saudi Arabia education guides, education gear information, education uniform regulations, professional education attire',
    image: '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
  },
  'government': {
    title: 'All Government Articles & Resources | Government Uniform Knowledge Hub',
    description: 'Complete collection of expert articles about government uniforms, gear integration, regulations, and professional government attire in Saudi Arabia.',
    keywords: 'government articles, government uniform resources, Saudi Arabia government guides, government gear information, government uniform regulations, professional government attire',
    image: '/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg',
  },
  'healthcare': {
    title: 'All Healthcare Articles & Resources | Healthcare Uniform Knowledge Hub',
    description: 'Complete collection of expert articles about healthcare uniforms, gear integration, regulations, and professional healthcare attire in Saudi Arabia.',
    keywords: 'healthcare articles, healthcare uniform resources, Saudi Arabia healthcare guides, healthcare gear information, healthcare uniform regulations, professional healthcare attire',
    image: '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg',
  },
  'hospitality': {
    title: 'All Hospitality Articles & Resources | Hospitality Uniform Knowledge Hub',
    description: 'Complete collection of expert articles about hospitality uniforms, gear integration, regulations, and professional hospitality attire in Saudi Arabia.',
    keywords: 'hospitality articles, hospitality uniform resources, Saudi Arabia hospitality guides, hospitality gear information, hospitality uniform regulations, professional hospitality attire',
    image: '/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg',
  },
  'industrial': {
    title: 'All Industrial Articles & Resources | Industrial Uniform Knowledge Hub',
    description: 'Complete collection of expert articles about industrial uniforms, gear integration, regulations, and professional industrial attire in Saudi Arabia.',
    keywords: 'industrial articles, industrial uniform resources, Saudi Arabia industrial guides, industrial gear information, industrial uniform regulations, professional industrial attire',
    image: '/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg',
  },
  'security': {
    title: 'All Security Articles & Resources | Security Uniform Knowledge Hub',
    description: 'Complete collection of expert articles about security uniforms, tactical gear integration, regulations, and professional security attire in Saudi Arabia.',
    keywords: 'security articles, security uniform resources, Saudi Arabia security guides, security gear information, security uniform regulations, professional security attire',
    image: '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg',
  }
}

function getPostsByCategory(category: string): Post[] {
  const filePath = path.join(process.cwd(), 'src', 'data', `${category}.json`)
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    return []
  }
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category,
  }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  if (!CATEGORIES.includes(params.category)) {
    return {}
  }

  const categoryInfo = CATEGORY_METADATA[params.category as keyof typeof CATEGORY_METADATA]
  
  return {
    title: categoryInfo.title,
    description: categoryInfo.description,
    keywords: categoryInfo.keywords,
    openGraph: {
      images: [categoryInfo.image],
    },
  }
}

interface PageProps {
  params: {
    category: string
  }
}

export default function AllCategoryArticlesPage({ params }: PageProps) {
  if (!CATEGORIES.includes(params.category)) {
    notFound()
  }

  const posts = getPostsByCategory(params.category)
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)

  return (
    <main className="bg-white pb-16 pt-24">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Complete {categoryName} Article Library</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Explore our comprehensive collection of expert articles covering all aspects of {params.category} uniforms, gear, and professional {params.category} attire in Saudi Arabia.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mb-12 rounded-xl bg-gray-50 p-6">
          <div className="mb-4 flex items-center">
            <Filter className="mr-2 h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-gray-900">Browse by Topic</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All Articles', 'Regulations', 'Materials', 'Design', 'Features', 'Uniform Care', 'Climate Adaptation', 'Professional Image'].map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === 'All Articles' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900">
            All {categoryName} Articles <span className="text-gray-500">({posts.length})</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <ArrowDownAZ className="mr-2 h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select className="ml-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={getImagePath(post.image)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getFallbackImage(params.category);
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center">
                      <Tag className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                        {categoryName}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* No Articles Found - Hidden by default */}
        <div className="hidden rounded-xl border border-gray-200 bg-white p-12 text-center">
          <Image 
            src="/images/empty-results.svg" 
            alt="No articles found" 
            width={200} 
            height={200} 
            className="mx-auto mb-6"
          />
          <h3 className="mb-2 text-xl font-semibold text-gray-900">No Articles Found</h3>
          <p className="mb-6 text-gray-600">
            We couldn't find any {params.category} articles matching your current filters.
          </p>
          <button className="rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90">
            Clear Filters
          </button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-xl bg-gray-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Need Expert {categoryName} Uniform Guidance?</h2>
          <p className="mb-6 mx-auto max-w-2xl text-gray-600">
            Our team of {params.category} uniform specialists can help you find the perfect solutions for your {params.category} personnel, tailored to Saudi Arabian conditions and regulations.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Request a Consultation
            </Link>
            <Link
              href={`/services/${params.category}`}
              className="inline-block rounded-lg border border-primary bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-50"
            >
              View {categoryName} Uniform Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 