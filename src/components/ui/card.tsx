import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  // Base styles
  "relative flex flex-col gap-6 rounded-sm py-6 overflow-hidden",
  {
    variants: {
      variant: {
        default: [
          // Glassmorphism base
          "bg-[oklch(0.10_0.02_280_/_0.5)] backdrop-blur-xl",
          // Gradient border effect
          "border border-[oklch(0.45_0.10_320_/_0.3)]",
          // Inner highlight and shadows for depth
          "shadow-[inset_0_1px_0_oklch(1_0_0_/_0.03),inset_0_-1px_0_oklch(0_0_0_/_0.1),0_8px_32px_oklch(0_0_0_/_0.4),0_0_60px_oklch(0.65_0.20_330_/_0.05)]",
          // Metal edge accent
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[oklch(0.60_0.10_320_/_0.5)] before:to-transparent",
          "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[oklch(0.50_0.08_200_/_0.3)] after:to-transparent",
        ],
        metal: [
          // Brushed metal background
          "bg-[linear-gradient(135deg,oklch(0.35_0.02_280)_0%,oklch(0.25_0.02_280)_20%,oklch(0.40_0.01_280)_40%,oklch(0.22_0.02_280)_60%,oklch(0.35_0.02_280)_80%)]",
          "bg-[length:200%_200%] animate-chrome-slow",
          // Metal texture overlay
          "[background-image:repeating-linear-gradient(90deg,oklch(0.40_0.02_280_/_0.15)_0px,oklch(0.50_0.02_280_/_0.1)_1px,oklch(0.35_0.02_280_/_0.15)_2px)]",
          // Border
          "border border-[oklch(0.50_0.02_280)]",
          // Inset shadows for metal depth
          "shadow-[inset_0_2px_4px_oklch(0.60_0.02_280_/_0.3),inset_0_-2px_4px_oklch(0_0_0_/_0.3),0_8px_24px_oklch(0_0_0_/_0.5)]",
          // Top highlight
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[oklch(0.80_0.02_280_/_0.5)] before:to-transparent",
          "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[oklch(0.15_0.02_280)]",
        ],
        sandstorm: [
          // Sandy/dusty base color
          "bg-gradient-to-br from-[oklch(0.25_0.04_60)] via-[oklch(0.20_0.03_50)] to-[oklch(0.18_0.04_45)]",
          // Noise/dust texture
          "backdrop-blur-md",
          // Warm orange border
          "border border-[oklch(0.40_0.08_50_/_0.4)]",
          // Dusty glow
          "shadow-[inset_0_0_30px_oklch(0.30_0.06_50_/_0.2),0_8px_32px_oklch(0.20_0.04_40_/_0.5),0_0_80px_oklch(0.35_0.08_50_/_0.1)]",
          // Warm highlight edges
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[oklch(0.50_0.10_50_/_0.4)] before:to-transparent",
          "after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top,oklch(0.35_0.06_50_/_0.15),transparent_60%)] after:pointer-events-none",
        ],
        smog: [
          // Dark smoky base
          "bg-gradient-to-b from-[oklch(0.12_0.02_200)] via-[oklch(0.10_0.015_210)] to-[oklch(0.08_0.02_220)]",
          "backdrop-blur-xl",
          // Subtle teal border
          "border border-[oklch(0.30_0.06_200_/_0.4)]",
          // Hazy shadow
          "shadow-[inset_0_0_40px_oklch(0.15_0.03_200_/_0.3),0_8px_32px_oklch(0_0_0_/_0.5),0_0_100px_oklch(0.20_0.05_200_/_0.1)]",
          // Smog overlay
          "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,oklch(0.20_0.04_200_/_0.25),transparent_70%)] before:pointer-events-none",
          "after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[oklch(0.40_0.08_200_/_0.3)] after:to-transparent",
        ],
        fog: [
          // Misty ethereal base
          "bg-[oklch(0.12_0.015_280_/_0.4)]",
          "backdrop-blur-2xl",
          // Soft diffused border
          "border border-[oklch(0.40_0.06_320_/_0.2)]",
          // Foggy glow
          "shadow-[inset_0_0_60px_oklch(0.25_0.04_280_/_0.2),0_8px_40px_oklch(0_0_0_/_0.4),0_0_120px_oklch(0.30_0.05_320_/_0.08)]",
          // Mist overlay
          "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,oklch(0.30_0.04_320_/_0.15),transparent_60%)] before:pointer-events-none before:animate-[fog-drift_15s_ease-in-out_infinite]",
          "after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_120%_60%_at_50%_100%,oklch(0.25_0.03_200_/_0.12),transparent_50%)] after:pointer-events-none",
        ],
        hologram: [
          // Iridescent shifting background
          "bg-[linear-gradient(135deg,oklch(0.20_0.06_330_/_0.6)_0%,oklch(0.18_0.05_200_/_0.5)_25%,oklch(0.20_0.06_280_/_0.6)_50%,oklch(0.18_0.05_145_/_0.5)_75%,oklch(0.20_0.05_200_/_0.6)_100%)]",
          "bg-[length:300%_300%] animate-hologram-slow",
          "backdrop-blur-xl",
          // Gradient border
          "border border-[oklch(0.50_0.10_200_/_0.4)]",
          // Holographic glow
          "shadow-[inset_0_0_30px_oklch(0.40_0.10_200_/_0.15),0_8px_32px_oklch(0_0_0_/_0.4),0_0_60px_oklch(0.50_0.12_200_/_0.1)]",
          // Shimmer edge
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[oklch(0.70_0.12_200_/_0.6)] before:to-transparent",
          "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[oklch(0.60_0.10_330_/_0.4)] after:to-transparent",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {}

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 relative z-10",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-bold uppercase tracking-wider [text-shadow:0_0_8px_currentColor]", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 relative z-10", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6 relative z-10", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
}
