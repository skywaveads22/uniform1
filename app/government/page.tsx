import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Award, FileCheck, Star, Users, Building } from 'lucide-react'
import { Metadata } from 'next'
import { getImagePath } from '@/lib/image-helper'

// Sample posts for government category
const governmentPosts = [
  {
    id: '1',
    title: 'Ensuring Comfort for Government Employees Working Outdoors in KSA',
    slug: 'ensuring-comfort-for-government-employees-working-outdoors-in-ksa',
    excerpt: 'Desipio tristis versus tamquam demo sono. Debitis volaticus sto. Cibus aestas deporto vesper ait.',
    image: '/images/government/government_field_staff_wear.jpg',
    createdAt: '2025-04-15T10:00:00.000Z',
    category: 'government'
  },
  {
    id: '2',
    title: 'Durable Workwear for Field Operatives in Government Agencies',
    slug: 'durable-workwear-for-field-operatives-in-government-agencies',
    excerpt: 'Demum tenus conicio tonsor subnecto sperno asporto basium bardus. Anser caveo adolescens.',
    image: '/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg',
    createdAt: '2025-02-28T10:00:00.000Z',
    category: 'government'
  },
  {
    id: '3',
    title: 'Procurement Processes for Government Uniforms in Saudi Arabia',
    slug: 'procurement-processes-for-government-uniforms-in-saudi-arabia',
    excerpt: 'Cattus solitudo defungo quod attonbitus color tripudio templum. Aro consequuntur aeneus amitto.',
    image: '/images/government/Official_government_suits.jpg',
    createdAt: '2025-02-04T10:00:00.000Z',
    category: 'government'
  },
  {
    id: '4',
    title: 'Sustainable and Ethical Uniform Solutions for the Saudi Public Sector',
    slug: 'sustainable-and-ethical-uniform-solutions-for-the-saudi-public-sector',
    excerpt: 'Verto temptatio vesco barba stips vulnero ceno constans sum. Cetera argumentum aegrotatio.',
    image: '/images/government/Civil_service_uniforms.jpg',
    createdAt: '2025-02-04T10:00:00.000Z',
    category: 'government'
  }
];

export default function GovernmentPage() {
  const categoryName = 'Government';
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Government Uniforms
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90">
                Premium uniform solutions for government institutions in Saudi Arabia, designed to meet official standards while ensuring comfort and durability.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
              >
                Request Quote
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/government/Government_uniforms_Saudi_Arabia_KSA.jpg"
                alt="Government Uniforms in Saudi Arabia"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Government Uniform Categories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/images/government/Municipality_uniforms.jpg",
                title: "Municipal Staff Uniforms",
                description: "Professional government municipal uniforms for Saudi Arabian public service employees."
              },
              {
                image: "/images/government/Government_employee_uniforms.jpg",
                title: "Government Employee Uniforms",
                description: "Formal administrative uniforms designed for Saudi Arabian government office settings."
              },
              {
                image: "/images/government/Official_government_suits.jpg",
                title: "Official Government Suits",
                description: "Distinguished protocol officer uniforms for ceremonial and official Saudi government functions."
              },
              {
                image: "/images/government/Public_sector_workwear.jpg",
                title: "Public Sector Workwear",
                description: "Professional public service uniforms for Saudi Arabian government representatives."
              },
              {
                image: "/images/government/Government_agency_uniforms.jpg",
                title: "Government Agency Uniforms",
                description: "Durable field officer uniforms designed for government work in Saudi Arabian outdoor conditions."
              },
              {
                image: "/images/government/Civil_service_uniforms.jpg",
                title: "Civil Service Uniforms",
                description: "Premium executive government attire featuring superior tailoring for Saudi Arabian officials."
              }
            ].map((category, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      // Set fallback image if the image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite error loop
                      target.src = `/images/government/Government_uniforms.jpg`;
                    }}
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
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Why Choose Our Government Uniforms?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Official Compliance",
                    description: "All our government uniforms meet Saudi Arabian regulations and official standards."
                  },
                  {
                    icon: Star,
                    title: "Premium Quality",
                    description: "Superior materials and craftsmanship for long-lasting, professional attire."
                  },
                  {
                    icon: FileCheck,
                    title: "Procurement Support",
                    description: "Expert assistance with government tender requirements and documentation."
                  },
                  {
                    icon: Award,
                    title: "Certified Supplier",
                    description: "Approved vendor status with key government institutions across Saudi Arabia."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-[200px]">
                <Image
                  src="/images/government/approved_government_fabrics.jpg"
                  alt="Government Approved Fabrics"
                  fill
                  className="rounded-lg object-cover"
                  onError={(e) => {
                    // Set fallback image if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite error loop
                    target.src = `/images/government/Government_uniforms.jpg`;
                  }}
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/government/Official_government_uniform_design.jpg"
                  alt="Official Uniform Designs"
                  fill
                  className="rounded-lg object-cover"
                  onError={(e) => {
                    // Set fallback image if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite error loop
                    target.src = `/images/government/Government_uniforms.jpg`;
                  }}
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/government/government_uniform_consultation.jpg"
                  alt="Uniform Consultation Services"
                  fill
                  className="rounded-lg object-cover"
                  onError={(e) => {
                    // Set fallback image if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite error loop
                    target.src = `/images/government/Government_uniforms.jpg`;
                  }}
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/images/government/government_uniform_inventory_management.jpg"
                  alt="Inventory Management"
                  fill
                  className="rounded-lg object-cover"
                  onError={(e) => {
                    // Set fallback image if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite error loop
                    target.src = `/images/government/Government_uniforms.jpg`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Articles Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Most Popular Government Articles</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our most-read resources for government uniform knowledge and expertise, tailored for Saudi Arabian operations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {governmentPosts
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((post) => (
                <div key={post.id} className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // Set fallback image if the image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; // Prevent infinite error loop
                          target.src = `/images/government/Government_uniforms.jpg`;
                        }}
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
                          Government
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
          <h2 className="mb-6 text-4xl font-bold">Ready to Outfit Your Government Institution?</h2>
          <p className="mb-8 mx-auto max-w-3xl text-xl text-primary-foreground/90">
            Contact us today for customized uniform solutions that meet official standards and project the right image for your Saudi Arabian government organization.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
            >
              Request Quote
            </Link>
            <Link
              href="/services/government"
              className="inline-block rounded-lg bg-transparent border border-white px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              View Government Uniforms
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 