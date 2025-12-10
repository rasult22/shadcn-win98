import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input/20 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border-2 border-dashed border-border shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary focus-visible:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary)]",
        "data-[state=checked]:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary),0_0_25px_oklch(0.65_0.28_330_/_0.4)]",
        "[box-shadow:0_0_3px_var(--border)]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-foreground data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 [box-shadow:0_0_5px_currentColor]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
