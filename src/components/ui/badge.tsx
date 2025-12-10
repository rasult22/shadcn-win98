import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-300 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-primary/50 bg-primary/90 text-primary-foreground backdrop-blur-sm [a&]:hover:brightness-110 shadow-[0_0_8px_oklch(0.65_0.20_330_/_0.4),0_0_16px_oklch(0.65_0.20_330_/_0.2)]",
        secondary:
          "border-secondary/50 bg-secondary/90 text-secondary-foreground backdrop-blur-sm [a&]:hover:brightness-110 shadow-[0_0_8px_oklch(0.62_0.14_200_/_0.4),0_0_16px_oklch(0.62_0.14_200_/_0.2)]",
        destructive:
          "border-destructive/50 bg-destructive/90 text-destructive-foreground backdrop-blur-sm [a&]:hover:brightness-110 shadow-[0_0_8px_oklch(0.58_0.18_25_/_0.4),0_0_16px_oklch(0.58_0.18_25_/_0.2)]",
        outline:
          "text-foreground border-[oklch(0.40_0.10_320_/_0.5)] bg-[oklch(0.12_0.02_280_/_0.3)] backdrop-blur-sm [a&]:hover:bg-accent/20 [a&]:hover:text-accent [a&]:hover:border-accent/60 shadow-[0_0_4px_oklch(0.40_0.10_320_/_0.3)]",
        hologram:
          "border-[oklch(0.60_0.12_200_/_0.4)] text-white bg-[length:300%_300%] bg-[linear-gradient(135deg,oklch(0.65_0.18_330)_0%,oklch(0.60_0.14_200)_25%,oklch(0.58_0.16_280)_50%,oklch(0.65_0.18_145)_75%,oklch(0.62_0.14_200)_100%)] animate-hologram-slow shadow-[0_0_12px_oklch(0.60_0.14_200_/_0.5)] [a&]:hover:shadow-[0_0_20px_oklch(0.60_0.14_200_/_0.7)]",
        metal:
          "border-[oklch(0.55_0.02_280)] text-[oklch(0.90_0.02_280)] bg-[linear-gradient(135deg,oklch(0.75_0.02_280)_0%,oklch(0.50_0.03_280)_20%,oklch(0.85_0.01_280)_40%,oklch(0.45_0.03_280)_60%,oklch(0.75_0.02_280)_80%)] bg-[length:200%_200%] animate-chrome-slow shadow-[inset_0_1px_0_oklch(0.90_0.01_0_/_0.3),0_2px_8px_oklch(0_0_0_/_0.4)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
