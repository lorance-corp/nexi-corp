import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Compass, Handshake, Route, ShieldCheck } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { ecosystem } from "@/lib/portfolio"

export const metadata: Metadata = {
  title: "Network — NEXI Corp",
  description:
    "The NEXI partner marketplace: one front door for CNS programs, qualified deal flow for providers and consultants.",
}

const forSponsors = [
  {
    icon: Compass,
    title: "One front door",
    body: "Bring the translational question, not a vendor list. We scope what the program actually needs.",
  },
  {
    icon: Route,
    title: "Routed, not referred",
    body: "Work is placed across portfolio companies, study partners, and consultants — matched to the question, not to whoever answered the phone.",
  },
  {
    icon: ShieldCheck,
    title: "One accountable partner",
    body: "NEXI stays the focal point through delivery, so results from different teams arrive as one coherent answer.",
  },
]

export default function NetworkPage() {
  return (
    <>
      <PageHero eyebrow="Partner Network" title="A marketplace with a focal point.">
        <p>
          Dozens of specialists touch a CNS program on its way to the clinic. The NEXI network puts them behind a
          single relationship — an agency model for neuro translation, anchored by our own companies.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">For sponsors</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Bring a program. We bring the ecosystem.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {forSponsors.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7">
              <f.icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">For providers & consultants</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Source deal flow through NEXI.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
              CROs, platform companies, and independent consultants join the network to receive qualified, scoped
              work instead of cold leads. We are connected with many across CNS translation — the network gives that
              web of relationships a focal point, so the right expertise lands on the right program at the right
              time.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              <Handshake className="mr-2 inline h-4 w-4 text-primary" aria-hidden />
              Vetted membership, scoped engagements, and NEXI as the coordinating layer.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button render={<Link href="/contact" />} nativeButton={false} size="lg" className="rounded-full">
              Apply to the network
            </Button>
            <Button
              render={<Link href="/portfolio" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent"
            >
              See who's in it
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Florida ecosystem</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Rooted in the state we're building up.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
          NEXI is woven into Florida's life science community — the exchanges, summits, and investor networks where
          this ecosystem gets built.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map((e) => (
            <a
              key={e.href}
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="font-display text-base font-semibold text-foreground">{e.name}</h3>
              <span className="mt-2 inline-block text-xs font-medium text-primary">
                Visit
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Either way, it starts with a conversation.
        </h2>
        <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
          Contact NEXI Corp
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  )
}
