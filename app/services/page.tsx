"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, RulerIcon, Package, Users, Palette, Settings } from "lucide-react"

const serviceCategories = [
  {
    title: "Industry Uniforms",
    description: "Specialized uniform solutions for various industries",
    items: [
      { name: "Aviation", href: "/services" },
      { name: "Healthcare", href: "/healthcare" },
      { name: "Hospitality", href: "/hospitality" },
      { name: "Security", href: "/security" },
      { name: "Industrial", href: "/industrial" },
      { name: "Education", href: "/education" },
      { name: "Government", href: "/government" },
    ]
  },
  {
    title: "Core Services",
    description: "Complete uniform management solutions for your organization",
    items: [
      { name: "Program Management", href: "/services/program-management" },
      { name: "Custom Design", href: "/services/custom-design" },
      { name: "Bulk Ordering", href: "/services/bulk-ordering" },
      { name: "Measurement Services", href: "/services/measurement" },
      { name: "Uniform Policies", href: "/services/uniform-policies" },
    ]
  }
]

const featuredServices = [
  {
    title: "Custom Design & Branding",
    description: "Professional design services tailored to your organization's identity and requirements, ensuring your uniforms reflect your brand perfectly.",
    icon: Palette,
    image: "/images/services/services_design_consultation.jpg",
    href: "/services/custom-design",
  },
  {
    title: "Uniform Program Management",
    description: "Comprehensive uniform program management including inventory tracking, distribution, replacement schedules, and budget planning.",
    icon: Settings,
    image: "/images/services/services_supply_chain.jpg",
    href: "/services/program-management",
  },
  {
    title: "Bulk Ordering Solution",
    description: "Cost-effective bulk ordering solutions with quality assurance, timely delivery, and consistent sizing across all garments.",
    icon: Package,
    image: "/images/aviation/aviation_uniform_embroidery.jpg",
    href: "/services/bulk-ordering",
  },
  {
    title: "Employee Measurement",
    description: "Professional measurement services to ensure perfect fit for all staff members, with options for on-site or remote measurements.",
    icon: RulerIcon,
    image: "/images/aviation/aviation_summer_uniforms.jpg",
    href: "/services/measurement",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-700 py-16 md:py-24">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url(/images/uniform_pattern_bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Professional Uniform Services
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Comprehensive uniform solutions designed specifically for Saudi Arabian organizations, with attention to quality, cultural sensitivity, and professional requirements.
            </p>
            <Link 
              href="/request-quote"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-all hover:bg-blue-50"
            >
              Request a Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Featured Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Discover our comprehensive range of uniform services designed to meet the specific needs of organizations across Saudi Arabia.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {featuredServices.map((service, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Explore Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              From industry-specific uniform solutions to comprehensive uniform management, we offer a full range of services.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="rounded-xl bg-white p-8 shadow-md dark:bg-gray-700">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="flex items-center rounded-lg border border-transparent p-3 text-gray-700 transition-colors hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 dark:text-white dark:hover:border-blue-900 dark:hover:bg-gray-600"
                      >
                        <ChevronRight className="mr-3 h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-blue-700 p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Ready to elevate your uniform program?
                </h2>
                <p className="text-xl text-blue-100">
                  Contact our team for a customized solution that meets your specific needs.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-all hover:bg-blue-50"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-white px-6 py-3 font-semibold text-white transition-all hover:bg-blue-800"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 