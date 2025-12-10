import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-sm border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current overflow-hidden",
  {
    variants: {
      variant: {
        default: [
          "bg-[oklch(0.10_0.02_280_/_0.5)] backdrop-blur-xl text-card-foreground",
          "border-[oklch(0.45_0.10_320_/_0.3)]",
          "shadow-[inset_0_1px_0_oklch(1_0_0_/_0.03),0_0_15px_oklch(0.45_0.10_320_/_0.2)]",
        ],
        destructive: [
          "bg-[oklch(0.15_0.04_25_/_0.6)] backdrop-blur-xl text-destructive",
          "border-destructive/50",
          "shadow-[inset_0_1px_0_oklch(1_0_0_/_0.03),0_0_20px_oklch(0.58_0.18_25_/_0.3)]",
          "*:data-[slot=alert-description]:text-destructive/80",
        ],
        metal: [
          "bg-[linear-gradient(135deg,oklch(0.35_0.02_280)_0%,oklch(0.25_0.02_280)_20%,oklch(0.40_0.01_280)_40%,oklch(0.22_0.02_280)_60%,oklch(0.35_0.02_280)_80%)]",
          "bg-[length:200%_200%] animate-chrome-slow",
          "border-[oklch(0.50_0.02_280)] text-[oklch(0.90_0.02_280)]",
          "shadow-[inset_0_2px_4px_oklch(0.60_0.02_280_/_0.3),inset_0_-2px_4px_oklch(0_0_0_/_0.3),0_0_15px_oklch(0.50_0.02_280_/_0.2)]",
        ],
        sandstorm: [
          "bg-gradient-to-br from-[oklch(0.25_0.04_60)] via-[oklch(0.20_0.03_50)] to-[oklch(0.18_0.04_45)]",
          "backdrop-blur-md text-[oklch(0.85_0.04_50)]",
          "border-[oklch(0.40_0.08_50_/_0.4)]",
          "shadow-[inset_0_0_30px_oklch(0.30_0.06_50_/_0.2),0_0_20px_oklch(0.35_0.08_50_/_0.2)]",
        ],
        smog: [
          "bg-gradient-to-b from-[oklch(0.12_0.02_200)] via-[oklch(0.10_0.015_210)] to-[oklch(0.08_0.02_220)]",
          "backdrop-blur-xl text-[oklch(0.80_0.06_200)]",
          "border-[oklch(0.30_0.06_200_/_0.4)]",
          "shadow-[inset_0_0_40px_oklch(0.15_0.03_200_/_0.3),0_0_20px_oklch(0.20_0.05_200_/_0.2)]",
        ],
        fog: [
          "bg-[oklch(0.12_0.015_280_/_0.4)] backdrop-blur-2xl",
          "text-[oklch(0.85_0.05_320)]",
          "border-[oklch(0.40_0.06_320_/_0.2)]",
          "shadow-[inset_0_0_60px_oklch(0.25_0.04_280_/_0.2),0_0_30px_oklch(0.30_0.05_320_/_0.15)]",
        ],
        hologram: [
          "bg-[linear-gradient(135deg,oklch(0.20_0.06_330_/_0.6)_0%,oklch(0.18_0.05_200_/_0.5)_25%,oklch(0.20_0.06_280_/_0.6)_50%,oklch(0.18_0.05_145_/_0.5)_75%,oklch(0.20_0.05_200_/_0.6)_100%)]",
          "bg-[length:300%_300%] animate-hologram-slow backdrop-blur-xl",
          "border-[oklch(0.50_0.10_200_/_0.4)] text-white",
          "shadow-[inset_0_0_30px_oklch(0.40_0.10_200_/_0.15),0_0_25px_oklch(0.50_0.12_200_/_0.2)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-bold uppercase tracking-wider [text-shadow:0_0_5px_currentColor]",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
