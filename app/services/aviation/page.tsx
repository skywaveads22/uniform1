import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceHeader } from "@/components/ServiceHeader";
import { CheckCircle2, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviation Uniform Solutions | Fakhr Khaleej - Premium Airline Uniforms in KSA",
  description: "Professional aviation uniform solutions for Saudi Arabian airlines and airport staff. Combining prestige, functionality, and comfort for flight crews, ground staff, and airport personnel.",
  keywords: "aviation uniforms Saudi Arabia, airline uniforms KSA, cabin crew uniforms Saudi, flight attendant attire, pilot uniforms Saudi, airport staff uniforms, GACA compliant uniforms, ground crew attire",
  openGraph: {
    title: "Aviation Uniform Solutions | Fakhr Khaleej",
    description: "Professional aviation uniform solutions for Saudi Arabian airlines and airport staff. Combining prestige, functionality, and comfort for flight crews, ground staff, and airport personnel.",
    images: ["/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg"],
  },
};

const slides = [  {    image: "/images/aviation/Cabin_crew_uniforms.jpg",    title: "Aviation Excellence Through Presentation",    description: "Distinguished uniform solutions for Saudi Arabian airlines and aviation services"  },  {    image: "/images/aviation/Pilot_uniforms.jpg",    title: "Flight Deck Prestige",    description: "Authoritative and professional attire for cockpit personnel"  },  {    image: "/images/aviation/Ground_staff_uniforms_aviation.jpg",    title: "Ground Operations Functionality",    description: "Practical uniforms engineered for airport operations and ground handling"  }];

