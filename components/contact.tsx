import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Engage NEXI.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              One inbox for the whole ecosystem — partnerships, service engagements, network membership, or
              investment. Tell us what you're working on and we route it from there.
            </p>
            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Inquiries</dt>
                <dd className="mt-1 text-foreground">{site.email}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Flagship co.</dt>
                <dd className="mt-1">
                  <a
                    href={site.biotech}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary"
                  >
                    nexibiotech.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Location</dt>
                <dd className="mt-1 text-foreground">{site.location}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
