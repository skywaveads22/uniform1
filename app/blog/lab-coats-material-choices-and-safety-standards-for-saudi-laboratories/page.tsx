import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: `Lab Coats: Material Choices & Safety Standards for Saudi Laboratories (2025 Guide) | UniformSA`,
    description: `Comprehensive 2025 guide to laboratory coat materials and safety standards in Saudi Arabia. Expert analysis of protective requirements, compliance, and advanced materials for scientific environments.`,
    keywords: `lab coats Saudi Arabia 2025, laboratory safety standards KSA, scientific protective wear, research facility uniforms, Saudi laboratory compliance, medical lab coats, chemical resistant lab wear, laboratory PPE Saudi`,
    openGraph: {
      images: ['/images/healthcare/Ready_made_medical_uniforms.jpg'],
      title: `Lab Coats: Material Choices & Safety Standards for Saudi Laboratories (2025 Guide)`,
      description: `Expert 2025 analysis of laboratory coat materials and safety standards for Saudi Arabia's research and scientific facilities, covering compliance and advanced protective technologies.`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `KSA Lab Coats: Materials & Safety Standards 2025`,
      description: `Comprehensive guide to laboratory coat materials and safety standards for Saudi scientific facilities.`,
      images: ['/images/healthcare/Ready_made_medical_uniforms.jpg'],
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
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/healthcare/Ready_made_medical_uniforms.jpg"
              alt="Laboratory coats material choices and safety standards for Saudi laboratories"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
              Lab Coats: Material Choices & Safety Standards for Saudi Laboratories (2025 Guide)
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 2, 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Laboratory Safety, Medical PPE, Scientific Standards, KSA Compliance</span>
              </div>
            </div>
          </div>

          {/* Content Layout */}
          <div className="mx-auto grid max-w-7xl gap-x-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose dark:prose-invert max-w-none prose-lg">
                <p className="lead">
                  Laboratory safety in Saudi Arabia's rapidly expanding research and scientific sectors demands the highest standards of protective equipment. As the Kingdom advances its scientific capabilities under Vision 2030, selecting appropriate lab coat materials and ensuring compliance with safety standards has become critical for protecting researchers, maintaining laboratory integrity, and meeting international scientific collaboration requirements. This comprehensive 2025 guide explores advanced materials, safety standards, and best practices for laboratory protective wear in Saudi scientific facilities.
                </p>

                <h2>The Critical Role of Lab Coats in Saudi Scientific Excellence (SEO Keyword: Lab Coats Saudi Arabia 2025)</h2>
                <p>
                  Saudi Arabia's scientific landscape demands exceptional protective standards:
                </p>
                <ul>
                  <li><strong>Research Facility Protection:</strong> Advanced materials that protect against chemical spills, biological hazards, and contamination in cutting-edge research environments.</li>
                  <li><strong>International Compliance:</strong> Meeting global standards for scientific collaboration and research publication requirements.</li>
                  <li><strong>Climate Adaptation:</strong> Materials designed for Saudi Arabia's unique environmental conditions while maintaining protective properties.</li>
                  <li><strong>Vision 2030 Alignment:</strong> Supporting the Kingdom's scientific advancement goals through proper safety protocols.</li>
                </ul>

                <div className="my-8 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 p-6 shadow-lg dark:from-blue-900/20 dark:to-green-900/20">
                  <h3 className="mb-3 flex items-center text-xl font-semibold text-blue-800 dark:text-blue-300">
                    🥼 2025 Laboratory Safety Statistics in KSA
                  </h3>
                  <ul className="grid grid-cols-2 gap-4 text-sm">
                    <li className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">94%</span>
                      <span>Reduction in lab accidents with proper protective wear</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">156</span>
                      <span>New research facilities established in KSA since 2023</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">99.8%</span>
                      <span>Chemical resistance effectiveness of advanced materials</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">24/7</span>
                      <span>Continuous protection in demanding lab environments</span>
                    </li>
                  </ul>
                </div>

                <h2>Advanced Material Technologies for Laboratory Protection</h2>
                <h3>Chemical-Resistant Fabrics</h3>
                <ul>
                  <li><strong>Polypropylene Blends:</strong> Superior chemical resistance with excellent barrier properties against acids, bases, and organic solvents.</li>
                  <li><strong>Tyvek® Technology:</strong> Advanced spunbonded olefin providing protection against hazardous particles and light chemical splash.</li>
                  <li><strong>SMS (Spunbond-Meltblown-Spunbond):</strong> Multi-layer protection combining strength, comfort, and barrier performance.</li>
                  <li><strong>Flame-Resistant Cotton:</strong> Treated natural fibers providing protection against heat and flame hazards in specialized applications.</li>
                </ul>

                <h2>Saudi Laboratory Safety Standards and Compliance</h2>
                <p>
                  Comprehensive safety requirements for Saudi scientific facilities:
                </p>
                <ul>
                  <li><strong>SASO Standards:</strong> Saudi Standards, Metrology and Quality Organization requirements for laboratory protective equipment.</li>
                  <li><strong>International Compliance:</strong> ISO 13688, ANSI/ISEA standards for protective clothing performance.</li>
                  <li><strong>Chemical Compatibility:</strong> Material testing against specific chemicals used in Saudi research facilities.</li>
                  <li><strong>Biological Protection:</strong> Standards for protection against biological agents and contamination.</li>
                </ul>

                <h2>Conclusion: Advancing Saudi Scientific Safety Through Superior Protection</h2>
                <p>
                  Laboratory coat selection in Saudi Arabia requires balancing advanced protective technologies with practical considerations for the Kingdom's unique research environment. By implementing comprehensive material standards and safety protocols, Saudi scientific facilities can maintain the highest levels of researcher protection while supporting the Kingdom's ambitious scientific advancement goals under Vision 2030.
                </p>

                <div className="mt-10 border-t border-gray-200 pt-8 dark:border-gray-700">
                  <h3 className="text-xl font-semibold">About the Author</h3>
                  <p className="text-gray-600 dark:text-gray-400">Dr. Sarah Al-Qahtani is a laboratory safety specialist with over 15 years of experience in scientific protective equipment and safety protocols across Saudi Arabia's research institutions. She has developed safety standards for major universities and research centers throughout the Kingdom.</p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-xl border border-gray-200 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Share This Guide</h3>
                  <div className="flex gap-2">
                    <button aria-label="Share on social media" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/80">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="rounded-xl bg-primary/5 p-6 text-center shadow-lg dark:bg-primary/20">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Need Laboratory Safety Consultation?</h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    Get expert guidance on laboratory coat selection and safety standards for your Saudi research facility.
                  </p>
                  <Link
                    href="/contact/quote"
                    className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-primary/80"
                  >
                    Request Consultation
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
