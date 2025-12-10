import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground [a&]:hover:brightness-125 [box-shadow:0_0_5px_var(--primary),0_0_10px_var(--primary)]",
        secondary:
          "border-secondary bg-secondary text-secondary-foreground [a&]:hover:brightness-125 [box-shadow:0_0_5px_var(--secondary),0_0_10px_var(--secondary)]",
        destructive:
          "border-destructive bg-destructive text-destructive-foreground [a&]:hover:brightness-125 [box-shadow:0_0_5px_var(--destructive),0_0_10px_var(--destructive)]",
        outline:
          "text-foreground border-border bg-transparent [a&]:hover:bg-accent/20 [a&]:hover:text-accent [a&]:hover:border-accent [box-shadow:0_0_3px_var(--border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
