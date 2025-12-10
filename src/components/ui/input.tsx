import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "h-9 w-full min-w-0 rounded-sm px-3 py-1 text-base md:text-sm",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // Glassmorphism
        "bg-[oklch(0.10_0.02_280_/_0.4)] backdrop-blur-md",
        "border border-[oklch(0.40_0.10_320_/_0.4)]",
        // Inner glow and shadow
        "shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.3),0_0_6px_oklch(0.40_0.10_320_/_0.2)]",
        // Transitions
        "transition-all duration-300 outline-none",
        // Focus state - glow effect
        "focus-visible:border-[oklch(0.65_0.18_330_/_0.6)]",
        "focus-visible:shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.3),0_0_12px_oklch(0.65_0.20_330_/_0.4),0_0_24px_oklch(0.65_0.20_330_/_0.2)]",
        // Hover state
        "hover:border-[oklch(0.55_0.12_320_/_0.5)]",
        "hover:shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.3),0_0_8px_oklch(0.55_0.12_320_/_0.3)]",
        // Invalid state
        "aria-invalid:border-destructive/60",
        "aria-invalid:shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.3),0_0_12px_oklch(0.58_0.18_25_/_0.4)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
