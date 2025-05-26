import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'Cultural Sensitivity in Healthcare Uniform Design for Saudi Hospitals | UniformSA',
    description: 'Discover how Saudi hospitals are incorporating cultural elements into healthcare uniform design while maintaining professional standards and functionality.',
    openGraph: {
      images: ['/images/healthcare/cultural_uniforms.jpg'],
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
            <span>{'>'}</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>{'>'}</span>
            <span className="text-gray-700 dark:text-white">Cultural Sensitivity in Healthcare Uniform Design for Saudi Hospitals</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/healthcare/cultural_uniforms.jpg"
              alt="Healthcare professionals wearing culturally sensitive uniforms in a Saudi hospital setting"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cultural Sensitivity in Healthcare Uniform Design for Saudi Hospitals
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 8, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Cultural Design, Healthcare Standards, Professional Attire</span>
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
                In Saudi Arabia's healthcare sector, uniform design must carefully balance professional medical standards with deep-rooted cultural values. This integration creates an environment where both healthcare providers and patients feel comfortable while maintaining the highest levels of care.
              </p>

              <h2>Cultural Elements in Modern Healthcare Attire</h2>
              <p>
                Saudi hospitals are incorporating various cultural elements into their uniform designs:
              </p>
              <ul>
                <li>Modified fits that respect Islamic modesty requirements</li>
                <li>Integration of traditional design elements</li>
                <li>Color schemes that reflect cultural significance</li>
                <li>Adaptable designs for various religious practices</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Key Design Considerations</h3>
                <p className="text-sm mb-4">
                  Modern healthcare uniforms in Saudi hospitals address multiple cultural aspects:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Appropriate coverage for both male and female staff</li>
                  <li>Compatibility with traditional head coverings</li>
                  <li>Designs that facilitate prayer times</li>
                  <li>Gender-specific variations in design and fit</li>
                </ul>
              </div>

              <h2>Professional Standards and Cultural Integration</h2>
              <p>
                Successful uniform designs maintain professional standards while respecting cultural norms:
              </p>
              <ul>
                <li>Clear professional role identification</li>
                <li>Compliance with infection control requirements</li>
                <li>Incorporation of institutional branding</li>
                <li>Maintenance of cultural authenticity</li>
              </ul>

              <h2>Material Selection and Comfort</h2>
              <p>
                Fabric choices consider both cultural and practical requirements:
              </p>
              <ul>
                <li>Breathable materials suitable for modest coverage</li>
                <li>Durable fabrics that maintain modesty and shape</li>
                <li>Anti-static properties for layered garments</li>
                <li>Easy-care materials for frequent washing</li>
              </ul>

              <h2>Implementation Strategies</h2>
              <p>
                Successful cultural integration in uniform programs requires:
              </p>
              <ul>
                <li>Consultation with religious authorities</li>
                <li>Staff input in design processes</li>
                <li>Regular review of cultural compliance</li>
                <li>Flexible options for diverse staff needs</li>
              </ul>

              <h2>Future Trends</h2>
              <p>
                Emerging developments in culturally sensitive uniform design include:
              </p>
              <ul>
                <li>Smart fabrics that maintain modesty while improving comfort</li>
                <li>Enhanced customization options</li>
                <li>Sustainable materials that meet cultural requirements</li>
                <li>Innovative closure systems for traditional styles</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The successful integration of cultural sensitivity in healthcare uniform design demonstrates Saudi Arabia's commitment to maintaining traditional values while advancing modern healthcare practices. This balanced approach ensures comfortable, professional, and culturally appropriate attire for healthcare providers.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Nora Al-Saud is a healthcare management consultant specializing in cultural integration in medical settings. With expertise in both healthcare administration and Islamic studies, she helps institutions develop uniform policies that respect both professional and cultural requirements.</p>
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
                  <Link href="/blog/how-professional-uniforms-influence-patient-trust-and-confidence-in-saudi-healthcare" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">How Professional Uniforms Influence Patient Trust in Saudi Healthcare</div>
                    <div className="text-xs text-gray-500">Building trust through professional appearance</div>
                  </Link>
                  <Link href="/blog/integrating-saudi-cultural-elements-into-hospitality-uniform-design" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Integrating Saudi Cultural Elements into Hospitality Uniform Design</div>
                    <div className="text-xs text-gray-500">Cultural elements in hospitality wear</div>
                  </Link>
                  <Link href="/blog/healthcare-uniform-policies-balancing-compliance-with-brand-identity" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Healthcare Uniform Policies: Balancing Compliance with Brand Identity</div>
                    <div className="text-xs text-gray-500">Policy development for healthcare attire</div>
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
