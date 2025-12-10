import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm text-sm font-bold uppercase tracking-wider border-2 border-dashed transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none whitespace-nowrap data-[state=on]:border-accent data-[state=on]:[box-shadow:0_0_8px_var(--accent),0_0_15px_var(--accent)] hover:border-primary/50",
  {
    variants: {
      variant: {
        default: "bg-transparent border-border hover:bg-muted/20 hover:text-foreground data-[state=on]:bg-accent/20 data-[state=on]:text-accent [box-shadow:0_0_3px_var(--border)]",
        outline:
          "border-border bg-transparent shadow-xs hover:bg-accent/10 hover:text-accent hover:border-accent data-[state=on]:bg-accent/20 data-[state=on]:border-accent [box-shadow:0_0_3px_var(--border)] hover:[box-shadow:0_0_5px_var(--accent)]",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8 text-xs",
        lg: "h-10 px-2.5 min-w-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
