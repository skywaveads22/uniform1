import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define redirects map
const redirects = new Map([
  ['/testimonials', '/'],
  ['/services/education', '/services'],
  ['/services/hospitality', '/services'],
  ['/services/security', '/services'],
  ['/services/aviation', '/services'],
  ['/services/government', '/services'],
  ['/services/healthcare', '/services'],
  ['/services/industrial', '/services'],
  ['/blog/uniform-management-systems-for-saudi-hospitals-and-clinics', '/blog'],
  ['/blog/protective-integration-architecture-advanced-safety-systems-for-saudi-emergency-medical-personnel-2025', '/blog'],
  ['/blog/chef-whites-and-kitchen-staff-uniforms-for-saudi-arabias-culinary-industry', '/blog'],
  ['/blog/high-visibility-uniforms-for-public-works-employees-in-saudi-cities', '/blog'],
  ['/blog/chromatic-experience-architecture-advanced-color-systems-for-saudi-hospitality-environments-2025', '/blog'],
  ['/blog/lab-coats-material-choices-and-safety-standards-for-saudi-laboratories', '/blog'],
  ['/blog/cultural-identity-integration-architecture-advanced-heritage-systems-for-saudi-hospitality-attire-2025', '/blog'],
  ['/blog/maternity-scrubs-and-uniform-options-for-healthcare-professionals', '/blog'],
  ['/blog/multimodal-utility-integration-systems-advanced-garment-frameworks-for-hospitality-service-optimization-2025', '/blog'],
  ['/blog/laundry-and-maintenance-contracts-for-large-government-departments', '/blog'],
  ['/blog/headwear-etiquette-and-options-within-saudi-government-uniform-policy', '/blog'],
  ['/blog/balancing-tradition-and-modernity-in-official-ksa-attire', '/blog'],
  ['/blog/perception-enhancement-architecture-advanced-design-systems-for-hospitality-brand-projection-2025', '/blog'],
  ['/blog/antimicrobial-fabrics-in-healthcare-uniforms-benefits-and-limitations', '/blog'],
  ['/blog/color-psychology-in-designing-trustworthy-government-uniforms', '/blog'],
  ['/blog/custom-tailoring-vs-standard-sizing-for-government-personnel', '/blog'],
  ['/blog/how-professional-uniforms-influence-patient-trust-and-confidence-in-saudi-healthcare', '/blog'],
  ['/blog/maintaining-professionalism-the-importance-of-well-maintained-government-uniforms', '/blog'],
  ['/blog/uniform-requirements-for-specific-roles-in-government', '/blog'],
  ['/blog/ordering-and-sizing-healthcare-uniforms-for-diverse-staff-bodies', '/blog'],
  ['/blog/case-study-updating-uniforms-for-a-major-saudi-ministry', '/blog'],
  ['/blog/custom-embroidery-for-hospital-logos-and-department-names', '/blog'],
  ['/blog/identity-integration-systems-advanced-customization-frameworks-for-organizational-attire-2025', '/blog'],
  ['/blog/footwear-regulations-for-government-uniforms-in-ksa', '/blog'],
  ['/blog/patient-gowns-in-ksa-balancing-comfort-dignity-and-hygiene', '/blog'],
  ['/blog/aviation-uniform-care-maintenance-guide', '/blog'],
  ['/blog/ranking-insignia-and-badges-on-saudi-government-uniforms', '/blog'],
  ['/blog/uniform-management-solutions-for-hospitals-leasing-vs-buying-in-ksa', '/blog'],
  ['/blog/fluid-resistant-and-barrier-technologies-in-medical-textiles', '/blog']
])

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname

  // Check if we have a redirect for this path
  const redirectTo = redirects.get(pathname)
  if (redirectTo) {
    // Create the URL for redirection
    const url = request.nextUrl.clone()
    url.pathname = redirectTo
    
    // Return permanent redirect
    return NextResponse.redirect(url, { status: 308 })
  }

  // If no redirect is found, continue with the request
  return NextResponse.next()
}

// Configure matcher for middleware
export const config = {
  matcher: Array.from(redirects.keys())
} 