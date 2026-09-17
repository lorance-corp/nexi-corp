import Image from "next/image"
import { Cpu, Braces, ShieldCheck, Waves } from "lucide-react"

const capabilities = [
  {
    icon: Cpu,
    title: "Neural substrates",
    body: "In vitro neural cultures engineered as programmable, adaptive compute.",
  },
  {
    icon: Braces,
    title: "Neuro-computational models",
    body: "Software that reads, models, and extends biological cognition.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted deployment",
    body: "Controlled, compliant delivery for defense and dual-use mandates.",
  },
  {
    icon: Waves,
    title: "Signal & sensing",
    body: "High-bandwidth interfaces translating neural activity into signal.",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border ring-glow">
            <Image
              src="/images/capabilities-gen.png"
              alt="A wireframe brain constructed from a network of connected nodes"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Platform capabilities</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              The nexus of mind and machine.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              A vertically integrated stack — from living neural tissue to deployable systems — engineered as one
              coherent platform.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
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
