import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Hospital & Healthcare Uniforms | UniformSA",
  description: "Premium hospital and healthcare uniforms for Saudi medical facilities. Specialized medical attire that combines comfort, functionality, and compliance with healthcare standards.",
}

const slides = [
  {
    image: "/images/healthcare/Saudi_hospital_staff_uniforms.jpeg",
    title: "Healthcare Uniform Excellence",
    description: "Specialized medical uniforms engineered for Saudi healthcare environments"
  },
  {
    image: "/images/healthcare/Medical_uniforms_Saudi_hospitals.jpeg",
    title: "Clinical Functionality",
    description: "Practical healthcare attire that supports medical professionals in their daily work"
  },
  {
    image: "/images/healthcare/Nurse_uniforms_Saudi_Arabia.jpeg",
    title: "Infection Control",
    description: "Antimicrobial fabrics and design features that enhance safety and hygiene"
  }
]

export default function HospitalUniformsPage() {
  return (
    <div>
      <ServiceHeader 
        title="Hospital & Healthcare Uniforms" 
        description="Specialized medical attire solutions for Saudi healthcare institutions, meeting the highest standards of comfort, functionality, and compliance."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Medical Uniform Excellence</h2>
                <p className="mb-4 text-muted-foreground">
                  Our hospital and healthcare uniforms are specifically designed for Saudi medical facilities, offering a perfect balance of professional appearance, comfort during long shifts, and compliance with healthcare regulations.
                </p>
                <p className="text-muted-foreground">
                  Each uniform is engineered with antimicrobial fabrics, practical design features, and attention to cultural considerations to meet the unique needs of medical professionals in the Kingdom.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/healthcare/Saudi_hospital_staff_wearing_uniforms.jpeg"
                  alt="Medical uniforms for Saudi healthcare professionals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Key Features of Our Medical Uniforms</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Antimicrobial Protection",
                  description: "Advanced fabric technologies that inhibit bacterial growth and reduce infection risks."
                },
                {
                  title: "Fluid Resistance",
                  description: "Protective barriers against spills, splashes, and contaminants in healthcare environments."
                },
                {
                  title: "Ergonomic Design",
                  description: "Thoughtfully designed for ease of movement during long shifts and medical procedures."
                },
                {
                  title: "Temperature Regulation",
                  description: "Breathable fabrics that maintain comfort in temperature-controlled medical facilities."
                },
                {
                  title: "Practical Storage",
                  description: "Strategic pocket placement for medical tools, devices, and personal items."
                },
                {
                  title: "Easy Identification",
                  description: "Color coding and customization options to distinguish departments and roles."
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

          {/* Medical Uniform Categories */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Healthcare Uniform Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Physician Attire",
                  image: "/images/healthcare/Doctor_uniforms_Saudi_hospitals.jpeg",
                  description: "Professional lab coats and scrubs for physicians and specialists."
                },
                {
                  title: "Nursing Uniforms",
                  image: "/images/healthcare/Saudi_nurse_uniforms.jpeg",
                  description: "Comfortable and practical uniforms for nursing staff at all levels."
                },
                {
                  title: "Surgical Scrubs",
                  image: "/images/healthcare/Surgical_scrubs_Saudi_medical_centers.jpeg",
                  description: "Specialized attire for operating room staff with maximum functionality."
                },
                {
                  title: "Laboratory Coats",
                  image: "/images/healthcare/Lab_coats_Saudi_hospitals.jpeg",
                  description: "Protective lab coats for medical technicians and researchers."
                },
                {
                  title: "Administration & Support",
                  image: "/images/healthcare/Hospital_administration_uniforms_Saudi.jpeg",
                  description: "Professional attire for front desk, administrative, and support personnel."
                },
                {
                  title: "Emergency Services",
                  image: "/images/healthcare/Emergency_staff_uniforms_Saudi_hospitals.jpeg",
                  description: "High-visibility uniforms for emergency department and paramedic staff."
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

          {/* Compliance & Standards */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Healthcare Compliance & Standards</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/healthcare/Medical_uniform_quality_control.jpeg"
                  alt="Healthcare uniform compliance and standards"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-xl font-bold">Meeting Saudi Healthcare Requirements</h3>
                <p className="mb-4 text-muted-foreground">
                  Our healthcare uniforms adhere to all relevant Saudi healthcare regulations and international medical standards, ensuring your facility remains compliant while providing optimal protection.
                </p>
                <ul className="space-y-2">
                  {[
                    "Compliance with Saudi Health Ministry guidelines",
                    "Adherence to infection control standards",
                    "Meets international healthcare textile requirements",
                    "Regular testing for antimicrobial efficacy",
                    "Quality certification for medical environments",
                    "Cultural sensitivity in design and implementation"
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

          {/* Fabric Technologies */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Advanced Healthcare Fabric Technologies</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Antimicrobial Textiles",
                  description: "Fabrics treated with silver ions or other antimicrobial agents that prevent the growth of bacteria, fungi, and other pathogens.",
                  icon: "🦠"
                },
                {
                  title: "Fluid Barrier Protection",
                  description: "Technologies that repel liquids, blood, and other bodily fluids to reduce contamination and infection transmission risks.",
                  icon: "💧"
                },
                {
                  title: "Breathable Performance",
                  description: "Moisture-wicking fabrics that pull sweat away from the body and allow air circulation during long shifts and procedures.",
                  icon: "🌬️"
                },
                {
                  title: "Wrinkle Resistance",
                  description: "Special fabric treatments that maintain a professional appearance throughout demanding shifts without frequent pressing.",
                  icon: "👔"
                },
                {
                  title: "Stretch Comfort",
                  description: "Four-way stretch materials that allow unrestricted movement during patient care and emergency situations.",
                  icon: "🤸"
                },
                {
                  title: "Eco-Friendly Options",
                  description: "Sustainable fabric choices that maintain medical-grade performance while reducing environmental impact.",
                  icon: "♻️"
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
                <Image
                  src="/images/healthcare/Major_Saudi_hospital_uniform_program.jpeg"
                  alt="Healthcare uniform case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background p-6 md:p-8">
                <div className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  Case Study
                </div>
                <h3 className="mb-4 text-2xl font-bold">Leading Riyadh Medical Center</h3>
                <p className="mb-4 text-muted-foreground">
                  We implemented a comprehensive uniform program for a 500-bed medical facility in Riyadh, covering all departments from emergency services to specialized care units. The program required specialized uniforms for over 1,200 medical professionals.
                </p>
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 32% reduction in infection-related incidents</li>
                    <li>• Improved patient identification of staff roles</li>
                    <li>• 94% staff satisfaction with comfort and functionality</li>
                    <li>• Streamlined inventory management system implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Design Options */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Customization for Healthcare Facilities</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/healthcare/Customized_hospital_uniforms_Saudi.jpeg"
                    alt="Customized healthcare uniforms"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">Personalized for Your Facility</h3>
                <p className="mb-4 text-muted-foreground">
                  Our healthcare uniforms can be tailored to meet the specific needs of your medical facility, incorporating your branding and functional requirements.
                </p>
                <ul className="space-y-2">
                  {[
                    "Hospital logo and branding integration",
                    "Department color coding systems",
                    "Role identification features",
                    "Customized pocket configurations",
                    "Size range accommodations",
                    "Specialized fabric selections",
                    "Cultural and religious considerations"
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

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How long do antimicrobial treatments last in healthcare uniforms?",
                  answer: "Our antimicrobial treatments are engineered to maintain effectiveness for up to 100 industrial washes when following proper care instructions. We provide detailed laundering guidelines to maximize the lifespan of these protective features."
                },
                {
                  question: "Can you accommodate different departments with distinct uniform styles?",
                  answer: "Yes, we specialize in creating cohesive yet distinct uniform systems that clearly differentiate between departments while maintaining a consistent organizational identity. This includes variations in color, style, and functional elements specific to each department's needs."
                },
                {
                  question: "Do you offer special considerations for female healthcare professionals?",
                  answer: "Absolutely. Our designs include options that respect cultural and religious requirements while maintaining full functionality. We offer modest designs with appropriate coverage, hijab-friendly options, and adjustable features to accommodate personal preferences."
                },
                {
                  question: "What is your approach to infection control in healthcare uniforms?",
                  answer: "We implement a multi-layered approach to infection control, including antimicrobial fabric treatments, fluid-resistant barriers, design features that minimize cross-contamination risks, and specialized laundering recommendations. Our uniforms are designed to be part of your facility's comprehensive infection control strategy."
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
            <h2 className="mb-4 text-3xl font-bold">Elevate Patient Care with Professional Medical Uniforms</h2>
            <p className="mb-6 text-lg text-white/90">
              Partner with UniformSA for specialized healthcare attire solutions
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-transform hover:scale-105"
              >
                Request a Healthcare Consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                Contact Our Medical Specialists
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 