export default function AviationServicePage() {
  return (
    <div>
      <ServiceHeader
        title="Aviation Uniform Solutions"
        description="Distinguished aviation uniform programs that enhance your airline's brand identity while providing the functionality and comfort aviation personnel require."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Elevating Aviation Presence</h2>
                <p className="mb-4 text-muted-foreground">
                  Fakhr Khaleej specializes in creating distinctive aviation uniform programs for Saudi Arabian airlines and airport operations. Our aviation attire seamlessly balances prestigious brand representation with practical functionality for all aviation roles.
                </p>
                <p className="text-muted-foreground">
                  From cabin crews to ground operations personnel, we design uniform collections that reinforce your airline's identity while providing staff with comfortable, regulation-compliant attire that supports exceptional service delivery.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                                <Image                  src="/images/aviation/Cabin_crew_uniforms.jpg"                  alt="Professional airline uniforms for Saudi Arabian aviation personnel"                  fill                  className="object-cover"                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Aviation Uniform Programs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Brand Distinction",
                  description: "Distinctive designs that visually communicate your airline's unique identity and values."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Uniforms that meet all GACA and international aviation authority requirements."
                },
                {
                  title: "Passenger Confidence",
                  description: "Professional appearance that instills trust and confidence in passengers."
                },
                {
                  title: "Functional Performance",
                  description: "Practical designs that facilitate movement, service delivery, and operational tasks."
                },
                {
                  title: "Comfort Optimization",
                  description: "Materials and designs that remain comfortable during long flights and active duties."
                },
                {
                  title: "Cultural Integration",
                  description: "Thoughtful incorporation of Saudi heritage elements with international aviation standards."
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

          {/* Aviation Personnel Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Aviation Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                                    title: "Cabin Crew",                  image: "/images/aviation/Cabin_crew_uniforms.jpg",
                  description: "Elegant, functional uniforms for flight attendants that represent your airline with distinction."
                },
                {
                                    title: "Pilots & Flight Crew",                  image: "/images/aviation/Pilot_uniforms.jpg",
                  description: "Authoritative, professional attire that conveys expertise and commands respect."
                },
                {
                                    title: "Ground Operations",                  image: "/images/aviation/Ground_staff_uniforms_aviation.jpg",
                  description: "Practical uniforms for ramp agents, baggage handlers, and tarmac personnel."
                },
                {
                                    title: "Customer Service",                  image: "/images/aviation/Aviation_uniform_manufacturer.jpg",
                  description: "Approachable yet professional attire for check-in, gate, and passenger service staff."
                },
                {
                                    title: "Technical & Maintenance",                  image: "/images/aviation/Aircraft_maintenance_technician_uniforms.jpg",
                  description: "Functional, safety-compliant uniforms for aircraft maintenance technicians."
                },
                {
                                    title: "Aviation Management",                  image: "/images/aviation/Captain_pilot_uniform.jpg",
                  description: "Distinguished uniforms that identify leadership while maintaining brand cohesion."
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
            <h2 className="mb-8 text-center text-3xl font-bold">Aviation Regulatory Compliance</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                                <Image                  src="/images/aviation/aviation_uniforms.jpg"                  alt="Aviation uniform regulatory compliance"                  fill                  className="object-cover"                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Meeting Saudi & International Aviation Standards</h3>
                <p className="mb-4 text-muted-foreground">
                  Our aviation uniforms adhere to all relevant GACA regulations and international aviation authority guidelines while providing the distinctive appearance that sets your airline apart.
                </p>
                <ul>{[
                    "Compliance with General Authority of Civil Aviation (GACA) requirements",
                    "Adherence to international aviation dress code standards",
                    "Fire safety and flame-resistant materials where required",
                    "Proper identification elements and required insignia",
                    "Recognition of rank and position according to industry standards",
                    "Coordination with airline operational safety requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}</ul>
              </div>
            </div>
          </div>

          {/* Advanced Technologies */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Aviation Fabric Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Comfort During Flight",
                  description: "Specialized fabrics engineered to remain comfortable during long-haul flights and varying cabin pressures.",
                  icon: "✈️"
                },
                {
                  title: "Temperature Adaptation",
                  description: "Materials that perform well in both the Saudi climate and temperature-controlled aircraft environments.",
                  icon: "🌡️"
                },
                {
                  title: "Wrinkle Resistance",
                  description: "Advanced fabric treatments that maintain a crisp, professional appearance throughout long duty periods.",
                  icon: "👔"
                },
                {
                  title: "Stretch Performance",
                  description: "Strategic flexibility that accommodates the movement requirements of aviation service roles.",
                  icon: "🤸"
                },
                {
                  title: "Safety Enhancements",
                  description: "Specialized treatments that meet aviation safety standards including flame resistance where required.",
                  icon: "🛡️"
                },
                {
                  title: "Antimicrobial Properties",
                  description: "Hygienic treatments that remain fresh during international travel and extended shifts.",
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
                                <Image                  src="/images/aviation/aviation_blazers.jpg"                  alt="Aviation uniform case study"                  fill                  className="object-cover"                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">Premium Saudi Carrier</h3>
                <p className="mb-4 text-muted-foreground">
                  A premium Saudi airline partnered with Fakhr Khaleej to develop a new uniform program for their 3,000+ aviation personnel. They required uniforms that would distinguish their brand while enhancing staff comfort during long-haul international flights.
                </p>
                <ul><li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Created a coordinated collection across eight aviation departments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Incorporated subtle Saudi cultural elements that reinforced brand identity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Improved comfort ratings by 62% through advanced material technologies</span>
                  </li></ul>
                <div className="text-sm italic text-muted-foreground">
                  "Fakhr Khaleej transformed our airline's visual presence with uniforms that have become an integral part of our brand identity. Our staff report significant improvements in comfort during long-haul flights, and passenger feedback has been overwhelmingly positive."
                  <div className="mt-2 font-semibold not-italic">— Brand Director, Premium Saudi Carrier</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Aviation Uniform Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Brand & Operations Analysis",
                  description: "We immerse ourselves in your airline's brand identity, operational requirements, and service standards.",
                  step: "01"
                },
                {
                  title: "Design Development",
                  description: "Our specialists create aviation-focused uniform designs that balance distinction with functionality.",
                  step: "02"
                },
                {
                  title: "Compliance Verification",
                  description: "All designs are verified against relevant aviation regulations and safety requirements.",
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
            <h2 className="mb-4 text-2xl font-bold">Ready to Elevate Your Airline's Professional Identity?</h2>
            <p className="mb-6 text-muted-foreground">
              Contact our aviation uniform specialists to discuss your airline's specific requirements and discover how Fakhr Khaleej can enhance your brand presence while meeting all operational needs.
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

      {/* Aviation Uniform FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of aviation organizations does Fakhr Khaleej provide uniforms for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fakhr Khaleej provides uniform solutions for all aviation sectors in Saudi Arabia including national carriers, regional airlines, private aviation services, airport operations, ground handling companies, and aviation support services."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej ensure aviation uniform compliance with regulations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain comprehensive knowledge of GACA regulations and international aviation standards, engage aviation compliance specialists during design phases, verify all material specifications meet safety requirements, properly incorporate required rank insignia and identification elements, and conduct regular regulatory updates to uniform programs."
                }
              },
              {
                "@type": "Question",
                "name": "What special features make aviation uniforms different from other industries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aviation uniforms incorporate specialized features like enhanced comfort during pressure changes, design elements that facilitate safety demonstrations and inflight service, advanced fabrics that remain fresh during international travel, rigorous safety compliance including flame-resistant treatments where required, distinctive ranking systems, and iconic design elements that become brand ambassadors."
                }
              },
              {
                "@type": "Question",
                "name": "How does Fakhr Khaleej incorporate Saudi cultural elements into aviation uniforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We thoughtfully integrate cultural elements through subtle pattern work inspired by traditional Saudi designs, distinctive color palettes that reflect national identity while meeting aviation standards, appropriate modesty considerations for international operations, and design elements that communicate authentic Saudi hospitality while maintaining global aviation professionalism."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
} 