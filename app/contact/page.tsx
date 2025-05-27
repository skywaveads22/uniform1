"use client"

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, CheckCircle, Building, Users } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    employees: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission with a delay
    setTimeout(() => {
      // Form submitted
      setFormStatus('success')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          employees: '',
          message: ''
        })
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const inputStyles = "w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg"
            alt="Contact Uniform SA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative py-32 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                Get in Touch
              </h1>
              <p className="mb-8 text-xl text-white/90">
                We're here to answer your questions and help with your uniform requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-12 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <a href="tel:+966112345678" className="flex items-center justify-center space-x-3 rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-medium text-gray-900">Call Us</h3>
                <p className="text-gray-600">+966 11 234 5678</p>
              </div>
            </a>
            <a href="mailto:info@uniformsa.com" className="flex items-center justify-center space-x-3 rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-medium text-gray-900">Email Us</h3>
                <p className="text-gray-600">info@uniformsa.com</p>
              </div>
            </a>
            <a href="#location" className="flex items-center justify-center space-x-3 rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-medium text-gray-900">Visit Us</h3>
                <p className="text-gray-600">Riyadh, Saudi Arabia</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-xl border bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-primary">Send us a Message</h2>
              
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-50 p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                  <h3 className="text-xl font-semibold text-green-800">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. Our team will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputStyles}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputStyles}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputStyles}
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputStyles}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="industry" className="mb-2 block text-sm font-medium text-gray-700">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={inputStyles}
                      >
                        <option value="">Select Industry</option>
                        <option value="aviation">Aviation</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="education">Education</option>
                        <option value="government">Government</option>
                        <option value="industrial">Industrial</option>
                        <option value="security">Security</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="employees" className="mb-2 block text-sm font-medium text-gray-700">
                        Number of Employees
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className={inputStyles}
                      >
                        <option value="">Select Range</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-100">51-100</option>
                        <option value="101-500">101-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={inputStyles}
                      placeholder="Please provide details about your uniform requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all ${
                      formStatus === 'submitting' 
                        ? 'cursor-not-allowed opacity-70' 
                        : 'hover:scale-105'
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-primary">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Office Location</h3>
                      <p className="text-gray-600">Al Olaya District, King Fahd Road</p>
                      <p className="text-gray-600">Riyadh 12212, Kingdom of Saudi Arabia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">Main: +966 11 234 5678</p>
                      <p className="text-gray-600">Customer Support: +966 11 234 5679</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">General Inquiries: info@uniformsa.com</p>
                      <p className="text-gray-600">Customer Support: support@uniformsa.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div id="location" className="overflow-hidden rounded-xl border shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6554789865226!2d46.67289361500001!3d24.6911931843376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0359121f7b21%3A0xeca32641bf3d724f!2sAl%20Olaya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1655368505701!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Uniform SA Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Building className="h-10 w-10 text-primary" />,
                title: "Corporate Uniform Programs",
                description: "Complete corporate uniform solutions customized to your brand identity and requirements."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Bulk Ordering",
                description: "Competitive pricing for bulk orders with consistent quality and timely delivery."
              },
              {
                icon: <Image 
                  src="/images/industrial/Industrial_uniforms.jpeg" 
                  alt="Custom Design"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover rounded-full" 
                />,
                title: "Custom Design",
                description: "Expert design consultation to create unique uniforms that meet your specific needs."
              }
            ].map((service, index) => (
              <div key={index} className="rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "What is the minimum order quantity?",
                answer: "Our minimum order quantity varies depending on the type of uniform and customization required. For standard items, we typically have a minimum of 25 units per design. For highly customized uniforms, this may be higher. Please contact our sales team for specific details related to your requirements."
              },
              {
                question: "Do you offer custom design services?",
                answer: "Yes, we provide complete custom design services. Our professional designers will work closely with you to create uniforms that match your brand identity and meet your specific requirements. This service includes multiple rounds of design reviews, material selection guidance, and prototype development before final production."
              },
              {
                question: "What is the typical delivery timeframe?",
                answer: "Delivery times vary based on order size, complexity, and customization requirements. Standard orders typically take 2-4 weeks from approval to delivery. Custom designed uniforms may take 4-6 weeks to allow for design, prototyping, and production. Rush orders can be accommodated in some situations for an additional fee."
              },
              {
                question: "What industries do you provide uniforms for?",
                answer: "We serve a wide range of industries across Saudi Arabia, including aviation, healthcare, hospitality, education, government, industrial, and security sectors. Each industry has specific requirements, and our specialized teams understand the unique needs of each sector."
              },
              {
                question: "Do you provide samples before production?",
                answer: "Yes, we can provide fabric swatches and sample garments before full production. For custom designs, we create prototypes for your approval. Sample costs may apply but are typically credited against your full order."
              }
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Discuss Your Uniform Needs?</h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-white/90">
            Our team of experts is ready to help you find the perfect uniform solution for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+966112345678"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-transform hover:scale-105"
            >
              Call Now
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="rounded-lg border border-white bg-transparent px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 