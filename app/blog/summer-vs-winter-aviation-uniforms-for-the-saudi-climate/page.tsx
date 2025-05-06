import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'Summer Vs Winter Aviation Uniforms For The Saudi Climate | UniformSA',
    description: 'Learn more about uniforms and professional attire in Saudi Arabia.',
    openGraph: {
      images: ['/images/placeholder-image.jpg'],
    },
  }
}

export default function BlogPost() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700 dark:text-white">SLUG_Summer Vs Winter Aviation Uniforms For The Saudi Climate</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/placeholder-image.jpg"
              alt="Summer Vs Winter Aviation Uniforms For The Saudi Climate"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Summer Vs Winter Aviation Uniforms For The Saudi Climate
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 15, 2023</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Uniform, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout (2 columns on desktop) */}
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Key Information</h2>
              <h3>1. Topic Overview</h3>
              <h3>2. Industry Applications</h3>
              <h3 className="text-lg font-semibold">Author Name</h3>
              <h3 className="text-lg font-semibold">About the Author</h3>
              <h3 className="mb-4 text-lg font-semibold">Share Article</h3>
              <h3 className="mb-4 text-lg font-semibold">Related Articles</h3>
              <p className="lead">
                This is a template article about . The content will be updated soon with detailed information
                about this topic and its relevance to uniform design and implementation in Saudi Arabia.
              </p>
              <p>
                Important points about this topic will be covered here, including:
              </p>
              <p>
                How this topic applies to various industries in Saudi Arabia:
              </p>
              <p className="text-gray-600">Expert in this field with extensive experience in Saudi Arabia and the broader Middle East region.</p>
              <p className="text-gray-600">Industry expert with extensive experience in uniform design and implementation for various sectors across Saudi Arabia.</p>
              <ul>
                <li><strong>Key Point 1:</strong> Description of first important aspect</li>
                <li><strong>Key Point 2:</strong> Description of second important aspect</li>
                <li><strong>Key Point 3:</strong> Description of third important aspect</li>
                <li><strong>Key Point 4:</strong> Description of fourth important aspect</li>
              </ul>
              <ul>
                <li><strong>Application 1:</strong> Description of first application</li>
                <li><strong>Application 2:</strong> Description of second application</li>
                <li><strong>Application 3:</strong> Description of third application</li>
                <li><strong>Application 4:</strong> Description of fourth application</li>
              </ul>
              <div className="mt-8">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Industry expert with extensive experience in uniform design and implementation for various sectors across Saudi Arabia.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Share Section */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold">Share Article</h3>
                <div className="flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">More articles</div>
                    <div className="text-xs text-gray-500">View all blog posts</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}