import Image from "next/image"
import { cn } from "@/lib/utils"

export function NexiLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <Image
        src="/nexi-logo-white.png"
        alt="NEXI"
        width={2813}
        height={905}
        priority
        className="h-6 w-auto translate-y-[2px]"
      />
      <span className="font-display text-[0.7rem] font-semibold tracking-[0.35em] text-muted-foreground">CORP</span>
    </span>
  )
}
