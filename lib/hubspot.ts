/**
 * Upserts a contact into HubSpot's CRM.
 *
 * Goes live automatically as soon as `HUBSPOT_ACCESS_TOKEN` (a HubSpot
 * service key) is present in the environment. Until then it no-ops so the
 * forms keep working without blocking on the integration.
 */
export type HubspotContact = {
  email: string
  firstName?: string
  lastName?: string
  fullName?: string
  company?: string
  jobtitle?: string
  /** Free-text notes appended to the "message" property. */
  message?: string
  /** Extra custom/standard properties to set. */
  extra?: Record<string, string>
}

export async function syncContactToHubspot(contact: HubspotContact): Promise<void> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  if (!token) {
    console.log("[nexi] HUBSPOT_ACCESS_TOKEN not set; skipping HubSpot sync for", contact.email)
    return
  }

  // Internal addresses never get logged as leads.
  if (contact.email.trim().toLowerCase().endsWith("@nexibiotech.com")) {
    console.log("[nexi] Internal nexibiotech.com address; skipping HubSpot sync for", contact.email)
    return
  }

  // Derive first/last name if only a full name was provided.
  let firstName = contact.firstName
  let lastName = contact.lastName
  if (!firstName && !lastName && contact.fullName) {
    const parts = contact.fullName.trim().split(/\s+/)
    firstName = parts.shift() ?? ""
    lastName = parts.join(" ")
  }

  const properties: Record<string, string> = {
    email: contact.email,
    ...(firstName ? { firstname: firstName } : {}),
    ...(lastName ? { lastname: lastName } : {}),
    ...(contact.company ? { company: contact.company } : {}),
    ...(contact.jobtitle ? { jobtitle: contact.jobtitle } : {}),
    ...(contact.message ? { message: contact.message } : {}),
    ...(contact.extra ?? {}),
  }

  try {
    // Try to create the contact first.
    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    })

    // 409 = contact already exists; update it by email instead.
    if (res.status === 409) {
      const update = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(contact.email)}?idProperty=email`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ properties }),
        },
      )
      if (!update.ok) {
        console.log("[nexi] HubSpot update failed:", update.status, await safeText(update))
      }
      return
    }

    if (!res.ok) {
      console.log("[nexi] HubSpot create failed:", res.status, await safeText(res))
    }
  } catch (err) {
    console.log("[nexi] HubSpot sync error:", err)
  }
}

async function safeText(res: Response): Promise<string> {
  try {
    return await res.text()
  } catch {
    return "<no body>"
  }
}
