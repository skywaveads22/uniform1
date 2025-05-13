import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Uniform Policy Development Services | UniformSA",
  description: "Expert uniform policy development and implementation for Saudi organizations. Create comprehensive standards that align with your brand and industry requirements.",
  alternates: {
    canonical: '/services/uniform-policies',
  },
}

export default function UniformPoliciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 