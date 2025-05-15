import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ServiceHeader } from "@/components/ServiceHeader"

export const metadata: Metadata = {
  title: "Uniform Customization Services | UniformSA",
  description: "Professional uniform customization services for Saudi businesses. Create branded, high-quality uniforms tailored to your organization's unique needs and requirements.",
}

const slides = [
  {
    image: "/images/healthcare/hospital_logo_printing_uniforms.jpg",
    title: "Bespoke Uniform Design",
    description: "Tailored uniforms that perfectly reflect your brand identity and values"
  },
  {
    image: "/images/aviation/aviation_uniform_embroidery.jpg",
    title: "Custom Embroidery & Printing",
    description: "Professional branding with high-quality embroidery and printing services"
  },
  {
    image: "/images/hospitality/modern_hospitality_design_uniforms.jpeg",
    title: "Material & Color Selection",
    description: "Extensive fabric and color options to meet your specific requirements"
  }
]

export default function UniformsCustomizationPage() {
  return (
    <div>
      <ServiceHeader 
        title="Uniform Customization Services" 
        description="Transform standard uniforms into powerful brand assets with our professional customization solutions."
        slides={slides}
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Elevate Your Brand Identity</h2>
                <p className="mb-4 text-muted-foreground">
                  Your uniforms are more than just clothing—they're a powerful expression of your brand 
                  identity and organizational values. Our customization services transform standard 
                  uniforms into distinctive brand assets that make your team instantly recognizable.
                </p>
                <p className="text-muted-foreground">
                  From subtle logo embroidery to complete bespoke designs, UniformSA offers comprehensive 
                  customization solutions that perfectly align with your brand guidelines, cultural 
                  considerations, and practical requirements.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-square">
                <Image
                  src="/images/hospitality/hotel_uniform_accessories.jpeg"
                  alt="Uniform customization service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Customization Options</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Logo Embroidery",
                  description: "High-precision embroidery of your company logo or emblems with meticulous attention to detail and color accuracy",
                  icon: "🧵"
                },
                {
                  title: "Name Personalization",
                  description: "Custom embroidery of staff names or positions to enhance professionalism and customer service experience",
                  icon: "👤"
                },
                {
                  title: "Color Customization",
                  description: "Match uniform colors precisely to your brand palette using our extensive range of fabric options",
                  icon: "🎨"
                },
                {
                  title: "Fabric Selection",
                  description: "Choose from premium fabrics tailored to your industry needs, climate considerations, and comfort requirements",
                  icon: "🧶"
                },
                {
                  title: "Custom Design Elements",
                  description: "Incorporate unique design features such as piping, trim, buttons, and pockets to create distinctive uniforms",
                  icon: "✂️"
                },
                {
                  title: "Screen Printing",
                  description: "High-quality screen printing for larger designs, patterns, or graphics that maintain vibrance after repeated washing",
                  icon: "🖌️"
                }
              ].map((option, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 text-4xl">{option.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Process */}
          <div className="mb-16 rounded-lg bg-primary/5 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Customization Process</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "We discuss your vision, review your brand guidelines, and understand your specific requirements",
                  icon: "💬"
                },
                {
                  step: 2,
                  title: "Design",
                  description: "Our designers create digital mockups showing how your customizations will look on selected uniforms",
                  icon: "✏️"
                },
                {
                  step: 3,
                  title: "Sampling",
                  description: "We produce sample pieces for your approval before proceeding with full production",
                  icon: "👕"
                },
                {
                  step: 4,
                  title: "Production",
                  description: "Upon approval, we implement your customizations with precision across your entire uniform order",
                  icon: "🏭"
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

          {/* Technology & Techniques */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Technology & Techniques</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold">Advanced Embroidery</h3>
                <ul className="space-y-3">
                  {[
                    "State-of-the-art computerized embroidery machines",
                    "Multi-head capability for consistent high-volume production",
                    "12-color threading for perfect brand color matching",
                    "3D embroidery techniques for dimensional logos",
                    "Fine detail capability for intricate designs",
                    "Specialty thread options for different fabrics and effects"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold">Premium Printing</h3>
                <ul className="space-y-3">
                  {[
                    "High-resolution direct-to-garment (DTG) printing",
                    "Eco-friendly water-based inks for vibrant colors",
                    "Heat transfer technology for detailed graphics",
                    "Durable screen printing for long-lasting results",
                    "Reflective and specialty printing options",
                    "UV-resistant treatments for outdoor uniforms"
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

          {/* Industry Applications */}
          <div className="mb-16 rounded-lg border bg-card p-8 shadow-md">
            <h2 className="mb-8 text-center text-3xl font-bold">Industry-Specific Customizations</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  industry: "Healthcare",
                  customizations: [
                    "Department color-coding systems",
                    "Antimicrobial fabric treatments",
                    "Role identification embroidery",
                    "Name and credential display",
                    "Modesty-conscious design modifications"
                  ],
                  icon: "🏥"
                },
                {
                  industry: "Hospitality",
                  customizations: [
                    "Branded front-of-house elements",
                    "Cultural design considerations",
                    "Luxurious fabric upgrades",
                    "Position-specific styling details",
                    "Seasonal variation options"
                  ],
                  icon: "🏨"
                },
                {
                  industry: "Corporate",
                  customizations: [
                    "Subtle brand element integration",
                    "Department-specific color accents",
                    "Premium fabric selections",
                    "Executive-level customizations",
                    "Formal/casual variation options"
                  ],
                  icon: "🏢"
                },
                {
                  industry: "Security",
                  customizations: [
                    "High-visibility safety elements",
                    "Badge and rank display systems",
                    "Reinforced wear points",
                    "Functional pocket customizations",
                    "Reflective printing options"
                  ],
                  icon: "🛡️"
                },
                {
                  industry: "Retail",
                  customizations: [
                    "Contemporary styled brand elements",
                    "Sales specialist identifiers",
                    "Comfortable stretch fabrics",
                    "Seasonal collection alignment",
                    "Promotional customization options"
                  ],
                  icon: "🛍️"
                },
                {
                  industry: "Industrial",
                  customizations: [
                    "High-visibility safety elements",
                    "Flame-resistant treatments",
                    "Department and zone identification",
                    "Reinforced high-wear areas",
                    "Reflective safety printing"
                  ],
                  icon: "🏭"
                }
              ].map((industry, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 text-4xl">{industry.icon}</div>
                    <h3 className="text-xl font-semibold">{industry.industry}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.customizations.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Showcase */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Customization Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  image: "/images/hospitality/boutique_hotel_staff_uniforms.jpeg",
                  caption: "Corporate blazer with custom embroidery"
                },
                {
                  image: "/images/hospitality/modern_hospitality_design_uniforms.jpeg",
                  caption: "Healthcare scrubs with department color coding"
                },
                {
                  image: "/images/healthcare/hospital_logo_printing_uniforms.jpg",
                  caption: "Hospitality uniforms with branded accents"
                },
                {
                  image: "/images/aviation/aviation_uniform_embroidery.jpg",
                  caption: "Security uniforms with reflective elements"
                },
                {
                  image: "/images/hospitality/hotel_uniform_accessories.jpeg",
                  caption: "Restaurant staff with custom aprons"
                },
                {
                  image: "/images/hospitality/custom_hospitality_vests.jpeg",
                  caption: "Retail team polos with branded elements"
                },
                {
                  image: "/images/healthcare/Embroidery_on_medical_uniforms.jpg",
                  caption: "Executive suits with subtle branding"
                },
                {
                  image: "/images/hospitality/hotel_uniform_accessories_(ties_bowties_pins).jpeg",
                  caption: "Industrial workwear with safety customizations"
                }
              ].map((sample, index) => (
                <div key={index} className="group overflow-hidden rounded-lg border bg-card shadow-sm">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={sample.image}
                      alt={sample.caption}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground">{sample.caption}</p>
                  </div>
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
                  src="/images/hospitality/modern_hospitality_design_uniforms.jpeg"
                  alt="Uniform customization case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">Luxury Hotel Chain</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Challenge:</h4>
                    <p className="text-muted-foreground">
                      A prestigious hotel chain with 5 locations across Saudi Arabia needed to refresh 
                      their staff uniforms with a design that balanced contemporary luxury with 
                      traditional Saudi hospitality values, while clearly differentiating between 
                      8 different staff roles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Solution:</h4>
                    <p className="text-muted-foreground">
                      We developed a custom uniform program featuring subtle gold embroidery of their 
                      logo, department-specific color accents, and name personalization. Premium 
                      fabrics were selected for comfort in the Saudi climate, with modest yet 
                      elegant designs that respected cultural values.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Results:</h4>
                    <p className="text-muted-foreground">
                      The new customized uniforms received overwhelming positive feedback from both 
                      staff and guests. Staff reported 92% satisfaction with comfort and appearance, 
                      while the hotel noted a 23% increase in positive mentions of staff presentation 
                      in guest reviews.
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
                  question: "What is the minimum order quantity for customized uniforms?",
                  answer: "Our minimum order quantity varies by customization type. For basic logo embroidery, we can accommodate orders as small as 10 pieces. For fully custom designs with multiple customization elements, we typically require a minimum of 25 pieces per style. For larger organizations, we offer volume discounts starting at 50+ pieces."
                },
                {
                  question: "How accurately can you match our brand colors?",
                  answer: "We use the Pantone Color Matching System (PMS) to ensure precise color matching for your brand. Our embroidery technology supports a 12-color thread system and our printing processes can accurately reproduce your exact brand colors. We provide samples for your approval to confirm color accuracy before full production."
                },
                {
                  question: "What is the turnaround time for customized uniform orders?",
                  answer: "Turnaround time depends on the complexity and volume of your order. Simple embroidery or printing on existing uniform styles typically takes 2-3 weeks. Fully customized designs with material selection and multiple customization elements generally require 4-6 weeks. Rush services are available for certain customization types."
                },
                {
                  question: "Can you customize uniforms that were not purchased through UniformSA?",
                  answer: "Yes, we offer customization services for existing uniforms not purchased through us, subject to fabric compatibility assessment. We recommend sending a sample garment for testing to ensure the desired customization will be effective and durable on your specific uniforms."
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
            <h2 className="mb-4 text-3xl font-bold">Ready to Create Custom Uniforms?</h2>
            <p className="mb-6 text-lg text-white/90">
              Contact our design team to discuss your customization needs
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/request-quote"
                className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-transform hover:scale-105"
              >
                Request a Design Consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-medium text-white transition-transform hover:scale-105"
              >
                Speak to a Designer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 