import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Ruler, Factory, HardHat, Flame, Wrench } from 'lucide-react'

export default function IndustrialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Industrial Uniforms & Safety Workwear</h1>
          <p className="text-lg text-muted-foreground">
            Professional-grade industrial uniforms and PPE that prioritize safety, durability, and comfort. 
            Designed for the demanding environments of manufacturing, construction, and heavy industry.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Request Safety Consultation</Link>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/industrial/Industrial_uniforms.jpeg"
            alt="Industrial Uniforms"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Key Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Essential Industrial Workwear Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Safety Workwear & PPE",
              image: "/images/industrial/Safety_workwear_PPE_apparel.jpeg",
              description: "Comprehensive PPE solutions including high-visibility clothing and protective gear"
            },
            {
              title: "Construction Uniforms",
              image: "/images/industrial/Construction_worker_uniforms_attire.jpeg",
              description: "Durable workwear designed for construction site conditions"
            },
            {
              title: "Factory Uniforms",
              image: "/images/industrial/Factory_uniforms.jpeg",
              description: "Comfortable and practical uniforms for manufacturing environments"
            },
            {
              title: "Fire Resistant Clothing",
              image: "/images/industrial/Fire_resistant_uniforms_FR_clothing.jpeg",
              description: "FR-rated apparel for hazardous work environments"
            },
            {
              title: "Maintenance & Operations",
              image: "/images/industrial/Technician_uniforms_maintenance.jpeg",
              description: "Durable work attire for technical and maintenance operations in industrial settings"
            },
            {
              title: "Oil & Gas Sector",
              image: "/images/industrial/Oil_and_Gas_sector_uniforms_Oilfield_workwear.jpeg",
              description: "Industry-specific workwear for oil and gas professionals"
            }
          ].map((category, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/20 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Industrial Workwear</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-12 h-12 text-primary" />,
              title: "Safety Certified",
              description: "All products meet international safety standards and regulations"
            },
            {
              icon: <Ruler className="w-12 h-12 text-primary" />,
              title: "Custom Sizing",
              description: "Precise measurements and fittings for optimal comfort and safety"
            },
            {
              icon: <Factory className="w-12 h-12 text-primary" />,
              title: "Industry Specific",
              description: "Tailored solutions for different industrial sectors"
            },
            {
              icon: <HardHat className="w-12 h-12 text-primary" />,
              title: "Complete PPE",
              description: "Comprehensive personal protective equipment solutions"
            },
            {
              icon: <Flame className="w-12 h-12 text-primary" />,
              title: "FR Certified",
              description: "Fire-resistant clothing that meets safety standards"
            },
            {
              icon: <Wrench className="w-12 h-12 text-primary" />,
              title: "Durable Materials",
              description: "Heavy-duty fabrics built to withstand industrial conditions"
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Products Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Specialized Industrial Wear</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "/images/industrial/Work_coveralls_overalls.jpeg",
              title: "Work Coveralls"
            },
            {
              image: "/images/industrial/High_visibility_clothing_Hi_vis_uniforms.jpeg",
              title: "Hi-Vis Clothing"
            },
            {
              image: "/images/industrial/Safety_vests.jpeg",
              title: "Safety Vests"
            },
            {
              image: "/images/industrial/heavy_duty_work_jackets.jpeg",
              title: "Work Jackets"
            }
          ].map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-semibold">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Equip Your Industrial Workforce?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get in touch with our industrial uniform specialists to discuss your specific requirements and safety standards.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Schedule Industrial Consultation</Link>
        </Button>
      </section>
    </div>
  )
} 