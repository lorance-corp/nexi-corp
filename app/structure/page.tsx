import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Structure } from "@/components/structure"

export const metadata: Metadata = {
  title: "Structure · NEXI Corp",
  description:
    "NEXI Corp holds the intellectual property and the service contracts; NEXI Biotech is the operating, investable entity commercializing the platform.",
  alternates: { canonical: '/structure' }
}

export default function StructurePage() {
  return (
    <>
      <PageHero eyebrow="Corporate structure" title="Built to hold the long horizon.">
        <p>
          NEXI Corp holds the intellectual property and the service contracts, while{" "}
          <a
            href="https://www.nexibiotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary"
          >
            NEXI Biotech
          </a>{" "}
          operates as the investable entity commercializing the platform, an arrangement that keeps the long-lived
          assets stable while the operating company moves at the speed its market demands.
        </p>
      </PageHero>
      <Structure />
    </>
  )
}
