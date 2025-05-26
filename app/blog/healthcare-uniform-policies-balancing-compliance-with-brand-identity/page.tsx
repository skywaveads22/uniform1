import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare Uniform Policies: Balancing Compliance with Brand Identity | UniformSA',
  description: 'Learn how to develop effective healthcare uniform policies that maintain regulatory compliance while reinforcing institutional brand identity in Saudi Arabia.',
  openGraph: {
    title: 'Healthcare Uniform Policies: Balancing Compliance with Brand Identity | UniformSA',
    description: 'Learn how to develop effective healthcare uniform policies that maintain regulatory compliance while reinforcing institutional brand identity in Saudi Arabia.',
    images: ['/images/healthcare/uniform_policy.jpg'],
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
            <span className="text-gray-700 dark:text-white">Healthcare Uniform Policies: Balancing Compliance with Brand Identity</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/healthcare/uniform_policy.jpg"
              alt="Healthcare professionals in compliant uniforms that reflect institutional branding"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Healthcare Uniform Policies: Balancing Compliance with Brand Identity
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>July 2, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Policy, Compliance, Branding</span>
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
                Creating effective healthcare uniform policies requires careful consideration of regulatory requirements, cultural sensitivities, and institutional branding. A well-designed policy framework ensures compliance while reinforcing organizational identity.
              </p>

              <h2>Regulatory Compliance</h2>
              <p>
                Essential compliance elements include:
              </p>
              <ul>
                <li>Saudi health authority requirements</li>
                <li>Infection control standards</li>
                <li>Safety regulations</li>
                <li>Professional body guidelines</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Brand Integration</h3>
                <p className="text-sm mb-4">
                  Key branding considerations:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Color scheme alignment</li>
                  <li>Logo placement standards</li>
                  <li>Design consistency</li>
                  <li>Quality standards</li>
                </ul>
              </div>

              <h2>Cultural Considerations</h2>
              <p>
                Important cultural elements:
              </p>
              <ul>
                <li>Modesty requirements</li>
                <li>Religious accommodations</li>
                <li>Gender-specific guidelines</li>
                <li>Local customs respect</li>
              </ul>

              <h2>Department Differentiation</h2>
              <p>
                Departmental identity features:
              </p>
              <ul>
                <li>Color coding systems</li>
                <li>Role-specific variations</li>
                <li>Specialty identifiers</li>
                <li>Hierarchy indicators</li>
              </ul>

              <h2>Professional Standards</h2>
              <p>
                Key professional elements:
              </p>
              <ul>
                <li>Appearance guidelines</li>
                <li>Maintenance standards</li>
                <li>Replacement criteria</li>
                <li>Wear protocols</li>
              </ul>

              <h2>Implementation Strategy</h2>
              <p>
                Effective rollout requires:
              </p>
              <ul>
                <li>Clear communication plans</li>
                <li>Staff training programs</li>
                <li>Compliance monitoring</li>
                <li>Regular policy reviews</li>
              </ul>

              <h2>Policy Documentation</h2>
              <p>
                Essential documentation includes:
              </p>
              <ul>
                <li>Written guidelines</li>
                <li>Visual standards</li>
                <li>Compliance checklists</li>
                <li>Review procedures</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Successful healthcare uniform policies balance regulatory compliance with brand identity while respecting cultural norms. Regular review and updates ensure these policies remain effective and relevant in Saudi Arabia's evolving healthcare landscape.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Maha Al-Otaibi is a healthcare policy specialist with expertise in uniform compliance and brand management. She has helped numerous Saudi healthcare institutions develop and implement effective uniform policies.</p>
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
                  <Link href="/blog/cultural-sensitivity-in-healthcare-uniform-design-for-saudi-hospitals" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Cultural Sensitivity in Healthcare Uniform Design</div>
                    <div className="text-xs text-gray-500">Cultural considerations in design</div>
                  </Link>
                  <Link href="/blog/digital-uniform-management-systems" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Digital Uniform Management Systems</div>
                    <div className="text-xs text-gray-500">Modern management solutions</div>
                  </Link>
                  <Link href="/blog/custom-embroidery-for-hospital-logos-and-department-names" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Custom Embroidery for Hospital Logos</div>
                    <div className="text-xs text-gray-500">Professional branding solutions</div>
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
