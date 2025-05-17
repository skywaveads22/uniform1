"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const categories = [
  { name: "Aviation", href: "/services" },
  { name: "Education", href: "/education" },
  { name: "Government", href: "/government" },
  { name: "Healthcare", href: "/healthcare" },
  { name: "Hospitality", href: "/hospitality" },
  { name: "Industrial", href: "/industrial" },
  { name: "Security", href: "/security" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Uniform</span>
              <span className="text-2xl font-light text-primary">SA</span>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Professional uniforms designed specifically for the Saudi Arabian market, combining quality,
              comfort, and cultural sensitivity.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {category.name} Uniforms
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 transition-colors hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/request-quote"
                  className="text-sm text-gray-400 transition-colors hover:text-primary"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-400">
                  King Fahd Road, Riyadh
                  <br />
                  Kingdom of Saudi Arabia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-400">+966 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-400">info@uniformsa.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} UniformSA. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 