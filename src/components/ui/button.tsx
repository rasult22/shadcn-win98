import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-br from-primary via-[oklch(0.60_0.18_300)] to-primary border-primary/60 text-primary-foreground backdrop-blur-sm hover:brightness-110 shadow-[0_0_8px_oklch(0.65_0.20_330_/_0.4),0_0_20px_oklch(0.65_0.20_330_/_0.2)] hover:shadow-[0_0_12px_oklch(0.65_0.20_330_/_0.6),0_0_30px_oklch(0.65_0.20_330_/_0.3),0_0_60px_oklch(0.65_0.20_330_/_0.15)]",
        destructive:
          "bg-gradient-to-br from-destructive via-[oklch(0.55_0.16_15)] to-destructive border-destructive/60 text-destructive-foreground backdrop-blur-sm hover:brightness-110 shadow-[0_0_8px_oklch(0.58_0.18_25_/_0.4),0_0_20px_oklch(0.58_0.18_25_/_0.2)] hover:shadow-[0_0_12px_oklch(0.58_0.18_25_/_0.6),0_0_30px_oklch(0.58_0.18_25_/_0.3)]",
        outline:
          "border-[oklch(0.50_0.12_320_/_0.5)] bg-[oklch(0.10_0.02_280_/_0.3)] text-foreground backdrop-blur-sm hover:bg-[oklch(0.15_0.03_320_/_0.4)] hover:text-primary hover:border-primary/60 shadow-[0_0_4px_oklch(0.50_0.12_320_/_0.3)] hover:shadow-[0_0_12px_oklch(0.65_0.20_330_/_0.4)]",
        secondary:
          "bg-gradient-to-br from-secondary via-[oklch(0.58_0.12_210)] to-secondary border-secondary/60 text-secondary-foreground backdrop-blur-sm hover:brightness-110 shadow-[0_0_8px_oklch(0.62_0.14_200_/_0.4),0_0_20px_oklch(0.62_0.14_200_/_0.2)] hover:shadow-[0_0_12px_oklch(0.62_0.14_200_/_0.6),0_0_30px_oklch(0.62_0.14_200_/_0.3)]",
        ghost:
          "border-transparent hover:bg-[oklch(0.20_0.04_280_/_0.5)] hover:text-accent hover:border-accent/40 backdrop-blur-sm hover:shadow-[0_0_12px_oklch(0.58_0.16_280_/_0.3)]",
        link: 
          "text-primary underline-offset-4 hover:underline border-transparent [text-shadow:0_0_6px_oklch(0.65_0.20_330_/_0.5)] hover:[text-shadow:0_0_10px_oklch(0.65_0.20_330_/_0.8),0_0_20px_oklch(0.65_0.20_330_/_0.4)]",
        hologram:
          "border-[oklch(0.55_0.10_200_/_0.5)] text-white bg-[length:300%_300%] bg-[linear-gradient(135deg,oklch(0.65_0.18_330)_0%,oklch(0.60_0.14_200)_25%,oklch(0.58_0.16_280)_50%,oklch(0.65_0.18_145)_75%,oklch(0.62_0.14_200)_100%)] animate-hologram-slow shadow-[0_0_12px_oklch(0.58_0.14_200_/_0.4),0_0_24px_oklch(0.60_0.16_280_/_0.2)] hover:shadow-[0_0_20px_oklch(0.60_0.14_200_/_0.6),0_0_40px_oklch(0.65_0.18_330_/_0.3)]",
        metal:
          "border-[oklch(0.55_0.02_280)] text-[oklch(0.92_0.02_280)] bg-[linear-gradient(135deg,oklch(0.70_0.02_280)_0%,oklch(0.45_0.03_280)_20%,oklch(0.80_0.01_280)_40%,oklch(0.40_0.03_280)_60%,oklch(0.70_0.02_280)_80%)] bg-[length:200%_200%] animate-chrome-slow shadow-[inset_0_1px_0_oklch(0.90_0.01_0_/_0.4),inset_0_-1px_0_oklch(0.20_0.02_280),0_4px_12px_oklch(0_0_0_/_0.5)] hover:brightness-110",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-sm has-[>svg]:px-3",
        sm: "h-8 rounded-sm gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-10 rounded-sm px-6 text-base has-[>svg]:px-4",
        icon: "size-9 rounded-sm",
        "icon-sm": "size-8 rounded-sm",
        "icon-lg": "size-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
