import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Bookmark, Filter, Grid3X3, List } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | UniformSA - Saudi Arabia's Premier Uniform Provider",
  description: "Browse our portfolio of custom-designed uniforms for various industries across Saudi Arabia. See our work for security, hospitality, healthcare, and corporate clients.",
  openGraph: {
    title: "Portfolio | UniformSA - Saudi Arabia's Premier Uniform Provider",
    description: "Browse our portfolio of custom-designed uniforms for various industries across Saudi Arabia. See our work for security, hospitality, healthcare, and corporate clients.",
    images: ["/images/og-portfolio.jpg"],
  },
}

export default function PortfolioPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Uniform Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Discover our custom uniform designs created for leading organizations across Saudi Arabia
          </p>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <span className="font-medium">Filter By:</span>
                <select className="border rounded-md px-3 py-1.5">
                  <option value="all">All Industries</option>
                  <option value="security">Security</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>
              <div className="flex items-center gap-2 border rounded-md">
                <button className="p-2 bg-primary text-white rounded-l-md">
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button className="p-2">
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image 
                src="/images/portfolio/security-uniforms-khobar.jpg" 
                alt="Security Guard Uniforms for Khobar Corporate Complex"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Security</span>
                <button className="text-gray-400 hover:text-primary">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">Security Guard Uniforms for Khobar Corporate Complex</h3>
              <p className="text-muted-foreground mb-4">
                Custom-designed security uniforms balancing professionalism with comfort for Saudi Arabia's hot climate.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2023</span>
                </div>
                <Link href="/portfolio/security-uniforms-khobar" className="flex items-center gap-1 text-primary font-medium">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image 
                src="/images/portfolio/hospitality-uniforms-riyadh.jpg" 
                alt="Hotel Staff Uniforms for Luxury Riyadh Hotel"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Hospitality</span>
                <button className="text-gray-400 hover:text-primary">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">Hotel Staff Uniforms for Luxury Riyadh Hotel</h3>
              <p className="text-muted-foreground mb-4">
                Elegant staff uniforms incorporating traditional Saudi elements with modern luxury aesthetics.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2023</span>
                </div>
                <Link href="/portfolio/hospitality-uniforms-riyadh" className="flex items-center gap-1 text-primary font-medium">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image 
                src="/images/portfolio/healthcare-uniforms-jeddah.jpg" 
                alt="Medical Staff Uniforms for Jeddah Hospital"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
                <button className="text-gray-400 hover:text-primary">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Staff Uniforms for Jeddah Hospital</h3>
              <p className="text-muted-foreground mb-4">
                Functional and comfortable healthcare uniforms designed with antimicrobial fabrics and modest styling.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2022</span>
                </div>
                <Link href="/portfolio/healthcare-uniforms-jeddah" className="flex items-center gap-1 text-primary font-medium">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image 
                src="/images/portfolio/corporate-uniforms-dammam.jpg" 
                alt="Corporate Uniforms for Dammam Oil Company"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Corporate</span>
                <button className="text-gray-400 hover:text-primary">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Uniforms for Dammam Oil Company</h3>
              <p className="text-muted-foreground mb-4">
                Professional office attire and field uniforms designed for both office and on-site environments.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2022</span>
                </div>
                <Link href="/portfolio/corporate-uniforms-dammam" className="flex items-center gap-1 text-primary font-medium">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 5 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image 
                src="/images/portfolio/retail-uniforms-mecca.jpg" 
                alt="Retail Staff Uniforms for Mecca Mall"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Retail</span>
                <button className="text-gray-400 hover:text-primary">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">Retail Staff Uniforms for Mecca Mall</h3>
              <p className="text-muted-foreground mb-4">
                Contemporary retail uniforms designed for comfort during long shifts while maintaining a polished appearance.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2021</span>
                </div>
                <Link href="/portfolio/retail-uniforms-mecca" className="flex items-center gap-1 text-primary font-medium">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64">
              <Image 
                src="/images/portfolio/government-uniforms-riyadh.jpg" 
                alt="Government Staff Uniforms for Riyadh Municipality"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Government</span>
                <button className="text-gray-400 hover:text-primary">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">Government Staff Uniforms for Riyadh Municipality</h3>
              <p className="text-muted-foreground mb-4">
                Official uniforms combining traditional Saudi design elements with practical features for everyday wear.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2021</span>
                </div>
                <Link href="/portfolio/government-uniforms-riyadh" className="flex items-center gap-1 text-primary font-medium">
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Load More Projects
          </button>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Custom Uniforms?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our design team is ready to create unique uniforms tailored to your organization's needs and brand identity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services/custom-design"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Our Design Services
            </Link>
            <Link
              href="/request-quote"
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 