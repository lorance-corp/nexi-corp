import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.5 0.14 200 / 55%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Holding company · Deep neuro techbio
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
              NEXI <span className="text-primary text-glow">CORP</span>
            </h1>

            <p className="mt-3 font-mono text-sm text-muted-foreground">/neks-eye/ — the nexus of mind and machine</p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              We build category-defining <span className="text-foreground">deep neuro techbio</span> — translating
              living neural systems into computational substrates spanning longevity, personalized medicine, precision
              neurology, brain–computer interfacing, and defense.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                render={<Link href="/applications" />}
                nativeButton={false}
                size="lg"
                className="rounded-full"
              >
                Explore applications
              </Button>
              <Button
                render={<Link href="/structure" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent"
              >
                Our structure
              </Button>
            </div>
          </div>

          <div className="animate-rise [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-2xl border border-border ring-glow">
              <Image
                src="/images/biocomputer.png"
                alt="A glassy human brain wired directly into a silicon processor by fine neural interconnects"
                width={905}
                height={961}
                priority
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.16 0.02 250 / 65%), transparent 55%)",
                }}
              />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "In vitro", v: "Neural substrates" },
            { k: "8 domains", v: "Bio · Neuro · Medicine · Defense" },
            { k: "Holding", v: "Service contracts" },
            { k: "NEXI Biotech", v: "Operating entity", href: "https://www.nexibiotech.com" },
          ].map((s) => (
            <div key={s.k} className="bg-card px-5 py-5">
              <dt className="font-display text-xl font-semibold text-foreground">
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                    {s.k}
                  </a>
                ) : (
                  s.k
                )}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
