import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: `Cultural Identity Integration Architecture: Advanced Heritage Systems for Saudi Hospitality Attire 2025 | UniformSA`,
    description: `Comprehensive analysis of next-generation cultural design methodology for Saudi hospitality environments, featuring heritage preservation frameworks, contemporary adaptation systems, and regional identity optimization aligned with Vision 2030 cultural leadership standards.`,
    keywords: `cultural identity integration Saudi Arabia 2025, heritage design architecture KSA, hospitality attire systems, contemporary adaptation methodology, regional identity optimization, Saudi cultural preservation, Vision 2030 tourism standards`,
    openGraph: {
      images: ['/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg'],
      title: `Cultural Identity Integration Architecture: Advanced Heritage Systems for Saudi Hospitality Attire 2025`,
      description: `Strategic implementation framework for deploying sophisticated cultural elements across Saudi hospitality attire systems, delivering unprecedented authenticity through advanced design methodologies aligned with Vision 2030 cultural objectives.`,
    },
  }
}

export default function BlogPost() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      {/* Previous content remains the same until the Related Articles section */}
      
      {/* Sidebar */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-8">
          {/* Share Section */}
          <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-4 text-lg font-semibold">Share Article</h3>
            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-4 text-lg font-semibold">Related Articles</h3>
            <div className="space-y-4">
              <Link href="/blog/designing-elegant-and-functional-hotel-uniforms-for-the-luxury-saudi-market" className="group block">
                <div className="text-sm font-medium group-hover:text-primary">Designing Elegant and Functional Hotel Uniforms for the Luxury Saudi Market</div>
                <div className="text-xs text-gray-500">Luxury hospitality uniform design principles</div>
              </Link>
              <Link href="/blog/color-trends-in-modern-hospitality-uniform-design-in-the-middle-east" className="group block">
                <div className="text-sm font-medium group-hover:text-primary">Color Trends in Modern Hospitality Uniform Design in the Middle East</div>
                <div className="text-xs text-gray-500">Contemporary color applications in hospitality</div>
              </Link>
              <Link href="/blog/fabric-choices-for-hospitality-wear-stain-resistance-and-easy-maintenance" className="group block">
                <div className="text-sm font-medium group-hover:text-primary">Advanced Material Selection Systems for Hospitality Environments</div>
                <div className="text-xs text-gray-500">Optimizing fabric performance in service contexts</div>
              </Link>
              <Link href="/blog" className="group block pt-2">
                <div className="text-sm font-medium group-hover:text-primary">View All Resources</div>
                <div className="text-xs text-gray-500">Explore our complete knowledge library</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
