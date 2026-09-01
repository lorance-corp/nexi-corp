import type { Metadata } from "next"
import { Partners } from "@/components/partners"
import { Marketplace } from "@/components/marketplace"

export const metadata: Metadata = {
  title: "Partners — NEXI Corp",
  description:
    "The NEXI partner marketplace: our flagship NEXI Biotech plus vetted capabilities across study execution, histology, tissue pathology, quantum discovery, and AI discovery — identities disclosed on engagement.",
}

export default function PartnersPage() {
  return (
    <div className="pt-16">
      <Partners />
      <Marketplace />
    </div>
  )
}
