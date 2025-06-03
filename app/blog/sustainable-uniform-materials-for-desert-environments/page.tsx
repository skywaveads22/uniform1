import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sustainable Desert Uniforms: Eco-Materials for KSA Climate (2025) | UniformSA',
  description: 'Comprehensive 2025 guide to sustainable uniform materials for desert environments in Saudi Arabia. Eco-friendly fabrics that perform in extreme heat, sand, and UV conditions.',
  keywords: 'sustainable desert uniforms KSA, eco-friendly materials Saudi Arabia, desert climate workwear, sustainable fabrics hot weather, green uniforms desert environment, eco-materials extreme heat',
  openGraph: {
    title: 'Sustainable Desert Uniforms: Eco-Materials for KSA Climate (2025)',
    description: 'Expert guide to sustainable uniform materials designed for Saudi Arabia\'s desert environment. Combining environmental responsibility with extreme climate performance.',
    images: ['/images/industrial/breathable_industrial_fabrics.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSA Desert Uniforms: Sustainable Materials 2025',
    description: 'Eco-friendly uniform materials engineered for Saudi Arabia\'s challenging desert climate.',
    images: ['/images/industrial/breathable_industrial_fabrics.jpeg'],
  },
}

export default async function Page() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>{'>'}</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>{'>'}</span>
            <span className="text-gray-700 dark:text-white">Sustainable Desert Uniforms</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/industrial/breathable_industrial_fabrics.jpeg"
              alt="Sustainable uniform materials designed for desert environments in Saudi Arabia"
              width={1000}
              height={600}
              className="rounded-lg w-full object-cover"
              priority
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
              Sustainable Desert Uniforms: Eco-Materials for KSA Climate (2025 Guide)
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 3, 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>17 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Sustainable Materials, Desert Climate, KSA Uniforms, Eco-Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout (2 columns on desktop) */}
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="prose dark:prose-invert max-w-none prose-lg">
              <p className="lead">
                Saudi Arabia's desert environment presents unique challenges for uniform design and material selection. As the Kingdom advances its Vision 2030 sustainability goals, the development of eco-friendly uniform materials that can withstand extreme heat, sand abrasion, and intense UV radiation has become a critical priority. This comprehensive 2025 guide explores cutting-edge sustainable materials engineered specifically for desert conditions, demonstrating how environmental responsibility and performance excellence can coexist in the world's most challenging climate.
              </p>

              <h2>The Desert Challenge: Understanding KSA's Extreme Environment</h2>
              <p>
                Saudi Arabia's desert climate imposes extraordinary demands on uniform materials that few other environments can match:
              </p>
              <ul>
                <li><strong>Extreme Temperature Variations:</strong> Daily temperatures can range from 15°C at dawn to over 50°C at midday, requiring materials that adapt to rapid thermal changes.</li>
                <li><strong>Intense Solar Radiation:</strong> UV levels reaching 12+ on the UV Index scale demand exceptional sun protection and color stability.</li>
                <li><strong>Sand and Dust Exposure:</strong> Constant abrasion from airborne particles requires materials with superior durability and easy cleaning properties.</li>
                <li><strong>Low Humidity Conditions:</strong> Humidity levels often below 10% create static electricity buildup and skin irritation challenges.</li>
                <li><strong>Seasonal Sandstorms:</strong> Periodic extreme weather events test material resilience and filtration capabilities.</li>
                <li><strong>Extended Outdoor Exposure:</strong> Many workers spend 8-12 hours daily in direct desert conditions, requiring exceptional comfort and protection.</li>
              </ul>

              <div className="my-8 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-6 shadow-lg dark:from-amber-900/20 dark:to-orange-900/20">
                <h3 className="mb-3 flex items-center text-xl font-semibold text-amber-800 dark:text-amber-300">
                  🏜️ 2025 KSA Desert Uniform Material Insights
                </h3>
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  <li className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">50°C+</span>
                    <span>Maximum temperatures materials must withstand</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">UV 12+</span>
                    <span>Extreme UV index levels requiring protection</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">70%</span>
                    <span>Reduction in material lifespan without proper desert engineering</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">24/7</span>
                    <span>Continuous exposure demands for many KSA industries</span>
                  </li>
                </ul>
              </div>

              <h2>Revolutionary Sustainable Materials for Desert Conditions</h2>

              <h3>1. Advanced Recycled Polyester Systems</h3>
              <p>
                Next-generation recycled polyester specifically engineered for desert environments represents a breakthrough in sustainable performance materials:
              </p>
              <ul>
                <li><strong>Desert-Optimized rPET Blends:</strong>
                  <ul>
                    <li>Enhanced UV stabilizers providing 5x longer color retention than standard recycled polyester</li>
                    <li>Integrated cooling fibers that reflect infrared radiation, reducing surface temperature by up to 8°C</li>
                    <li>Anti-static treatments preventing dust and sand adhesion</li>
                    <li>Moisture-wicking channels engineered for rapid evaporation in low-humidity conditions</li>
                    <li>Abrasion resistance 300% higher than conventional fabrics</li>
                  </ul>
                </li>
                <li><strong>Circular Economy Integration:</strong>
                  <ul>
                    <li>Sourced from local plastic waste collection programs in KSA cities</li>
                    <li>Designed for complete recyclability at end-of-life</li>
                    <li>Reduces landfill burden while creating high-performance textiles</li>
                    <li>Supports Saudi Green Initiative waste reduction goals</li>
                  </ul>
                </li>
                <li><strong>Performance Characteristics:</strong>
                  <ul>
                    <li>UPF 50+ sun protection rating</li>
                    <li>Quick-dry technology: 80% faster than cotton</li>
                    <li>Wrinkle resistance maintaining professional appearance</li>
                    <li>Dimensional stability preventing shrinkage and distortion</li>
                    <li>Antimicrobial treatments reducing odor and bacterial growth</li>
                  </ul>
                </li>
              </ul>

              <h3>2. Bio-Based Desert Performance Fibers</h3>
              <p>
                Innovative plant-based materials engineered specifically for extreme heat and arid conditions:
              </p>
              <ul>
                <li><strong>Desert-Adapted Hemp Composites:</strong>
                  <ul>
                    <li>Naturally UV-resistant fibers requiring no chemical treatments</li>
                    <li>Exceptional breathability with moisture-wicking properties</li>
                    <li>Inherent antimicrobial characteristics preventing odor development</li>
                    <li>Becomes softer and more comfortable with each wash</li>
                    <li>Biodegradable at end-of-life, supporting circular economy principles</li>
                    <li>Requires 75% less water to produce than conventional cotton</li>
                  </ul>
                </li>
                <li><strong>Bamboo-Derived Technical Fibers:</strong>
                  <ul>
                    <li>Natural temperature regulation adapting to body heat</li>
                    <li>Hypoallergenic properties ideal for sensitive skin in harsh conditions</li>
                    <li>Rapid growth cycle making it highly renewable</li>
                    <li>Natural antibacterial properties reducing wash frequency</li>
                    <li>Silk-like smoothness preventing chafing during extended wear</li>
                  </ul>
                </li>
                <li><strong>Cactus-Based Leather Alternatives:</strong>
                  <ul>
                    <li>Developed from desert-native prickly pear cactus</li>
                    <li>Naturally adapted to extreme heat and UV exposure</li>
                    <li>Breathable yet durable for accessories and trim applications</li>
                    <li>Completely biodegradable and compostable</li>
                    <li>Supports local desert agriculture and innovation</li>
                  </ul>
                </li>
              </ul>

              <h3>3. Smart Cooling Textile Technologies</h3>
              <p>
                Advanced materials incorporating phase-change and cooling technologies for extreme heat management:
              </p>
              <ul>
                <li><strong>Phase Change Material (PCM) Integration:</strong>
                  <ul>
                    <li>Microcapsules that absorb and release heat to maintain optimal body temperature</li>
                    <li>Activated at 28°C to provide cooling during peak heat exposure</li>
                    <li>Rechargeable cooling effect lasting 4-6 hours per cycle</li>
                    <li>Washable and durable through 500+ wash cycles</li>
                    <li>Reduces heat stress and improves worker productivity</li>
                  </ul>
                </li>
                <li><strong>Infrared-Reflective Fibers:</strong>
                  <ul>
                    <li>Ceramic particles embedded in fiber structure reflect heat radiation</li>
                    <li>Reduces fabric surface temperature by 10-15°C in direct sunlight</li>
                    <li>Maintains cooling effect throughout garment lifespan</li>
                    <li>Compatible with all fabric types and colors</li>
                    <li>No impact on fabric hand feel or drape</li>
                  </ul>
                </li>
                <li><strong>Evaporative Cooling Systems:</strong>
                  <ul>
                    <li>Engineered fiber channels that enhance natural evaporation</li>
                    <li>Optimized for low-humidity desert conditions</li>
                    <li>Provides continuous cooling without external power</li>
                    <li>Integrated seamlessly into fabric construction</li>
                    <li>Maintains effectiveness even in extreme heat</li>
                  </ul>
                </li>
              </ul>

              <h3>4. Desert-Engineered Natural Fiber Blends</h3>
              <p>
                Sustainable natural fibers enhanced with desert-specific performance treatments:
              </p>
              <ul>
                <li><strong>Organic Cotton Desert Blends:</strong>
                  <ul>
                    <li>Specially treated organic cotton with enhanced UV resistance</li>
                    <li>Mercerized finish improving strength and luster</li>
                    <li>Natural enzyme treatments for improved moisture management</li>
                    <li>Blended with performance fibers for durability enhancement</li>
                    <li>GOTS-certified ensuring organic integrity throughout processing</li>
                  </ul>
                </li>
                <li><strong>Linen-Performance Composites:</strong>
                  <ul>
                    <li>European flax linen enhanced with technical performance features</li>
                    <li>Natural cooling properties amplified through specialized weaving</li>
                    <li>Exceptional breathability and moisture absorption</li>
                    <li>Naturally antimicrobial and odor-resistant</li>
                    <li>Becomes more comfortable with age and washing</li>
                  </ul>
                </li>
                <li><strong>Wool-Tech Hybrid Systems:</strong>
                  <ul>
                    <li>Merino wool blended with cooling synthetic fibers</li>
                    <li>Natural temperature regulation enhanced with technical performance</li>
                    <li>Odor resistance for extended wear periods</li>
                    <li>Moisture-wicking properties optimized for desert conditions</li>
                    <li>Sustainable sourcing from ethical wool producers</li>
                  </ul>
                </li>
              </ul>

              <h2>Specialized Desert Performance Features</h2>

              <h3>UV Protection and Color Stability</h3>
              <p>
                Advanced protection systems designed for extreme solar exposure:
              </p>
              <ul>
                <li><strong>Integrated UV Blockers:</strong> Titanium dioxide and zinc oxide nanoparticles providing UPF 50+ protection</li>
                <li><strong>Color-Lock Technology:</strong> Advanced dye systems preventing fading for 5+ years of desert exposure</li>
                <li><strong>Reflective Treatments:</strong> Specialized finishes reflecting harmful radiation while maintaining color integrity</li>
                <li><strong>Photostabilizers:</strong> Chemical additives preventing polymer degradation from UV exposure</li>
              </ul>

              <h3>Sand and Dust Resistance</h3>
              <p>
                Engineering solutions for particle protection and easy maintenance:
              </p>
              <ul>
                <li><strong>Smooth Surface Treatments:</strong> Reducing particle adhesion and enabling easy cleaning</li>
                <li><strong>Anti-Static Properties:</strong> Preventing dust attraction and accumulation</li>
                <li><strong>Tight Weave Structures:</strong> Preventing particle penetration while maintaining breathability</li>
                <li><strong>Self-Cleaning Surfaces:</strong> Photocatalytic treatments breaking down organic contaminants</li>
              </ul>

              <h3>Moisture Management Systems</h3>
              <p>
                Advanced hydration and comfort technologies for extreme heat:
              </p>
              <ul>
                <li><strong>Multi-Zone Ventilation:</strong> Strategic placement of high-breathability panels</li>
                <li><strong>Capillary Action Channels:</strong> Engineered fiber arrangements for rapid moisture transport</li>
                <li><strong>Evaporation Enhancement:</strong> Surface treatments accelerating moisture evaporation</li>
                <li><strong>Hydrophobic-Hydrophilic Balance:</strong> Optimal moisture management without water retention</li>
              </ul>

              <h2>Sustainability Metrics and Environmental Impact</h2>

              <h3>Life Cycle Assessment (LCA) Benefits</h3>
              <p>
                Comprehensive environmental impact analysis of sustainable desert materials:
              </p>
              <ul>
                <li><strong>Carbon Footprint Reduction:</strong>
                  <ul>
                    <li>60-80% lower CO2 emissions compared to conventional materials</li>
                    <li>Local sourcing reducing transportation emissions</li>
                    <li>Renewable energy integration in manufacturing processes</li>
                    <li>Carbon sequestration through bio-based material cultivation</li>
                  </ul>
                </li>
                <li><strong>Water Conservation:</strong>
                  <ul>
                    <li>90% reduction in water usage through recycled content</li>
                    <li>Closed-loop manufacturing systems</li>
                    <li>Drought-resistant crop utilization</li>
                    <li>Reduced washing frequency through performance features</li>
                  </ul>
                </li>
                <li><strong>Waste Reduction:</strong>
                  <ul>
                    <li>Zero-waste manufacturing processes</li>
                    <li>Complete recyclability at end-of-life</li>
                    <li>Biodegradable options returning to nature</li>
                    <li>Circular economy integration</li>
                  </ul>
                </li>
              </ul>

              <h3>Certification and Standards</h3>
              <p>
                Ensuring authenticity and performance through rigorous certification:
              </p>
              <ul>
                <li><strong>Global Recycled Standard (GRS):</strong> Verifying recycled content and supply chain responsibility</li>
                <li><strong>OEKO-TEX Standard 100:</strong> Ensuring chemical safety and human-ecological requirements</li>
                <li><strong>Cradle to Cradle Certified:</strong> Comprehensive sustainability assessment</li>
                <li><strong>GREENGUARD Certification:</strong> Low chemical emissions for indoor air quality</li>
                <li><strong>ISO 14001:</strong> Environmental management system compliance</li>
              </ul>

              <h2>Implementation Strategies for KSA Organizations</h2>

              <h3>Sector-Specific Applications</h3>
              <p>
                Tailored sustainable material solutions for different industries:
              </p>
              <ul>
                <li><strong>Oil and Gas Operations:</strong>
                  <ul>
                    <li>Flame-resistant sustainable materials for safety compliance</li>
                    <li>Chemical-resistant bio-based coatings</li>
                    <li>Anti-static properties for explosive atmosphere safety</li>
                    <li>High-visibility sustainable options for safety requirements</li>
                  </ul>
                </li>
                <li><strong>Construction and Infrastructure:</strong>
                  <ul>
                    <li>Heavy-duty sustainable fabrics for extreme wear conditions</li>
                    <li>Reinforced bio-based materials for tool and equipment resistance</li>
                    <li>High-visibility eco-friendly options for safety compliance</li>
                    <li>Cooling technologies for extended outdoor exposure</li>
                  </ul>
                </li>
                <li><strong>Transportation and Logistics:</strong>
                  <ul>
                    <li>Professional appearance sustainable materials for customer-facing roles</li>
                    <li>Comfort-enhanced fabrics for long driving periods</li>
                    <li>Easy-care sustainable options for frequent washing</li>
                    <li>Weather-resistant eco-materials for outdoor operations</li>
                  </ul>
                </li>
                <li><strong>Healthcare and Emergency Services:</strong>
                  <ul>
                    <li>Antimicrobial sustainable materials for hygiene requirements</li>
                    <li>Fluid-resistant bio-based treatments</li>
                    <li>Comfort-enhanced fabrics for long shifts</li>
                    <li>Easy-sterilization sustainable options</li>
                  </ul>
                </li>
              </ul>

              <h3>Cost-Benefit Analysis</h3>
              <p>
                Economic justification for sustainable desert material adoption:
              </p>
              <ul>
                <li><strong>Initial Investment Considerations:</strong>
                  <ul>
                    <li>Premium pricing: 15-40% higher than conventional materials</li>
                    <li>Certification and testing costs</li>
                    <li>Training and change management expenses</li>
                    <li>Supply chain adaptation requirements</li>
                  </ul>
                </li>
                <li><strong>Long-Term Savings:</strong>
                  <ul>
                    <li>Extended lifespan: 2-3x longer than conventional uniforms</li>
                    <li>Reduced replacement frequency and associated costs</li>
                    <li>Lower maintenance and cleaning expenses</li>
                    <li>Improved worker comfort and productivity</li>
                    <li>Reduced heat-related health issues and associated costs</li>
                    <li>Enhanced brand reputation and customer loyalty</li>
                  </ul>
                </li>
                <li><strong>ROI Timeline:</strong>
                  <ul>
                    <li>Break-even point typically achieved within 18-24 months</li>
                    <li>Cumulative savings of 25-40% over 5-year period</li>
                    <li>Additional value from sustainability marketing and CSR benefits</li>
                  </ul>
                </li>
              </ul>

              <h2>Future Innovations and Emerging Technologies</h2>

              <h3>Next-Generation Sustainable Materials</h3>
              <p>
                Breakthrough technologies on the horizon for desert uniform applications:
              </p>
              <ul>
                <li><strong>Lab-Grown Sustainable Fibers:</strong>
                  <ul>
                    <li>Biofabricated materials grown in controlled environments</li>
                    <li>Customizable properties for specific desert conditions</li>
                    <li>Zero agricultural land use requirements</li>
                    <li>Potential for carbon-negative production processes</li>
                  </ul>
                </li>
                <li><strong>Nanotechnology Integration:</strong>
                  <ul>
                    <li>Self-cleaning surfaces through photocatalytic nanoparticles</li>
                    <li>Enhanced UV protection through nanostructured materials</li>
                    <li>Improved durability through nano-reinforcement</li>
                    <li>Smart responsive properties adapting to environmental conditions</li>
                  </ul>
                </li>
                <li><strong>Biomimetic Materials:</strong>
                  <ul>
                    <li>Desert animal-inspired cooling mechanisms</li>
                    <li>Plant-based water management systems</li>
                    <li>Natural UV protection strategies</li>
                    <li>Adaptive camouflage and color-changing properties</li>
                  </ul>
                </li>
              </ul>

              <h3>Smart Integration Technologies</h3>
              <p>
                Intelligent systems enhancing sustainable material performance:
              </p>
              <ul>
                <li><strong>IoT-Enabled Monitoring:</strong> Embedded sensors tracking material performance and wear patterns</li>
                <li><strong>Predictive Maintenance:</strong> AI systems optimizing replacement schedules and care protocols</li>
                <li><strong>Performance Analytics:</strong> Real-time data on comfort, protection, and durability metrics</li>
                <li><strong>Adaptive Systems:</strong> Materials that respond automatically to environmental conditions</li>
              </ul>

              <h2>Conclusion: Pioneering Sustainable Desert Uniform Innovation</h2>
              <p>
                The development of sustainable materials for desert environments represents a convergence of environmental responsibility, technological innovation, and practical performance. As Saudi Arabia continues its transformation under Vision 2030, these advanced materials offer a pathway to achieving sustainability goals while maintaining the highest standards of worker protection and comfort in one of the world's most challenging climates.
              </p>
              <p>
                The success of sustainable desert uniforms depends on understanding the unique demands of the Saudi environment and engineering materials that not only meet these challenges but exceed conventional performance standards. Through continued innovation, strategic partnerships, and commitment to sustainability, KSA organizations can lead the global transition to environmentally responsible uniform programs while ensuring optimal protection and comfort for their workforce.
              </p>
              <p>
                The future of desert uniforms lies in the seamless integration of sustainability and performance, creating materials that protect both the wearer and the environment. As these technologies mature and scale, they will become increasingly accessible, making sustainable desert uniforms the standard rather than the exception across Saudi Arabia's diverse industries.
              </p>

              <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Sustainable Desert Uniform Selection Criteria</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Verify UPF 50+ sun protection rating for extreme UV conditions</li>
                  <li>Ensure temperature regulation features for heat management</li>
                  <li>Confirm moisture-wicking and quick-dry capabilities</li>
                  <li>Validate abrasion resistance for sand and dust exposure</li>
                  <li>Check sustainability certifications (GRS, GOTS, OEKO-TEX)</li>
                  <li>Assess durability and expected lifespan in desert conditions</li>
                  <li>Evaluate comfort features for extended wear periods</li>
                  <li>Consider end-of-life recyclability and disposal options</li>
                  <li>Review supplier sustainability credentials and practices</li>
                  <li>Calculate total cost of ownership including maintenance and replacement</li>
                </ul>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-8 dark:border-gray-700">
                <h3 className="text-xl font-semibold">About the Author</h3>
                <p className="text-gray-600 dark:text-gray-400">Dr. Amira Al-Rashid is a Materials Science Engineer and Sustainability Consultant specializing in extreme environment textiles. With over 16 years of experience in desert climate material development, she has pioneered numerous innovations in sustainable uniform technologies for the Middle East. Dr. Al-Rashid holds advanced degrees in Materials Engineering and Environmental Science and has published extensively on sustainable textile technologies for harsh climates.</p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Share Section */}
              <div className="rounded-xl border border-gray-200 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Share This Guide</h3>
                <div className="flex gap-2">
                  <button aria-label="Share on social media" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/80">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="rounded-xl border border-gray-200 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Related Sustainability Topics</h3>
                <div className="space-y-4">
                  <Link href="/blog/climate-responsive-uniform-technology" className="group block">
                    <div className="font-medium text-primary group-hover:underline dark:text-sky-400">Climate-Responsive Uniform Technology</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Adapting to environmental challenges.</div>
                  </Link>
                  <Link href="/blog/sustainable-fabric-options-for-eco-conscious-airlines-in-ksa" className="group block">
                    <div className="font-medium text-primary group-hover:underline dark:text-sky-400">Sustainable Aviation Fabrics</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Eco-friendly options for airlines.</div>
                  </Link>
                  <Link href="/blog/climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces" className="group block">
                    <div className="font-medium text-primary group-hover:underline dark:text-sky-400">Cooling Fabrics for Hot Workplaces</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Breathable solutions for extreme heat.</div>
                  </Link>
                </div>
              </div>

              {/* Call to Action */}
              <div className="rounded-xl bg-primary/5 p-6 text-center shadow-lg dark:bg-primary/20">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Need Sustainable Desert Uniforms?</h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Get expert consultation on eco-friendly uniform materials designed for Saudi Arabia's desert climate.
                </p>
                <Link
                  href="/contact/quote"
                  className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-primary/80"
                >
                  Request Sustainable Material Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
