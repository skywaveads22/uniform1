import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Uniform Design Services | UniformSA",
  description: "Professional custom uniform design services for Saudi organizations. Create distinctive, functional uniforms that perfectly reflect your brand identity.",
  alternates: {
    canonical: '/services/custom-design',
  },
}

export default function CustomDesignServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 