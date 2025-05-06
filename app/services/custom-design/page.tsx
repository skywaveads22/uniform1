import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Uniform Design Services | UniformSA",
  description: "Professional custom uniform design services in Saudi Arabia. Create distinctive, functional, and culturally appropriate uniforms for your organization.",
}

const slides = [
  {
    image: "/images/industrial/anti_static_uniforms.jpeg",
    title: "Bespoke Design",
    description: "Custom uniform designs that perfectly represent your brand identity"
  },
  {
    image: "/images/industrial/Custom_industrial_uniforms_Bespoke_workwear.jpeg",
    title: "Collaborative Process",
    description: "Work directly with our expert designers to create your perfect uniform"
  },
  {
    image: "/images/industrial/Factory_uniforms.jpeg",
    title: "Premium Materials",
    description: "High-quality fabrics and materials for comfortable, durable uniforms"
  }
]

export default function CustomDesignPage() {
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
                <h2 className="mb-4 text-3xl font-bold">Expert Uniform Design Services</h2>
                <p className="mb-4 text-muted-foreground">
                  Our custom design service helps organizations across Saudi Arabia create 
                  distinctive uniforms that perfectly blend brand identity, functionality, 
                  and cultural appropriateness.
                </p>
                <p className="text-muted-foreground">
                  Whether you're looking to design healthcare uniforms, corporate attire, 
                  hospitality uniforms, or industrial workwear, our experienced design team 
                  works closely with you to deliver exceptional results that enhance your 
                  professional image.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg"
                  alt="Custom uniform design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Design Process</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "We discuss your requirements, brand guidelines, and specific needs",
                  icon: "🗣️"
                },
                {
                  step: 2,
                  title: "Concept Creation",
                  description: "Our designers develop initial concepts based on your requirements",
                  icon: "✏️"
                },
                {
                  step: 3,
                  title: "Refinement",
                  description: "Collaborative refinement until the design perfectly meets your vision",
                  icon: "🔄"
                },
                {
                  step: 4,
                  title: "Production",
                  description: "Final designs move to production with rigorous quality control",
                  icon: "🏭"
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

          {/* Design Services */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Design Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Full Uniform Design",
                  description: "Comprehensive design of complete uniform sets tailored to your organization's needs."
                },
                {
                  title: "Logo Integration",
                  description: "Strategic placement and adaptation of your logo and branding elements on uniforms."
                },
                {
                  title: "Cultural Adaptation",
                  description: "Designs that respect and incorporate Saudi cultural considerations and requirements."
                },
                {
                  title: "Technical Specifications",
                  description: "Detailed technical drawings and specifications for accurate manufacturing."
                },
                {
                  title: "Material Selection",
                  description: "Expert advice on fabrics and materials based on function, climate, and durability needs."
                },
                {
                  title: "Prototype Development",
                  description: "Creation of physical prototypes for evaluation before full production."
                }
              ].map((service, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Design Portfolio</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "/images/industrial/Industrial_uniforms.jpeg",
                  alt: "Corporate uniform design",
                  category: "Corporate"
                },
                {
                  src: "/images/healthcare/Medical_scrubs.jpg",
                  alt: "Healthcare uniform design",
                  category: "Healthcare"
                },
                {
                  src: "/images/industrial/Fire_resistant_uniforms_FR_clothing.jpeg",
                  alt: "Hospitality uniform design",
                  category: "Hospitality"
                },
                {
                  src: "/images/industrial/Workshop_uniforms.jpeg",
                  alt: "Industrial uniform design",
                  category: "Industrial"
                },
                {
                  src: "/images/industrial/Construction_worker_uniforms_attire.jpeg",
                  alt: "Education uniform design",
                  category: "Education"
                },
                {
                  src: "/images/industrial/Construction_site_uniforms.jpeg",
                  alt: "Aviation uniform design",
                  category: "Aviation"
                }
              ].map((item, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <span className="font-semibold">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Considerations */}
          <div className="mb-16 rounded-lg border bg-card p-8 shadow-sm">
            <h2 className="mb-8 text-center text-3xl font-bold">Design Considerations</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Functional Requirements</h3>
                <ul className="space-y-2">
                  {[
                    "Mobility and comfort for daily tasks",
                    "Climate-appropriate materials for Saudi weather",
                    "Durability for extended wear and washing",
                    "Task-specific features relevant to job functions",
                    "Storage solutions such as pockets and attachments",
                    "Compliance with industry safety standards"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">Brand & Cultural Elements</h3>
                <ul className="space-y-2">
                  {[
                    "Brand color integration and consistency",
                    "Cultural appropriateness for Saudi context",
                    "Modesty considerations for different genders",
                    "Traditional elements that resonate locally",
                    "Modern design elements for contemporary appeal",
                    "Distinctive features for brand recognition"
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

          {/* Design Packages */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Design Packages</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Essential",
                  description: "Basic design service for smaller organizations",
                  price: "Starting at 12,000 SAR",
                  features: [
                    "2 initial design concepts",
                    "2 revision rounds",
                    "Basic technical specifications",
                    "Standard material options",
                    "Digital mockups",
                    "Production-ready files"
                  ],
                  recommended: false
                },
                {
                  title: "Professional",
                  description: "Comprehensive design for medium organizations",
                  price: "Starting at 25,000 SAR",
                  features: [
                    "4 initial design concepts",
                    "3 revision rounds",
                    "Detailed technical specifications",
                    "Extended material selection",
                    "Digital mockups with model renders",
                    "1 physical prototype sample",
                    "Production-ready files",
                    "Basic style guide"
                  ],
                  recommended: true
                },
                {
                  title: "Enterprise",
                  description: "Premium service for large organizations",
                  price: "Starting at 45,000 SAR",
                  features: [
                    "6+ initial design concepts",
                    "Unlimited revision rounds",
                    "Comprehensive technical package",
                    "Premium material consultation",
                    "High-quality digital renderings",
                    "3 physical prototype samples",
                    "Production-ready files",
                    "Comprehensive style guide",
                    "On-site design workshop",
                    "Implementation support"
                  ],
                  recommended: false
                }
              ].map((tier, index) => (
                <div key={index} className={`relative rounded-lg border ${tier.recommended ? 'border-primary' : 'border-muted'} bg-background p-6 shadow-sm`}>
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{tier.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-2xl font-bold">{tier.price}</span>
                    </div>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <span className="mr-2 text-primary">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Link
                      href="/request-quote"
                      className={`inline-block rounded-lg ${tier.recommended ? 'bg-primary text-white' : 'bg-muted text-primary'} px-4 py-2 font-medium transition-transform hover:scale-105`}
                    >
                      Select Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Client Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote: "The design team at UniformSA truly understood our brand and created uniforms that perfectly represent our corporate identity while ensuring comfort for our staff.",
                  author: "Mohammed Al-Harbi",
                  position: "HR Director, Saudi Financial Group",
                  image: "/images/author/Khalid_Alhanty.png"
                },
                {
                  quote: "We needed uniforms that combined traditional elements with modern functionality for our hotel staff. The custom designs exceeded our expectations and have received numerous compliments from guests.",
                  author: "Fatima Al-Saud",
                  position: "Operations Manager, Luxury Hospitality Chain",
                  image: "/images/author/Noura_Almutairi.png"
                }
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 text-primary">★★★★★</div>
                  <blockquote className="mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mb-16 rounded-lg bg-primary p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Design Your Custom Uniforms?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90">
              Contact our design team today to discuss your custom uniform requirements 
              and take the first step towards creating distinctive uniforms that perfectly 
              represent your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/portfolio"
                className="rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                View Our Portfolio
              </Link>
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-white/90"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 