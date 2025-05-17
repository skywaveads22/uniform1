import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/ServiceHeader";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Uniform Solutions | Fakhr Khaleej - Premium Workwear in KSA",
  description: "Professional industrial uniform solutions for Saudi Arabian manufacturing, construction, and production facilities. Combining safety, durability, and functionality for all industrial personnel.",
  keywords: "industrial uniforms Saudi Arabia, workwear KSA, factory uniforms Saudi, construction site attire, manufacturing staff uniforms, safety workwear, flame resistant clothing, PPE compliant uniforms",
  openGraph: {
    title: "Industrial Uniform Solutions | Fakhr Khaleej",
    description: "Professional industrial uniform solutions for Saudi Arabian manufacturing, construction, and production facilities. Combining safety, durability, and functionality for all industrial personnel.",
    images: ["/images/industrial/industrial_uniforms.jpeg"],
  },
};

const slides = [
  {
    image: "/images/industrial/Factory_uniforms.jpeg",
    title: "Industrial Excellence Through Safety & Function",
    description: "Specialized uniform solutions for Saudi Arabian manufacturing and industrial facilities"
  },
  {
    image: "/images/industrial/Fire_resistant_uniforms_FR_clothing.jpeg",
    title: "Advanced Protection",
    description: "Specialized safety attire for hazardous industrial environments"
  },
  {
    image: "/images/industrial/Workshop_uniforms.jpeg",
    title: "Operational Functionality",
    description: "Practical workwear engineered for industrial operations and manufacturing"
  }
];

