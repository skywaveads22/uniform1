import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Request a Quote | UniformSA",
  description: "Request a personalized quote for your uniform needs in Saudi Arabia. Fast, professional service for all sectors.",
}

export default function RequestQuotePage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Request a Quote</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Fill in the form below to receive a personalized quote for your uniform requirements. 
            Our team will get back to you within 24 hours with detailed pricing and options.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form className="space-y-6 rounded-lg border bg-card p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+966"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your company name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Industry / Sector
                </label>
                <select
                  id="industry"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="" disabled selected>Select an industry</option>
                  <option value="aviation">Aviation</option>
                  <option value="education">Education</option>
                  <option value="government">Government</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="industrial">Industrial</option>
                  <option value="security">Security</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Estimated Quantity
                </label>
                <select
                  id="quantity"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="" disabled selected>Select quantity range</option>
                  <option value="10-50">10-50 units</option>
                  <option value="51-100">51-100 units</option>
                  <option value="101-500">101-500 units</option>
                  <option value="501-1000">501-1000 units</option>
                  <option value="1000+">1000+ units</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Please describe your uniform requirements in detail (types, colors, styles, delivery timeline, etc.)"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Why Choose UniformSA?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-primary">✓</div>
                  <p className="ml-2 text-sm text-muted-foreground">Saudi market expertise with climate & cultural understanding</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-primary">✓</div>
                  <p className="ml-2 text-sm text-muted-foreground">Premium quality materials and craftsmanship</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-primary">✓</div>
                  <p className="ml-2 text-sm text-muted-foreground">Custom design services with branding options</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-primary">✓</div>
                  <p className="ml-2 text-sm text-muted-foreground">Bulk order specialists with competitive pricing</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-primary">✓</div>
                  <p className="ml-2 text-sm text-muted-foreground">Fast delivery throughout Saudi Arabia</p>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="ml-2 text-sm text-muted-foreground">+966 12 345 6789</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="ml-2 text-sm text-muted-foreground">info@uniformsa.com</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="ml-2 text-sm text-muted-foreground">King Fahd Road, Riyadh, Saudi Arabia</p>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/contact" className="text-sm font-medium text-primary hover:underline">
                  View all contact options →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 