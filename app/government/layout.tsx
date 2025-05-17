import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Government Uniforms in Saudi Arabia | UniformSA",
  description: "Official government uniforms designed for Saudi Arabian public institutions. Combining authority, professionalism, and cultural considerations.",
  alternates: {
    canonical: '/government',
  },
}

export default function GovernmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 