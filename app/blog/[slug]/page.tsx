import { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Clock, Calendar, Tag, Share2 } from 'lucide-react'
import fs from 'fs'
import path from 'path'
import { getImagePath, getValidImagePath } from '@/lib/image-helper'
import SafeImage from '@/components/SafeImage'

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  
  let title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  let description = "Learn about uniform solutions and best practices for professional settings in Saudi Arabia.";
  let image = '/images/default-article-image.jpg';
  
  // Get category from slug to help determine image path
  const category = getCategory(slug);
  
  // Determine an appropriate image based on category
  const defaultCategoryImage = category === 'education' ? '/images/default-article-image.jpg' : `/images/${category}/${category.charAt(0).toUpperCase() + category.slice(1)}_uniforms.jpg`;
  
  // Use validated path to ensure the image exists
  image = getValidImagePath(defaultCategoryImage);
  
  // Specific metadata for known articles
  switch(slug) {
    case 'designing-professional-security-guard-uniforms-for-ksa-context':
      title = 'Designing Professional Security Guard Uniforms for KSA Context';
      description = 'Discover the key considerations for designing effective security guard uniforms that meet Saudi Arabia\'s unique requirements and standards.';
      image = '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg';
      break;
    case 'key-features-of-effective-security-uniforms-visibility-durability-functionality':
      title = 'Key Features of Effective Security Uniforms: Visibility, Durability, Functionality';
      description = 'Learn about the essential features that make security uniforms effective, including visibility elements, durable materials, and functional design.';
      image = '/images/security/High_visibility_security_uniforms.jpeg';
      break;
    case 'choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate':
      title = 'Choosing the Right Materials for Security Uniforms in the Saudi Climate';
      description = 'Explore the best fabric options for security uniforms in Saudi Arabia\'s challenging climate conditions, balancing comfort and professionalism.';
      image = '/images/security/breathable_security_shirts.jpeg';
      break;
    case 'kindergarten-uniforms-prioritizing-comfort-safety-and-playfulness':
      title = 'Kindergarten Uniforms: Prioritizing Comfort, Safety, and Playfulness';
      description = 'Discover the unique approach to designing kindergarten uniforms that balance institutional identity with the practical needs of young children in Saudi Arabia.';
      image = '/images/education/primary_school_uniforms.jpg';
      break;
    case 'how-uniform-fit-impacts-performance-and-morale-in-aviation-staff':
      title = 'How Uniform Fit Impacts Performance and Morale in Aviation Staff';
      description = 'Explore the crucial relationship between proper uniform fit and the performance, comfort, and morale of aviation personnel in Saudi Arabia.';
      image = '/images/aviation/aviation_uniform_embroidery.jpg';
      break;
    case 'head-coverings-and-modesty-considerations-in-saudi-healthcare-uniforms':
      title = 'Head Coverings and Modesty Considerations in Saudi Healthcare Uniforms';
      description = 'An in-depth look at how Saudi healthcare uniforms incorporate modesty requirements while maintaining professionalism and practicality.';
      image = '/images/healthcare/Healthcare_uniforms.jpg';
      break;
    case 'choosing-the-right-scrubs-for-saudi-hospitals-comfort-hygiene-and-professionalism':
      title = 'Choosing the Right Scrubs for Saudi Hospitals: Comfort, Hygiene, and Professionalism';
      description = 'A guide to selecting appropriate scrubs that meet hygiene standards while providing comfort for healthcare professionals in Saudi Arabian hospitals.';
      image = '/images/healthcare/Scrubs_uniforms.jpg';
      break;
    case 'designing-hotel-uniforms-that-balance-functionality-and-brand-identity':
      title = 'Designing Hotel Uniforms That Balance Functionality and Brand Identity';
      description = 'How hotel uniforms in Saudi Arabia can effectively represent brand values while meeting the practical needs of different staff roles.';
      image = '/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg';
      break;
    case 'benefits-of-school-uniforms-in-fostering-discipline-and-equality-in-saudi-schools':
      title = 'Benefits of School Uniforms in Fostering Discipline and Equality in Saudi Schools';
      description = 'An examination of how school uniforms contribute to educational environments in Saudi Arabia by promoting discipline and reducing social barriers.';
      image = '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg';
      break;
    case 'footwear-guide-for-healthcare-workers-prioritizing-comfort-and-safety':
      title = 'Footwear Guide for Healthcare Workers: Prioritizing Comfort and Safety';
      description = 'Essential considerations for selecting appropriate footwear for healthcare professionals in Saudi Arabian medical facilities.';
      image = '/images/healthcare/Medical_staff_uniforms.jpg';
      break;
    case 'infection-control-features-in-modern-healthcare-uniforms':
      title = 'Infection Control Features in Modern Healthcare Uniforms';
      description = 'How innovative fabric technologies and design elements in healthcare uniforms help prevent cross-contamination in Saudi healthcare settings.';
      image = '/images/healthcare/antimicrobial_scrubs.jpg';
      break;
    case 'fabric-guide-best-materials-for-student-uniforms':
      title = 'Fabric Guide: Best Materials for Student Uniforms';
      description = 'A comprehensive analysis of fabrics suited for school uniforms in Saudi Arabia\'s climate while ensuring durability and comfort for students.';
      image = '/images/education/School_uniform_fabrics.jpg';
      break;
    case 'dress-codes-and-uniform-policies-in-saudi-public-sector-offices':
      title = 'Dress Codes and Uniform Policies in Saudi Public Sector Offices';
      description = 'Understanding the formal dress requirements and uniform standards across various government departments in Saudi Arabia.';
      image = '/images/government/Government_employee_uniforms.jpg';
      break;
    case 'ensuring-comfort-for-government-employees-working-outdoors-in-ksa':
      title = 'Ensuring Comfort for Government Employees Working Outdoors in KSA';
      description = 'Specialized uniform solutions for Saudi government personnel who work in challenging outdoor environments.';
      image = '/images/government/government_field_staff_wear.jpg';
      break;
    case 'durable-workwear-for-field-operatives-in-government-agencies':
      title = 'Durable Workwear for Field Operatives in Government Agencies';
      description = 'How specially designed uniforms support the practical needs of government field staff while maintaining professional appearance.';
      image = '/images/government/government_outerwear_jackets.jpg';
      break;
    case 'case-study-rebranding-a-saudi-hotel-through-new-uniform-concepts':
      title = 'Case Study: Rebranding a Saudi Hotel Through New Uniform Concepts';
      description = 'How a strategic uniform redesign helped transform guest perception and staff morale in a prominent Saudi Arabian hotel.';
      image = '/images/hospitality/modern_hospitality_design_uniforms.jpeg';
      break;
    case 'future-trends-integrating-wearable-technology-into-security-uniforms':
      title = 'Future Trends: Integrating Wearable Technology into Security Uniforms';
      description = 'Emerging innovations in smart textiles and wearable devices that are revolutionizing security uniforms in Saudi Arabia.';
      image = '/images/security/High_visibility_security_uniforms.jpeg';
      break;
    case 'temperature-regulating-fabrics-for-security-uniforms-in-saudi-arabia':
      title = 'Temperature-Regulating Fabrics for Security Uniforms in Saudi Arabia';
      description = 'Advanced textile technologies that help security personnel maintain comfort in extreme Saudi Arabian climate conditions.';
      image = '/images/security/breathable_security_shirts.jpeg';
      break;
    case 'different-uniform-needs-doctors-vs-nurses-vs-lab-technicians-vs-support-staff-in-ksa':
      title = 'Different Uniform Needs: Doctors vs Nurses vs Lab Technicians vs Support Staff in KSA';
      description = 'Comprehensive analysis of the distinct uniform requirements for various healthcare professionals in Saudi Arabian medical facilities.';
      image = '/images/healthcare/Medical_staff_uniforms.jpg';
      break;
    case 'layering-systems-for-varying-temperatures-in-industrial-settings':
      title = 'Layering Systems for Varying Temperatures in Industrial Settings';
      description = 'Strategic approaches to layered workwear that allows industrial personnel to adapt to Saudi Arabia\'s extreme temperature fluctuations while maintaining safety and comfort.';
      image = '/images/industrial/Industrial_workwear_Saudi_Arabia_KSA.jpeg';
      break;
    case 'choosing-durable-and-comfortable-school-uniforms-for-the-ksa-climate':
      title = 'Choosing Durable and Comfortable School Uniforms for the KSA Climate';
      description = 'Expert guidance on selecting school uniform fabrics and designs that withstand Saudi Arabia\'s harsh climate while ensuring student comfort throughout the academic year.';
      image = '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg';
      break;
    case 'accessorizing-school-uniforms-approved-items-in-ksa-schools':
      title = 'Accessorizing School Uniforms: Approved Items in KSA Schools';
      description = 'Comprehensive guide to permissible school uniform accessories within Saudi Arabian educational institutions, balancing school policies with practical and cultural considerations.';
      image = '/images/education/school_uniform_accessories.jpg';
      break;
    case 'iron-free-school-uniform-options-a-parent-s-guide':
      title = 'Iron-Free School Uniform Options: A Parent\'s Guide';
      description = 'Practical solutions for busy Saudi families seeking low-maintenance, wrinkle-resistant school uniform options that maintain a professional appearance with minimal effort.';
      image = '/images/education/easy_care_school_uniforms.jpg';
      break;
    case 'choosing-appropriate-fabrics-for-official-government-attire-in-the-saudi-climate':
      title = 'Choosing Appropriate Fabrics for Official Government Attire in the Saudi Climate';
      description = 'Expert analysis of optimal textiles for government uniforms that balance professional appearance with comfort in Saudi Arabia\'s challenging climate conditions.';
      image = '/images/government/Government_employee_uniforms.jpg';
      break;
    case 'incorporating-national-symbols-and-colors-in-government-uniform-design':
      title = 'Incorporating National Symbols and Colors in Government Uniform Design';
      description = 'Learn about the significance of national symbols and colors in Saudi Arabian government uniforms and how they are incorporated into design.';
      image = '/images/government/Civil_service_uniforms.jpg';
      break;
    case 'designing-culturally-appropriate-school-uniforms-in-saudi-arabia':
      title = 'Designing Culturally Appropriate School Uniforms in Saudi Arabia';
      description = 'Discover how to design school uniforms that respect and reflect Saudi Arabian cultural norms while maintaining functionality and professional standards.';
      image = '/images/education/Boys_school_uniforms.jpg';
      break;
    case 'uniform-standards-across-different-saudi-government-ministries-a-comparative-look':
      title = 'Uniform Standards Across Different Saudi Government Ministries: A Comparative Look';
      description = 'Explore the uniform standards and practices across various Saudi government ministries and how they compare.';
      image = '/images/government/Civil_service_uniforms.jpg';
      break;
    case 'climate-appropriate-uniforms-for-outdoor-hospitality-staff-in-saudi-arabia':
      title = 'Climate-Appropriate Uniforms for Outdoor Hospitality Staff in Saudi Arabia';
      description = 'Discover the best uniforms for outdoor hospitality staff in Saudi Arabia, including lightweight and breathable options.';
      image = '/images/hospitality/Hospitality_uniforms.jpeg';
      break;
    case 'choosing-the-right-scrubs-for-saudi-hospitals-comfort-hygiene-and-professionalism':
      title = 'Choosing the Right Scrubs for Saudi Hospitals: Comfort, Hygiene, and Professionalism';
      description = 'A guide to selecting appropriate scrubs that meet hygiene standards while providing comfort for healthcare professionals in Saudi Arabian hospitals.';
      image = '/images/healthcare/Scrubs_uniforms.jpg';
      break;
    case 'advanced-materials-in-security-equipment':
      title = 'Advanced Materials in Security Equipment';
      description = 'Discover the latest advancements in security equipment materials, including high-performance fabrics and durable components.';
      image = '/images/security/Security_uniforms.jpeg';
      break;
    case 'ergonomic-optimization-architecture-advanced-systems-for-workplace-injury-prevention-2025':
      title = 'Ergonomic Optimization Architecture: Advanced Systems for Workplace Injury Prevention 2025';
      description = 'Explore the latest ergonomic design principles and technologies for preventing workplace injuries in the 21st century.';
      image = '/images/hospitality/modern_hospitality_design_uniforms.jpeg';
      break;
    case 'material-science-architecture-advanced-substrate-engineering-for-hospitality-performance-enhancement-2025':
      title = 'Material Science Architecture: Advanced Substrate Engineering for Hospitality Performance Enhancement 2025';
      description = 'Discover how advanced substrate engineering is transforming the hospitality industry through improved material performance.';
      image = '/images/hospitality/breathable_hospitality_fabrics.jpeg';
      break;
    case 'temperature-regulating-fabrics-for-security-uniforms-in-saudi-arabia':
      title = 'Temperature-Regulating Fabrics for Security Uniforms in Saudi Arabia';
      description = 'Advanced textile technologies that help security personnel maintain comfort in extreme Saudi Arabian climate conditions.';
      image = '/images/security/breathable_security_shirts.jpeg';
      break;
    case 'designing-hotel-uniforms-that-balance-functionality-and-brand-identity':
      title = 'Designing Hotel Uniforms That Balance Functionality and Brand Identity';
      description = 'How hotel uniforms in Saudi Arabia can effectively represent brand values while meeting the practical needs of different staff roles.';
      image = '/images/hospitality/Hospitality_uniforms_Saudi_Arabia_KSA.jpeg';
      break;
    case 'bulk-ordering-and-inventory-management-for-security-firms-in-ksa':
      title = 'Bulk Ordering and Inventory Management for Security Firms in KSA';
      description = 'Discover the best practices for bulk ordering and inventory management in the security industry in Saudi Arabia.';
      image = '/images/security/Security_uniforms.jpeg';
      break;
    case 'heat-management-technologies-for-security-operations':
      title = 'Heat Management Technologies for Security Operations';
      description = 'Discover the latest heat management technologies for security operations in Saudi Arabia.';
      image = '/images/security/Security_uniforms.jpeg';
      break;
    case 'color-choices-for-security-uniforms-practicality-and-perception':
      title = 'Color Choices for Security Uniforms: Practicality and Perception';
      description = 'Discover the best color choices for security uniforms that balance practicality with professional appearance.';
      image = '/images/security/Security_uniforms.jpeg';
      break;
    case 'the-impact-of-uniform-comfort-on-healthcare-worker-performance':
      title = 'The Impact of Uniform Comfort on Healthcare Worker Performance';
      description = 'Discover how uniform comfort can impact the performance and well-being of healthcare professionals in Saudi Arabia.';
      image = '/images/healthcare/Healthcare_uniforms.jpg';
      break;
    case 'biodigital-integration-architecture-advanced-attire-systems-for-healthcare-performance-optimization-2025':
      title = 'Biodigital Integration Architecture: Advanced Attire Systems for Healthcare Performance Optimization 2025';
      description = 'Explore the latest advancements in biodigital integration for healthcare performance optimization.';
      image = '/images/healthcare/healthcare_header_new.jpg';
      break;
    case 'designing-authoritative-and-professional-security-guard-uniforms-for-ksa':
      title = 'Designing Authoritative and Professional Security Guard Uniforms for KSA';
      description = 'Discover the key considerations for designing effective security guard uniforms that meet Saudi Arabia\'s unique requirements and standards.';
      image = '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg';
      break;
    case 'operational-attire-engineering-advanced-comfort-systems-for-hospitality-maintenance-personnel-2025':
      title = 'Operational Attire Engineering: Advanced Comfort Systems for Hospitality Maintenance Personnel 2025';
      description = 'Discover the latest operational attire engineering solutions for hospitality maintenance personnel in Saudi Arabia.';
      image = '/images/hospitality/Hotel_staff_apparel.jpeg';
      break;
    default:
      // For any other articles, use the default category image
      image = defaultCategoryImage;
  }
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    }
  };
}

