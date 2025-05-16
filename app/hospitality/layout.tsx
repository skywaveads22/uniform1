import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hospitality Uniforms in Saudi Arabia | UniformSA",
  description: "Elegant and practical hospitality uniforms for hotels, restaurants, and service industry in Saudi Arabia. Enhancing brand experience through professional attire.",
  alternates: {
    canonical: '/hospitality',
  },
}

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 