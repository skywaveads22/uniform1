import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"

export const metadata: Metadata = {
  title: "Uniform Policies & Standards | UniformSA",
  description: "Expert uniform policy development and implementation for Saudi organizations. Create professional standards that align with your brand and industry requirements.",
}

const slides = [
  {
    image: "/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg",
    title: "Uniform Policy Development",
    description: "Create comprehensive, compliant uniform standards for your organization"
  },
  {
    image: "/images/education/School_uniforms_Saudi_Arabia_KSA.jpg",
    title: "Implementation Support",
    description: "Ensure smooth adoption of your uniform policies across all departments"
  },
  {
    image: "/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg",
    title: "Compliance Monitoring",
    description: "Maintain consistent uniform standards with effective compliance systems"
  }
]

export default function UniformPoliciesPage() {
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
                <h1 className="mb-4 text-3xl font-bold">Strategic Uniform Policy Development</h1>
                <p className="mb-4 text-muted-foreground">
                  A well-designed uniform policy does more than just standardize appearance—it reinforces 
                  your organization's values, professionalism, and brand identity while ensuring 
                  compliance with industry regulations and cultural considerations unique to Saudi Arabia.
                </p>
                <p className="text-muted-foreground">
                  UniformSA provides expert consultation to develop comprehensive, practical, and 
                  enforceable uniform policies tailored to your specific organizational needs, 
                  industry requirements, and corporate objectives.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg"
                  alt="Uniform policy development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits of Professional Uniform Policies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🏢",
                  title: "Brand Consistency",
                  description: "Ensure your team presents a unified, professional image that strengthens brand recognition"
                },
                {
                  icon: "⚖️",
                  title: "Regulatory Compliance",
                  description: "Meet industry standards and Saudi regulations for workplace attire"
                },
                {
                  icon: "👥",
                  title: "Employee Clarity",
                  description: "Eliminate confusion with clear guidelines that set proper expectations"
                },
                {
                  icon: "🔍",
                  title: "Quality Control",
                  description: "Maintain consistent appearance standards across all departments and locations"
                },
                {
                  icon: "📊",
                  title: "Operational Efficiency",
                  description: "Streamline procurement and reduce inconsistencies in uniform management"
                },
                {
                  icon: "🤝",
                  title: "Cultural Sensitivity",
                  description: "Balance professional standards with local cultural considerations"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 text-5xl">{benefit.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Policy Development Approach</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Assessment",
                  description: "We analyze your organization's needs, industry requirements, and existing practices",
                  icon: "🔎"
                },
                {
                  step: 2,
                  title: "Development",
                  description: "We create tailored uniform policies aligned with your brand and operational needs",
                  icon: "📝"
                },
                {
                  step: 3,
                  title: "Implementation",
                  description: "We assist with rollout strategies, training, and communication plans",
                  icon: "🚀"
                },
                {
                  step: 4,
                  title: "Maintenance",
                  description: "We provide ongoing support to ensure policy effectiveness and compliance",
                  icon: "🔄"
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

          {/* Policy Components */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Key Components of Effective Uniform Policies</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold">Standard Policy Elements</h3>
                <ul className="space-y-3">
                  {[
                    "Clear purpose and scope statements",
                    "Detailed uniform specifications for each role",
                    "Procurement and replacement procedures",
                    "Care and maintenance instructions",
                    "Compliance monitoring processes",
                    "Religious and cultural accommodation provisions",
                    "Health and safety considerations",
                    "Implementation and enforcement guidelines"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold">Advanced Policy Features</h3>
                <ul className="space-y-3">
                  {[
                    "Visual dress code guides with examples",
                    "Role-specific uniform variants and allowances",
                    "Seasonal uniform rotation schedules",
                    "Special event uniform protocols",
                    "Uniform recognition and incentive systems",
                    "Digital uniform management systems",
                    "Inventory control integration",
                    "Environmental sustainability guidelines"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Specific */}
          <div className="mb-16 rounded-lg border bg-card p-8 shadow-md">
            <h2 className="mb-8 text-center text-3xl font-bold">Industry-Specific Considerations</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  industry: "Healthcare",
                  considerations: [
                    "Infection control compliance",
                    "Department color coding",
                    "Role identification standards",
                    "Special fabric requirements",
                    "PPE integration policies"
                  ],
                  icon: "🏥"
                },
                {
                  industry: "Hospitality",
                  considerations: [
                    "Brand standards alignment",
                    "Cultural guest interaction",
                    "Front/back of house differentiation",
                    "Special event attire protocols",
                    "Grooming standards"
                  ],
                  icon: "🏨"
                },
                {
                  industry: "Corporate",
                  considerations: [
                    "Brand consistency guidelines",
                    "Professional appearance standards",
                    "Client-facing vs. internal roles",
                    "Business casual definitions",
                    "Remote work considerations"
                  ],
                  icon: "🏢"
                },
                {
                  industry: "Industrial",
                  considerations: [
                    "Safety code compliance",
                    "High-visibility requirements",
                    "Protective equipment standards",
                    "Climate considerations",
                    "Durability requirements"
                  ],
                  icon: "🏭"
                },
                {
                  industry: "Retail",
                  considerations: [
                    "Brand representation standards",
                    "Seasonal uniform updates",
                    "In-store vs. manager differentiation",
                    "Practical comfort standards",
                    "Contemporary style guidelines"
                  ],
                  icon: "🛍️"
                },
                {
                  industry: "Security",
                  considerations: [
                    "Authority signaling elements",
                    "Tactical function requirements",
                    "Equipment accommodation",
                    "Recognition and identification",
                    "Weather adaptability standards"
                  ],
                  icon: "🛡️"
                }
              ].map((industry, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 text-4xl">{industry.icon}</div>
                    <h3 className="text-xl font-semibold">{industry.industry}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.considerations.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Services */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Policy Implementation Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Staff Training",
                  description: "Comprehensive sessions to educate your team on new uniform policies and proper compliance",
                  icon: "👨‍🏫"
                },
                {
                  title: "Communication Materials",
                  description: "Customized handbooks, guides, and visual references to clearly communicate expectations",
                  icon: "📚"
                },
                {
                  title: "Management Coaching",
                  description: "Leadership training on effective enforcement, addressing non-compliance, and policy management",
                  icon: "🧠"
                },
                {
                  title: "Digital Systems",
                  description: "Implementation of digital uniform policy management and compliance tracking tools",
                  icon: "💻"
                },
                {
                  title: "Phased Rollout Plans",
                  description: "Structured implementation strategies to ensure smooth transition to new policies",
                  icon: "📈"
                },
                {
                  title: "Compliance Audits",
                  description: "Regular assessments to monitor adherence and identify areas for improvement",
                  icon: "📋"
                }
              ].map((service, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Success Story</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg"
                  alt="Uniform policy case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">National Bank Chain</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Challenge:</h4>
                    <p className="text-muted-foreground">
                      A leading Saudi banking institution with 45+ branches was struggling with inconsistent 
                      uniform standards across locations, causing brand dilution and professionalism concerns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Solution:</h4>
                    <p className="text-muted-foreground">
                      UniformSA developed a comprehensive, multi-tier uniform policy addressing 
                      both customer-facing and operational roles, with clear visual guides and 
                      implementation strategies. We conducted leadership training and created 
                      digital compliance monitoring tools.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Results:</h4>
                    <p className="text-muted-foreground">
                      Within 3 months of implementation, the bank achieved 96% compliance across all 
                      branches. Customer satisfaction scores related to professional appearance 
                      increased by 28%, and internal employee feedback showed 89% support for the 
                      clear guidelines and improved professional image.
                    </p>
                  </div>
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
                  question: "How long does it take to develop a comprehensive uniform policy?",
                  answer: "For most organizations, our policy development process takes 4-6 weeks from initial consultation to final document delivery. This includes time for stakeholder interviews, industry research, policy drafting, revisions, and finalization. More complex organizations may require additional time."
                },
                {
                  question: "How do you handle cultural sensitivities in uniform policies for Saudi Arabia?",
                  answer: "We have extensive experience balancing professional standards with cultural considerations in the Kingdom. Our policies incorporate appropriate guidelines for modest dress, gender-specific requirements, and religious accommodations while maintaining your desired professional image."
                },
                {
                  question: "Can uniform policies be customized for different departments or roles?",
                  answer: "Absolutely. We recommend role-based uniform policies that account for different functions, customer interaction levels, and practical requirements. This tiered approach maintains overall brand consistency while providing appropriate specifications for each position."
                },
                {
                  question: "How do you ensure compliance after the policy is implemented?",
                  answer: "We provide comprehensive implementation support including management training, staff communication materials, visual guides, and optional compliance monitoring systems. We can also develop incentive programs and regular audit processes to maintain long-term adherence."
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
            <h2 className="mb-4 text-3xl font-bold">Ready to Develop Professional Uniform Standards?</h2>
            <p className="mb-6 text-lg text-white/90">
              Contact our policy specialists to discuss your organization's needs
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
                Speak to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 