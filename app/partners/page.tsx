import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Partners } from "@/components/partners"
import { Marketplace } from "@/components/marketplace"

export const metadata: Metadata = {
  title: "Partners · NEXI Corp",
  description:
    "The NEXI partner network: our flagship NEXI Biotech plus vetted capabilities across study execution, histology, tissue pathology, quantum discovery, and AI discovery, with identities disclosed on engagement.",
  alternates: { canonical: '/partners' }
}

export default function PartnersPage() {
  return (
    <>
      <PageHero eyebrow="The ecosystem · Agency model" title="One network. Every layer of translation.">
        <p>
          NEXI Corp connects CNS programs with vetted partners across modeling, studies, histology, and discovery,
          along with the consultants who tie the pieces together. Partner companies are listed here by capability
          rather than by name, and identities are shared once you engage, because relationships in this network are
          earned rather than scraped.
        </p>
      </PageHero>
      <Partners />
      <Marketplace />
    </>
  )
}
