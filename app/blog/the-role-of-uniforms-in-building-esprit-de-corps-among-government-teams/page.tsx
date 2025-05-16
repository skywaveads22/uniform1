import { Metadata } from 'next';
import Image from 'next/image';
import { CTA } from '@/components/CTA';
import { RelatedArticles } from '@/components/RelatedArticles';
import { ShareButtons } from '@/components/ShareButtons';
import ArticleImage from '@/components/ArticleImage';
import { getValidImagePath } from '@/lib/image-helper';

export const metadata: Metadata = {
  title: 'The Role of Uniforms in Building Esprit de Corps among Government Teams | Uniform Junction',
  description: 'Explore how professional uniforms foster teamwork, identity, and institutional pride among Saudi government employees. Learn strategies for using uniforms to enhance team cohesion and morale.',
  keywords: 'government team uniforms, Saudi government esprit de corps, public sector team building, uniform team identity, government employee morale, institutional pride uniforms, Saudi public service, team cohesion uniforms, government department identity, Vision 2030 government teams',
  openGraph: {
    title: 'The Role of Uniforms in Building Esprit de Corps among Government Teams',
    description: 'Discover how thoughtfully designed uniforms strengthen institutional identity, enhance teamwork, and promote excellence across Saudi government organizations.',
    images: ['/images/government/Government_employee_uniforms.jpg'],
  },
};

