import Image from "next/image"
import { cn } from "@/lib/utils"

export function NexiLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/nexi-logo-white.png"
      alt="NEXI Corp"
      width={2813}
      height={905}
      priority
      className={cn("h-7 w-auto", className)}
    />
  )
}
