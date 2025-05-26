import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: `Maternity Scrubs and Uniform Options for Healthcare Professionals | UniformSA`,
    description: `Comprehensive guide to maternity scrubs and uniform options for healthcare professionals in Saudi Arabia, focusing on comfort, functionality, and professional style.`,
    keywords: `maternity scrubs Saudi Arabia, healthcare maternity uniforms, medical professional pregnancy wear, hospital maternity clothing, KSA healthcare uniforms`,
    openGraph: {
      images: ['/images/blog/maternity-scrubs-and-uniform-options-for-healthcare-professionals/image.jpg'],
      title: `Maternity Scrubs and Uniform Options for Healthcare Professionals`,
      description: `Expert guide to comfortable and professional maternity uniforms designed specifically for healthcare workers in Saudi Arabia.`,
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
            <span>{`>`}</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>{`>`}</span>
            <span className="text-gray-700 dark:text-white">Maternity Scrubs and Uniforms</span>
          </nav>

          {/* Featured Image */}
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/images/blog/maternity-scrubs-and-uniform-options-for-healthcare-professionals/image.jpg"
              alt="Healthcare Professional Maternity Scrubs and Uniforms"
              fill
              className="object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Maternity Scrubs and Uniform Options for Healthcare Professionals
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>May 23, 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Healthcare, Maternity</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              This comprehensive guide discusses the various maternity scrubs and uniform options available for healthcare professionals, focusing on comfort, functionality, and style tailored to the needs of expectant mothers in the medical field.
            </p>

            <section>
              <h2>Comfort and Fit</h2>
              <p>
                Our maternity scrubs are thoughtfully designed to provide exceptional comfort and accommodate the changing body shape during pregnancy. Each garment features adjustable elements and stretchy fabrics strategically placed to ensure comfort throughout all stages of pregnancy while maintaining a professional appearance.
              </p>
            </section>

            <section>
              <h2>Functionality</h2>
              <p>
                These specialized uniforms maintain the high professional standards required in healthcare settings while ensuring unrestricted movement and practical functionality. Features include easily accessible pockets, flexible waistbands, and breathable materials that adapt to the unique needs of expectant healthcare professionals.
              </p>
            </section>

            <section>
              <h2>Style Options</h2>
              <p>
                We offer a diverse range of styles and colors to suit personal preferences while adhering to workplace dress codes. Our maternity uniforms are designed to help healthcare professionals maintain their confidence and professional image throughout their pregnancy journey.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
