"use client"

import Image from 'next/image'
import TeamSlider from '../../components/TeamSlider'

export default function AboutPage() {
  const leadership = [
    {
      name: "Khalid Alhanty",
      position: "Chief Executive Officer",
      bio: "20+ years of experience in textile and uniform manufacturing across the GCC region. Leads our company with a vision to blend tradition with innovation.",
      image: "/images/author/Khalid_Alhanty.png"
    },
    {
      name: "Rahaf Alsibai",
      position: "Chief Design Officer",
      bio: "Expert in combining traditional values with modern design principles. Holds a Master's degree in Fashion Design from London College of Fashion.",
      image: "/images/author/Rahaf_Alsibai.png"
    },
    {
      name: "Turki Alarabi",
      position: "Operations Director",
      bio: "Specialized in supply chain management and quality control with 15 years of experience in large-scale uniform manufacturing.",
      image: "/images/author/Turki_Alarabi.png"
    },
    {
      name: "Jameela Alenazi",
      position: "Head of Hospitality Division",
      bio: "10+ years working with luxury hotels across Saudi Arabia, specializing in hospitality uniforms that blend elegance with functionality.",
      image: "/images/author/Jameela_Alenazi.png"
    },
    {
      name: "Saud Alghamdi",
      position: "Healthcare Uniform Specialist",
      bio: "Former healthcare professional with deep understanding of medical uniform requirements and infection control standards.",
      image: "/images/author/Saud_Alghamdi.png"
    },
    {
      name: "Mai Alruwaili",
      position: "Educational Sector Manager",
      bio: "Experienced in working with both public and private educational institutions to develop appropriate and comfortable school uniforms.",
      image: "/images/author/Mai_Alruwaili.png"
    },
    {
      name: "Fahad Alqahtani",
      position: "Government Contracts Manager",
      bio: "Specializes in navigating government procurement processes and ensuring compliance with official uniform regulations.",
      image: "/images/author/Fahad_Alqahtani.png"
    },
    {
      name: "Noura Almutairi",
      position: "Customer Relations Director",
      bio: "Dedicated to ensuring client satisfaction through personalized service and attention to detail in all uniform projects.",
      image: "/images/author/Noura_Almutairi.png"
    },
    {
      name: "Nasser Alshihri",
      position: "Industrial Division Head",
      bio: "Expert in safety standards and durable workwear for industrial settings, with background in petroleum engineering.",
      image: "/images/author/Nasser_Alshihri.png"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg"
            alt="Uniform SA Aviation Uniforms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50"></div>
        </div>
        
        <div className="relative py-32 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                About Uniform SA
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Your trusted partner in professional uniforms across Saudi Arabia, delivering quality and excellence since 2020.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To provide high-quality, culturally appropriate uniforms that meet the diverse needs of Saudi Arabia's
                professional sectors while maintaining the highest standards of comfort, durability, and style.
              </p>
              <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Our Commitment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Premium quality materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Cultural sensitivity and appropriateness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Exceptional customer service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Innovative design solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/healthcare/Medical_scrubs_supplier_for_hospitals.jpg"
                alt="Healthcare Uniforms"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div className="relative order-2 md:order-1 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg"
                alt="Hospitality Uniforms"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become the leading uniform supplier in Saudi Arabia, recognized for our commitment to excellence,
                innovation, and understanding of local requirements across all professional sectors.
              </p>
              <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Our Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Continuous innovation in fabric technology</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Deep industry expertise in each sector</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Sustainable and ethical manufacturing practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Partnership with leading Saudi organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of our materials and craftsmanship.",
                icon: "⭐",
                image: "/images/industrial/Industrial_uniforms.jpeg"
              },
              {
                title: "Innovation",
                description: "Continuously improving our designs and processes to meet evolving needs.",
                icon: "💡",
                image: "/images/aviation/Pilot_uniforms.jpg"
              },
              {
                title: "Integrity",
                description: "Maintaining honest and transparent relationships with all stakeholders.",
                icon: "🤝",
                image: "/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg"
              },
              {
                title: "Culture",
                description: "Deep understanding and respect for Saudi Arabian cultural values.",
                icon: "🌟",
                image: "/images/government/Civil_service_uniforms.jpg"
              }
            ].map((value) => (
              <div key={value.title} className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="mb-2 text-3xl">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Using SimpleSlider */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold text-primary">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts behind UniformSA's success, bringing together decades of industry experience,
              design innovation, and deep understanding of Saudi Arabia's professional sectors.
            </p>
          </div>
          
          <TeamSlider members={leadership} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "7", label: "Industry Sectors" },
              { value: "150+", label: "Satisfied Clients" },
              { value: "10,000+", label: "Uniforms Delivered" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Work Together?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Contact us to discuss how we can meet your uniform needs
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
} 