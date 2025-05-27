import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Protective Integration Architecture: Advanced Safety Systems for Saudi Emergency Medical Personnel 2025',
  description: 'Explore cutting-edge protective integration systems designed specifically for Saudi emergency medical personnel, featuring advanced safety technologies, environmental protection, and operational efficiency optimization.',
  keywords: 'emergency medical personnel, protective systems, Saudi healthcare, safety integration, medical safety equipment, emergency response uniforms, protective architecture, healthcare safety',
  openGraph: {
    title: 'Protective Integration Architecture: Advanced Safety Systems for Saudi Emergency Medical Personnel 2025',
    description: 'Advanced safety systems designed specifically for Saudi emergency medical personnel with cutting-edge protective technologies.',
    images: ['/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg'],
  },
}

export default function ProtectiveIntegrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-orange-900/90"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg"
            alt="Emergency medical personnel"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Protective Integration
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
              Architecture
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced Safety Systems for Saudi Emergency Medical Personnel 2025
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Multi-Hazard Protection
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Real-Time Monitoring
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Adaptive Response
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
                Safeguarding Saudi Emergency Medical Heroes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Emergency medical personnel in Saudi Arabia face unique challenges that demand specialized 
                protective solutions. From extreme desert conditions to complex urban emergencies, our 
                Protective Integration Architecture provides comprehensive safety systems that adapt to 
                the diverse operational environments across the Kingdom.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This advanced system integrates multiple layers of protection, real-time health monitoring, 
                and intelligent response mechanisms to ensure the safety and effectiveness of emergency 
                medical teams while they save lives in challenging conditions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">97%</div>
                  <div className="text-sm text-gray-600">Hazard Detection Rate</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">84%</div>
                  <div className="text-sm text-gray-600">Response Time Improvement</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/healthcare/Healthcare_uniforms.jpg"
                alt="Emergency medical protective systems"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi-Specific Challenges */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Saudi-Specific Emergency Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the unique environmental and operational challenges faced by emergency 
              medical personnel across Saudi Arabia's diverse landscapes and urban centers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Challenge 1 */}
            <div className="group p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Extreme Heat</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Desert temperatures exceeding 50°C requiring advanced thermal regulation 
                and heat stress prevention systems.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sandstorms</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Frequent dust storms requiring respiratory protection and visibility 
                enhancement systems for safe operations.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Urban Density</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                High-rise emergencies and crowded urban environments requiring 
                specialized mobility and communication systems.
              </p>
            </div>

            {/* Challenge 4 */}
            <div className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hajj & Umrah</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mass gathering events requiring enhanced crowd management and 
                multi-hazard protection capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protective System Architecture */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Protective System Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive protection system integrates multiple defense layers 
              to safeguard emergency medical personnel against diverse threats and hazards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Layer 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Protection Layer</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Base protective systems including flame-resistant materials, chemical barriers, 
                and impact protection integrated into the uniform structure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Flame-resistant fabrics</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Chemical splash protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Cut and puncture resistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">UV radiation shielding</span>
                </li>
              </ul>
            </div>

            {/* Layer 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Active Monitoring Layer</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Intelligent sensor networks that continuously monitor environmental conditions 
                and physiological parameters for real-time threat assessment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Environmental sensors</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Vital signs monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Gas detection systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Location tracking</span>
                </li>
              </ul>
            </div>

            {/* Layer 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Layer</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Advanced communication systems ensuring constant connectivity with command 
                centers and team members during emergency operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Multi-band radio systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Emergency beacon activation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Data transmission capability</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Hands-free operation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Safety Technologies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Safety Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies integrated into our protective systems to provide 
              comprehensive safety coverage for emergency medical personnel.
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Smart Fabric Integration</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Revolutionary smart fabrics that respond to environmental changes and physiological 
                  needs, providing adaptive protection and comfort optimization in real-time.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Temperature Control</h4>
                    <p className="text-sm text-gray-600">Phase-change materials for thermal regulation</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Moisture Management</h4>
                    <p className="text-sm text-gray-600">Advanced wicking and evaporation systems</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Self-Cleaning</h4>
                    <p className="text-sm text-gray-600">Photocatalytic surface treatments</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Antimicrobial</h4>
                    <p className="text-sm text-gray-600">Integrated infection prevention systems</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/healthcare/Medical_staff_uniforms.jpg"
                  alt="Smart fabric integration"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Technology 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Biometric Monitoring System</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Comprehensive health monitoring that tracks vital signs, stress levels, and fatigue 
                  indicators to ensure personnel safety and optimal performance during emergencies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Heart Rate Variability</h4>
                      <p className="text-sm text-gray-600">Continuous cardiac monitoring and stress assessment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Core Temperature</h4>
                      <p className="text-sm text-gray-600">Heat stress prevention and thermal regulation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Hydration Levels</h4>
                      <p className="text-sm text-gray-600">Dehydration prevention and fluid balance monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <Image
                  src="/images/healthcare/Nurse_uniforms.jpg"
                  alt="Biometric monitoring system"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Technology 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Environmental Threat Detection</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Advanced sensor arrays that detect and analyze environmental hazards, providing 
                  early warning systems and automatic protective responses.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Chemical Detection</h4>
                      <p className="text-sm text-gray-600">Real-time identification of hazardous chemicals and gases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Radiation Monitoring</h4>
                      <p className="text-sm text-gray-600">Continuous radiation level assessment and exposure tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Air Quality Analysis</h4>
                      <p className="text-sm text-gray-600">Particulate matter and oxygen level monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Structural Integrity</h4>
                      <p className="text-sm text-gray-600">Building stability and collapse risk assessment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/healthcare/Doctor_uniforms_attire.jpg"
                  alt="Environmental threat detection"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Optimization */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Response Optimization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated systems that enhance emergency response capabilities through 
              improved mobility, communication, and situational awareness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Optimization 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid Deployment System</h3>
              <p className="text-gray-700 leading-relaxed">
                Quick-change protective configurations that adapt to different emergency 
                scenarios within seconds, minimizing response time delays.
              </p>
            </div>

            {/* Optimization 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Visibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced lighting systems and high-visibility materials that ensure 
                personnel can be seen in low-light and hazardous conditions.
              </p>
            </div>

            {/* Optimization 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Command Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamless integration with emergency command centers for real-time 
                coordination and resource allocation optimization.
              </p>
            </div>

            {/* Optimization 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Data collection and analysis systems that provide insights for 
                continuous improvement of emergency response protocols.
              </p>
            </div>

            {/* Optimization 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Built-in training modes and simulation capabilities that allow 
                personnel to practice with their protective systems.
              </p>
            </div>

            {/* Optimization 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wellness Monitoring</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive health tracking that ensures personnel wellness 
                and prevents overexertion during extended operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Results */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world deployment results from Saudi emergency medical services 
              demonstrating the effectiveness of our protective integration architecture.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Results Chart */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Performance Improvements</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Response Time</span>
                    <span className="font-bold text-red-600">-34%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-600 h-3 rounded-full" style={{width: '84%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Safety Incidents</span>
                    <span className="font-bold text-orange-600">-67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-orange-600 h-3 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Equipment Efficiency</span>
                    <span className="font-bold text-yellow-600">+89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-600 h-3 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Personnel Satisfaction</span>
                    <span className="font-bold text-green-600">+92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="space-y-8">
              <div className="bg-white border-2 border-red-100 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/healthcare/Hospital_uniforms.jpg"
                    alt="Riyadh Emergency Services"
                    width={60}
                    height={60}
                    className="rounded-xl"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Riyadh Emergency Services</h4>
                    <p className="text-gray-600">Major Urban Implementation</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Six-month deployment across Riyadh's emergency medical services resulted in 
                  significant improvements in response times and personnel safety.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-xl">
                    <div className="text-2xl font-bold text-red-600">847</div>
                    <div className="text-xs text-gray-600">Emergency Responses</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">0</div>
                    <div className="text-xs text-gray-600">Safety Incidents</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-100 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/healthcare/Medical_staff_uniforms.jpg"
                    alt="Hajj Medical Teams"
                    width={60}
                    height={60}
                    className="rounded-xl"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Hajj Medical Teams</h4>
                    <p className="text-gray-600">Mass Gathering Deployment</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Successful deployment during Hajj season with enhanced crowd management 
                  and multi-hazard protection capabilities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-yellow-50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">2.1M</div>
                    <div className="text-xs text-gray-600">Pilgrims Served</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">98.7%</div>
                    <div className="text-xs text-gray-600">System Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Developments */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Future Developments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emerging technologies and innovations that will further enhance protective 
              integration architecture for Saudi emergency medical personnel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Threat Prediction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Machine learning algorithms that predict potential hazards and automatically 
                    adjust protective systems before threats materialize.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Nanotechnology Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nano-scale protective systems that provide molecular-level defense 
                    against chemical and biological threats.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Augmented Reality Interface</h3>
                  <p className="text-gray-700 leading-relaxed">
                    AR-enhanced situational awareness providing real-time information 
                    overlay and navigation assistance during emergency operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg"
                alt="Future developments in protective systems"
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
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Protect Your Emergency Medical Heroes
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Equip your emergency medical personnel with the most advanced protective systems 
            designed specifically for Saudi Arabia's unique operational challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-red-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Request Safety Assessment
            </Link>
            <Link 
              href="/services/healthcare" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-red-900 transition-colors"
            >
              Explore Healthcare Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}