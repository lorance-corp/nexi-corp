import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { FullBleed } from "@/components/full-bleed"
import { capabilities } from "@/lib/capabilities"

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

      <FullBleed
        image="/images/biocomputer-gen.png"
        alt="A dense lattice of engineered neural connections lit across a silicon die"
        align="left"
        eyebrow="Applications"
        title="One living substrate, eight frontier domains."
      >
        <p>
          A human neural circuit that can be built to specification and measured under load behaves as a platform
          rather than a product, which is why the same substrate that de-risks a CNS therapeutic also underwrites
          biocomputing, interfacing, digital avatars, and national-security research.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {applicationChips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              {c}
            </span>
          ))}
        </div>
        <TeaseLink href="/applications" label="Explore the applications" />
      </FullBleed>

      {/* Capabilities */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Capabilities</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              What the stack is made of.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Four capabilities sit underneath every application and every engagement, running from the living
              tissue itself through to the systems that carry a result out of the lab.
            </p>
          </div>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-card p-7">
                <dt className="font-display text-lg font-semibold text-foreground">{c.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{c.body}</dd>
              </div>
            ))}
          </dl>
          <TeaseLink href="/capabilities" label="See the full stack" />
        </div>
      </section>

      <FullBleed
        image="/images/partners-gen.png"
        alt="A constellation of connected nodes converging on a single bright centre"
        align="right"
        eyebrow="Partners"
        title="Vetted capabilities, not a vendor list."
      >
        <p>
          The flagship in vitro platform sits alongside vetted partners across translational study execution,
          histology and sub-cellular quantification, tissue pathology, and quantum and AI discovery, each disclosed
          once an engagement is underway and coordinated so that results from different teams arrive as one answer
          rather than as four reports you have to reconcile.
        </p>
        <TeaseLink href="/partners" label="Browse the capabilities" />
      </FullBleed>

      {/* Network */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Network</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
                One front door for deal flow.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                Sponsors bring the translational question rather than a vendor list, providers and consultants
                receive qualified and scoped work instead of cold leads, and the whole arrangement stays rooted in
                the Florida ecosystem we are helping to build.
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

      {/* Structure */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Structure</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Built to hold the long horizon.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                NEXI Corp holds the intellectual property and coordinates strategy across the domains, while NEXI
                Biotech carries the flagship platform to market as a focused, investable operating company.
              </p>
              <TeaseLink href="/structure" label="See how it fits together" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Parent</p>
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
                  NEXI Biotech
                  <ArrowUpRight className="ml-1 inline h-4 w-4 text-primary" aria-hidden />
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  The operating company, carrying human neural circuits into preclinical evidence.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
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
                NEXI exists to make human-relevant evidence the standard in neuro translation, and to build the
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
