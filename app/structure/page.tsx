import type { Metadata } from "next"
import { Structure } from "@/components/structure"

export const metadata: Metadata = {
  title: "Structure — NEXI Corp",
  description:
    "NEXI Corp is the holding company and home of our service contracts; NEXI Biotech is the operating, investable entity commercializing the platform.",
}

export default function StructurePage() {
  return (
    <div className="pt-16">
      <Structure />
    </div>
  )
}
