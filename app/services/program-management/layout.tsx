import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Uniform Program Management Services | UniformSA",
  description: "Comprehensive uniform program management services for Saudi organizations. Let our experts handle your uniform logistics while you focus on your core business.",
  alternates: {
    canonical: '/services/program-management',
  },
}

export default function ProgramManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 