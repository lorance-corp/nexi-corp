import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { Marketplace } from "@/components/marketplace"

const tabs = [
  {
    href: "/applications",
    title: "Applications",
    body: "Eight deeptech domains on one living neural substrate — from longevity to defense.",
  },
  {
    href: "/structure",
    title: "Structure",
    body: "Holding company for the long horizon; NEXI Biotech as the operating, investable entity.",
  },
  {
    href: "/partners",
    title: "Partners",
    body: "The capability marketplace — flagship plus vetted partners, disclosed on engagement.",
  },
  {
    href: "/capabilities",
    title: "Capabilities",
    body: "Neural substrates, neuro-computational models, trusted deployment, signal & sensing.",
  },
  {
    href: "/network",
    title: "Network",
    body: "How deal flow moves — one front door, and the Florida ecosystem we're rooted in.",
  },
  {
    href: "/about",
    title: "About",
    body: "The mission, the entity behind it, and the founder coordinating the ecosystem.",
  },
]

export default function Page() {
  return (
    <>
      <Hero />
      <Marketplace />

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Explore</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            The whole picture, one tab at a time.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tabs.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{t.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Open
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
