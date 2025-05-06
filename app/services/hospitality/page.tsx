import Image from 'next/image'
import Link from 'next/link'
import { Hotel, Star, Users, Coffee, Sparkles, Award } from 'lucide-react'

export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Hospitality Uniforms
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                Elegant and practical uniforms for the hospitality industry. Trusted by leading hotels and restaurants across Saudi Arabia.
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
                src="/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg"
                alt="Professional Hospitality Uniforms in Saudi Arabia"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Hospitality Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg",
                title: "Front Desk Uniforms",
                description: "Professional attire for reception staff."
              },
              {
                image: "/images/hospitality/Chef_uniforms_Chef_wear.jpeg",
                title: "Chef Uniforms",
                description: "Complete culinary staff attire."
              },
              {
                image: "/images/hospitality/Waiter_uniforms_Waitress_uniforms.jpeg",
                title: "Service Staff Uniforms",
                description: "Elegant uniforms for waiters and waitresses."
              },
              {
                image: "/images/hospitality/Housekeeping_uniforms.jpeg",
                title: "Housekeeping Uniforms",
                description: "Practical uniforms for housekeeping staff."
              },
              {
                image: "/images/hospitality/concierge_suits.jpeg",
                title: "Concierge Uniforms",
                description: "Distinguished attire for concierge staff."
              },
              {
                image: "/images/hospitality/spa_therapist_uniforms.jpeg",
                title: "Spa & Wellness",
                description: "Comfortable uniforms for spa professionals."
              }
            ].map((category, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-[200px]">
                <Image
                  src="/images/hospitality/breathable_hospitality_fabrics.jpeg"
                  alt="Premium Hospitality Fabrics"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/hospitality/modern_hospitality_design_uniforms.jpeg"
                  alt="Modern Uniform Designs"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/hospitality/hotel_uniform_accessories.jpeg"
                  alt="Hotel uniform accessories - ties, bow ties, and pins"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/hospitality/hotel_uniform_stock_management.jpeg"
                  alt="Uniform Management"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Why Choose Our Hospitality Uniforms?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Star,
                    title: "Premium Quality",
                    description: "Finest materials for lasting elegance"
                  },
                  {
                    icon: Sparkles,
                    title: "Easy Care",
                    description: "Durable fabrics that maintain appearance"
                  },
                  {
                    icon: Users,
                    title: "Custom Sizing",
                    description: "Perfect fit for all staff members"
                  },
                  {
                    icon: Award,
                    title: "Brand Integration",
                    description: "Incorporate your brand identity"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Essential Hospitality Wear
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: "/images/hospitality/Waiter_aprons_Server_aprons.jpeg",
                title: "Service Aprons",
                description: "Professional server wear"
              },
              {
                image: "/images/hospitality/Chef_hat_toque.jpeg",
                title: "Chef Accessories",
                description: "Complete the look"
              },
              {
                image: "/images/hospitality/custom_hospitality_vests.jpeg",
                title: "Custom Vests",
                description: "Elegant layering pieces"
              },
              {
                image: "/images/hospitality/restaurant_hostess_dresses.jpeg",
                title: "Hostess Attire",
                description: "Stylish front-of-house wear"
              }
            ].map((product, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Elevate Your Staff's Appearance?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Contact us today for premium hospitality uniforms that make a lasting impression
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
} 