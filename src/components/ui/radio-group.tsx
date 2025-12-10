import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const radioGroupItemVariants = cva(
  "aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "border-[oklch(0.40_0.10_320_/_0.5)] bg-[oklch(0.10_0.02_280_/_0.4)] text-primary",
          "focus-visible:border-primary focus-visible:shadow-[0_0_8px_var(--primary)]",
          "data-[state=checked]:border-primary data-[state=checked]:shadow-[0_0_8px_var(--primary),0_0_15px_var(--primary)]",
        ],
        metal: [
          "border-[oklch(0.45_0.02_280)] bg-[oklch(0.25_0.02_280)] text-[oklch(0.70_0.02_280)]",
          "focus-visible:border-[oklch(0.55_0.02_280)] focus-visible:shadow-[0_0_8px_oklch(0.55_0.02_280_/_0.5)]",
          "data-[state=checked]:border-[oklch(0.60_0.02_280)] data-[state=checked]:shadow-[0_0_8px_oklch(0.60_0.02_280_/_0.5)]",
        ],
        sandstorm: [
          "border-[oklch(0.35_0.06_50_/_0.5)] bg-[oklch(0.18_0.03_50_/_0.4)] text-[oklch(0.55_0.10_50)]",
          "focus-visible:border-[oklch(0.45_0.08_50)] focus-visible:shadow-[0_0_8px_oklch(0.50_0.10_50_/_0.5)]",
          "data-[state=checked]:border-[oklch(0.50_0.10_50)] data-[state=checked]:shadow-[0_0_8px_oklch(0.55_0.10_50_/_0.5)]",
        ],
        smog: [
          "border-[oklch(0.25_0.04_200_/_0.5)] bg-[oklch(0.10_0.02_200_/_0.4)] text-[oklch(0.50_0.08_200)]",
          "focus-visible:border-[oklch(0.40_0.06_200)] focus-visible:shadow-[0_0_8px_oklch(0.45_0.10_200_/_0.5)]",
          "data-[state=checked]:border-[oklch(0.45_0.10_200)] data-[state=checked]:shadow-[0_0_10px_oklch(0.50_0.10_200_/_0.5)]",
        ],
        fog: [
          "border-[oklch(0.30_0.04_320_/_0.3)] bg-[oklch(0.12_0.015_280_/_0.3)] text-[oklch(0.55_0.08_320)]",
          "focus-visible:border-[oklch(0.45_0.06_320)] focus-visible:shadow-[0_0_10px_oklch(0.50_0.10_320_/_0.4)]",
          "data-[state=checked]:border-[oklch(0.50_0.10_320)] data-[state=checked]:shadow-[0_0_12px_oklch(0.55_0.10_320_/_0.4)]",
        ],
        hologram: [
          "border-[oklch(0.40_0.08_200_/_0.4)] bg-[oklch(0.15_0.04_200_/_0.4)] text-[oklch(0.60_0.12_200)]",
          "focus-visible:border-[oklch(0.50_0.10_200)] focus-visible:shadow-[0_0_10px_oklch(0.55_0.12_200_/_0.5)]",
          "data-[state=checked]:border-[oklch(0.55_0.12_200)] data-[state=checked]:shadow-[0_0_12px_oklch(0.60_0.14_200_/_0.5)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root>, VariantProps<typeof radioGroupItemVariants> {}

function RadioGroup({
  className,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item>, VariantProps<typeof radioGroupItemVariants> {}

function RadioGroupItem({
  className,
  variant,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ variant }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-current absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, radioGroupItemVariants }
