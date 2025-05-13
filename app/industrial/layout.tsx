import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Uniforms in Saudi Arabia | UniformSA",
  description: "Durable and functional industrial uniforms for Saudi Arabian manufacturing and industrial sectors. Safety-compliant workwear designed for comfort in demanding environments.",
  alternates: {
    canonical: '/industrial',
  },
}

export default function IndustrialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 