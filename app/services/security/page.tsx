import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/ServiceHeader";
import { CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Uniform Solutions | Fakhr Khaleej - Professional Security Attire in KSA",
  description: "Professional security uniform solutions for Saudi Arabian security personnel. Combining authority, functionality, and safety features for security companies and institutions.",
  keywords: "security uniforms Saudi Arabia, security guard uniforms KSA, professional security attire, Saudi security company uniforms, tactical security wear, security officer uniforms, private security uniforms Saudi, protective security clothing",
  openGraph: {
    title: "Security Uniform Solutions | Fakhr Khaleej",
    description: "Professional security uniform solutions for Saudi Arabian security personnel. Combining authority, functionality, and safety features for security companies and institutions.",
    images: ["/images/security/security-hero.jpg"],
  },
};

const slides = [
  {
    image: "/images/security/security-officer-uniforms.jpg",
    title: "Professional Security Presence",
    description: "Authoritative uniform solutions for Saudi Arabian security companies"
  },
  {
    image: "/images/security/tactical-security-uniforms.jpg",
    title: "Tactical Security Attire",
    description: "Specialized uniforms engineered for active security operations"
  },
  {
    image: "/images/security/security-management-uniforms.jpg",
    title: "Security Management Distinction",
    description: "Distinctive attire for security leadership and supervision"
  }
];

