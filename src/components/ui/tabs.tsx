import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "inline-flex h-9 w-fit items-center justify-center rounded-sm p-[3px] border",
  {
    variants: {
      variant: {
        default: [
          "bg-[oklch(0.12_0.02_280_/_0.4)] backdrop-blur-md",
          "border-[oklch(0.40_0.10_320_/_0.3)]",
          "shadow-[0_0_8px_oklch(0.40_0.10_320_/_0.15)]",
        ],
        metal: [
          "bg-[oklch(0.22_0.02_280)]",
          "border-[oklch(0.40_0.02_280)]",
          "shadow-[inset_0_1px_4px_oklch(0_0_0_/_0.2)]",
        ],
        sandstorm: [
          "bg-[oklch(0.18_0.03_50_/_0.5)]",
          "border-[oklch(0.35_0.06_50_/_0.4)]",
          "shadow-[0_0_8px_oklch(0.30_0.06_50_/_0.2)]",
        ],
        smog: [
          "bg-[oklch(0.10_0.02_200_/_0.5)]",
          "border-[oklch(0.25_0.04_200_/_0.4)]",
          "shadow-[0_0_10px_oklch(0.20_0.04_200_/_0.2)]",
        ],
        fog: [
          "bg-[oklch(0.12_0.015_280_/_0.3)] backdrop-blur-2xl",
          "border-[oklch(0.30_0.04_320_/_0.2)]",
          "shadow-[0_0_15px_oklch(0.25_0.04_320_/_0.1)]",
        ],
        hologram: [
          "bg-[oklch(0.15_0.04_200_/_0.4)] backdrop-blur-md",
          "border-[oklch(0.40_0.08_200_/_0.4)]",
          "shadow-[0_0_12px_oklch(0.45_0.10_200_/_0.2)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tabsTriggerVariants = cva(
  "text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-sm border px-2 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: [
          "border-transparent",
          "data-[state=active]:bg-background data-[state=active]:border-primary",
          "data-[state=active]:shadow-[0_0_8px_var(--primary)]",
        ],
        metal: [
          "border-transparent",
          "data-[state=active]:bg-[oklch(0.35_0.02_280)] data-[state=active]:border-[oklch(0.55_0.02_280)]",
          "data-[state=active]:shadow-[0_0_8px_oklch(0.55_0.02_280_/_0.5)]",
        ],
        sandstorm: [
          "border-transparent",
          "data-[state=active]:bg-[oklch(0.28_0.06_50)] data-[state=active]:border-[oklch(0.50_0.10_50)]",
          "data-[state=active]:shadow-[0_0_8px_oklch(0.50_0.10_50_/_0.5)]",
        ],
        smog: [
          "border-transparent",
          "data-[state=active]:bg-[oklch(0.18_0.04_200)] data-[state=active]:border-[oklch(0.45_0.10_200)]",
          "data-[state=active]:shadow-[0_0_10px_oklch(0.45_0.10_200_/_0.5)]",
        ],
        fog: [
          "border-transparent",
          "data-[state=active]:bg-[oklch(0.20_0.03_320_/_0.5)] data-[state=active]:border-[oklch(0.50_0.10_320)]",
          "data-[state=active]:shadow-[0_0_12px_oklch(0.50_0.10_320_/_0.4)]",
        ],
        hologram: [
          "border-transparent",
          "data-[state=active]:bg-[linear-gradient(135deg,oklch(0.25_0.08_330_/_0.6),oklch(0.22_0.06_200_/_0.6))]",
          "data-[state=active]:border-[oklch(0.55_0.12_200)]",
          "data-[state=active]:shadow-[0_0_12px_oklch(0.55_0.12_200_/_0.5)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const TabsContext = React.createContext<VariantProps<typeof tabsListVariants>>({
  variant: "default",
})

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root>, VariantProps<typeof tabsListVariants> {}

function Tabs({
  className,
  variant,
  children,
  ...props
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    >
      <TabsContext.Provider value={{ variant }}>
        {children}
      </TabsContext.Provider>
    </TabsPrimitive.Root>
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const { variant } = React.useContext(TabsContext)
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant } = React.useContext(TabsContext)
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
