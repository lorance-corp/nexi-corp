import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * A section whose artwork spans the full width of the viewport, with the text
 * held inside the normal content measure and offset to one side. Alternating
 * `align` down a page gives the scroll a rhythm that a column of boxed images
 * never does.
 *
 * The scrim is directional: it is opaque behind the text and clears toward the
 * far edge, so the artwork stays visible where nothing is sitting on top of it.
 */
export function FullBleed({
  image,
  alt,
  align = "left",
  eyebrow,
  title,
  children,
  priority,
}: {
  image: string
  alt: string
  align?: "left" | "right"
  eyebrow: string
  title: ReactNode
  children: ReactNode
  priority?: boolean
}) {
  const toward = align === "left" ? "to right" : "to left"

  return (
    <section className="relative isolate overflow-hidden border-t border-border">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Below md the text runs the full width, so the directional scrim has
            nothing to clear toward and a flat, heavier one keeps the copy
            legible over the artwork. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "oklch(0.16 0.02 250 / 80%)" }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `linear-gradient(${toward}, oklch(0.16 0.02 250 / 97%) 0%, oklch(0.16 0.02 250 / 90%) 44%, oklch(0.16 0.02 250 / 62%) 74%, oklch(0.16 0.02 250 / 46%) 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.16 0.02 250 / 72%), oklch(0.16 0.02 250 / 25%) 34%, oklch(0.16 0.02 250 / 25%) 66%, oklch(0.16 0.02 250 / 72%))",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className={cn("max-w-xl", align === "right" && "md:ml-auto")}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
          <div className="mt-4 leading-relaxed text-muted-foreground text-pretty">{children}</div>
        </div>
      </div>
    </section>
  )
}
