import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  // Base styles
  [
    "placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full rounded-sm px-3 py-2 text-base md:text-sm",
    "transition-all duration-300 outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive/60 aria-invalid:shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.3),0_0_12px_oklch(0.58_0.18_25_/_0.4)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[oklch(0.10_0.02_280_/_0.4)] backdrop-blur-md",
          "border border-[oklch(0.40_0.10_320_/_0.4)]",
          "shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.3),0_0_6px_oklch(0.40_0.10_320_/_0.2)]",
          "focus-visible:border-[oklch(0.65_0.18_330_/_0.6)]",
          "focus-visible:shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.3),0_0_12px_oklch(0.65_0.20_330_/_0.4),0_0_24px_oklch(0.65_0.20_330_/_0.2)]",
          "hover:border-[oklch(0.55_0.12_320_/_0.5)]",
        ],
        metal: [
          "bg-[linear-gradient(135deg,oklch(0.30_0.02_280)_0%,oklch(0.22_0.02_280)_20%,oklch(0.35_0.01_280)_40%,oklch(0.20_0.02_280)_60%,oklch(0.30_0.02_280)_80%)]",
          "bg-[length:200%_200%] animate-chrome-slow",
          "border border-[oklch(0.45_0.02_280)] text-[oklch(0.90_0.02_280)]",
          "shadow-[inset_0_2px_4px_oklch(0.50_0.02_280_/_0.3),inset_0_-2px_4px_oklch(0_0_0_/_0.3)]",
          "focus-visible:shadow-[inset_0_2px_4px_oklch(0.50_0.02_280_/_0.3),0_0_15px_oklch(0.60_0.02_280_/_0.4)]",
        ],
        sandstorm: [
          "bg-gradient-to-br from-[oklch(0.20_0.03_60)] via-[oklch(0.18_0.02_50)] to-[oklch(0.16_0.03_45)]",
          "backdrop-blur-md text-[oklch(0.85_0.04_50)] placeholder:text-[oklch(0.60_0.03_50)]",
          "border border-[oklch(0.35_0.06_50_/_0.4)]",
          "shadow-[inset_0_0_20px_oklch(0.25_0.05_50_/_0.2)]",
          "focus-visible:border-[oklch(0.50_0.08_50_/_0.6)]",
        ],
        smog: [
          "bg-gradient-to-b from-[oklch(0.10_0.015_200)] via-[oklch(0.09_0.01_210)] to-[oklch(0.08_0.015_220)]",
          "backdrop-blur-xl text-[oklch(0.80_0.06_200)] placeholder:text-[oklch(0.50_0.04_200)]",
          "border border-[oklch(0.25_0.05_200_/_0.4)]",
          "shadow-[inset_0_0_30px_oklch(0.12_0.02_200_/_0.3)]",
          "focus-visible:border-[oklch(0.40_0.08_200_/_0.6)]",
        ],
        fog: [
          "bg-[oklch(0.10_0.01_280_/_0.35)] backdrop-blur-2xl",
          "text-[oklch(0.85_0.05_320)] placeholder:text-[oklch(0.55_0.04_320)]",
          "border border-[oklch(0.35_0.05_320_/_0.2)]",
          "shadow-[inset_0_0_40px_oklch(0.20_0.03_280_/_0.15)]",
          "focus-visible:border-[oklch(0.50_0.08_320_/_0.4)]",
        ],
        hologram: [
          "bg-[linear-gradient(135deg,oklch(0.15_0.04_330_/_0.5)_0%,oklch(0.14_0.03_200_/_0.4)_25%,oklch(0.15_0.04_280_/_0.5)_50%,oklch(0.14_0.03_145_/_0.4)_75%,oklch(0.15_0.03_200_/_0.5)_100%)]",
          "bg-[length:300%_300%] animate-hologram-slow backdrop-blur-xl",
          "border border-[oklch(0.45_0.08_200_/_0.4)] text-white placeholder:text-[oklch(0.70_0.06_200)]",
          "shadow-[inset_0_0_20px_oklch(0.30_0.08_200_/_0.15)]",
          "focus-visible:border-[oklch(0.55_0.10_200_/_0.6)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface TextareaProps extends React.ComponentProps<"textarea">, VariantProps<typeof textareaVariants> {}

function Textarea({ className, variant, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
