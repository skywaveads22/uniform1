import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Download, FileText, BarChart3, Users, Briefcase } from 'lucide-react'

export default function UniformProgramManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hospitality/Hospitality_uniforms.jpeg"
            alt="Uniform Program Management"
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
                Uniform Program Management
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Comprehensive solutions to design, implement, and manage your organization's uniform program across Saudi Arabia.
              </p>
              <Link
                href="#get-started"
                className="inline-flex rounded-lg bg-white px-6 py-3 text-primary transition-all hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary">
                What is Uniform Program Management?
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                Uniform Program Management (UPM) is a comprehensive approach to handling all aspects of your organization's uniform needs, from initial design concepts to ongoing maintenance and replacement.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Our dedicated program management team takes the complexity out of outfitting your staff with professional, consistent, and high-quality uniforms that align with your brand identity and operational requirements.
              </p>
              <div className="space-y-3">
                {[
                  "Complete end-to-end uniform program solutions",
                  "Dedicated program managers for your account",
                  "Streamlined ordering and distribution processes",
                  "Custom web portals for efficient management",
                  "Regular reporting and analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 shrink-0 text-primary" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg"
                alt="Uniform Program Management"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-primary">How Our Program Management Works</h2>
          
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 1,
                title: "Assessment & Planning",
                description: "We conduct a thorough assessment of your current uniform situation and future needs, including staff numbers, job roles, work environments, and brand requirements.",
                icon: <FileText className="h-10 w-10 text-primary" />
              },
              {
                step: 2,
                title: "Design & Development",
                description: "Our design team creates uniform concepts tailored to your brand and operational needs, with multiple revision rounds to ensure perfect alignment with your vision.",
                icon: <Briefcase className="h-10 w-10 text-primary" />
              },
              {
                step: 3,
                title: "Implementation",
                description: "From production to distribution, we handle the entire process of bringing your uniform program to life, including sizing, inventory management, and staff training.",
                icon: <Users className="h-10 w-10 text-primary" />
              },
              {
                step: 4,
                title: "Ongoing Management",
                description: "We provide continuous support through dedicated account managers, replacement protocols, performance monitoring, and regular program reviews.",
                icon: <BarChart3 className="h-10 w-10 text-primary" />
              }
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.step}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connector line (except for the last item) */}
                {step.step < 4 && (
                  <div className="hidden md:block absolute top-8 left-16 h-0.5 w-full bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Benefits of Our Program Management</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cost Efficiency",
                description: "Optimize your uniform budget with bulk purchasing, inventory management, and reduced administrative overhead.",
                image: "/images/industrial/Industrial_uniforms.jpeg"
              },
              {
                title: "Brand Consistency",
                description: "Ensure consistent application of your brand identity across all locations and departments.",
                image: "/images/hospitality/Hospitality_uniforms.jpeg"
              },
              {
                title: "Time Savings",
                description: "Free up your team's time by outsourcing the complex process of uniform management to experts.",
                image: "/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg"
              },
              {
                title: "Quality Control",
                description: "Maintain high standards with regular quality assessments and responsive replacement protocols.",
                image: "/images/aviation/Pilot_uniforms.jpg"
              },
              {
                title: "Staff Satisfaction",
                description: "Improve employee morale with comfortable, professional uniforms that they're proud to wear.",
                image: "/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg"
              },
              {
                title: "Scalability",
                description: "Easily scale your uniform program as your organization grows or changes across Saudi Arabia.",
                image: "/images/education/School_uniforms_Saudi_Arabia_KSA.jpg"
              }
            ].map((benefit, index) => (
              <div key={index} className="group overflow-hidden rounded-lg border bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-primary">Key Features of Our Program</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-primary">Program Components</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Custom Web Portal</h4>
                  <p className="text-gray-600">Secure online platform for ordering, tracking, and managing your uniform program with role-based access controls.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Inventory Management</h4>
                  <p className="text-gray-600">Real-time tracking of uniform inventory, automatic reordering triggers, and optimized stock levels.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Sizing & Fitting Programs</h4>
                  <p className="text-gray-600">On-site fitting events, digital sizing tools, and detailed measurement guides for perfect fits.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Distribution Services</h4>
                  <p className="text-gray-600">Efficient distribution to multiple locations across Saudi Arabia with tracking and delivery confirmation.</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-primary">Management Services</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Dedicated Account Management</h4>
                  <p className="text-gray-600">Assigned program manager who understands your unique needs and serves as your single point of contact.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Regular Reporting</h4>
                  <p className="text-gray-600">Comprehensive reports on usage, costs, savings, and program effectiveness with actionable insights.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Program Reviews</h4>
                  <p className="text-gray-600">Scheduled program assessments to ensure alignment with your evolving business needs and objectives.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Staff Training</h4>
                  <p className="text-gray-600">Comprehensive training for your team on uniform care, ordering procedures, and program policies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tiers */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-primary">Program Tiers</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Essential",
                description: "Perfect for small to medium-sized organizations with straightforward uniform needs.",
                price: "Customized pricing based on requirements",
                features: [
                  "Initial design consultation",
                  "Basic ordering system",
                  "Standard delivery options",
                  "Email & phone support",
                  "Quarterly program reviews"
                ],
                recommended: false
              },
              {
                name: "Professional",
                description: "Ideal for mid-sized organizations with multiple departments or locations.",
                price: "Customized pricing based on requirements",
                features: [
                  "Everything in Essential, plus:",
                  "Dedicated account manager",
                  "Custom web portal",
                  "Inventory management",
                  "Monthly reporting",
                  "Priority support",
                  "Bi-annual program reviews"
                ],
                recommended: true
              },
              {
                name: "Enterprise",
                description: "Comprehensive solution for large organizations with complex uniform requirements.",
                price: "Customized pricing based on requirements",
                features: [
                  "Everything in Professional, plus:",
                  "Advanced analytics dashboard",
                  "On-site fitting events",
                  "Multiple program managers",
                  "24/7 priority support",
                  "Custom API integrations",
                  "Monthly program reviews",
                  "Emergency replacement service"
                ],
                recommended: false
              }
            ].map((tier, index) => (
              <div 
                key={index} 
                className={`rounded-xl border bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                  tier.recommended ? 'border-primary relative' : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                    Recommended
                  </div>
                )}
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mb-4 text-gray-600">{tier.description}</p>
                <p className="mb-6 text-sm text-gray-500 italic">{tier.price}</p>
                
                <div className="mb-8 space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/contact"
                  className={`block rounded-lg px-6 py-3 text-center font-medium transition-transform hover:scale-105 ${
                    tier.recommended
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Success Stories</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                client: "Major Saudi Airline",
                result: "35% reduction in uniform-related costs",
                description: "Implemented a comprehensive program for 5,000+ staff across multiple airports and offices throughout Saudi Arabia, resulting in significant cost savings and improved brand consistency.",
                image: "/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg"
              },
              {
                client: "Luxury Hotel Chain",
                result: "Streamlined management across 12 properties",
                description: "Created a centralized uniform program for a luxury hotel group with properties in Riyadh, Jeddah, and Dammam, simplifying the ordering process and ensuring consistent quality.",
                image: "/images/hospitality/Hospitality_uniforms.jpeg"
              }
            ].map((study, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={study.image}
                      alt={study.client}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.client}</h3>
                    <p className="text-primary font-medium">{study.result}</p>
                  </div>
                </div>
                <p className="text-gray-600">{study.description}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-primary hover:underline"
                >
                  Read Full Case Study
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center rounded-lg border border-primary bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-primary/5"
            >
              View All Case Studies
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Helpful Resources</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Uniform Program Management Guide",
                description: "A comprehensive guide to understanding and implementing effective uniform programs.",
                icon: <FileText className="h-8 w-8 text-primary" />
              },
              {
                title: "ROI Calculator",
                description: "Calculate the potential return on investment with our uniform program management services.",
                icon: <BarChart3 className="h-8 w-8 text-primary" />
              },
              {
                title: "Sample Program Implementation Timeline",
                description: "View a typical timeline for implementing a uniform program from start to finish.",
                icon: <Download className="h-8 w-8 text-primary" />
              }
            ].map((resource, index) => (
              <div key={index} className="rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4">{resource.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{resource.title}</h3>
                <p className="mb-4 text-gray-600">{resource.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Download
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24" id="get-started">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Frequently Asked Questions</h2>
          
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "What size organization is best suited for uniform program management?",
                answer: "Our uniform program management services are scalable and can be adapted for organizations of all sizes. However, they provide the most value for organizations with 50+ employees who wear uniforms. The complexity of managing uniforms increases significantly with staff size, geographical spread, and the number of different roles requiring distinct uniforms."
              },
              {
                question: "How long does it take to implement a new uniform program?",
                answer: "Implementation timelines vary based on program complexity, but a typical timeline is 8-12 weeks from initial consultation to full deployment. This includes design finalization, production, employee sizing, inventory setup, and distribution. For large or complex organizations, phased implementations may be recommended."
              },
              {
                question: "Can you work with our existing uniform suppliers?",
                answer: "Yes, we can incorporate your existing suppliers into our program management approach if they meet our quality standards. We can also recommend alternative suppliers from our vetted network if needed. Our focus is on creating the most effective program for your organization, whether that involves existing relationships or new ones."
              },
              {
                question: "How do you handle uniform requirements for different departments?",
                answer: "Our program management approach organizes uniforms by department, role, location, and any other relevant categories. Each group can have its own unique requirements while still maintaining overall brand consistency. Our custom web portal makes it easy to manage these distinctions with role-based access controls."
              },
              {
                question: "What happens if an employee's uniform is damaged or lost?",
                answer: "Our programs include clear replacement procedures. Depending on your chosen program tier, replacements can be handled through standard reordering, expedited shipping options, or emergency replacement services. We also provide guidance on uniform care to minimize damage and extend uniform lifespan."
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
          <h2 className="mb-6 text-4xl font-bold">Ready to Transform Your Uniform Management?</h2>
          <p className="mb-8 mx-auto max-w-2xl text-xl text-white/90">
            Contact our team today to discuss how our Uniform Program Management service can streamline your operations and enhance your brand identity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-transform hover:scale-105"
            >
              Request a Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white bg-transparent px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 