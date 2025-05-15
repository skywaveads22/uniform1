import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, PenTool, Shirt, PaintBucket, Scissors, Users, Palette } from 'lucide-react'

export default function CustomDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/services/custom_design_branding.jpg"
            alt="Custom Design & Branding"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative py-32 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                Custom Design & Branding
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Expert design services to create distinctive, brand-aligned uniforms that make your organization stand out in Saudi Arabia.
              </p>
              <Link
                href="#start-designing"
                className="inline-flex rounded-lg bg-white px-6 py-3 text-primary transition-all hover:scale-105"
              >
                Start Designing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Design Services</h2>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <PenTool className="h-12 w-12 text-primary" />,
                title: "Brand Integration",
                description: "We seamlessly incorporate your brand elements—colors, logos, and identity—into uniform designs that strengthen brand recognition and cohesion."
              },
              {
                icon: <PaintBucket className="h-12 w-12 text-primary" />,
                title: "Custom Fabrication",
                description: "From selecting the perfect fabrics to developing custom colors and patterns, we create materials that reflect your unique brand aesthetic."
              },
              {
                icon: <Shirt className="h-12 w-12 text-primary" />,
                title: "Custom Tailoring",
                description: "Our expert tailors craft uniforms with meticulous attention to fit, functionality, and comfort for your specific industry requirements."
              },
              {
                icon: <Palette className="h-12 w-12 text-primary" />,
                title: "Uniform Styling",
                description: "We create complete uniform collections with coordinated pieces that work together for a polished, professional appearance."
              },
              {
                icon: <Scissors className="h-12 w-12 text-primary" />,
                title: "Embellishment Design",
                description: "From embroidery to woven labels, patches, and custom buttons, we design distinctive details that enhance your brand identity."
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Consultation Services",
                description: "Our design experts provide professional guidance on uniform trends, cultural considerations, and industry-specific requirements in Saudi Arabia."
              }
            ].map((service, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-6 rounded-full bg-primary/10 p-4 inline-block">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-primary">Our Design Process</h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-10">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "We begin by understanding your brand, industry, requirements, and design preferences through in-depth conversations with stakeholders."
                },
                {
                  step: 2,
                  title: "Research & Concept Development",
                  description: "Our design team researches industry standards, cultural considerations, and current trends to create initial concept boards and design directions."
                },
                {
                  step: 3,
                  title: "Design Presentation",
                  description: "We present multiple design concepts with detailed illustrations, fabric swatches, and color palettes for your review and feedback."
                },
                {
                  step: 4,
                  title: "Refinement & Prototyping",
                  description: "Based on your feedback, we refine the chosen designs and create prototypes for physical evaluation of fit, comfort, and appearance."
                },
                {
                  step: 5,
                  title: "Final Production",
                  description: "After prototype approval, we proceed with full production, implementing strict quality control measures throughout the manufacturing process."
                }
              ].map((step) => (
                <div key={step.step} className="relative flex">
                  <div className="mr-6 flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    {step.step < 5 && (
                      <div className="absolute top-14 bottom-0 left-7 w-0.5 -ml-px bg-primary/20"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 grid-cols-2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hospitality/Hotel_uniforms.jpeg"
                  alt="Design Process"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg"
                  alt="Design Process"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Design Portfolio</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                image: "/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg",
                category: "Aviation",
                title: "Major Airline Rebrand"
              },
              {
                image: "/images/hospitality/Hotel_uniforms.jpeg",
                category: "Hospitality",
                title: "Luxury Hotel Collection"
              },
              {
                image: "/images/healthcare/Medical_scrubs_supplier_for_hospitals.jpg",
                category: "Healthcare",
                title: "Medical Center Staff Attire"
              },
              {
                image: "/images/security/Security_uniforms.jpeg",
                category: "Security",
                title: "Corporate Security Team"
              },
              {
                image: "/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg",
                category: "Government",
                title: "Municipal Staff Uniforms"
              },
              {
                image: "/images/industrial/Industrial_uniforms.jpeg",
                category: "Industrial",
                title: "Oil & Gas Workwear"
              },
              {
                image: "/images/education/School_uniforms_Saudi_Arabia_KSA.jpg",
                category: "Education",
                title: "International School Collection"
              },
              {
                image: "/images/aviation/Pilot_uniforms.jpg",
                category: "Aviation",
                title: "Executive Pilot Uniforms"
              }
            ].map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-medium text-primary-100">{item.category}</span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-lg border border-primary bg-white px-6 py-3 font-medium text-primary transition-all hover:scale-105 hover:bg-primary/5"
            >
              View Full Portfolio
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-primary">Our Design Considerations</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Brand Identity",
                description: "We ensure your uniforms become a powerful extension of your brand, reinforcing your identity through careful integration of colors, logos, and design elements.",
                image: "/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg"
              },
              {
                title: "Cultural Sensitivity",
                description: "Our designs respect Saudi Arabian cultural values and traditions, ensuring appropriateness while maintaining modern professional aesthetics.",
                image: "/images/government/saudi_government_uniform_regulations.jpeg"
              },
              {
                title: "Functionality",
                description: "We analyze the specific tasks and environments of your staff to create uniforms that enhance comfort, mobility, and productivity.",
                image: "/images/industrial/Industrial_uniforms.jpeg"
              },
              {
                title: "Climate Adaptation",
                description: "Our designs account for Saudi Arabia's climate conditions, utilizing breathable, moisture-wicking fabrics and appropriate layering options.",
                image: "/images/security/Security_uniforms.jpeg"
              },
              {
                title: "Durability & Maintenance",
                description: "We select materials and construction methods that ensure longevity, ease of care, and sustained appearance even with regular wear and cleaning.",
                image: "/images/hospitality/Hotel_uniforms.jpeg"
              },
              {
                title: "Industry Compliance",
                description: "Our designs adhere to industry-specific regulations and standards while maintaining aesthetic appeal and brand alignment.",
                image: "/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg"
              }
            ].map((consideration, index) => (
              <div key={index} className="rounded-xl bg-white overflow-hidden shadow-lg">
                <div className="h-48 relative">
                  <Image
                    src={consideration.image}
                    alt={consideration.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{consideration.title}</h3>
                  <p className="text-gray-600">{consideration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/hospitality/Hotel_uniforms.jpeg"
                alt="Benefits of Custom Design"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary">Benefits of Custom Design</h2>
              <p className="mb-6 text-lg text-gray-700">
                Investing in professionally designed custom uniforms offers numerous advantages beyond standard off-the-shelf options. Our tailored approach ensures your organization projects the right image while providing practical benefits.
              </p>
              
              <div className="space-y-4">
                {[
                  "Strengthened brand recognition and corporate identity",
                  "Enhanced professional image that builds customer trust",
                  "Improved staff morale and sense of belonging",
                  "Perfect fit for all body types and size ranges",
                  "Fabrics and features optimized for your specific environment",
                  "Differentiation from competitors in the Saudi market",
                  "Uniforms that reflect your organization's culture and values"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-primary" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Client Testimonials</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "The design team captured our brand essence perfectly. Our staff uniforms now reflect our premium positioning and have received countless compliments from guests.",
                author: "Marketing Director",
                company: "5-Star Hotel Chain, Riyadh"
              },
              {
                quote: "The custom designs took into account both our brand guidelines and the practical needs of our medical staff. The result is uniforms that are comfortable, functional, and professional.",
                author: "Operations Manager",
                company: "Private Healthcare Network, Jeddah"
              },
              {
                quote: "Working with the design team was effortless. They listened to our needs, respected our cultural considerations, and delivered uniforms that make our security personnel look authoritative yet approachable.",
                author: "Head of Security",
                company: "Corporate Business Park, Dammam"
              }
            ].map((testimonial, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <svg className="h-10 w-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="my-4 text-gray-600 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" id="start-designing">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Frequently Asked Questions</h2>
          
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "How long does the custom design process take?",
                answer: "The timeline varies based on project complexity, but typical custom design projects take 4-6 weeks from initial consultation to final design approval. After approval, production time depends on quantity and specifics but generally ranges from 4-8 weeks. We can accommodate rush projects when possible."
              },
              {
                question: "Do you charge for the initial design consultation?",
                answer: "We offer a complimentary initial consultation to understand your needs and project scope. If you decide to proceed with our design services, we charge a design fee that is later credited toward your production order upon approval."
              },
              {
                question: "Can you match specific brand colors exactly?",
                answer: "Yes, we use the Pantone Matching System (PMS) to ensure precise color matching to your brand guidelines. We provide fabric swatches for approval before production to confirm color accuracy."
              },
              {
                question: "What information do you need to start the design process?",
                answer: "To begin, we need your brand guidelines, any existing uniform specifications, details about staff roles and working environments, design preferences, and budget parameters. The more information you provide, the more targeted our initial designs will be."
              },
              {
                question: "Can you create designs for all departments in our organization?",
                answer: "Absolutely. We specialize in creating cohesive uniform collections that accommodate different roles while maintaining brand consistency. From executives to front-line staff, we ensure all uniforms work together as part of a unified program."
              }
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Begin Your Design Journey?</h2>
          <p className="mb-8 mx-auto max-w-2xl text-xl text-white/90">
            Contact our design team today to discuss how custom uniforms can elevate your brand and create a distinctive look for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-transform hover:scale-105"
            >
              Schedule a Design Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-lg border border-white bg-transparent px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 