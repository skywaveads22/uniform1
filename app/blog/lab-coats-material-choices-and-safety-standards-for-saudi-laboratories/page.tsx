import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: `Lab Coats: Material Choices and Safety Standards for Saudi Laboratories | UniformSA`,
    description: `Comprehensive guide to laboratory coat materials and safety standards in Saudi Arabia, covering protective requirements and compliance for scientific environments.`,
    keywords: `lab coats Saudi Arabia, laboratory safety standards KSA, scientific protective wear, research facility uniforms, Saudi laboratory compliance`,
    openGraph: {
      images: ['/images/blog/lab-coats-material-choices-and-safety-standards-for-saudi-laboratories/image.jpg'],
      title: `Lab Coats: Material Choices and Safety Standards for Saudi Laboratories`,
      description: `Expert analysis of laboratory coat materials and safety standards for Saudi Arabia&apos;s research and scientific facilities.`,
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
            <span className="text-gray-700 dark:text-white">Lab Coats and Safety Standards</span>
          </nav>

          {/* Featured Image */}
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/images/blog/lab-coats-material-choices-and-safety-standards-for-saudi-laboratories/image.jpg"
              alt="Lab Coats Material and Safety Standards"
              fill
              className="object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lab Coats: Material Choices and Safety Standards for Saudi Laboratories
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>May 22, 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Laboratory, Safety</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              This comprehensive guide explores the various materials used in lab coats and the safety standards that must be met in Saudi laboratories. We highlight the importance of protective clothing in maintaining safety and compliance in scientific environments.
            </p>

            <section>
              <h2>Material Selection</h2>
              <p>
                Lab coats are crafted from carefully selected materials that provide optimal chemical resistance, durability, and comfort. Common fabrics include specialized cotton blends and advanced synthetic fibers designed specifically for laboratory environments. Each material is chosen based on its protective properties and ability to meet rigorous safety requirements.
              </p>
            </section>

            <section>
              <h2>Safety Standards</h2>
              <p>
                Our lab coats maintain strict compliance with both local Saudi regulations and international safety standards, ensuring comprehensive protection against various laboratory hazards. This includes resistance to chemical spills, contamination prevention, and fire safety features that meet or exceed industry requirements.
              </p>
            </section>

            <section>
              <h2>Usage Guidelines</h2>
              <p>
                Proper use and maintenance of lab coats are essential for maintaining their protective properties and ensuring long-term effectiveness. We provide detailed guidelines for care, cleaning, and storage to maximize the garment&apos;s protective capabilities and longevity in laboratory settings.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
