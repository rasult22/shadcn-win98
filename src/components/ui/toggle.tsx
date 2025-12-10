import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm text-sm font-bold uppercase tracking-wider border transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none whitespace-nowrap",
  {
    variants: {
      variant: {
        default: [
          "border-[oklch(0.40_0.10_320_/_0.4)] bg-[oklch(0.10_0.02_280_/_0.3)]",
          "hover:bg-[oklch(0.15_0.03_320_/_0.4)] hover:border-accent/50",
          "data-[state=on]:bg-accent/20 data-[state=on]:border-accent data-[state=on]:text-accent",
          "data-[state=on]:shadow-[0_0_8px_var(--accent),0_0_15px_var(--accent)]",
        ],
        outline: [
          "border-[oklch(0.40_0.10_320_/_0.4)] bg-transparent",
          "hover:bg-accent/10 hover:text-accent hover:border-accent",
          "data-[state=on]:bg-accent/20 data-[state=on]:border-accent",
          "data-[state=on]:shadow-[0_0_8px_var(--accent)]",
        ],
        metal: [
          "border-[oklch(0.45_0.02_280)] bg-[oklch(0.25_0.02_280)]",
          "hover:bg-[oklch(0.30_0.02_280)] hover:brightness-110",
          "data-[state=on]:bg-[oklch(0.40_0.02_280)] data-[state=on]:border-[oklch(0.55_0.02_280)]",
          "data-[state=on]:shadow-[0_0_8px_oklch(0.55_0.02_280_/_0.5)]",
        ],
        sandstorm: [
          "border-[oklch(0.35_0.06_50_/_0.4)] bg-[oklch(0.18_0.03_50_/_0.4)]",
          "hover:bg-[oklch(0.22_0.04_50_/_0.5)] hover:border-[oklch(0.45_0.08_50)]",
          "data-[state=on]:bg-[oklch(0.30_0.08_50)] data-[state=on]:border-[oklch(0.50_0.10_50)]",
          "data-[state=on]:shadow-[0_0_8px_oklch(0.50_0.10_50_/_0.5)]",
        ],
        smog: [
          "border-[oklch(0.25_0.04_200_/_0.4)] bg-[oklch(0.10_0.02_200_/_0.4)]",
          "hover:bg-[oklch(0.15_0.03_200_/_0.5)] hover:border-[oklch(0.35_0.06_200)]",
          "data-[state=on]:bg-[oklch(0.25_0.06_200)] data-[state=on]:border-[oklch(0.45_0.10_200)]",
          "data-[state=on]:shadow-[0_0_10px_oklch(0.45_0.10_200_/_0.5)]",
        ],
        fog: [
          "border-[oklch(0.30_0.04_320_/_0.2)] bg-[oklch(0.12_0.015_280_/_0.3)] backdrop-blur-xl",
          "hover:bg-[oklch(0.18_0.02_320_/_0.4)] hover:border-[oklch(0.40_0.06_320)]",
          "data-[state=on]:bg-[oklch(0.25_0.05_320_/_0.5)] data-[state=on]:border-[oklch(0.50_0.10_320)]",
          "data-[state=on]:shadow-[0_0_12px_oklch(0.50_0.10_320_/_0.4)]",
        ],
        hologram: [
          "border-[oklch(0.40_0.08_200_/_0.4)] bg-[oklch(0.15_0.04_200_/_0.4)]",
          "hover:bg-[oklch(0.20_0.06_200_/_0.5)] hover:border-[oklch(0.50_0.10_200)]",
          "data-[state=on]:bg-[linear-gradient(135deg,oklch(0.30_0.10_330_/_0.6),oklch(0.25_0.08_200_/_0.6))]",
          "data-[state=on]:border-[oklch(0.55_0.12_200)]",
          "data-[state=on]:shadow-[0_0_12px_oklch(0.55_0.12_200_/_0.5)]",
        ],
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8 text-xs",
        lg: "h-10 px-2.5 min-w-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
