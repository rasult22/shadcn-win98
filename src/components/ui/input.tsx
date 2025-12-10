import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-9 w-full min-w-0 rounded-sm border-2 border-dashed border-border bg-input/20 px-3 py-1 text-base shadow-xs transition-all duration-300 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-primary focus-visible:[box-shadow:0_0_8px_var(--primary),0_0_15px_var(--primary)] hover:border-primary/50 hover:[box-shadow:0_0_5px_var(--primary)]",
        "aria-invalid:border-destructive aria-invalid:[box-shadow:0_0_8px_var(--destructive)]",
        "[box-shadow:0_0_3px_var(--border)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
