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
            "radial-gradient(closest-side, oklch(0.42 0.1 252 / 42%), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Deep neuro techbio
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
              NEXI <span className="text-primary text-glow">CORP</span>
            </h1>

            <p className="mt-3 font-mono text-sm text-muted-foreground">/neks-eye/ - the nexus of mind and machine</p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              We turn the function of human brain circuits into a world model: a measured dataset of how the brain computes, general enough to reshape many industries rather than one. That model is the foundation of a new category of neurotechnology.
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
                src="/images/hero-nexus-gen.png"
                alt="A translucent glass brain fused to a circuit substrate with branching neural filaments"
                width={1536}
                height={864}
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

        <p className="mt-16 max-w-4xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          NEXI Biotech is where the platform meets its first mature market, turning real-time human data into actionable insight on therapeutic efficacy. <a href="https://www.nexibiotech.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary transition-colors hover:text-foreground">See NEXI Biotech</a>
        </p>
      </div>
    </section>
  )
}
