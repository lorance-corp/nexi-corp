import { NexiLogo } from "@/components/nexi-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-sm">
          <NexiLogo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Category-defining deep neuro techbio. The holding company for longevity, personalized medicine, precision
            neurology, brain–computer interfacing, and defense applications.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 text-sm">
          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Explore</span>
            <a href="#applications" className="text-muted-foreground transition-colors hover:text-foreground">
              Applications
            </a>
            <a href="#structure" className="text-muted-foreground transition-colors hover:text-foreground">
              Structure
            </a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Entities</span>
            <span className="text-foreground">NEXI Corp — Holding</span>
            <span className="text-muted-foreground">NEXI Biotech — Operating</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} NEXI Corp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
