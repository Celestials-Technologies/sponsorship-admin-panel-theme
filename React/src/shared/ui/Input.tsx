import * as React from "react"

import { cn } from "@/shared/lib/utils"

function Input({ className = "", type = "text", label = false, ...props }: React.ComponentProps<"input">) {
  return (
    <>
      {label && <label className="inline-block text-[15px] leading-[19px] text-white Gilroy-medium mb-1">{label}</label>
      }

      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "outline-none  border-none rounded-md text-black bg-gray-50 p-6",
          className
        )}
        {...props}
      />
    </>
  )
}

export { Input }

