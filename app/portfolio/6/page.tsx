import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Uniform Solutions - Portfolio | Uniform Blogs',
  description: 'Comprehensive uniform solution for healthcare professionals in Saudi Arabia, focusing on durability, comfort, and regulatory compliance.',
  keywords: 'healthcare uniforms, medical scrubs, Saudi Arabia, durability, comfort, compliance',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Healthcare Uniform Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive uniform solution for healthcare professionals, focusing on durability, 
              comfort, and compliance with Saudi regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Image Section */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/portfolio/6/image.jpg" 
              alt="Healthcare Uniform Solutions" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Durability Features */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Durability Features</h2>
            <p className="text-gray-600 leading-relaxed">
              Uniforms engineered to withstand frequent washing cycles and daily wear in demanding 
              healthcare environments. Advanced fabric technology ensures long-lasting performance.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Reinforced seams and stress points
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Fade-resistant colors
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Industrial-grade washing compatibility
              </li>
            </ul>
          </div>

          {/* Comfort and Fit */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comfort and Fit</h2>
            <p className="text-gray-600 leading-relaxed">
              Ergonomic designs that prioritize comfort during long shifts. Breathable fabrics and 
              strategic fit ensure ease of movement and all-day comfort for healthcare professionals.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Moisture-wicking technology
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Flexible stretch panels
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                Ergonomic cut and design
              </li>
            </ul>
          </div>

          {/* Regulatory Compliance */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
            <p className="text-gray-600 leading-relaxed">
              Full adherence to local health and safety standards for medical uniforms in Saudi Arabia. 
              Certified materials and designs that meet international healthcare regulations.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Saudi health ministry approved
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                International safety standards
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Antimicrobial treatments
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Healthcare Uniforms?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our comprehensive healthcare uniform solutions 
            tailored for the Saudi Arabian market.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
