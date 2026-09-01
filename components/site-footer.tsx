import Link from "next/link"
import { NexiLogo } from "@/components/nexi-logo"
import { site } from "@/lib/site"
import { ecosystem } from "@/lib/portfolio"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <NexiLogo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The neuro translation ecosystem — IP holding company for NEXI Biotech and the partner marketplace where
            CNS programs meet the teams that move them.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">{site.location}</p>
        </div>
        <div className="flex flex-wrap gap-10 text-sm">
          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Explore</span>
            <Link href="/applications" className="text-muted-foreground transition-colors hover:text-foreground">
              Applications
            </Link>
            <Link href="/partners" className="text-muted-foreground transition-colors hover:text-foreground">
              Partners
            </Link>
            <Link href="/network" className="text-muted-foreground transition-colors hover:text-foreground">
              Network
            </Link>
            <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Ecosystem</span>
            {ecosystem.map((e) => (
              <a
                key={e.href}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {e.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Connect</span>
            <a
              href={site.biotech}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              NEXI Biotech
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
