import Image from "next/image"

const applications = [
  {
    id: "biocomputers",
    index: "01",
    title: "Biocomputers",
    image: "/images/biocomputer.png",
    summary:
      "Living neural tissue interfaced directly with silicon — wetware compute that learns, adapts, and processes at biological efficiency.",
    points: ["Neuron-on-chip interconnects", "Adaptive in vitro learning", "Ultra-low-power inference"],
  },
  {
    id: "digital-avatars",
    index: "02",
    title: "Digital Avatars",
    image: "/images/digital-avatar.jpg",
    summary:
      "High-fidelity neural models that capture individual cognition and behavior — persistent, interactive digital representations of the mind.",
    points: ["Cognitive twins", "Behavioral modeling", "Persistent neural state"],
  },
  {
    id: "defense",
    index: "03",
    title: "Defense",
    image: "/images/defense-grid.jpg",
    summary:
      "Resilient neuro-inspired systems for sensing, autonomy, and decision support in contested and denied environments.",
    points: ["Edge autonomy", "Signal intelligence", "Hardened neural compute"],
  },
  {
    id: "dual-use",
    index: "04",
    title: "Dual-Use",
    image: "/images/dual-use.png",
    summary:
      "Foundational platforms that serve both commercial and national-security missions — one substrate, many mandates.",
    points: ["Commercial translation", "Sovereign capability", "Controlled deployment"],
  },
]

export function Applications() {
  return (
    <section id="applications" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Deeptech applications</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            One substrate. Four frontier domains.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            NEXI Corp advances a single core technology — deep neuro techbio — across the applications where it changes
            what is computationally possible.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {applications.map((app) => (
            <article
              key={app.id}
              id={app.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={app.image || "/placeholder.svg"}
                  alt={`${app.title} — deep neuro techbio application`}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, oklch(0.2 0.025 248), oklch(0.2 0.025 248 / 10%) 60%)",
                  }}
                />
                <span className="absolute left-4 top-4 font-mono text-xs text-primary">{app.index}</span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground">{app.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{app.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {app.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
