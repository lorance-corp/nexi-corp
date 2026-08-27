import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Applications } from "@/components/applications"
import { Structure } from "@/components/structure"
import { Capabilities } from "@/components/capabilities"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Applications />
        <Structure />
        <Capabilities />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
