import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Corporate Uniform Sourcing | UniformSA",
  description: "Premium corporate uniform sourcing services tailored for Saudi businesses. Access a wide range of high-quality uniform options with our procurement expertise.",
}

const slides = [
  {
    image: "/images/corporate/Corporate_office_uniforms_Saudi_Arabia.jpeg",
    title: "Premium Corporate Attire",
    description: "High-quality corporate uniforms sourced from leading global manufacturers"
  },
  {
    image: "/images/corporate/Corporate_wear_Saudi_company.jpeg",
    title: "Streamlined Procurement",
    description: "Efficient sourcing solutions that save your organization time and resources"
  },
  {
    image: "/images/corporate/Saudi_bank_uniforms.jpeg",
    title: "Tailored Solutions",
    description: "Corporate uniform programs customized to your specific industry requirements"
  }
]

export default function CorporateSourcingPage() {
  return (
    <div>
      <ServiceHeader 
        title="Corporate Uniform Sourcing" 
        description="Premium procurement services for high-quality corporate uniforms tailored to Saudi businesses."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Elevate Your Corporate Image</h2>
                <p className="mb-4 text-muted-foreground">
                  Our corporate uniform sourcing service provides Saudi organizations with access to premium attire that enhances your professional brand image while ensuring comfort and cultural appropriateness.
                </p>
                <p className="text-muted-foreground">
                  We handle the entire procurement process, from identifying the right manufacturers and suppliers to negotiating terms, quality control, and reliable delivery – saving you time and resources while ensuring consistent quality.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/corporate/Office_employees_uniforms.jpeg"
                  alt="Corporate uniform sourcing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Our Sourcing Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Global Sourcing Network",
                  description: "Access to premium uniform suppliers from around the world with products suitable for the Saudi market."
                },
                {
                  title: "Cost Optimization",
                  description: "Competitive pricing through our established supplier relationships and bulk purchasing power."
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous quality control processes ensuring all uniforms meet our high standards before delivery."
                },
                {
                  title: "Simplified Procurement",
                  description: "Single point of contact for all your uniform needs, eliminating complex supplier management."
                },
                {
                  title: "Customization Options",
                  description: "Ability to source uniforms that can be customized with your branding and specific requirements."
                },
                {
                  title: "Reliable Fulfillment",
                  description: "Dependable inventory management and distribution to meet your organization's timeline."
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

          {/* Sourcing Process */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Sourcing Process</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Requirements Analysis",
                  description: "We work with you to understand your specific needs, brand guidelines, and budget.",
                  icon: "🔍"
                },
                {
                  step: 2,
                  title: "Supplier Selection",
                  description: "Identifying and vetting the best suppliers that meet your quality and ethical standards.",
                  icon: "🤝"
                },
                {
                  step: 3,
                  title: "Sampling & Approval",
                  description: "Providing samples for your evaluation and approval before bulk ordering.",
                  icon: "✓"
                },
                {
                  step: 4,
                  title: "Procurement & Delivery",
                  description: "Managing the complete order process and ensuring timely delivery to your locations.",
                  icon: "📦"
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

          {/* Corporate Uniform Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Corporate Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Executive Attire",
                  image: "/images/corporate/Executive_uniforms_Saudi_corporation.jpeg",
                  description: "Premium suits, blazers, and formal wear for leadership and management teams."
                },
                {
                  title: "Office Staff",
                  image: "/images/corporate/Professional_office_attire_Saudi_Arabia.jpeg",
                  description: "Professional daily wear for administrative and office-based employees."
                },
                {
                  title: "Customer Service",
                  image: "/images/corporate/Customer_service_uniforms_Saudi.jpeg",
                  description: "Distinctive uniforms for front-line staff that emphasize your brand identity."
                },
                {
                  title: "Banking & Finance",
                  image: "/images/corporate/Bank_staff_uniforms_Saudi_banks.jpeg",
                  description: "Professional attire designed specifically for financial institutions."
                },
                {
                  title: "Events & Promotions",
                  image: "/images/corporate/Corporate_event_uniforms_Saudi.jpeg",
                  description: "Special uniforms for corporate events, exhibitions, and promotional activities."
                },
                {
                  title: "Support Services",
                  image: "/images/corporate/Support_staff_uniforms_Saudi_office.jpeg",
                  description: "Practical uniforms for IT, maintenance, and support personnel."
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

          {/* Value-Added Services */}
          <div className="mb-16 rounded-lg border bg-card p-8 shadow-sm">
            <h2 className="mb-8 text-center text-3xl font-bold">Value-Added Services</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Pre-Purchase Services</h3>
                <ul className="space-y-2">
                  {[
                    "Market research to identify optimal uniform solutions",
                    "Competitor analysis to ensure distinctiveness",
                    "Fabric and material consultation",
                    "Budget planning and cost optimization strategies",
                    "Sustainable and ethical sourcing options",
                    "Sizing system development and standardization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">Post-Purchase Support</h3>
                <ul className="space-y-2">
                  {[
                    "Inventory management systems and solutions",
                    "Distribution and logistics coordination",
                    "Quality control and issue resolution",
                    "Replacement and reordering processes",
                    "Care and maintenance guidelines",
                    "Seasonal updates and uniform refreshes"
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

          {/* Case Study */}
          <div className="mb-16 rounded-lg overflow-hidden border shadow-md">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="/images/corporate/Major_Saudi_bank_uniform_program.jpeg"
                  alt="Corporate sourcing case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">National Financial Institution</h3>
                <p className="mb-4 text-muted-foreground">
                  We sourced complete uniform programs for a major Saudi bank with 5,000+ employees across 200+ branches nationwide. The project required different uniform categories for executives, tellers, customer service, and security personnel.
                </p>
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Reduced procurement costs by 22% through consolidated ordering</li>
                    <li>• Implemented a digital inventory management system</li>
                    <li>• Delivered complete rollout within 90 days</li>
                    <li>• 97% employee satisfaction with new uniforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is the typical timeline for corporate uniform procurement?",
                  answer: "The timeline varies based on quantity, customization requirements, and sourcing location. Generally, the process takes 8-12 weeks from initial consultation to delivery. For standard items with minimal customization, we can offer expedited options of 4-6 weeks."
                },
                {
                  question: "Do you handle customs clearance for international sourcing?",
                  answer: "Yes, our service includes full logistics management including customs clearance, import documentation, and compliance with Saudi import regulations. We ensure all necessary permits are obtained and duties are properly handled."
                },
                {
                  question: "Can you source uniforms for specialized departments within our organization?",
                  answer: "Absolutely. We specialize in sourcing uniform collections that address the specific needs of different departments while maintaining a cohesive brand appearance. This includes specialized items for technical teams, executives, customer-facing staff, and support personnel."
                },
                {
                  question: "What happens if we need additional uniforms after the initial order?",
                  answer: "We establish reliable reordering systems for all our clients. We can maintain stock reserves for your organization or set up scheduled reordering processes to ensure consistent supply. Rush orders can also be accommodated when needed."
                }
              ].map((faq, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-primary p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Streamline Your Corporate Uniform Procurement</h2>
            <p className="mb-6 text-lg text-white/90">
              Partner with UniformSA for efficient, high-quality corporate uniform sourcing
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-transform hover:scale-105"
              >
                Request a Consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                Contact Our Sourcing Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 