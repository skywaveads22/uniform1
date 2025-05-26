import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Climate-Responsive Uniform Technology: Innovations for Saudi Weather | UniformSA',
  description: 'Explore cutting-edge climate-responsive technologies in uniform design, specifically adapted for Saudi Arabia\'s unique weather conditions and professional requirements.',
  openGraph: {
    title: 'Climate-Responsive Uniform Technology: Innovations for Saudi Weather | UniformSA',
    description: 'Explore cutting-edge climate-responsive technologies in uniform design, specifically adapted for Saudi Arabia\'s unique weather conditions and professional requirements.',
    images: ['/images/technology/climate_responsive_uniforms.jpg'],
  },
}

export default async function Page() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      {/* Rest of the component remains exactly the same */}
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
            <span className="text-gray-700 dark:text-white">Climate-Responsive Uniform Technology</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/technology/climate_responsive_uniforms.jpg"
              alt="Advanced climate-responsive uniforms being worn in Saudi professional environments"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Climate-Responsive Uniform Technology: Innovations for Saudi Weather
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 10, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Technology, Climate Adaptation, Professional Wear</span>
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
                In Saudi Arabia's challenging climate, where temperatures can soar and environmental conditions can be extreme, innovative climate-responsive uniform technology is revolutionizing professional wear. These advancements ensure comfort and performance while maintaining professional standards and cultural requirements.
              </p>

              <h2>Smart Fabric Technologies</h2>
              <p>
                Modern climate-responsive uniforms incorporate several smart fabric technologies:
              </p>
              <ul>
                <li>Phase Change Materials (PCMs) for temperature regulation</li>
                <li>Moisture-wicking nanofibers</li>
                <li>UV-protective treatments</li>
                <li>Anti-static properties for dust resistance</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Temperature Management Features</h3>
                <p className="text-sm mb-4">
                  Advanced cooling technologies include:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Ventilation zones strategically placed for maximum airflow</li>
                  <li>Heat-reflective materials in outer layers</li>
                  <li>Cooling crystals embedded in fabric structure</li>
                  <li>Adaptive insulation systems</li>
                </ul>
              </div>

              <h2>Environmental Adaptation</h2>
              <p>
                Uniforms are specifically designed to handle Saudi Arabia's unique environmental challenges:
              </p>
              <ul>
                <li>Sand and dust resistance</li>
                <li>High-temperature stability</li>
                <li>Protection against intense UV radiation</li>
                <li>Adaptation to rapid temperature changes</li>
              </ul>

              <h2>Comfort Enhancement Technologies</h2>
              <p>
                Modern designs incorporate various comfort features:
              </p>
              <ul>
                <li>4-way stretch materials</li>
                <li>Ergonomic seam placement</li>
                <li>Weight reduction technology</li>
                <li>Breathable panels in high-heat areas</li>
              </ul>

              <h2>Professional Integration</h2>
              <p>
                Climate-responsive features are seamlessly integrated with professional requirements:
              </p>
              <ul>
                <li>Maintained professional appearance</li>
                <li>Compatibility with safety equipment</li>
                <li>Durability for industrial cleaning</li>
                <li>Color stability under intense conditions</li>
              </ul>

              <h2>Future Innovations</h2>
              <p>
                Emerging technologies in climate-responsive uniforms include:
              </p>
              <ul>
                <li>AI-driven temperature regulation</li>
                <li>Self-cleaning nanotechnology</li>
                <li>Advanced moisture management systems</li>
                <li>Biodegradable cooling materials</li>
              </ul>

              <h2>Implementation and Maintenance</h2>
              <p>
                Successful deployment of climate-responsive uniforms requires:
              </p>
              <ul>
                <li>Proper care protocols</li>
                <li>Staff training on features</li>
                <li>Regular performance monitoring</li>
                <li>Scheduled replacement programs</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Climate-responsive uniform technology represents a significant advancement in professional wear for Saudi Arabia's unique environment. These innovations ensure comfort and performance while maintaining professional standards and cultural requirements, setting new benchmarks for workplace attire in challenging climates.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Mohammed Al-Harbi is a textile technology specialist focusing on climate-adaptive materials. With a background in both materials science and environmental engineering, he has been instrumental in developing new uniform technologies for the Saudi market.</p>
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
                  <Link href="/blog/advanced-material-science-in-security-uniforms" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Advanced Material Science in Security Uniforms</div>
                    <div className="text-xs text-gray-500">Latest developments in protective wear</div>
                  </Link>
                  <Link href="/blog/biomechanical-optimization-in-security-attire" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Biomechanical Optimization in Security Attire</div>
                    <div className="text-xs text-gray-500">Enhancing comfort and mobility</div>
                  </Link>
                  <Link href="/blog/sustainable-uniform-materials-for-desert-environments" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Sustainable Uniform Materials for Desert Environments</div>
                    <div className="text-xs text-gray-500">Eco-friendly solutions for harsh climates</div>
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
