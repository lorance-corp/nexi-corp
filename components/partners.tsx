import { FlaskConical, Microscope, Stethoscope, Atom, Sparkles, Network } from "lucide-react"

type Partner = {
  tier: string
  title: string
  capability: string
  blurb: string
  icon: typeof FlaskConical
  flagship?: boolean
}

const partners: Partner[] = [
  {
    tier: "Flagship",
    title: "NEXI Biotech Inc.",
    capability: "In vitro human neural modeling",
    blurb:
      "Our flagship in vitro modeling platform company — functional readouts from living human neural networks.",
    icon: Network,
    flagship: true,
  },
  {
    tier: "Anchor Partner",
    title: "Translational Study Execution",
    capability: "In vivo & in vitro studies",
    blurb:
      "Anchor-partner capacity for the in vivo and in vitro studies that carry a program from question to data.",
    icon: FlaskConical,
  },
  {
    tier: "Partner",
    title: "Histology & Sub-Cellular Quantification",
    capability: "Brain-slice histology",
    blurb:
      "Brain-slice histology and sub-cellular quantification that put anatomical ground truth behind functional claims.",
    icon: Microscope,
  },
  {
    tier: "Partner",
    title: "Tissue Pathology",
    capability: "Pathology services",
    blurb: "Dedicated tissue-pathology capability for programs that need diagnostic-grade tissue answers.",
    icon: Stethoscope,
  },
  {
    tier: "Partner",
    title: "Quantum Drug Discovery",
    capability: "Computational chemistry",
    blurb: "Quantum approaches to drug discovery that expand the chemical search space available to programs.",
    icon: Atom,
  },
  {
    tier: "Partner",
    title: "AI Drug Discovery · Rare Disease",
    capability: "Computational discovery",
    blurb:
      "Computational AI discovery focused on rare disease — surfacing candidates traditional pipelines pass over.",
    icon: Sparkles,
  },
]

const steps = [
  {
    n: "01",
    title: "Bring the program",
    body: "One conversation about the translational question in front of you — no need to know which vendor, model, or method you need.",
  },
  {
    n: "02",
    title: "We assemble the team",
    body: "We scope the work and route it across the network — platform companies, study partners, and consultants matched to the question.",
  },
  {
    n: "03",
    title: "One accountable partner",
    body: "NEXI stays the focal point end to end: one relationship, coordinated execution, and results that fit together.",
  },
]

export function Partners() {
  return (
    <section id="partners" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">The ecosystem · Agency model</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            One network. Every layer of translation.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            NEXI Corp is the marketplace that connects CNS programs with vetted partners — modeling, studies, histology,
            discovery, and the consultants who tie it together. Partner companies are listed by capability; identities
            are shared once you engage — relationships in this network are earned, not scraped.
          </p>
        </div>

        {/* Partner marketplace grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div
              key={p.title}
              className={`flex flex-col rounded-2xl border bg-card p-6 transition-colors ${
                p.flagship ? "border-primary/50 ring-glow" : "border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`font-mono text-[0.65rem] uppercase tracking-[0.2em] ${
                    p.flagship ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {p.tier}
                </span>
                <p.icon
                  className={`h-5 w-5 shrink-0 ${p.flagship ? "text-primary" : "text-muted-foreground"}`}
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground text-balance">{p.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-primary/80">{p.capability}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{p.blurb}</p>
            </div>
          ))}
        </div>

        {/* How the network works */}
        <div className="mt-20 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">How it works</p>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            A focal approach to a fragmented field.
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            CNS translation is scattered across dozens of specialists. NEXI Corp turns that sprawl into a single,
            coordinated front door.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="bg-card p-8">
              <span className="font-mono text-sm text-primary">{s.n}</span>
              <h4 className="mt-4 font-display text-xl font-semibold text-foreground">{s.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
