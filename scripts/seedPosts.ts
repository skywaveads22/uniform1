import fs from 'fs'
import path from 'path'
import { faker } from '@faker-js/faker'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  createdAt: string
  category: string
}

type Category = 'aviation' | 'education' | 'government' | 'healthcare' | 'hospitality' | 'industrial' | 'security'

const CATEGORIES: Category[] = [
  'aviation',
  'education',
  'government',
  'healthcare',
  'hospitality',
  'industrial',
  'security'
]

// Blog post titles from roadmap.md
const POSTS_BY_CATEGORY: Record<Category, string[]> = {
  aviation: [
    "Choosing the Right Fabrics for Saudi Aviation Uniforms: Balancing Durability and Climate Comfort",
    "Pilot Uniform Standards in KSA: A Complete Guide",
    "Cabin Crew Attire: Professionalism and Functionality at 30,000 Feet (Saudi Perspective)",
    "Ground Staff Uniforms: Ensuring Visibility and Safety at Saudi Airports",
    "Meeting GACA Regulations: What You Need to Know About Aviation Uniform Compliance in Saudi Arabia",
    "The Importance of Brand Representation Through Aviation Uniforms",
    "Custom Aviation Uniform Design: Reflecting Your Airline's Identity",
    "Maintenance Crew Workwear: Prioritizing Safety and Durability",
    "Summer vs. Winter Aviation Uniforms for the Saudi Climate",
    "Epaulettes and Insignia: Understanding Ranks in Saudi Aviation Attire",
    "Sustainable Fabric Options for Eco-Conscious Airlines in KSA",
    "Uniform Logistics for Airlines: Managing Inventory and Distribution in Saudi Arabia",
    "The Role of Uniforms in Passenger Perceptions of Airline Quality",
    "Footwear Standards for Aviation Professionals in KSA",
    "Headwear Options for Saudi Cabin Crew: Style and Practicality",
    "Cleaning and Maintenance Tips for Aviation Uniforms",
    "Innovations in Aviation Uniform Technology",
    "Case Study: Successful Uniform Rollout for a Saudi Regional Airline",
    "The Psychology of Color in Aviation Uniform Design",
    "Ensuring Comfort During Long Haul Flights: Fabric Choices Matter",
    "Accessorizing Aviation Uniforms: Ties, Scarves, and Pins",
    "Fire-Resistant Materials in Aviation Workwear: Safety First",
    "How Uniform Fit Impacts Performance and Morale in Aviation Staff",
    "Bulk Ordering Aviation Uniforms in Saudi Arabia: A Checklist",
    "Future Trends in Aviation Uniform Design (Post-2025)"
  ],
  education: [
    "Saudi Ministry of Education School Uniform Guidelines: An Overview",
    "Choosing Durable and Comfortable School Uniforms for the KSA Climate",
    "Benefits of School Uniforms in Fostering Discipline and Equality in Saudi Schools",
    "Designing Culturally Appropriate School Uniforms in Saudi Arabia",
    "Fabric Guide: Best Materials for Student Uniforms",
    "Teacher and Staff Attire: Setting Professional Standards in KSA Educational Institutions",
    "Kindergarten Uniforms: Prioritizing Comfort, Safety, and Playfulness",
    "Sports Kits and PE Uniforms for Saudi Schools",
    "University Staff Uniforms: Projecting Institutional Identity",
    "Custom Embroidery and Badges for School Logos in Saudi Arabia",
    "Sustainable and Eco-Friendly School Uniform Options",
    "Managing School Uniform Procurement: Tips for Administrators in KSA",
    "How School Uniforms Can Enhance School Spirit and Identity",
    "Sizing Guides and Best Practices for Ordering School Uniforms in Bulk",
    "Stain Resistance and Easy-Care Fabrics for Younger Students",
    "Seasonal Uniform Considerations for Schools Across Saudi Arabia",
    "The Role of Modesty in Saudi School Uniform Design",
    "Safety Features in School Uniforms",
    "Comparing Uniform Policies: Public vs. Private Schools in KSA",
    "How Uniforms Prepare Students for Professional Life",
    "Iron-Free School Uniform Options: A Parent's Guide",
    "Ensuring Ethical Sourcing for School Uniform Manufacturing",
    "The Evolution of School Uniform Styles in Saudi Arabia",
    "Accessorizing School Uniforms: Approved Items in KSA Schools",
    "Getting the Right Fit: Measuring Students Accurately for Uniforms"
  ],
  government: [
    "Uniform Standards Across Different Saudi Government Ministries: A Comparative Look",
    "The Significance of Uniforms in Projecting Government Authority and Trust in KSA",
    "Choosing Appropriate Fabrics for Official Government Attire in the Saudi Climate",
    "Ceremonial vs. Duty Uniforms for Saudi Government Officials",
    "Dress Codes and Uniform Policies in Saudi Public Sector Offices",
    "Incorporating National Symbols and Colors in Government Uniform Design",
    "Uniform Requirements for Specific Roles in Government",
    "Maintaining Professionalism: The Importance of Well-Maintained Government Uniforms",
    "Custom Tailoring vs. Standard Sizing for Government Personnel",
    "Procurement Processes for Government Uniforms in Saudi Arabia",
    "Ranking Insignia and Badges on Saudi Government Uniforms",
    "Balancing Tradition and Modernity in Official KSA Attire",
    "High-Visibility Uniforms for Public Works Employees in Saudi Cities",
    "Uniform Considerations for Government Representatives Attending International Events",
    "Durable Workwear for Field Operatives in Government Agencies",
    "The Role of Uniforms in Building Esprit de Corps among Government Teams",
    "Laundry and Maintenance Contracts for Large Government Departments",
    "Footwear Regulations for Government Uniforms in KSA",
    "Technological Advancements in Fabrics for Government Duty Wear",
    "Case Study: Updating Uniforms for a Major Saudi Ministry",
    "Ensuring Comfort for Government Employees Working Outdoors in KSA",
    "Headwear Etiquette and Options within Saudi Government Uniform Policy",
    "Color Psychology in Designing Trustworthy Government Uniforms",
    "The Link Between Professional Uniforms and Citizen Confidence",
    "Sustainable and Ethical Uniform Solutions for the Saudi Public Sector"
  ],
  healthcare: [
    "Choosing the Right Scrubs for Saudi Hospitals: Comfort, Hygiene, and Professionalism",
    "Infection Control Features in Modern Healthcare Uniforms",
    "Saudi Ministry of Health (MoH) Uniform Guidelines for Healthcare Workers",
    "Breathable Fabrics for Medical Staff Working in Hot Saudi Climates",
    "Different Uniform Needs: Doctors vs. Nurses vs. Lab Technicians vs. Support Staff in KSA",
    "The Importance of Color-Coding Uniforms in Large Saudi Hospitals",
    "Custom Embroidery for Hospital Logos and Department Names",
    "Lab Coats: Material Choices and Safety Standards for Saudi Laboratories",
    "Patient Gowns in KSA: Balancing Comfort, Dignity, and Hygiene",
    "Maternity Scrubs and Uniform Options for Healthcare Professionals",
    "Sustainable and Disposable Uniform Options in Healthcare Settings",
    "How Professional Uniforms Influence Patient Trust and Confidence in Saudi Healthcare",
    "Uniform Management Solutions for Hospitals: Leasing vs. Buying in KSA",
    "Footwear Guide for Healthcare Workers: Prioritizing Comfort and Safety",
    "Head Coverings and Modesty Considerations in Saudi Healthcare Uniforms",
    "Maintaining Sterility: Best Practices for Laundering Healthcare Uniforms",
    "Fluid-Resistant and Barrier Technologies in Medical Textiles",
    "The Psychology of Color in Healthcare Environments and Uniforms",
    "Ordering and Sizing Healthcare Uniforms for Diverse Staff Bodies",
    "Case Study: Improving Staff Morale with New Uniforms in a Saudi Clinic",
    "Temperature-Regulating Fabrics for Enhanced Comfort During Shifts",
    "Safety Features in Paramedic and Emergency Response Uniforms in KSA",
    "The Evolution of Nursing Uniforms in Saudi Arabia",
    "How Uniforms Support Branding for Private Healthcare Providers in KSA",
    "Future Trends: Smart Uniforms in Healthcare"
  ],
  hospitality: [
    "Designing Elegant and Functional Hotel Uniforms for the Luxury Saudi Market",
    "Front Desk Attire: Making a Great First Impression in KSA Hotels",
    "Restaurant and F&B Staff Uniforms: Style Meets Practicality in Saudi Dining",
    "Housekeeping Uniforms: Ensuring Comfort, Durability, and Professionalism",
    "Chef Whites and Kitchen Staff Uniforms: Hygiene and Safety Standards in KSA",
    "Concierge and Bell Staff Uniforms: Reflecting Service Excellence",
    "Integrating Saudi Cultural Elements into Hospitality Uniform Design",
    "Fabric Choices for Hospitality Wear: Stain Resistance and Easy Maintenance",
    "Climate-Appropriate Uniforms for Outdoor Hospitality Staff in Saudi Arabia",
    "The Role of Uniforms in Creating a Cohesive Brand Experience Across Hotel Chains in KSA",
    "Customization Options: Embroidery, Name Tags, and Accessories",
    "Spa and Wellness Center Uniforms: Promoting Relaxation and Professionalism",
    "Banquet and Events Staff Attire: Versatility and Elegance",
    "Sustainable Uniform Programs for Eco-Conscious Hotels in Saudi Arabia",
    "Uniform Rental vs. Purchase: Pros and Cons for KSA Hospitality Businesses",
    "Footwear Recommendations for Staff Standing Long Hours",
    "Aprons: Styles and Functional Choices for Different Hospitality Roles",
    "Maintaining Uniform Quality: Laundry and Upkeep Tips",
    "How Uniforms Impact Staff Morale and Guest Satisfaction Scores",
    "Case Study: Rebranding a Saudi Hotel Through New Uniform Concepts",
    "Headwear and Accessories: Completing the Look for Hospitality Staff",
    "Color Trends in Modern Hospitality Uniform Design in the Middle East",
    "Sizing Challenges and Solutions for Diverse Hospitality Teams",
    "Uniform Considerations for Theme Parks and Entertainment Venues in KSA",
    "The Future of Hospitality Uniforms: Tech Integration and Personalization"
  ],
  industrial: [
    "Choosing the Right Workwear for Saudi Arabia's Industrial Sector: Safety First",
    "High-Visibility Clothing Standards and Their Importance in KSA",
    "Flame-Resistant (FR) Workwear: Protecting Workers in Oil & Gas and Manufacturing",
    "Durable Fabrics for Heavy-Duty Industrial Environments in Saudi Arabia",
    "Selecting Coveralls vs. Two-Piece Workwear: Pros and Cons",
    "Safety Footwear Requirements for Industrial Sites in KSA",
    "Head Protection and Other PPE Integration with Industrial Uniforms",
    "Climate Control: Breathable and Cooling Fabrics for Hot Saudi Workplaces",
    "Uniform Needs for Specific Industries: Construction, Manufacturing, Oil & Gas, Logistics in KSA",
    "Chemical-Resistant Clothing for Hazardous Environments",
    "Anti-Static Workwear: Essential for Specific Saudi Industries",
    "The Importance of Proper Fit for Safety and Comfort in Industrial Uniforms",
    "Custom Branding: Adding Company Logos to Industrial Workwear",
    "Workwear for Welding and Metal Fabrication Specialists in KSA",
    "Industrial Laundry Services vs. In-House Care for Workwear",
    "Reflective Tape Placement for Maximum Visibility",
    "Workwear Considerations for Female Employees in Saudi Industrial Settings",
    "Innovations in Protective Textile Technology",
    "The Role of Uniforms in Promoting a Safety Culture on KSA Work Sites",
    "Budgeting for Industrial Workwear: Balancing Cost and Quality/Safety",
    "Case Study: Implementing a Successful Workwear Program for a Saudi Factory",
    "Layering Systems for Varying Temperatures in Industrial Settings",
    "Arc Flash Protective Clothing Standards Relevant to KSA",
    "Sustainable Options in Industrial Workwear",
    "Ensuring Compliance with Saudi Labor Laws Regarding Protective Clothing"
  ],
  security: [
    "Designing Authoritative and Professional Security Guard Uniforms for KSA",
    "Key Features of Effective Security Uniforms: Visibility, Durability, Functionality",
    "Choosing the Right Materials for Security Uniforms in the Saudi Climate",
    "Tactical Gear Integration: Pockets, Loops, and Reinforcements",
    "High-Visibility Elements for Night Patrols and Low-Light Conditions in Saudi Arabia",
    "Uniform Regulations for Private Security Companies in KSA",
    "Ballistic Vest Carriers and Body Armor Integration",
    "Footwear for Security Personnel: Comfort, Support, and Durability",
    "Distinguishing Ranks and Roles Through Security Uniform Insignia in KSA",
    "Formal vs. Patrol Duty Uniforms for Security Staff",
    "Custom Patches and Embroidery for Security Company Branding",
    "Maintaining a Sharp and Professional Appearance: Uniform Care Tips",
    "Weather-Appropriate Outerwear for Security Guards in KSA",
    "Comfort Considerations for Long Security Shifts",
    "The Psychological Impact of Security Uniforms on Deterrence and Public Perception",
    "Headwear Options: Caps, Berets, and Climate Considerations",
    "Sourcing Durable Hardware: Buttons, Zippers, and Buckles for Security Wear",
    "Uniforms for Event Security vs. Static Guarding in Saudi Arabia",
    "Accessories for Security Uniforms: Belts, Pouches, Communication Device Holders",
    "Case Study: Upgrading Security Uniforms for a Large Saudi Facility",
    "Breathable Armor Carriers and Base Layers for Comfort Under Vests",
    "Women's Uniform Options in the Saudi Security Sector",
    "Color Choices for Security Uniforms: Practicality and Perception",
    "Bulk Ordering and Inventory Management for Security Firms in KSA",
    "Future Trends: Integrating Wearable Technology into Security Uniforms"
  ]
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function getImagesFromCategory(category: string): string[] {
  const categoryPath = path.join(process.cwd(), 'public', 'images', category)
  
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true })
    return []
  }

  return fs.readdirSync(categoryPath)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => `/images/${category}/${file}`)
}

function generatePosts(category: Category): Post[] {
  const images = getImagesFromCategory(category)
  const titles = POSTS_BY_CATEGORY[category]
  const posts: Post[] = []

  titles.forEach((title: string, index: number) => {
    const imageIndex = index % Math.max(1, images.length)
    const defaultImage = `/images/${category}/default.jpg`

    posts.push({
      id: faker.string.uuid(),
      title,
      slug: generateSlug(title),
      excerpt: faker.lorem.paragraph(),
      image: images[imageIndex] || defaultImage,
      createdAt: faker.date.past().toISOString(),
      category
    })
  })

  return posts
}

function savePostsToJson(category: Category, posts: Post[]): void {
  const dataDir = path.join(process.cwd(), 'src', 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  const filePath = path.join(dataDir, `${category}.json`)
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2))
  console.log(`✓ Generated ${posts.length} posts for ${category}`)
}

// Generate posts for each category
CATEGORIES.forEach((category: Category) => {
  const posts = generatePosts(category)
  savePostsToJson(category, posts)
})

console.log('✨ All posts generated successfully!') 