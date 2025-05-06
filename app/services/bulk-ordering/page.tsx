import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"
import { TruckIcon, PackageOpen, Truck, BarChart3, ShieldCheck, ClipboardCheck, BadgePercent, Clock, Building, Users, CreditCard, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: "Bulk Uniform Ordering | UniformSA",
  description: "Efficient bulk uniform ordering services for organizations across Saudi Arabia. Streamlined process, volume discounts, and professional inventory management.",
}

const slides = [
  {
    image: "/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg",
    title: "Bulk Uniform Ordering",
    description: "Simplified procurement for organizations of all sizes across Saudi Arabia"
  },
  {
    image: "/images/industrial/Workshop_uniforms.jpeg",
    title: "Volume Discounts",
    description: "Benefit from cost-effective pricing for all your uniform needs"
  },
  {
    image: "/images/industrial/Construction_worker_uniforms_attire.jpeg",
    title: "Efficient Distribution",
    description: "Organized delivery and inventory management for your team's uniforms"
  }
]

export default function BulkOrderingPage() {
  return (
    <div>
      <ServiceHeader 
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Efficient Uniform Procurement</h2>
                <p className="mb-4 text-muted-foreground">
                  Equipping your entire team with uniforms shouldn't be complicated. 
                  UniformSA offers comprehensive bulk ordering services designed specifically 
                  for organizations across Saudi Arabia, from small businesses to large corporations.
                </p>
                <p className="text-muted-foreground">
                  Our streamlined process combines efficient logistics, quality control, and 
                  inventory management to ensure your team receives the right uniforms at the 
                  right time, all while saving you time and money through our volume-based pricing.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/industrial/Construction_site_uniforms.jpeg"
                  alt="Bulk uniform ordering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Bulk Ordering</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "💰",
                  title: "Cost Savings",
                  description: "Volume discounts and reduced per-unit costs for organizations of all sizes"
                },
                {
                  icon: "⏱️",
                  title: "Time Efficiency",
                  description: "Streamlined procurement process saves administrative time and resources"
                },
                {
                  icon: "🔄",
                  title: "Consistency",
                  description: "Ensure uniform consistency across your entire organization"
                },
                {
                  icon: "📦",
                  title: "Inventory Management",
                  description: "Professional tracking and storage solutions for your uniform stock"
                },
                {
                  icon: "📊",
                  title: "Easy Reordering",
                  description: "Simplified replacement and addition processes with stored specifications"
                },
                {
                  icon: "🚚",
                  title: "Coordinated Delivery",
                  description: "Organized distribution to multiple locations across Saudi Arabia"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 text-5xl">{benefit.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Bulk Ordering Process</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "We discuss your needs, including uniform types, quantities, and delivery requirements",
                  icon: "🤝"
                },
                {
                  step: 2,
                  title: "Sampling",
                  description: "Examine and approve uniform samples before committing to bulk production",
                  icon: "👕"
                },
                {
                  step: 3,
                  title: "Production",
                  description: "Manufacturing of your uniforms with rigorous quality control checks",
                  icon: "⚙️"
                },
                {
                  step: 4,
                  title: "Delivery",
                  description: "Coordinated distribution to your specified locations across Saudi Arabia",
                  icon: "🚚"
                }
              ].map((phase) => (
                <div key={phase.step} className="relative rounded-lg border bg-card p-6 shadow-sm text-center">
                  <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white">
                    {phase.step}
                  </div>
                  <div className="mb-4 mt-4 text-5xl">{phase.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Volume Discount */}
          <div className="mb-16 rounded-lg border bg-card p-8 shadow-md">
            <h2 className="mb-8 text-center text-3xl font-bold">Volume Discount Structure</h2>
            <div className="overflow-hidden rounded-lg border shadow">
              <table className="w-full text-left">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-3">Order Size</th>
                    <th className="px-6 py-3">Discount Level</th>
                    <th className="px-6 py-3">Additional Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">10-50 uniforms</td>
                    <td className="px-6 py-4">5% discount</td>
                    <td className="px-6 py-4">Free delivery in major cities</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">51-100 uniforms</td>
                    <td className="px-6 py-4">10% discount</td>
                    <td className="px-6 py-4">Free delivery + basic customization</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">101-500 uniforms</td>
                    <td className="px-6 py-4">15% discount</td>
                    <td className="px-6 py-4">All above + sizing consultation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">501+ uniforms</td>
                    <td className="px-6 py-4">20%+ discount</td>
                    <td className="px-6 py-4">Custom package with premium services</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Contact us for customized pricing based on your specific requirements and volume
            </p>
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Additional Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Custom Packaging",
                  description: "Individual packaging with employee names and departments for easy distribution",
                  icon: "📦"
                },
                {
                  title: "Embroidery & Printing",
                  description: "Add your company logo, employee names, and other customization elements",
                  icon: "🧵"
                },
                {
                  title: "Inventory Storage",
                  description: "We store your extra uniforms and manage your inventory for easy reordering",
                  icon: "🏭"
                },
                {
                  title: "Staff Measurement",
                  description: "Professional on-site measurement services for your entire team",
                  icon: "📏"
                },
                {
                  title: "Replacement Program",
                  description: "Scheduled uniform replacement and maintenance program",
                  icon: "🔄"
                },
                {
                  title: "Uniform Management Portal",
                  description: "Online system for managing orders, inventory, and employee assignments",
                  icon: "💻"
                }
              ].map((service, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Client Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 text-primary">★★★★★</div>
                <p className="mb-4 italic text-muted-foreground">
                  "UniformSA managed our order of 300+ hospitality uniforms with exceptional efficiency. 
                  The quality control was outstanding, and the delivery arrived exactly when promised. 
                  Their bulk ordering process saved us both time and budget."
                </p>
                <div className="flex items-center">
                  <p className="font-semibold">Mohammad Al-Harbi</p>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <p className="text-muted-foreground">Procurement Manager, Jeddah Luxury Hotel Group</p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 text-primary">★★★★★</div>
                <p className="mb-4 italic text-muted-foreground">
                  "The inventory management system that comes with UniformSA's bulk ordering service 
                  has revolutionized how we handle our staff uniforms. We have 8 locations across Saudi Arabia, 
                  and their coordinated delivery and tracking is flawless."
                </p>
                <div className="flex items-center">
                  <p className="font-semibold">Aisha Al-Qahtani</p>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <p className="text-muted-foreground">Operations Director, Saudi Security Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is the minimum order quantity for bulk discounts?",
                  answer: "Our bulk discount structure begins at 10 uniforms. However, we offer customized solutions for organizations of all sizes and welcome inquiries for any quantity."
                },
                {
                  question: "How long does bulk production typically take?",
                  answer: "Production timelines depend on the quantity, complexity, and customization requirements. Standard bulk orders typically take 3-4 weeks from approval to delivery, while rush orders can be accommodated when possible."
                },
                {
                  question: "Do you offer financing options for large orders?",
                  answer: "Yes, we offer flexible payment plans for qualifying organizations, including installment options and procurement-friendly terms for government and corporate clients."
                },
                {
                  question: "Can you deliver to multiple locations across Saudi Arabia?",
                  answer: "Absolutely. We coordinate deliveries to multiple sites throughout the Kingdom, with detailed tracking and logistics management to ensure all locations receive their uniforms as scheduled."
                }
              ].map((faq, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-primary p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Streamline Your Uniform Procurement?</h2>
            <p className="mb-6 text-lg text-white/90">
              Contact us today to discuss your bulk ordering requirements
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-transform hover:scale-105"
              >
                Request Bulk Quote
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                Speak to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 