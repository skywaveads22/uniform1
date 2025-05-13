import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hospitality Uniform Services | UniformSA",
  description: "Professional hospitality uniform services for hotels, restaurants, and service industry in Saudi Arabia. Elegant and practical attire enhancing your brand experience.",
  alternates: {
    canonical: '/services/hospitality',
  },
}

export default function HospitalityServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 