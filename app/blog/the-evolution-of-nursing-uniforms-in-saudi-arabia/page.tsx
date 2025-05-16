import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { CTA } from '@/components/CTA'
import { RelatedArticles } from '@/components/RelatedArticles'
import { ShareButtons } from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'The Evolution of Nursing Uniforms in Saudi Arabia | Uniform Junction',
  description: 'Explore the historical development and modern transformation of nursing uniforms in Saudi Arabia, from traditional beginnings to contemporary designs that balance professionalism with cultural values.',
  keywords: 'Saudi nursing uniforms history, KSA nurse attire evolution, Saudi healthcare uniform development, Islamic nursing uniform design, Saudi hospital staff attire, nursing uniform cultural considerations, Saudi healthcare dress code, modern Saudi nurse uniforms, Saudi healthcare professional clothing, nursing identity Saudi Arabia',
  openGraph: {
    title: 'The Evolution of Nursing Uniforms in Saudi Arabia',
    description: 'How nursing uniforms in Saudi Arabia have evolved from traditional beginnings to modern professional attire that balances clinical functionality, cultural authenticity, and healthcare excellence.',
    images: ['/images/healthcare/Nurse_uniforms.jpg'],
  },
}

export default function BlogPost() {
  return (
    <main className="flex-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              The Evolution of Nursing Uniforms in Saudi Arabia
            </h1>
            <div className="mt-6 text-base text-neutral-600">
              <time dateTime="2025-06-20" className="flex items-center">
                <span>June 20, 2025</span>
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
                  src="/images/healthcare/Nurse_uniforms.jpg"
                  alt="Historical and contemporary nursing uniforms in Saudi Arabia showing the evolution of healthcare attire"
                  width={1408}
                  height={960}
                  className="rounded-2xl"
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-neutral-500">
                  <span>The transformation of nursing uniforms in Saudi Arabia reflects the Kingdom's healthcare advancements while honoring cultural traditions</span>
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
                The story of nursing uniforms in Saudi Arabia reflects a fascinating journey of healthcare evolution, cultural adaptation, and professional identity development. From the earliest days of formal healthcare in the Kingdom to today's modern medical centers, nursing attire has continuously transformed—balancing clinical functionality, cultural values, and professional recognition. This comprehensive exploration traces the historical trajectory of Saudi nursing uniforms, examining how these distinctive garments have evolved alongside the Kingdom's healthcare system while maintaining the core principles of modesty, professionalism, and cultural authenticity that remain essential to Saudi nursing practice.
              </p>

              <div className="mt-10 max-w-3xl text-base leading-7 text-neutral-700">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  The Foundation Era: Early Healthcare in Saudi Arabia
                </h2>
                <p className="mt-6">
                  Understanding the origins of Saudi nursing attire requires examining the early development of healthcare in the Kingdom:
                </p>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Pre-Modern Healthcare Practices (Pre-1950s)
                </h3>
                <p className="mt-6">
                  Before the establishment of modern healthcare systems:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Traditional Healing:</strong> Predominant role of folk medicine and indigenous practitioners</li>
                  <li><strong>Family-Based Care:</strong> Health support primarily delivered by female family members</li>
                  <li><strong>Traditional Dress:</strong> No distinction between everyday attire and caregiving clothing</li>
                  <li><strong>Limited Formal Training:</strong> Absence of professional nursing education</li>
                  <li><strong>Cultural Health Practices:</strong> Strong influence of Islamic perspectives on care and modesty</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl bg-neutral-50 p-8">
                  <h3 className="text-xl font-semibold text-neutral-950">Early Healthcare Milestones in Saudi Arabia</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-900">Key Developments</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li>1926: First public health department established</li>
                        <li>1949: First Ministry of Health formed</li>
                        <li>1951: First nursing training program for women</li>
                        <li>1958: Health institutes begin formal nurse education</li>
                        <li>1961: First Saudi nursing graduates enter practice</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900">Early Challenges</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li>Cultural hesitancy toward women in professional roles</li>
                        <li>Limited healthcare infrastructure</li>
                        <li>Reliance on international nursing staff</li>
                        <li>Need to adapt global nursing standards to local culture</li>
                        <li>Balancing modernity with traditional values</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Introduction of Formal Nursing (1950s-1960s)
                </h3>
                <p className="mt-6">
                  The first generation of professionally trained Saudi nurses:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>International Influence:</strong> Uniform styles heavily influenced by Western models</li>
                  <li><strong>Cultural Adaptations:</strong> Modified designs incorporating modest elements</li>
                  <li><strong>Long-Sleeved Dresses:</strong> Full coverage adaptations of nurse uniforms</li>
                  <li><strong>Head Coverings:</strong> Integrated hijab or scarf with nursing caps</li>
                  <li><strong>Limited Standardization:</strong> Significant variation between healthcare facilities</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Early Saudi nursing uniforms adapted Western styles with modifications for modesty and cultural appropriateness</p>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Healthcare Expansion and Uniform Development (1970s-1980s)
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Oil Boom Era Healthcare Transformation
                </h3>
                <p className="mt-6">
                  Rapid development of healthcare infrastructure:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Hospital Construction:</strong> Significant expansion of healthcare facilities</li>
                  <li><strong>International Partnerships:</strong> Collaborations with global medical institutions</li>
                  <li><strong>Nursing Education Growth:</strong> Establishment of multiple nursing schools</li>
                  <li><strong>Multicultural Workforce:</strong> Significant numbers of expatriate nurses</li>
                  <li><strong>Professional Identity Development:</strong> Growing recognition of nursing as a profession</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Uniform Evolution and Standardization
                </h3>
                <p className="mt-6">
                  Development of distinctive Saudi nursing attire:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Institutional Identity:</strong> Hospital-specific uniform programs emerging</li>
                  <li><strong>White Predominance:</strong> Adoption of white as the standard nursing color</li>
                  <li><strong>Practical Adaptations:</strong> Design modifications for Saudi climate and work demands</li>
                  <li><strong>Cultural Accommodation:</strong> Standardized approaches to modest professional dress</li>
                  <li><strong>Hierarchy Indicators:</strong> Visual elements distinguishing nursing roles and ranks</li>
                </ul>

                <div className="bg-neutral-100 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-semibold text-neutral-950 mb-2">Case Study: King Faisal Specialist Hospital Uniform Evolution</h4>
                  <p className="text-neutral-700">
                    The King Faisal Specialist Hospital and Research Center, established in 1975, provides a notable example of nursing uniform evolution during this pivotal period. 
                  </p>
                  <p className="text-neutral-700 mt-4">
                    Initially implementing Western-style uniforms with modest adaptations, the hospital developed a distinctive uniform program balancing international nursing standards with Saudi cultural requirements. By the early 1980s, the institution had established a comprehensive uniform system featuring white ankle-length dresses with long sleeves for Saudi nurses, complemented by a specialized white hijab designed specifically for clinical settings. The uniforms incorporated rank identifiers through epaulet colors and specialized pins, establishing a visual professional hierarchy while maintaining cultural appropriateness.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Multicultural Influences and Adaptations
                </h3>
                <p className="mt-6">
                  Managing diversity in nursing attire:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Expatriate Nurse Guidelines:</strong> Modified standards for international staff</li>
                  <li><strong>Differentiated Requirements:</strong> Varying expectations for Saudi and non-Saudi nurses</li>
                  <li><strong>Religious Accommodation:</strong> Respect for diverse religious attire needs</li>
                  <li><strong>Cross-Cultural Adaptations:</strong> Integration of international best practices</li>
                  <li><strong>Institutional Variation:</strong> Different approaches across healthcare systems</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Multicultural nursing teams required thoughtful uniform policies respecting both professional standards and diverse cultural backgrounds</p>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Modernization and Professional Identity (1990s-2000s)
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Healthcare System Maturation
                </h3>
                <p className="mt-6">
                  Development of sophisticated healthcare infrastructure:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Advanced Medical Centers:</strong> World-class facilities with specialized capabilities</li>
                  <li><strong>Nursing Professionalization:</strong> Enhanced education and career development</li>
                  <li><strong>Saudi Nursing Identity:</strong> Growing numbers of Saudi nationals in nursing</li>
                  <li><strong>Specialized Practice Areas:</strong> Development of nursing specialties</li>
                  <li><strong>International Accreditation:</strong> Adoption of global healthcare standards</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Uniform Refinement and Functional Evolution
                </h3>
                <p className="mt-6">
                  Design advancements addressing practical and professional needs:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Scrub Introduction:</strong> Adoption of two-piece scrub uniforms with modest modifications</li>
                  <li><strong>Color-Coding Systems:</strong> Department and role identification through colors</li>
                  <li><strong>Enhanced Functionality:</strong> Practical adaptations for modern healthcare tasks</li>
                  <li><strong>Professional Distinction:</strong> Designs differentiating nursing from other healthcare roles</li>
                  <li><strong>Specialty Identifiers:</strong> Visual elements indicating specialized nursing areas</li>
                </ul>

                <div className="bg-neutral-100 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-semibold text-neutral-950 mb-2">Color-Coding Practices: National Guard Health Affairs</h4>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-900">Department Identification</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li>Navy Blue: General medical-surgical units</li>
                        <li>Burgundy: Emergency and trauma services</li>
                        <li>Forest Green: Operating room staff</li>
                        <li>Light Blue: Intensive care specialties</li>
                        <li>Purple: Oncology and cancer care</li>
                        <li>Teal: Obstetrics and women's health</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900">Role Differentiation</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li>White lab coats: Nursing leadership and management</li>
                        <li>Embroidered titles: Clear position identification</li>
                        <li>Badge colors: Educational qualification indicators</li>
                        <li>Epaulet variations: Years of service recognition</li>
                        <li>Specialized pins: Certification and training acknowledgment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Cultural Identity and Professional Balance
                </h3>
                <p className="mt-6">
                  Maintaining Saudi values while advancing nursing practice:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Modern Modest Design:</strong> Contemporary uniforms preserving cultural values</li>
                  <li><strong>Specialized Hijabs:</strong> Purpose-designed head coverings for clinical settings</li>
                  <li><strong>Institutional Identity:</strong> Organization-specific designs with cultural sensitivity</li>
                  <li><strong>Professional Pride:</strong> Attire supporting nursing status and recognition</li>
                  <li><strong>Practical Adaptations:</strong> Functional modifications for Saudi healthcare environments</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Contemporary Transformation and Vision 2030 (2010s-Present)
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Healthcare System Transformation
                </h3>
                <p className="mt-6">
                  National development reshaping the healthcare landscape:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Vision 2030 Healthcare Objectives:</strong> Ambitious goals for sector excellence</li>
                  <li><strong>Healthcare Privatization:</strong> Evolving organizational structures and identities</li>
                  <li><strong>Saudi Nursing Expansion:</strong> Initiatives increasing Saudi national participation</li>
                  <li><strong>Digital Transformation:</strong> Technology integration throughout healthcare delivery</li>
                  <li><strong>International Benchmarking:</strong> Adoption of global best practices</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Contemporary Saudi nursing uniforms combine professional functionality with cultural appropriateness while incorporating institutional branding</p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Modern Uniform Design and Innovation
                </h3>
                <p className="mt-6">
                  Advanced approaches to nursing attire:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Performance Fabrics:</strong> Technical textiles enhancing comfort and durability</li>
                  <li><strong>Antimicrobial Technologies:</strong> Infection prevention integrated into fabrics</li>
                  <li><strong>Institutional Branding:</strong> Uniform programs reflecting organizational identity</li>
                  <li><strong>Modular Systems:</strong> Flexible components accommodating different clinical roles</li>
                  <li><strong>Evidence-Based Design:</strong> Uniform features supporting clinical effectiveness</li>
                </ul>

                <div className="bg-neutral-100 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-semibold text-neutral-950 mb-2">Case Study: King Abdulaziz Medical City Uniform Redesign</h4>
                  <p className="text-neutral-700">
                    In 2020, King Abdulaziz Medical City implemented a comprehensive nursing uniform redesign initiative as part of its healthcare excellence program.
                  </p>
                  <p className="text-neutral-700 mt-4">
                    The project employed a collaborative process involving nursing leadership, staff representatives, and uniform specialists to develop a system balancing professional identity, practical functionality, and cultural appropriateness. The resulting program features department-specific color-coding, performance fabrics with antimicrobial properties, and modesty-preserving designs that maintain clinical functionality. A notable innovation was the development of a specialized clinical hijab with technical fabrics and secure fastening designed specifically for healthcare environments. Staff feedback indicates a 78% satisfaction rate with the new uniform system and improved patient ability to identify nursing roles.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Professional Identity and Public Recognition
                </h3>
                <p className="mt-6">
                  Nursing uniforms as symbols of evolving healthcare roles:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Saudi Nursing Identity:</strong> Distinct visual representation of national nursing profession</li>
                  <li><strong>Gender Integration:</strong> Appropriate uniform standards for male and female nurses</li>
                  <li><strong>Public Perception Influence:</strong> Uniform impact on community respect for nursing</li>
                  <li><strong>Professional Advancement Markers:</strong> Visual indicators of nursing achievement</li>
                  <li><strong>Career Pathway Visibility:</strong> Uniform elements reflecting nursing specialization</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Practical Considerations in Modern Saudi Nursing Attire
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Balancing Function and Cultural Appropriateness
                </h3>
                <p className="mt-6">
                  Key considerations in effective nursing uniform design:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Infection Control:</strong> Materials and designs supporting hygiene and safety</li>
                  <li><strong>Mobility Requirements:</strong> Construction allowing clinical movement range</li>
                  <li><strong>Thermal Comfort:</strong> Adaptation to hospital environments and Saudi climate</li>
                  <li><strong>Modesty Preservation:</strong> Designs meeting cultural expectations during activity</li>
                  <li><strong>Durability Factors:</strong> Construction withstanding intense healthcare demands</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Innovative design elements allow modern Saudi nursing uniforms to maintain modesty while enhancing clinical functionality</p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Organizational Implementation Approaches
                </h3>
                <p className="mt-6">
                  Strategies for effective nursing uniform programs:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Policy Development:</strong> Clear guidelines balancing requirements and accommodations</li>
                  <li><strong>Staff Involvement:</strong> Nurse participation in uniform program development</li>
                  <li><strong>Supply Chain Management:</strong> Reliable uniform provision systems</li>
                  <li><strong>Replacement Protocols:</strong> Procedures ensuring consistent professional appearance</li>
                  <li><strong>International Staff Considerations:</strong> Approaches for multicultural nursing teams</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Future Directions and Emerging Trends
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Innovation and Advancement
                </h3>
                <p className="mt-6">
                  Emerging developments in Saudi nursing attire:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Smart Textiles:</strong> Integration of technology within uniform fabrics</li>
                  <li><strong>Sustainable Materials:</strong> Eco-friendly options aligned with national initiatives</li>
                  <li><strong>Enhanced Performance Features:</strong> Advanced functionality for specialized roles</li>
                  <li><strong>Customization Systems:</strong> Personalized elements within professional standards</li>
                  <li><strong>Identity Evolution:</strong> Visual representation of nursing's expanding scope</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  
                  <p className="mt-2 text-sm text-neutral-500">Next-generation Saudi nursing uniforms will likely integrate smart technologies while maintaining cultural appropriateness</p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Vision 2030 Alignment
                </h3>
                <p className="mt-6">
                  Nursing uniform evolution supporting national objectives:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Healthcare Excellence:</strong> Uniforms supporting world-class care delivery</li>
                  <li><strong>Saudi Nursing Identity:</strong> Visual reinforcement of national nursing profession</li>
                  <li><strong>Domestic Production:</strong> Local manufacturing of healthcare attire</li>
                  <li><strong>Employment Opportunities:</strong> Expanded nursing career pathways</li>
                  <li><strong>Global Benchmarking:</strong> International best practices with Saudi identity</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Conclusion
                </h2>
                <p className="mt-6">
                  The evolution of nursing uniforms in Saudi Arabia represents a remarkable journey that parallels the Kingdom's healthcare transformation. From modest beginnings adapting Western nursing attire to today's sophisticated uniform systems, these distinctive garments reflect Saudi Arabia's successful integration of global healthcare excellence with cultural authenticity and values.
                </p>
                <p className="mt-6">
                  As nursing continues to advance as a respected profession within Saudi society, nursing uniforms serve as powerful visual symbols of this evolution—communicating professionalism, expertise, and care while maintaining the cultural foundations that remain central to Saudi identity. The thoughtful balance between functionality, modesty, and professional distinction demonstrates the sophisticated approach that characterizes contemporary Saudi healthcare.
                </p>
                <p className="mt-6">
                  Looking toward the future, nursing uniforms will likely continue evolving alongside Saudi Arabia's healthcare system, incorporating technological innovation and sustainable practices while preserving the distinctive elements that make Saudi nursing attire unique. This ongoing development will further strengthen the visual identity of nursing as a critical profession contributing to the Kingdom's health and prosperity, supporting Vision 2030's goals for world-class healthcare delivered with authentic Saudi character and values.
                </p>

                <div className="mt-16">
                  <ShareButtons 
                    title="The Evolution of Nursing Uniforms in Saudi Arabia" 
                    url="https://uniformjunction.sa/blog/the-evolution-of-nursing-uniforms-in-saudi-arabia" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-72 lg:flex-none lg:relative">
              <RelatedArticles
                articles={[
                  {
                    title: "Saudi Ministry of Health (MoH) Uniform Guidelines for Healthcare Workers",
                    href: "/blog/saudi-ministry-of-health-moh-uniform-guidelines-for-healthcare-workers",
                  },
                  {
                    title: "The Importance of Color-Coding Uniforms in Large Saudi Hospitals",
                    href: "/blog/the-importance-of-color-coding-uniforms-in-large-saudi-hospitals",
                  },
                  {
                    title: "The Psychology of Color in Healthcare Environments and Uniforms",
                    href: "/blog/the-psychology-of-color-in-healthcare-environments-and-uniforms",
                  },
                  {
                    title: "Sustainable and Disposable Uniform Options in Healthcare Settings",
                    href: "/blog/sustainable-and-disposable-uniform-options-in-healthcare-settings",
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
  )
} 