import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"

export const metadata: Metadata = {
  title: "Uniform Inventory Management | UniformSA",
  description: "Streamline your organization's uniform program with our comprehensive inventory management solutions. Track, maintain, and optimize your uniform assets efficiently.",
}

const slides = [
  {
    image: "/images/hospitality/hotel_management_uniforms.jpeg",
    title: "Digital Inventory Systems",
    description: "Cutting-edge software solutions to track and manage your uniform inventory"
  },
  {
    image: "/images/hospitality/hotel_uniform_stock_management.jpeg",
    title: "Stock Optimization",
    description: "Reduce costs and waste by maintaining optimal uniform inventory levels"
  },
  {
    image: "/images/hospitality/hotel_uniform_stock_management1.jpeg",
    title: "Distribution Management",
    description: "Efficient allocation and delivery systems for multi-location organizations"
  }
]

export default function UniformInventoryPage() {
  return (
    <div>
      <ServiceHeader 
        title="Uniform Inventory Management" 
        description="Advanced solutions to streamline your uniform program and reduce operational costs."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Control Your Uniform Assets</h2>
                <p className="mb-4 text-muted-foreground">
                  Managing uniform programs for medium to large organizations presents significant 
                  logistical challenges. Our inventory management solutions bring structure, 
                  efficiency, and cost control to your uniform program.
                </p>
                <p className="text-muted-foreground">
                  Whether you're managing uniforms across multiple locations, dealing with high 
                  staff turnover, or seeking to optimize your uniform budget, our tailored 
                  inventory systems provide complete visibility and control over your uniform assets.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/hospitality/hotel_uniform_stock_management.jpeg"
                  alt="Uniform inventory management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Key Benefits</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Cost Reduction",
                  description: "Reduce unnecessary purchases and minimize waste through accurate inventory tracking and forecasting",
                  icon: "💰"
                },
                {
                  title: "Operational Efficiency",
                  description: "Streamline distribution processes and reduce administrative time spent on uniform management",
                  icon: "⚙️"
                },
                {
                  title: "Enhanced Compliance",
                  description: "Ensure all staff have access to appropriate uniforms that meet policy and regulatory requirements",
                  icon: "✓"
                },
                {
                  title: "Data-Driven Decisions",
                  description: "Gain insights through comprehensive reporting to optimize your uniform program",
                  icon: "📊"
                },
                {
                  title: "Extended Uniform Lifecycle",
                  description: "Implement maintenance and recycling programs to maximize the lifespan of your uniforms",
                  icon: "♻️"
                },
                {
                  title: "Simplified Budgeting",
                  description: "Forecast uniform needs accurately and plan budgets with confidence based on real usage data",
                  icon: "📈"
                }
              ].map((benefit, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 text-4xl">{benefit.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Components */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Inventory Solutions</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/images/hospitality/hotel_uniform_stock_management1.jpeg"
                    alt="Inventory management software"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-semibold">Digital Management Platform</h3>
                  <ul className="space-y-3">
                    {[
                      "Cloud-based inventory tracking system with real-time updates",
                      "Individual employee uniform allocation and history tracking",
                      "Automated reordering based on customizable stock level thresholds",
                      "Mobile access for managers with approval workflows",
                      "Barcode/QR code integration for rapid check-in/check-out",
                      "Comprehensive reporting and analytics dashboard"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/images/hospitality/hotel_management_uniforms.jpeg"
                    alt="Physical inventory management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-semibold">Physical Management Systems</h3>
                  <ul className="space-y-3">
                    {[
                      "On-site storage solutions with organizational systems",
                      "Uniform distribution centers for multi-location organizations",
                      "Kiosk-based self-service options for employee collection",
                      "Repair and maintenance services to extend uniform lifecycle",
                      "Standardized processing for returned uniforms",
                      "Secure disposal and recycling of end-of-life uniforms"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">How Our System Works</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Initial Assessment",
                  description: "We analyze your current inventory processes, uniform requirements, and organizational structure",
                  icon: "🔍",
                  step: 1
                },
                {
                  title: "System Design",
                  description: "We develop a customized inventory management solution tailored to your specific needs",
                  icon: "📐",
                  step: 2
                },
                {
                  title: "Implementation",
                  description: "We set up the physical and digital systems, including staff training and data migration",
                  icon: "🚀",
                  step: 3
                },
                {
                  title: "Ongoing Support",
                  description: "We provide continuous monitoring, system updates, and optimization recommendations",
                  icon: "🔄",
                  step: 4
                }
              ].map((phase, index) => (
                <div key={index} className="relative rounded-lg border bg-card p-6 text-center shadow-sm">
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

          {/* Features Comparison */}
          <div className="mb-16 overflow-hidden rounded-lg border">
            <h2 className="bg-primary p-4 text-center text-2xl font-bold text-white">Solution Packages</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left font-semibold">Features</th>
                    <th className="p-4 text-center font-semibold">Essential</th>
                    <th className="p-4 text-center font-semibold">Premium</th>
                    <th className="p-4 text-center font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Digital Inventory Tracking",
                      essential: true,
                      premium: true,
                      enterprise: true
                    },
                    {
                      feature: "Employee Allocation System",
                      essential: true,
                      premium: true,
                      enterprise: true
                    },
                    {
                      feature: "Basic Reporting",
                      essential: true,
                      premium: true,
                      enterprise: true
                    },
                    {
                      feature: "Mobile Access",
                      essential: false,
                      premium: true,
                      enterprise: true
                    },
                    {
                      feature: "Barcode/QR Integration",
                      essential: false,
                      premium: true,
                      enterprise: true
                    },
                    {
                      feature: "Automated Reordering",
                      essential: false,
                      premium: true,
                      enterprise: true
                    },
                    {
                      feature: "Multi-location Management",
                      essential: false,
                      premium: false,
                      enterprise: true
                    },
                    {
                      feature: "API Integration with HR Systems",
                      essential: false,
                      premium: false,
                      enterprise: true
                    },
                    {
                      feature: "Custom Analytics Dashboard",
                      essential: false,
                      premium: false,
                      enterprise: true
                    },
                    {
                      feature: "Dedicated Account Manager",
                      essential: false,
                      premium: false,
                      enterprise: true
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.essential ? <span className="text-green-500">✓</span> : <span className="text-red-500">✕</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row.premium ? <span className="text-green-500">✓</span> : <span className="text-red-500">✕</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row.enterprise ? <span className="text-green-500">✓</span> : <span className="text-red-500">✕</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-3">
              <div className="border-t p-4 text-center">
                <div className="font-bold">Starting at</div>
                <div className="text-2xl font-bold text-primary">5,000 SAR</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <div className="border-t p-4 text-center">
                <div className="font-bold">Starting at</div>
                <div className="text-2xl font-bold text-primary">12,000 SAR</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <div className="border-t p-4 text-center">
                <div className="font-bold">Starting at</div>
                <div className="text-2xl font-bold text-primary">25,000 SAR</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Industry Applications</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  industry: "Healthcare",
                  description: "Manage specialized uniforms across different departments, ensure compliance with hygiene standards, and track individual uniform lifecycles.",
                  icon: "🏥"
                },
                {
                  industry: "Hospitality",
                  description: "Control uniform inventory across hotels, restaurants, and service staff, with seasonal rotation and specialized cleaning requirements.",
                  icon: "🏨"
                },
                {
                  industry: "Banking & Finance",
                  description: "Track corporate uniforms across branch networks, manage executive attire programs, and ensure consistent brand presentation.",
                  icon: "🏦"
                },
                {
                  industry: "Retail & Service",
                  description: "Handle high-volume uniform needs with rapid staff turnover, seasonal variations, and multiple locations throughout Saudi Arabia.",
                  icon: "🛍️"
                },
                {
                  industry: "Manufacturing & Industry",
                  description: "Manage specialized workwear with safety requirements, track PPE compliance, and optimize replacement schedules.",
                  icon: "🏭"
                },
                {
                  industry: "Education",
                  description: "Implement efficient systems for school uniforms, including size exchange programs, identification systems, and seasonal planning.",
                  icon: "🏫"
                }
              ].map((industry, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 text-4xl">{industry.icon}</div>
                    <h3 className="text-xl font-semibold">{industry.industry}</h3>
                  </div>
                  <p className="text-muted-foreground">{industry.description}</p>
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
                  src="/images/hospitality/hotel_management_uniforms.jpeg"
                  alt="Inventory management case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">National Healthcare Provider</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Challenge:</h4>
                    <p className="text-muted-foreground">
                      A leading healthcare network with 12 facilities across Saudi Arabia struggled with 
                      uniform inventory management for 5,000+ staff across multiple departments. They faced 
                      issues with inconsistent uniform availability, excessive costs from emergency orders, 
                      and limited visibility into inventory levels.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Solution:</h4>
                    <p className="text-muted-foreground">
                      We implemented our Enterprise Inventory Management System with custom integration to 
                      their HR software, RFID tracking for high-value items, and regional distribution 
                      centers. The system included specialized workflows for different departments and 
                      automated reporting tools for management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Results:</h4>
                    <p className="text-muted-foreground">
                      Within 12 months, the organization reduced uniform expenditure by 28%, decreased 
                      emergency orders by 92%, and improved staff satisfaction with uniform availability 
                      by 64%. The centralized system provided complete visibility across all locations 
                      and streamlined the onboarding process for new employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Options */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Integration Capabilities</h2>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="mb-6 text-center text-muted-foreground">
                Our inventory management systems can seamlessly integrate with your existing business systems:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {[
                  { name: "HR Management Systems", icon: "👥" },
                  { name: "ERP Solutions", icon: "🔄" },
                  { name: "Accounting Software", icon: "📒" },
                  { name: "Procurement Systems", icon: "🛒" },
                  { name: "Facility Management", icon: "🏢" },
                  { name: "Employee Portals", icon: "💻" }
                ].map((system, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-2 text-4xl">{system.icon}</div>
                    <div className="text-sm font-medium">{system.name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Our team can develop custom integrations for specialized systems upon request.
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How long does it take to implement an inventory management system?",
                  answer: "Implementation timelines vary based on the size and complexity of your organization. Typically, our Essential package can be implemented within 4-6 weeks, while Premium and Enterprise solutions take 8-12 weeks. This includes system configuration, data migration, and staff training."
                },
                {
                  question: "Can your system handle multiple locations and departments?",
                  answer: "Yes, our Premium and Enterprise solutions are specifically designed for multi-location management. The system allows for centralized oversight while enabling location-specific inventory management, including different uniform requirements and allocation policies by department or facility."
                },
                {
                  question: "How do you handle employee onboarding and departures?",
                  answer: "Our system includes comprehensive workflows for both onboarding and departures. New employees can be automatically assigned their uniform allocation based on role, department, and location. For departures, the system tracks returned items, assesses condition, and manages the cleaning and redistribution or disposal process."
                },
                {
                  question: "What kind of cost savings can we expect?",
                  answer: "Organizations typically see 15-30% reduction in overall uniform program costs within the first year. These savings come from reduced overstocking, decreased emergency orders, extended uniform lifecycles through better tracking and maintenance, and optimized reordering based on actual usage data."
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
            <h2 className="mb-4 text-3xl font-bold">Ready to Optimize Your Uniform Inventory?</h2>
            <p className="mb-6 text-lg text-white/90">
              Schedule a consultation with our inventory specialists
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-transform hover:scale-105"
              >
                Request an Assessment
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