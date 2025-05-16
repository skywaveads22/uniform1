"use client"

import Link from 'next/link'

const categories = [
  {
    title: 'Aviation',
    description: 'Professional uniforms for airlines and aviation personnel',
    icon: '✈️',
    slug: 'aviation'
  },
  {
    title: 'Education',
    description: 'School uniforms and academic staff attire',
    icon: '🎓',
    slug: 'education'
  },
  {
    title: 'Government',
    description: 'Official uniforms for government institutions',
    icon: '🏛️',
    slug: 'government'
  },
  {
    title: 'Healthcare',
    description: 'Medical scrubs and healthcare professional attire',
    icon: '⚕️',
    slug: 'healthcare'
  },
  {
    title: 'Hospitality',
    description: 'Elegant uniforms for hotels and restaurants',
    icon: '🏨',
    slug: 'hospitality'
  },
  {
    title: 'Industrial',
    description: 'Durable workwear for industrial sectors',
    icon: '🏭',
    slug: 'industrial'
  },
  {
    title: 'Security',
    description: 'Professional security personnel uniforms',
    icon: '🛡️',
    slug: 'security'
  }
]

export function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Professional Uniforms for Every Sector in Saudi Arabia
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Discover our comprehensive range of high-quality uniforms designed specifically for the Saudi market,
              combining comfort, durability, and cultural sensitivity.
            </p>
            <Link
              href="#categories"
              className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
            >
              Explore Categories
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Our Uniform Categories</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category.slug}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={`/${category.slug}`}>
                  <div className="group rounded-xl border bg-card p-6 shadow-lg transition-all hover:shadow-xl">
                    <div className="mb-4 text-4xl">{category.icon}</div>
                    <h3 className="mb-2 text-2xl font-semibold text-primary">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                    <div className="mt-4 text-sm font-medium text-primary">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Why Choose Our Uniforms?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🎯',
                title: 'Saudi Market Expertise',
                description: 'Uniforms designed specifically for Saudi Arabian climate and cultural requirements'
              },
              {
                icon: '✨',
                title: 'Premium Quality',
                description: 'Durable materials and expert craftsmanship for long-lasting uniforms'
              },
              {
                icon: '🎨',
                title: 'Custom Design',
                description: 'Tailored solutions to match your brand identity and specific needs'
              },
              {
                icon: '📦',
                title: 'Bulk Orders',
                description: 'Efficient handling of large orders with consistent quality'
              },
              {
                icon: '🚀',
                title: 'Fast Delivery',
                description: 'Quick turnaround times and reliable delivery across Saudi Arabia'
              },
              {
                icon: '💯',
                title: 'Quality Assurance',
                description: 'Rigorous quality control and satisfaction guarantee'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="animate-fadeInUp rounded-xl bg-white p-6 shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Contact us today to discuss your uniform requirements
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 