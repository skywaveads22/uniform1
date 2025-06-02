import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, Share2, HardHat, Shield, AlertTriangle, CheckCircle } from 'lucide-react'

export const generateMetadata = (): Metadata => {
  return {
    title: `Choosing the Right Workwear for Saudi Arabia's Industrial Sector: Safety First | UniformSA`,
    description: `Comprehensive guide to selecting industrial workwear in Saudi Arabia. Expert insights on safety standards, climate considerations, and sector-specific requirements for optimal worker protection.`,
    keywords: `industrial workwear Saudi Arabia, safety workwear KSA, industrial uniforms safety first, Saudi industrial safety clothing, workwear selection guide, industrial PPE Saudi Arabia, safety standards workwear, industrial sector uniforms, flame resistant workwear Saudi Arabia`,
    openGraph: {
      images: ['/images/industrial/Safety_workwear_PPE_apparel.jpeg'],
      title: `Choosing the Right Workwear for Saudi Arabia's Industrial Sector: Safety First`,
      description: `Expert guide to selecting industrial workwear that prioritizes safety while addressing Saudi Arabia's unique climate and regulatory requirements.`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Choosing the Right Workwear for Saudi Arabia's Industrial Sector: Safety First`,
      description: `Expert guide to selecting industrial workwear that prioritizes safety in Saudi Arabia's challenging conditions.`,
      images: ['/images/industrial/Safety_workwear_PPE_apparel.jpeg'],
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
            <span className="text-gray-700 dark:text-white">Choosing the Right Workwear for Saudi Arabia's Industrial Sector</span>
          </nav>

          {/* Featured Image */}
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/images/industrial/Safety_workwear_PPE_apparel.jpeg"
              alt="Industrial safety workwear and PPE for Saudi Arabia's industrial sector"
              fill
              className="object-cover"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Choosing the Right Workwear for Saudi Arabia's Industrial Sector: Safety First
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 2, 2025</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Industrial Safety, Workwear</span>
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
                Saudi Arabia's industrial sector faces unique challenges in workwear selection, from extreme temperatures exceeding 50°C to stringent safety requirements across diverse industries. With the Kingdom's Vision 2030 driving massive industrial expansion, choosing appropriate workwear has become a critical strategic decision directly impacting worker safety, productivity, and regulatory compliance.
              </p>

              <h2>The Critical Importance of Proper Industrial Workwear</h2>
              <p>
                In Saudi Arabia's rapidly expanding industrial landscape, workwear serves as the primary defense against occupational hazards while ensuring compliance with both national and international safety standards:
              </p>
              <ul>
                <li><strong>Worker Protection:</strong> First line of defense against industrial hazards and environmental extremes</li>
                <li><strong>Regulatory Compliance:</strong> Meeting SASO standards and international safety requirements</li>
                <li><strong>Productivity Enhancement:</strong> Comfortable workers demonstrate 20-25% higher efficiency rates</li>
                <li><strong>Cost Reduction:</strong> Proper workwear reduces workplace injuries by up to 60%</li>
                <li><strong>Brand Reputation:</strong> Professional appearance enhances company image and worker pride</li>
              </ul>

              <div className="bg-red-50 p-6 rounded-lg my-8 dark:bg-red-900/20">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Saudi Industrial Safety Statistics 2025
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary block">67%</span>
                    <span>Reduction in workplace injuries with proper workwear implementation</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary block">SAR 890M</span>
                    <span>Annual savings across Saudi industrial sector through enhanced safety protocols</span>
                  </div>
                </div>
              </div>

              <h2>Essential Selection Criteria for Saudi Industrial Workwear</h2>
              <p>
                Selecting appropriate industrial workwear requires careful consideration of multiple factors specific to Saudi Arabia's operating environment:
              </p>

              <h3>Climate Adaptation Requirements</h3>
              <ul>
                <li><strong>Heat Resistance:</strong> Materials capable of withstanding ambient temperatures above 50°C</li>
                <li><strong>Moisture Management:</strong> Advanced wicking properties to handle high perspiration rates</li>
                <li><strong>UV Protection:</strong> Minimum UPF 30 rating for outdoor industrial operations</li>
                <li><strong>Breathability:</strong> Fabric permeability allowing air circulation while maintaining protection</li>
                <li><strong>Quick-Dry Technology:</strong> Rapid moisture evaporation to prevent heat stress</li>
              </ul>

              <h3>Safety Performance Standards</h3>
              <ul>
                <li><strong>Flame Resistance:</strong> Compliance with NFPA 2112 or equivalent standards</li>
                <li><strong>Arc Flash Protection:</strong> ASTM F1506 certification for electrical work environments</li>
                <li><strong>Chemical Resistance:</strong> Protection against specific industrial chemicals and solvents</li>
                <li><strong>High Visibility:</strong> ANSI/ISEA 107 compliance for construction and traffic areas</li>
                <li><strong>Cut Resistance:</strong> ANSI/ISEA 105 ratings for handling sharp materials</li>
              </ul>

              <h2>Sector-Specific Workwear Requirements</h2>
              <p>
                Different industrial sectors in Saudi Arabia require specialized workwear solutions:
              </p>

              <h3>Oil & Gas Industry</h3>
              <ul>
                <li><strong>Flame-Resistant (FR) Clothing:</strong> Mandatory for all personnel in hydrocarbon environments</li>
                <li><strong>Anti-Static Properties:</strong> Prevention of static electricity buildup in explosive atmospheres</li>
                <li><strong>Chemical Protection:</strong> Resistance to crude oil, refined products, and drilling fluids</li>
                <li><strong>Multi-Layer Systems:</strong> Integrated protection for varying risk levels</li>
                <li><strong>Emergency Visibility:</strong> High-contrast colors and reflective elements for emergency response</li>
              </ul>

              <h3>Petrochemical Manufacturing</h3>
              <ul>
                <li><strong>Chemical Splash Protection:</strong> Specialized coatings resistant to acids, bases, and solvents</li>
                <li><strong>Heat-Resistant Materials:</strong> Protection against process heat and thermal radiation</li>
                <li><strong>Sealed Seam Construction:</strong> Prevention of chemical penetration through stitching</li>
                <li><strong>Respiratory Integration:</strong> Compatibility with breathing apparatus and gas detection equipment</li>
                <li><strong>Decontamination Capability:</strong> Easy cleaning and decontamination procedures</li>
              </ul>

              <h3>Construction and Infrastructure</h3>
              <ul>
                <li><strong>Impact Protection:</strong> Reinforced areas for protection against falling objects</li>
                <li><strong>Abrasion Resistance:</strong> Durable materials for rough construction environments</li>
                <li><strong>Weather Protection:</strong> Multi-season capability for year-round construction projects</li>
                <li><strong>Tool Integration:</strong> Specialized pockets and attachment points for construction tools</li>
                <li><strong>Mobility Enhancement:</strong> Ergonomic design allowing full range of motion</li>
              </ul>

              <h2>Advanced Fabric Technologies for Saudi Conditions</h2>
              <p>
                Modern industrial workwear incorporates sophisticated fabric technologies designed for extreme conditions:
              </p>

              <h3>High-Performance Synthetic Fibers</h3>
              <ul>
                <li><strong>Nomex® Aramid:</strong> Inherent flame resistance with excellent thermal protection</li>
                <li><strong>Kevlar® Reinforcement:</strong> Cut and puncture resistance for high-risk applications</li>
                <li><strong>Modacrylic Blends:</strong> Flame resistance with improved comfort and durability</li>
                <li><strong>PBI (Polybenzimidazole):</strong> Superior heat resistance for extreme temperature environments</li>
                <li><strong>PTFE Membranes:</strong> Chemical resistance with breathability for comfort</li>
              </ul>

              <h3>Natural Fiber Enhancements</h3>
              <ul>
                <li><strong>FR-Treated Cotton:</strong> Natural comfort with flame-resistant chemical treatments</li>
                <li><strong>Wool Blends:</strong> Natural flame resistance with moisture management properties</li>
                <li><strong>Hemp Composites:</strong> Sustainable options with natural antimicrobial properties</li>
                <li><strong>Bamboo Integration:</strong> Cooling properties with natural UV protection</li>
                <li><strong>Linen Reinforcement:</strong> Enhanced breathability for extreme heat conditions</li>
              </ul>

              <h2>Regulatory Compliance in Saudi Arabia</h2>
              <p>
                Industrial workwear in Saudi Arabia must comply with comprehensive regulatory frameworks:
              </p>

              <h3>National Standards (SASO)</h3>
              <ul>
                <li><strong>SASO 2663:</strong> Personal protective equipment general requirements</li>
                <li><strong>SASO 2664:</strong> Protective clothing against heat and flame</li>
                <li><strong>SASO 2665:</strong> High-visibility warning clothing specifications</li>
                <li><strong>SASO 2666:</strong> Chemical protective clothing requirements</li>
                <li><strong>SASO 2667:</strong> Protective clothing for welding and allied processes</li>
              </ul>

              <h3>International Standards Integration</h3>
              <ul>
                <li><strong>ISO 11612:</strong> Protective clothing against heat and flame</li>
                <li><strong>ISO 14116:</strong> Limited flame spread materials testing</li>
                <li><strong>EN 343:</strong> Protective clothing against rain and moisture</li>
                <li><strong>ASTM F1506:</strong> Arc-rated protective clothing performance</li>
                <li><strong>NFPA 2112:</strong> Flame-resistant garments for industrial personnel</li>
              </ul>

              <h2>Implementation Best Practices</h2>
              <p>
                Successful workwear programs require systematic implementation approaches:
              </p>

              <h3>Risk Assessment and Selection</h3>
              <ul>
                <li><strong>Hazard Identification:</strong> Comprehensive workplace risk analysis</li>
                <li><strong>Exposure Mapping:</strong> Understanding duration and intensity of hazard exposure</li>
                <li><strong>Performance Testing:</strong> Validation of workwear performance under actual conditions</li>
                <li><strong>User Feedback Integration:</strong> Worker input on comfort and functionality</li>
                <li><strong>Continuous Monitoring:</strong> Ongoing assessment of workwear effectiveness</li>
              </ul>

              <h2>Cost-Benefit Analysis</h2>
              <p>
                Investment in quality industrial workwear delivers measurable returns:
              </p>
              <ul>
                <li><strong>Injury Reduction:</strong> 60-70% decrease in workplace injury costs</li>
                <li><strong>Insurance Savings:</strong> Lower premiums through improved safety records</li>
                <li><strong>Productivity Gains:</strong> 15-25% improvement in worker efficiency</li>
                <li><strong>Enhanced Reputation:</strong> Improved company image and stakeholder confidence</li>
                <li><strong>Regulatory Compliance:</strong> Avoidance of fines and legal issues</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Choosing the right workwear for Saudi Arabia's industrial sector requires a comprehensive understanding of climate challenges, safety requirements, and regulatory standards. As the Kingdom continues its industrial transformation under Vision 2030, investment in appropriate workwear becomes increasingly critical for maintaining competitive advantage while ensuring worker safety and well-being.
              </p>
              <p>
                The safety-first approach to workwear selection not only protects workers but also delivers substantial operational and financial benefits. Organizations that prioritize proper workwear selection position themselves as industry leaders while creating safer, more productive work environments in Saudi Arabia's challenging industrial landscape.
              </p>

              <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
                <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/author/default-author.jpg"
                    alt="Industrial Safety Expert"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-medium">Eng. Omar Al-Ghamdi</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Eng. Omar Al-Ghamdi is an industrial safety specialist with over 18 years of experience in Saudi Arabia's oil, gas, and petrochemical sectors. He holds certifications in occupational safety and specializes in developing comprehensive workwear programs for high-risk industrial environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 bg-primary/5 p-6 rounded-xl dark:bg-primary/20">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Enhance Your Industrial Safety Program
                </h3>
                <p className="mb-4">
                  Discover how the right workwear selection can transform your industrial safety standards while ensuring compliance with Saudi regulations. Our industrial safety experts provide comprehensive workwear solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  Consult Our Experts
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Share Section */}
              <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-4 text-lg font-semibold">Share Article</h3>
                <div className="flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-4 text-lg font-semibold">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/climate-control-breathable-and-cooling-fabrics-for-hot-saudi-workplaces" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Climate Control: Breathable & Cooling Fabrics for Hot Workplaces</div>
                    <div className="text-xs text-gray-500">Advanced cooling technologies for extreme heat conditions</div>
                  </Link>
                  <Link href="/blog/ensuring-compliance-with-saudi-labor-laws-regarding-protective-clothing" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">Ensuring Compliance with Saudi Labor Laws</div>
                    <div className="text-xs text-gray-500">Regulatory requirements for protective clothing</div>
                  </Link>
                  <Link href="/blog/the-importance-of-proper-fit-for-safety-and-comfort-in-industrial-uniforms" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">The Importance of Proper Fit in Industrial Uniforms</div>
                    <div className="text-xs text-gray-500">Safety and comfort through optimal sizing</div>
                  </Link>
                  <Link href="/blog" className="group block pt-2">
                    <div className="text-sm font-medium group-hover:text-primary">View All Resources</div>
                    <div className="text-xs text-gray-500">Explore our complete knowledge library</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}