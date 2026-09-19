import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircuitArray } from "@/components/circuit-array"

const facts = [
  { k: "8 domains", v: "One living substrate" },
  { k: "Single-unit", v: "Functional resolution" },
  { k: "Human iPSC", v: "Not an animal proxy" },
  { k: "NEXI Biotech", v: "The flagship platform company", href: "https://www.nexibiotech.com" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.5 0.14 200 / 55%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Deep neuro techbio
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
              The circuits that make us human,{" "}
              <span className="text-primary text-glow">built to be measured.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              NEXI builds living human neural circuits that can be perturbed and read out at the resolution of
              single units, so that the questions deciding whether a program moves forward are answered on human
              biology rather than on a proxy for it.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button render={<Link href="/applications" />} nativeButton={false} size="lg" className="rounded-full">
                Explore the applications
              </Button>
              <Button
                render={<Link href="/capabilities" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent"
              >
                See the capabilities
              </Button>
            </div>
          </div>

          <div className="animate-rise [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 ring-glow">
              <CircuitArray className="h-auto w-full" />
            </div>
            <p className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              A directed loop, read out electrode by electrode
            </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {facts.map((s) => (
            <div key={s.k} className="bg-card px-5 py-5">
              <dt className="font-display text-xl font-semibold text-foreground">
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
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
