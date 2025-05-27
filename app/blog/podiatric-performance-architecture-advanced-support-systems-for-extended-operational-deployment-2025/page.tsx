import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Podiatric Performance Architecture: Advanced Support Systems for Extended Operational Deployment 2025',
  description: 'Discover revolutionary podiatric performance systems that optimize foot health and operational efficiency for extended deployment scenarios, featuring advanced biomechanical support and fatigue prevention technologies.',
  keywords: 'podiatric performance, foot support systems, operational deployment, biomechanical optimization, fatigue prevention, extended operations, foot health technology, performance footwear',
  openGraph: {
    title: 'Podiatric Performance Architecture: Advanced Support Systems for Extended Operational Deployment 2025',
    description: 'Revolutionary systems that optimize foot health and performance for extended operational deployment scenarios.',
    images: ['/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg'],
  },
}

export default function PodiatricPerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/90"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg"
            alt="Medical professionals in action"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Podiatric Performance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Architecture
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced Support Systems for Extended Operational Deployment 2025
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Biomechanical Optimization
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Fatigue Prevention
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Performance Enhancement
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
                Revolutionizing Operational Performance Through Foot Health
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Extended operational deployments place unprecedented demands on the human body, with foot health 
                being a critical factor in maintaining peak performance. Our Podiatric Performance Architecture 
                represents a paradigm shift in how we approach biomechanical support for professionals in 
                demanding environments.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This comprehensive system integrates advanced materials science, biomechanical engineering, and 
                physiological monitoring to create adaptive support solutions that evolve with operational demands, 
                ensuring sustained performance and injury prevention throughout extended deployment periods.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">89%</div>
                  <div className="text-sm text-gray-600">Fatigue Reduction</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <div className="text-3xl font-bold text-teal-600 mb-2">94%</div>
                  <div className="text-sm text-gray-600">Performance Retention</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">76%</div>
                  <div className="text-sm text-gray-600">Injury Prevention</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/healthcare/Healthcare_uniforms.jpg"
                alt="Advanced podiatric support systems"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl opacity-20"></div>
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
              Our podiatric performance system is built on five fundamental pillars that work synergistically 
              to optimize foot health and operational efficiency during extended deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component 1 */}
            <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dynamic Pressure Distribution</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced pressure mapping and redistribution systems that adapt in real-time to changing 
                load patterns and operational demands, preventing hotspots and pressure-related injuries.
              </p>
            </div>

            {/* Component 2 */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Biomechanical Optimization Engine</h3>
              <p className="text-gray-700 leading-relaxed">
                AI-powered analysis of gait patterns, stride mechanics, and movement efficiency to provide 
                personalized support adjustments that enhance natural biomechanics.
              </p>
            </div>

            {/* Component 3 */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Cushioning Matrix</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart materials that respond to impact forces and environmental conditions, providing 
                optimal shock absorption and energy return for sustained performance.
              </p>
            </div>

            {/* Component 4 */}
            <div className="group p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thermal Regulation System</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced temperature management through phase-change materials and moisture-wicking 
                technologies that maintain optimal foot climate during extended operations.
              </p>
            </div>

            {/* Component 5 */}
            <div className="group p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fatigue Monitoring Network</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrated sensors that track physiological markers of fatigue and provide early 
                warning systems to prevent performance degradation and injury risk.
              </p>
            </div>

            {/* Component 6 */}
            <div className="group p-8 bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Acceleration Protocol</h3>
              <p className="text-gray-700 leading-relaxed">
                Active recovery systems including compression therapy, circulation enhancement, and 
                targeted muscle stimulation to accelerate recovery between operational periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biomechanical Analysis Framework */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Biomechanical Analysis Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive analysis system evaluates multiple biomechanical parameters to optimize 
              foot performance and prevent injury during extended operational deployments.
            </p>
          </div>

          <div className="space-y-12">
            {/* Analysis Component 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h3 className="text-3xl font-bold text-gray-900">Gait Pattern Analysis</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Advanced motion capture and pressure sensing technology analyzes individual gait patterns, 
                  identifying inefficiencies and asymmetries that could lead to fatigue or injury during 
                  extended operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Real-time stride analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Pressure distribution mapping</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Asymmetry detection algorithms</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/healthcare/Medical_staff_uniforms.jpg"
                  alt="Gait pattern analysis"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Analysis Component 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h3 className="text-3xl font-bold text-gray-900">Load Distribution Optimization</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dynamic load analysis ensures optimal weight distribution across the foot structure, 
                  preventing overloading of specific areas and reducing the risk of stress-related injuries.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Multi-point pressure monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Adaptive support adjustment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Predictive load modeling</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/healthcare/Nurse_uniforms.jpg"
                  alt="Load distribution optimization"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Analysis Component 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <h3 className="text-3xl font-bold text-gray-900">Performance Degradation Prediction</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Machine learning algorithms analyze physiological and biomechanical data to predict 
                  performance degradation before it occurs, enabling proactive intervention strategies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Fatigue progression modeling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Early warning systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Intervention recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/healthcare/Doctor_uniforms_attire.jpg"
                  alt="Performance degradation prediction"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Materials & Technology */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Materials & Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge materials and technologies that form the foundation of our podiatric 
              performance architecture, delivering unprecedented support and adaptability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Material 1 */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Polymers</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Shape-memory polymers that adapt to foot morphology and operational demands, 
                providing personalized support that evolves with changing conditions.
              </p>
            </div>

            {/* Material 2 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Piezoelectric Fibers</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Energy-harvesting fibers that convert mechanical stress into electrical energy, 
                powering embedded sensors and active support systems.
              </p>
            </div>

            {/* Material 3 */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phase-Change Materials</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Temperature-regulating materials that absorb and release heat to maintain 
                optimal foot temperature during varying operational conditions.
              </p>
            </div>

            {/* Material 4 */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Graphene Composites</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ultra-lightweight, high-strength materials that provide exceptional durability 
                and conductivity for integrated sensor networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Scenarios */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Extended Deployment Scenarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our podiatric performance architecture is optimized for various extended deployment 
              scenarios, each presenting unique challenges and requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Scenario 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Facilities</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                12-16 hour shifts in hospital environments requiring constant mobility, 
                standing, and rapid response capabilities.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-semibold">12-16 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Surface Type</span>
                  <span className="font-semibold">Hard floors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Activity Level</span>
                  <span className="font-semibold">High mobility</span>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Operations</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Extended patrol duties and surveillance operations requiring sustained 
                alertness and mobility over varied terrain.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-semibold">8-24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Surface Type</span>
                  <span className="font-semibold">Mixed terrain</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Activity Level</span>
                  <span className="font-semibold">Variable</span>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Operations</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Manufacturing and construction environments with prolonged standing, 
                heavy lifting, and exposure to harsh conditions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-semibold">10-12 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Surface Type</span>
                  <span className="font-semibold">Industrial floors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Activity Level</span>
                  <span className="font-semibold">Heavy duty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Performance Metrics & Validation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing and validation results demonstrating the effectiveness 
              of our podiatric performance architecture across multiple deployment scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">89%</h3>
              <p className="text-gray-600 font-medium">Fatigue Reduction</p>
              <p className="text-sm text-gray-500 mt-2">Compared to standard footwear</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-teal-600 mb-2">94%</h3>
              <p className="text-gray-600 font-medium">Performance Retention</p>
              <p className="text-sm text-gray-500 mt-2">After 12-hour deployment</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">76%</h3>
              <p className="text-gray-600 font-medium">Injury Prevention</p>
              <p className="text-sm text-gray-500 mt-2">Reduction in foot-related injuries</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">92%</h3>
              <p className="text-gray-600 font-medium">User Satisfaction</p>
              <p className="text-sm text-gray-500 mt-2">Overall comfort rating</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Validation Study Results</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-3">Study Duration</h4>
                <p className="text-3xl font-bold text-emerald-600 mb-2">6 Months</p>
                <p className="text-sm text-gray-600">Comprehensive field testing</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-3">Participants</h4>
                <p className="text-3xl font-bold text-teal-600 mb-2">1,247</p>
                <p className="text-sm text-gray-600">Healthcare & security professionals</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-3">Deployment Hours</h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">89,432</p>
                <p className="text-sm text-gray-600">Total operational hours tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Future Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emerging technologies and research directions that will further enhance 
              podiatric performance architecture in the coming years.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Neural Interface Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Direct neural feedback systems that provide real-time communication between 
                    the foot and support system for unprecedented responsiveness.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Quantum Sensing Arrays</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ultra-sensitive quantum sensors that detect minute changes in pressure, 
                    temperature, and biomechanical stress at the molecular level.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Self-Healing Materials</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced polymers that can repair micro-damage autonomously, extending 
                    system lifespan and maintaining optimal performance characteristics.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/healthcare/Hospital_uniforms.jpg"
                alt="Future innovations in podiatric performance"
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
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Optimize Your Operational Performance
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Experience the future of podiatric performance with our advanced support systems 
            designed for extended operational deployment scenarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Request Performance Assessment
            </Link>
            <Link 
              href="/services/healthcare" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-emerald-900 transition-colors"
            >
              Explore Healthcare Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}