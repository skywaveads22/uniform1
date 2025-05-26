import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Uniform Management Systems: Streamlining Operations | UniformSA',
  description: 'Explore how digital solutions are revolutionizing uniform management in Saudi Arabian healthcare and hospitality sectors, improving efficiency and tracking.',
  openGraph: {
    title: 'Digital Uniform Management Systems: Streamlining Operations | UniformSA',
    description: 'Explore how digital solutions are revolutionizing uniform management in Saudi Arabian healthcare and hospitality sectors, improving efficiency and tracking.',
    images: ['/images/technology/digital_management.jpg'],
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
            <span className="text-gray-700 dark:text-white">Digital Uniform Management Systems</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/technology/digital_management.jpg"
              alt="Modern digital uniform management system interface and implementation"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Digital Uniform Management Systems: Streamlining Operations
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 30, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Technology, Management, Efficiency</span>
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
                Digital uniform management systems are transforming how Saudi Arabian institutions handle their uniform programs. These advanced solutions offer unprecedented control, efficiency, and data-driven decision-making capabilities.
              </p>

              <h2>Key System Features</h2>
              <p>
                Essential functionalities include:
              </p>
              <ul>
                <li>Real-time inventory tracking</li>
                <li>Automated ordering systems</li>
                <li>Staff allocation management</li>
                <li>Usage analytics and reporting</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Implementation Benefits</h3>
                <p className="text-sm mb-4">
                  Digital systems provide:
                </p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li>Reduced administrative overhead</li>
                  <li>Improved inventory accuracy</li>
                  <li>Enhanced cost control</li>
                  <li>Streamlined workflows</li>
                </ul>
              </div>

              <h2>Integration Capabilities</h2>
              <p>
                System connectivity features:
              </p>
              <ul>
                <li>HR system integration</li>
                <li>Procurement system linking</li>
                <li>Mobile app accessibility</li>
                <li>Cloud-based solutions</li>
              </ul>

              <h2>Data Analytics</h2>
              <p>
                Analytical capabilities include:
              </p>
              <ul>
                <li>Usage pattern analysis</li>
                <li>Cost optimization insights</li>
                <li>Predictive maintenance</li>
                <li>Compliance monitoring</li>
              </ul>

              <h2>Security Features</h2>
              <p>
                Protection measures include:
              </p>
              <ul>
                <li>Role-based access control</li>
                <li>Data encryption standards</li>
                <li>Audit trail tracking</li>
                <li>Backup and recovery systems</li>
              </ul>

              <h2>User Experience</h2>
              <p>
                Interface considerations include:
              </p>
              <ul>
                <li>Intuitive navigation design</li>
                <li>Multilingual support</li>
                <li>Mobile responsiveness</li>
                <li>Customizable dashboards</li>
              </ul>

              <h2>Future Developments</h2>
              <p>
                Emerging technologies include:
              </p>
              <ul>
                <li>AI-powered inventory prediction</li>
                <li>IoT integration capabilities</li>
                <li>Blockchain tracking systems</li>
                <li>Advanced analytics tools</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Digital uniform management systems represent a significant advancement in operational efficiency for Saudi Arabian institutions. By embracing these technologies, organizations can achieve better control, cost savings, and improved service delivery in their uniform programs.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Eng. Omar Al-Dhahri is a digital transformation specialist focusing on healthcare and hospitality operations. His expertise includes implementing advanced management systems that enhance operational efficiency and user experience.</p>
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
                  <Link href="/blog/uniform-management-solutions-leasing-vs-buying-in-ksa" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Uniform Management Solutions: Leasing vs. Buying in KSA</div>
                    <div className="text-xs text-gray-500">Cost-effective strategies</div>
                  </Link>
                  <Link href="/blog/future-of-uniform-management" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">The Future of Uniform Management</div>
                    <div className="text-xs text-gray-500">Emerging trends and technologies</div>
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
