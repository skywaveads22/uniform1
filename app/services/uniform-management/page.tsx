import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"

export const metadata: Metadata = {
  title: "Uniform Management Program | UniformSA",
  description: "End-to-end uniform management solutions for Saudi organizations. From procurement to maintenance, simplify your uniform program with our expert services.",
}

const slides = [
  {
    image: "/images/services/management-1.jpg",
    title: "Program Development",
    description: "Custom uniform management programs tailored to your organizational needs"
  },
  {
    image: "/images/services/management-2.jpg",
    title: "Lifecycle Management",
    description: "Comprehensive solutions from sourcing to disposal for uniform longevity"
  },
  {
    image: "/images/services/management-3.jpg",
    title: "Outsourced Administration",
    description: "Professional management services that reduce internal administrative burden"
  }
]

export default function UniformManagementPage() {
  return (
    <div>
      <ServiceHeader 
        title="Uniform Management Program" 
        description="End-to-end solutions that simplify uniform administration and reduce operational burden."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Complete Uniform Program Management</h2>
                <p className="mb-4 text-muted-foreground">
                  Managing a uniform program involves complex logistics, significant administrative 
                  effort, and ongoing maintenance. Our comprehensive management services allow 
                  organizations to outsource this entire operation to our expert team.
                </p>
                <p className="text-muted-foreground">
                  Whether you're establishing a new uniform program or seeking to streamline an 
                  existing one, we provide end-to-end solutions that reduce costs, improve efficiency, 
                  and enhance employee satisfaction with your uniform program.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/services/management-main.jpg"
                  alt="Uniform management service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Service Overview */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Management Services</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Program Development",
                  description: "Creation of uniform guidelines, policies, procedures, and roll-out strategies",
                  icon: "📝"
                },
                {
                  title: "Procurement & Sourcing",
                  description: "Vendor management, cost negotiation, quality control, and ethical sourcing",
                  icon: "🔍"
                },
                {
                  title: "Inventory Management",
                  description: "Stock level optimization, storage solutions, and distribution systems",
                  icon: "📦"
                },
                {
                  title: "Employee Management",
                  description: "Sizing, fitting, allocation tracking, and employee support services",
                  icon: "👥"
                },
                {
                  title: "Maintenance & Care",
                  description: "Cleaning, repair, quality monitoring, and replacement management",
                  icon: "🧵"
                },
                {
                  title: "Reporting & Analytics",
                  description: "Usage insights, cost analysis, compliance monitoring, and optimization",
                  icon: "📊"
                }
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 text-5xl">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Outsource Uniform Management?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Focus on Core Operations",
                  description: "Free up your internal resources to concentrate on your organization's primary business functions rather than uniform administration.",
                  icon: "🎯"
                },
                {
                  title: "Reduce Administrative Burden",
                  description: "Eliminate the need for internal staff to handle uniform-related inquiries, issues, and daily management tasks.",
                  icon: "📋"
                },
                {
                  title: "Cost Optimization",
                  description: "Benefit from our purchasing power, industry expertise, and optimized processes to reduce your overall uniform program costs.",
                  icon: "💰"
                },
                {
                  title: "Scalability & Flexibility",
                  description: "Easily scale your uniform program up or down based on organizational changes without internal restructuring.",
                  icon: "📈"
                },
                {
                  title: "Professional Expertise",
                  description: "Leverage our specialized knowledge in uniform management, fabric technology, and industry best practices.",
                  icon: "🧠"
                },
                {
                  title: "Enhanced Compliance",
                  description: "Ensure consistent adherence to your uniform policy, industry regulations, and brand standards across all locations.",
                  icon: "✓"
                }
              ].map((benefit, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <span className="mr-4 text-4xl">{benefit.icon}</span>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Levels */}
          <div className="mb-16 rounded-lg border bg-card overflow-hidden">
            <h2 className="bg-primary p-4 text-center text-2xl font-bold text-white">Service Tiers</h2>
            <div className="grid gap-8 p-8 md:grid-cols-3">
              {[
                {
                  title: "Essential",
                  description: "Basic uniform management for organizations with simpler needs",
                  price: "8,000 SAR",
                  features: [
                    "Program development & documentation",
                    "Basic procurement management",
                    "Inventory tracking system",
                    "Employee sizing & allocation",
                    "Quarterly program review",
                    "Standard reporting"
                  ],
                  recommended: false
                },
                {
                  title: "Professional",
                  description: "Comprehensive management for medium-sized organizations",
                  price: "18,000 SAR",
                  features: [
                    "All Essential features",
                    "Custom uniform design services",
                    "Advanced inventory management",
                    "Employee self-service portal",
                    "Repair & maintenance program",
                    "Monthly optimization reports",
                    "Dedicated account manager"
                  ],
                  recommended: true
                },
                {
                  title: "Enterprise",
                  description: "Full-service management for large or complex organizations",
                  price: "35,000 SAR",
                  features: [
                    "All Professional features",
                    "Multi-location management",
                    "On-site fitting & support services",
                    "Custom technology integration",
                    "Advanced analytics dashboard",
                    "Seasonal collection management",
                    "Executive uniform program",
                    "Quarterly strategy consultation"
                  ],
                  recommended: false
                }
              ].map((tier, index) => (
                <div key={index} className={`relative rounded-lg border ${tier.recommended ? 'border-primary' : 'border-muted'} bg-background p-6 shadow-sm`}>
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                      Recommended
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{tier.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-sm text-muted-foreground"> / month</span>
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
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Management Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Management Process</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary/20 md:block"></div>
              <div className="space-y-12">
                {[
                  {
                    title: "Assessment & Strategy",
                    description: "We begin by thoroughly understanding your organization's uniform requirements, current challenges, and future goals. Our team conducts a comprehensive audit of your existing program or helps develop requirements for a new one.",
                    outcomes: ["Detailed program requirements", "Current state analysis", "Strategic recommendations", "Budget planning"],
                    image: "/images/services/management-assessment.jpg",
                    imagePosition: "right"
                  },
                  {
                    title: "Program Development",
                    description: "Based on the assessment, we create a tailored uniform management program that includes detailed policies, procedures, and implementation plans aligned with your organizational culture and operational needs.",
                    outcomes: ["Uniform policy documentation", "Role-based uniform specifications", "Procurement guidelines", "Implementation timeline"],
                    image: "/images/services/management-development.jpg",
                    imagePosition: "left"
                  },
                  {
                    title: "Implementation",
                    description: "We handle the entire rollout process, from setting up inventory systems and sourcing suppliers to employee communications and initial distribution. Our structured approach ensures a smooth transition with minimal disruption.",
                    outcomes: ["Supplier selection and onboarding", "Inventory system setup", "Employee measurement and fitting", "Initial uniform distribution"],
                    image: "/images/services/management-implementation.jpg",
                    imagePosition: "right"
                  },
                  {
                    title: "Ongoing Management",
                    description: "Once implemented, we provide continuous management of all aspects of your uniform program, handling day-to-day operations, addressing employee needs, and optimizing the program based on real-world performance.",
                    outcomes: ["Regular inventory management", "Employee support services", "Quality control monitoring", "Program optimization"],
                    image: "/images/services/management-ongoing.jpg",
                    imagePosition: "left"
                  }
                ].map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                      {index + 1}
                    </div>
                    <div className={`grid gap-8 ${phase.imagePosition === 'right' ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr]'}`}>
                      <div className={phase.imagePosition === 'right' ? 'order-1' : 'order-2'}>
                        <h3 className="mb-4 text-2xl font-bold">{phase.title}</h3>
                        <p className="mb-4 text-muted-foreground">{phase.description}</p>
                        <div>
                          <h4 className="mb-2 font-semibold text-primary">Key Deliverables:</h4>
                          <ul className="space-y-1">
                            {phase.outcomes.map((outcome, oIndex) => (
                              <li key={oIndex} className="flex items-center">
                                <span className="mr-2 text-primary">•</span>
                                <span className="text-muted-foreground">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className={`relative aspect-video overflow-hidden rounded-lg shadow-md ${phase.imagePosition === 'right' ? 'order-2' : 'order-1'}`}>
                        <Image
                          src={phase.image}
                          alt={phase.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Client Success Story</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/services/management-case-study.jpg"
                  alt="Uniform management case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">Leading Retail Chain</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Challenge:</h4>
                    <p className="text-muted-foreground">
                      A major retail chain with 40+ locations across Saudi Arabia struggled with inconsistent 
                      uniform implementation, high replacement costs, and significant administrative burden. 
                      Store managers spent 5-7 hours weekly on uniform-related issues, and employee 
                      satisfaction with uniform quality and availability was low.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Solution:</h4>
                    <p className="text-muted-foreground">
                      We implemented our Professional Management Program, centralizing all uniform operations. 
                      This included developing clear policies, establishing an online employee portal for 
                      requests, creating regional distribution centers, and implementing a regular maintenance 
                      program that extended uniform lifecycles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Results:</h4>
                    <p className="text-muted-foreground">
                      Within 6 months, store manager time spent on uniform management decreased by 95%. 
                      Annual uniform costs reduced by 32% through better procurement and maintenance. 
                      Employee satisfaction with the uniform program increased from 38% to 91%, and brand 
                      consistency across locations significantly improved.
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
                  question: "What size organization is this service best suited for?",
                  answer: "Our uniform management programs are designed for organizations with 50+ employees who wear uniforms. The service is particularly valuable for medium to large organizations with multiple locations or departments, but we offer scaled solutions for organizations of all sizes."
                },
                {
                  question: "Can you manage our existing uniform program, or do we need to start fresh?",
                  answer: "We can seamlessly take over management of your existing uniform program. Our process begins with a thorough assessment of your current system, identifying what's working well and what could be improved. We then develop a transition plan that ensures continuity while implementing enhancements."
                },
                {
                  question: "How do you handle employee turnover and uniform recovery?",
                  answer: "Our management system includes comprehensive processes for both onboarding and offboarding. We work with your HR department to establish automated notifications for new hires and departures. For departures, we implement tracking systems and recovery procedures to ensure uniforms are returned, assessed for reuse, and properly processed."
                },
                {
                  question: "Do you handle uniform design and customization as part of the management service?",
                  answer: "Yes, our Professional and Enterprise tiers include uniform design and customization services. We can work with your existing designs or develop new ones that align with your brand guidelines. The service includes everything from initial concept development to sampling and final production specifications."
                },
                {
                  question: "What reporting and analytics do you provide?",
                  answer: "All service tiers include regular reporting on key metrics such as inventory levels, distribution statistics, replacement rates, and cost analysis. Our Professional and Enterprise tiers offer more advanced analytics including predictive modeling for budget planning, wear-rate analysis by department or role, and custom reports tailored to your specific KPIs."
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
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Uniform Program?</h2>
            <p className="mb-6 text-lg text-white/90">
              Let our experts handle your uniform management while you focus on your core business
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 