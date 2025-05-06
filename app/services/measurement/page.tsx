import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"

export const metadata: Metadata = {
  title: "Professional Measurement Services | UniformSA",
  description: "Ensure perfect-fitting uniforms with our professional measurement services in Saudi Arabia. Precise, efficient, and tailored to your organization's needs.",
}

const slides = [
  {
    image: "/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg",
    title: "Professional Measurement Services",
    description: "Ensure perfect-fitting uniforms for your entire team with our expert measurement services"
  },
  {
    image: "/images/aviation/Airline_uniforms_Saudi_Arabia_KSA.jpg",
    title: "On-Site Team Measurements",
    description: "Our trained specialists visit your location for convenient group measurements"
  },
  {
    image: "/images/hospitality/Luxury_hotel_staff_uniforms_Saudi_Arabia_KSA.jpeg",
    title: "Advanced Measurement Technology",
    description: "Using the latest tools and techniques for highly accurate uniform sizing"
  }
]

export default function MeasurementServicePage() {
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
                <h2 className="mb-4 text-3xl font-bold">Perfect Fit Guarantee</h2>
                <p className="mb-4 text-muted-foreground">
                  At UniformSA, we understand that properly fitting uniforms are essential for comfort, 
                  professionalism, and functionality. Our comprehensive measurement services ensure 
                  that every uniform fits perfectly, enhancing your team's appearance and comfort level.
                </p>
                <p className="text-muted-foreground">
                  With our expert team of measurement specialists, we eliminate the common issues of 
                  ill-fitting uniforms, ensuring your staff look and feel their best while representing 
                  your organization across Saudi Arabia.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg"
                  alt="Professional uniform measurement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Measurement Services</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "📏",
                  title: "On-Site Measurement",
                  description: "Our specialists visit your location to take accurate measurements of your entire team in a single session."
                },
                {
                  icon: "👔",
                  title: "Individual Appointments",
                  description: "Schedule personal fitting sessions at our facility for key personnel or executives."
                },
                {
                  icon: "📱",
                  title: "Digital Self-Measurement",
                  description: "User-friendly tools and guides for remote teams to submit accurate measurements."
                },
                {
                  icon: "📊",
                  title: "Measurement Records",
                  description: "Secure storage of all measurement data for easy reordering and replacement uniforms."
                },
                {
                  icon: "⚙️",
                  title: "Technical Garment Measurement",
                  description: "Specialized measurements for technical and protective uniforms requiring precise fitting."
                },
                {
                  icon: "🔄",
                  title: "Follow-up Adjustments",
                  description: "Post-delivery fitting sessions to make any necessary adjustments to ensure perfect fit."
                }
              ].map((feature, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Measurement Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "We discuss your uniform requirements, employee numbers, and logistics to plan the measurement process."
                },
                {
                  step: 2,
                  title: "Scheduling",
                  description: "We arrange convenient dates and times for on-site measurements or individual appointments."
                },
                {
                  step: 3,
                  title: "Professional Measurement",
                  description: "Our trained specialists take precise measurements using professional equipment and techniques."
                },
                {
                  step: 4,
                  title: "Data Recording",
                  description: "All measurements are carefully recorded in our secure system for current and future orders."
                },
                {
                  step: 5,
                  title: "Production & Quality Check",
                  description: "Uniforms are produced according to the exact measurements, with quality checks throughout."
                },
                {
                  step: 6,
                  title: "Delivery & Final Fitting",
                  description: "We deliver the completed uniforms and can provide final fitting sessions if required."
                }
              ].map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-6 text-center text-3xl font-bold">Benefits of Professional Measurements</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start">
                <div className="mr-4 text-primary">✓</div>
                <p>Enhanced professional appearance across your organization</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary">✓</div>
                <p>Improved comfort and functionality for your staff</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary">✓</div>
                <p>Reduced need for alterations and replacements</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary">✓</div>
                <p>Consistent look across all staff members</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary">✓</div>
                <p>Time-saving service for busy organizations</p>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary">✓</div>
                <p>Cost-effective solution preventing ill-fitting uniforms</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">What Our Clients Say</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 text-primary">★★★★★</div>
                <p className="mb-4 italic text-muted-foreground">
                  "UniformSA's measurement service was incredibly efficient. They measured our entire staff of 120 people in just one day, and every uniform fit perfectly. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <p className="font-semibold">Ahmed Al-Saud</p>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <p className="text-muted-foreground">Operations Manager, Riyadh International Hotel</p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 text-primary">★★★★★</div>
                <p className="mb-4 italic text-muted-foreground">
                  "The measurement process was smooth and professional. The team was respectful of our cultural requirements, and the resulting flight attendant uniforms fit beautifully."
                </p>
                <div className="flex items-center">
                  <p className="font-semibold">Fatima Al-Qahtani</p>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <p className="text-muted-foreground">Uniform Coordinator, Saudi Airlines</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-primary p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Ensure Perfect-Fitting Uniforms?</h2>
            <p className="mb-6 text-lg text-white/90">
              Contact us today to schedule a measurement service for your organization
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-transform hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 