import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Capabilities } from "@/components/capabilities"

export const metadata: Metadata = {
  title: "Capabilities · NEXI Corp",
  description:
    "Neural substrates, neuro-computational models, trusted deployment, and high-bandwidth signal and sensing: the capability stack behind the NEXI ecosystem.",
  alternates: { canonical: '/capabilities' }
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Platform capabilities" title="The nexus of mind and machine.">
        <p>
          A vertically integrated stack that runs from living neural tissue through to deployable systems,
          engineered as one coherent platform so that a result measured at the electrode survives every step
          between the culture and the decision it informs.
        </p>
      </PageHero>
      <Capabilities />
    </>
  )
}
