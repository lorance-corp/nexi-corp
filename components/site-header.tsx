"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { NexiLogo } from "@/components/nexi-logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { label: "Applications", href: "/#applications" },
  { label: "Structure", href: "/#structure" },
  { label: "Partners", href: "/#partners" },
  { label: "Network", href: "/network" },
  { label: "About", href: "/about" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="NEXI Corp home">
          <NexiLogo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="sm"
          className="rounded-full font-medium"
        >
          Engage NEXI
        </Button>
      </div>
    </header>
  )
}
