import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Building2, Network, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolio } from "@/lib/portfolio"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.5 0.14 200 / 55%), transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              IP holding company · Partner marketplace
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-7xl">
              The neuro translation <span className="text-primary text-glow">ecosystem.</span>
            </h1>

            <p className="mt-3 font-mono text-sm text-muted-foreground">/neks-eye/ — where programs meet the teams that move them</p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              NEXI Corp is the holding company behind <span className="text-foreground">NEXI Biotech</span> and the
              marketplace that connects CNS programs with vetted partners — modeling, studies, histology, discovery,
              and the consultants who tie it together.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button render={<Link href="/portfolio" />} nativeButton={false} size="lg" className="rounded-full">
                Explore the portfolio
              </Button>
              <Button
                render={<Link href="/network" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent"
              >
                How the network works
              </Button>
            </div>
          </div>

          <div className="animate-rise [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-2xl border border-border ring-glow">
              <Image
                src="/images/network-plexus.jpg"
                alt="A luminous network of connected nodes, representing the NEXI ecosystem of companies and consultants"
                width={1280}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, oklch(0.16 0.02 250 / 65%), transparent 55%)" }}
              />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "1 flagship", v: "NEXI Biotech — in vitro human neural models" },
            { k: "5 companies", v: "Modeling · Studies · Histology · Discovery" },
            { k: "1 front door", v: "One intake, routed to the right team" },
            { k: "Network", v: "Vetted consultants across CNS translation" },
          ].map((s) => (
            <div key={s.k} className="bg-card px-5 py-5">
              <dt className="font-display text-xl font-semibold text-foreground">{s.k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Ecosystem() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">The ecosystem</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              One network. Every layer of translation.
            </h2>
          </div>
          <Link href="/portfolio" className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
            Full portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((c) => (
            <div
              key={c.slug}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40",
                c.role === "Flagship" && "md:col-span-2 lg:col-span-1",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest",
                    c.role === "Flagship"
                      ? "border-primary/40 text-primary"
                      : c.role === "Anchor Partner"
                        ? "border-signal/40 text-signal"
                        : "border-border text-muted-foreground",
                  )}
                >
                  {c.role}
                </span>
                {c.href ? <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" /> : null}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{c.name}</h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{c.category}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{c.blurb}</p>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label={`Visit ${c.name}`}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    icon: Building2,
    title: "Bring the program",
    body: "One conversation about the translational question in front of you — no need to know which vendor, model, or method you need.",
  },
  {
    icon: Network,
    title: "We assemble the team",
    body: "We scope the work and route it across the network — platform companies, study partners, and consultants matched to the question.",
  },
  {
    icon: Users,
    title: "One accountable partner",
    body: "NEXI stays the focal point end to end: one relationship, coordinated execution, and results that fit together.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">How it works</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          A focal approach to a fragmented field.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          CNS translation is scattered across dozens of specialists. NEXI Corp turns that sprawl into a single,
          coordinated front door.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-primary/50">0{i + 1}</span>
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomeCTA() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle at 50% 100%, oklch(0.5 0.14 200 / 60%), transparent 70%)" }}
          />
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Source deal flow. <span className="text-primary text-glow">Or bring us a program.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Sponsors get one accountable partner across the whole network. Providers and consultants get qualified
            deal flow. Both start with a conversation.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button render={<Link href="/contact" />} nativeButton={false} size="lg" className="rounded-full">
              Start the conversation
            </Button>
            <Button
              render={<Link href="/network" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent"
            >
              Join the network
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
