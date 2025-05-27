import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: `Fluid Resistant and Barrier Technologies in Medical Textiles | UniformSA`,
    description: `Comprehensive analysis of advanced fluid resistant and barrier technologies in medical textiles, focusing on healthcare uniform applications and protective gear innovations.`,
    keywords: `medical textile technology, fluid resistant uniforms, healthcare barrier systems, protective medical gear, Saudi healthcare textiles`,
    openGraph: {
      images: ['/images/blog/fluid-resistant-and-barrier-technologies-in-medical-textiles/image.jpg'],
      title: `Fluid Resistant and Barrier Technologies in Medical Textiles`,
      description: `In-depth exploration of cutting-edge fluid resistant technologies and barrier systems revolutionizing medical textiles and healthcare protective wear.`,
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
            <span className="text-gray-700 dark:text-white">Medical Textile Technologies</span>
          </nav>

          {/* Featured Image */}
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/images/blog/fluid-resistant-and-barrier-technologies-in-medical-textiles/image.jpg"
              alt="Advanced Medical Textile Technologies and Barrier Systems"
              fill
              className="object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fluid Resistant and Barrier Technologies in Medical Textiles
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>May 26, 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Medical Technology, Protection</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              This comprehensive analysis explores the latest advancements in fluid resistant and barrier technologies used in medical textiles, with a particular focus on their application in healthcare uniforms and protective gear. We examine how these innovations are revolutionizing healthcare worker safety and infection control.
            </p>

            <section>
              <h2>Technology Overview</h2>
              <p>
                Modern medical textiles incorporate sophisticated coatings and innovative fabric structures to provide superior resistance against fluids and contaminants. These advanced materials utilize multi-layer protection systems and specialized surface treatments to ensure maximum safety in healthcare environments. The integration of nanotechnology and smart materials has enabled unprecedented levels of protection while maintaining comfort and breathability.
              </p>
            </section>

            <section>
              <h2>Applications</h2>
              <p>
                These cutting-edge technologies play a crucial role in the development of high-performance uniforms, surgical gowns, and other protective equipment. Each application is carefully engineered to meet specific healthcare requirements, from operating room environments to general patient care settings. The versatility of these technologies allows for customized solutions that address various levels of fluid exposure risk while maintaining essential comfort and mobility.
              </p>
            </section>

            <section>
              <h2>Future Trends</h2>
              <p>
                The field of medical textile technology continues to evolve rapidly, with ongoing innovations focused on enhancing both protective properties and user comfort. Emerging trends include the development of self-cleaning surfaces, improved environmental sustainability, and smart textiles that can monitor exposure levels. These advancements promise to further revolutionize healthcare worker protection while reducing environmental impact.
              </p>
            </section>

            <section>
              <h2>Implementation Guidelines</h2>
              <p>
                Successful implementation of these technologies requires careful consideration of various factors, including:
              </p>
              <ul>
                <li>Risk assessment and protection level requirements</li>
                <li>Comfort and breathability considerations</li>
                <li>Durability and maintenance protocols</li>
                <li>Cost-effectiveness and lifecycle management</li>
                <li>Environmental impact and sustainability measures</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
