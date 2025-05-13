import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Uniform Services | UniformSA",
  description: "Professional healthcare uniform services for medical facilities in Saudi Arabia. High-quality, comfortable, and standards-compliant medical attire.",
  alternates: {
    canonical: '/services/healthcare',
  },
}

export default function HealthcareServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 