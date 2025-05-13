import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Uniform Program Management | UniformSA",
  description: "Comprehensive uniform program management services for Saudi organizations. Let our experts handle your uniform logistics while you focus on your core business.",
}

const slides = [
  {
    image: "/images/industrial/Oil_and_Gas_sector_uniforms_Oilfield_workwear.jpeg",
    title: "Program Development",
    description: "Expertly designed uniform programs tailored for your organization's needs"
  },
  {
    image: "/images/industrial/Industrial_uniform_manufacturer_Saudi_Arabia.jpeg",
    title: "Program Administration",
    description: "Professional management of your uniform program's daily operations"
  },
  {
    image: "/images/industrial/customized_workwear_programs.jpeg",
    title: "Program Optimization",
    description: "Data-driven improvements to enhance efficiency and reduce costs"
  }
]

export default function ProgramManagementPage() {
  return (
    <div>
      <ServiceHeader 
        title="Uniform Program Management" 
        description="Comprehensive management solutions that reduce administrative burden and enhance uniform program efficiency."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h1 className="mb-4 text-3xl font-bold">Streamline Your Uniform Operations</h1>
                <p className="mb-4 text-muted-foreground">
                  Managing a uniform program involves complex logistics, significant administrative 
                  effort, and ongoing maintenance. Our comprehensive management services allow 
                  organizations across Saudi Arabia to outsource this entire operation.
                </p>
                <p className="text-muted-foreground">
                  From healthcare and hospitality to corporate and industrial sectors, we provide 
                  tailored program management solutions that reduce costs, improve efficiency, 
                  and enhance employee satisfaction with your uniform program.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/industrial/industrial_site_ppe_management.jpeg"
                  alt="Uniform program management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Comprehensive Management Solutions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Inventory Management",
                  description: "Real-time tracking and automated reordering systems ensure your uniform stock never runs low."
                },
                {
                  title: "Distribution Control",
                  description: "Efficient distribution networks across Saudi Arabia for timely delivery to all locations."
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous quality control processes to maintain consistent standards across all uniforms."
                },
                {
                  title: "Cost Optimization",
                  description: "Strategic sourcing and bulk purchasing to optimize costs without compromising quality."
                },
                {
                  title: "Employee Portal",
                  description: "User-friendly online platform for staff to manage their uniform requirements."
                },
                {
                  title: "Regular Reporting",
                  description: "Detailed analytics and reports on uniform program performance and utilization."
                }
              ].map((feature, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Management Process</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Assessment",
                  description: "We analyze your organization's uniform needs, workforce distribution, and specific requirements",
                  icon: "🔍"
                },
                {
                  step: 2,
                  title: "Program Design",
                  description: "Custom program development including inventory management, distribution, and maintenance plans",
                  icon: "📝"
                },
                {
                  step: 3,
                  title: "Implementation",
                  description: "Seamless rollout of your uniform program with comprehensive staff training and support",
                  icon: "🚀"
                },
                {
                  step: 4,
                  title: "Monitoring",
                  description: "Continuous oversight and optimization of your uniform program for maximum efficiency",
                  icon: "📊"
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

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative h-56 w-full overflow-hidden rounded-lg md:h-96">
                <Image
                  src="/images/industrial/industrial_workwear_rental.jpeg"
                  alt="Industrial workwear rental services in Saudi Arabia"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-8 text-3xl font-bold">Why Choose Our Program Management?</h2>
                <div className="space-y-4">
                  {[
                    "Reduced administrative burden and costs",
                    "Improved employee satisfaction and compliance",
                    "Enhanced brand consistency across all locations",
                    "Real-time visibility into uniform program metrics",
                    "Dedicated support team for quick issue resolution",
                    "Customizable solutions for unique requirements"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Tiers */}
          <div className="mb-16 rounded-lg border bg-card overflow-hidden">
            <h2 className="bg-primary p-4 text-center text-2xl font-bold text-white">Service Packages</h2>
            <div className="grid gap-8 p-8 md:grid-cols-3">
              {[
                {
                  title: "Basic",
                  description: "Essential program management for smaller organizations",
                  price: "6,000 SAR",
                  features: [
                    "Program setup and documentation",
                    "Inventory tracking system",
                    "Basic quality control",
                    "Quarterly program review",
                    "Email support",
                    "Annual optimization report"
                  ],
                  recommended: false
                },
                {
                  title: "Standard",
                  description: "Comprehensive management for medium-sized organizations",
                  price: "15,000 SAR",
                  features: [
                    "All Basic features",
                    "Advanced inventory system",
                    "Employee portal access",
                    "Distribution management",
                    "Monthly reporting",
                    "Dedicated account manager",
                    "Phone and email support"
                  ],
                  recommended: true
                },
                {
                  title: "Premium",
                  description: "Full-service management for large or complex organizations",
                  price: "30,000 SAR",
                  features: [
                    "All Standard features",
                    "Custom technology integration",
                    "Multi-location management",
                    "Advanced analytics dashboard",
                    "On-site support services",
                    "Emergency response team",
                    "Quarterly strategy meetings",
                    "24/7 priority support"
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

          {/* Case Study */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Client Success Story</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/industrial/Heavy_duty_workwear_Durable_workwear.jpeg"
                  alt="Program management case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">National Hospital Network</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Challenge:</h4>
                    <p className="text-muted-foreground">
                      A leading healthcare provider with 8 facilities across Saudi Arabia struggled 
                      with inconsistent uniform implementation, high staff turnover causing inventory 
                      challenges, and compliance issues with medical department standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Solution:</h4>
                    <p className="text-muted-foreground">
                      We implemented our Standard Program Management solution with custom healthcare 
                      modules, creating standardized uniform policies, a centralized inventory system 
                      with role-based allocations, and regular quality inspections for compliance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Results:</h4>
                    <p className="text-muted-foreground">
                      Within 3 months, uniform compliance reached 98% across all facilities. 
                      Administrative time spent on uniform management decreased by 85%, and annual 
                      uniform costs reduced by 24% through better inventory control and lifecycle management.
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
                  question: "How quickly can you implement a program management solution?",
                  answer: "Implementation timelines vary based on the size and complexity of your organization. Basic programs can typically be implemented within 4-6 weeks, while Standard and Premium solutions for larger organizations may take 6-10 weeks for full implementation."
                },
                {
                  question: "Do we need to change our current uniform suppliers?",
                  answer: "Not necessarily. We can work with your existing suppliers if they meet our quality standards and delivery requirements. Alternatively, we can recommend trusted suppliers from our extensive network if beneficial for quality improvement or cost savings."
                },
                {
                  question: "How do you handle special requirements for different departments?",
                  answer: "Our program management solutions are highly customizable. We create role-based uniform specifications and allocation rules that account for different department requirements, including specific materials, designs, quantities, or regulatory compliance needs."
                },
                {
                  question: "What kind of reporting do you provide?",
                  answer: "All service tiers include regular reporting tailored to your needs. Reports typically cover inventory levels, distribution metrics, compliance rates, cost analysis, replacement forecasting, and program optimization recommendations."
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
            <h2 className="mb-4 text-3xl font-bold">Ready to Streamline Your Uniform Program?</h2>
            <p className="mb-6 text-lg text-white/90">
              Contact us today to discuss how we can help manage your uniform program effectively
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