'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-1 space-x-reverse text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li className="px-2">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              </li>
              <li className="px-2">/</li>
              <li className="font-medium text-gray-900 dark:text-white">Choosing the Right Workwear for Saudi Arabia's Industrial Sector: Safety First</li>
            </ol>
          </nav>

          {/* Blog header */}
          <header className="mb-8">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
              Choosing the Right Workwear for Saudi Arabia's Industrial Sector: Safety First
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/images/author/default-author.jpg"
                  alt="Author image"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div className="mr-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Uniform Team</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">January 21, 2024</p>
                </div>
              </div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">Support Services Uniforms</span>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8 overflow-hidden rounded-xl">
            <Image
              src="/images/industrial/Safety_workwear_PPE_apparel.jpeg"
              alt="Industrial workwear in Saudi Arabia"
              className="h-auto w-full object-cover"
              width={900}
              height={500}
            />
          </div>

          {/* Blog content */}
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p>
              The industrial sector in Saudi Arabia faces unique challenges when it comes to workwear, from high temperatures to strict safety requirements across various industries. Therefore, choosing the right uniform is a strategic decision that directly impacts worker productivity and safety.
            </p>

            <h2>The Importance of Appropriate Workwear in the Industrial Sector</h2>
            <p>
              The importance of appropriate workwear goes beyond a professional appearance; it is the first line of defense against occupational hazards. In Saudi Arabia, the Saudi Standards, Metrology and Quality Organization emphasizes the necessity of adhering to specific standards for industrial workwear, especially in sectors such as oil and gas, petrochemicals, and construction.
            </p>

            <h2>Criteria for Selecting Appropriate Industrial Uniforms</h2>
            <ol>
              <li>
                <strong>Heat Resistance:</strong> Given the hot climate in Saudi Arabia, fabrics should be breathable and help dissipate heat while maintaining safety standards.
              </li>
              <li>
                <strong>Flame Resistance:</strong> Essential feature for workers in the oil and gas sectors, where clothing must meet NFPA 2112 standards or equivalent.
              </li>
              <li>
                <strong>Durability:</strong> The ability of clothes to withstand repeated use and regular washing without losing their protective properties.
              </li>
              <li>
                <strong>Comfort:</strong> Design that allows freedom of movement without compromising on protective factors.
              </li>
              <li>
                <strong>Visibility:</strong> Use of high-visibility colors and reflectors for workers at construction sites or areas exposed to vehicle movement.
              </li>
            </ol>

            <h2>Recommended Fabric Types for the Saudi Industrial Sector</h2>
            <ul>
              <li>
                <strong>Treated Cotton:</strong> Provides comfort in hot weather with the possibility of treatment for flame resistance.
              </li>
              <li>
                <strong>Cotton-Polyester Blend:</strong> Balances durability and comfort, suitable for daily use.
              </li>
              <li>
                <strong>Tetron Fabrics:</strong> Lightweight and quick-drying, ideal for humid environments.
              </li>
              <li>
                <strong>Specialized Synthetic Fabrics:</strong> Such as Nomex and Kevlar, provide exceptional protection against specific hazards.
              </li>
            </ul>

            <h2>Workwear by Industrial Sector</h2>
            <h3>Oil and Gas Sector</h3>
            <p>
              This sector primarily requires flame-resistant clothing, in addition to the ability to withstand harsh conditions. It is recommended to choose clothes with internationally recognized certifications such as NFPA and ISO 11612.
            </p>
            
            <h3>Construction Sector</h3>
            <p>
              Hard hats, high-visibility vests, and slip and puncture-resistant footwear are essential elements. Clothing should be durable and comfortable at the same time.
            </p>

            <h3>Manufacturing Sector</h3>
            <p>
              Requirements vary depending on the nature of the factory, but in general, full-body covering clothing is preferred with protection against specific hazards such as chemical spray or heat.
            </p>

            <h2>Compliance with Saudi and International Standards</h2>
            <p>
              Industrial workwear in Saudi Arabia must comply with the standards of the Saudi Standards, Metrology and Quality Organization, in addition to accepted international standards such as:
            </p>
            <ul>
              <li>ANSI/ISEA 107 for high-visibility clothing</li>
              <li>EN ISO 11612 for heat and flame resistant clothing</li>
              <li>ASTM F1506 for protection from electric arcs</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Choosing appropriate workwear for the industrial sector in Saudi Arabia is not just a matter of regulatory compliance, but an investment in the safety and productivity of the workforce. By taking into account the specific climatic conditions of the Kingdom and the unique requirements of each sector, companies can provide a safer and more comfortable working environment for their employees.
            </p>
            
            <p>
              Always remember: Protection and safety are non-negotiable, and good workwear is the first line of defense against workplace hazards.
            </p>
          </div>

          {/* CTA section */}
          <div className="mt-12 rounded-xl bg-blue-50 p-6 dark:bg-blue-900">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Looking for Customized Industrial Workwear Solutions?</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">At Uniform, we provide integrated solutions that consider safety and comfort requirements in the Saudi industrial sector. Contact us today for a free consultation.</p>
            <Link href="/contact" className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700">
              Contact Us
            </Link>
          </div>

          {/* Related posts */}
          <div className="mt-12">
            <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Related Articles</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Link href="/blog/workwear/utility-services-uniform-standards" className="group block overflow-hidden rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="p-4">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">Uniform Standards for Utility and Service Companies</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A comprehensive guide to global standards and specifications for uniforms in service companies...</p>
                </div>
              </Link>
              <Link href="/blog/workwear/workwear-maintenance-guide" className="group block overflow-hidden rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800">
                <div className="p-4">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">Workwear Care Essentials: A Comprehensive Guide to Maintaining Quality</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Practical tips for caring for workwear and extending its lifespan...</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 