import { cn } from "@/lib/utils"

export function NexiLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span aria-hidden className="relative inline-flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
          <path
            d="M6 24V8l20 16V8"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          />
          <circle cx="6" cy="8" r="2.4" className="fill-primary" />
          <circle cx="26" cy="24" r="2.4" className="fill-primary" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">
        NEXI<span className="text-muted-foreground"> CORP</span>
      </span>
    </span>
  )
}
