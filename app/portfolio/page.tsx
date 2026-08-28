import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { portfolio } from "@/lib/portfolio"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Portfolio — NEXI Corp",
  description:
    "The NEXI Corp ecosystem: our flagship platform NEXI Biotech plus partner capabilities across study execution, histology, tissue pathology, quantum discovery, and AI discovery.",
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Every layer of neuro translation, under one roof.">
        <p>
          A flagship platform plus partner capabilities across study execution, histology, tissue pathology, and
          computational discovery — coordinated so a program can move through all of them without managing any of
          them.
        </p>
        <p className="mt-4 text-base">
          <Lock className="mr-2 inline h-4 w-4 text-primary" aria-hidden />
          Partners are listed by capability, not by name. Identities are disclosed once you engage.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="space-y-5">
          {portfolio.map((c) => (
            <div
              key={c.slug}
              className="group relative grid gap-6 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40 md:grid-cols-[260px_1fr] md:p-9"
            >
              <div>
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
                <h2 className="mt-4 font-display text-2xl font-semibold text-foreground text-balance">{c.name}</h2>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{c.category}</p>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <p className="max-w-2xl leading-relaxed text-muted-foreground text-pretty">{c.detail}</p>
                {c.disclosed && c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  >
                    Visit NEXI Biotech
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    <Lock className="h-3.5 w-3.5" aria-hidden />
                    Request an introduction
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card/60 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground text-balance">Building in this space?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The network grows deliberately. If your company or practice belongs in it, we want to hear from you.
          </p>
          <Link href="/network" className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
            How the network works
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  )
}
