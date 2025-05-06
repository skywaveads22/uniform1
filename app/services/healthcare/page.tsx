import Image from 'next/image'
import Link from 'next/link'
import { Heart, Shield, Sparkles, Star, Users, Clock } from 'lucide-react'

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Healthcare Uniforms
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                Professional medical uniforms designed for comfort, hygiene, and durability. Trusted by leading healthcare institutions across Saudi Arabia.
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
                src="/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg"
                alt="Professional Healthcare Uniforms in Saudi Arabia"
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
            Healthcare Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/healthcare/Doctor_uniforms_attire.jpg",
                title: "Doctor Uniforms",
                description: "Professional attire for physicians and specialists."
              },
              {
                image: "/images/healthcare/Nurse_uniforms.jpg",
                title: "Nursing Uniforms",
                description: "Comfortable and practical uniforms for nursing staff."
              },
              {
                image: "/images/healthcare/lab_technician_uniforms.jpg",
                title: "Lab Technician Wear",
                description: "Specialized uniforms for laboratory professionals."
              },
              {
                image: "/images/healthcare/pharmacy_technician_wear.jpg",
                title: "Pharmacy Uniforms",
                description: "Professional attire for pharmacy staff."
              },
              {
                image: "/images/healthcare/Medical_receptionist_uniforms.jpg",
                title: "Reception Staff",
                description: "Smart uniforms for front desk personnel."
              },
              {
                image: "/images/healthcare/surgical_gowns.jpg",
                title: "Surgical Wear",
                description: "Sterile surgical gowns and scrubs."
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
                  src="/images/healthcare/antimicrobial_scrubs.jpg"
                  alt="Antimicrobial Healthcare Uniforms"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/healthcare/breathable_healthcare_fabrics.jpg"
                  alt="Breathable Healthcare Fabrics"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/healthcare/fluid_resistant_medical_wear.jpg"
                  alt="Fluid-Resistant Medical Wear"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/healthcare/Embroidery_on_medical_uniforms.jpg"
                  alt="Custom Embroidery Services"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Why Choose Our Healthcare Uniforms?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Antimicrobial Protection",
                    description: "Advanced fabric treatment for enhanced hygiene"
                  },
                  {
                    icon: Sparkles,
                    title: "Easy Care",
                    description: "Durable fabrics that maintain appearance after repeated washing"
                  },
                  {
                    icon: Heart,
                    title: "Comfort First",
                    description: "Breathable materials for long shifts"
                  },
                  {
                    icon: Star,
                    title: "Professional Image",
                    description: "Modern designs that inspire confidence"
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
            Essential Medical Wear
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: "/images/healthcare/Lab_coats_medical.jpg",
                title: "Lab Coats",
                description: "Professional white coats"
              },
              {
                image: "/images/healthcare/scrub_pants_trousers.jpg",
                title: "Scrub Pants",
                description: "Comfortable bottoms"
              },
              {
                image: "/images/healthcare/medical_tunics.jpg",
                title: "Medical Tunics",
                description: "Modern medical tops"
              },
              {
                image: "/images/healthcare/disposable_medical_gowns.jpg",
                title: "Disposable Wear",
                description: "Single-use medical attire"
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
          <h2 className="mb-6 text-4xl font-bold">Ready to Outfit Your Healthcare Team?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Contact us today for a customized uniform solution for your healthcare facility
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