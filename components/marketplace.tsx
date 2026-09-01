import Link from "next/link"
import { BadgeCheck, Landmark, Store } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Marketplace() {
  return (
    <section id="marketplace" className="relative overflow-hidden border-t border-border py-24">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[420px] w-[780px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.5 0.14 200 / 50%), transparent)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Now launching</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            The marketplace is opening.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            NEXI Corp is the marketplace for comprehensive services across these domains — one engagement, every
            capability in the network. Our storefronts on scientist.com and scienceexchange.com are coming online;
            ask us about them. For the best savings, engage us directly — direct work skips platform fees and routes
            straight to the right team.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-7">
            <Store className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Procurement storefronts</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
              Storefronts on scientist.com and scienceexchange.com are being stood up for teams that buy through
              managed platforms. Ask us for status and listings.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-card p-7 ring-glow">
            <BadgeCheck className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Direct = best savings</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
              Reaching out directly always gets the best pricing — no platform overhead, scoped by the people who
              will actually run the work.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <Landmark className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Government-ready</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
              We are registered on SAM.gov. Reach out for our current capability statement.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button render={<Link href="/contact" />} nativeButton={false} size="lg" className="rounded-full">
            Engage directly
          </Button>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent"
          >
            Request our capability statement
          </Button>
        </div>
      </div>
    </section>
  )
}
