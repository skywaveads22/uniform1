import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/ServiceHeader";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Uniform Solutions | Fakhr Khaleej - Premium Medical Uniforms in KSA",
  description: "Professional healthcare uniform solutions for Saudi Arabian medical facilities. Combining functionality, comfort, and compliance for medical staff, nursing teams, and support personnel.",
  keywords: "healthcare uniforms Saudi Arabia, medical uniforms KSA, hospital uniforms Saudi, nurse scrubs, doctor attire, clinic staff uniforms, medical-grade uniforms, antimicrobial scrubs",
  openGraph: {
    title: "Healthcare Uniform Solutions | Fakhr Khaleej",
    description: "Professional healthcare uniform solutions for Saudi Arabian medical facilities. Combining functionality, comfort, and compliance for medical staff, nursing teams, and support personnel.",
    images: ["/images/healthcare/Healthcare_header.jpg"],
  },
};

const slides = [
  {
    image: "/images/healthcare/Nurse_uniforms.jpg",
    title: "Healthcare Excellence Through Professionalism",
    description: "Distinguished uniform solutions for Saudi Arabian hospitals and medical facilities"
  },
  {
    image: "/images/healthcare/physician_coats.jpg",
    title: "Medical Expertise Presentation",
    description: "Professional and authoritative attire for physicians and specialists"
  },
  {
    image: "/images/healthcare/Medical_staff_uniforms.jpg",
    title: "Support Staff Functionality",
    description: "Practical uniforms engineered for healthcare support operations"
  }
];

