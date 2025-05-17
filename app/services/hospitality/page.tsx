import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/ServiceHeader";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospitality Uniform Solutions | Fakhr Khaleej - Premium Hotel Uniforms in KSA",
  description: "Elevate your hospitality brand with premium uniform solutions for Saudi Arabian hotels, restaurants, and resorts. Combining cultural elegance with practicality for all hospitality staff roles.",
  keywords: "hospitality uniforms Saudi Arabia, hotel staff uniforms KSA, restaurant uniforms Saudi, resort staff attire, luxury hotel uniforms, Saudi hospitality uniform supplier, front desk uniforms, F&B staff uniforms",
  openGraph: {
    title: "Hospitality Uniform Solutions | Fakhr Khaleej",
    description: "Elevate your hospitality brand with premium uniform solutions for Saudi Arabian hotels, restaurants, and resorts. Combining cultural elegance with practicality for all hospitality staff roles.",
    images: ["/images/hospitality/hospitality-hero.jpg"],
  },
};

const slides = [
  {
    image: "/images/hospitality/hotel-staff-uniforms.jpg",
    title: "Hospitality Excellence Through Presentation",
    description: "Premium uniform solutions for Saudi Arabian hospitality establishments"
  },
  {
    image: "/images/hospitality/restaurant-staff-uniforms.jpg",
    title: "F&B Staff Attire",
    description: "Specialized uniforms for food and beverage service professionals"
  },
  {
    image: "/images/hospitality/resort-staff-uniforms.jpg",
    title: "Resort & Leisure Designs",
    description: "Distinctive attire for luxury resorts and entertainment venues"
  }
];

