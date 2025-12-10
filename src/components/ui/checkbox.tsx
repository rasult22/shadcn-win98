import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer size-4 shrink-0 rounded-[3px] border shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "border-[oklch(0.40_0.10_320_/_0.5)] bg-[oklch(0.10_0.02_280_/_0.4)]",
          "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground",
          "data-[state=checked]:shadow-[0_0_8px_var(--primary),0_0_15px_var(--primary)]",
          "focus-visible:border-primary focus-visible:shadow-[0_0_8px_var(--primary)]",
        ],
        metal: [
          "border-[oklch(0.45_0.02_280)] bg-[oklch(0.25_0.02_280)]",
          "data-[state=checked]:bg-[oklch(0.50_0.02_280)] data-[state=checked]:border-[oklch(0.60_0.02_280)] data-[state=checked]:text-white",
          "data-[state=checked]:shadow-[0_0_8px_oklch(0.60_0.02_280_/_0.5)]",
        ],
        sandstorm: [
          "border-[oklch(0.35_0.06_50_/_0.5)] bg-[oklch(0.18_0.03_50_/_0.4)]",
          "data-[state=checked]:bg-[oklch(0.45_0.10_50)] data-[state=checked]:border-[oklch(0.50_0.10_50)] data-[state=checked]:text-white",
          "data-[state=checked]:shadow-[0_0_8px_oklch(0.50_0.10_50_/_0.5)]",
        ],
        smog: [
          "border-[oklch(0.25_0.04_200_/_0.5)] bg-[oklch(0.10_0.02_200_/_0.4)]",
          "data-[state=checked]:bg-[oklch(0.40_0.08_200)] data-[state=checked]:border-[oklch(0.45_0.10_200)] data-[state=checked]:text-white",
          "data-[state=checked]:shadow-[0_0_10px_oklch(0.45_0.10_200_/_0.5)]",
        ],
        fog: [
          "border-[oklch(0.30_0.04_320_/_0.3)] bg-[oklch(0.12_0.015_280_/_0.3)]",
          "data-[state=checked]:bg-[oklch(0.45_0.08_320)] data-[state=checked]:border-[oklch(0.50_0.10_320)] data-[state=checked]:text-white",
          "data-[state=checked]:shadow-[0_0_12px_oklch(0.50_0.10_320_/_0.4)]",
        ],
        hologram: [
          "border-[oklch(0.40_0.08_200_/_0.4)] bg-[oklch(0.15_0.04_200_/_0.4)]",
          "data-[state=checked]:bg-[linear-gradient(135deg,oklch(0.50_0.12_330),oklch(0.45_0.10_200))] data-[state=checked]:border-[oklch(0.55_0.12_200)] data-[state=checked]:text-white",
          "data-[state=checked]:shadow-[0_0_12px_oklch(0.55_0.12_200_/_0.5)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxVariants> {}

function Checkbox({
  className,
  variant,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, checkboxVariants }
