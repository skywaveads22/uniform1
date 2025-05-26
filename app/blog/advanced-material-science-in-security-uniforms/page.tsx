import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advanced Material Science in Security Uniforms | UniformSA',
  description: 'Explore cutting-edge materials and technologies used in modern security uniforms, focusing on durability, protection, and comfort for Saudi security personnel.',
  openGraph: {
    title: 'Advanced Material Science in Security Uniforms | UniformSA',
    description: 'Explore cutting-edge materials and technologies used in modern security uniforms, focusing on durability, protection, and comfort for Saudi security personnel.',
    images: ['/images/security/advanced_materials.jpg'],
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
            <span className="text-gray-700 dark:text-white">Advanced Material Science in Security Uniforms</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/security/advanced_materials.jpg"
              alt="Advanced materials and technologies used in modern security uniforms"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Advanced Material Science in Security Uniforms
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 12, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Security, Material Science, Innovation</span>
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
                The evolution of security uniforms in Saudi Arabia has been transformed by advances in material science, creating garments that offer unprecedented levels of protection, comfort, and functionality. These innovations are reshaping how security personnel operate in challenging environments.
              </p>

              <h2>Cutting-Edge Materials</h2>
              <p>
                Modern security uniforms incorporate several advanced materials:
              </p>
              <ul>
                <li>Aramid fibers for enhanced protection</li>
                <li>Carbon nanotube-reinforced fabrics</li>
                <li>Phase-change materials for temperature regulation</li>
                <li>Smart polymers with adaptive properties</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Key Material Properties</h3>
                <p className="text-sm mb-4">
                  Advanced security uniforms feature:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Ballistic resistance capabilities</li>
                  <li>Cut and puncture resistance</li>
                  <li>Fire retardant properties</li>
                  <li>Chemical resistance</li>
                </ul>
              </div>

              <h2>Comfort and Performance</h2>
              <p>
                Enhanced comfort features include:
              </p>
              <ul>
                <li>Moisture-wicking technology</li>
                <li>Antimicrobial treatments</li>
                <li>Breathable membrane systems</li>
                <li>Ergonomic stretch zones</li>
              </ul>

              <h2>Environmental Adaptability</h2>
              <p>
                Materials are specifically engineered for Saudi conditions:
              </p>
              <ul>
                <li>UV protection integration</li>
                <li>Sand and dust resistance</li>
                <li>Heat dissipation technology</li>
                <li>Water repellent treatments</li>
              </ul>

              <h2>Smart Integration</h2>
              <p>
                Modern uniforms incorporate smart features:
              </p>
              <ul>
                <li>Embedded sensor systems</li>
                <li>Communication device integration</li>
                <li>Power management solutions</li>
                <li>Health monitoring capabilities</li>
              </ul>

              <h2>Durability and Maintenance</h2>
              <p>
                Advanced materials offer improved durability:
              </p>
              <ul>
                <li>Enhanced abrasion resistance</li>
                <li>Color fastness in extreme conditions</li>
                <li>Reduced maintenance requirements</li>
                <li>Extended service life</li>
              </ul>

              <h2>Future Developments</h2>
              <p>
                Emerging technologies in security uniforms include:
              </p>
              <ul>
                <li>Self-healing materials</li>
                <li>Active camouflage systems</li>
                <li>Energy-harvesting fabrics</li>
                <li>Enhanced communication integration</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The integration of advanced materials in security uniforms represents a significant leap forward in protecting and empowering security personnel. These innovations continue to evolve, promising even more capable and sophisticated solutions for the future.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Khalid Al-Mansour is a materials science expert specializing in protective wear and security equipment. With over a decade of experience in developing advanced materials for security applications, he has contributed to numerous innovations in the field.</p>
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
                  <Link href="/blog/biomechanical-optimization-in-security-attire" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Biomechanical Optimization in Security Attire</div>
                    <div className="text-xs text-gray-500">Enhancing mobility and protection</div>
                  </Link>
                  <Link href="/blog/climate-responsive-uniform-technology" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Climate-Responsive Uniform Technology</div>
                    <div className="text-xs text-gray-500">Adapting to environmental challenges</div>
                  </Link>
                  <Link href="/blog/next-generation-protective-gear" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Next-Generation Protective Gear</div>
                    <div className="text-xs text-gray-500">Future of security equipment</div>
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
