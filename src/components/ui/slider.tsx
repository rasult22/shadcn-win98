import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sliderVariants = cva(
  "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
  {
    variants: {
      variant: {
        default: "",
        metal: "",
        sandstorm: "",
        smog: "",
        fog: "",
        hologram: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const sliderTrackVariants = cva(
  "relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
  {
    variants: {
      variant: {
        default: "bg-[oklch(0.15_0.02_280_/_0.5)] border border-[oklch(0.40_0.10_320_/_0.3)]",
        metal: "bg-[oklch(0.20_0.02_280)] border border-[oklch(0.40_0.02_280)]",
        sandstorm: "bg-[oklch(0.18_0.03_50_/_0.5)] border border-[oklch(0.35_0.06_50_/_0.4)]",
        smog: "bg-[oklch(0.10_0.02_200_/_0.5)] border border-[oklch(0.25_0.04_200_/_0.4)]",
        fog: "bg-[oklch(0.12_0.015_280_/_0.3)] backdrop-blur-xl border border-[oklch(0.30_0.04_320_/_0.2)]",
        hologram: "bg-[oklch(0.15_0.04_200_/_0.4)] border border-[oklch(0.40_0.08_200_/_0.4)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const sliderRangeVariants = cva(
  "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
  {
    variants: {
      variant: {
        default: "bg-primary shadow-[0_0_5px_var(--primary),0_0_10px_var(--primary)]",
        metal: "bg-[oklch(0.60_0.02_280)] shadow-[0_0_6px_oklch(0.60_0.02_280_/_0.5)]",
        sandstorm: "bg-[oklch(0.50_0.10_50)] shadow-[0_0_6px_oklch(0.50_0.10_50_/_0.5)]",
        smog: "bg-[oklch(0.45_0.08_200)] shadow-[0_0_8px_oklch(0.45_0.10_200_/_0.5)]",
        fog: "bg-[oklch(0.50_0.08_320)] shadow-[0_0_10px_oklch(0.50_0.08_320_/_0.4)]",
        hologram: [
          "bg-[linear-gradient(90deg,oklch(0.55_0.12_330),oklch(0.50_0.10_200),oklch(0.55_0.12_145))]",
          "bg-[length:200%_100%] animate-hologram-slow",
          "shadow-[0_0_10px_oklch(0.55_0.12_200_/_0.5)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const sliderThumbVariants = cva(
  "block size-4 shrink-0 rounded-full border-2 bg-background shadow-sm transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-hidden",
  {
    variants: {
      variant: {
        default: [
          "border-primary",
          "shadow-[0_0_5px_var(--primary)]",
          "hover:shadow-[0_0_8px_var(--primary),0_0_15px_var(--primary)]",
          "focus-visible:shadow-[0_0_8px_var(--primary),0_0_15px_var(--primary)]",
        ],
        metal: [
          "border-[oklch(0.60_0.02_280)] bg-[oklch(0.70_0.02_280)]",
          "shadow-[0_0_5px_oklch(0.60_0.02_280_/_0.5)]",
          "hover:shadow-[0_0_10px_oklch(0.70_0.02_280_/_0.6)]",
        ],
        sandstorm: [
          "border-[oklch(0.50_0.10_50)] bg-[oklch(0.60_0.08_50)]",
          "shadow-[0_0_5px_oklch(0.50_0.10_50_/_0.5)]",
          "hover:shadow-[0_0_10px_oklch(0.55_0.10_50_/_0.6)]",
        ],
        smog: [
          "border-[oklch(0.45_0.08_200)] bg-[oklch(0.55_0.06_200)]",
          "shadow-[0_0_6px_oklch(0.45_0.10_200_/_0.5)]",
          "hover:shadow-[0_0_12px_oklch(0.50_0.10_200_/_0.6)]",
        ],
        fog: [
          "border-[oklch(0.50_0.08_320)] bg-[oklch(0.60_0.06_320)]",
          "shadow-[0_0_8px_oklch(0.50_0.08_320_/_0.4)]",
          "hover:shadow-[0_0_15px_oklch(0.55_0.10_320_/_0.5)]",
        ],
        hologram: [
          "border-[oklch(0.55_0.12_200)] bg-[linear-gradient(135deg,oklch(0.60_0.10_330),oklch(0.55_0.10_200))]",
          "shadow-[0_0_8px_oklch(0.55_0.12_200_/_0.5)]",
          "hover:shadow-[0_0_15px_oklch(0.60_0.14_200_/_0.6)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root>, VariantProps<typeof sliderVariants> {}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant,
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(sliderVariants({ variant }), className)}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(sliderTrackVariants({ variant }))}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(sliderRangeVariants({ variant }))}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn(sliderThumbVariants({ variant }))}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider, sliderVariants }
