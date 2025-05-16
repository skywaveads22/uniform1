import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact UniformSA | Get in Touch",
  description: "Contact information for UniformSA. Reach out to our team for inquiries, support, or to discuss your uniform requirements.",
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 