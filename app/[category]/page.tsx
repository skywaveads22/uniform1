import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Clock, Star, Eye, BookOpen, FileBadge } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getImagePath } from '@/lib/image-helper'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  createdAt: string
  category: string
}

const CATEGORIES = [
  'aviation',
  'education',
  'government',
  'healthcare',
  'hospitality',
  'industrial',
  'security'
]

const CATEGORY_METADATA = {
  'aviation': {
    title: 'Aviation Uniforms and Articles | Professional Aviation Attire in Saudi Arabia',
    description: 'Explore professional aviation uniforms and expert articles about aviation attire designed for Saudi Arabian airlines and airports. High-quality, authoritative aviation uniforms for all sectors.',
    keywords: 'aviation uniforms, airline staff attire, Saudi Arabia aviation uniforms, professional aviation clothing, airport staff uniforms, cabin crew uniforms',
    image: '/images/aviation/Aviation_uniforms_Saudi_Arabia_KSA.jpg',
  },
  'education': {
    title: 'Education Uniforms and Articles | Professional Education Attire in Saudi Arabia',
    description: 'Explore professional education uniforms and expert articles about education attire designed for Saudi Arabian schools and universities. High-quality, authoritative education uniforms for all sectors.',
    keywords: 'education uniforms, school staff attire, Saudi Arabia education uniforms, professional education clothing, university staff uniforms, teacher uniforms',
    image: '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
  },
  'government': {
    title: 'Government Uniforms and Articles | Professional Government Attire in Saudi Arabia',
    description: 'Explore professional government uniforms and expert articles about government attire designed for Saudi Arabian public sector. High-quality, authoritative government uniforms for all departments.',
    keywords: 'government uniforms, public sector attire, Saudi Arabia government uniforms, professional government clothing, ministerial staff uniforms, official uniforms',
    image: '/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg',
  },
  'healthcare': {
    title: 'Healthcare Uniforms and Articles | Professional Healthcare Attire in Saudi Arabia',
    description: 'Explore professional healthcare uniforms and expert articles about healthcare attire designed for Saudi Arabian medical facilities. High-quality, authoritative healthcare uniforms for all sectors.',
    keywords: 'healthcare uniforms, medical staff attire, Saudi Arabia healthcare uniforms, professional healthcare clothing, hospital staff uniforms, nurse uniforms',
    image: '/images/healthcare/Healthcare_uniforms.jpg',
  },
  'hospitality': {
    title: 'Hospitality Uniforms and Articles | Professional Hospitality Attire in Saudi Arabia',
    description: 'Explore professional hospitality uniforms and expert articles about hospitality attire designed for Saudi Arabian hotels and restaurants. High-quality, authoritative hospitality uniforms for all sectors.',
    keywords: 'hospitality uniforms, hotel staff attire, Saudi Arabia hospitality uniforms, professional hospitality clothing, restaurant staff uniforms, concierge uniforms',
    image: '/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg',
  },
  'industrial': {
    title: 'Industrial Uniforms and Articles | Professional Industrial Attire in Saudi Arabia',
    description: 'Explore professional industrial uniforms and expert articles about industrial attire designed for Saudi Arabian manufacturing and construction. High-quality, authoritative industrial uniforms for all sectors.',
    keywords: 'industrial uniforms, manufacturing staff attire, Saudi Arabia industrial uniforms, professional industrial clothing, construction staff uniforms, factory uniforms',
    image: '/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg',
  },
  'security': {
    title: 'Security Uniforms and Articles | Professional Security Attire in Saudi Arabia',
    description: 'Explore professional security uniforms and expert articles about security attire designed for Saudi Arabian climate and regulations. High-quality, authoritative security uniforms for all sectors.',
    keywords: 'security uniforms, security guard attire, Saudi Arabia security uniforms, professional security clothing, security tactical gear, high-visibility security uniforms',
    image: '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg',
  }
}

function getPostsByCategory(category: string): Post[] {
  const filePath = path.join(process.cwd(), 'src', 'data', `${category}.json`)
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    return []
  }
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category,
  }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  if (!CATEGORIES.includes(params.category)) {
    return {}
  }

  const categoryInfo = CATEGORY_METADATA[params.category as keyof typeof CATEGORY_METADATA]
  
  return {
    title: categoryInfo.title,
    description: categoryInfo.description,
    keywords: categoryInfo.keywords,
    openGraph: {
      images: [categoryInfo.image],
    },
  }
}

