import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sustainable Uniform Materials for Desert Environments | UniformSA',
  description: 'Explore eco-friendly and sustainable materials used in uniform manufacturing for desert climates, combining environmental responsibility with practical performance.',
  openGraph: {
    title: 'Sustainable Uniform Materials for Desert Environments | UniformSA',
    description: 'Explore eco-friendly and sustainable materials used in uniform manufacturing for desert climates, combining environmental responsibility with practical performance.',
    images: ['/images/sustainability/desert_uniforms.jpg'],
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
            <span className="text-gray-700 dark:text-white">Sustainable Uniform Materials for Desert Environments</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/sustainability/desert_uniforms.jpg"
              alt="Sustainable uniforms designed for desert environments showcasing eco-friendly materials"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sustainable Uniform Materials for Desert Environments
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 20, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Sustainability, Desert Climate, Innovation</span>
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
                As Saudi Arabia embraces sustainability initiatives, the uniform industry is pioneering eco-friendly materials that perform exceptionally well in desert conditions. These innovations combine environmental responsibility with the practical demands of professional attire in challenging climates.
              </p>

              <h2>Sustainable Material Innovations</h2>
              <p>
                Leading sustainable materials include:
              </p>
              <ul>
                <li>Recycled polyester from local plastic waste</li>
                <li>Organic cotton blends</li>
                <li>Bamboo-derived fabrics</li>
                <li>Bio-based synthetic materials</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Environmental Benefits</h3>
                <p className="text-sm mb-4">
                  Key sustainability features:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Reduced water consumption in production</li>
                  <li>Lower carbon footprint</li>
                  <li>Biodegradable options</li>
                  <li>Circular economy integration</li>
                </ul>
              </div>

              <h2>Desert Performance</h2>
              <p>
                Adaptation to desert conditions through:
              </p>
              <ul>
                <li>Enhanced UV resistance</li>
                <li>Superior moisture management</li>
                <li>Sand and dust resistance</li>
                <li>Temperature regulation properties</li>
              </ul>

              <h2>Durability Features</h2>
              <p>
                Long-lasting characteristics include:
              </p>
              <ul>
                <li>Abrasion resistance</li>
                <li>Color fastness in intense sun</li>
                <li>Shape retention properties</li>
                <li>Easy maintenance qualities</li>
              </ul>

              <h2>Local Production Impact</h2>
              <p>
                Benefits of local manufacturing:
              </p>
              <ul>
                <li>Reduced transportation emissions</li>
                <li>Local economy support</li>
                <li>Faster supply chain response</li>
                <li>Cultural design integration</li>
              </ul>

              <h2>Cost Considerations</h2>
              <p>
                Economic aspects of sustainable materials:
              </p>
              <ul>
                <li>Long-term cost benefits</li>
                <li>Durability-based savings</li>
                <li>Energy efficiency gains</li>
                <li>Waste reduction value</li>
              </ul>

              <h2>Future Developments</h2>
              <p>
                Emerging sustainable technologies:
              </p>
              <ul>
                <li>Smart recycling systems</li>
                <li>Zero-waste manufacturing</li>
                <li>Advanced bio-materials</li>
                <li>Closed-loop production</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The adoption of sustainable materials in desert-appropriate uniforms represents a significant step toward environmental responsibility while maintaining high performance standards. These innovations demonstrate that sustainability and functionality can work together effectively in challenging climates.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Layla Al-Zahrani is a textile sustainability expert specializing in desert-appropriate materials. Her research focuses on developing eco-friendly solutions for challenging climatic conditions while maintaining professional standards.</p>
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
                  <Link href="/blog/climate-responsive-uniform-technology" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Climate-Responsive Uniform Technology</div>
                    <div className="text-xs text-gray-500">Adapting to environmental challenges</div>
                  </Link>
                  <Link href="/blog/eco-friendly-uniform-care-and-maintenance" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Eco-Friendly Uniform Care and Maintenance</div>
                    <div className="text-xs text-gray-500">Sustainable cleaning practices</div>
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
