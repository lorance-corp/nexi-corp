"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * The closing call to action, rendered from the root layout so every page ends
 * by telling the visitor how to source the technology. The visitor is the one
 * acting here; NEXI is how they get it.
 *
 * Suppressed on /contact, where it would point at the page already open.
 */
export function EngageCta() {
  const pathname = usePathname()
  if (pathname === "/contact") return null

  return (
    <section className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[380px] w-[760px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.42 0.1 252 / 42%), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">Engage NEXI</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Find out how you can source this technology for your organization.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button render={<Link href="/contact" />} nativeButton={false} size="lg" className="rounded-full">
            Engage NEXI
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
          </Button>
          <Button
            render={<Link href="/capabilities" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent"
          >
            Explore the capabilities
          </Button>
        </div>
      </div>
    </section>
  )
}
