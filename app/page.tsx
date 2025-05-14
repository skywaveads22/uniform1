"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight, Star, Award, Users, Shield } from 'lucide-react'
import { PartnerLogo } from './components/PartnerLogo'
import { motion, AnimatePresence } from 'framer-motion'
import { getImagePath, logImageError, getFallbackImage } from '@/lib/image-helper'
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaShareAlt } from "react-icons/fa";
import { Metadata } from "next";
import SliderImage from './components/SliderImage';

// Preload all slider images to improve LCP
const PRELOADED_IMAGES = [
  "/images/aviation/aviation_uniforms.jpg",
  "/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg", 
  "/images/hospitality/Hospitality_uniforms.jpeg",
  "/images/education/School_uniforms.jpg",
  "/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg"
];

// Slider data with images from different categories
const sliderData = [
  {
    image: "/images/aviation/aviation_uniforms.jpg",
    title: "Elevating Aviation Standards",
    subtitle: "Premium Aviation Uniforms",
    description: "Distinctive uniforms crafted for performance in Saudi Arabia's aviation sector",
    link: "/services",
    category: "aviation"
  },
  {
    image: "/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg",
    title: "Healthcare Excellence",
    subtitle: "Medical-Grade Uniforms",
    description: "Professional attire designed for comfort, hygiene, and functionality in healthcare settings",
    link: "/services/healthcare",
    category: "healthcare"
  },
  {
    image: "/images/hospitality/Hospitality_uniforms.jpeg",
    title: "Hospitality Distinction",
    subtitle: "Elegant Service Attire",
    description: "Refined uniforms that enhance guest experiences in Saudi Arabia's hospitality industry",
    link: "/services/hospitality",
    category: "hospitality"
  },
  {
    image: "/images/education/School_uniforms.jpg",
    title: "Educational Identity",
    subtitle: "Distinguished School Uniforms",
    description: "Quality attire that builds institutional pride and unity across educational institutions",
    link: "/services/education",
    category: "education"
  },
  {
    image: "/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg",
    title: "Security & Authority",
    subtitle: "Professional Security Attire",
    description: "Commanding uniforms engineered for durability, functionality, and professional presence",
    link: "/services/security",
    category: "security"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Fix for preventing Cumulative Layout Shift
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  // Preload essential images
  useEffect(() => {
    // Show slider immediately to prevent layout shift
    setImagesLoaded(true);
    
    const preloadImages = () => {
      PRELOADED_IMAGES.forEach(src => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          console.log(`Image loaded successfully: ${src}`);
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
          // Mark this image as having an error
          setImageErrors(prev => ({...prev, [src]: true}));
        };
      });
    };
    
    // Load images after displaying slider immediately
    preloadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentSlide]);

  return (
    <main className="overflow-hidden">
      {/* Main Heading - Hidden visually but present for SEO and accessibility */}
      <h1 className="sr-only">يونيفورم بلوج - حلول الملابس الموحدة المتميزة في المملكة العربية السعودية</h1>
      
      {/* Hero Slider Section */}
      <section 
        className="relative h-[90vh] w-full overflow-hidden" 
        ref={sliderRef}
        style={{ 
          // Set min-height to prevent CLS during image loading
          minHeight: '600px' 
        }}
      >
        {imagesLoaded ? (
          sliderData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <SliderImage
                  src={slide.image}
                  alt={slide.title}
                  fallbackSrc={getFallbackImage(slide.category)}
                  priority={index === currentSlide}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              </div>
              
              {/* Slide Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-6">
                  <div className="max-w-3xl">
                    <span className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">{slide.subtitle}</span>
                    <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-xl leading-relaxed text-white/90 md:text-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={slide.link}
                        className="group flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90"
                      >
                        Explore Solutions
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/contact/quote"
                        className="rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Placeholder while images load to prevent CLS
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <div className="h-6 w-32 animate-pulse rounded-full bg-gray-700 mb-3"></div>
                <div className="h-16 w-full animate-pulse rounded-lg bg-gray-700 mb-4"></div>
                <div className="h-12 w-3/4 animate-pulse rounded-lg bg-gray-700 mb-8"></div>
                <div className="flex gap-4">
                  <div className="h-14 w-48 animate-pulse rounded-lg bg-gray-700"></div>
                  <div className="h-14 w-48 animate-pulse rounded-lg bg-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 z-30 flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        {/* تمت إزالة نقاط التنقل بناءًا على الطلب */}
        
        {/* Statistics Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center border-r border-white/20 pr-4">
                <Award className="mr-3 h-8 w-8 text-primary" />
                <div>
                  <p className="text-lg font-bold text-white">20+ Years</p>
                  <p className="text-sm text-white/80">Industry Experience</p>
                </div>
              </div>
              <div className="flex items-center border-r border-white/20 pr-4">
                <Users className="mr-3 h-8 w-8 text-primary" />
                <div>
                  <p className="text-lg font-bold text-white">500+</p>
                  <p className="text-sm text-white/80">Corporate Clients</p>
                </div>
              </div>
              <div className="flex items-center border-r border-white/20 pr-4">
                <Shield className="mr-3 h-8 w-8 text-primary" />
                <div>
                  <p className="text-lg font-bold text-white">100%</p>
                  <p className="text-sm text-white/80">Quality Guarantee</p>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="mr-3 h-8 w-8 text-primary" />
                <div>
                  <p className="text-lg font-bold text-white">5-Star</p>
                  <p className="text-sm text-white/80">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section with Improved Design */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">Our Expertise</span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Premium Uniform Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Delivering exceptional quality and tailored designs across all professional sectors in Saudi Arabia
            </p>
          </div>
          
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Aviation",
                image: "/images/aviation/aviation_uniforms.jpg",
                description: "Premium uniforms for airlines and airport staff that combine elegance with functionality.",
                features: ["Custom Airline Branding", "Cabin Crew Attire", "Ground Staff Uniforms"]
              },
              {
                title: "Healthcare",
                image: "/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg",
                description: "Comfortable and hygienic attire designed specifically for medical environments.",
                features: ["Medical Scrubs", "Lab Coats", "Nurse Uniforms"]
              },
              {
                title: "Hospitality",
                image: "/images/hospitality/Hospitality_uniforms.jpeg",
                description: "Elegant and practical uniforms that enhance your hospitality brand experience.",
                features: ["Hotel Staff Attire", "Restaurant Uniforms", "Event Staff Clothing"]
              },
              {
                title: "Education",
                image: "/images/education/School_uniforms.jpg",
                description: "Quality school uniforms that promote unity and pride across educational institutions.",
                features: ["School Uniforms", "Sports Kits", "Faculty Attire"]
              },
              {
                title: "Government",
                image: "/images/government/Government_uniforms.jpg",
                description: "Official uniforms designed to represent government institutions with dignity.",
                features: ["Official Attire", "Ceremonial Uniforms", "Department-Specific Designs"]
              },
              {
                title: "Security",
                image: "/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg",
                description: "Durable and authoritative security personnel attire designed for functionality.",
                features: ["Guard Uniforms", "Tactical Gear", "Identification Systems"]
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getImagePath(category.image)}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Set fallback image on error
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite error loop
                      target.src = `/images/placeholder-image.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <div>
                      <h3 className="mb-2 text-2xl font-semibold text-white">{category.title}</h3>
                      <Link
                        href={`/services/${category.title.toLowerCase()}`}
                        className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        View Details <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{category.title} Uniforms</h3>
                  <p className="mb-5 text-gray-600 dark:text-gray-300">{category.description}</p>
                  <ul className="mb-6 space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${category.title.toLowerCase()}`}
                    className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Explore {category.title} Solutions <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Modernized */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={getImagePath("/images/industrial/Industrial_uniforms.jpeg")}
                  alt="Industrial Uniforms"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Set fallback image on error
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite error loop
                    target.src = `/placeholder-image.jpg`;
                  }}
                />
              </div>
              <div className="absolute -top-6 -left-6 z-0 h-full w-full rounded-2xl border-2 border-primary"></div>
              <div className="absolute right-0 bottom-0 z-20 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={getImagePath("/images/healthcare/Medical_staff_uniforms.jpg")}
                  alt="Medical Staff Uniforms"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Set fallback image on error
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite error loop
                    target.src = `/placeholder-image.jpg`;
                  }}
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">About UniformSA</span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
                Saudi Arabia's Premier Uniform Solutions Provider
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                For over two decades, we have established ourselves as the leading uniform supplier in the Kingdom, 
                delivering exceptional quality and culturally appropriate attire for Saudi Arabia's diverse professional sectors.
              </p>
              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unmatched Quality Standards</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our materials and craftsmanship exceed industry standards, ensuring longevity and performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cultural Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-300">Deep understanding of Saudi requirements ensures appropriate designs for every context.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">End-to-End Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">From design consultation to delivery and maintenance, we provide comprehensive support.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90"
              >
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">Client Testimonials</span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Trusted by Leading Organizations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Hear from our clients about their experience partnering with Saudi Arabia's premier uniform provider
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Their attention to detail and understanding of our airline's brand requirements exceeded our expectations. The uniforms have received countless compliments from both staff and passengers.",
                author: "Ahmed Al-Saud",
                position: "Head of Operations",
                company: "Saudi Airlines"
              },
              {
                quote: "The medical uniforms provided by UniformSA perfectly balance professionalism, comfort, and compliance with healthcare regulations. Our staff couldn't be happier with the quality.",
                author: "Dr. Fatima Al-Harbi",
                position: "Director of Nursing",
                company: "King Fahd Medical City"
              },
              {
                quote: "We've partnered with UniformSA for our security personnel across multiple locations. Their durability in harsh conditions and professional appearance have made them an invaluable partner.",
                author: "Khalid Al-Otaibi",
                position: "Security Director",
                company: "Royal Commission for Jubail and Yanbu"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-6">
                  {/* Quote icon */}
                  <svg className="h-10 w-10 text-primary/20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.422C2.155 12.254.892 19.825.984 22.237c.066 1.741 1.565 5.53 6.083 5.53 3.27 0 5.77-2.42 5.77-5.68 0-3.044-2.374-5.62-5.529-5.62-.689 0-1.377.18-1.875.369 0 0 .282-1.476 3.137-4.569 1.968-2.133 3.347-3.222 3.54-3.395l.047-.04c-.707-.75-.992-1.631-1.785-2.7-.671-.904-2.137-1.172-2.737-1.172-.253 0-1.196.226-1.196.226l-.05.03c0-.001 2.346.784 4.333 1.208zM25.306 6.422c-8.566 5.832-9.83 13.403-9.737 15.815.066 1.741 1.565 5.53 6.083 5.53 3.27 0 5.77-2.42 5.77-5.68 0-3.044-2.374-5.62-5.529-5.62-.689 0-1.377.18-1.875.369 0 0 .282-1.476 3.137-4.569 1.968-2.133 3.347-3.222 3.54-3.395l.047-.04c-.707-.75-.992-1.631-1.785-2.7-.671-.904-2.137-1.172-2.737-1.172-.253 0-1.196.226-1.196.226l-.05.03c0-.001 2.346.784 4.332 1.208z"></path>
                  </svg>
                </div>
                <blockquote className="mb-6 text-lg leading-relaxed text-gray-700">{testimonial.quote}</blockquote>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-primary text-white flex items-center justify-center">
                    <span className="font-semibold text-lg">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center rounded-lg border border-primary bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              View Customer Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Locations with Interactive Map */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">Nationwide Service</span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Serving All Regions of Saudi Arabia
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              With distribution centers across the Kingdom, we provide timely and efficient uniform solutions nationwide
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
            <div className="aspect-video relative overflow-hidden rounded-xl bg-blue-50">
              {/* Map background */}
              <div className="absolute inset-0 bg-blue-50">
                {/* Saudi Arabia map shape could be added as an SVG here in the future */}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-4/5 w-4/5">
                  {/* City markers - would be interactive in a real implementation */}
                  {[
                    { name: "Riyadh", top: "45%", left: "53%" },
                    { name: "Jeddah", top: "55%", left: "26%" },
                    { name: "Dammam", top: "35%", left: "75%" },
                    { name: "Makkah", top: "60%", left: "30%" },
                    { name: "Madinah", top: "40%", left: "32%" },
                    { name: "Tabuk", top: "20%", left: "25%" },
                    { name: "Abha", top: "75%", left: "45%" },
                  ].map((city, index) => (
                    <div 
                      key={index}
                      className="absolute flex flex-col items-center"
                      style={{ top: city.top, left: city.left }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 animate-ping rounded-full bg-primary/30"></div>
                        <div className="relative h-4 w-4 rounded-full bg-primary"></div>
                      </div>
                      <span className="mt-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-primary shadow-sm">{city.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam", "Khobar", "Dhahran", 
                "Tabuk", "Qassim", "Hail", "Asir", "Taif", "Jazan", "Najran", "Al Baha", "Al Jouf", "Yanbu"
              ].map((city, index) => (
                <span 
                  key={index} 
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-primary hover:text-white"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <Image 
            src={getImagePath("/images/uniform_pattern_bg.jpg")}
            alt="Uniform Pattern Background"
            fill
            className="object-cover"
            onError={(e) => {
              // Just hide the image on error since it's decorative
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Ready to Elevate Your Team's Appearance?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Partner with Saudi Arabia's premier uniform provider for a tailored solution that meets your exact requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact/quote" 
                className="group relative overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all hover:shadow-lg"
              >
                <span className="relative z-10">Request a Custom Quote</span>
                <span className="absolute inset-0 z-0 bg-primary/0 transition-all group-hover:bg-primary/10"></span>
              </Link>
              <Link 
                href="/services" 
                className="group relative overflow-hidden rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                <span className="relative z-10">Explore Our Services</span>
              </Link>
            </div>
            <p className="mt-8 text-white/80">
              Typically respond within 24 hours • No obligation consultation • Competitive pricing
            </p>
          </div>
        </div>
      </section>
      
      {/* Add custom animation CSS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </main>
  )
} 