import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact — NEXI Corp",
  description: "Engage NEXI Corp — sponsors, providers, consultants, and investors all start here.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Engage NEXI.">
        <p>
          One inbox for the whole ecosystem. Tell us whether you're bringing a program, offering capabilities, or
          exploring the portfolio — we route it from there.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Inquiries</dt>
                <dd className="mt-1 text-foreground">{site.email}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Flagship company</dt>
                <dd className="mt-1">
                  <a href={site.biotech} target="_blank" rel="noopener noreferrer" className="text-primary">
                    www.nexibiotech.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Location</dt>
                <dd className="mt-1 text-foreground">{site.location}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Every inquiry is read personally. Program details stay confidential and are only shared with network
              partners once you've agreed to an engagement.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
