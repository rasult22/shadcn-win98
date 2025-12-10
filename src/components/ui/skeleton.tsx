import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const skeletonVariants = cva(
  "animate-pulse rounded-md",
  {
    variants: {
      variant: {
        default: "bg-[oklch(0.20_0.02_280_/_0.5)]",
        metal: [
          "bg-[linear-gradient(90deg,oklch(0.25_0.02_280)_0%,oklch(0.35_0.02_280)_50%,oklch(0.25_0.02_280)_100%)]",
          "bg-[length:200%_100%] animate-[shimmer-move_2s_linear_infinite]",
        ],
        sandstorm: "bg-[oklch(0.22_0.04_50_/_0.5)]",
        smog: "bg-[oklch(0.15_0.03_200_/_0.5)]",
        fog: "bg-[oklch(0.18_0.02_320_/_0.4)]",
        hologram: [
          "bg-[linear-gradient(90deg,oklch(0.20_0.06_330)_0%,oklch(0.25_0.08_200)_50%,oklch(0.20_0.06_330)_100%)]",
          "bg-[length:200%_100%] animate-[shimmer-move_3s_linear_infinite]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SkeletonProps extends React.ComponentProps<"div">, VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Skeleton, skeletonVariants }
