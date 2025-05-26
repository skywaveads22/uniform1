import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eco-Friendly Uniform Care and Maintenance | UniformSA',
  description: 'Discover sustainable practices for uniform care and maintenance that reduce environmental impact while ensuring longevity and professional appearance.',
  openGraph: {
    title: 'Eco-Friendly Uniform Care and Maintenance | UniformSA',
    description: 'Discover sustainable practices for uniform care and maintenance that reduce environmental impact while ensuring longevity and professional appearance.',
    images: ['/images/sustainability/eco_care.jpg'],
  },
}

export default async function Page() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>{'>'}</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>{'>'}</span>
            <span className="text-gray-700 dark:text-white">Eco-Friendly Uniform Care and Maintenance</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/sustainability/eco_care.jpg"
              alt="Eco-friendly uniform care and maintenance practices in action"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Eco-Friendly Uniform Care and Maintenance
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 22, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Sustainability, Maintenance, Professional Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout (2 columns on desktop) */}
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="lead">
                Sustainable uniform care practices are becoming increasingly important in Saudi Arabia's professional environments. By adopting eco-friendly maintenance methods, organizations can reduce their environmental impact while extending uniform life and maintaining professional standards.
              </p>

              <h2>Water Conservation</h2>
              <p>
                Effective water management strategies:
              </p>
              <ul>
                <li>Water-efficient washing systems</li>
                <li>Gray water recycling programs</li>
                <li>Load optimization techniques</li>
                <li>Water-saving wash cycles</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Eco-Friendly Cleaning</h3>
                <p className="text-sm mb-4">
                  Sustainable cleaning practices include:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Biodegradable detergents</li>
                  <li>Natural stain removal methods</li>
                  <li>Energy-efficient washing</li>
                  <li>Chemical-free treatments</li>
                </ul>
              </div>

              <h2>Energy Efficiency</h2>
              <p>
                Energy-saving approaches:
              </p>
              <ul>
                <li>Solar-powered drying systems</li>
                <li>Heat recovery technology</li>
                <li>Smart energy management</li>
                <li>Efficient equipment selection</li>
              </ul>

              <h2>Waste Reduction</h2>
              <p>
                Minimizing environmental impact through:
              </p>
              <ul>
                <li>Packaging reduction</li>
                <li>Material recycling programs</li>
                <li>Repair and reuse initiatives</li>
                <li>Sustainable disposal methods</li>
              </ul>

              <h2>Maintenance Best Practices</h2>
              <p>
                Extending uniform life through:
              </p>
              <ul>
                <li>Preventive care routines</li>
                <li>Proper storage solutions</li>
                <li>Regular inspections</li>
                <li>Timely repairs</li>
              </ul>

              <h2>Staff Training</h2>
              <p>
                Educational initiatives covering:
              </p>
              <ul>
                <li>Proper care techniques</li>
                <li>Environmental awareness</li>
                <li>Resource conservation</li>
                <li>Sustainable practices</li>
              </ul>

              <h2>Future Innovations</h2>
              <p>
                Emerging sustainable technologies:
              </p>
              <ul>
                <li>Smart cleaning systems</li>
                <li>IoT-enabled maintenance</li>
                <li>Advanced recycling methods</li>
                <li>Sustainable packaging solutions</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Implementing eco-friendly uniform care practices not only benefits the environment but also contributes to cost savings and extended uniform life. These sustainable approaches represent the future of professional uniform maintenance in Saudi Arabia.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Noor Al-Salem is a sustainability consultant specializing in textile care and maintenance. Her work focuses on implementing eco-friendly practices in professional uniform management while maintaining high standards of cleanliness and presentation.</p>
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
                  <Link href="/blog/sustainable-uniform-materials-for-desert-environments" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Sustainable Uniform Materials for Desert Environments</div>
                    <div className="text-xs text-gray-500">Eco-friendly material innovations</div>
                  </Link>
                  <Link href="/blog/maintaining-sterility-best-practices-for-laundering-healthcare-uniforms" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Maintaining Sterility: Best Practices for Laundering Healthcare Uniforms</div>
                    <div className="text-xs text-gray-500">Professional cleaning standards</div>
                  </Link>
                  <Link href="/blog/future-of-sustainable-workwear" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">The Future of Sustainable Workwear</div>
                    <div className="text-xs text-gray-500">Emerging eco-friendly trends</div>
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
