import Image from "next/image"
import { capabilities } from "@/lib/capabilities"

export function Capabilities() {
  return (
    <section id="capabilities" className="pb-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border ring-glow">
            <Image
              src="/images/capabilities-gen.png"
              alt="Stacked translucent layers of circuitry, lit from within"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title} className="bg-card p-6">
                  <c.icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
