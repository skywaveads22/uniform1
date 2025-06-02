import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anti-Static Workwear: Essential for Specific Saudi Industries | UniformSA',
  description: 'Discover the importance of anti-static workwear in sensitive Saudi industries such as petrochemicals and electronics, and the required safety standards.',
  openGraph: {
    title: 'Anti-Static Workwear: Essential for Specific Saudi Industries',
    description: 'Discover the importance of anti-static workwear in sensitive Saudi industries such as petrochemicals and electronics, and the required safety standards.',
    images: ['/images/industrial/anti_static_uniforms.jpeg'],
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
            <span className="text-gray-700 dark:text-white">Anti-Static Workwear</span>
          </nav>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/images/industrial/anti_static_uniforms.jpeg"
              alt="Anti Static Workwear Essential For Specific Saudi Industries"
              width={1000}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Anti-Static Workwear: Essential for Specific Saudi Industries
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
                <span>Workwear, Industrial Safety, Static Electricity</span>
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
                In the world of modern industries, anti-static workwear serves as the first line of defense against electrical hazards in sensitive work environments. In Saudi Arabia, where petrochemical, electronics, and pharmaceutical industries flourish, this specialized clothing becomes an indispensable necessity for ensuring worker safety and protecting sensitive equipment.
              </p>

              <h2>Understanding Static Electricity and Its Industrial Hazards</h2>
              <p>
                Static electricity is the accumulation of electrical charges on material surfaces due to friction or separation. In industrial environments, these charges can lead to:
              </p>
              <ul>
                <li><strong>Explosions and Fires:</strong> In the presence of flammable materials</li>
                <li><strong>Electronic Equipment Damage:</strong> Especially sensitive integrated circuits</li>
                <li><strong>Worker Electric Shocks:</strong> Affecting their safety and productivity</li>
                <li><strong>Product Contamination:</strong> In precision industries like pharmaceuticals and electronics</li>
              </ul>

              <h2>Saudi Industries Requiring Anti-Static Workwear</h2>
              
              <h3>Petrochemical Industry</h3>
              <p>
                Saudi Arabia is one of the world's largest petrochemical producers, with giant companies like SABIC and Aramco. In these environments, where flammable gases and liquids are present, anti-static workwear becomes absolutely essential to prevent explosions and fires.
              </p>

              <h3>Electronics and Technology Industry</h3>
              <p>
                With the growth of the technology sector in the Kingdom under Vision 2030, protecting sensitive electronic components from static discharge becomes increasingly important. Factories producing computers, smartphones, and medical equipment require static-free environments.
              </p>

              <h3>Pharmaceutical Industries</h3>
              <p>
                In pharmaceutical manufacturing, where cleanliness and precision are paramount, anti-static workwear helps prevent product contamination and ensures the quality of manufactured medicines.
              </p>

              <div className="not-prose my-8 p-6 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">International Safety Standards</h3>
                <p className="text-sm mb-4 text-blue-700 dark:text-blue-300">
                  Anti-static workwear complies with strict standards:
                </p>
                <ul className="text-sm space-y-2 list-disc pl-5 text-blue-700 dark:text-blue-300">
                  <li><strong>IEC 61340-5-1:</strong> International standard for electronic device protection</li>
                  <li><strong>EN 1149:</strong> European standard for protective clothing</li>
                  <li><strong>NFPA 77:</strong> National Fire Protection Association standards</li>
                  <li><strong>ANSI/ESD S20.20:</strong> Static electricity control program standard</li>
                </ul>
              </div>

              <h2>Characteristics of Anti-Static Workwear</h2>
              
              <h3>Conductive Fibers</h3>
              <p>
                These garments contain conductive fibers such as carbon or stainless steel, which are woven into the fabric in a regular pattern to provide a safe path for discharging electrical charges to ground.
              </p>

              <h3>Controlled Surface Resistance</h3>
              <p>
                These fabrics feature specific surface resistance ranging from 10^5 to 10^11 ohms, ensuring charges discharge quickly enough to prevent accumulation without becoming dangerously conductive.
              </p>

              <h2>Practical Applications in the Saudi Environment</h2>
              
              <h3>Adaptation to Hot Climate</h3>
              <p>
                Anti-static workwear has been specifically developed to adapt to the Kingdom's hot climate, with advanced cooling technologies and fabrics that allow good ventilation without compromising anti-static properties.
              </p>

              <h3>Integration with Other Safety Equipment</h3>
              <p>
                These garments are designed to work in harmony with other safety equipment such as anti-static shoes and specialized gloves, providing comprehensive worker protection.
              </p>

              <h2>Maintenance and Care</h2>
              <p>
                To maintain the effectiveness of anti-static workwear, specific maintenance guidelines must be followed:
              </p>
              <ul>
                <li><strong>Specialized Washing:</strong> Using special detergents that don't affect conductive fibers</li>
                <li><strong>Regular Testing:</strong> Testing surface resistance regularly</li>
                <li><strong>Proper Storage:</strong> In a dry and clean environment</li>
                <li><strong>Scheduled Replacement:</strong> According to a specific schedule or when properties deteriorate</li>
              </ul>

              <h2>Investment in Safety and Productivity</h2>
              <p>
                Although anti-static workwear may be more expensive than regular clothing, investing in it yields significant returns through:
              </p>
              <ul>
                <li>Reducing accident and explosion risks</li>
                <li>Protecting sensitive equipment from damage</li>
                <li>Improving product quality</li>
                <li>Compliance with international and local standards</li>
                <li>Enhancing worker confidence and productivity</li>
              </ul>

              <h2>Future of Anti-Static Workwear</h2>
              <p>
                With continuous technological development, we see new innovations in this field including:
              </p>
              <ul>
                <li><strong>Smart Fabrics:</strong> That automatically adapt to humidity and temperature levels</li>
                <li><strong>Integrated Monitoring Systems:</strong> For real-time protection effectiveness monitoring</li>
                <li><strong>Nanomaterials:</strong> To improve performance and reduce weight</li>
                <li><strong>Comfortable Designs:</strong> That combine protection with maximum comfort</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Anti-static workwear is a vital investment in worker safety and asset protection in specialized Saudi industries. With the continued growth of industrial and technological sectors in the Kingdom, the importance of this specialized clothing increases as an integral part of comprehensive safety strategy.
              </p>
              
              <p>
                Investing in high-quality anti-static workwear is not just compliance with safety standards, but an investment in a safer and more productive future for Saudi industries, contributing to achieving the Kingdom's Vision 2030 goals for economic diversification and technological development.
              </p>

              <div className="mt-10 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Engineer Ahmed Al-Salem, expert in industrial safety and specialized workwear, with over 15 years of experience in petrochemical and electronics industries in Saudi Arabia.</p>
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