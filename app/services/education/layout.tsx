import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Educational Uniform Services | UniformSA",
  description: "Comprehensive educational uniform services for Saudi Arabian schools and educational institutions. Quality attire promoting institutional identity.",
  alternates: {
    canonical: '/services/education',
  },
}

export default function EducationServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 