// Generate static paths for all blog posts 
export async function generateStaticParams() {
  // Get all directories in the blog folder
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  
  // Define all hardcoded slugs that should be available
  const hardcodedSlugs = [
    "designing-professional-security-guard-uniforms-for-ksa-context",
    "key-features-of-effective-security-uniforms-visibility-durability-functionality",
    "choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate",
    "kindergarten-uniforms-prioritizing-comfort-safety-and-playfulness",
    "how-uniform-fit-impacts-performance-and-morale-in-aviation-staff",
    "ceremonial-vs-duty-uniforms-for-saudi-government-officials",
    "procurement-processes-for-government-uniforms-in-saudi-arabia",
    "head-coverings-and-modesty-considerations-in-saudi-healthcare-uniforms",
    
    // Additional blog slugs
    "benefits-of-school-uniforms-in-fostering-discipline-and-equality-in-saudi-schools",
    "footwear-guide-for-healthcare-workers-prioritizing-comfort-and-safety",
    "infection-control-features-in-modern-healthcare-uniforms",
    "fabric-guide-best-materials-for-student-uniforms",
    "dress-codes-and-uniform-policies-in-saudi-public-sector-offices",
    "ensuring-comfort-for-government-employees-working-outdoors-in-ksa",
    "durable-workwear-for-field-operatives-in-government-agencies",
    "case-study-rebranding-a-saudi-hotel-through-new-uniform-concepts",
    "future-trends-integrating-wearable-technology-into-security-uniforms",
    "breathable-fabrics-for-medical-staff-working-in-hot-saudi-climates",
    "different-uniform-needs-doctors-vs-nurses-vs-lab-technicians-vs-support-staff-in-ksa",
    "layering-systems-for-varying-temperatures-in-industrial-settings",
    "choosing-durable-and-comfortable-school-uniforms-for-the-ksa-climate",
    "accessorizing-school-uniforms-approved-items-in-ksa-schools",
    "iron-free-school-uniform-options-a-parent-s-guide",
    "choosing-appropriate-fabrics-for-official-government-attire-in-the-saudi-climate",
    "incorporating-national-symbols-and-colors-in-government-uniform-design",
    "designing-culturally-appropriate-school-uniforms-in-saudi-arabia",
    "uniform-standards-across-different-saudi-government-ministries-a-comparative-look",
    "climate-appropriate-uniforms-for-outdoor-hospitality-staff-in-saudi-arabia",
    "choosing-the-right-scrubs-for-saudi-hospitals-comfort-hygiene-and-professionalism",
    "advanced-materials-in-security-equipment",
    "ergonomic-optimization-architecture-advanced-systems-for-workplace-injury-prevention-2025",
    "material-science-architecture-advanced-substrate-engineering-for-hospitality-performance-enhancement-2025",
    "temperature-regulating-fabrics-for-security-uniforms-in-saudi-arabia",
    "designing-hotel-uniforms-that-balance-functionality-and-brand-identity",
    "bulk-ordering-and-inventory-management-for-security-firms-in-ksa",
    "heat-management-technologies-for-security-operations",
    "color-choices-for-security-uniforms-practicality-and-perception",
    "the-impact-of-uniform-comfort-on-healthcare-worker-performance",
    "biodigital-integration-architecture-advanced-attire-systems-for-healthcare-performance-optimization-2025",
    "designing-authoritative-and-professional-security-guard-uniforms-for-ksa",
    "operational-attire-engineering-advanced-comfort-systems-for-hospitality-maintenance-personnel-2025"
  ];
  
  // Define the type for blogSlugs array items
  type BlogSlug = { slug: string };
  let blogSlugs: BlogSlug[] = [];
  
  // Try to read the directory, but don't fail if it doesn't work
  try {
    const dirEntries = fs.readdirSync(blogDir, { withFileTypes: true });
    const directoryBasedSlugs = dirEntries
      .filter(dirent => dirent.isDirectory() && !dirent.name.includes('[') && dirent.name !== 'category')
      .map(dirent => ({
        slug: dirent.name
      }));
    
    blogSlugs = [...directoryBasedSlugs];
  } catch (error) {
    // Error reading blog directory
    // Continue with hardcoded slugs if directory read fails
  }
  
  // Add all hardcoded slugs that aren't already included
  hardcodedSlugs.forEach(slug => {
    if (!blogSlugs.some(item => item.slug === slug)) {
      blogSlugs.push({ slug });
    }
  });
  
  // Generated static paths for slugs
  return blogSlugs;
}

