import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-border bg-input/20 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary size-4 shrink-0 rounded-[3px] border-2 border-dashed shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary focus-visible:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary)]",
        "data-[state=checked]:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary),0_0_25px_oklch(0.65_0.28_330_/_0.4)]",
        "[box-shadow:0_0_3px_var(--border)]",
        "aria-invalid:border-destructive aria-invalid:[box-shadow:0_0_8px_var(--destructive)]",
        className
      )}
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

export { Checkbox }