export default function SecurityServicePage() {
  return (
    <div>
      <ServiceHeader
        title="Security Uniform Solutions"
        description="Professional security attire that projects authority while providing the functionality and protection security personnel need in Saudi Arabian environments."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Security Through Professional Presentation</h2>
                <p className="mb-4 text-muted-foreground">
                  Fakhr Khaleej specializes in creating professional security uniform solutions for Saudi Arabian security companies and institutions. Our security attire balances authoritative presence with practical functionality for security personnel across various environments.
                </p>
                <p className="text-muted-foreground">
                  From corporate security teams to specialized tactical units, we design uniform systems that communicate professionalism and authority while incorporating essential performance features for security operations.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/security/security-officer-uniforms.jpg"
                  alt="Professional security uniforms for Saudi Arabian personnel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Security Uniform Programs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Authority Projection",
                  description: "Professional designs that instantly communicate security presence and command respect."
                },
                {
                  title: "Operational Functionality",
                  description: "Practical features engineered for the specific tasks security personnel perform daily."
                },
                {
                  title: "Enhanced Safety",
                  description: "Integrated visibility features and protective elements for personnel security."
                },
                {
                  title: "Climate Adaptation",
                  description: "Material technologies suitable for both Saudi outdoor conditions and indoor environments."
                },
                {
                  title: "Organizational Identity",
                  description: "Customization options that incorporate company branding and distinguish rank structure."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Designs that meet Saudi security industry regulations and organizational standards."
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

          {/* Security Uniform Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Security Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Corporate Security",
                  image: "/images/security/corporate-security-uniforms.jpg",
                  description: "Professional attire for office buildings, corporate headquarters, and business environments."
                },
                {
                  title: "Event Security",
                  image: "/images/security/event-security-uniforms.jpg",
                  description: "Identifiable, practical uniforms for event management and crowd control operations."
                },
                {
                  title: "Retail Security",
                  image: "/images/security/retail-security-uniforms.jpg",
                  description: "Approachable yet authoritative uniforms for shopping centers and retail environments."
                },
                {
                  title: "Tactical Operations",
                  image: "/images/security/tactical-security-uniforms.jpg",
                  description: "Performance-oriented attire for active security operations and response teams."
                },
                {
                  title: "Security Management",
                  image: "/images/security/security-management-uniforms.jpg",
                  description: "Distinguished uniforms that identify leadership while maintaining operational capability."
                },
                {
                  title: "Specialized Security",
                  image: "/images/security/specialized-security-uniforms.jpg",
                  description: "Custom uniform solutions for specialized security roles and environments."
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

          {/* Performance Features */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Operational Performance Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/security/security-uniform-features.jpg"
                  alt="Security uniform performance features"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Enhanced Functionality for Security Operations</h3>
                <p className="mb-4 text-muted-foreground">
                  Our security uniforms incorporate specialized design elements and features that support the practical requirements of security operations across Saudi Arabian environments.
                </p>
                <ul className="space-y-2">
                  {[
                    "Strategic pocket placement for essential security equipment",
                    "Reinforced construction at key stress points for active movement",
                    "Integrated badge and ID display systems",
                    "High-visibility elements for night operations and low-light conditions",
                    "Communication device accommodation with secure attachment points",
                    "Range-of-motion design that facilitates rapid response capabilities"
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
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Security Uniform Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Temperature Management",
                  description: "Advanced fabrics that regulate body temperature during long security shifts in varying environments.",
                  icon: "🌡️"
                },
                {
                  title: "Reinforced Durability",
                  description: "Military-grade construction techniques that withstand the physical demands of security operations.",
                  icon: "💪"
                },
                {
                  title: "Night Visibility",
                  description: "Reflective materials and visibility enhancements for improved safety during night operations.",
                  icon: "🔦"
                },
                {
                  title: "Moisture Control",
                  description: "Sweat-wicking properties that maintain professional appearance during active security tasks.",
                  icon: "💧"
                },
                {
                  title: "Tactical Integration",
                  description: "Design elements that accommodate security equipment, communication devices, and protective gear.",
                  icon: "🛡️"
                },
                {
                  title: "Weather Resistance",
                  description: "Environmental protection features for Saudi Arabia's diverse climate conditions.",
                  icon: "☀️"
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
                  src="/images/security/security-case-study.jpg"
                  alt="Security uniform case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">National Security Services Group</h3>
                <p className="mb-4 text-muted-foreground">
                  National Security Services Group, a leading private security provider in Saudi Arabia, partnered with Fakhr Khaleej to revitalize their uniform program for 2,500+ security personnel across multiple client sites and specialized divisions.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Developed distinct yet cohesive designs across five specialized security divisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Implemented climate-adaptive uniform options for both indoor and outdoor security operations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Reduced uniform-related concerns by 68% through enhanced functionality and comfort features</span>
                  </li>
                </ul>
                <div className="text-sm italic text-muted-foreground">
                  "Fakhr Khaleej transformed our security personnel's professional appearance and operational functionality. Our clients consistently comment on the professional presence our teams project, and our officers report significantly improved comfort during long security shifts."
                  <div className="mt-2 font-semibold not-italic">— Operations Director, National Security Services Group</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Security Uniform Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Requirements Analysis",
                  description: "We analyze your security operations, personnel roles, and specific environmental needs.",
                  step: "01"
                },
                {
                  title: "Design & Development",
                  description: "Our specialists create security-focused uniform designs tailored to your operational requirements.",
                  step: "02"
                },
                {
                  title: "Field Testing",
                  description: "Selected uniform elements undergo rigorous testing in actual security environments.",
                  step: "03"
                },
                {
                  title: "Implementation & Support",
                  description: "We deploy your complete uniform program with ongoing management and support systems.",
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
            <h2 className="mb-4 text-2xl font-bold">Ready to Enhance Your Security Team's Professional Presence?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact our security uniform specialists to discuss your organization's specific requirements and discover how Fakhr Khaleej can elevate your security operations.
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

      {/* Security Uniform FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of security organizations does Fakhr Khaleej provide uniforms for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides uniform solutions for all security sectors in Saudi Arabia including private security companies, corporate security departments, event security teams, retail security operations, specialized security units, and facility protection services."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej balance authority projection with practical functionality in security uniforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We design security uniforms with authoritative visual elements including professional silhouettes, appropriate color psychology, clear rank identification, and organizational insignia while incorporating practical features like strategic pocket placement, range-of-motion construction, equipment accommodation, and climate-appropriate materials."
                }
              },
              {
                "@type": "Question",
                "name": "Can Fakhr Khaleej create custom security uniforms that incorporate our company branding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in creating customized security uniforms that incorporate your organization's branding elements including color schemes, company logos, and distinctive design features while maintaining professional security appearance and operational functionality."
                }
              },
              {
                "@type": "Question",
                "name": "What special features does Fakhr Khaleej incorporate into security uniforms for the Saudi climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our security uniforms for the Saudi climate feature moisture-wicking technologies that manage perspiration, UV-protective fabrics for outdoor operations, temperature-regulating materials for extreme conditions, lightweight but durable construction, and strategic ventilation elements for enhanced comfort during long security shifts."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 