import Image from 'next/image'
import Link from 'next/link'
import { Shield, Users, Clock, Star, Award, BadgeCheck } from 'lucide-react'

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Professional Security Uniforms
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                High-quality security uniforms designed for authority, comfort, and durability. Trusted by leading security companies across Saudi Arabia.
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
                src="/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg"
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

      {/* Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Security Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/security/class_a_security_dress_uniforms.jpeg",
                title: "Class A Dress Uniforms",
                description: "Professional dress uniforms for formal occasions and executive security."
              },
              {
                image: "/images/security/class_b_security_duty_uniforms.jpeg",
                title: "Class B Duty Uniforms",
                description: "Durable daily wear uniforms for active security personnel."
              },
              {
                image: "/images/security/High_visibility_security_uniforms.jpeg",
                title: "High Visibility Uniforms",
                description: "Enhanced visibility uniforms for night patrols and low-light conditions."
              },
              {
                image: "/images/security/event_security_staff_vests.jpeg",
                title: "Event Security Vests",
                description: "Identifiable security vests for event management and crowd control."
              },
              {
                image: "/images/security/construction_site_security_attire.jpeg",
                title: "Site Security Uniforms",
                description: "Rugged uniforms designed for construction and industrial site security."
              },
              {
                image: "/images/security/hospital_security_staff_uniforms.jpeg",
                title: "Healthcare Security",
                description: "Professional uniforms for hospital and healthcare facility security."
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
                  src="/images/security/authoritative_security_appearance.jpeg"
                  alt="Professional Security Appearance"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/security/breathable_security_shirts.jpeg"
                  alt="Comfortable Security Uniforms"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/security/all_weather_security_gear.jpeg"
                  alt="All-Weather Security Gear"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/security/security_patches_and_badges.jpeg"
                  alt="Security Badges and Patches"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Why Choose Our Security Uniforms?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Professional Authority",
                    description: "Uniforms designed to command respect and project authority"
                  },
                  {
                    icon: Users,
                    title: "Perfect Fit",
                    description: "Custom sizing and alterations for all body types"
                  },
                  {
                    icon: Clock,
                    title: "Durable Quality",
                    description: "Long-lasting materials that withstand daily wear and tear"
                  },
                  {
                    icon: Star,
                    title: "Climate Adapted",
                    description: "Breathable fabrics suitable for Saudi Arabia's climate"
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

      {/* Accessories Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Complete Your Professional Look
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: "/images/security/Security_cap_hat.jpeg",
                title: "Caps & Hats",
                description: "Professional headwear options"
              },
              {
                image: "/images/security/Security_uniform_accessories_(belts_epaulettes).jpeg",
                title: "Belts & Epaulettes",
                description: "Essential uniform accessories"
              },
              {
                image: "/images/security/duty_belt_keepers.jpeg",
                title: "Duty Gear",
                description: "Professional duty equipment"
              },
              {
                image: "/images/security/security_outer_vest_carriers.jpeg",
                title: "Vest Carriers",
                description: "Tactical vest solutions"
              }
            ].map((accessory, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={accessory.image}
                    alt={accessory.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">{accessory.title}</h3>
                  <p className="text-sm text-gray-600">{accessory.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Outfit Your Security Team?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Contact us today for a customized uniform solution for your security personnel
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