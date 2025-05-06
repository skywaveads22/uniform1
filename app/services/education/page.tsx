import Image from 'next/image'
import Link from 'next/link'
import { Book, Shield, Star, Sun, Users, Sparkles } from 'lucide-react'

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                School Uniforms
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                Quality school uniforms that promote unity and pride. Trusted by leading educational institutions across Saudi Arabia.
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
                src="/images/education/School_uniforms_Saudi_Arabia_KSA.jpg"
                alt="Professional School Uniforms in Saudi Arabia"
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
            Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/education/Boys_school_uniforms.jpg",
                title: "Boys Uniforms",
                description: "Smart and comfortable uniforms for male students."
              },
              {
                image: "/images/education/Girls_school_uniforms.jpg",
                title: "Girls Uniforms",
                description: "Modest and practical uniforms for female students."
              },
              {
                image: "/images/education/School_staff_uniforms.jpg",
                title: "Staff Uniforms",
                description: "Professional attire for teachers and staff."
              },
              {
                image: "/images/education/Private_school_uniforms.jpg",
                title: "Private Schools",
                description: "Custom uniforms for private institutions."
              },
              {
                image: "/images/education/International_school_uniforms_KSA.jpg",
                title: "International Schools",
                description: "Global standard uniforms with local adaptations."
              },
              {
                image: "/images/education/uniforms_sports_kits.jpg",
                title: "Sports Uniforms",
                description: "Comfortable sportswear for physical education."
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
                  src="/images/education/School_uniform_fabrics.jpg"
                  alt="Quality School Uniform Fabrics"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/education/School_logo_embroidery.jpg"
                  alt="Custom Logo Embroidery"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/education/school_summer_uniforms.jpg"
                  alt="Summer School Uniforms"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/education/school_winter_uniforms.jpg"
                  alt="Winter School Uniforms"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Why Choose Our School Uniforms?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Star,
                    title: "Superior Quality",
                    description: "Durable materials that withstand daily wear and tear"
                  },
                  {
                    icon: Sun,
                    title: "Climate Appropriate",
                    description: "Designed for comfort in Saudi Arabia's weather"
                  },
                  {
                    icon: Shield,
                    title: "Modesty Standards",
                    description: "Adheres to cultural and religious requirements"
                  },
                  {
                    icon: Sparkles,
                    title: "Easy Care",
                    description: "Simple washing and maintenance instructions"
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
            Essential School Wear
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: "/images/education/school_blazers.jpg",
                title: "School Blazers",
                description: "Smart formal wear"
              },
              {
                image: "/images/education/school_sweaters_cardigans.jpg",
                title: "Sweaters & Cardigans",
                description: "Warm winter layers"
              },
              {
                image: "/images/education/School_shirts.jpg",
                title: "School Shirts",
                description: "Comfortable daily wear"
              },
              {
                image: "/images/education/school_uniform_accessories.jpg",
                title: "Accessories",
                description: "Complete the look"
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
          <h2 className="mb-6 text-4xl font-bold">Ready to Outfit Your School?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Contact us today for quality school uniforms that inspire pride and unity
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