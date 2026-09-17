import type { Metadata } from "next"
import { Capabilities } from "@/components/capabilities"

export const metadata: Metadata = {
  title: "Capabilities — NEXI Corp",
  description:
    "Neural substrates, neuro-computational models, trusted deployment, and high-bandwidth signal & sensing — the capability stack behind the NEXI ecosystem.",
}

export default function CapabilitiesPage() {
  return (
    <div className="pt-16">
      <Capabilities />
    </div>
  )
}
