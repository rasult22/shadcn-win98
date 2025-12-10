"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tooltipContentVariants = cva(
  "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-sm px-3 py-1.5 text-xs text-balance font-mono border animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: [
          "bg-[oklch(0.12_0.02_280_/_0.9)] backdrop-blur-xl text-foreground",
          "border-[oklch(0.45_0.10_320_/_0.4)]",
          "shadow-[0_0_15px_oklch(0.40_0.10_320_/_0.3)]",
        ],
        metal: [
          "bg-[oklch(0.25_0.02_280_/_0.95)] text-[oklch(0.90_0.02_280)]",
          "border-[oklch(0.45_0.02_280)]",
          "shadow-[0_0_12px_oklch(0.50_0.02_280_/_0.4)]",
        ],
        sandstorm: [
          "bg-[oklch(0.20_0.04_50_/_0.95)] text-[oklch(0.90_0.04_50)]",
          "border-[oklch(0.40_0.08_50_/_0.5)]",
          "shadow-[0_0_12px_oklch(0.40_0.08_50_/_0.4)]",
        ],
        smog: [
          "bg-[oklch(0.10_0.02_200_/_0.95)] backdrop-blur-xl text-[oklch(0.85_0.06_200)]",
          "border-[oklch(0.30_0.06_200_/_0.5)]",
          "shadow-[0_0_15px_oklch(0.30_0.08_200_/_0.4)]",
        ],
        fog: [
          "bg-[oklch(0.12_0.015_280_/_0.85)] backdrop-blur-2xl text-[oklch(0.90_0.05_320)]",
          "border-[oklch(0.35_0.05_320_/_0.3)]",
          "shadow-[0_0_20px_oklch(0.35_0.08_320_/_0.3)]",
        ],
        hologram: [
          "bg-[linear-gradient(135deg,oklch(0.18_0.06_330_/_0.9),oklch(0.15_0.05_200_/_0.9))] backdrop-blur-xl text-white",
          "border-[oklch(0.50_0.10_200_/_0.5)]",
          "shadow-[0_0_18px_oklch(0.50_0.12_200_/_0.4)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content>, VariantProps<typeof tooltipContentVariants> {}

function TooltipContent({
  className,
  sideOffset = 0,
  variant,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ variant }), className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, tooltipContentVariants }
