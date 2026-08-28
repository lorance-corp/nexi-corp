"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Activity, Dna, Brain, Cpu, CircuitBoard, ScanFace, ShieldCheck, Split } from "lucide-react"

type Application = {
  id: string
  title: string
  icon: typeof Activity
  tagline: string
  image: string
  summary: string
  points: string[]
}

const applications: Application[] = [
  {
    id: "longevity",
    title: "Longevity",
    icon: Activity,
    tagline: "Extending the healthy lifespan of the brain",
    image: "/images/longevity.png",
    summary:
      "We treat cognitive aging as an engineering problem — mapping how neural tissue degrades and intervening to preserve function. Living neural models let us test interventions on human-relevant substrates rather than proxies.",
    points: ["Neural aging models", "Cellular renewal assays", "Cognitive resilience"],
  },
  {
    id: "personalized-medicine",
    title: "Personalized Medicine",
    icon: Dna,
    tagline: "Therapies matched to the individual mind",
    image: "/images/personalized-medicine.png",
    summary:
      "Patient-derived neural cultures become a personal testbed — screening treatments against an individual's own biology to predict response before a single dose reaches a patient.",
    points: ["Patient-derived cultures", "Response prediction", "Targeted therapeutics"],
  },
  {
    id: "precision-neurology",
    title: "Precision Neurology",
    icon: Brain,
    tagline: "Resolving disease at the level of the circuit",
    image: "/images/precision-neurology.png",
    summary:
      "By observing neural circuits with granular precision, we localize dysfunction to specific pathways — turning broad diagnoses into targeted, measurable interventions.",
    points: ["Circuit-level mapping", "Biomarker discovery", "Targeted modulation"],
  },
  {
    id: "brain-computer-interfacing",
    title: "Brain–Computer Interfacing",
    icon: Cpu,
    tagline: "The sandbox for the granular function of the human brain",
    image: "/images/bci.png",
    summary:
      "We create the sandbox to unveil the granular function of the human brain — the substrate that unlocks the mysteries of cognition and the complexities of personality. High-bandwidth interfaces translate neural activity into signal, and signal back into the brain.",
    points: ["High-bandwidth interfaces", "Neural decoding", "Cognition & personality"],
  },
  {
    id: "biocomputers",
    title: "Biocomputers",
    icon: CircuitBoard,
    tagline: "Wetware compute at biological efficiency",
    image: "/images/hero-neuro.png",
    summary:
      "Living neural tissue interfaced directly with silicon — wetware compute that learns, adapts, and processes at biological efficiency.",
    points: ["Neuron-on-chip interconnects", "Adaptive in vitro learning", "Ultra-low-power inference"],
  },
  {
    id: "digital-avatars",
    title: "Digital Avatars",
    icon: ScanFace,
    tagline: "Persistent digital representations of the mind",
    image: "/images/digital-avatar.jpg",
    summary:
      "High-fidelity neural models that capture individual cognition and behavior — persistent, interactive digital representations of the mind.",
    points: ["Cognitive twins", "Behavioral modeling", "Persistent neural state"],
  },
  {
    id: "defense",
    title: "Defense",
    icon: ShieldCheck,
    tagline: "Neuro-inspired systems for contested environments",
    image: "/images/defense-grid.jpg",
    summary:
      "Resilient neuro-inspired systems for sensing, autonomy, and decision support in contested and denied environments.",
    points: ["Edge autonomy", "Signal intelligence", "Hardened neural compute"],
  },
  {
    id: "dual-use",
    title: "Dual-Use",
    icon: Split,
    tagline: "One substrate, many mandates",
    image: "/images/network-plexus.jpg",
    summary:
      "Foundational platforms that serve both commercial and national-security missions — one substrate, many mandates.",
    points: ["Commercial translation", "Sovereign capability", "Controlled deployment"],
  },
]

export function Applications() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    e.preventDefault()
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1
    const next = (active + dir + applications.length) % applications.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const current = applications[active]

  return (
    <section id="applications" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Deeptech applications</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            One substrate. Eight frontier domains.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            NEXI Corp advances a single core technology — deep neuro techbio — across the applications where it changes
            what is computationally and clinically possible.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Tab rail */}
          <div
            role="tablist"
            aria-label="Deeptech application domains"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {applications.map((app, i) => {
              const selected = i === active
              return (
                <button
                  key={app.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  id={`tab-${app.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${app.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                    selected
                      ? "border-primary/50 bg-card text-foreground ring-glow"
                      : "border-border bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <app.icon
                    className={`h-5 w-5 shrink-0 ${selected ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="whitespace-nowrap font-display text-sm font-semibold lg:whitespace-normal">
                    {app.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active panel */}
          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                key={current.image}
                src={current.image || "/placeholder.svg"}
                alt={`${current.title} — deep neuro techbio application`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="animate-rise object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(0.2 0.025 248), oklch(0.2 0.025 248 / 5%) 55%)",
                }}
              />
              <p className="absolute bottom-4 left-6 right-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {current.tagline}
              </p>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">{current.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                {current.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {current.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
