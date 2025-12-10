import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "border-[oklch(0.40_0.10_320_/_0.5)] bg-[oklch(0.12_0.02_280_/_0.4)]",
          "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
          "data-[state=checked]:shadow-[0_0_8px_var(--primary),0_0_15px_var(--primary)]",
          "focus-visible:border-primary focus-visible:shadow-[0_0_8px_var(--primary)]",
        ],
        metal: [
          "border-[oklch(0.45_0.02_280)] bg-[oklch(0.25_0.02_280)]",
          "data-[state=checked]:bg-[oklch(0.50_0.02_280)] data-[state=checked]:border-[oklch(0.60_0.02_280)]",
          "data-[state=checked]:shadow-[0_0_8px_oklch(0.60_0.02_280_/_0.5)]",
        ],
        sandstorm: [
          "border-[oklch(0.35_0.06_50_/_0.5)] bg-[oklch(0.18_0.03_50_/_0.4)]",
          "data-[state=checked]:bg-[oklch(0.45_0.10_50)] data-[state=checked]:border-[oklch(0.50_0.10_50)]",
          "data-[state=checked]:shadow-[0_0_8px_oklch(0.50_0.10_50_/_0.5)]",
        ],
        smog: [
          "border-[oklch(0.25_0.04_200_/_0.5)] bg-[oklch(0.10_0.02_200_/_0.4)]",
          "data-[state=checked]:bg-[oklch(0.40_0.08_200)] data-[state=checked]:border-[oklch(0.45_0.10_200)]",
          "data-[state=checked]:shadow-[0_0_10px_oklch(0.45_0.10_200_/_0.5)]",
        ],
        fog: [
          "border-[oklch(0.30_0.04_320_/_0.3)] bg-[oklch(0.12_0.015_280_/_0.3)]",
          "data-[state=checked]:bg-[oklch(0.45_0.08_320)] data-[state=checked]:border-[oklch(0.50_0.10_320)]",
          "data-[state=checked]:shadow-[0_0_12px_oklch(0.50_0.10_320_/_0.4)]",
        ],
        hologram: [
          "border-[oklch(0.40_0.08_200_/_0.4)] bg-[oklch(0.15_0.04_200_/_0.4)]",
          "data-[state=checked]:bg-[linear-gradient(90deg,oklch(0.50_0.12_330),oklch(0.45_0.10_200))] data-[state=checked]:border-[oklch(0.55_0.12_200)]",
          "data-[state=checked]:shadow-[0_0_12px_oklch(0.55_0.12_200_/_0.5)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root>, VariantProps<typeof switchVariants> {}

function Switch({
  className,
  variant,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-foreground data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 shadow-[0_0_5px_currentColor]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch, switchVariants }
