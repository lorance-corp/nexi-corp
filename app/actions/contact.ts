"use server"

import { site } from "@/lib/site"
import { syncContactToHubspot } from "@/lib/hubspot"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

const INTEREST_LABELS: Record<string, string> = {
  "sponsor-study": "I need studies run (sponsor / biotech)",
  "provider-dealflow": "I provide services and want deal flow",
  consulting: "Consulting network",
  investment: "Investment / diligence",
  partnership: "Portfolio partnership",
  general: "General inquiry",
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const organization = String(formData.get("organization") ?? "").trim()
  const interest = String(formData.get("interest") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  // Honeypot — bots fill this, humans never see it.
  const honeypot = String(formData.get("company_website") ?? "").trim()

  if (honeypot) {
    return { status: "error", message: "Something went wrong. Please try again." }
  }
  if (!name || !email) {
    return { status: "error", message: "Please provide your name and email." }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  const interestLabel = INTEREST_LABELS[interest] ?? interest ?? "General inquiry"

  // Email notification via Resend (no-op until RESEND_API_KEY is set).
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NEXI Corp Website <onboarding@resend.dev>",
          to: [site.email],
          subject: `[NEXI Corp] ${name}${organization ? ` · ${organization}` : ""}`,
          text: [
            "New inquiry from nexi-corp.com:",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            organization ? `Organization: ${organization}` : null,
            `Interest: ${interestLabel}`,
            "",
            "Message:",
            message || "(none)",
          ]
            .filter((l) => l !== null)
            .join("\n"),
        }),
      })
      if (!res.ok) {
        console.log("[nexi] Resend send failed:", res.status, await res.text().catch(() => ""))
      }
    } catch (err) {
      console.log("[nexi] Resend error:", err)
    }
  } else {
    console.log("[nexi] RESEND_API_KEY not set; inquiry not emailed.")
  }

  await syncContactToHubspot({
    email,
    fullName: name,
    company: organization || undefined,
    message:
      ["Source: NEXI Corp website", `Interest: ${interestLabel}`, message].filter(Boolean).join(" — ") || undefined,
    extra: { hs_lead_status: "NEW" },
  })

  return {
    status: "success",
    message: "Inquiry received. We review everything personally and respond directly — usually within one business day.",
  }
}
