import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Uniforms in Saudi Arabia | UniformSA",
  description: "Premium healthcare uniforms designed for medical professionals in Saudi Arabia. High-quality, comfortable, and compliant with healthcare standards.",
  alternates: {
    canonical: '/healthcare',
  },
}

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 