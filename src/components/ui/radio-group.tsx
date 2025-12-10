import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-border text-primary aspect-square size-4 shrink-0 rounded-full border-2 border-dashed bg-input/20 shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary focus-visible:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary)]",
        "[box-shadow:0_0_3px_var(--border)]",
        "aria-invalid:border-destructive aria-invalid:[box-shadow:0_0_8px_var(--destructive)]",
        "data-[state=checked]:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary),0_0_25px_oklch(0.65_0.28_330_/_0.4)]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
