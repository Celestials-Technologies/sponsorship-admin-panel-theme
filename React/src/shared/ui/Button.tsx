import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "bg-gray-50 text-secondary rounded-md cursor-pointer hover:bg-primary ",
        secondary:
          "bg-secondary text-secondary shadow-xs hover:bg-secondary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-sm",
        lg: "h-10 rounded-md px-6 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon?: React.ReactNode
    label?: string
  }

function Button({ className, variant, size, icon, label, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const hasIcon = Boolean(icon)

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        hasIcon && label ? "gap-2" : "",
        className
      )}
      {...props}
    >
      <span className="Gilroy-medium">{label}</span>
      {icon}
    </Comp>
  )
}

export { Button, buttonVariants }
