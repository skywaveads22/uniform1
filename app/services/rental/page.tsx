import Image from 'next/image'
import Link from 'next/link'
import { Recycle, Timer, Truck, Shield, Sparkles, Calculator } from 'lucide-react'

export default function RentalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Uniform Rental Services
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                Streamline your uniform management with our comprehensive rental program. Professional-grade uniforms, maintained and delivered, without the hassle of ownership.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <Image
                src="/images/industrial/rental-service.jpg"
                alt="Uniform Rental Service"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Benefits of Our Rental Program
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Recycle,
                title: "Regular Maintenance",
                description: "Professional cleaning and maintenance to keep uniforms in pristine condition."
              },
              {
                icon: Timer,
                title: "Time Savings",
                description: "Eliminate time spent on uniform inventory management and maintenance."
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                description: "Scheduled deliveries ensure fresh uniforms are always available."
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "High-quality uniforms that meet industry standards and regulations."
              },
              {
                icon: Sparkles,
                title: "Professional Image",
                description: "Maintain a consistent, professional appearance across your workforce."
              },
              {
                icon: Calculator,
                title: "Cost-Effective",
                description: "Reduce capital expenditure and maintenance costs with our rental program."
              }
            ].map((benefit, index) => (
              <div key={index} className="rounded-xl border bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <benefit.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            How Our Rental Program Works
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "We evaluate your uniform needs and develop a customized rental program."
              },
              {
                step: "2",
                title: "Uniform Selection",
                description: "Choose from our wide range of high-quality uniforms and customize as needed."
              },
              {
                step: "3",
                title: "Regular Service",
                description: "We handle cleaning, maintenance, and regular deliveries of fresh uniforms."
              },
              {
                step: "4",
                title: "Program Management",
                description: "Continuous support and program optimization to meet your changing needs."
              }
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white mx-auto">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-primary/20 lg:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Flexible Rental Plans
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "Starting at SAR 50",
                period: "per employee/month",
                features: [
                  "Weekly uniform rotation",
                  "Basic maintenance",
                  "Standard delivery",
                  "Quality guarantee"
                ]
              },
              {
                name: "Professional",
                price: "Starting at SAR 75",
                period: "per employee/month",
                features: [
                  "Bi-weekly uniform rotation",
                  "Premium maintenance",
                  "Priority delivery",
                  "Quality guarantee",
                  "Emergency replacements"
                ],
                featured: true
              },
              {
                name: "Enterprise",
                price: "Custom Pricing",
                period: "tailored to your needs",
                features: [
                  "Custom rotation schedule",
                  "Premium maintenance",
                  "Priority delivery",
                  "Quality guarantee",
                  "Emergency replacements",
                  "Dedicated account manager"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl border p-8 ${
                  plan.featured
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-80"> {plan.period}</span>
                </div>
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className={`mr-2 h-5 w-5 ${
                          plan.featured ? 'text-white' : 'text-primary'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-block w-full rounded-lg px-6 py-3 text-center font-semibold transition-transform hover:scale-105 ${
                    plan.featured
                      ? 'bg-white text-primary'
                      : 'bg-primary text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Simplify Your Uniform Management?</h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Join our rental program today and experience hassle-free uniform management
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  )
} 