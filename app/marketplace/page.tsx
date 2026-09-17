import type { Metadata } from "next"
import { Marketplace } from "@/components/marketplace"

export const metadata: Metadata = {
  title: "Marketplace — NEXI Corp",
  description: "Comprehensive services across the NEXI network through a single engagement.",
}

export default function MarketplacePage() {
  return <Marketplace />
}
