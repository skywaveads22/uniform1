import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Uniform Management Solutions: Leasing vs. Buying in KSA | UniformSA',
  description: 'Compare the benefits and considerations of leasing versus buying uniforms for healthcare and hospitality institutions in Saudi Arabia.',
  openGraph: {
    title: 'Uniform Management Solutions: Leasing vs. Buying in KSA | UniformSA',
    description: 'Compare the benefits and considerations of leasing versus buying uniforms for healthcare and hospitality institutions in Saudi Arabia.',
    images: ['/images/services/uniform_program_management.jpg'],
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
            <span className="text-gray-700 dark:text-white">Uniform Management Solutions: Leasing vs. Buying in KSA</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/services/uniform_program_management.jpg"
              alt="Professional uniform management solutions showcasing both leasing and purchasing options"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Uniform Management Solutions: Leasing vs. Buying in KSA
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 28, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Management, Cost Analysis, Operations</span>
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
                Saudi Arabian institutions face important decisions when managing their uniform programs. Understanding the advantages and considerations of leasing versus buying can significantly impact operational efficiency and cost-effectiveness.
              </p>

              <h2>Leasing Benefits</h2>
              <p>
                Advantages of uniform leasing include:
              </p>
              <ul>
                <li>Reduced initial capital investment</li>
                <li>Professional maintenance included</li>
                <li>Regular replacement cycles</li>
                <li>Flexible inventory management</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Cost Comparison</h3>
                <p className="text-sm mb-4">
                  Key financial considerations:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Initial investment requirements</li>
                  <li>Long-term maintenance costs</li>
                  <li>Replacement frequency analysis</li>
                  <li>Storage and handling expenses</li>
                </ul>
              </div>

              <h2>Purchasing Advantages</h2>
              <p>
                Benefits of buying uniforms:
              </p>
              <ul>
                <li>Complete control over inventory</li>
                <li>Customization flexibility</li>
                <li>Long-term cost savings</li>
                <li>Asset ownership benefits</li>
              </ul>

              <h2>Operational Considerations</h2>
              <p>
                Key management factors:
              </p>
              <ul>
                <li>Storage requirements</li>
                <li>Maintenance capabilities</li>
                <li>Staff management needs</li>
                <li>Quality control processes</li>
              </ul>

              <h2>Hybrid Solutions</h2>
              <p>
                Combined approach benefits:
              </p>
              <ul>
                <li>Department-specific solutions</li>
                <li>Seasonal flexibility</li>
                <li>Risk distribution</li>
                <li>Resource optimization</li>
              </ul>

              <h2>Implementation Strategies</h2>
              <p>
                Successful program elements:
              </p>
              <ul>
                <li>Clear policy development</li>
                <li>Staff training programs</li>
                <li>Inventory tracking systems</li>
                <li>Quality assurance measures</li>
              </ul>

              <h2>Financial Planning</h2>
              <p>
                Budget considerations include:
              </p>
              <ul>
                <li>Cash flow analysis</li>
                <li>Tax implications</li>
                <li>Depreciation factors</li>
                <li>Maintenance budgets</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The choice between leasing and buying uniforms depends on various organizational factors including size, budget, and operational capabilities. A thorough analysis of these factors will help institutions make informed decisions that align with their long-term objectives.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Abdullah Al-Rashid is a healthcare operations consultant specializing in uniform program management. With over 15 years of experience, he helps institutions optimize their uniform programs for maximum efficiency and cost-effectiveness.</p>
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
                  <Link href="/blog/digital-uniform-management-systems" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Digital Uniform Management Systems</div>
                    <div className="text-xs text-gray-500">Modern inventory solutions</div>
                  </Link>
                  <Link href="/blog/eco-friendly-uniform-care-and-maintenance" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Eco-Friendly Uniform Care and Maintenance</div>
                    <div className="text-xs text-gray-500">Sustainable maintenance practices</div>
                  </Link>
                  <Link href="/blog/healthcare-uniform-policies-balancing-compliance-with-brand-identity" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Healthcare Uniform Policies: Balancing Compliance with Brand Identity</div>
                    <div className="text-xs text-gray-500">Policy development guidelines</div>
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
