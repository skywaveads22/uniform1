import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/ServiceHeader";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Education Uniform Solutions | Fakhr Khaleej - Premium School Uniforms in KSA",
  description: "Complete education uniform solutions for Saudi schools, colleges, and universities. Combining durability, cultural sensitivity, and professional design for educational institutions.",
  keywords: "school uniforms Saudi Arabia, education uniforms KSA, college uniforms Saudi, university staff attire, educational institution uniforms, Saudi school uniform supplier, durable school uniforms, custom school uniforms",
  openGraph: {
    title: "Education Uniform Solutions | Fakhr Khaleej",
    description: "Complete education uniform solutions for Saudi schools, colleges, and universities. Combining durability, cultural sensitivity, and professional design for educational institutions.",
    images: ["/images/education/Education_uniforms.jpg"],
  },
};

const slides = [  {    image: "/images/education/School_uniforms_Saudi_Arabia_KSA.jpg",    title: "Educational Excellence Through Identity",    description: "Premium uniform solutions for Saudi Arabian educational institutions"  },  {    image: "/images/education/School_staff_uniforms.jpg",    title: "Staff & Faculty Attire",    description: "Professional uniform programs for educational staff across the Kingdom"  },  {    image: "/images/education/uniforms_sports_kits.jpg",    title: "Activity-Specific Designs",    description: "Specialized uniforms for physical education, laboratories, and events"  }];