export default function HospitalityServicePage() {
  return (
    <div>
      <ServiceHeader
        title="Hospitality Uniform Solutions"
        description="Elevate your guest experience with premium hospitality uniforms that combine Saudi cultural elements with practical functionality for all staff roles."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Elevating Hospitality Through Uniforms</h2>
                <p className="mb-4 text-muted-foreground">
                  Fakhr Khaleej specializes in creating distinctive uniform solutions for Saudi Arabia's hospitality sector. Our programs blend cultural sensitivity with contemporary design to create memorable visual impressions that enhance guest experiences.
                </p>
                <p className="text-muted-foreground">
                  From luxury hotels to casual dining establishments, we tailor uniform collections that reinforce your brand identity while providing staff with comfortable, practical attire that supports exceptional service delivery.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/hospitality/hotel-staff-uniforms.jpg"
                  alt="Premium hotel uniforms for Saudi hospitality staff"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Hospitality Uniform Programs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Brand Enhancement",
                  description: "Distinctive designs that visually communicate your brand's unique hospitality philosophy."
                },
                {
                  title: "Cultural Integration",
                  description: "Thoughtful incorporation of Saudi heritage elements with contemporary hospitality standards."
                },
                {
                  title: "Staff Confidence",
                  description: "Professional attire that empowers staff to represent your establishment with pride."
                },
                {
                  title: "Guest Recognition",
                  description: "Clear visual differentiation between departments for intuitive guest navigation."
                },
                {
                  title: "Climate Optimization",
                  description: "Fabrics and designs suited to both Saudi climate and climate-controlled interiors."
                },
                {
                  title: "Operational Efficiency",
                  description: "Practical designs that facilitate movement, service delivery, and staff productivity."
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

          {/* Hospitality Staff Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Hospitality Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Front Desk & Reception",
                  image: "/images/hospitality/front-desk-uniforms.jpg",
                  description: "Distinguished attire for your establishment's first visual ambassadors."
                },
                {
                  title: "Food & Beverage Service",
                  image: "/images/hospitality/restaurant-staff-uniforms.jpg",
                  description: "Practical, elegant uniforms for restaurant, café, and banquet service staff."
                },
                {
                  title: "Housekeeping & Facilities",
                  image: "/images/hospitality/housekeeping-uniforms.jpg",
                  description: "Comfortable, durable attire that facilitates mobility and cleanliness."
                },
                {
                  title: "Concierge & Guest Services",
                  image: "/images/hospitality/concierge-uniforms.jpg",
                  description: "Refined, approachable uniforms that convey professionalism and assistance."
                },
                {
                  title: "Spa & Recreation",
                  image: "/images/hospitality/spa-staff-uniforms.jpg",
                  description: "Relaxed yet professional attire for wellness and leisure facility staff."
                },
                {
                  title: "Management & Administration",
                  image: "/images/hospitality/hotel-management-uniforms.jpg",
                  description: "Executive appearance that distinguishes leadership while maintaining brand cohesion."
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

          {/* Cultural Integration */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Saudi Cultural Integration</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/hospitality/cultural-hospitality-uniforms.jpg"
                  alt="Saudi cultural elements integrated into hospitality uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Honoring Saudi Heritage in Hospitality Attire</h3>
                <p className="mb-4 text-muted-foreground">
                  Our hospitality uniform designs thoughtfully incorporate elements of Saudi cultural heritage while meeting international hospitality standards, creating a distinctive and authentic experience for guests.
                </p>
                <ul className="space-y-2">
                  {[
                    "Traditional pattern elements adapted for contemporary uniforms",
                    "Color palettes inspired by Saudi heritage and landscape",
                    "Cultural modesty considerations for staff comfort",
                    "Distinctive touches that communicate authentic Saudi hospitality",
                    "Balance of tradition and modern hospitality requirements",
                    "Symbol integration that honors the Kingdom's rich history"
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
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Hospitality Fabric Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Easy-Care Performance",
                  description: "Wrinkle-resistant fabrics that maintain a pristine appearance throughout long service shifts.",
                  icon: "👔"
                },
                {
                  title: "Moisture Management",
                  description: "Advanced wicking properties that keep staff comfortable and presentable during active service.",
                  icon: "💧"
                },
                {
                  title: "Stain Resistance",
                  description: "Protective treatments that repel spills and stains in food service and housekeeping environments.",
                  icon: "🛡️"
                },
                {
                  title: "Movement Optimization",
                  description: "Strategic stretch and ergonomic design that facilitates service tasks and staff comfort.",
                  icon: "🤸"
                },
                {
                  title: "Temperature Regulation",
                  description: "Smart fabrics that adapt to indoor and outdoor environments within Saudi hospitality settings.",
                  icon: "🌡️"
                },
                {
                  title: "Luxurious Appearance",
                  description: "Premium fabric technologies that maintain a sophisticated look while offering practical durability.",
                  icon: "✨"
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
                <Image
                  src="/images/hospitality/hotel-case-study.jpg"
                  alt="Hospitality uniform case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">Luxury Resort Collection Riyadh</h3>
                <p className="mb-4 text-muted-foreground">
                  The Luxury Resort Collection Riyadh partnered with Fakhr Khaleej to develop a distinctive uniform program for their 500+ staff members across multiple properties. They needed uniforms that projected luxury while honoring Saudi heritage.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Created a coordinated collection across 12 staff departments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Incorporated subtle traditional patterns into contemporary designs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Increased staff satisfaction scores by 42% through comfort improvements</span>
                  </li>
                </ul>
                <div className="text-sm italic text-muted-foreground">
                  "Fakhr Khaleej transformed our staff appearance and created uniforms that have become a signature element of our guest experience. The attention to both aesthetic detail and practical functionality has been exceptional."
                  <div className="mt-2 font-semibold not-italic">— Director of Operations, Luxury Resort Collection Riyadh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Hospitality Uniform Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Brand Analysis",
                  description: "We immerse ourselves in your hospitality concept, brand values, and guest experience goals.",
                  step: "01"
                },
                {
                  title: "Design Development",
                  description: "Our designers create custom uniform concepts tailored to your establishment's unique character.",
                  step: "02"
                },
                {
                  title: "Program Implementation",
                  description: "We manage production, sizing, inventory systems, and staff rollout with minimal disruption.",
                  step: "03"
                },
                {
                  title: "Ongoing Support",
                  description: "We provide continuous program maintenance, replacements, and adjustments as needed.",
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
            <h2 className="mb-4 text-2xl font-bold">Ready to Transform Your Hospitality Presentation?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact our hospitality uniform specialists to discuss your establishment's specific requirements and discover how Fakhr Khaleej can enhance your guest experience.
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

      {/* Hospitality Uniform FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of hospitality establishments does Fakhr Khaleej provide uniforms for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides uniform solutions for all hospitality sectors in Saudi Arabia including luxury hotels, boutique establishments, resorts, restaurants, cafes, entertainment venues, spas, and event spaces."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej incorporate Saudi cultural elements into hospitality uniforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We thoughtfully integrate cultural elements through subtle pattern work inspired by traditional Saudi designs, appropriate color palettes that reflect regional heritage, modest cuts that respect local customs, and distinctive details that communicate authentic Saudi hospitality while maintaining contemporary style."
                }
              },
              {
                "@type": "Question",
                "name": "Can Fakhr Khaleej handle large hotel chains with multiple properties?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in managing comprehensive uniform programs for hospitality groups with multiple properties. Our services include centralized design systems with property-specific elements, standardized quality across locations, coordinated procurement and distribution networks, and consistent program management across the entire organization."
                }
              },
              {
                "@type": "Question",
                "name": "What makes hospitality uniforms different from other industry uniforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hospitality uniforms require a unique balance between aesthetic appeal that enhances guest experience and practical functionality for active service roles. They must project the establishment's brand identity, withstand frequent washing while maintaining appearance, facilitate movement for service tasks, and create recognizable department identification for guests."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 