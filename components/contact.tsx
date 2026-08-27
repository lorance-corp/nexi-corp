"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const inquiryTypes = ["Partnership", "Investment (NEXI Biotech)", "Defense / Dual-use", "Service contract", "General"]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [inquiry, setInquiry] = useState(inquiryTypes[0])

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

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
              For partnerships, service contracts, defense inquiries, or investment in NEXI Biotech, reach out. We
              respond to qualified inquiries directly.
            </p>
            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Inquiries</dt>
                <dd className="mt-1 text-foreground">contact@nexicorp.com</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Operating co.</dt>
                <dd className="mt-1 text-foreground">nexibiotech.com</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <CheckCircle2 className="h-10 w-10 text-primary" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display text-2xl font-semibold text-foreground">Inquiry received.</h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  Thank you — your message has been captured. Our team will review and respond to qualified inquiries
                  directly.
                </p>
                <Button variant="outline" className="rounded-full bg-transparent" onClick={() => setSubmitted(false)}>
                  Submit another
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" required autoComplete="name" className={inputClass} />
                  </Field>
                  <Field label="Organization" htmlFor="org">
                    <input id="org" name="org" autoComplete="organization" className={inputClass} />
                  </Field>
                </div>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                </Field>

                <Field label="Inquiry type" htmlFor="inquiry">
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setInquiry(t)}
                        aria-pressed={inquiry === t}
                        className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                          inquiry === t
                            ? "border-primary bg-primary/15 text-foreground"
                            : "border-border bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea id="message" name="message" required rows={4} className={inputClass} />
                </Field>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send inquiry
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Connect a Neon database to persist submissions.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
