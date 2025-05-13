"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Bookmark, Filter, Grid3X3, List, ChevronRight, Star } from "lucide-react"

// Portfolio case studies/projects data
const portfolioProjects = [
  {
    id: 1,
    title: "Saudi Airlines Cabin Crew Uniform Redesign",
    category: "Aviation",
    description: "Complete redesign of Saudi Airlines cabin crew uniforms, incorporating traditional Saudi elements with modern functionality.",
    image: "/images/portfolio/portfolio_flight_attendant.jpg",
    tags: ["Aviation", "Custom Design", "Airline"],
    featured: true,
  },
  {
    id: 2,
    title: "Hilton Hotels Staff Uniform Program",
    category: "Hospitality",
    description: "Comprehensive uniform program for Hilton Hotels in Saudi Arabia, including front desk, housekeeping, and food service staff.",
    image: "/images/portfolio/portfolio_hotel_staff.jpeg",
    tags: ["Hospitality", "Hotel", "Program Management"],
    featured: true,
  },
  {
    id: 3,
    title: "Royal Saudi Air Force Pilot Uniforms",
    category: "Aviation",
    description: "Custom designed pilot uniforms for the Royal Saudi Air Force, focusing on durability, comfort, and professional appearance.",
    image: "/images/portfolio/portfolio_pilot_uniform.jpg",
    tags: ["Aviation", "Military", "Pilot"],
    featured: true,
  },
  {
    id: 4,
    title: "National Guard Security Uniforms",
    category: "Security",
    description: "Specialized security uniforms for the Saudi National Guard with enhanced functionality and cultural considerations.",
    image: "/images/aviation/airport_security_wear.jpg",
    tags: ["Security", "Government", "Custom Design"],
    featured: false,
  },
  {
    id: 5,
    title: "Custom Embroidery for Corporate Clients",
    category: "Corporate",
    description: "Custom embroidery and branding services for major corporate clients across Saudi Arabia.",
    image: "/images/portfolio/portfolio_aviation_embroidery.jpg",
    tags: ["Corporate", "Branding", "Embroidery"],
    featured: false,
  },
  {
    id: 6,
    title: "King Fahd Medical City Healthcare Uniforms",
    category: "Healthcare",
    description: "Specialized medical uniforms designed for comfort during long shifts while maintaining professional standards.",
    image: "/images/aviation/Aviation_uniform_manufacturer.jpg",
    tags: ["Healthcare", "Medical", "Hospital"],
    featured: false,
  },
]

// Categories for filtering
const categories = [
  "All",
  "Aviation",
  "Healthcare",
  "Hospitality",
  "Security",
  "Corporate",
  "Education",
  "Government",
]

export default function PortfolioPage() {
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
              Our Portfolio
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Explore our showcase of successful uniform projects across various industries in Saudi Arabia, demonstrating our expertise in design, quality, and cultural sensitivity.
            </p>
            <Link 
              href="/request-quote"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-all hover:bg-blue-50"
            >
              Start Your Project
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Discover our most notable uniform projects that showcase our commitment to quality, design excellence, and cultural sensitivity.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View Project
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              All Projects
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Browse our complete portfolio of uniform projects across different industries and sectors in Saudi Arabia.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-gray-600 dark:hover:text-blue-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Project
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Client Testimonials
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Don't just take our word for it — see what our clients have to say about our uniform solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                "The uniform program management services provided by UniformSA have transformed how we handle our staff uniforms. The quality and attention to cultural details are exceptional."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
                  <Image
                    src="/images/author/Nasser_Alshihri.png"
                    alt="Ahmad Al-Saud"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Ahmad Al-Saud</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Operations Director, Saudi Airlines</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                "The custom design service exceeded our expectations. The uniforms perfectly represent our brand while respecting local customs and providing comfort for our staff."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
                  <Image
                    src="/images/author/Noura_Almutairi.png"
                    alt="Fatima Al-Harbi"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Fatima Al-Harbi</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">HR Manager, Hilton Riyadh</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                "The quality of materials and craftsmanship in our hospital uniforms has been outstanding. The staff love the comfort, and the durability has significantly reduced our replacement costs."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
                  <Image
                    src="/images/author/Khalid_Alhanty.png"
                    alt="Dr. Khalid Al-Otaibi"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Dr. Khalid Al-Otaibi</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Administrator, King Fahd Medical City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to start your uniform project?
              </h2>
              <p className="text-xl text-blue-100">
                Contact us today for a consultation and discover how we can transform your organization's image.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
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
      </section>
    </div>
  )
} 