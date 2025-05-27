"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hospitality/modern_hospitality_design_uniforms.jpeg"
            alt="Terms and Conditions"
            fill
            className="object-cover brightness-[0.65] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30"></div>
        </div>
        
        <div className="relative py-32 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-block mb-3 rounded-lg bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
                Important document for our users
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                Terms and Conditions
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Please read these terms carefully before using our services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Introduction</h2>
              <p className="text-lg text-gray-700">
                These terms and conditions outline the rules and regulations for the use of Uniform Saudi Arabia's website, located at www.uniformsa.com.
              </p>
              <p className="text-lg text-gray-700">
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Uniform Saudi Arabia's website if you do not agree to all of the terms and conditions stated on this page.
              </p>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Terminology</h2>
              <p className="text-lg text-gray-700">
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside pl-5">
                <li>"Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions.</li>
                <li>"The Company", "Ourselves", "We", "Our" and "Us", refers to our Company, Uniform Saudi Arabia.</li>
                <li>"Party", "Parties", or "Us", refers to both the Client and ourselves.</li>
                <li>All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means.</li>
              </ul>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Cookies</h2>
              <p className="text-lg text-gray-700">
                We employ the use of cookies. By accessing Uniform Saudi Arabia's website, you agreed to use cookies in agreement with Uniform Saudi Arabia's Privacy Policy.
              </p>
              <p className="text-lg text-gray-700">
                Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
              </p>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">License</h2>
              <p className="text-lg text-gray-700">
                Unless otherwise stated, Uniform Saudi Arabia and/or its licensors own the intellectual property rights for all material on Uniform Saudi Arabia. All intellectual property rights are reserved. You may access this from Uniform Saudi Arabia for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p className="text-lg text-gray-700 font-bold mt-4">
                You must not:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside pl-5">
                <li>Republish material from Uniform Saudi Arabia</li>
                <li>Sell, rent or sub-license material from Uniform Saudi Arabia</li>
                <li>Reproduce, duplicate or copy material from Uniform Saudi Arabia</li>
                <li>Redistribute content from Uniform Saudi Arabia</li>
              </ul>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Disclaimer</h2>
              <p className="text-lg text-gray-700">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside pl-5">
                <li>Limit or exclude our or your liability for death or personal injury</li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
              </ul>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Orders and Payments</h2>
              <p className="text-lg text-gray-700">
                All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse any order you place with us. If you place an order through the site, this represents an offer by you to purchase our products, which is subject to these terms and conditions.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                No contract will be formed between you and us until we send you an email confirmation that the products you've ordered are available and reserved for you. Payments can be made using any of the available methods mentioned on the website.
              </p>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Returns and Exchanges</h2>
              <p className="text-lg text-gray-700">
                We have a clear returns policy to ensure you are satisfied with your purchases. If you wish to return a product, please contact us with your order details, product number, and reason for return.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Products can be returned within 14 days of delivery and must be in their original unused condition with all tags and packaging. Additional terms apply to certain products; please see our Returns Policy page for full details.
              </p>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Delivery</h2>
              <p className="text-lg text-gray-700">
                We will make every reasonable effort to deliver products within the timeframe indicated in the confirmation. In the case of custom products or services, delivery times may increase and will be clarified at the time of order.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                We are not responsible for any delays outside our reasonable control. If we are unable to meet the estimated delivery date, we will contact you to arrange a new delivery date.
              </p>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Changes to Terms</h2>
              <p className="text-lg text-gray-700">
                We reserve the right to modify these terms from time to time. Therefore, you should review this page regularly. We will notify you of any changes by posting the new Terms and Conditions on this page. These changes are effective immediately upon posting to this page.
              </p>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Governing Law & Jurisdiction</h2>
              <p className="text-lg text-gray-700">
                These Terms and Conditions are governed by the laws of Saudi Arabia and your use of the website is subject to the exclusive jurisdiction of the courts of Saudi Arabia.
              </p>
            </div>

            <div className="space-y-6 rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-primary">Contact Information</h2>
              <p className="text-lg text-gray-700">
                If you have any questions about these Terms and Conditions, please contact us using the details below:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside pl-5">
                <li>Email: terms@uniformsa.com</li>
                <li>Phone: +966 12 345 6789</li>
                <li>Postal Address: PO Box 12345, Riyadh, Saudi Arabia</li>
              </ul>
              <p className="text-lg text-gray-700 mt-6">
                These terms were last updated on June 15, 2023.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
