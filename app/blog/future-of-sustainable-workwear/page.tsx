import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Future of Sustainable Workwear | UniformSA',
  description: 'Explore emerging trends and innovations in sustainable workwear, focusing on eco-friendly materials, smart technologies, and circular economy principles.',
  openGraph: {
    title: 'The Future of Sustainable Workwear | UniformSA',
    description: 'Explore emerging trends and innovations in sustainable workwear, focusing on eco-friendly materials, smart technologies, and circular economy principles.',
    images: ['/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg'],
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
            <span className="text-gray-700 dark:text-white">The Future of Sustainable Workwear</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg"
              alt="Innovative sustainable workwear featuring smart technologies and eco-friendly materials"
              width={1000}
              height={600}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Future of Sustainable Workwear
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>July 5, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>11 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Sustainability, Innovation, Future Trends</span>
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
                The future of workwear is being shaped by sustainability imperatives, technological innovations, and changing workplace needs. Saudi Arabia is positioned to lead this transformation with its commitment to environmental responsibility and technological advancement.
              </p>

              <h2>Smart Materials</h2>
              <p>
                Next-generation fabric technologies:
              </p>
              <ul>
                <li>Self-cleaning nanotechnology</li>
                <li>Temperature-adaptive materials</li>
                <li>Energy-harvesting fabrics</li>
                <li>Biodegradable synthetics</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Circular Economy Integration</h3>
                <p className="text-sm mb-4">
                  Sustainable practices include:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Closed-loop manufacturing</li>
                  <li>Recycling programs</li>
                  <li>Waste reduction systems</li>
                  <li>Resource optimization</li>
                </ul>
              </div>

              <h2>Digital Integration</h2>
              <p>
                Smart technology features:
              </p>
              <ul>
                <li>IoT-enabled monitoring</li>
                <li>Digital maintenance tracking</li>
                <li>Performance analytics</li>
                <li>Connected workwear systems</li>
              </ul>

              <h2>Environmental Impact</h2>
              <p>
                Sustainability measures:
              </p>
              <ul>
                <li>Carbon footprint reduction</li>
                <li>Water conservation</li>
                <li>Chemical use minimization</li>
                <li>Renewable energy adoption</li>
              </ul>

              <h2>Customization Technology</h2>
              <p>
                Advanced personalization:
              </p>
              <ul>
                <li>3D-printed components</li>
                <li>Digital fitting systems</li>
                <li>On-demand manufacturing</li>
                <li>Mass customization capabilities</li>
              </ul>

              <h2>Workplace Evolution</h2>
              <p>
                Adapting to new needs:
              </p>
              <ul>
                <li>Hybrid work environments</li>
                <li>Flexible uniform policies</li>
                <li>Remote work integration</li>
                <li>Cultural adaptability</li>
              </ul>

              <h2>Health Integration</h2>
              <p>
                Wellness-focused features:
              </p>
              <ul>
                <li>Health monitoring sensors</li>
                <li>Stress reduction design</li>
                <li>Ergonomic optimization</li>
                <li>Wellness tracking capabilities</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The future of sustainable workwear represents a convergence of environmental responsibility, technological innovation, and workplace evolution. Saudi Arabia's commitment to sustainability and innovation positions it well to lead in this transformation of professional attire.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Yasser Al-Hamdan is a futurist and sustainability expert specializing in workplace innovation. His research focuses on the intersection of technology, sustainability, and professional wear in the evolving workplace landscape.</p>
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
                    <div className="text-xs text-gray-500">Eco-friendly solutions</div>
                  </Link>
                  <Link href="/blog/eco-friendly-uniform-care-and-maintenance" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Eco-Friendly Uniform Care and Maintenance</div>
                    <div className="text-xs text-gray-500">Sustainable practices</div>
                  </Link>
                  <Link href="/blog/climate-responsive-uniform-technology" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Climate-Responsive Uniform Technology</div>
                    <div className="text-xs text-gray-500">Innovative adaptations</div>
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
