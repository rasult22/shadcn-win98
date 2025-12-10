import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full rounded-sm border-2 border-dashed border-border bg-input/20 px-3 py-2 text-base shadow-xs transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-primary focus-visible:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary)] hover:border-primary/50 hover:[box-shadow:0_0_5px_var(--primary)]",
        "aria-invalid:border-destructive aria-invalid:[box-shadow:0_0_8px_var(--destructive)]",
        "[box-shadow:0_0_3px_var(--border)]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
