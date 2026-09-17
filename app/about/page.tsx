import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About — NEXI Corp",
  description:
    "NEXI Corp (a DBA of Lorance Enterprise Corp) is the IP holding company for NEXI Biotech and the coordinating layer of the NEXI partner network.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Holding the IP. Coordinating the network.">
        <p>
          NEXI Corp — a DBA of Lorance Enterprise Corp — exists to do two things well: steward the intellectual
          property behind NEXI Biotech, and act as the focal point where partner companies and consultants meet the
          programs that need them.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">IP holding</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">The foundation</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
              NEXI Corp holds and develops the intellectual property that powers NEXI Biotech's in vitro human
              neural modeling platform — keeping the long-term assets stable while the operating companies move
              fast.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Partner marketplace</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">The connective tissue</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
              As an agency for neuro translation, NEXI Corp sources deal flow for the network's companies and
              consultants — one coordinated relationship in a field that usually forces sponsors to manage many.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Leadership</p>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-[280px_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/case-lorance.png"
              alt="Case Lorance, Founder & CEO of NEXI Corp"
              width={496}
              height={503}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Case Lorance</h2>
            <p className="mt-1 font-mono text-sm text-muted-foreground">Founder & CEO</p>
            <div className="mt-5 max-w-2xl space-y-4 leading-relaxed text-muted-foreground text-pretty">
              <p>
                Case founded NEXI to close the gap where CNS programs stall — between promising preclinical science
                and evidence a clinic can trust. He leads NEXI Corp's portfolio and partner strategy and serves as
                Founder & CEO of NEXI Biotech, the ecosystem's flagship platform company.
              </p>
              <p>
                Based in Tampa, Florida, he works at the intersection of neuroscience, translational operations, and
                company building — assembling the network so that no program has to navigate the field alone.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium">
              <a
                href={site.biotech}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary"
              >
                NEXI Biotech
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="group inline-flex items-center gap-1.5 text-primary">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
