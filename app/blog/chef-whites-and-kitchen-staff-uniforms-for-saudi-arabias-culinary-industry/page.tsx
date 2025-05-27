import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: `Chef Whites and Kitchen Staff Uniforms for Saudi Arabia's Culinary Industry | UniformSA`,
    description: `Comprehensive guide to professional kitchen uniforms in Saudi Arabia, covering design, functionality, and hygiene standards for culinary staff.`,
    keywords: `chef whites Saudi Arabia, kitchen staff uniforms KSA, culinary industry uniforms, professional kitchen wear, Saudi restaurant uniforms`,
    openGraph: {
      images: ['/images/blog/chef-whites-and-kitchen-staff-uniforms-for-saudi-arabias-culinary-industry/image.jpg'],
      title: `Chef Whites and Kitchen Staff Uniforms for Saudi Arabia's Culinary Industry`,
      description: `Expert insights into professional kitchen uniform standards and requirements for Saudi Arabia's growing culinary sector.`,
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
            <span>&gt;</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700 dark:text-white">Chef Whites and Kitchen Staff Uniforms</span>
          </nav>

          {/* Featured Image */}
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/images/blog/chef-whites-and-kitchen-staff-uniforms-for-saudi-arabias-culinary-industry/image.jpg"
              alt="Chef Whites and Kitchen Staff Uniforms"
              fill
              className="object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chef Whites and Kitchen Staff Uniforms for Saudi Arabia's Culinary Industry
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>May 20, 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Culinary, Uniforms</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              This comprehensive guide explores the design, functionality, and importance of chef whites and kitchen staff uniforms tailored for the culinary industry in Saudi Arabia. We cover material choices, hygiene standards, and cultural considerations to ensure comfort and professionalism in the kitchen environment.
            </p>

            <section>
              <h2>Material and Design</h2>
              <p>
                The uniforms are made from breathable, durable fabrics that withstand the heat and demands of a busy kitchen. The design incorporates traditional elements with modern functionality, ensuring both comfort and professional appearance.
              </p>
            </section>

            <section>
              <h2>Hygiene and Safety</h2>
              <p>
                We place special emphasis on easy-to-clean materials and safety features such as flame resistance and stain repellency to maintain high hygiene standards. These features are crucial in maintaining food safety and professional kitchen operations.
              </p>
            </section>

            <section>
              <h2>Cultural Considerations</h2>
              <p>
                Our uniforms are thoughtfully designed to respect local customs and cultural norms while promoting a professional image in Saudi Arabia's culinary establishments. This balance ensures staff comfort and compliance with local expectations.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
