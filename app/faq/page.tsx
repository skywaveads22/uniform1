"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of uniforms do you offer?",
      answer: "We offer a comprehensive range of uniforms for multiple sectors including aviation, healthcare, hospitality, education, government, industrial, and security. Each category is designed with sector-specific requirements in mind, using appropriate fabrics and designs that meet industry standards while ensuring comfort and durability."
    },
    {
      question: "Do you provide custom uniforms?",
      answer: "Yes, we specialize in custom uniform solutions tailored to your organization's specific needs. Our design team works closely with clients to incorporate branding elements, color schemes, and specific functional requirements. We can customize everything from fabric selection to special features, ensuring your uniforms perfectly represent your organization's identity."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantities vary by product type and customization level. For standard uniforms, we typically require a minimum of 20 pieces per style and color. For fully custom designs, minimum orders may be higher. We're happy to discuss your specific needs and find solutions for smaller orders when possible."
    },
    {
      question: "How long does production take?",
      answer: "Production times vary depending on the complexity of the order, quantity, and customization level. Standard uniform orders typically take 2-4 weeks from approval, while custom designs may require 4-8 weeks. For large orders, we recommend planning 2-3 months ahead. We also offer expedited services for urgent requirements at an additional cost."
    },
    {
      question: "Do you ship across Saudi Arabia?",
      answer: "Yes, we provide delivery services throughout Saudi Arabia. We work with reliable logistics partners to ensure your uniforms arrive safely and on time. For large orders to major cities like Riyadh, Jeddah, and Dammam, we offer special shipping arrangements. International shipping is also available upon request."
    },
    {
      question: "Can you help with sizing and measurements?",
      answer: "Absolutely. We offer comprehensive sizing services to ensure perfect fit for all staff members. Our team can provide standard size charts, conduct on-site measurement sessions for larger organizations, and offer guidance on selecting the right sizes. We also maintain detailed records of your team's measurements for future orders."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, corporate credit cards, and approved purchase orders for established clients. For large orders, we typically require a 50% deposit with the balance due before shipping. We can also arrange flexible payment terms for long-term clients and government entities."
    },
    {
      question: "Do you offer uniform rental and maintenance services?",
      answer: "Yes, we provide uniform rental programs for clients looking for a hassle-free solution. Our service includes regular cleaning, maintenance, repairs, and replacement of worn items. This option is popular with hospitality and healthcare clients who need to maintain consistently professional appearance with minimal administrative burden."
    },
    {
      question: "Can you add logos and embroidery to uniforms?",
      answer: "Yes, we offer comprehensive branding services including embroidery, screen printing, and heat transfer for logos and other design elements. Our in-house embroidery department ensures high-quality, durable application of your brand elements. We maintain digital versions of your logos to ensure consistency across all uniform items."
    },
    {
      question: "What fabrics do you use in your uniforms?",
      answer: "We select fabrics based on the specific requirements of each uniform type. For healthcare, we use antimicrobial and fluid-resistant fabrics; for hospitality, we focus on elegant yet durable materials; for industrial wear, we prioritize safety-rated and high-durability fabrics. We offer options including cotton, polyester blends, performance fabrics, and specialized materials for particular environments."
    }
  ];

  return (
    <main className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary text-center mb-3">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Find answers to common questions about our uniform services
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <span className="ml-4 flex-shrink-0 text-primary">
                    {openIndex === index ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </span>
                </button>
                <div 
                  className={`px-6 pb-5 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 rounded-lg p-8 border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, our team is ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>
              <Link 
                href="tel:+966123456789" 
                className="inline-flex items-center justify-center rounded-md border border-primary bg-white px-6 py-3 text-sm font-medium text-primary shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 