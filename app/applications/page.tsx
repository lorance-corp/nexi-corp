import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Applications } from "@/components/applications"

export const metadata: Metadata = {
  title: "Applications · NEXI Corp",
  description:
    "Eight deeptech domains built on one living neural substrate: longevity, personalized medicine, precision neurology, brain-computer interfacing, biocomputers, digital avatars, defense, and dual-use.",
}

export default function ApplicationsPage() {
  return (
    <>
      <PageHero eyebrow="Deeptech applications" title="One substrate. Eight frontier domains.">
        <p>
          NEXI Corp advances a single core technology across the applications where measuring a living human
          circuit changes what is computationally and clinically possible, so one substrate carries a therapeutic
          program, a compute architecture, and a national-security question without being rebuilt for each.
        </p>
      </PageHero>
      <Applications />
    </>
  )
}
