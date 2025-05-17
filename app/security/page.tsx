import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Clock, Star, Eye, BookOpen, FileBadge } from 'lucide-react'
import securityArticles from '@/src/data/security.json'

export const metadata: Metadata = {
  title: 'Security Uniforms and Articles | Professional Security Attire in Saudi Arabia',
  description: 'Explore professional security uniforms and expert articles about security attire designed for Saudi Arabian climate and regulations. High-quality, authoritative security uniforms for all sectors.',
  keywords: 'security uniforms, security guard attire, Saudi Arabia security uniforms, professional security clothing, security tactical gear, high-visibility security uniforms',
  openGraph: {
    images: ['/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg'],
  },
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Professional Security Uniforms & Resources
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                High-quality security uniforms designed for authority, comfort, and durability. Plus expert articles on security attire for Saudi Arabian conditions.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
              >
                Request Quote
              </Link>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <Image
                src="/images/security/Security_header.jpeg"
                alt="Professional Security Guards in Saudi Arabia"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Security Uniform Resources</h2>
            <p className="mx-auto max-w-3xl text-lg text-black">
              Expert articles on security uniforms covering design, regulations, materials, and tactical features specifically for Saudi Arabian environments.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityArticles.slice(0, 6).map((article) => (
              <div key={article.id} className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
                <Link href={`/blog/${article.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-black line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                        Security
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.createdAt).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/security/all-articles"
              className="inline-block rounded-lg border border-primary bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-50"
            >
              View All Security Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Security Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/security/class_a_security_dress_uniforms.jpeg",
                title: "Class A Dress Uniforms",
                description: "Professional dress uniforms for formal occasions and executive security operations in Saudi Arabia."
              },
              {
                image: "/images/security/class_b_security_duty_uniforms.jpeg",
                title: "Class B Duty Uniforms",
                description: "Durable daily wear uniforms for active security personnel designed for the Saudi climate."
              },
              {
                image: "/images/security/High_visibility_security_uniforms.jpeg",
                title: "High Visibility Uniforms",
                description: "Enhanced visibility uniforms for night patrols and low-light conditions in industrial and urban environments."
              },
              {
                image: "/images/security/event_security_staff_vests.jpeg",
                title: "Event Security Vests",
                description: "Identifiable security vests for event management and crowd control at Saudi Arabia's premier venues."
              },
              {
                image: "/images/security/construction_site_security_attire.jpeg",
                title: "Site Security Uniforms",
                description: "Rugged uniforms designed for construction and industrial site security with added durability features."
              },
              {
                image: "/images/security/hospital_security_staff_uniforms.jpeg",
                title: "Healthcare Security",
                description: "Professional uniforms for hospital and healthcare facility security with antimicrobial properties."
              }
            ].map((category, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title + " - Security Uniforms Saudi Arabia"}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-black">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Expert Security Uniform Knowledge
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-black">
              Our comprehensive resources cover all aspects of security uniforms, from design and regulations to practical considerations for Saudi Arabian environments.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Regulatory Compliance",
                description: "Articles covering Saudi Arabian regulations for security uniforms across different sectors and contexts."
              },
              {
                icon: Eye,
                title: "Visibility Features",
                description: "Detailed information about high-visibility elements for security uniforms operating in low-light conditions."
              },
              {
                icon: Clock,
                title: "Climate Adaptation",
                description: "Expert guidance on selecting appropriate materials for security uniforms in Saudi Arabia's demanding climate."
              },
              {
                icon: Star,
                title: "Professional Image",
                description: "Recommendations for maintaining an authoritative and professional appearance for security personnel."
              },
              {
                icon: BookOpen,
                title: "Industry Standards",
                description: "Comprehensive coverage of best practices and industry standards for security uniform design and implementation."
              },
              {
                icon: FileBadge,
                title: "Tactical Integration",
                description: "Resources about tactical gear integration including pockets, loops, and reinforcements for functional security attire."
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-xl border bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <feature.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Articles Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Most Popular Security Articles</h2>
            <p className="mx-auto max-w-3xl text-lg text-black">
              Our most-read resources for security uniform knowledge and expertise, tailored for Saudi Arabian security operations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {securityArticles
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .slice(0, 4)
              .map((article) => (
                <div key={article.id} className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
                  <Link href={`/blog/${article.slug}`} className="flex h-full flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/3">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="mb-4 text-black line-clamp-2">{article.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                          Security
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(article.createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Outfit Your Security Team?</h2>
          <p className="mb-8 mx-auto max-w-3xl text-xl text-primary-foreground/90">
            Contact us today for customized uniform solutions and expert guidance on security attire for your specific needs in Saudi Arabia.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
            >
              Request Quote
            </Link>
            <Link
              href="/services/security"
              className="inline-block rounded-lg bg-transparent border border-white px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              View Security Uniforms
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 