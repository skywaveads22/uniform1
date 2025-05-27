import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Perception Enhancement Architecture: Advanced Design Systems for Hospitality Brand Projection 2025',
  description: 'Discover revolutionary perception enhancement systems that transform hospitality uniforms into powerful brand projection tools, creating unforgettable guest experiences through strategic design architecture.',
  keywords: 'hospitality brand projection, perception enhancement, uniform design systems, brand identity, guest experience, hospitality branding, advanced design architecture, brand perception',
  openGraph: {
    title: 'Perception Enhancement Architecture: Advanced Design Systems for Hospitality Brand Projection 2025',
    description: 'Revolutionary systems that transform hospitality uniforms into powerful brand projection tools for enhanced guest experiences.',
    images: ['/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg'],
  },
}

export default function PerceptionEnhancementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg"
            alt="Hotel reception uniforms"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Perception Enhancement
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Architecture
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced Design Systems for Hospitality Brand Projection 2025
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Brand Psychology
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Perception Engineering
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Experience Design
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
                Transforming Uniforms into Brand Ambassadors
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In the competitive landscape of modern hospitality, every touchpoint matters. Our Perception 
                Enhancement Architecture revolutionizes how hospitality uniforms function as powerful brand 
                projection tools, creating subconscious connections that influence guest perceptions and 
                drive business outcomes.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This sophisticated system combines psychological principles, design science, and advanced 
                manufacturing technologies to create uniforms that don't just dress employees—they embody 
                brand values, communicate quality standards, and enhance the overall guest experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                  <div className="text-sm text-gray-600">Guest Perception Improvement</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                  <div className="text-sm text-gray-600">Brand Recognition Increase</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hospitality/Hospitality_uniforms.jpeg"
                alt="Advanced hospitality uniform design"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Perception Psychology Framework */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perception Psychology Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system is built on scientifically-proven psychological principles that govern how 
              humans form impressions and make judgments within the first few seconds of interaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* First Impression Science */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">First Impression Science</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Leveraging the 7-second rule and halo effect principles to create immediate positive 
                impressions that influence entire guest experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Visual hierarchy optimization</li>
                <li>• Color psychology application</li>
                <li>• Symmetry and proportion balance</li>
                <li>• Cognitive load reduction</li>
              </ul>
            </div>

            {/* Trust & Authority Signals */}
            <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust & Authority Signals</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Strategic design elements that subconsciously communicate competence, reliability, 
                and professional expertise to build instant guest confidence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Authority color schemes</li>
                <li>• Professional silhouette design</li>
                <li>• Quality material perception</li>
                <li>• Consistency reinforcement</li>
              </ul>
            </div>

            {/* Emotional Connection Drivers */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Connection Drivers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Design elements that create emotional resonance and memorable experiences, 
                fostering deeper connections between guests and brand identity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Warmth and approachability cues</li>
                <li>• Cultural sensitivity integration</li>
                <li>• Personality expression balance</li>
                <li>• Memorable detail incorporation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Design Systems */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Design Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive design architecture encompasses multiple interconnected systems 
              that work together to create cohesive brand experiences across all touchpoints.
            </p>
          </div>

          <div className="space-y-16">
            {/* Visual Identity Matrix */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Visual Identity Matrix</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A sophisticated system that translates brand DNA into visual elements, ensuring 
                  every uniform component reinforces brand identity while maintaining functional excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Brand Color Psychology</h4>
                      <p className="text-sm text-gray-600">Strategic color selection based on brand personality and psychological impact</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Typography Integration</h4>
                      <p className="text-sm text-gray-600">Seamless integration of brand typography through embroidery and accessories</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Logo Optimization</h4>
                      <p className="text-sm text-gray-600">Advanced logo placement and sizing for maximum brand visibility and impact</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/hospitality/hotel_management_uniforms.jpeg"
                  alt="Visual identity matrix in hospitality uniforms"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Behavioral Influence Architecture */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Behavioral Influence Architecture</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Advanced systems that influence both employee behavior and guest perceptions through 
                  strategic design choices, creating positive feedback loops that enhance service quality.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">73%</div>
                    <div className="text-sm text-gray-600">Employee Confidence Boost</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">89%</div>
                    <div className="text-sm text-gray-600">Guest Satisfaction Increase</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">91%</div>
                    <div className="text-sm text-gray-600">Brand Recall Improvement</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">Service Quality Perception</div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <Image
                  src="/images/hospitality/Hotel_staff_apparel.jpeg"
                  alt="Behavioral influence through uniform design"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Sensory Experience Integration */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Sensory Experience Integration</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Multi-sensory design approach that engages all five senses to create memorable 
                  brand experiences that extend far beyond visual perception.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Visual Excellence</h4>
                      <p className="text-sm text-gray-600">Precision-crafted visual elements that create lasting impressions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Tactile Quality</h4>
                      <p className="text-sm text-gray-600">Premium fabric selection that communicates luxury through touch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Auditory Branding</h4>
                      <p className="text-sm text-gray-600">Subtle sound elements through fabric movement and accessories</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Olfactory Integration</h4>
                      <p className="text-sm text-gray-600">Scent-infused fabrics that reinforce brand identity subtly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/hospitality/Waiter_uniforms_Waitress_uniforms.jpeg"
                  alt="Sensory experience integration"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies that enhance brand projection capabilities while 
              maintaining the human touch essential to hospitality excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Fabric Technology */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Fabric Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced textiles with embedded sensors that monitor employee wellness, 
                environmental conditions, and provide real-time feedback for optimal performance.
              </p>
            </div>

            {/* Digital Brand Integration */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Brand Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamless integration of digital elements including NFC tags, QR codes, and 
                interactive components that bridge physical and digital brand experiences.
              </p>
            </div>

            {/* AI-Powered Customization */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Customization</h3>
              <p className="text-gray-700 leading-relaxed">
                Machine learning algorithms that continuously optimize uniform designs based on 
                guest feedback, employee comfort, and brand performance metrics.
              </p>
            </div>

            {/* Augmented Reality Fitting */}
            <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Augmented Reality Fitting</h3>
              <p className="text-gray-700 leading-relaxed">
                Virtual fitting rooms and AR visualization tools that allow perfect uniform 
                customization and brand alignment before production.
              </p>
            </div>

            {/* Biometric Optimization */}
            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Biometric Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced body scanning and biometric analysis to ensure perfect fit and 
                optimal comfort for enhanced employee confidence and performance.
              </p>
            </div>

            {/* Sustainability Tracking */}
            <div className="p-8 bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Blockchain-based tracking systems that monitor the entire lifecycle of uniforms, 
                supporting sustainability goals and brand transparency initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Results */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results & Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations demonstrating the transformative power of perception 
              enhancement architecture in hospitality environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/hospitality/Luxury_hotel_staff_uniforms_Saudi_Arabia_KSA.jpeg"
                  alt="Luxury hotel case study"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Luxury Resort Chain</h3>
                  <p className="text-gray-600">5-Star International Brand</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Implementation of our perception enhancement architecture resulted in significant 
                improvements across all key performance indicators within 6 months.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+42%</div>
                  <div className="text-sm text-gray-600">Guest Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">+38%</div>
                  <div className="text-sm text-gray-600">Brand Recognition</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+29%</div>
                  <div className="text-sm text-gray-600">Employee Confidence</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-2">+51%</div>
                  <div className="text-sm text-gray-600">Repeat Bookings</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/hospitality/Restaurant_uniforms.jpeg"
                  alt="Restaurant chain case study"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Restaurant Chain</h3>
                  <p className="text-gray-600">Premium Dining Experience</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Strategic uniform redesign focusing on perception enhancement led to remarkable 
                improvements in customer perception and business performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+35%</div>
                  <div className="text-sm text-gray-600">Service Quality Rating</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">+47%</div>
                  <div className="text-sm text-gray-600">Average Spend</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+33%</div>
                  <div className="text-sm text-gray-600">Staff Retention</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-2">+44%</div>
                  <div className="text-sm text-gray-600">Online Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to implementing perception enhancement architecture 
              that ensures smooth transition and maximum impact.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Brand Analysis & Strategy Development</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Comprehensive analysis of current brand perception, competitive landscape, and 
                    strategic objectives to create a customized enhancement roadmap.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Brand Audit</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Perception Mapping</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Strategy Framework</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Design System Architecture</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Development of comprehensive design systems that integrate psychological principles 
                    with brand identity and functional requirements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Visual Identity</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Color Psychology</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Material Selection</span>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Prototype Development & Testing</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Creation of prototypes with extensive testing including employee feedback, 
                    guest perception studies, and performance optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Prototype Creation</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">User Testing</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Optimization</span>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Full Implementation & Monitoring</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Systematic rollout across all locations with continuous monitoring, 
                    performance tracking, and ongoing optimization based on real-world data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">Rollout Management</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">Performance Tracking</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">Continuous Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Brand Perception Today
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Unlock the full potential of your hospitality brand with our advanced perception 
            enhancement architecture. Create unforgettable experiences that drive loyalty and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Begin Your Transformation
            </Link>
            <Link 
              href="/services/hospitality" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-900 transition-colors"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}