import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ordering and Sizing Healthcare Uniforms for Diverse Staff Bodies | UniformSA',
  description: 'Learn effective strategies for ordering and sizing healthcare uniforms to accommodate diverse body types and ensure comfort and professionalism for all staff members.',
  openGraph: {
    title: 'Ordering and Sizing Healthcare Uniforms for Diverse Staff Bodies | UniformSA',
    description: 'Learn effective strategies for ordering and sizing healthcare uniforms to accommodate diverse body types and ensure comfort and professionalism for all staff members.',
    images: ['/images/healthcare/uniform_sizing.jpg'],
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
            <span className="text-gray-700 dark:text-white">Ordering and Sizing Healthcare Uniforms for Diverse Staff Bodies</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/healthcare/uniform_sizing.jpg"
              alt="Healthcare professionals being fitted for uniforms with attention to diverse body types"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ordering and Sizing Healthcare Uniforms for Diverse Staff Bodies
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 18, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Healthcare, Uniform Management, Staff Comfort</span>
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
                In Saudi Arabia's diverse healthcare environment, ensuring proper uniform fit for all staff members is crucial for both professional appearance and comfort. A comprehensive approach to sizing and ordering uniforms helps maintain high standards while respecting individual needs.
              </p>

              <h2>Understanding Size Diversity</h2>
              <p>
                Key considerations in uniform sizing include:
              </p>
              <ul>
                <li>Anthropometric data specific to regional demographics</li>
                <li>Cultural preferences for fit and coverage</li>
                <li>Gender-specific sizing requirements</li>
                <li>Accommodation of religious dress requirements</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Measurement Best Practices</h3>
                <p className="text-sm mb-4">
                  Essential measurement protocols include:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Professional fitting services</li>
                  <li>Regular size updates</li>
                  <li>Standardized measurement procedures</li>
                  <li>Privacy considerations during fittings</li>
                </ul>
              </div>

              <h2>Ordering Systems</h2>
              <p>
                Efficient ordering processes incorporate:
              </p>
              <ul>
                <li>Digital measurement records</li>
                <li>Automated reordering systems</li>
                <li>Size prediction algorithms</li>
                <li>Inventory management integration</li>
              </ul>

              <h2>Customization Options</h2>
              <p>
                Accommodating individual needs through:
              </p>
              <ul>
                <li>Adjustable features</li>
                <li>Modified length options</li>
                <li>Extended size ranges</li>
                <li>Special fit requirements</li>
              </ul>

              <h2>Quality Assurance</h2>
              <p>
                Maintaining consistent standards through:
              </p>
              <ul>
                <li>Regular fit assessments</li>
                <li>Material quality checks</li>
                <li>Wear testing programs</li>
                <li>Staff feedback systems</li>
              </ul>

              <h2>Cost Management</h2>
              <p>
                Optimizing uniform programs through:
              </p>
              <ul>
                <li>Bulk ordering strategies</li>
                <li>Supplier partnerships</li>
                <li>Inventory optimization</li>
                <li>Standardization benefits</li>
              </ul>

              <h2>Implementation Strategies</h2>
              <p>
                Successful uniform programs include:
              </p>
              <ul>
                <li>Clear sizing policies</li>
                <li>Staff education programs</li>
                <li>Regular review processes</li>
                <li>Feedback mechanisms</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Effective uniform sizing and ordering systems are essential for maintaining professional standards while ensuring staff comfort and satisfaction. Through careful planning and implementation, healthcare facilities can create inclusive uniform programs that serve their diverse workforce effectively.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Fatima Al-Thani is a healthcare uniform management specialist with extensive experience in implementing sizing and ordering systems for major Saudi healthcare facilities. Her expertise focuses on creating inclusive and efficient uniform programs.</p>
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
                  <Link href="/blog/custom-embroidery-for-hospital-logos-and-department-names" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Custom Embroidery for Hospital Logos and Department Names</div>
                    <div className="text-xs text-gray-500">Professional branding solutions</div>
                  </Link>
                  <Link href="/blog/uniform-management-solutions-for-hospitals-leasing-vs-buying-in-ksa" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Uniform Management Solutions: Leasing vs. Buying in KSA</div>
                    <div className="text-xs text-gray-500">Cost-effective uniform strategies</div>
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
