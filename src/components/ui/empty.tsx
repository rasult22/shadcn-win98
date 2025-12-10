import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const emptyVariants = cva(
  "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg p-6 text-center text-balance md:p-12 border",
  {
    variants: {
      variant: {
        default: [
          "bg-[oklch(0.10_0.02_280_/_0.3)] backdrop-blur-md",
          "border-dashed border-[oklch(0.40_0.10_320_/_0.3)]",
        ],
        metal: [
          "bg-[oklch(0.20_0.02_280)]",
          "border-[oklch(0.40_0.02_280)]",
          "shadow-[inset_0_2px_8px_oklch(0_0_0_/_0.2)]",
        ],
        sandstorm: [
          "bg-[oklch(0.16_0.03_50_/_0.4)]",
          "border-dashed border-[oklch(0.35_0.06_50_/_0.4)]",
        ],
        smog: [
          "bg-[oklch(0.08_0.015_200_/_0.4)]",
          "border-dashed border-[oklch(0.25_0.04_200_/_0.4)]",
        ],
        fog: [
          "bg-[oklch(0.10_0.01_280_/_0.25)] backdrop-blur-2xl",
          "border-dashed border-[oklch(0.30_0.04_320_/_0.2)]",
        ],
        hologram: [
          "bg-[oklch(0.12_0.03_200_/_0.3)] backdrop-blur-md",
          "border-dashed border-[oklch(0.40_0.08_200_/_0.4)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface EmptyProps extends React.ComponentProps<"div">, VariantProps<typeof emptyVariants> {}

function Empty({ className, variant, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty"
      className={cn(emptyVariants({ variant }), className)}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted/30 text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6 backdrop-blur-sm shadow-[0_0_10px_oklch(0.40_0.10_320_/_0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
  emptyVariants,
}