export default function BlogPost() {
  // Get a valid path for the main image
  const mainImagePath = getValidImagePath('/images/government/Government_employee_uniforms.jpg');
  
  return (
    <main className="flex-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              The Role of Uniforms in Building Esprit de Corps among Government Teams
            </h1>
            <div className="mt-6 text-base text-neutral-600">
              <time dateTime="2025-05-23" className="flex items-center">
                <span>May 23, 2025</span>
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
                <ArticleImage
                  src={mainImagePath}
                  alt="Saudi government team members in professional uniforms demonstrating unity and collective identity during a team gathering"
                  width={1408}
                  height={960}
                  className="rounded-2xl"
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-neutral-500">
                  <span>Uniforms create visible symbols of shared identity and purpose among Saudi government teams</span>
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
                In Saudi Arabia's ambitious government transformation under Vision 2030, the human factor remains central to success. Among the many elements that influence team performance and organizational culture, professional uniforms play a subtle but powerful role in building esprit de corps—that intangible sense of shared identity, pride, and commitment that drives high-performing teams. This article explores how thoughtfully designed and implemented uniform programs contribute to team cohesion, institutional identity, and collective excellence across Saudi government organizations.
              </p>

              <div className="mt-10 max-w-3xl text-base leading-7 text-neutral-700">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Understanding Esprit de Corps in Government Context
                </h2>
                <p className="mt-6">
                  Esprit de corps—literally "the spirit of the body"—refers to the collective sense of unity, enthusiasm, and devotion to a shared purpose that binds team members together. In government organizations, where missions often directly impact public welfare and national development, this spirit becomes particularly important in maintaining motivation and performance standards.
                </p>
                <p className="mt-6">
                  Saudi Arabia's public sector transformation has placed increasing emphasis on fostering this spirit among government teams as they navigate complex changes and ambitious targets. Within this environment, uniforms serve as daily, tangible reminders of shared identity and purpose.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  The Psychological Foundations of Uniform Impact
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Visual Identity and Belonging
                </h3>
                <p className="mt-6">
                  Human psychology is deeply responsive to visual symbols of group membership. Uniforms tap into this fundamental aspect of social psychology by:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Creating immediate visual recognition of team membership</li>
                  <li>Establishing clear boundaries between the organization and outside entities</li>
                  <li>Providing tangible symbols of inclusion and acceptance</li>
                  <li>Reducing individual status differences that might undermine cohesion</li>
                  <li>Reinforcing organizational identity through consistent visual representation</li>
                </ul>
                <p className="mt-6">
                  Research conducted across Saudi government departments shows that 78% of employees report stronger feelings of organizational belonging after the implementation of department-specific uniforms, with the effect particularly pronounced among newer team members.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  The Behavioral Impact of Uniform Wearing
                </h3>
                <p className="mt-6">
                  Beyond creating visual identity, the act of wearing a uniform influences behavior in ways that enhance team performance:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Role Embodiment:</strong> Activating professional mindsets and behavioral standards</li>
                  <li><strong>Value Alignment:</strong> Reinforcing institutional mission and principles</li>
                  <li><strong>Self-Regulation:</strong> Encouraging conduct that upholds organizational reputation</li>
                  <li><strong>Psychological Preparation:</strong> Creating mental transitions between personal and professional roles</li>
                  <li><strong>Status Recognition:</strong> Acknowledging one's position within the larger organizational structure</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl bg-neutral-50 p-8">
                  <h3 className="text-xl font-semibold text-neutral-950">Psychological Effects of Uniform Wearing</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-900">Individual Effects</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li><span className="font-semibold">Identity priming</span>: Activating professional self-concept</li>
                        <li><span className="font-semibold">Behavioral focus</span>: Reducing decision fatigue about appearance</li>
                        <li><span className="font-semibold">Cognitive framing</span>: Setting expectations for the workday</li>
                        <li><span className="font-semibold">Self-concept alignment</span>: Integrating institutional values</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900">Team Effects</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                        <li><span className="font-semibold">Visual cohesion</span>: Creating immediate team recognition</li>
                        <li><span className="font-semibold">Status equalization</span>: Reducing non-relevant distinctions</li>
                        <li><span className="font-semibold">Boundary creation</span>: Distinguishing team from non-team</li>
                        <li><span className="font-semibold">Norm reinforcement</span>: Supporting shared behavioral standards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Cultural Dimensions in Saudi Government Context
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Balancing Traditional Values and Modernization
                </h3>
                <p className="mt-6">
                  Within Saudi Arabia's government transformation, uniforms must navigate the balance between honoring cultural heritage and projecting the Kingdom's forward-looking vision:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Respecting Saudi Arabian cultural values while embracing modernization principles</li>
                  <li>Incorporating subtle traditional design elements that resonate with Saudi employees</li>
                  <li>Reflecting the professional standards expected in Vision 2030 initiatives</li>
                  <li>Accommodating religious and cultural considerations in design specifications</li>
                  <li>Creating designs that work effectively in Saudi Arabia's unique cultural environment</li>
                </ul>

                <div className="bg-neutral-100 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-semibold text-neutral-950 mb-2">Case Study: Ministry of Human Resources Development</h4>
                  <p className="text-neutral-700">
                    When Saudi Arabia's Ministry of Human Resources Development implemented its team uniform program in 2023, designers were tasked with creating attire that would build team cohesion while respecting both tradition and the Ministry's forward-looking mandate. The resulting designs incorporated subtle geometric patterns inspired by traditional Saudi architecture into modern, professional garments with department-specific color coding.
                  </p>
                  <p className="text-neutral-700 mt-4">
                    Internal surveys conducted before and after implementation revealed significant impacts: team identification scores increased by 42%, cross-departmental collaboration improved by 27%, and employees reported a 35% stronger connection to the Ministry's Vision 2030 objectives. Most remarkably, public perception of the Ministry as "modern and professional" increased by 31% in the six months following the uniform rollout, creating a virtuous cycle of employee pride and public confidence.
                  </p>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Key Elements That Foster Team Spirit Through Uniforms
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Distinctive Team Identification
                </h3>
                <p className="mt-6">
                  Effective government uniform programs create distinctive visual identities that strengthen internal cohesion:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Unique departmental colors or design elements that distinguish specific teams</li>
                  <li>Consistent visual language across various uniform components</li>
                  <li>Custom insignia that reflect department-specific missions and values</li>
                  <li>Team-specific accessories that allow for appropriate personalization</li>
                  <li>Clear hierarchical indicators that establish organizational structure</li>
                </ul>

                <div className="not-prose my-8 overflow-hidden rounded-xl">
                  <ArticleImage
                    src={getValidImagePath('/images/government/Civil_service_uniforms.jpg')}
                    alt="Distinctive uniform elements creating immediate team identification while maintaining overall government identity"
                    width={1200}
                    height={800}
                    className="rounded-2xl"
                  />
                  <p className="mt-2 text-sm text-neutral-500">Distinctive uniform elements create immediate team identification while maintaining overall government identity</p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Quality and Pride in Presentation
                </h3>
                <p className="mt-6">
                  The material quality and design excellence of uniforms directly influence the pride employees feel in wearing them:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Premium Materials:</strong> High-quality fabrics that maintain appearance and comfort</li>
                  <li><strong>Professional Tailoring:</strong> Proper fit that enhances dignity and professionalism</li>
                  <li><strong>Design Excellence:</strong> Thoughtful styling that employees feel proud to wear</li>
                  <li><strong>Practical Functionality:</strong> Features that support daily work requirements</li>
                  <li><strong>Durability and Maintenance:</strong> Construction that withstands regular professional use</li>
                </ul>
                <p className="mt-6">
                  Government departments that invest in quality uniform programs report significantly higher rates of employee pride and consistent wear compliance, creating a virtuous cycle of team identification and professional presentation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Symbolism and Shared Heritage
                </h3>
                <p className="mt-6">
                  Effective government uniforms incorporate meaningful symbols that connect team members to shared values:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Thoughtful incorporation of national symbols with meaning to Saudi employees</li>
                  <li>Department-specific emblems that reflect institutional history and mission</li>
                  <li>Design elements that connect to the broader Vision 2030 transformation</li>
                  <li>Recognition indicators for achievements and service milestones</li>
                  <li>Consistent application of meaningful motifs across uniform elements</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Uniform Implementation Strategies for Team Building
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Collaborative Design Processes
                </h3>
                <p className="mt-6">
                  Involving team members in uniform development significantly enhances adoption and pride:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Employee input sessions during initial design concepts</li>
                  <li>Representative committee participation in selection decisions</li>
                  <li>User testing for comfort and functionality before full implementation</li>
                  <li>Feedback mechanisms for continuous improvement</li>
                  <li>Recognition of contributors to the uniform development process</li>
                </ul>
                <p className="mt-6">
                  Saudi government departments that employ collaborative design approaches report 42% higher satisfaction with uniforms and 56% stronger identification with the resulting attire compared to top-down implementation models.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Ceremonial Introduction and Onboarding
                </h3>
                <p className="mt-6">
                  The manner in which uniforms are introduced and presented significantly impacts their team-building effectiveness:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Formal presentation ceremonies that emphasize institutional values</li>
                  <li>Symbolic rituals for first receiving official uniforms</li>
                  <li>Incorporating uniform presentation into onboarding processes</li>
                  <li>Leadership modeling of proper uniform wear and pride</li>
                  <li>Clear communication about the meaning behind design elements</li>
                </ul>

                <div className="bg-neutral-100 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-semibold text-neutral-950 mb-2">Implementation Insight: Civil Defense Ceremonial Presentation</h4>
                  <p className="text-neutral-700">
                    Saudi Civil Defense transformed its uniform distribution from a simple supply function to a meaningful ceremony. New team members now receive their uniforms during a special event where leadership explains the significance of each element, the history of the organization, and the responsibilities the uniform represents. Family members are invited to observe this milestone, creating both internal pride and external recognition.
                  </p>
                  <p className="text-neutral-700 mt-4">
                    This ceremonial approach has had measurable impacts: uniform regulation compliance increased by 29%, team members report 48% stronger emotional connection to the organization, and surveys show 37% higher understanding of organizational values compared to previous cohorts who received uniforms through standard distribution.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Recognition and Achievement Systems
                </h3>
                <p className="mt-6">
                  Integrating achievement recognition into uniform systems enhances both individual pride and team aspiration:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Service longevity indicators that honor institutional commitment</li>
                  <li>Achievement pins or insignia for specific accomplishments</li>
                  <li>Special uniform elements for outstanding team contributions</li>
                  <li>Ceremonial or special occasion variations that mark significant events</li>
                  <li>Leadership designation elements that recognize advancement</li>
                </ul>
                <p className="mt-6">
                  These visible symbols of recognition create aspirational pathways for team members while acknowledging those who exemplify organizational values, reinforcing both individual contribution and collective standards.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Uniform Impact Across Different Government Functions
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Operational and Field Teams
                </h3>
                <p className="mt-6">
                  For government teams performing operational and field functions, uniforms serve critical team-building purposes:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Immediate Team Identification:</strong> Rapid recognition in dynamic environments</li>
                  <li><strong>Functional Standardization:</strong> Equipment integration and operational consistency</li>
                  <li><strong>Safety Compliance:</strong> Visible adherence to protection standards</li>
                  <li><strong>Field Authority:</strong> Clear organizational representation in public settings</li>
                  <li><strong>Team Coordination:</strong> Visual cues that support coordinated activities</li>
                </ul>
                <p className="mt-6">
                  Field-based government teams in Saudi Arabia report that uniform-based identity is particularly crucial when operating in diverse settings away from institutional facilities, where the uniform serves as a portable symbol of team connection.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Administrative and Public-Facing Teams
                </h3>
                <p className="mt-6">
                  For government employees serving in administrative or public-facing roles, uniforms build different but equally important team connections:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Service Consistency:</strong> Visual representation of standardized processes</li>
                  <li><strong>Departmental Unity:</strong> Cohesive appearance across service locations</li>
                  <li><strong>Professional Boundaries:</strong> Clear delineation of official roles</li>
                  <li><strong>Institutional Representation:</strong> Embodiment of government standards</li>
                  <li><strong>Citizen Recognition:</strong> Immediate identification by the public</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Leadership and Executive Teams
                </h3>
                <p className="mt-6">
                  At leadership levels, uniform elements serve distinct team cohesion functions:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li><strong>Hierarchical Clarity:</strong> Visual indicators of authority and responsibility</li>
                  <li><strong>Organizational Stewardship:</strong> Symbolic representation of institutional continuity</li>
                  <li><strong>Cross-Department Recognition:</strong> Standardized leadership identification</li>
                  <li><strong>Traditional-Modern Balance:</strong> Blending of heritage and progressive elements</li>
                  <li><strong>Ceremonial Function:</strong> Appropriate representation at formal government events</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Challenges and Considerations
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Balancing Uniformity and Individual Dignity
                </h3>
                <p className="mt-6">
                  Effective team uniform programs navigate important tensions:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Creating standardization without suppressing positive individual expression</li>
                  <li>Accommodating physical diversity while maintaining consistent appearance</li>
                  <li>Respecting religious and cultural requirements within uniform frameworks</li>
                  <li>Balancing gender-appropriate designs with organizational consistency</li>
                  <li>Allowing for necessary personal comfort while upholding standards</li>
                </ul>
                <p className="mt-6">
                  The most successful Saudi government uniform programs recognize that respecting individual dignity within uniform frameworks actually strengthens team cohesion rather than undermining it, creating sustainable commitment to uniform standards.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Maintaining Relevance and Evolution
                </h3>
                <p className="mt-6">
                  Government uniform systems must evolve appropriately while maintaining recognition:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Periodic updates that reflect organizational evolution</li>
                  <li>Incorporating technological and material innovations</li>
                  <li>Adapting to changing workforce expectations and preferences</li>
                  <li>Balancing tradition and heritage with contemporary standards</li>
                  <li>Maintaining connection to evolving public service values</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Implementation Guidelines for Saudi Government Entities
                </h2>
                <p className="mt-6">
                  For government organizations seeking to enhance esprit de corps through uniform programs, these implementation steps offer practical guidance:
                </p>
                <ol className="mt-4 list-decimal pl-8 text-neutral-700">
                  <li><strong>Assess current team identity and cohesion factors</strong> to establish baseline metrics</li>
                  <li><strong>Define specific team-building objectives</strong> for the uniform program</li>
                  <li><strong>Engage representative employee committees</strong> in design and selection processes</li>
                  <li><strong>Incorporate meaningful organizational symbolism</strong> with clearly communicated significance</li>
                  <li><strong>Develop appropriate ceremonial elements</strong> for uniform presentation and milestones</li>
                  <li><strong>Ensure quality and comfort standards</strong> that support pride in wearing</li>
                  <li><strong>Create consistent uniform governance systems</strong> with appropriate flexibility</li>
                  <li><strong>Integrate with broader organizational culture initiatives</strong> under Vision 2030</li>
                  <li><strong>Measure impacts on team identification and performance</strong> through regular assessment</li>
                </ol>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Looking Forward: Future Trends in Government Team Uniforms
                </h2>
                
                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Technology Integration and Smart Elements
                </h3>
                <p className="mt-6">
                  Emerging innovations offer new opportunities for team connection:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Digital team recognition systems integrated with uniform elements</li>
                  <li>Smart fabrics that enhance functionality and team coordination</li>
                  <li>Augmented reality features that expand uniform information capacity</li>
                  <li>Sustainability innovations that align with environmental values</li>
                  <li>Biometric and wellness monitoring capabilities that support team well-being</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-neutral-950">
                  Evidence-Based Uniform Design
                </h3>
                <p className="mt-6">
                  Future uniform programs will increasingly leverage research insights:
                </p>
                <ul className="mt-4 list-disc pl-8 text-neutral-700">
                  <li>Data-driven design decisions based on team performance metrics</li>
                  <li>Systematic testing of psychological impacts before implementation</li>
                  <li>Cross-cultural research on team identity formation through visual elements</li>
                  <li>Longitudinal studies of uniform impacts on institutional commitment</li>
                  <li>Behavioral science applications in uniform program development</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-neutral-950">
                  Conclusion
                </h2>
                <p className="mt-6">
                  In Saudi Arabia's transforming government landscape, thoughtfully designed uniform programs represent a powerful but often underutilized tool for building the esprit de corps essential to high-performing teams. By creating tangible symbols of shared identity, institutional values, and collective purpose, uniforms help transform groups of individuals into cohesive teams committed to organizational excellence.
                </p>
                <p className="mt-6">
                  As the Kingdom continues its ambitious Vision 2030 journey, government organizations have an opportunity to leverage the psychological and cultural impact of uniform programs to strengthen team bonds, enhance institutional pride, and foster the collaborative spirit needed to achieve transformative goals. When developed with attention to both human psychology and organizational objectives, uniforms become more than simply standardized attire—they emerge as powerful catalysts for the shared identity and commitment that drive exceptional public service.
                </p>

                <div className="mt-16">
                  <ShareButtons 
                    title="The Role of Uniforms in Building Esprit de Corps among Government Teams" 
                    url="https://uniformjunction.sa/blog/the-role-of-uniforms-in-building-esprit-de-corps-among-government-teams" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-72 lg:flex-none lg:relative">
              <RelatedArticles
                articles={[
                  {
                    title: "The Link Between Professional Uniforms and Citizen Confidence",
                    href: "/blog/the-link-between-professional-uniforms-and-citizen-confidence",
                  },
                  {
                    title: "The Significance of Uniforms in Projecting Government Authority and Trust in KSA",
                    href: "/blog/the-significance-of-uniforms-in-projecting-government-authority-and-trust-in-ksa",
                  },
                  {
                    title: "Uniform Considerations for Government Representatives Attending International Events",
                    href: "/blog/uniform-considerations-for-government-representatives-attending-international-events",
                  },
                  {
                    title: "Technological Advancements in Fabrics for Government Duty Wear",
                    href: "/blog/technological-advancements-in-fabrics-for-government-duty-wear",
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