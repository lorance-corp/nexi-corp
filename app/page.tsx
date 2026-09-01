import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { Marketplace } from "@/components/marketplace"

const applicationChips = [
  "Longevity",
  "Personalized Medicine",
  "Precision Neurology",
  "Brain-Computer Interfaces",
  "Biocomputing",
  "Digital Avatars",
  "Defense",
  "Dual-Use",
]

const capabilityPillars = [
  "Living neural substrates",
  "Neuro-computational models",
  "Trusted deployment",
  "Signal & sensing",
]

const ecosystemNames = [
  { name: "Florida Biotech Exchange", href: "https://www.flbiotech.org" },
  { name: "Florida BioXchange", href: "https://www.flbioxchange.com" },
  { name: "BIO on the Bay", href: "https://www.bioonthebay.com" },
  { name: "VC Village · Tampa Bay", href: "https://vcvillage.co" },
]

function TeaseLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

export default function Page() {
  return (
    <>
      <Hero />
      <Marketplace />

      {/* Applications tease */}
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Applications</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Eight deeptech domains. One living substrate.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Functional human neural circuits are a platform, not a product. The same substrate that de-risks a
              CNS therapeutic powers biocomputing, interfaces, avatars, and national-security research.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {applicationChips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
            <TeaseLink href="/applications" label="Explore the applications" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border md:order-first">
            <Image
              src="/images/bci.png"
              alt="Brain-computer interface visualization"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Structure tease */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Structure</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Built to hold the long horizon.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                NEXI Corp holds the IP and coordinates the ecosystem. NEXI Biotech carries the flagship platform to
                market as a focused, investable operating company.
              </p>
              <TeaseLink href="/structure" label="See how it fits together" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Holding</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">NEXI Corp</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  IP, licensing, and coordination across the network.
                </p>
              </div>
              <a
                href="https://www.nexibiotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-primary/40 bg-card p-6 transition-colors hover:border-primary/70"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Flagship</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  NEXI Biotech <span className="text-primary">↗</span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  The operating company — human neural circuits for preclinical evidence.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners tease */}
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Partners</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              A capability marketplace, not a vendor list.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              The flagship in vitro platform, plus vetted partners across translational study execution, histology
              and sub-cellular quantification, tissue pathology, and quantum and AI drug discovery — disclosed on
              engagement, coordinated by NEXI.
            </p>
            <TeaseLink href="/partners" label="Browse the capabilities" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/network-plexus.jpg"
              alt="Connected network visualization"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Capabilities tease */}
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/wireframe-brain.jpg"
              alt="Wireframe brain model"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Capabilities</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              What the stack is made of.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Four pillars underneath every application and every engagement:
            </p>
            <ul className="mt-4 space-y-2">
              {capabilityPillars.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <TeaseLink href="/capabilities" label="See the full stack" />
          </div>
        </div>
      </section>

      {/* Network tease */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Network</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
                One front door for deal flow.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                Sponsors bring the translational question; providers and consultants receive qualified, scoped work.
                And it's all rooted in the Florida ecosystem we help build.
              </p>
              <TeaseLink href="/network" label="How the network works" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ecosystemNames.map((e) => (
                <a
                  key={e.href}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {e.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About tease */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:p-12">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-border md:h-36 md:w-36">
              <Image
                src="/case-lorance.png"
                alt="Case Lorance, founder of NEXI"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">About</p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
                Mission-driven deep tech, coordinated from Florida.
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                NEXI exists to make human-relevant evidence the standard in neuro translation — and to build the
                ecosystem that delivers it.
              </p>
              <TeaseLink href="/about" label="Meet NEXI" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
