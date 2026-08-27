"use client"

import { useActionState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendContact, type ContactState } from "@/app/actions/contact"

const initialState: ContactState = { status: "idle", message: "" }

const inputClass =
  "w-full rounded-lg border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/40"

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState)

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-10">
        <CheckCircle2 className="h-10 w-10 text-primary" strokeWidth={1.5} aria-hidden />
        <h3 className="font-display text-2xl font-semibold text-foreground">Inquiry received.</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name <span className="text-primary">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@yourcompany.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-foreground">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            placeholder="Company or institution"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-foreground">
            I'm reaching out about…
          </label>
          <select id="interest" name="interest" defaultValue="general" className={inputClass}>
            <option value="sponsor-study">I need studies run (sponsor / biotech)</option>
            <option value="provider-dealflow">I provide services and want deal flow</option>
            <option value="consulting">Joining the consulting network</option>
            <option value="partnership">Portfolio partnership</option>
            <option value="investment">Investment / diligence</option>
            <option value="general">General inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="A sentence or two about your program, your capabilities, or what you're hoping to do with NEXI."
          className={inputClass}
        />
      </div>

      {state.status === "error" ? <p className="text-sm text-destructive">{state.message}</p> : null}

      <Button type="submit" size="lg" disabled={pending} className="rounded-full">
        {pending ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  )
}
