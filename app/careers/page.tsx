import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, MapPin, Clock, ArrowRight, Users, Award, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Career Opportunities | UniformSA',
  description: 'Join our team of professionals in the uniform and workwear industry. Discover exciting career opportunities with competitive benefits and growth potential.',
  keywords: 'careers, jobs, employment, uniform industry, workwear, Saudi Arabia, KSA, professional development',
  openGraph: {
    images: ['/images/hospitality/modern_hospitality_design_uniforms.jpeg'],
    title: 'Career Opportunities | UniformSA',
    description: 'Join our team of professionals in the uniform and workwear industry. Discover exciting career opportunities with competitive benefits and growth potential.'
  },
}

const benefits = [
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Professional Growth',
    description: 'Continuous learning and development opportunities with clear career progression paths'
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Health & Wellness',
    description: 'Comprehensive healthcare coverage and wellness programs for you and your family'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and generous leave policies'
  }
]

const currentOpenings = [
  {
    title: 'Senior Fashion Designer',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    department: 'Design',
    description: 'Lead our design team in creating innovative uniform solutions for corporate clients.',
    requirements: [
      'Bachelor\'s degree in Fashion Design or related field',
      '8+ years of experience in uniform/corporate wear design',
      'Strong portfolio showcasing corporate wear collections',
      'Proficiency in Adobe Creative Suite and 3D design tools'
    ]
  },
  {
    title: 'Supply Chain Manager',
    location: 'Jeddah, Saudi Arabia',
    type: 'Full-time',
    department: 'Operations',
    description: 'Oversee and optimize our supply chain operations across the Kingdom.',
    requirements: [
      'Bachelor\'s degree in Supply Chain Management or related field',
      '5+ years of experience in supply chain management',
      'Strong knowledge of Saudi logistics and customs regulations',
      'Experience with ERP systems and inventory management'
    ]
  },
  {
    title: 'Sales Representative',
    location: 'Dubai, UAE',
    type: 'Full-time',
    department: 'Sales',
    description: 'Drive business growth through client acquisition and relationship management.',
    requirements: [
      'Bachelor\'s degree in Business or related field',
      '3+ years of B2B sales experience',
      'Strong communication and negotiation skills',
      'Knowledge of the uniform industry is a plus'
    ]
  }
]

export default function CareersPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Join Our Team of Professionals
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                Be part of Saudi Arabia's leading uniform and workwear solutions provider. We're looking for talented individuals who share our passion for excellence and innovation.
              </p>
              <div className="mt-8">
                <Link
                  href="#openings"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/hospitality/modern_hospitality_design_uniforms.jpeg"
                alt="Professional team showcasing modern uniform designs"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Join UniformSA?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            We offer more than just a job - we provide a platform for growth, innovation, and professional excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-6 dark:border-gray-800"
            >
              <div className="mb-4 text-primary">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings Section */}
      <div id="openings" className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Current Openings
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Explore our current job opportunities and find your perfect role with us.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {currentOpenings.map((job, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Requirements:
                  </h4>
                  <ul className="mt-2 list-inside list-disc text-gray-600 dark:text-gray-400">
                    {job.requirements.map((requirement, idx) => (
                      <li key={idx}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Application Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            We've streamlined our hiring process to make it efficient and transparent.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: '01',
              title: 'Application Review',
              description: 'Our team reviews your application and qualifications'
            },
            {
              step: '02',
              title: 'Initial Screening',
              description: 'Phone interview to discuss your experience and goals'
            },
            {
              step: '03',
              title: 'Technical Assessment',
              description: 'Skills evaluation and technical interview'
            },
            {
              step: '04',
              title: 'Final Interview',
              description: 'Meeting with department leaders and team members'
            }
          ].map((step, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-6 dark:border-gray-800"
            >
              <div className="mb-4 text-2xl font-bold text-primary">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary px-8 py-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Join Our Team?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Don't see a position that matches your skills? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-primary hover:bg-gray-100"
              >
                Submit Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 