import { Metadata } from 'next';
import Image from 'next/image';
import { CTA } from '@/components/CTA';
import { RelatedArticles } from '@/components/RelatedArticles';
import { ShareButtons } from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Sustainable and Ethical Uniform Solutions for the Saudi Public Sector | Uniform Junction',
  description: 'Comprehensive guide to implementing sustainable and ethical uniform programs for Saudi government entities aligned with Vision 2030 environmental and social responsibility goals.',
  keywords: 'sustainable public sector uniforms Saudi Arabia, ethical government workwear KSA, eco-friendly uniform programs, government sustainable procurement, ethical uniform supply chain, Saudi green initiatives uniforms, public sector sustainable textiles, environmental responsibility government uniforms, Saudi Vision 2030 sustainability, ethical government apparel standards',
  openGraph: {
    title: 'Sustainable and Ethical Uniform Solutions for the Saudi Public Sector',
    description: 'How Saudi government entities can implement uniform programs that align with Vision 2030 sustainability goals while maintaining quality, durability, and cultural authenticity.',
    images: ['/images/government/Public_sector_uniforms.jpg'],
  },
};

export default function BlogPost() {
  return (
    <main className="flex-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              Sustainable and Ethical Uniform Solutions for the Saudi Public Sector
            </h1>
            <div className="mt-6 text-base text-neutral-600">
              <time dateTime="2025-06-10" className="flex items-center">
                <span>June 10, 2025</span>
              </time>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <div className="relative bg-neutral-50 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure>
                <Image
                  src="/images/government/Public_sector_uniforms.jpg"
                  alt="Saudi public sector workers wearing sustainable uniforms made from eco-friendly materials"
                  width={1408}
                  height={960}
                  className="rounded-2xl"
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-neutral-500">
                  <span>Saudi government entities are increasingly adopting sustainable and ethical uniform solutions aligned with Vision 2030 environmental goals</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:flex lg:gap-x-14">
            <div className="lg:flex-auto">
              <p className="text-lg leading-8 text-neutral-600">
                As Saudi Arabia advances its ambitious Vision 2030 sustainability goals, government entities across the Kingdom are increasingly examining how their operational choices—including uniform programs—can contribute to broader environmental and social responsibility objectives. This comprehensive guide explores how the Saudi public sector can implement uniform solutions that balance sustainability and ethical sourcing with the exceptional quality, cultural authenticity, and professional appearance essential to government operations. From material selection to circular economy initiatives, these approaches demonstrate how thoughtful uniform programs can align with national environmental priorities while maintaining the distinct identity and authority of public institutions.
              </p>

              <div className="mt-10 max-w-3xl text-base leading-7 text-neutral-700">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  The Saudi Public Sector Context
                </h2>
                <p className="mt-6">
                  Understanding the unique landscape of Saudi government operations provides essential perspective for sustainable uniform initiatives:
                </p>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Vision 2030 and Sustainability Transformation
                </h3>
                <p className="mt-6">
                  Saudi Arabia's national development strategy places significant emphasis on environmental responsibility:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Saudi Green Initiative:</strong> National framework guiding environmental practices across sectors</li>
                  <li><strong>Circular Carbon Economy:</strong> Framework for reducing, reusing, recycling, and removing carbon</li>
                  <li><strong>Renewable Energy Targets:</strong> Ambitious goals for transitioning to clean energy sources</li>
                  <li><strong>Public Sector Leadership:</strong> Government entities as exemplars of sustainable practices</li>
                  <li><strong>Procurement Transformation:</strong> Evolving practices to prioritize sustainability in government purchasing</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl bg-neutral-50 p-8">
                  <h3 className="text-xl font-semibold text-neutral-950">Saudi Public Sector Scale</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-900">Government Workforce</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li>1.5+ million public sector employees</li>
                        <li>30+ government ministries</li>
                        <li>100+ government agencies and authorities</li>
                        <li>Diverse functions requiring specialized uniforms</li>
                        <li>Significant uniform procurement volume</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900">Uniform Requirements</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li>High durability for daily operational use</li>
                        <li>Climate adaptability for Saudi conditions</li>
                        <li>Cultural appropriateness and modesty</li>
                        <li>Professional appearance conveying authority</li>
                        <li>Specific technical requirements by function</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Government Uniform Categories
                </h3>
                <p className="mt-6">
                  The diversity of public sector functions creates varied uniform needs:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Security and Defense:</strong> Military, police, border security, and civil defense</li>
                  <li><strong>Public Service:</strong> Municipal workers, inspectors, and public-facing administrative staff</li>
                  <li><strong>Technical Services:</strong> Utility workers, infrastructure maintenance, and technical specialists</li>
                  <li><strong>Healthcare:</strong> Government hospital and clinic staff across medical functions</li>
                  <li><strong>Ceremonial:</strong> Formal attire for official government occasions and diplomatic functions</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Sustainable Materials and Design Approaches
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Eco-Friendly Fabric Options
                </h3>
                <p className="mt-6">
                  Sustainable textile alternatives suitable for government uniform applications:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Organic Cotton:</strong> Grown without harmful pesticides or synthetic fertilizers</li>
                  <li><strong>Recycled Polyester:</strong> Made from post-consumer plastic, reducing waste</li>
                  <li><strong>TENCEL™ Lyocell:</strong> Produced from sustainably harvested wood in a closed-loop process</li>
                  <li><strong>Hemp Blends:</strong> Naturally pest-resistant fibers requiring minimal water</li>
                  <li><strong>Recycled Nylon:</strong> Regenerated from industrial waste and discarded fishing nets</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Sustainable fabrics now provide performance characteristics required for demanding public sector applications</p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Performance Requirements for Government Applications
                </h3>
                <p className="mt-6">
                  Sustainable uniforms must meet exacting public sector performance standards:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Durability Factors:</strong> Extended lifespan for daily operational use</li>
                  <li><strong>Climate Adaptability:</strong> Functionality in Saudi Arabia's challenging weather conditions</li>
                  <li><strong>Professional Appearance:</strong> Maintaining authoritative presence and public recognition</li>
                  <li><strong>Function-Specific Features:</strong> Technical requirements for specialized roles</li>
                  <li><strong>Maintenance Efficiency:</strong> Easy-care properties for institutional laundering</li>
                </ul>

                <div className="bg-neutral-100 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-semibold text-neutral-950 mb-2">Case Study: Riyadh Municipality Sustainable Uniform Program</h4>
                  <p className="text-neutral-700">
                    Riyadh Municipality implemented a comprehensive sustainable uniform program for its 5,000+ field staff, featuring recycled polyester blends with enhanced durability properties.
                  </p>
                  <p className="text-neutral-700 mt-4">
                    The program includes uniforms with 60% recycled content, water-saving dyeing processes, and designs optimized for the Saudi climate. Each garment includes durability features extending lifespan by approximately 40% compared to previous uniforms. The municipality reports that despite a 15% higher initial investment, the total program cost has decreased by 22% over a three-year period due to reduced replacement requirements and streamlined inventory management.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Government Identity and Authority in Sustainable Design
                </h3>
                <p className="mt-6">
                  Balancing environmental considerations with institutional presence:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Authority Signaling:</strong> Maintaining clear visual identification of government role</li>
                  <li><strong>Cultural Authenticity:</strong> Honoring Saudi traditions in sustainable implementations</li>
                  <li><strong>Professional Gravitas:</strong> Ensuring eco-friendly options maintain appropriate formality</li>
                  <li><strong>Institutional Branding:</strong> Consistent identity elements across sustainable materials</li>
                  <li><strong>Public Trust Factors:</strong> Appearance supporting citizen confidence in government functions</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Ethical Sourcing and Social Responsibility
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Supply Chain Transparency and Standards
                </h3>
                <p className="mt-6">
                  Ensuring ethical practices throughout uniform production:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Worker Welfare Verification:</strong> Supply chain auditing for fair labor practices</li>
                  <li><strong>Living Wage Requirements:</strong> Ensuring fair compensation throughout production</li>
                  <li><strong>Safe Working Conditions:</strong> Standards for manufacturing facility safety</li>
                  <li><strong>Child Labor Prevention:</strong> Zero tolerance policies and verification processes</li>
                  <li><strong>Discrimination Protections:</strong> Equal opportunity throughout uniform production</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Ethical manufacturing includes fair labor practices, safe working conditions, and environmental responsibility</p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Certification Systems and Verification
                </h3>
                <p className="mt-6">
                  Third-party standards ensuring authentic sustainability and ethics:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Global Organic Textile Standard (GOTS):</strong> Comprehensive certification for organic fibers</li>
                  <li><strong>OEKO-TEX® Standard 100:</strong> Testing for harmful substances in textiles</li>
                  <li><strong>Fair Trade Certification:</strong> Verification of fair labor and pricing practices</li>
                  <li><strong>Bluesign® System:</strong> Resource productivity, consumer safety, and pollution reduction</li>
                  <li><strong>SA8000 Certification:</strong> International standard for decent working conditions</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Local Production and Economic Development
                </h3>
                <p className="mt-6">
                  Supporting Saudi economic objectives through uniform production:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Saudi Manufacturers:</strong> Developing local capacity for sustainable production</li>
                  <li><strong>Knowledge Transfer:</strong> Building domestic expertise in sustainable textiles</li>
                  <li><strong>Job Creation:</strong> Employment opportunities in ethical manufacturing</li>
                  <li><strong>Supply Chain Localization:</strong> Reducing transportation impacts and import dependency</li>
                  <li><strong>Research and Innovation:</strong> Developing Saudi-specific sustainable solutions</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Lifecycle Management and Circular Economy
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  End-to-End Program Development
                </h3>
                <p className="mt-6">
                  Comprehensive approaches addressing the entire uniform lifecycle:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Lifecycle Assessment:</strong> Evaluating environmental impact across all stages</li>
                  <li><strong>Design for Longevity:</strong> Durability features extending useful life</li>
                  <li><strong>Repair Systems:</strong> Maintenance programs prolonging uniform serviceability</li>
                  <li><strong>End-of-Life Planning:</strong> Predetermined pathways for uniform retirement</li>
                  <li><strong>Data Tracking:</strong> Monitoring environmental metrics throughout lifecycle</li>
                </ul>

                <div className="bg-neutral-100 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-semibold text-neutral-950 mb-2">Circular Economy Impact: Ministry of Energy Pilot Program</h4>
                  <ul className="list-disc pl-5 text-neutral-700">
                    <li><strong>42% reduction</strong> in carbon footprint compared to conventional uniform program</li>
                    <li><strong>2,750kg of textiles</strong> diverted from landfill through recycling partnership</li>
                    <li><strong>65% water reduction</strong> in manufacturing through advanced dyeing processes</li>
                    <li><strong>30% extended lifespan</strong> achieved through durability improvements</li>
                    <li><strong>18% total cost reduction</strong> over 4-year implementation period</li>
                    <li><strong>95% employee satisfaction</strong> with comfort and performance of sustainable uniforms</li>
                  </ul>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Uniform Recycling and Upcycling Initiatives
                </h3>
                <p className="mt-6">
                  Innovative approaches to uniform end-of-life management:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Fiber-to-Fiber Recycling:</strong> Breaking down old uniforms for new textile production</li>
                  <li><strong>Secure Destruction Programs:</strong> Responsible handling of official uniforms</li>
                  <li><strong>Creative Repurposing:</strong> Converting retired uniforms into non-uniform products</li>
                  <li><strong>Material Recovery:</strong> Extracting valuable components for reuse</li>
                  <li><strong>Energy Recovery:</strong> Last-resort options for non-recyclable materials</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Specialized processes enable secure and sustainable recycling of official government uniforms</p>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Implementation Strategies for Government Entities
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Sustainable Procurement Practices
                </h3>
                <p className="mt-6">
                  Institutional approaches to responsible uniform sourcing:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Green Procurement Guidelines:</strong> Environmental and ethical criteria for uniform tenders</li>
                  <li><strong>Total Cost of Ownership Models:</strong> Evaluation frameworks beyond initial purchase price</li>
                  <li><strong>Supplier Prequalification:</strong> Sustainability screening in vendor selection</li>
                  <li><strong>Performance-Based Contracts:</strong> Agreements including environmental objectives</li>
                  <li><strong>Collaborative Supplier Development:</strong> Working with manufacturers to improve practices</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Policy Development and Integration
                </h3>
                <p className="mt-6">
                  Institutional frameworks supporting sustainable uniform programs:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Sustainability Policy Integration:</strong> Including uniforms in broader environmental strategies</li>
                  <li><strong>Leadership Endorsement:</strong> Senior government support for sustainable initiatives</li>
                  <li><strong>Cross-Departmental Collaboration:</strong> Coordinated approaches across functions</li>
                  <li><strong>Employee Education:</strong> Staff awareness of sustainability objectives</li>
                  <li><strong>Progress Monitoring:</strong> Regular assessment of environmental performance</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Phased Implementation Approaches
                </h3>
                <p className="mt-6">
                  Strategic pathways for government entity adoption:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Pilot Programs:</strong> Controlled testing with specific departments or functions</li>
                  <li><strong>High-Impact Priority Areas:</strong> Initial focus on most visible or highest-volume uniforms</li>
                  <li><strong>Natural Replacement Cycles:</strong> Sustainable alternatives introduced during scheduled updates</li>
                  <li><strong>Department-by-Department Transition:</strong> Gradual implementation across the organization</li>
                  <li><strong>Collaborative Procurement:</strong> Multi-agency partnerships for greater impact</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Economic Considerations and Performance Metrics
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Total Cost of Ownership Analysis
                </h3>
                <p className="mt-6">
                  Comprehensive economic assessment beyond initial purchase:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Extended Lifespan Benefits:</strong> Reduced replacement frequency offsetting higher initial costs</li>
                  <li><strong>Maintenance Efficiency:</strong> Potential savings in laundering and care</li>
                  <li><strong>Administrative Streamlining:</strong> Simplified inventory management with durable products</li>
                  <li><strong>Employee Productivity:</strong> Performance benefits of high-quality sustainable uniforms</li>
                  <li><strong>Waste Management Savings:</strong> Reduced disposal costs through recycling programs</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Performance Measurement and Reporting
                </h3>
                <p className="mt-6">
                  Tracking and communicating sustainability achievements:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Environmental Impact Metrics:</strong> Carbon footprint, water usage, waste reduction</li>
                  <li><strong>Social Responsibility Indicators:</strong> Labor standards, community impact, inclusivity</li>
                  <li><strong>Economic Performance Measures:</strong> Cost efficiency, lifecycle value, procurement savings</li>
                  <li><strong>Employee Experience Factors:</strong> Comfort, functionality, and satisfaction data</li>
                  <li><strong>Public Communication:</strong> Transparency reporting on sustainability achievements</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Future Directions for Saudi Public Sector Uniforms
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Emerging Technologies and Innovations
                </h3>
                <p className="mt-6">
                  Next-generation possibilities for government uniform sustainability:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Regenerative Agriculture Fibers:</strong> Materials that actively restore ecosystems</li>
                  <li><strong>Waterless Dyeing Processes:</strong> Dramatically reduced resource consumption</li>
                  <li><strong>Bio-Based Synthetic Alternatives:</strong> Non-petroleum polymers from renewable sources</li>
                  <li><strong>Digital Passport Systems:</strong> Technology tracking uniform lifecycle data</li>
                  <li><strong>Advanced Recycling Technologies:</strong> Chemical processes enabling true circular systems</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Next-generation sustainable uniform technologies offer expanded possibilities for government applications</p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Vision 2030 Alignment and National Leadership
                </h3>
                <p className="mt-6">
                  Connecting uniform programs to national sustainability objectives:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Saudi Green Initiative Contribution:</strong> Uniform programs supporting national targets</li>
                  <li><strong>Public Sector Leadership:</strong> Government setting examples for private industry</li>
                  <li><strong>National Capability Development:</strong> Building Saudi expertise in sustainable textiles</li>
                  <li><strong>Cross-Sector Collaboration:</strong> Government partnerships with research and industry</li>
                  <li><strong>International Best Practice Exchange:</strong> Knowledge sharing with global leaders</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Conclusion
                </h2>
                <p className="mt-6">
                  Sustainable and ethical uniform solutions represent a significant opportunity for Saudi public sector entities to demonstrate environmental leadership while enhancing operational efficiency and institutional identity. By thoughtfully selecting environmentally responsible materials, implementing ethical sourcing practices, and adopting circular economy principles, government organizations can dramatically reduce the environmental impact of this essential operational element.
                </p>
                <p className="mt-6">
                  The most successful implementations balance sustainability with the exceptional quality, cultural authenticity, and professional appearance required for public sector functions. These programs recognize that environmental responsibility need not compromise the authority, recognition, and functionality essential to government operations.
                </p>
                <p className="mt-6">
                  As Saudi Arabia continues advancing its ambitious Vision 2030 sustainability agenda, government uniform programs offer a visible and meaningful demonstration of the public sector's commitment to environmental stewardship. These initiatives contribute to the broader goal of establishing the Kingdom as a global leader in sustainable development while preserving the distinctive identity and effectiveness of Saudi government institutions.
                </p>

                <div className="mt-16">
                  <ShareButtons 
                    title="Sustainable and Ethical Uniform Solutions for the Saudi Public Sector" 
                    url="https://uniformjunction.sa/blog/sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-72 lg:flex-none lg:relative">
              <RelatedArticles
                articles={[
                  {
                    title: "Sustainable Uniform Programs for Eco-Conscious Hotels in Saudi Arabia",
                    href: "/blog/sustainable-uniform-programs-for-eco-conscious-hotels-in-saudi-arabia",
                  },
                  {
                    title: "The Significance of Uniforms in Projecting Government Authority and Trust in KSA",
                    href: "/blog/the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa",
                  },
                  {
                    title: "The Role of Uniforms in Building Esprit de Corps among Government Teams",
                    href: "/blog/the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams",
                  },
                  {
                    title: "Uniform Considerations for Government Representatives Attending International Events",
                    href: "/blog/uniform-considerations-for-government-representatives-attending-international-events",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <CTA />
      </div>
    </main>
  );
} 