export default function EducationServicePage() {
  return (
    <div>
      <ServiceHeader
        title="Education Uniform Solutions"
        description="Comprehensive uniform programs for Saudi educational institutions from elementary schools to universities, combining durability, comfort, and institutional identity."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Educational Identity Through Uniforms</h2>
                <p className="mb-4 text-muted-foreground">
                  Fakhr Khaleej provides comprehensive uniform solutions tailored to the unique needs of Saudi Arabian educational institutions. Our education uniform programs combine durability for active students, comfort for long school days, and distinctive designs that reinforce institutional identity.
                </p>
                <p className="text-muted-foreground">
                  From elementary schools to prestigious universities, we design and implement uniform systems that respect Saudi cultural values while meeting the practical demands of modern educational environments.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                                <Image                  src="/images/education/School_uniforms_Saudi_Arabia_KSA.jpg"                  alt="School uniforms for Saudi educational institutions"                  fill                  className="object-cover"                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Education Uniform Programs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Institutional Identity",
                  description: "Distinctive designs that reinforce school pride and create a unified community appearance."
                },
                {
                  title: "Durability & Value",
                  description: "Hard-wearing fabrics and construction techniques that withstand daily student activities."
                },
                {
                  title: "Cultural Sensitivity",
                  description: "Designs that respect Saudi Arabian cultural values while offering practical functionality."
                },
                {
                  title: "Easy Management",
                  description: "Simplified uniform procurement and distribution systems for administrative efficiency."
                },
                {
                  title: "Comfort Focus",
                  description: "Breathable, comfortable fabrics appropriate for Saudi climate and long school days."
                },
                {
                  title: "Customization Options",
                  description: "Flexible design elements to incorporate school colors, logos, and special requirements."
                }
              ].map((benefit, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Uniform Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Education Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                                    title: "Elementary School",                  image: "/images/education/primary_school_uniforms.jpg",
                  description: "Practical, comfortable uniforms designed for younger students with easy-care fabrics."
                },
                {
                                    title: "Middle & High School",                  image: "/images/education/school_blazers.jpg",
                  description: "Age-appropriate designs that encourage professionalism and school pride."
                },
                {
                                    title: "University & College",                  image: "/images/education/International_school_uniforms_KSA.jpg",
                  description: "Distinguished attire options for higher education environments and special events."
                },
                {
                                    title: "Physical Education",                  image: "/images/education/uniforms_sports_kits.jpg",
                  description: "Performance fabrics for sports and physical activities with school branding."
                },
                {
                                    title: "Staff & Faculty",                  image: "/images/education/School_staff_uniforms.jpg",
                  description: "Professional attire for teachers, administrators, and support staff."
                },
                {
                                    title: "Special Events",                  image: "/images/education/graduation_gowns_school.jpg",
                  description: "Ceremonial and event-specific attire for graduations and formal occasions."
                }
              ].map((category, index) => (
                <div key={index} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Educational Standards & Compliance</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                                <Image                  src="/images/education/School_uniform_fabrics.jpg"                  alt="Education uniform compliance and standards"                  fill                  className="object-cover"                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Meeting Saudi Educational Guidelines</h3>
                <p className="mb-4 text-muted-foreground">
                  Our education uniforms adhere to all relevant Saudi Ministry of Education guidelines while providing practical, comfortable attire that meets the needs of modern educational environments.
                </p>
                <ul className="space-y-2">
                  {[
                    "Compliance with Saudi Ministry of Education guidelines",
                    "Safety considerations for laboratory and workshop environments",
                    "Fabric testing for durability and regular student use",
                    "Cultural sensitivity in design and implementation",
                    "Age-appropriate styling considerations",
                    "Regular consultation with educational institutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Fabric Technologies */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Education Fabric Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Reinforced Durability",
                  description: "Special weaving and construction techniques that resist wear at key stress points for longer-lasting uniforms.",
                  icon: "💪"
                },
                {
                  title: "Stain Resistance",
                  description: "Treatments that repel common school-day stains and simplify cleaning for parents and school maintenance staff.",
                  icon: "🛡️"
                },
                {
                  title: "Climate Comfort",
                  description: "Fabric technologies that maintain comfort in both air-conditioned classrooms and outdoor activities in Saudi climate.",
                  icon: "🌡️"
                },
                {
                  title: "Easy Care",
                  description: "Low-maintenance fabrics that withstand frequent washing, resist wrinkling, and maintain color vibrancy over time.",
                  icon: "👕"
                },
                {
                  title: "Movement Freedom",
                  description: "Strategic stretch elements and ergonomic design for unrestricted movement during learning activities.",
                  icon: "🤸"
                },
                {
                  title: "Sustainable Options",
                  description: "Eco-friendly fabric choices that maintain educational-grade performance while reducing environmental impact.",
                  icon: "♻️"
                }
              ].map((tech, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm text-center">
                  <div className="mb-4 text-4xl">{tech.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-16 rounded-lg overflow-hidden border shadow-md">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px]">
                                <Image                  src="/images/education/School_uniform_manufacturer.jpg"                  alt="Education uniform case study"                  fill                  className="object-cover"                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">International School of Riyadh</h3>
                <p className="mb-4 text-muted-foreground">
                  The International School of Riyadh approached Fakhr Khaleej to redesign their uniform program for 1,200+ students. They needed a solution that balanced international educational standards with Saudi cultural considerations.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Created distinctive designs that incorporated school colors and identity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Implemented a complete distribution and sizing system</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Reduced uniform replacement rates by 35% through durability improvements</span>
                  </li>
                </ul>
                <div className="text-sm italic text-muted-foreground">
                  "Fakhr Khaleej transformed our uniform program with their attention to quality and service. Students, parents, and staff are all pleased with the results."
                  <div className="mt-2 font-semibold not-italic">— Academic Director, International School of Riyadh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Education Uniform Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Consultation",
                  description: "We meet with school administrators to understand your institution's values, practical needs, and aesthetic preferences.",
                  step: "01"
                },
                {
                  title: "Design & Sampling",
                  description: "Our designers create uniform concepts and produce samples for review, refinement, and approval.",
                  step: "02"
                },
                {
                  title: "Implementation",
                  description: "We establish production, sizing, inventory management, and distribution systems tailored to your institution.",
                  step: "03"
                },
                {
                  title: "Ongoing Support",
                  description: "We provide continuous service including replacements, adjustments, and program management support.",
                  step: "04"
                }
              ].map((process, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-lg bg-primary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Elevate Your Institution's Uniform Program?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact our education uniform specialists to discuss your school's specific requirements and discover how Fakhr Khaleej can support your institution's identity and values.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link href="/request-quote" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Request a Consultation
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Uniform FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of educational institutions does Fakhr Khaleej provide uniforms for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides uniform solutions for all educational institutions across Saudi Arabia including elementary schools, middle schools, high schools, colleges, universities, and specialized training facilities."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej ensure uniform durability for active students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our education uniforms utilize reinforced stitching at stress points, specially selected fabrics with high abrasion resistance, quality control throughout manufacturing, and rigorous testing under typical school usage conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Can Fakhr Khaleej help implement a complete uniform program for a new school?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in developing comprehensive uniform programs for new educational institutions. Our services include consultation, design, manufacturing, sizing systems, inventory management, distribution strategies, and ongoing support."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej address cultural considerations in school uniform design?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We carefully balance Saudi cultural values with educational requirements by consulting with institutions on appropriate modesty standards, considering gender-specific requirements, incorporating traditional elements where desired, and ensuring designs comply with Ministry of Education guidelines."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 