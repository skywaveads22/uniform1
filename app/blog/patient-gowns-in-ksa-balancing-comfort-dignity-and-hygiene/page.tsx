import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'Patient Gowns in KSA: Balancing Comfort, Dignity, and Hygiene | UniformSA',
    description: 'Explore innovative approaches to patient gown design in Saudi Arabian healthcare facilities, focusing on cultural sensitivity, comfort, and infection control.',
    openGraph: {
      images: ['/images/healthcare/patient_gowns.jpg'],
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
            <span className="text-gray-700 dark:text-white">Patient Gowns in KSA: Balancing Comfort, Dignity, and Hygiene</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/healthcare/patient_gowns.jpg"
              alt="Modern patient gowns designed for Saudi Arabian healthcare facilities"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Patient Gowns in KSA: Balancing Comfort, Dignity, and Hygiene
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 5, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Patient Care, Cultural Sensitivity, Healthcare Innovation</span>
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
                In Saudi Arabian healthcare facilities, patient gowns represent a crucial intersection of medical necessity, cultural sensitivity, and patient dignity. Modern designs are evolving to meet these diverse requirements while maintaining the highest standards of hygiene and practicality.
              </p>

              <h2>Cultural Considerations in Design</h2>
              <p>
                Saudi healthcare facilities must address specific cultural requirements in patient gown design:
              </p>
              <ul>
                <li>Full coverage options that align with Islamic modesty principles</li>
                <li>Separate designs for male and female patients</li>
                <li>Accommodations for prayer times and religious practices</li>
                <li>Color choices that respect cultural sensitivities</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Innovation in Patient Comfort</h3>
                <p className="text-sm mb-4">
                  Recent advancements in patient gown design include:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Climate-adaptive fabrics for Saudi Arabia's warm environment</li>
                  <li>Adjustable closures for various body types</li>
                  <li>Modular designs for different medical procedures</li>
                  <li>Enhanced mobility features for patient independence</li>
                </ul>
              </div>

              <h2>Hygiene and Infection Control</h2>
              <p>
                Modern patient gowns incorporate several features to maintain hygiene:
              </p>
              <ul>
                <li>Antimicrobial fabric treatments</li>
                <li>Easy-to-clean materials</li>
                <li>Strategic placement of closures to minimize contamination</li>
                <li>Color-coding systems for infection control protocols</li>
              </ul>

              <h2>Practical Design Elements</h2>
              <p>
                Key features of modern patient gowns in Saudi healthcare include:
              </p>
              <ul>
                <li>Multiple access points for medical procedures</li>
                <li>Secure closure systems</li>
                <li>Integrated modesty panels</li>
                <li>Comfortable fabric weight for the local climate</li>
                <li>Clear size identification systems</li>
              </ul>

              <h2>Implementation Best Practices</h2>
              <p>
                Successful patient gown programs typically include:
              </p>
              <ul>
                <li>Regular replacement schedules</li>
                <li>Staff training on proper gown selection</li>
                <li>Patient education on gown features</li>
                <li>Clear laundering protocols</li>
              </ul>

              <h2>Future Developments</h2>
              <p>
                Emerging trends in patient gown design include:
              </p>
              <ul>
                <li>Smart fabrics with monitoring capabilities</li>
                <li>Enhanced antimicrobial properties</li>
                <li>Sustainable material options</li>
                <li>Improved closure systems</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The evolution of patient gowns in Saudi Arabian healthcare facilities demonstrates how medical necessities can be successfully balanced with cultural requirements and patient comfort. Through thoughtful design and implementation, these garments continue to support both patient dignity and clinical excellence.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Dr. Sarah Al-Qahtani specializes in healthcare textiles and patient experience design. With extensive experience in Saudi Arabian healthcare facilities, she has contributed to developing patient wear solutions that meet both medical and cultural requirements.</p>
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
                  <Link href="/blog/maintaining-sterility-best-practices-for-laundering-healthcare-uniforms" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Maintaining Sterility: Best Practices for Laundering Healthcare Uniforms</div>
                    <div className="text-xs text-gray-500">Essential guidelines for infection control</div>
                  </Link>
                  <Link href="/blog/healthcare-uniform-policies-balancing-compliance-with-brand-identity" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Healthcare Uniform Policies: Balancing Compliance with Brand Identity</div>
                    <div className="text-xs text-gray-500">Strategic approaches to uniform management</div>
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
