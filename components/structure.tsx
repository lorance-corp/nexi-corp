import Image from "next/image"

export function Structure() {
  return (
    <section id="structure" className="relative overflow-hidden border-t border-border py-24">
      <div aria-hidden className="absolute inset-0 opacity-20">
        <Image
          src="/images/partners-gen.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Corporate structure</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            A holding company built for the long horizon.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            NEXI Corp is the holding company and home of our service contracts.{" "}
            <a href="https://www.nexibiotech.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary">
              NEXI Biotech
            </a>{" "}
            is the operating company — the investable entity commercializing the platform.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary/40 bg-card/80 p-8 backdrop-blur ring-glow">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Holding · Services</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">NEXI Corp</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The parent entity. NEXI Corp holds the IP, coordinates strategy across domains, and delivers deep-tech
              service contracts to commercial and government partners.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {["IP & strategy stewardship", "Service & research contracts", "Defense and dual-use engagements"].map(
                (i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {i}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/80 p-8 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Operating · Investable</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
              <a href="https://www.nexibiotech.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                NEXI Biotech ↗
              </a>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The operating company and investable entity — the nexus for integrated in vitro neurotechnology,
              productizing the platform for drug discovery and beyond.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {["In vitro neurotech products", "Translational drug-discovery models", "Venture-backable operating co."].map(
                (i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    {i}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