export default function HealthcareServicePage() {
  return (
    <div>
      <ServiceHeader
        title="Healthcare Uniform Solutions"
        description="Specialized medical uniform programs that balance infection control, staff comfort, and professional presentation for Saudi Arabian healthcare facilities."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Elevating Healthcare Through Presentation</h2>
                <p className="mb-4 text-muted-foreground">
                  Fakhr Khaleej specializes in creating advanced healthcare uniform programs for Saudi Arabian hospitals, clinics, and medical facilities. Our healthcare attire seamlessly balances infection control requirements with practical functionality for all medical roles.
                </p>
                <p className="text-muted-foreground">
                  From physicians and nursing staff to laboratory technicians and support personnel, we design uniform collections that instill patient confidence while providing medical professionals with comfortable, regulation-compliant attire that supports exceptional care delivery.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/healthcare/Nurse_uniforms.jpg"
                  alt="Professional healthcare uniforms for Saudi Arabian medical personnel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Healthcare Uniform Programs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Infection Control",
                  description: "Advanced fabrics with antimicrobial properties that meet medical-grade requirements for healthcare environments."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Uniforms that meet Ministry of Health guidelines and international healthcare standards."
                },
                {
                  title: "Patient Trust",
                  description: "Professional appearance that inspires confidence and comfort in patients and visitors."
                },
                {
                  title: "Functional Performance",
                  description: "Practical designs that facilitate movement, medical procedures, and long shifts."
                },
                {
                  title: "Staff Comfort",
                  description: "Breathable, durable materials optimized for the demands of healthcare environments."
                },
                {
                  title: "Cultural Integration",
                  description: "Thoughtful incorporation of Saudi cultural sensitivity with professional medical standards."
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

          {/* Healthcare Personnel Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Healthcare Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Nursing Staff",
                  image: "/images/healthcare/Nurse_uniforms.jpg",
                  description: "Functional, comfortable scrubs and uniforms designed specifically for nursing professionals."
                },
                {
                  title: "Physicians & Specialists",
                  image: "/images/healthcare/physician_coats.jpg",
                  description: "Distinguished lab coats and professional attire that conveys medical expertise and authority."
                },
                {
                  title: "Laboratory Personnel",
                  image: "/images/healthcare/lab_technician_uniforms.jpg",
                  description: "Specialized uniforms with enhanced protection features for laboratory environments."
                },
                {
                  title: "Administrative Staff",
                  image: "/images/healthcare/Medical_receptionist_uniforms.jpg",
                  description: "Professional attire for front desk, reception, and administrative healthcare roles."
                },
                {
                  title: "Support Services",
                  image: "/images/healthcare/hospital_volunteer_uniforms.jpg",
                  description: "Practical uniforms for maintenance, food service, and support departments within medical facilities."
                },
                {
                  title: "Specialty Departments",
                  image: "/images/healthcare/radiology_tech_scrubs.jpg",
                  description: "Department-specific uniforms that address unique requirements for radiology, surgery, and specialized care units."
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

          {/* Medical Standards & Compliance */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Healthcare Standards & Compliance</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/healthcare/Medical_uniform_fabrics.jpg"
                  alt="Healthcare uniform regulatory compliance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Meeting Saudi & International Healthcare Standards</h3>
                <p className="mb-4 text-muted-foreground">
                  Our healthcare uniforms adhere to all relevant Saudi Ministry of Health regulations and international medical guidelines while providing the distinctive, professional appearance that sets your facility apart.
                </p>
                <ul className="space-y-2">
                  {[
                    "Compliance with Saudi Ministry of Health regulations and standards",
                    "Adherence to infection control protocols in fabric and design",
                    "Antimicrobial treatments that meet healthcare requirements",
                    "Proper identification elements and role-specific designs",
                    "Coordination with department color-coding and identification systems",
                    "Enhanced durability for medical-grade laundering processes"
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
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Healthcare Fabric Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Antimicrobial Protection",
                  description: "Specialized fabrics with built-in antimicrobial properties to reduce pathogen transmission in healthcare settings.",
                  icon: "🦠"
                },
                {
                  title: "Fluid Resistance",
                  description: "Advanced treatments that provide protection against fluids and enhance safety during medical procedures.",
                  icon: "💧"
                },
                {
                  title: "Comfort Stretch",
                  description: "Four-way stretch fabrics that support movement and comfort during long medical shifts.",
                  icon: "🔄"
                },
                {
                  title: "Easy-Care Durability",
                  description: "Materials engineered to withstand frequent industrial washing at high temperatures without degradation.",
                  icon: "🧼"
                },
                {
                  title: "Stain Resistance",
                  description: "Enhanced fabrics that resist common medical stains and maintain a professional appearance.",
                  icon: "✨"
                },
                {
                  title: "Temperature Management",
                  description: "Breathable materials that maintain comfort in varying hospital environment temperatures.",
                  icon: "🌡️"
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
                  src="/images/healthcare/Medical_staff_uniforms.jpg"
                  alt="Healthcare uniform case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">Leading Saudi Hospital Network</h3>
                <p className="mb-4 text-muted-foreground">
                  A major Saudi hospital network partnered with Fakhr Khaleej to develop a comprehensive uniform program for their 4,000+ healthcare personnel across multiple facilities. They required uniforms that would enhance infection control while ensuring staff comfort during long shifts.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Created a unified system across 14 departments with role-specific identification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Implemented antimicrobial fabrics that withstand medical-grade laundering</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Improved staff satisfaction by 67% while enhancing patient perception of care quality</span>
                  </li>
                </ul>
                <div className="text-sm italic text-muted-foreground">
                  "Fakhr Khaleej transformed our medical team's appearance with uniforms that not only look professional but also support our infection control protocols. Our staff report significant improvements in comfort during long shifts, and patients have noted increased confidence in our care standards."
                  <div className="mt-2 font-semibold not-italic">— Chief Medical Officer, Leading Saudi Hospital Network</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Healthcare Uniform Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Medical Requirement Analysis",
                  description: "We assess your facility's specific needs, infection control standards, and operational requirements.",
                  step: "01"
                },
                {
                  title: "Healthcare-Specific Design",
                  description: "Our specialists create medical-grade uniform designs that balance function with professional presentation.",
                  step: "02"
                },
                {
                  title: "Compliance Integration",
                  description: "All designs are verified against relevant healthcare regulations and medical guidelines.",
                  step: "03"
                },
                {
                  title: "Implementation & Support",
                  description: "We deploy your complete uniform program with ongoing inventory and replacement systems.",
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
            <h2 className="mb-4 text-2xl font-bold">Ready to Elevate Your Healthcare Facility's Professional Image?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact our healthcare uniform specialists to discuss your facility's specific requirements and discover how Fakhr Khaleej can enhance your professional presentation while meeting all medical standards.
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

      {/* Healthcare Uniform FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of healthcare organizations does Fakhr Khaleej provide uniforms for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides uniform solutions for all healthcare sectors in Saudi Arabia including hospitals, outpatient clinics, medical centers, laboratories, specialized care facilities, dental practices, and pharmaceutical operations."
                }
              },
              {
                "@type": "Question",
                "name": "How do Fakhr Khaleej healthcare uniforms support infection control?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our healthcare uniforms incorporate antimicrobial fabric technologies, fluid-resistant treatments, and designs that minimize cross-contamination risks. All materials are selected to withstand medical-grade laundering processes while maintaining their protective properties and professional appearance."
                }
              },
              {
                "@type": "Question",
                "name": "What special features make healthcare uniforms different from other industries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Healthcare uniforms feature specialized elements including antimicrobial fabrics, fluid-resistant treatments, design considerations for comfort during long shifts, role-specific color coding, enhanced durability for medical laundering processes, stretch fabrics for medical movements, and thoughtful pocket placement for medical tools and equipment."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej handle department-specific identification in healthcare uniforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We implement comprehensive identification systems through strategic color-coding, embroidered department names and logos, specialized badge holders, distinctive trim elements, role-specific design variations, and customizable identification options that maintain both clarity for patients and professional consistency across the facility."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 