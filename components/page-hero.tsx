import type { ReactNode } from "react"

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[420px] w-[780px] -translate-x-1/2 rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.5 0.14 200 / 50%), transparent)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-32 md:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{children}</div>
        ) : null}
      </div>
    </section>
  )
}
