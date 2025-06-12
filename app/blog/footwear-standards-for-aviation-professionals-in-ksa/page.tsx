import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'Footwear Standards for Aviation Professionals in KSA: Safety and Compliance Guide | 2024',
    description: 'Comprehensive guide to aviation footwear standards in Saudi Arabia, covering safety requirements, GACA compliance, and professional footwear selection for pilots, cabin crew, and ground staff.',
    keywords: 'aviation footwear standards KSA, pilot shoes Saudi Arabia, cabin crew footwear, aviation safety shoes, GACA footwear requirements, professional aviation shoes, flight crew footwear',
    openGraph: {
      title: 'Footwear Standards for Aviation Professionals in KSA',
      description: 'Essential guide to aviation footwear standards and safety requirements for aviation professionals in Saudi Arabia.',
      images: ['/images/aviation/Aviation_uniform_accessories.jpg'],
    },
  }
}

export default function BlogPost() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700 dark:text-white">Aviation Footwear Standards in KSA</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/aviation/Aviation_uniform_accessories.jpg"
              alt="Aviation footwear standards and professional shoes for aviation professionals in Saudi Arabia"
              width={1000}
              height={600}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Footwear Standards for Aviation Professionals in KSA: Safety and Compliance Guide
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>October 12, 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Aviation, Safety, Footwear</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout (2 columns on desktop) */}
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="lead">
                Aviation footwear standards in Saudi Arabia represent a critical component of professional safety and regulatory compliance for pilots, cabin crew, and ground operations personnel. The General Authority of Civil Aviation (GACA) and international aviation safety organizations mandate specific footwear requirements that ensure operational safety, professional appearance, and emergency preparedness across all aviation environments within the Kingdom.
              </p>

              <h2>GACA Regulatory Framework for Aviation Footwear</h2>
              <p>
                The General Authority of Civil Aviation establishes comprehensive footwear standards that align with international aviation safety protocols while addressing the unique operational challenges of Saudi Arabia's aviation environment. These regulations encompass safety specifications, material requirements, and performance standards that all aviation professionals must meet to maintain their operational certifications and ensure passenger safety.
              </p>
              
              <p>
                GACA's footwear regulations are designed to prevent accidents, enhance emergency response capabilities, and maintain the professional standards expected in Saudi Arabia's rapidly expanding aviation sector. Compliance with these standards is mandatory for all aviation personnel operating within Saudi airspace and airports, with regular inspections ensuring ongoing adherence to safety requirements.
              </p>

              <h2>Safety Requirements and Performance Standards</h2>
              
              <h3>Slip Resistance and Traction</h3>
              <p>
                Aviation environments present unique slip hazards that require specialized footwear solutions:
              </p>
              
              <ul>
                <li><strong>Wet Surface Performance:</strong> Soles designed to maintain traction on wet aircraft surfaces and airport tarmacs</li>
                <li><strong>Oil and Fuel Resistance:</strong> Specialized compounds that provide grip on surfaces contaminated with aviation fluids</li>
                <li><strong>Multi-Surface Traction:</strong> Tread patterns optimized for various airport surfaces including metal, concrete, and composite materials</li>
                <li><strong>Temperature Performance:</strong> Sole materials that maintain flexibility and grip in extreme temperature conditions</li>
                <li><strong>Wear Resistance:</strong> Durable construction that maintains traction properties throughout extended use</li>
              </ul>

              <h3>Electrical Safety Features</h3>
              <p>
                Aviation environments require specific electrical safety characteristics:
              </p>
              
              <ul>
                <li><strong>Static Dissipative Properties:</strong> Materials that safely dissipate static electricity to prevent ignition hazards</li>
                <li><strong>Electrical Hazard Protection:</strong> Insulation properties that protect against electrical shock in maintenance environments</li>
                <li><strong>Conductive Elements:</strong> Controlled conductivity that prevents static buildup while maintaining safety</li>
                <li><strong>Testing Standards:</strong> Regular verification of electrical properties according to aviation safety standards</li>
                <li><strong>Environmental Durability:</strong> Maintenance of electrical properties despite exposure to aviation chemicals and conditions</li>
              </ul>

              <h2>Position-Specific Footwear Requirements</h2>
              
              <h3>Flight Crew Standards</h3>
              <p>
                Pilots and flight officers require footwear that meets specific cockpit and emergency requirements:
              </p>
              
              <ul>
                <li><strong>Pedal Operation:</strong> Thin, flexible soles that provide precise pedal feel and control</li>
                <li><strong>Emergency Egress:</strong> Secure fit that remains attached during emergency evacuation procedures</li>
                <li><strong>Professional Appearance:</strong> Polished leather construction that maintains command presence</li>
                <li><strong>Comfort Features:</strong> Cushioning and support for extended flight periods</li>
                <li><strong>Durability Standards:</strong> Construction that withstands frequent use and maintains appearance</li>
              </ul>

              <h3>Cabin Crew Specifications</h3>
              <p>
                Flight attendants require footwear that balances service functionality with safety requirements:
              </p>
              
              <ul>
                <li><strong>Service Mobility:</strong> Comfortable design for extended standing and walking during service</li>
                <li><strong>Emergency Response:</strong> Secure attachment and stability for emergency procedures</li>
                <li><strong>Professional Elegance:</strong> Stylish appearance that complements uniform design</li>
                <li><strong>Heel Height Restrictions:</strong> GACA-specified maximum heel heights for safety compliance</li>
                <li><strong>Quick Removal:</strong> Design features that allow rapid removal for emergency slide evacuation</li>
              </ul>

              <h3>Ground Operations Personnel</h3>
              <p>
                Ground crew and maintenance staff require enhanced protection for airport operations:
              </p>
              
              <ul>
                <li><strong>Impact Protection:</strong> Steel or composite toe caps for protection against falling objects</li>
                <li><strong>Puncture Resistance:</strong> Sole protection against sharp objects on airport surfaces</li>
                <li><strong>Chemical Resistance:</strong> Materials that resist aviation fuels, oils, and cleaning chemicals</li>
                <li><strong>High-Visibility Features:</strong> Reflective elements for enhanced visibility in airport environments</li>
                <li><strong>Weather Protection:</strong> Waterproof construction for outdoor operations in various weather conditions</li>
              </ul>

              <h2>Material Standards and Construction Requirements</h2>
              
              <h3>Leather Specifications</h3>
              <p>
                Aviation footwear leather must meet stringent quality and performance standards:
              </p>
              
              <ul>
                <li><strong>Full-Grain Leather:</strong> Premium leather construction for durability and professional appearance</li>
                <li><strong>Chemical Resistance:</strong> Treatments that protect against aviation chemicals and fluids</li>
                <li><strong>Breathability:</strong> Leather processing that maintains comfort during extended wear</li>
                <li><strong>Polish Retention:</strong> Surface treatments that maintain shine and professional appearance</li>
                <li><strong>Flexibility Maintenance:</strong> Leather that remains supple despite repeated use and cleaning</li>
              </ul>

              <h3>Sole Technology</h3>
              <p>
                Advanced sole technologies address aviation-specific requirements:
              </p>
              
              <ul>
                <li><strong>Rubber Compounds:</strong> Specialized formulations for optimal grip and durability</li>
                <li><strong>Tread Design:</strong> Patterns engineered for aviation surface conditions</li>
                <li><strong>Shock Absorption:</strong> Cushioning systems for comfort during extended standing</li>
                <li><strong>Temperature Resistance:</strong> Materials that perform in extreme temperature conditions</li>
                <li><strong>Fuel Resistance:</strong> Chemical resistance to aviation fuels and hydraulic fluids</li>
              </ul>

              <h2>Cultural and Professional Considerations</h2>
              
              <h3>Saudi Cultural Requirements</h3>
              <p>
                Aviation footwear must respect Saudi cultural and religious considerations:
              </p>
              
              <ul>
                <li><strong>Modesty Standards:</strong> Coverage requirements that align with cultural expectations</li>
                <li><strong>Prayer Accommodation:</strong> Easy removal for prayer requirements during duty periods</li>
                <li><strong>Gender-Specific Designs:</strong> Appropriate styles for male and female aviation professionals</li>
                <li><strong>Religious Observance:</strong> Designs that facilitate religious practices during work</li>
                <li><strong>Cultural Sensitivity:</strong> Styles that respect Saudi customs and traditions</li>
              </ul>

              <h3>Professional Image Standards</h3>
              <p>
                Aviation footwear contributes to the professional image of Saudi aviation:
              </p>
              
              <ul>
                <li><strong>Uniform Coordination:</strong> Colors and styles that complement aviation uniform designs</li>
                <li><strong>Brand Consistency:</strong> Footwear that supports airline and operator brand identity</li>
                <li><strong>International Standards:</strong> Appearance that meets global aviation professionalism expectations</li>
                <li><strong>Maintenance Requirements:</strong> Care standards that ensure consistent professional appearance</li>
                <li><strong>Quality Perception:</strong> Construction quality that reflects Saudi aviation excellence</li>
              </ul>

              <h2>Climate Adaptation for Saudi Conditions</h2>
              
              <h3>Heat Management</h3>
              <p>
                Saudi Arabia's extreme temperatures require specialized heat management features:
              </p>
              
              <ul>
                <li><strong>Ventilation Systems:</strong> Breathable materials and designs that promote airflow</li>
                <li><strong>Moisture Wicking:</strong> Lining materials that draw perspiration away from feet</li>
                <li><strong>Heat Reflection:</strong> Light-colored materials that reflect rather than absorb heat</li>
                <li><strong>Insulation Balance:</strong> Materials that provide comfort without excessive heat retention</li>
                <li><strong>Quick-Dry Properties:</strong> Materials that dry rapidly after moisture exposure</li>
              </ul>

              <h3>Sand and Dust Protection</h3>
              <p>
                Desert conditions require specific protection against environmental hazards:
              </p>
              
              <ul>
                <li><strong>Sealed Construction:</strong> Design features that prevent sand infiltration</li>
                <li><strong>Easy Cleaning:</strong> Smooth surfaces that release dust and sand easily</li>
                <li><strong>Abrasion Resistance:</strong> Materials that withstand abrasive desert conditions</li>
                <li><strong>Closure Protection:</strong> Lacing and closure systems that resist sand infiltration</li>
                <li><strong>Maintenance Simplicity:</strong> Designs that facilitate regular cleaning and maintenance</li>
              </ul>

              <h2>Conclusion: Ensuring Safety Through Proper Footwear</h2>
              <p>
                Aviation footwear standards in Saudi Arabia represent a critical intersection of safety, professionalism, and cultural sensitivity. The comprehensive requirements established by GACA and international aviation authorities ensure that aviation professionals have the proper footwear to perform their duties safely while maintaining the high standards expected in the Kingdom's aviation sector.
              </p>
              
              <p>
                Success in aviation footwear compliance requires understanding the complex interplay between safety requirements, operational demands, cultural considerations, and professional standards. Aviation operators that invest in proper footwear programs demonstrate their commitment to safety excellence and professional standards while supporting Saudi Arabia's position as a leading aviation hub in the region.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">About the Author</h3>
                <p className="text-gray-600">Captain Ahmed Al-Mansouri is an aviation safety specialist with over 19 years of experience in commercial aviation operations in Saudi Arabia. He has extensive knowledge of GACA regulations and has served as a safety consultant for multiple airlines on footwear standards and compliance programs.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Share Section */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold">Share Article</h3>
                <div className="flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/meeting-gaca-regulations-what-you-need-to-know-about-aviation-uniform-compliance-in-saudi-arabia" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">GACA Aviation Uniform Compliance</div>
                    <div className="text-xs text-gray-500">Regulatory requirements in KSA</div>
                  </Link>
                  <Link href="/blog/summer-vs-winter-aviation-uniforms-for-the-saudi-climate" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Summer vs Winter Aviation Uniforms</div>
                    <div className="text-xs text-gray-500">Climate considerations for KSA</div>
                  </Link>
                  <Link href="/blog/aviation-safety-equipment" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Aviation Safety Equipment</div>
                    <div className="text-xs text-gray-500">Comprehensive safety gear guide</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}