export default function IndustrialServicePage() {
  return (
    <div>
      <ServiceHeader
        title="Industrial Uniform Solutions"
        description="Specialized industrial uniform programs that balance rigorous safety standards with durability and functionality for Saudi Arabian manufacturing and production environments."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Elevating Industrial Safety Through Workwear</h2>
                <p className="mb-4 text-muted-foreground">
                  Fakhr Khaleej specializes in creating advanced industrial uniform programs for Saudi Arabian manufacturing, construction, and production facilities. Our workwear solutions seamlessly balance rigorous safety requirements with practical functionality for all industrial roles.
                </p>
                <p className="text-muted-foreground">
                  From factory floor workers to site supervisors, we design uniform collections that prioritize protection while providing industrial personnel with comfortable, standards-compliant attire that supports exceptional performance in demanding environments.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/industrial/Factory_worker_uniforms.jpeg"
                  alt="Professional industrial workwear for Saudi Arabian manufacturing personnel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Industrial Uniform Programs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Enhanced Safety",
                  description: "Advanced fabrics and designs that meet rigorous safety standards for hazardous industrial environments."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Workwear that meets Saudi and international industrial safety regulations and standards."
                },
                {
                  title: "Superior Durability",
                  description: "Heavy-duty construction that withstands harsh industrial conditions and frequent laundering."
                },
                {
                  title: "Functional Performance",
                  description: "Practical designs that facilitate movement, tool access, and operational tasks."
                },
                {
                  title: "Climate Adaptability",
                  description: "Materials optimized for comfort in varied Saudi industrial environments, from air-conditioned facilities to outdoor sites."
                },
                {
                  title: "Visual Identification",
                  description: "Strategic use of color-coding and high-visibility elements for safety and role recognition."
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

          {/* Industrial Personnel Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Industrial Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Manufacturing Staff",
                  image: "/images/industrial/Factory_worker_uniforms.jpeg",
                  description: "Durable, functional uniforms designed specifically for production floor personnel."
                },
                {
                  title: "Specialized Protection",
                  image: "/images/industrial/Fire_resistant_uniforms_FR_clothing.jpeg",
                  description: "FR-rated and specialized protective clothing for hazardous work environments."
                },
                {
                  title: "Maintenance Teams",
                  image: "/images/industrial/Technician_uniforms_maintenance.jpeg",
                  description: "Practical workwear with enhanced durability and tool accommodation features."
                },
                {
                  title: "Warehouse & Logistics",
                  image: "/images/industrial/warehouse_staff_uniforms.jpeg",
                  description: "High-visibility and functional attire for logistics and material handling personnel."
                },
                {
                  title: "Site Management",
                  image: "/images/industrial/Site_engineer_uniforms.jpeg",
                  description: "Professional attire that distinguishes supervisory and management staff while maintaining safety compliance."
                },
                {
                  title: "Specialized Trades",
                  image: "/images/industrial/welder_uniforms_apparel.jpeg",
                  description: "Role-specific uniforms designed for specialized industrial trades and processes."
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

          {/* Safety Standards & Compliance */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Industrial Safety Standards & Compliance</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/industrial/Safety_workwear_PPE_apparel.jpeg"
                  alt="Industrial workwear regulatory compliance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Meeting Saudi & International Industrial Standards</h3>
                <p className="mb-4 text-muted-foreground">
                  Our industrial uniforms adhere to all relevant Saudi safety regulations and international standards while providing the durability and functionality required in demanding industrial environments.
                </p>
                <ul className="space-y-2">
                  {[
                    "Compliance with Saudi Ministry of Labor workplace safety regulations",
                    "Adherence to international safety standards including ISO and ANSI guidelines",
                    "Flame-resistant (FR) certification for applicable environments",
                    "High-visibility compliance for relevant roles and settings",
                    "Chemical and hazard-specific protection ratings where required",
                    "Integrated compatibility with required PPE (Personal Protective Equipment)"
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

          {/* Advanced Technologies */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Industrial Fabric Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Flame Resistance",
                  description: "Specialized FR-rated fabrics that self-extinguish to protect workers in environments with fire hazards.",
                  icon: "🔥"
                },
                {
                  title: "Reinforced Durability",
                  description: "Strategic reinforcement in high-wear areas to extend uniform lifespan in demanding conditions.",
                  icon: "🛡️"
                },
                {
                  title: "Enhanced Visibility",
                  description: "Retroreflective materials and high-contrast elements for improved worker visibility and safety.",
                  icon: "👀"
                },
                {
                  title: "Chemical Resistance",
                  description: "Specialized treatments that repel or protect against common industrial chemicals and substances.",
                  icon: "⚗️"
                },
                {
                  title: "Climate Regulation",
                  description: "Advanced fabrics that maintain comfort in varied industrial environments, from climate-controlled to outdoor settings.",
                  icon: "🌡️"
                },
                {
                  title: "Anti-Static Protection",
                  description: "Conductive fiber technologies that dissipate static electricity in sensitive electronic environments.",
                  icon: "⚡"
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
                  src="/images/industrial/Manufacturing_sector_uniforms.jpeg"
                  alt="Industrial uniform case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">Major Saudi Manufacturing Corporation</h3>
                <p className="mb-4 text-muted-foreground">
                  A leading Saudi manufacturing corporation partnered with Fakhr Khaleej to develop a comprehensive workwear program for their 2,500+ industrial personnel across multiple facilities. They required uniforms that would enhance safety compliance while ensuring durability in harsh production environments.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Created role-specific workwear solutions for 8 different operational departments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Implemented FR-rated fabrics and high-visibility elements in compliance with safety standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Reduced workwear replacement frequency by 47% while improving safety compliance rates</span>
                  </li>
                </ul>
                <div className="text-sm italic text-muted-foreground">
                  "Fakhr Khaleej transformed our approach to industrial uniforms with workwear that genuinely supports our safety culture. The durability has significantly reduced our uniform costs, while our staff report improved comfort even in challenging work conditions."
                  <div className="mt-2 font-semibold not-italic">— Operations Director, Major Saudi Manufacturing Corporation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Industrial Uniform Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Operational Assessment",
                  description: "We analyze your specific industrial processes, hazards, and safety requirements to inform design solutions.",
                  step: "01"
                },
                {
                  title: "Safety-Focused Design",
                  description: "Our specialists create industrial uniform designs that balance protection with practical functionality.",
                  step: "02"
                },
                {
                  title: "Standards Compliance",
                  description: "All designs are verified against relevant safety regulations and industry-specific standards.",
                  step: "03"
                },
                {
                  title: "Implementation & Maintenance",
                  description: "We deploy your complete uniform program with ongoing replacement and maintenance systems.",
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
            <h2 className="mb-4 text-2xl font-bold">Ready to Enhance Safety and Performance Through Better Workwear?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact our industrial uniform specialists to discuss your facility's specific requirements and discover how Fakhr Khaleej can enhance your safety compliance while providing durable, functional workwear.
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

      {/* Industrial Uniform FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of industrial organizations does Fakhr Khaleej provide uniforms for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides workwear solutions for all industrial sectors in Saudi Arabia including manufacturing facilities, construction sites, oil and gas operations, warehousing and logistics centers, food processing plants, and other production environments."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej ensure industrial workwear compliance with safety regulations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our industrial uniforms are developed with comprehensive knowledge of Saudi workplace safety regulations and international standards. We incorporate appropriate safety features such as flame resistance, high visibility elements, chemical protection, and static dissipation where required, and provide proper documentation of compliance certifications."
                }
              },
              {
                "@type": "Question",
                "name": "What special features make industrial uniforms different from other sectors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Industrial uniforms incorporate specialized features including safety certifications like FR (flame resistant) ratings, reinforced stitching and construction for extreme durability, specialized pocket configurations for tools and equipment, high-visibility elements for safety in active environments, chemical and hazard-specific protective treatments, and enhanced comfort features for physical work conditions."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej balance durability with worker comfort in industrial workwear?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We achieve this balance through strategic material selection that provides durability while maintaining breathability, incorporating stretch panels in key movement areas, utilizing lightweight yet strong fabric technologies, designing with ergonomic considerations specific to industrial movements, implementing moisture-wicking properties for comfort in hot environments, and conducting extensive field testing in actual industrial conditions."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 