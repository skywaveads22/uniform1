import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Measurement Services | UniformSA",
  description: "Expert uniform measurement services ensuring perfect-fitting uniforms for your entire team. Precise, efficient, and tailored to your organization's needs.",
  alternates: {
    canonical: '/services/measurement',
  },
}

export default function MeasurementServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 