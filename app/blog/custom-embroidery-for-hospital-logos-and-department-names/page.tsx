import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom Embroidery for Hospital Logos and Department Names | UniformSA',
  description: 'Learn about professional embroidery solutions for healthcare uniforms, including best practices for hospital branding and department identification.',
  openGraph: {
    title: 'Custom Embroidery for Hospital Logos and Department Names | UniformSA',
    description: 'Learn about professional embroidery solutions for healthcare uniforms, including best practices for hospital branding and department identification.',
    images: ['/images/healthcare/Embroidery_on_medical_uniforms.jpg'],
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
            <span className="text-gray-700 dark:text-white">Custom Embroidery for Hospital Logos and Department Names</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/healthcare/Embroidery_on_medical_uniforms.jpg"
              alt="Professional embroidery of hospital logos and department names on healthcare uniforms"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Custom Embroidery for Hospital Logos and Department Names
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 25, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Branding, Healthcare, Professional Identity</span>
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
                Professional embroidery plays a crucial role in healthcare facility branding and staff identification. Quality embroidery not only enhances the professional appearance of uniforms but also helps maintain clear departmental organization and reinforces institutional identity.
              </p>

              <h2>Design Considerations</h2>
              <p>
                Key factors in embroidery design:
              </p>
              <ul>
                <li>Logo size and placement optimization</li>
                <li>Color consistency with brand guidelines</li>
                <li>Font clarity and legibility</li>
                <li>Material compatibility assessment</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Quality Standards</h3>
                <p className="text-sm mb-4">
                  Essential quality measures include:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>High-definition embroidery techniques</li>
                  <li>Durability testing protocols</li>
                  <li>Color fastness verification</li>
                  <li>Wash resistance standards</li>
                </ul>
              </div>

              <h2>Branding Integration</h2>
              <p>
                Professional branding elements include:
              </p>
              <ul>
                <li>Consistent logo representation</li>
                <li>Department color coding</li>
                <li>Role identification systems</li>
                <li>Hierarchical distinctions</li>
              </ul>

              <h2>Technical Specifications</h2>
              <p>
                Important technical considerations:
              </p>
              <ul>
                <li>Thread type selection</li>
                <li>Stitch density optimization</li>
                <li>Backing material choices</li>
                <li>Machine calibration requirements</li>
              </ul>

              <h2>Cultural Adaptations</h2>
              <p>
                Local considerations include:
              </p>
              <ul>
                <li>Arabic text integration</li>
                <li>Bilingual design solutions</li>
                <li>Cultural symbol respect</li>
                <li>Traditional element incorporation</li>
              </ul>

              <h2>Implementation Process</h2>
              <p>
                Efficient execution through:
              </p>
              <ul>
                <li>Digital design approval systems</li>
                <li>Batch processing optimization</li>
                <li>Quality control checkpoints</li>
                <li>Delivery scheduling coordination</li>
              </ul>

              <h2>Maintenance Guidelines</h2>
              <p>
                Preserving embroidery quality:
              </p>
              <ul>
                <li>Proper washing instructions</li>
                <li>Storage recommendations</li>
                <li>Repair procedures</li>
                <li>Replacement schedules</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Professional embroidery services are essential for maintaining high standards in healthcare uniform identification and branding. Through careful attention to design, quality, and implementation, hospitals can ensure their staff uniforms effectively represent their institution's professional image.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Hassan Al-Qurashi is a professional branding specialist with extensive experience in healthcare uniform customization. His expertise focuses on integrating traditional and modern design elements in institutional branding.</p>
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
                  <Link href="/blog/healthcare-uniform-policies-balancing-compliance-with-brand-identity" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Healthcare Uniform Policies: Balancing Compliance with Brand Identity</div>
                    <div className="text-xs text-gray-500">Policy development guidelines</div>
                  </Link>
                  <Link href="/blog/ordering-and-sizing-healthcare-uniforms-for-diverse-staff-bodies" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Ordering and Sizing Healthcare Uniforms for Diverse Staff Bodies</div>
                    <div className="text-xs text-gray-500">Uniform management solutions</div>
                  </Link>
                  <Link href="/blog/digital-uniform-management-systems" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Digital Uniform Management Systems</div>
                    <div className="text-xs text-gray-500">Modern inventory solutions</div>
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
