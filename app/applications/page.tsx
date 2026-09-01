import type { Metadata } from "next"
import { Applications } from "@/components/applications"

export const metadata: Metadata = {
  title: "Applications — NEXI Corp",
  description:
    "Eight deeptech domains built on one living neural substrate — longevity, personalized medicine, precision neurology, brain–computer interfacing, biocomputers, digital avatars, defense, and dual-use.",
}

export default function ApplicationsPage() {
  return (
    <div className="pt-16">
      <Applications />
    </div>
  )
}
