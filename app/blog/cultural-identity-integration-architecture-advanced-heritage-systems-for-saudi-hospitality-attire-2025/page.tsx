import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cultural Identity Integration Architecture: Advanced Heritage Systems for Saudi Hospitality Attire 2025',
  description: 'Explore cutting-edge cultural identity integration systems that seamlessly blend traditional Saudi heritage with modern hospitality uniform design, creating authentic and professional attire solutions.',
  keywords: 'Saudi hospitality uniforms, cultural identity integration, heritage systems, traditional Saudi attire, modern hospitality design, cultural authenticity, uniform architecture, hospitality branding',
  openGraph: {
    title: 'Cultural Identity Integration Architecture: Advanced Heritage Systems for Saudi Hospitality Attire 2025',
    description: 'Discover how advanced heritage systems revolutionize Saudi hospitality uniforms by integrating cultural identity with modern design principles.',
    images: ['/images/hospitality/Luxury_hotel_staff_uniforms_Saudi_Arabia_KSA.jpeg'],
  },
}

export default function CulturalIdentityIntegrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hospitality/Luxury_hotel_staff_uniforms_Saudi_Arabia_KSA.jpeg"
            alt="Luxury Saudi hospitality uniforms"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cultural Identity Integration
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">
              Architecture
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced Heritage Systems for Saudi Hospitality Attire 2025
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Cultural Authenticity
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Modern Innovation
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Heritage Integration
            </span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Hospitality Through Cultural Heritage
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In the rapidly evolving landscape of Saudi Arabia's hospitality sector, the integration of cultural identity 
                with modern uniform design has become paramount. Our advanced heritage systems represent a groundbreaking 
                approach to creating authentic, professional, and culturally resonant attire solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This comprehensive architecture seamlessly blends traditional Saudi elements with contemporary hospitality 
                requirements, ensuring that every uniform tells a story of cultural pride while meeting the highest 
                standards of functionality and professionalism.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Authentic Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Modern Functionality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Cultural Respect</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hospitality/Hotel_uniforms.jpeg"
                alt="Traditional Saudi hospitality uniforms"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-400 to-amber-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architecture Components */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Architecture Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our heritage integration system is built on five fundamental pillars that ensure authentic 
              cultural representation while maintaining modern hospitality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component 1 */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heritage Pattern Library</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive collection of traditional Saudi motifs, patterns, and design elements 
                digitally preserved and optimized for modern textile applications.
              </p>
            </div>

            {/* Component 2 */}
            <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Color Psychology Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                Strategic color selection based on Saudi cultural significance, psychological impact, 
                and hospitality industry best practices for guest experience enhancement.
              </p>
            </div>

            {/* Component 3 */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Design Engine</h3>
              <p className="text-gray-700 leading-relaxed">
                AI-powered system that automatically adjusts traditional elements to fit various 
                hospitality roles while maintaining cultural authenticity and professional appearance.
              </p>
            </div>

            {/* Component 4 */}
            <div className="group p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Compliance Matrix</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive guidelines ensuring all uniform designs respect Saudi cultural values, 
                religious considerations, and social norms while promoting inclusivity.
              </p>
            </div>

            {/* Component 5 */}
            <div className="group p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Integration Hub</h3>
              <p className="text-gray-700 leading-relaxed">
                Platform for incorporating cutting-edge textile technologies, smart fabrics, and 
                sustainable materials while preserving traditional aesthetic values.
              </p>
            </div>

            {/* Component 6 */}
            <div className="group p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stakeholder Engagement System</h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborative platform connecting cultural experts, hospitality professionals, and 
                design teams to ensure authentic representation and practical functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures seamless integration of cultural heritage elements 
              into modern hospitality uniform design through proven methodologies.
            </p>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h3 className="text-3xl font-bold text-gray-900">Cultural Research & Analysis</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Comprehensive study of Saudi cultural heritage, traditional attire elements, regional variations, 
                  and contemporary cultural expressions. This phase involves collaboration with cultural historians, 
                  traditional craftspeople, and community leaders.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Historical pattern documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Regional cultural mapping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Contemporary relevance assessment</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/hospitality/Hotel_staff_apparel.jpeg"
                  alt="Cultural research and analysis"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h3 className="text-3xl font-bold text-gray-900">Design Integration Framework</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Development of design principles that harmoniously blend traditional elements with modern 
                  hospitality requirements. This includes creating modular design systems that can be 
                  adapted across different hotel brands and service levels.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Modular design system creation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Brand adaptation guidelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Functional requirement integration</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/hospitality/modern_hospitality_design_uniforms.jpeg"
                  alt="Design integration framework"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <h3 className="text-3xl font-bold text-gray-900">Technology Integration</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Implementation of advanced manufacturing technologies, smart textiles, and digital 
                  customization systems that enable mass production while maintaining artisanal quality 
                  and cultural authenticity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Smart textile integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Digital customization platforms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Quality assurance systems</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/hospitality/hotel_uniform_accessories.jpeg"
                  alt="Technology integration"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Impact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The cultural identity integration architecture delivers measurable benefits across 
              multiple dimensions of hospitality operations and guest experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Guest Connection</h3>
              <p className="text-gray-600">
                Authentic cultural representation creates deeper emotional connections with guests, 
                enhancing their overall experience and cultural appreciation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Differentiation</h3>
              <p className="text-gray-600">
                Unique cultural integration sets hospitality brands apart in competitive markets, 
                creating distinctive identity and memorable experiences.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Pride</h3>
              <p className="text-gray-600">
                Staff wearing culturally authentic uniforms experience increased pride and 
                connection to their heritage, improving job satisfaction and performance.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Preservation</h3>
              <p className="text-gray-600">
                Active integration of traditional elements in modern contexts helps preserve 
                and promote Saudi cultural heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Future Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking ahead to 2025 and beyond, our cultural identity integration architecture 
              continues to evolve with emerging technologies and changing cultural dynamics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Cultural Adaptation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Machine learning algorithms that continuously learn from cultural feedback and 
                    automatically adapt designs to maintain relevance and authenticity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Textile Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integration of IoT sensors, climate-responsive materials, and health monitoring 
                    capabilities while maintaining traditional aesthetic appeal.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Virtual Reality Design Studios</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Immersive design environments where cultural experts and designers collaborate 
                    in virtual spaces to create and refine uniform concepts.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hospitality/Hospitality_uniforms.jpeg"
                alt="Future innovations in hospitality uniforms"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Hospitality Brand with Cultural Authenticity
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Partner with us to implement cutting-edge cultural identity integration systems 
            that honor Saudi heritage while elevating your hospitality brand to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Start Your Cultural Integration Journey
            </Link>
            <Link 
              href="/services/hospitality" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}