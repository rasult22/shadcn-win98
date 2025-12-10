"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full border",
  {
    variants: {
      variant: {
        default: [
          "bg-[oklch(0.12_0.02_280_/_0.4)] backdrop-blur-sm",
          "border-[oklch(0.40_0.10_320_/_0.3)]",
          "shadow-[inset_0_1px_3px_oklch(0_0_0_/_0.2)]",
        ],
        metal: [
          "bg-[oklch(0.20_0.02_280)] border-[oklch(0.40_0.02_280)]",
          "shadow-[inset_0_2px_4px_oklch(0_0_0_/_0.3)]",
        ],
        sandstorm: [
          "bg-[oklch(0.18_0.03_50_/_0.5)] border-[oklch(0.35_0.06_50_/_0.4)]",
          "shadow-[inset_0_1px_3px_oklch(0.20_0.04_50_/_0.3)]",
        ],
        smog: [
          "bg-[oklch(0.10_0.02_200_/_0.5)] border-[oklch(0.25_0.04_200_/_0.4)]",
          "shadow-[inset_0_1px_3px_oklch(0.08_0.02_200_/_0.3)]",
        ],
        fog: [
          "bg-[oklch(0.12_0.015_280_/_0.3)] backdrop-blur-xl border-[oklch(0.30_0.04_320_/_0.2)]",
        ],
        hologram: [
          "bg-[oklch(0.15_0.04_200_/_0.4)] backdrop-blur-sm border-[oklch(0.40_0.08_200_/_0.4)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary shadow-[0_0_8px_var(--primary),0_0_15px_var(--primary)]",
        metal: [
          "bg-[linear-gradient(90deg,oklch(0.50_0.02_280),oklch(0.70_0.02_280),oklch(0.50_0.02_280))]",
          "shadow-[0_0_8px_oklch(0.60_0.02_280_/_0.5)]",
        ],
        sandstorm: [
          "bg-gradient-to-r from-[oklch(0.50_0.10_50)] via-[oklch(0.55_0.12_45)] to-[oklch(0.50_0.10_50)]",
          "shadow-[0_0_8px_oklch(0.50_0.10_50_/_0.5)]",
        ],
        smog: [
          "bg-gradient-to-r from-[oklch(0.45_0.08_200)] via-[oklch(0.50_0.10_210)] to-[oklch(0.45_0.08_200)]",
          "shadow-[0_0_10px_oklch(0.50_0.10_200_/_0.5)]",
        ],
        fog: [
          "bg-gradient-to-r from-[oklch(0.50_0.06_320)] to-[oklch(0.55_0.08_280)]",
          "shadow-[0_0_12px_oklch(0.50_0.08_320_/_0.4)]",
        ],
        hologram: [
          "bg-[linear-gradient(90deg,oklch(0.55_0.12_330),oklch(0.50_0.10_200),oklch(0.55_0.12_145))]",
          "bg-[length:200%_100%] animate-hologram-slow",
          "shadow-[0_0_12px_oklch(0.55_0.12_200_/_0.5)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root>, VariantProps<typeof progressVariants> {}

function Progress({
  className,
  value,
  variant,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(progressVariants({ variant }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(progressIndicatorVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress, progressVariants }