// Shared function to get category from slug
function getCategory(slug: string): string {
  if (slug.includes('security') || slug.includes('guard')) return 'security';
  if (slug.includes('school') || slug.includes('education') || slug.includes('kindergarten')) return 'education';
  if (slug.includes('hospital') || slug.includes('healthcare') || slug.includes('medical') || slug.includes('nurse') || slug.includes('scrub')) return 'healthcare';
  if (slug.includes('government') || slug.includes('public-sector') || slug.includes('official') || slug.includes('civil-service')) return 'government';
  if (slug.includes('hotel') || slug.includes('hospitality') || slug.includes('restaurant') || slug.includes('chef') || slug.includes('catering')) return 'hospitality';
  if (slug.includes('aviation') || slug.includes('airline') || slug.includes('pilot') || slug.includes('cabin-crew') || slug.includes('flight')) return 'aviation';
  if (slug.includes('industrial') || slug.includes('factory') || slug.includes('construction') || slug.includes('workwear')) return 'industrial';
  return 'blog';
}

// This is a dynamic route for blog posts
export default function BlogPost({ params }: { params: { slug: string } }): JSX.Element {
  // Get the slug from params
  const { slug } = params;
  
  const category = getCategory(slug);
  
  // Function to render article content based on slug
  const renderArticleContent = (): JSX.Element => {
    let content: JSX.Element;
    
    switch(slug) {
      case 'designing-professional-security-guard-uniforms-for-ksa-context':
        content = (
          <>
            <p className="mb-4">
              Designing security guard uniforms for Saudi Arabia requires a careful balance of authority, professionalism, and practical functionality. In a country where security personnel play a vital role across various sectors, from corporate facilities to government institutions, the right uniform makes a significant statement about capability and trustworthiness.
            </p>
            <p className="mb-4">
              Professional security guard uniforms in KSA must project authority while adhering to cultural and regulatory requirements. The design elements that contribute to authoritative appearance include structured silhouettes, proper insignia placement, and appropriate color choices. Navy blue, black, and khaki remain the most common colors for security uniforms in Saudi Arabia, each communicating different levels of formality and function.
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-bold">Key Design Elements for KSA Security Uniforms</h2>
            <p className="mb-4">
              When designing security guard uniforms for Saudi deployment, several elements deserve special attention:
            </p>
            <ul className="mb-6 list-inside list-disc space-y-2 pl-4">
              <li><strong>Climate Adaptation:</strong> Saudi Arabia's extreme climate requires breathable fabrics with moisture-wicking properties. Lightweight yet durable materials ensure comfort during long shifts in high temperatures.</li>
              <li><strong>Cultural Considerations:</strong> Uniform designs should respect local cultural norms while maintaining professional standards.</li>
              <li><strong>Visibility Features:</strong> Strategic reflective elements ensure security personnel remain visible during night shifts or in low-light conditions.</li>
              <li><strong>Tactical Functionality:</strong> Properly positioned pockets, equipment attachment points, and reinforced areas support the practical requirements of security work.</li>
            </ul>
            <p className="mb-4">
              Professional security uniforms should include options for different levels of formality. Class A dress uniforms for supervisory staff and formal occasions present a more polished appearance, while Class B tactical uniforms provide greater functionality for active security operations.
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-bold">Customization and Branding</h2>
            <p className="mb-4">
              Customization plays a crucial role in distinguishing security staff and reinforcing company identity. Professional embroidery, badges, and patches help identify security personnel while promoting brand recognition. Many Saudi security companies incorporate their logo and company colors into uniform designs to strengthen their professional image.
            </p>
            <p className="mb-4">
              The quality of materials and craftsmanship directly impacts both appearance and durability. Security uniforms face demanding conditions and frequent washing, making fabric selection critically important. Poly-cotton blends (typically 65/35 or 60/40) offer a good balance of comfort and durability for the Saudi climate.
            </p>
            <p className="mb-4">
              When implementing new security uniform programs in KSA, companies should consider:
            </p>
            <ul className="mb-6 list-inside list-disc space-y-2 pl-4">
              <li>Compliance with regional regulations regarding security personnel identification</li>
              <li>Clear distinction between different security roles and ranks</li>
              <li>Consistent implementation across all security staff</li>
              <li>Proper fit and sizing options for different body types</li>
            </ul>
            <p className="mb-4">
              By investing in well-designed, high-quality security uniforms, companies in Saudi Arabia can enhance their professional image while providing their security personnel with comfortable, functional workwear that supports their important role.
            </p>
          </>
        );
        break;
      default:
        content = (
          <>
            <p className="mb-4">
              Article content not found.
            </p>
          </>
        );
    }
    
    return content;
  };

  // Function to get article title based on slug
  const getArticleTitle = (slug: string): string => {
    switch(slug) {
      case 'designing-professional-security-guard-uniforms-for-ksa-context':
        return 'Designing Professional Security Guard Uniforms for KSA Context';
      case 'key-features-of-effective-security-uniforms-visibility-durability-functionality':
        return 'Key Features of Effective Security Uniforms: Visibility, Durability, Functionality';
      case 'choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate':
        return 'Choosing the Right Materials for Security Uniforms in the Saudi Climate';
      case 'kindergarten-uniforms-prioritizing-comfort-safety-and-playfulness':
        return 'Kindergarten Uniforms: Prioritizing Comfort, Safety, and Playfulness';
      default:
        // Convert slug to title case
        return slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  };

  // Function to get article image path based on slug
  const getArticleImagePath = (slug: string): string => {
    // Get category from slug to help determine image path
    const category = getCategory(slug);
    
    // Default image based on category
    let defaultImage = '/images/default-article-image.jpg';
    
    // Specific images for common articles
    switch(slug) {
      case 'designing-professional-security-guard-uniforms-for-ksa-context':
        return '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg';
      case 'key-features-of-effective-security-uniforms-visibility-durability-functionality':
        return '/images/security/High_visibility_security_uniforms.jpeg';
      case 'choosing-the-right-materials-for-security-uniforms-in-the-saudi-climate':
        return '/images/security/breathable_security_shirts.jpeg';
      case 'kindergarten-uniforms-prioritizing-comfort-safety-and-playfulness':
        return '/images/education/primary_school_uniforms.jpg';
      default:
        // Set category-specific default images
        switch(category) {
          case 'security':
            return '/images/security/Security_uniforms.jpeg';
          case 'healthcare':
            return '/images/healthcare/healthcare_header_nurse.jpg';
          case 'education':
            return '/images/default-article-image.jpg';
          case 'hospitality':
            return '/images/hospitality/Hotel_uniforms.jpeg';
          case 'aviation':
            return '/images/aviation/Aviation_uniforms.jpg';
          case 'industrial':
            return '/images/industrial/Industrial_uniforms.jpeg';
          case 'government':
            return '/images/government/Government_uniforms.jpg';
          default:
            return defaultImage;
        }
    }
  };

  // Get a valid image path that exists
  const articleImagePath = getValidImagePath(getArticleImagePath(slug));

  return (
    <div className="relative bg-white py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700 dark:text-white">{getArticleTitle(slug)}</span>
          </nav>

          {/* Featured Image with Client-Side Error Handling */}
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
            <SafeImage 
              src={articleImagePath}
              alt={getArticleTitle(slug)}
              fill
              priority
              className="object-cover"
              fallbackSrc={`/images/${category}/${category}_uniforms.jpg`}
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {getArticleTitle(slug)}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>June 15, 2023</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>{category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout (2 columns on desktop) */}
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose dark:prose-invert max-w-none">
              {renderArticleContent()}
              <div className="mt-8">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-gray-600">Industry expert with extensive experience in uniform design and implementation for various sectors across Saudi Arabia.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Share Section */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold">Share Article</h3>
                <div className="flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-4 text-lg font-semibold">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog" className="group block">
                    <div className="text-sm font-medium group-hover:text-primary">More articles</div>
                    <div className="text-xs text-gray-500">View all blog posts</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}