interface PageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: PageProps) {
  if (!CATEGORIES.includes(params.category)) {
    notFound()
  }

  const posts = getPostsByCategory(params.category)
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const categoryImage = CATEGORY_METADATA[params.category as keyof typeof CATEGORY_METADATA].image
  const formattedCategoryImage = getImagePath(categoryImage)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Professional {categoryName} Uniforms & Resources
      </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                High-quality {params.category} uniforms designed for authority, comfort, and durability. Plus expert articles on {params.category} attire for Saudi Arabian conditions.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
              >
                Request Quote
              </Link>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <Image
                src={formattedCategoryImage}
                alt={`Professional ${categoryName} in Saudi Arabia`}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{categoryName} Uniform Resources</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Expert articles on {params.category} uniforms covering design, regulations, materials, and features specifically for Saudi Arabian environments.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 6).map((post) => (
              <div key={post.id} className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={getImagePath(post.image)}
                  alt={post.title}
                  fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                        {categoryName}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href={`/${params.category}/all-articles`}
              className="inline-block rounded-lg border border-primary bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-50"
            >
              View All {categoryName} Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our {categoryName} Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {getUniformCategories(params.category).map((category, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={getImagePath(category.image)}
                    alt={category.title + ` - ${categoryName} Uniforms Saudi Arabia`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Expert {categoryName} Uniform Knowledge
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our comprehensive resources cover all aspects of {params.category} uniforms, from design and regulations to practical considerations for Saudi Arabian environments.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Regulatory Compliance",
                description: `Articles covering Saudi Arabian regulations for ${params.category} uniforms across different sectors and contexts.`
              },
              {
                icon: Eye,
                title: "Professional Design",
                description: `Detailed information about design elements for ${params.category} uniforms that enhance professional appearance.`
              },
              {
                icon: Clock,
                title: "Climate Adaptation",
                description: `Expert guidance on selecting appropriate materials for ${params.category} uniforms in Saudi Arabia's demanding climate.`
              },
              {
                icon: Star,
                title: "Professional Image",
                description: `Recommendations for maintaining an authoritative and professional appearance for ${params.category} personnel.`
              },
              {
                icon: BookOpen,
                title: "Industry Standards",
                description: `Comprehensive coverage of best practices and industry standards for ${params.category} uniform design and implementation.`
              },
              {
                icon: FileBadge,
                title: "Functional Features",
                description: `Resources about practical features including pockets, comfort elements, and reinforcements for functional ${params.category} attire.`
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-xl border bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <feature.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
              </div>
            </div>
      </section>

      {/* Top Articles Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Most Popular {categoryName} Articles</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our most-read resources for {params.category} uniform knowledge and expertise, tailored for Saudi Arabian operations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {posts
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .slice(0, 4)
              .map((post) => (
                <div key={post.id} className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/3">
                      <Image
                        src={getImagePath(post.image)}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
                          {post.title}
                        </h3>
                        <p className="mb-4 text-gray-600 line-clamp-2">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                          {categoryName}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
          </div>
        ))}
      </div>
    </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Outfit Your {categoryName} Team?</h2>
          <p className="mb-8 mx-auto max-w-3xl text-xl text-primary-foreground/90">
            Contact us today for customized uniform solutions and expert guidance on {params.category} attire for your specific needs in Saudi Arabia.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
            >
              Request Quote
            </Link>
            <Link
              href={`/services/${params.category}`}
              className="inline-block rounded-lg bg-transparent border border-white px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              View {categoryName} Uniforms
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// Function to get uniform categories based on the category type
function getUniformCategories(category: string) {
  switch(category) {
    case 'aviation':
      return [
        {
          image: `/images/aviation/Pilot_uniforms.jpg`,
          title: "Pilot Uniforms",
          description: `Professional aviation pilot uniforms for airlines and private operations in Saudi Arabia.`
        },
        {
          image: `/images/aviation/Cabin_crew_uniforms.jpg`,
          title: "Cabin Crew Uniforms",
          description: `Stylish and practical cabin crew uniforms designed for comfort and Saudi Arabian airline standards.`
        },
        {
          image: `/images/aviation/Ground_staff_uniforms_aviation.jpg`,
          title: "Ground Staff Uniforms",
          description: `Specialized aviation ground staff uniforms designed for specific roles in Saudi Arabian airports.`
        },
        {
          image: `/images/aviation/airport_security_wear.jpg`,
          title: `Airport Security Uniforms`,
          description: `Professional airport security uniforms with enhanced functionality for Saudi Arabian aviation security.`
        },
        {
          image: `/images/aviation/Aircraft_maintenance_technician_uniforms.jpg`,
          title: "Maintenance Crew Uniforms",
          description: `Durable maintenance crew uniforms designed for technical aviation staff in Saudi Arabian conditions.`
        },
        {
          image: `/images/aviation/Official_aviation_attire.jpg`,
          title: "Aviation Management Uniforms",
          description: `High-end aviation management uniforms featuring superior materials for Saudi Arabian aviation executives.`
        }
      ];
    case 'education':
      return [
        {
          image: `/images/education/School_staff_uniforms.jpg`,
          title: "Teacher Uniforms",
          description: `Professional education teacher uniforms for Saudi Arabian schools and educational institutions.`
        },
        {
          image: `/images/education/Education_uniforms.jpg`,
          title: "School Uniforms",
          description: `High-quality school uniforms designed for comfort in Saudi Arabian educational settings.`
        },
        {
          image: `/images/education/uniforms_sports_kits.jpg`,
          title: "Physical Education Uniforms",
          description: `Specialized physical education uniforms designed for activity and Saudi Arabian climate.`
        },
        {
          image: `/images/education/School_shirts.jpg`,
          title: `School Shirts`,
          description: `Professional school shirts for educational facilities in Saudi Arabia.`
        },
        {
          image: `/images/education/Private_school_uniforms.jpg`,
          title: "Private School Uniforms",
          description: `Distinguished private school uniforms designed for Saudi Arabian educational environments.`
        },
        {
          image: `/images/education/International_school_uniforms_KSA.jpg`,
          title: "International School Uniforms",
          description: `Premium international school uniforms featuring high-quality materials for Saudi Arabian education.`
        }
      ];
    case 'government':
      return [
        {
          image: `/images/government/Municipality_uniforms.jpg`,
          title: "Municipal Staff Uniforms",
          description: `Professional government municipal uniforms for Saudi Arabian public service employees.`
        },
        {
          image: `/images/government/Government_employee_uniforms.jpg`,
          title: "Government Employee Uniforms",
          description: `Formal administrative uniforms designed for Saudi Arabian government office settings.`
        },
        {
          image: `/images/government/Official_government_suits.jpg`,
          title: "Official Government Suits",
          description: `Distinguished protocol officer uniforms for ceremonial and official Saudi government functions.`
        },
        {
          image: `/images/government/Public_sector_workwear.jpg`,
          title: `Public Sector Workwear`,
          description: `Professional public service uniforms for Saudi Arabian government representatives.`
        },
        {
          image: `/images/government/Government_agency_uniforms.jpg`,
          title: "Government Agency Uniforms",
          description: `Durable field officer uniforms designed for government work in Saudi Arabian outdoor conditions.`
        },
        {
          image: `/images/government/Civil_service_uniforms.jpg`,
          title: "Civil Service Uniforms",
          description: `Premium executive government attire featuring superior tailoring for Saudi Arabian officials.`
        }
      ];
    case 'healthcare':
      return [
        {
          image: `/images/healthcare/Doctor_uniforms_attire.jpg`,
          title: "Doctor Uniforms",
          description: `Professional healthcare doctor uniforms for Saudi Arabian medical facilities.`
        },
        {
          image: `/images/healthcare/Nurse_uniforms.jpg`,
          title: "Nurse Uniforms",
          description: `Comfortable nurse uniforms designed for the demands of Saudi Arabian healthcare settings.`
        },
        {
          image: `/images/healthcare/Scrubs_uniforms.jpg`,
          title: "Scrubs Uniforms",
          description: `High-quality scrubs designed for comfort and practicality in Saudi Arabian medical environments.`
        },
        {
          image: `/images/healthcare/Lab_coats_medical.jpg`,
          title: `Lab Coats`,
          description: `Professional lab coats for healthcare professionals in Saudi Arabian research and clinical settings.`
        },
        {
          image: `/images/healthcare/Medical_receptionist_uniforms.jpg`,
          title: "Medical Receptionist Uniforms",
          description: `Stylish medical receptionist uniforms designed for Saudi Arabian healthcare administration.`
        },
        {
          image: `/images/healthcare/Pharmacy_technician_wear.jpg`,
          title: "Pharmacy Staff Uniforms",
          description: `Distinguished pharmacy staff uniforms for Saudi Arabian pharmaceutical professionals.`
        }
      ];
    case 'hospitality':
      return [
        {
          image: `/images/hospitality/Hotel_uniforms.jpeg`,
          title: "Hotel Staff Uniforms",
          description: `Professional hospitality uniforms for hotel staff in Saudi Arabian luxury accommodations.`
        },
        {
          image: `/images/hospitality/Restaurant_uniforms.jpeg`,
          title: "Restaurant Uniforms",
          description: `Elegant restaurant uniforms designed for Saudi Arabian dining establishments.`
        },
        {
          image: `/images/hospitality/Chef_uniforms_Chef_wear.jpeg`,
          title: "Chef Uniforms",
          description: `High-quality chef uniforms designed for culinary professionals in Saudi Arabian kitchens.`
        },
        {
          image: `/images/hospitality/Housekeeping_uniforms.jpeg`,
          title: `Housekeeping Uniforms`,
          description: `Practical housekeeping uniforms for hospitality staff in Saudi Arabian hotels and resorts.`
        },
        {
          image: `/images/hospitality/concierge_suits.jpeg`,
          title: "Concierge Suits",
          description: `Distinguished concierge uniforms designed for front-of-house staff in Saudi Arabian luxury venues.`
        },
        {
          image: `/images/hospitality/Banquet_staff_uniforms_Event_staff_uniforms.jpeg`,
          title: "Event Staff Uniforms",
          description: `Professional event staff uniforms for Saudi Arabian hospitality and entertainment venues.`
        }
      ];
    case 'industrial':
      return [
        {
          image: `/images/industrial/Factory_worker_uniforms.jpeg`,
          title: "Factory Worker Uniforms",
          description: `Durable industrial manufacturing uniforms for factory workers in Saudi Arabian facilities.`
        },
        {
          image: `/images/industrial/Construction_worker_uniforms_attire.jpeg`,
          title: "Construction Worker Uniforms",
          description: `Rugged construction worker uniforms designed for Saudi Arabian building sites and safety requirements.`
        },
        {
          image: `/images/industrial/Technician_uniforms_maintenance.jpeg`,
          title: "Maintenance Staff Uniforms",
          description: `Practical maintenance staff uniforms designed for industrial settings in Saudi Arabia.`
        },
        {
          image: `/images/industrial/High_visibility_clothing_Hi_vis_uniforms.jpeg`,
          title: `High Visibility Uniforms`,
          description: `Professional safety supervisor uniforms with enhanced visibility features for Saudi Arabian industrial sites.`
        },
        {
          image: `/images/industrial/Oil_and_Gas_sector_uniforms_Oilfield_workwear.jpeg`,
          title: "Oil & Gas Worker Uniforms",
          description: `Specialized oil and gas worker uniforms designed for Saudi Arabian energy sector requirements.`
        },
        {
          image: `/images/industrial/Site_engineer_uniforms.jpeg`,
          title: "Engineering Staff Uniforms",
          description: `Premium engineering staff uniforms for industrial technical professionals in Saudi Arabia.`
        }
      ];
    case 'security':
    default:
      return [
        {
          image: `/images/security/class_a_security_dress_uniforms.jpeg`,
          title: "Formal Uniforms",
          description: `Professional formal security uniforms for official occasions and executive operations in Saudi Arabia.`
        },
        {
          image: `/images/security/class_b_security_duty_uniforms.jpeg`,
          title: "Daily Wear Uniforms",
          description: `Durable daily wear security uniforms designed for the Saudi climate and regular use.`
        },
        {
          image: `/images/security/High_visibility_security_uniforms.jpeg`,
          title: "Special Purpose Uniforms",
          description: `Specialized security uniforms designed for specific roles and environments in Saudi Arabian settings.`
        },
        {
          image: `/images/security/event_security_staff_vests.jpeg`,
          title: `Security Accessories`,
          description: `Professional accessories to complement security uniforms and enhance functionality.`
        },
        {
          image: `/images/security/construction_site_security_attire.jpeg`,
          title: "Outdoor Uniforms",
          description: `Weather-resistant security uniforms designed for outdoor operations in Saudi Arabian conditions.`
        },
        {
          image: `/images/security/hospital_security_staff_uniforms.jpeg`,
          title: "Premium Collection",
          description: `High-end security uniforms featuring superior materials and craftsmanship for prestigious organizations.`
        }
      ];
  }
} 