"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with improved design */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/healthcare/Medical_uniform_fabrics.jpg"
            alt="Privacy Policy"
            fill
            className="object-cover brightness-[0.6] contrast-[1.15] saturate-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/75 to-transparent"></div>
        </div>
        
        <div className="relative py-32 md:py-40 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl ml-auto">
              <div className="inline-block mb-3 rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
                Important information for our website users
              </div>
              <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">
                Privacy Policy
              </h1>
              <p className="mb-8 text-xl text-white/90 leading-relaxed">
                We are committed to protecting your privacy and personal information, ensuring it is used safely and responsibly
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/terms" 
                  className="rounded-md bg-white/20 px-5 py-2.5 text-white hover:bg-white/30 backdrop-blur-sm transition duration-300"
                >
                  Terms and Conditions
                </Link>
                <Link 
                  href="/contact" 
                  className="rounded-md bg-white px-5 py-2.5 text-primary font-medium hover:bg-gray-100 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page navigation */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Content Section - with improved layout and icons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Introduction */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">Introduction</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Uniform Saudi Arabia values the privacy of our website visitors and customers. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and services. By using our site, you agree to the practices outlined in this policy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This policy was last updated on <span className="font-medium">June 15, 2023</span> and applies to all information we collect through our website, applications, and other platforms we operate.
              </p>
            </div>

            {/* Information Collection */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">Information We Collect</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We may collect the following information:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-lg text-gray-700 list-none">
                  <li className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Your name and surname</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Contact information including email address and phone number</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Demographic information such as postal code, preferences, and interests</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Other information relevant to customer surveys and/or offers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Details of your previous orders and purchases</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Technical information such as IP address and browser data when you visit our site</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                In some cases, we may collect additional information if you apply for available positions with us or make special requests for uniforms.
              </p>
            </div>

            {/* Information Usage */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">How We Use Information</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We use this information to better understand your needs and provide better service, specifically for the following reasons:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Order Processing</h3>
                      <p className="text-gray-600">To complete your orders and provide services you request effectively</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Service Improvement</h3>
                      <p className="text-gray-600">To develop our products and services to better meet your needs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Promotional Information</h3>
                      <p className="text-gray-600">About new products and special offers (only if you request this)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Market Research</h3>
                      <p className="text-gray-600">To contact you regarding surveys (only with your consent)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Customizing Your Experience</h3>
                      <p className="text-gray-600">To make our website more suited to your personal preferences</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Legal Compliance</h3>
                      <p className="text-gray-600">To fulfill our legal and regulatory obligations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">Security</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are committed to ensuring the security of your information. To prevent unauthorized access or disclosure, we have implemented appropriate physical, electronic, and managerial procedures to safeguard the information we collect online.
                  </p>
                  <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                    Our security measures include:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Using encryption technologies to protect sensitive data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Implementing physical and electronic access controls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Regularly reviewing privacy practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">Training staff on the importance of data confidentiality</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="rounded-lg bg-primary/5 p-6 text-primary flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-center font-medium mt-3">Protecting your data is our top priority</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">Cookies</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our website uses cookies to track site usage. A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie can be retrieved during future visits.
                  </p>
                  <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                    Cookies allow us to customize our website according to your individual needs and provide a smoother experience. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
                  </p>
                </div>
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="rounded-full bg-primary/10 p-6 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 rounded-lg p-5 border-l-4 border-primary">
                <h3 className="font-semibold text-gray-800 mb-2">Types of cookies we use:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="font-medium">Essential cookies:</span>
                      <span className="text-gray-700"> Enable core functionality such as login and shopping cart</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="font-medium">Analytical cookies:</span>
                      <span className="text-gray-700"> Help us improve our website by collecting information about how you use it</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="font-medium">Functional cookies:</span>
                      <span className="text-gray-700"> Remember your preferences and customize your experience</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links to Other Websites */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">Links to Other Websites</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites and they are not governed by this privacy statement.
              </p>
              <div className="mt-4 p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                <div className="flex gap-3">
                  <div className="text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    You should exercise caution and look at the privacy statement applicable to the website in question before sharing any personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information Control */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">Controlling Your Personal Information</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                You may restrict the collection or use of your personal information in the following ways:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">Form Settings</h3>
                      <p className="text-gray-600">When filling in forms on the site, look for opt-in options to set your marketing preferences</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">Unsubscribe</h3>
                      <p className="text-gray-600">You can unsubscribe from our messages at any time via the unsubscribe link in messages</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">Account Page</h3>
                      <p className="text-gray-600">Update your preferences in your account page (for registered users)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full bg-primary/20 p-1.5 text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">Contact Us</h3>
                      <p className="text-gray-600">You can contact us directly about your information or request its deletion</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about products or services we think you might find interesting if you have indicated that you wish to receive this information.
              </p>
            </div>

            {/* Policy Changes */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">Changes to Our Privacy Policy</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We regularly review our privacy policy and post any updates on this page. This privacy policy was last updated on <span className="font-semibold">June 15, 2023</span>.
              </p>
              <div className="p-5 bg-blue-50 border-l-4 border-blue-400 rounded-lg mt-4">
                <div className="flex gap-3">
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    We will notify you of any significant changes to our privacy policy by posting a prominent notice on our website and/or sending a notice to your registered email address.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-primary">How to Contact Us</h2>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you have any questions about our privacy policy or the information we hold about you, please do not hesitate to contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-5 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">Email</h3>
                  <p className="text-primary">privacy@uniformsa.com</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">Phone</h3>
                  <p className="text-primary">+966 12 345 6789</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">Contact Form</h3>
                  <Link href="/contact" className="text-primary hover:underline">
                    Visit our contact page
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary/90 to-primary/60 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Our customer service team is ready to answer any inquiries you may have about your data privacy and how we use your information
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="rounded-md bg-white px-5 py-2.5 text-primary font-medium hover:bg-gray-100 transition duration-300"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 