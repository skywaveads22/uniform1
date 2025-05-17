import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials | Fakhr Khaleej - Leading Uniform Provider in KSA",
  description: "Read genuine testimonials from our satisfied clients across Saudi Arabia. Discover why organizations choose Fakhr Khaleej for premium uniform solutions across various industries.",
  keywords: "uniform testimonials, Saudi uniform reviews, Fakhr Khaleej reviews, client feedback uniforms, KSA uniform provider testimonials, Saudi Arabia uniform supplier reviews",
  openGraph: {
    title: "Client Testimonials | Fakhr Khaleej - Leading Uniform Provider in KSA",
    description: "Read genuine testimonials from our satisfied clients across Saudi Arabia. Discover why organizations choose Fakhr Khaleej for premium uniform solutions across various industries.",
    images: ["/images/testimonials/testimonials-hero.jpg"],
  },
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Ahmed Al-Saud",
      position: "Operations Director",
      company: "National Hospital Group",
      image: "/images/testimonials/healthcare-testimonial.jpg",
      industry: "Healthcare",
      testimonial: "Fakhr Khaleej revolutionized our medical uniform program. Their antimicrobial fabrics have improved infection control, and staff comfort has increased significantly. The departmental color coding system they implemented has received positive feedback from both patients and personnel."
    },
    {
      name: "Nora Al-Qahtani",
      position: "General Manager",
      company: "Luxury Palace Hotel Riyadh",
      image: "/images/testimonials/hospitality-testimonial.jpg",
      industry: "Hospitality",
      testimonial: "The custom-designed uniforms from Fakhr Khaleej have become an integral part of our brand identity. The attention to detail, quality of fabrics, and incorporation of our cultural heritage into the designs has impressed both our staff and international guests."
    },
    {
      name: "Khalid Ibrahim",
      position: "Head of Security",
      company: "Saudi International Airport",
      image: "/images/testimonials/security-testimonial.jpg",
      industry: "Aviation Security",
      testimonial: "The specialized security uniforms provided by Fakhr Khaleej meet all our rigorous requirements. The integration of technical fabrics with professional design has improved staff comfort during long shifts while maintaining a commanding presence."
    },
    {
      name: "Fatima Al-Harbi",
      position: "School Administrator",
      company: "International Academy of Jeddah",
      image: "/images/testimonials/education-testimonial.jpg",
      industry: "Education",
      testimonial: "Working with Fakhr Khaleej on our school uniform program has been exceptional. Their understanding of durability requirements for children's wear, combined with their efficient sizing and distribution system, has simplified our entire uniform process."
    },
    {
      name: "Sultan Al-Otaibi",
      position: "Procurement Manager",
      company: "Ministry of Interior",
      image: "/images/testimonials/government-testimonial.jpg",
      industry: "Government",
      testimonial: "Fakhr Khaleej has consistently delivered high-quality ceremonial and daily uniforms for our personnel. Their understanding of protocol requirements and ability to incorporate official insignia while maintaining comfort has been impressive."
    },
    {
      name: "Layla Mohammed",
      position: "HR Director",
      company: "Arabian Manufacturing Corporation",
      image: "/images/testimonials/industrial-testimonial.jpg",
      industry: "Industrial",
      testimonial: "The workwear solutions provided by Fakhr Khaleej have significantly improved our safety compliance. Their specialized protective fabrics and ergonomic designs have been welcomed by our workforce, and we've seen a reduction in workplace incidents."
    }
  ];

  // Structured testimonial statistics
  const testimonialStats = [
    { metric: "Client Satisfaction Rate", value: "98%" },
    { metric: "On-time Delivery", value: "99.6%" },
    { metric: "Repeat Clients", value: "94%" },
    { metric: "Years of Excellence", value: "25+" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary/5 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/testimonials/testimonials-hero.jpg" 
            alt="Fakhr Khaleej uniform clients across Saudi Arabia" 
            fill 
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Client Testimonials
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover what organizations across Saudi Arabia say about their experience with Fakhr Khaleej uniform solutions. Our commitment to quality, innovation, and service excellence has made us the preferred uniform partner for leading institutions across multiple sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Statistics */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Organizations Across Saudi Arabia
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our dedication to excellence is reflected in the satisfaction of our diverse clientele
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {testimonialStats.map((stat) => (
                <div key={stat.metric} className="flex flex-col items-center gap-y-3 border rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold tracking-tight text-primary">{stat.value}</div>
                  <div className="text-base leading-7 text-gray-600">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Testimonials */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hear From Our Valued Clients
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our clients across various industries share their experiences with Fakhr Khaleej uniform solutions
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div>
                  <div className="flex items-center gap-x-2 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    <span className="text-primary">{testimonial.industry}</span> Excellence
                  </div>
                  <div className="mt-4 text-gray-700 leading-7">
                    "{testimonial.testimonial}"
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <div className="relative h-12 w-12 rounded-full bg-gray-50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Testimonials */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Industry-Specific Excellence
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Fakhr Khaleej delivers specialized uniform solutions across diverse sectors
              </p>
            </div>
            <div className="mt-16 space-y-16">
              {[
                {
                  industry: "Healthcare",
                  description: "Supporting Saudi healthcare providers with hygienic, functional, and professional medical attire",
                  features: [
                    "Antimicrobial fabric technologies",
                    "Department-specific color coding",
                    "Comfortable designs for long shifts",
                    "Saudi MOH compliance",
                    "Custom embroidery and branding"
                  ]
                },
                {
                  industry: "Hospitality",
                  description: "Elevating guest experiences through distinctive, cultural-inspired uniform programs",
                  features: [
                    "Luxury fabric selections",
                    "Cultural design elements",
                    "Department-coordinated collections",
                    "Temperature-regulating technologies",
                    "Easy-care maintenance features"
                  ]
                },
                {
                  industry: "Aviation",
                  description: "Creating distinguished uniform solutions for Saudi airlines and airport personnel",
                  features: [
                    "GACA regulatory compliance",
                    "Weather-appropriate designs",
                    "Distinctive cultural elements",
                    "Practical storage features",
                    "Enhanced durability construction"
                  ]
                }
              ].map((industry, index) => (
                <div key={index} className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="relative h-72 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                    <Image
                      src={`/images/testimonials/${industry.industry.toLowerCase()}-industry.jpg`}
                      alt={`${industry.industry} uniforms by Fakhr Khaleej`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-base font-semibold leading-7 text-primary">{industry.industry} Sector</div>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {industry.industry} Uniform Excellence
                    </h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{industry.description}</p>
                    <ul className="mt-8 space-y-3">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex gap-x-3">
                          <CheckCircle2 className="h-6 w-6 flex-none text-primary" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Collection */}
      <div className="bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Voices
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Testimonials from across Saudi Arabia showcasing our commitment to excellence
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:gap-6 lg:max-w-none lg:grid-cols-3">
            {[
              {
                quote: "The uniform program management system implemented by Fakhr Khaleej has streamlined our entire process from ordering to distribution.",
                author: "HR Manager, Leading Saudi Banking Group"
              },
              {
                quote: "As a facility manager, I appreciate Fakhr Khaleej's inventory management system. We always have the right uniforms in the right sizes when needed.",
                author: "Facility Director, Major Shopping Mall"
              },
              {
                quote: "The quality-to-price ratio offered by Fakhr Khaleej is exceptional. Premium uniforms that withstand daily wear and remain professional.",
                author: "Procurement Director, Saudi Hospitality Chain"
              },
              {
                quote: "Fakhr Khaleej understood our need to balance tradition with modernity in our staff uniforms. The results have been outstanding.",
                author: "Brand Manager, Luxury Saudi Resort"
              },
              {
                quote: "Their attention to our specific safety requirements while maintaining comfort has made a significant difference for our technical team.",
                author: "Safety Officer, Saudi Construction Firm"
              },
              {
                quote: "The custom embroidery service for our corporate branding exceeds expectations in quality and consistency.",
                author: "Marketing Director, Saudi Airline"
              }
            ].map((item, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <p className="text-lg leading-8 text-gray-600">
                  "{item.quote}"
                </p>
                <div className="mt-6 flex items-center gap-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <div className="text-sm leading-6 text-gray-700">{item.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Our Satisfied Clients
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Experience the Fakhr Khaleej difference for your organization's uniform needs
            </p>
            <div className="mt-8 flex justify-center gap-x-6">
              <Link href="/request-quote" className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Request a Quote
              </Link>
              <Link href="/contact" className="rounded-md border border-primary bg-white px-6 py-3 text-lg font-semibold text-primary shadow-sm hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What industries does Fakhr Khaleej provide uniform solutions for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides specialized uniform solutions for multiple industries across Saudi Arabia including healthcare, hospitality, education, government, security, aviation, and industrial sectors."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej ensure uniform quality and durability?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej ensures uniform quality through rigorous fabric testing, partnering with premium textile manufacturers, implementing strict quality control processes, and regular durability assessments under real-world conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Can Fakhr Khaleej handle large-scale uniform programs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Fakhr Khaleej specializes in managing large-scale uniform programs for organizations across Saudi Arabia with comprehensive services including design, manufacturing, inventory management, distribution, and replacement systems."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 