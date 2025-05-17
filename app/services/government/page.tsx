import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/ServiceHeader";
import { CheckCircle2, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Government Uniform Solutions | Fakhr Khaleej - Premium Government Uniforms in KSA",
  description: "Professional government uniform solutions for Saudi Arabian public sector organizations. Combining authority, functionality, and comfort for administrative staff, public servants, and ceremonial personnel.",
  keywords: "government uniforms Saudi Arabia, public sector uniforms KSA, ministerial staff uniforms Saudi, civil servant attire, protocol uniforms Saudi, municipality staff uniforms, government compliant uniforms, ceremonial attire",
  openGraph: {
    title: "Government Uniform Solutions | Fakhr Khaleej",
    description: "Professional government uniform solutions for Saudi Arabian public sector organizations. Combining authority, functionality, and comfort for administrative staff, public servants, and ceremonial personnel.",
    images: ["/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg"],
  },
};

const slides = [
  {
    image: "/images/government/Government_office_uniforms.jpg",
    title: "Governmental Excellence Through Presentation",
    description: "Distinguished uniform solutions for Saudi Arabian ministries and public services"
  },
  {
    image: "/images/government/Official_government_suits.jpg",
    title: "Ceremonial Prestige",
    description: "Authoritative and professional attire for protocol and ceremonial personnel"
  },
  {
    image: "/images/government/government_field_staff_wear.jpg",
    title: "Field Operations Functionality",
    description: "Practical uniforms engineered for government field operations and public service"
  }
];

