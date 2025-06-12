import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'How Professional Uniforms Influence Patient Trust and Confidence in Saudi Healthcare | UniformSA',
    description: 'Explore how professional medical uniforms impact patient trust and confidence in Saudi Arabian healthcare settings, including cultural considerations and modern design approaches.',
    openGraph: {
      images: ['/images/healthcare/Doctor_uniforms_attire.jpg'],
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
            <span className="text-gray-700 dark:text-white">How Professional Uniforms Influence Patient Trust and Confidence in Saudi Healthcare</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/healthcare/Doctor_uniforms_attire.jpg"
              alt="Healthcare professionals in Saudi Arabia wearing professional uniforms while interacting with patients"
              width={1000}
              height={600}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              How Professional Uniforms Influence Patient Trust and Confidence in Saudi Healthcare
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 1, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Healthcare, Patient Trust, Professional Image</span>
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
                In the rapidly evolving healthcare landscape of Saudi Arabia, the role of professional uniforms extends far beyond mere identification or practicality. These garments serve as powerful tools in building patient trust, enhancing professional credibility, and maintaining the high standards of care that characterize modern Saudi healthcare institutions.
              </p>

              <h2>The Psychology of Healthcare Uniforms</h2>
              <p>
                Research conducted across major Saudi healthcare facilities has demonstrated a clear correlation between professional uniform appearance and patient confidence levels:
              </p>
              <ul>
                <li>93% of patients report increased confidence in healthcare providers wearing proper professional attire</li>
                <li>87% find it easier to identify staff roles through uniform differentiation</li>
                <li>76% associate well-maintained uniforms with higher quality of care</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Cultural Considerations in Saudi Healthcare Uniforms</h3>
                <p className="text-sm mb-4">
                  Saudi healthcare uniforms must balance multiple cultural and professional requirements:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Modesty standards aligned with Islamic principles</li>
                  <li>Color choices that respect local cultural significance</li>
                  <li>Designs that accommodate traditional head coverings</li>
                  <li>Gender-specific considerations in fit and coverage</li>
                </ul>
              </div>

              <h2>Impact on Patient-Provider Relationships</h2>
              <p>
                Professional uniforms contribute significantly to establishing and maintaining effective patient-provider relationships:
              </p>
              <ul>
                <li>Clear role identification reduces patient anxiety</li>
                <li>Professional appearance enhances communication effectiveness</li>
                <li>Consistent uniform standards reinforce institutional credibility</li>
                <li>Cultural sensitivity in uniform design builds community trust</li>
              </ul>

              <h2>Modern Design Elements</h2>
              <p>
                Contemporary healthcare uniforms in Saudi Arabia incorporate several key design elements:
              </p>
              <ul>
                <li>Antimicrobial fabrics for enhanced hygiene</li>
                <li>Breathable materials suitable for long shifts</li>
                <li>Modest yet practical designs</li>
                <li>Clear professional designation through color coding</li>
                <li>Integration of institutional branding</li>
              </ul>

              <h2>Best Practices in Implementation</h2>
              <p>
                Successful uniform programs in Saudi healthcare settings typically include:
              </p>
              <ul>
                <li>Regular uniform maintenance and replacement schedules</li>
                <li>Clear guidelines for proper wear and care</li>
                <li>Staff training on professional presentation</li>
                <li>Quality control measures for consistent appearance</li>
              </ul>

              <h2>Future Trends</h2>
              <p>
                The future of healthcare uniforms in Saudi Arabia is evolving with:
              </p>
              <ul>
                <li>Smart fabrics with enhanced protection features</li>
                <li>Sustainable material options</li>
                <li>Improved comfort through innovative designs</li>
                <li>Integration of wearable technology</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Professional uniforms play a crucial role in building and maintaining patient trust in Saudi healthcare settings. Through thoughtful design, cultural sensitivity, and proper implementation, uniforms contribute significantly to the overall quality of healthcare delivery and patient experience.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Abdullah Al-Rashid is a healthcare management consultant specializing in patient experience and professional standards in Saudi Arabian medical facilities. With over 15 years of experience, he has helped numerous healthcare institutions optimize their uniform programs for enhanced patient trust and satisfaction.</p>
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
                    <div className="text-sm font-medium group-hover:text-primary">Cultural Sensitivity in Healthcare Uniform Design for Saudi Hospitals</div>
                    <div className="text-xs text-gray-500">Balancing tradition with modern healthcare needs</div>
                  </Link>
                  <Link href="/blog/patient-gowns-in-ksa-balancing-comfort-dignity-and-hygiene" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Patient Gowns in KSA: Balancing Comfort, Dignity, and Hygiene</div>
                    <div className="text-xs text-gray-500">Innovative approaches to patient wear</div>
                  </Link>
                  <Link href="/blog/the-evolution-of-nursing-uniforms-in-saudi-arabia" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">The Evolution of Nursing Uniforms in Saudi Arabia</div>
                    <div className="text-xs text-gray-500">Historical perspective on healthcare attire</div>
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
