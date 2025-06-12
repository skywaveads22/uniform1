import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'Maternity Scrubs and Uniform Options for Healthcare Professionals in KSA | 2024',
    description: 'Comprehensive guide to maternity scrubs and uniform options for healthcare professionals in Saudi Arabia, covering comfort, functionality, cultural considerations, and professional style throughout pregnancy.',
    keywords: 'maternity scrubs Saudi Arabia, healthcare maternity uniforms KSA, medical professional pregnancy wear, hospital maternity clothing, nursing maternity uniforms, healthcare pregnancy attire',
    openGraph: {
      title: 'Maternity Scrubs and Uniform Options for Healthcare Professionals',
      description: 'Expert guide to comfortable and professional maternity uniforms designed specifically for healthcare workers in Saudi Arabia.',
      images: ['/images/healthcare/Women\'s_medical_scrubs.jpg'],
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
            <span className="text-gray-700 dark:text-white">Maternity Scrubs and Uniforms</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/healthcare/Women's_medical_scrubs.jpg"
              alt="Maternity scrubs and uniform options for healthcare professionals in Saudi Arabia"
              width={1000}
              height={600}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Maternity Scrubs and Uniform Options for Healthcare Professionals in KSA
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>August 15, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>13 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Healthcare, Maternity, Uniforms</span>
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
                Healthcare professionals in Saudi Arabia who are expecting deserve specialized maternity uniforms that provide comfort, functionality, and professional appearance throughout their pregnancy journey. Modern maternity scrubs and medical uniforms are designed to accommodate the changing needs of pregnant healthcare workers while maintaining the high standards of hygiene, safety, and professionalism required in medical environments.
              </p>

              <h2>The Importance of Specialized Maternity Healthcare Uniforms</h2>
              <p>
                Pregnancy brings significant physical changes that affect comfort, mobility, and professional performance in healthcare settings. Traditional medical uniforms often become restrictive and uncomfortable as pregnancy progresses, potentially impacting job performance and overall well-being. Specialized maternity healthcare uniforms address these challenges by providing adaptive fit, enhanced comfort, and maintained professional appearance throughout all stages of pregnancy.
            </p>

              <p>
                In Saudi Arabia's healthcare sector, where cultural considerations and professional standards are paramount, maternity uniforms must balance functionality with modesty requirements while ensuring that pregnant healthcare professionals can continue to provide excellent patient care without compromising their comfort or professional image.
              </p>

              <h2>Design Features for Optimal Comfort</h2>
              
              <h3>Adaptive Fit Technology</h3>
              <p>
                Modern maternity scrubs incorporate sophisticated design elements that adapt to changing body shapes:
              </p>
              
              <ul>
                <li><strong>Expandable Waistbands:</strong> Adjustable waist systems that grow with the pregnancy while maintaining a professional silhouette</li>
                <li><strong>Side Panel Stretch:</strong> Flexible side panels that provide room for expansion without compromising the overall fit</li>
                <li><strong>Under-Belly Support:</strong> Specialized panels that provide gentle support without constriction</li>
                <li><strong>Adjustable Drawstrings:</strong> Customizable fit options that can be modified throughout pregnancy</li>
                <li><strong>Empire Waistlines:</strong> Higher waist placement that accommodates growing belly while maintaining professional appearance</li>
              </ul>

              <h2>Cultural Considerations in Saudi Arabia</h2>

              <h3>Modesty and Coverage Requirements</h3>
              <p>
                Maternity healthcare uniforms in Saudi Arabia must respect cultural and religious expectations:
              </p>
              
              <ul>
                <li><strong>Appropriate Coverage:</strong> Designs that provide modest coverage for arms, legs, and neckline</li>
                <li><strong>Loose-Fitting Silhouettes:</strong> Styles that maintain modesty while accommodating pregnancy changes</li>
                <li><strong>Hijab Compatibility:</strong> Uniform designs that work seamlessly with religious head coverings</li>
                <li><strong>Cultural Sensitivity:</strong> Respect for Saudi customs and traditions in design and styling</li>
                <li><strong>Professional Appearance:</strong> Maintenance of dignified and professional image</li>
              </ul>

              <h2>Specialized Maternity Uniform Categories</h2>
              
              <h3>Maternity Scrub Tops</h3>
              <p>
                Specialized tops designed for pregnant healthcare professionals:
              </p>
              
              <ul>
                <li><strong>Empire Waist Designs:</strong> Flattering cuts that accommodate growing belly</li>
                <li><strong>Side Ruching:</strong> Gathered sides that provide room for expansion</li>
                <li><strong>Crossover Styles:</strong> Wrap-style tops that adjust to changing body shape</li>
                <li><strong>Tunic Lengths:</strong> Extended lengths for better coverage and comfort</li>
                <li><strong>Nursing Access:</strong> Hidden openings for postpartum breastfeeding convenience</li>
              </ul>

              <h2>Health and Wellness Benefits</h2>
              
              <h3>Physical Comfort and Support</h3>
              <p>
                Proper maternity uniforms contribute to physical well-being during pregnancy:
              </p>
              
              <ul>
                <li><strong>Reduced Pressure Points:</strong> Elimination of constricting areas that can cause discomfort</li>
                <li><strong>Improved Circulation:</strong> Designs that promote healthy blood flow</li>
                <li><strong>Back Support:</strong> Features that provide gentle support for changing posture</li>
                <li><strong>Temperature Regulation:</strong> Fabrics that help maintain comfortable body temperature</li>
                <li><strong>Reduced Fatigue:</strong> Comfortable clothing that minimizes physical stress</li>
              </ul>

              <h2>Conclusion: Supporting Healthcare Professionals Through Pregnancy</h2>
              <p>
                Maternity scrubs and uniforms represent a critical investment in the well-being and professional success of pregnant healthcare workers in Saudi Arabia. By providing comfortable, functional, and culturally appropriate attire, healthcare facilities demonstrate their commitment to supporting their staff through all stages of their careers and personal lives.
              </p>
              
              <p>
                The evolution of maternity healthcare uniforms reflects broader changes in workplace support for pregnant employees and recognition of the unique needs of healthcare professionals. As the healthcare sector in Saudi Arabia continues to grow and modernize, the availability of high-quality maternity uniforms will play an increasingly important role in attracting and retaining talented healthcare professionals.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">About the Author</h3>
                <p className="text-gray-600">Dr. Fatima Al-Rashid is a maternal health specialist and healthcare administration consultant with over 14 years of experience in Saudi Arabia's healthcare sector. She has extensive knowledge of workplace wellness for pregnant healthcare professionals and has advised numerous hospitals on implementing supportive policies and uniform programs for expectant mothers.</p>
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
                  <Link href="/blog/uniform-management-solutions-for-hospitals-leasing-vs-buying-in-ksa" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Hospital Uniform Management Solutions</div>
                    <div className="text-xs text-gray-500">Leasing vs buying in KSA</div>
                  </Link>
                  <Link href="/blog/healthcare-uniform-hygiene" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Healthcare Uniform Hygiene Standards</div>
                    <div className="text-xs text-gray-500">Infection control protocols</div>
                  </Link>
                  <Link href="/blog/women-healthcare-uniforms" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Women's Healthcare Uniforms</div>
                    <div className="text-xs text-gray-500">Professional and comfortable options</div>
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