import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border-2 border-dashed active:animate-[cyberpunk-pulse_0.5s_ease-in-out]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary hover:brightness-125 [box-shadow:var(--glow-primary)] hover:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary),0_0_30px_var(--primary),0_0_60px_oklch(0.65_0.28_330_/_0.6)]",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive hover:brightness-125 [box-shadow:var(--glow-destructive)] hover:[box-shadow:0_0_8px_var(--destructive),0_0_15px_var(--destructive),0_0_30px_var(--destructive),0_0_60px_oklch(0.60_0.25_25_/_0.6)]",
        outline:
          "border-primary bg-transparent text-foreground shadow-xs hover:bg-primary/10 hover:text-primary hover:brightness-125 [box-shadow:0_0_3px_var(--primary)] hover:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary)]",
        secondary:
          "bg-secondary text-secondary-foreground border-secondary hover:brightness-125 [box-shadow:var(--glow-secondary)] hover:[box-shadow:0_0_8px_var(--secondary),0_0_15px_var(--secondary),0_0_30px_var(--secondary),0_0_60px_oklch(0.65_0.18_195_/_0.6)]",
        ghost:
          "border-transparent hover:bg-accent/20 hover:text-accent hover:border-accent hover:border-dashed [box-shadow:none] hover:[box-shadow:0_0_8px_var(--accent),0_0_15px_var(--accent)]",
        link: "text-primary underline-offset-4 hover:underline border-transparent [text-shadow:0_0_5px_var(--primary)] hover:[text-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary)]",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-sm has-[>svg]:px-3",
        sm: "h-8 rounded-sm gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-10 rounded-sm px-6 text-base has-[>svg]:px-4",
        icon: "size-9 rounded-sm",
        "icon-sm": "size-8 rounded-sm",
        "icon-lg": "size-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
