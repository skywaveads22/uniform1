import Image from 'next/image'
import Link from 'next/link'
import { Building, Shield, Star, Users, FileCheck, Award } from 'lucide-react'

export default function GovernmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Government Uniforms
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                Professional uniforms for government institutions, designed to meet official standards and regulations. Trusted by government entities across Saudi Arabia.
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
                src="/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg"
                alt="Professional Government Uniforms in Saudi Arabia"
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
            Government Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/government/Civil_service_uniforms.jpg",
                title: "Civil Service Uniforms",
                description: "Professional attire for civil service employees."
              },
              {
                image: "/images/government/Municipality_uniforms.jpg",
                title: "Municipality Uniforms",
                description: "Distinctive uniforms for municipal workers."
              },
              {
                image: "/images/government/ministry_of_health_staff_uniforms.jpg",
                title: "Ministry Staff Uniforms",
                description: "Official uniforms for ministry personnel."
              },
              {
                image: "/images/government/government_field_staff_wear.jpg",
                title: "Field Staff Uniforms",
                description: "Durable uniforms for field operations."
              },
              {
                image: "/images/government/government_inspector_uniforms.jpg",
                title: "Inspector Uniforms",
                description: "Professional attire for government inspectors."
              },
              {
                image: "/images/government/Government_driver_uniforms.jpg",
                title: "Driver Uniforms",
                description: "Smart uniforms for government drivers."
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
                  src="/images/government/approved_government_fabrics.jpg"
                  alt="Government Approved Fabrics"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/government/Official_government_uniform_design.jpg"
                  alt="Official Uniform Designs"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/government/government_uniform_consultation.jpg"
                  alt="Uniform Consultation Services"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/government/government_uniform_inventory_management.jpg"
                  alt="Inventory Management"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Why Choose Our Government Uniforms?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Official Compliance",
                    description: "Meets all government regulations and standards"
                  },
                  {
                    icon: Star,
                    title: "Premium Quality",
                    description: "Durable materials for long-lasting wear"
                  },
                  {
                    icon: FileCheck,
                    title: "Procurement Support",
                    description: "Expert assistance with tender requirements"
                  },
                  {
                    icon: Award,
                    title: "Certified Supplier",
                    description: "Approved government uniform provider"
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
            Essential Government Wear
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: "/images/government/Official_government_suits.jpg",
                title: "Official Suits",
                description: "Formal government attire"
              },
              {
                image: "/images/government/government_outerwear_jackets.jpg",
                title: "Outerwear",
                description: "Professional jackets"
              },
              {
                image: "/images/government/Formal_attire_for_government_events.jpg",
                title: "Event Attire",
                description: "Ceremonial uniforms"
              },
              {
                image: "/images/government/Public_sector_workwear.jpg",
                title: "Daily Workwear",
                description: "Comfortable office wear"
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
          <h2 className="mb-6 text-4xl font-bold">Ready to Outfit Your Government Institution?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Contact us today for professional government uniforms that meet all standards
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