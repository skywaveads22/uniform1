import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Arc Flash Protective Clothing Standards Relevant to KSA | UniformSA',
  description: 'Comprehensive guide on arc flash protective clothing standards and requirements in Saudi industries, focusing on safety and compliance with international standards.',
  openGraph: {
    title: 'Arc Flash Protective Clothing Standards Relevant to KSA',
    description: 'Comprehensive guide on arc flash protective clothing standards and requirements in Saudi industries, focusing on safety and compliance with international standards.',
    images: ['/images/industrial/arc_flash_rated_clothing.jpeg'],
  },
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
            <span className="text-gray-700 dark:text-white">Arc Flash Protective Clothing Standards</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/industrial/arc_flash_rated_clothing.jpeg"
              alt="معايير ملابس الحماية من القوس الكهربائي في المملكة العربية السعودية"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Arc Flash Protective Clothing Standards Relevant to KSA
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 15, 2023</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>Electrical Safety, Protective Clothing, International Standards</span>
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
                In the world of electrical and energy industries, arc flash protective clothing serves as the first line of defense against one of the most dangerous occupational hazards. In Saudi Arabia, where energy, petrochemical, and manufacturing industries thrive, these standards and requirements become increasingly important to ensure worker safety and compliance with international standards.
              </p>

              <h2>Understanding Arc Flash Hazards</h2>
              <p>
                An arc flash is a sudden and violent electrical discharge that occurs when electrical current flows through air between conductors or from a conductor to ground. This phenomenon produces:
              </p>
              <ul>
                <li><strong>Intense Heat:</strong> Reaching up to 19,400°C (four times the temperature of the sun's surface)</li>
                <li><strong>Explosive Pressure:</strong> Can throw workers considerable distances</li>
                <li><strong>Intense Light:</strong> May cause temporary or permanent blindness</li>
                <li><strong>Molten Metal:</strong> Flying at high velocities</li>
                <li><strong>Toxic Gases:</strong> Resulting from material combustion</li>
              </ul>

              <h2>International Standards Applied in the Kingdom</h2>
              
              <h3>NFPA 70E Standard</h3>
              <p>
                The National Fire Protection Association (NFPA 70E) standard is the primary reference for electrical safety in workplaces. This standard defines:
              </p>
              <ul>
                <li>Arc flash hazard analysis requirements</li>
                <li>Classification of required protection levels (PPE Categories)</li>
                <li>Safe work procedures</li>
                <li>Training and qualification requirements</li>
              </ul>

              <h3>IEEE 1584 Standard</h3>
              <p>
                This standard provides calculation methods for determining incident energy and required protection distance, helping select appropriate protection levels for each task.
              </p>

              <div className="not-prose my-8 p-6 bg-red-50 rounded-lg dark:bg-red-900/20">
                <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">Arc Flash Protection Levels</h3>
                <p className="text-sm mb-4 text-red-700 dark:text-red-300">
                  Protective clothing is classified into four main categories:
                </p>
                <ul className="text-sm space-y-2 list-disc pl-5 text-red-700 dark:text-red-300">
                  <li><strong>Category 1:</strong> 4 cal/cm² - For basic electrical work</li>
                  <li><strong>Category 2:</strong> 8 cal/cm² - For electrical panel work</li>
                  <li><strong>Category 3:</strong> 25 cal/cm² - For high-voltage equipment work</li>
                  <li><strong>Category 4:</strong> 40 cal/cm² - For the most hazardous work</li>
                </ul>
              </div>

              <h2>Application in Saudi Industries</h2>
              
              <h3>Energy and Electricity Sector</h3>
              <p>
                Saudi Electricity Company and other energy companies commit to applying the highest safety standards, where workers face arc flash risks in:
              </p>
              <ul>
                <li>Power generation plants</li>
                <li>Electrical substations</li>
                <li>Distribution networks</li>
                <li>Maintenance and operation work</li>
              </ul>

              <h3>Petrochemical Industries</h3>
              <p>
                In complexes like SABIC, Jubail, and Yanbu, where complex electrical equipment exists in hazardous environments, arc flash protective clothing becomes vital for worker protection.
              </p>

              <h3>Industrial Sector</h3>
              <p>
                Factories and industrial facilities using high-voltage electrical equipment require strict standards to protect workers from arc flash hazards.
              </p>

              <h2>Characteristics of Approved Protective Clothing</h2>
              
              <h3>Fire-Resistant Materials</h3>
              <p>
                Protective clothing is made from specialized materials such as:
              </p>
              <ul>
                <li><strong>Aramid:</strong> Such as Nomex and Kevlar</li>
                <li><strong>Modacrylic:</strong> Lightweight and fire-resistant</li>
                <li><strong>Treated Cotton Blends:</strong> Comfortable and effective</li>
                <li><strong>PBI Fibers:</strong> High heat resistance</li>
              </ul>

              <h3>Design and Specifications</h3>
              <p>
                Approved protective clothing features:
              </p>
              <ul>
                <li>No exposed metals</li>
                <li>Fire-resistant buttons and zippers</li>
                <li>Complete body coverage</li>
                <li>Comfort in movement</li>
                <li>Resistance to repeated washing</li>
              </ul>

              <h2>Compliance and Implementation in the Kingdom</h2>
              
              <h3>Local Regulations</h3>
              <p>
                Saudi Arabia adopts international standards through:
              </p>
              <ul>
                <li><strong>Saudi Standards, Metrology and Quality Organization (SASO):</strong> Adopts international standards</li>
                <li><strong>Ministry of Human Resources:</strong> Oversees occupational safety standards implementation</li>
                <li><strong>Saudi Aramco:</strong> Applies strict standards in all operations</li>
              </ul>

              <h3>Training and Qualification Programs</h3>
              <p>
                Required training programs include:
              </p>
              <ul>
                <li>Arc flash hazard analysis</li>
                <li>Appropriate protective equipment selection</li>
                <li>Safe work procedures</li>
                <li>Emergency response</li>
                <li>Protective equipment maintenance and inspection</li>
              </ul>

              <h2>Challenges and Solutions in the Saudi Environment</h2>
              
              <h3>Adaptation to Hot Climate</h3>
              <p>
                The Kingdom's hot climate poses additional challenges, requiring:
              </p>
              <ul>
                <li>Fabrics allowing good ventilation</li>
                <li>Integrated cooling technologies</li>
                <li>Regular worker rest programs</li>
                <li>Vital signs monitoring</li>
              </ul>

              <h3>Continuous Training</h3>
              <p>
                Given the topic's importance, Saudi companies focus on:
              </p>
              <ul>
                <li>Periodic training programs</li>
                <li>Incident simulation</li>
                <li>Knowledge updates on new standards</li>
                <li>Continuous competency assessment</li>
              </ul>

              <h2>Future of Arc Flash Protection Standards</h2>
              <p>
                Protection standards continue evolving with:
              </p>
              <ul>
                <li><strong>Smart Technologies:</strong> Integrated sensors for environmental monitoring</li>
                <li><strong>Advanced Materials:</strong> Lighter weight and more protective</li>
                <li><strong>Comfortable Design:</strong> Improving comfort without sacrificing protection</li>
                <li><strong>Technical Integration:</strong> Connecting protective equipment to safety systems</li>
              </ul>

              <h2>Conclusion and Recommendations</h2>
              <p>
                Arc flash protective clothing is a vital investment in worker safety and asset protection in Saudi industries. Compliance with international standards is not just a legal obligation, but an ethical and economic necessity.
              </p>
              
              <p>
                With continued growth of industrial and energy sectors in the Kingdom under Vision 2030, the importance of applying the highest safety standards increases to ensure a safe and productive work environment. Investment in high-quality protective clothing and continuous training contributes to achieving these ambitious goals.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Engineer Mohammed Al-Otaibi, expert in electrical safety and arc flash protection standards, with over 20 years of experience in the energy and electrical industries sector in Saudi Arabia.</p>
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
                  <Link href="/blog" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">More articles</div>
                    <div className="text-xs text-gray-500">View all blog posts</div>
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