export default function GovernmentServicePage() {
  return (
    <div>
      <ServiceHeader
        title="Government Uniform Solutions"
        description="Distinguished government uniform programs that enhance your organization's authority while providing the functionality and comfort government personnel require."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Elevating Government Presence</h2>
                <p className="mb-4 text-muted-foreground">
                  Fakhr Khaleej specializes in creating distinctive government uniform programs for Saudi Arabian ministries and public sector organizations. Our government attire seamlessly balances official representation with practical functionality for all public service roles.
                </p>
                <p className="text-muted-foreground">
                  From ministerial staff to field service personnel, we design uniform collections that reinforce your organization's authority while providing staff with comfortable, policy-compliant attire that supports exceptional public service delivery.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/government/Government_office_uniforms.jpg"
                  alt="Professional government uniforms for Saudi Arabian public sector personnel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Government Uniform Programs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Institutional Authority",
                  description: "Distinctive designs that visually communicate your organization's authority and public service mission."
                },
                {
                  title: "Policy Compliance",
                  description: "Uniforms that meet all government regulations and public sector dress code requirements."
                },
                {
                  title: "Public Trust",
                  description: "Professional appearance that instills confidence and recognition among citizens."
                },
                {
                  title: "Functional Performance",
                  description: "Practical designs that facilitate administrative tasks, public interaction, and field operations."
                },
                {
                  title: "Comfort Optimization",
                  description: "Materials and designs that remain comfortable during long work hours and various duties."
                },
                {
                  title: "Cultural Integration",
                  description: "Thoughtful incorporation of Saudi heritage elements with modern public sector standards."
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

          {/* Government Personnel Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Government Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Administrative Staff",
                  image: "/images/government/Government_office_uniforms.jpg",
                  description: "Professional, elegant uniforms for ministerial and administrative personnel that represent government with distinction."
                },
                {
                  title: "Protocol & Ceremonial",
                  image: "/images/government/Official_government_suits.jpg",
                  description: "Authoritative, formal attire for official ceremonies, diplomatic events, and public-facing roles."
                },
                {
                  title: "Field Operations",
                  image: "/images/government/government_field_staff_wear.jpg",
                  description: "Practical uniforms for field agents, inspectors, and government representatives working outside office environments."
                },
                {
                  title: "Public Service",
                  image: "/images/government/Public_sector_uniforms.jpg",
                  description: "Approachable yet professional attire for citizen service centers and public-facing government staff."
                },
                {
                  title: "Technical & Maintenance",
                  image: "/images/government/Public_sector_workwear.jpg",
                  description: "Functional, safety-compliant uniforms for government facility maintenance and technical staff."
                },
                {
                  title: "Executive Management",
                  image: "/images/government/Government_employee_uniforms.jpg",
                  description: "Distinguished uniforms that identify leadership while maintaining institutional authority."
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

          {/* Regulatory Compliance */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Government Regulatory Compliance</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/government/saudi_government_uniform_regulations.jpeg"
                  alt="Government uniform regulatory compliance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Meeting Saudi Government Standards</h3>
                <p className="mb-4 text-muted-foreground">
                  Our government uniforms adhere to all relevant public sector regulations and national dress code guidelines while providing the distinctive appearance that sets your organization apart.
                </p>
                <ul className="space-y-2">
                  {[
                    "Compliance with Ministry of Civil Service regulations and guidelines",
                    "Adherence to national dress code standards and protocol requirements",
                    "Appropriate security features and identification elements",
                    "Proper insignia and recognition of rank according to governmental standards",
                    "Coordination with institutional identity and branding requirements",
                    "Adaptation to departmental operational needs and functions"
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
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Government Fabric Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "All-Day Comfort",
                  description: "Specialized fabrics engineered to remain comfortable during long days of public service and administrative duties.",
                  icon: "🏛️"
                },
                {
                  title: "Climate Adaptation",
                  description: "Materials that perform well in both official indoor environments and Saudi outdoor conditions for field operations.",
                  icon: "🌡️"
                },
                {
                  title: "Wrinkle Resistance",
                  description: "Advanced fabric treatments that maintain a crisp, professional appearance throughout demanding work schedules.",
                  icon: "👔"
                },
                {
                  title: "Durability Enhancement",
                  description: "Superior construction that withstands the demands of daily public service operations.",
                  icon: "🔄"
                },
                {
                  title: "Identity Features",
                  description: "Specialized treatments for secure identification elements and organizational insignia integration.",
                  icon: "🛡️"
                },
                {
                  title: "Antimicrobial Properties",
                  description: "Hygienic treatments that remain fresh during extended shifts and public interaction.",
                  icon: "🦠"
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
                  src="/images/government/government_uniform_consultation.jpg"
                  alt="Government uniform case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">Major Saudi Ministry</h3>
                <p className="mb-4 text-muted-foreground">
                  A major Saudi ministry partnered with Fakhr Khaleej to develop a new uniform program for their 5,000+ personnel across multiple departments. They required uniforms that would project authority and professionalism while enhancing staff comfort during long hours of public service.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Created a coordinated collection across twelve departmental divisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Incorporated national symbols and institutional identity elements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Improved public recognition and staff satisfaction by 54% through thoughtful design</span>
                  </li>
                </ul>
                <div className="text-sm italic text-muted-foreground">
                  "Fakhr Khaleej transformed our institutional presence with uniforms that have enhanced our public image significantly. Our staff report increased comfort during long service hours, and citizen feedback has noted improved identification and professionalism."
                  <div className="mt-2 font-semibold not-italic">— Administration Director, Major Saudi Ministry</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Government Uniform Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Institutional Analysis",
                  description: "We immerse ourselves in your organization's identity, operational requirements, and public service standards.",
                  step: "01"
                },
                {
                  title: "Design Development",
                  description: "Our specialists create government-focused uniform designs that balance authority with functionality.",
                  step: "02"
                },
                {
                  title: "Compliance Integration",
                  description: "All designs are verified against relevant governmental regulations and institutional requirements.",
                  step: "03"
                },
                {
                  title: "Implementation & Support",
                  description: "We deploy your complete uniform program with ongoing support and maintenance systems.",
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
            <h2 className="mb-4 text-2xl font-bold">Ready to Elevate Your Organization's Professional Identity?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact our government uniform specialists to discuss your specific requirements and discover how Fakhr Khaleej can enhance your institutional presence while meeting all operational needs.
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

      {/* Government Uniform FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of government organizations does Fakhr Khaleej provide uniforms for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides uniform solutions for all government sectors in Saudi Arabia including ministries, municipalities, public service agencies, ceremonial departments, government-owned enterprises, and administrative organizations."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej ensure government uniform compliance with regulations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain comprehensive knowledge of civil service regulations and national standards, engage government compliance specialists during design phases, verify all material specifications meet institutional requirements, properly incorporate required insignia and identification elements, and conduct regular regulatory updates to uniform programs."
                }
              },
              {
                "@type": "Question",
                "name": "What special features make government uniforms different from other industries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Government uniforms incorporate specialized features like authoritative design elements that convey institutional power, appropriate formality levels for various public service roles, distinctive departmental identification systems, specialized insignia and rank indicators, security features for authorized personnel identification, and national symbols integration that reflects the organization's official status."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej incorporate Saudi cultural elements into government uniforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We thoughtfully integrate cultural elements through subtle incorporation of national symbols and colors, traditional design elements that reflect Saudi heritage, appropriate modesty considerations for all roles and environments, and cultural elements that communicate authentic Saudi public service values while maintaining professional government standards."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 