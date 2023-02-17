import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-line focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-content hover:bg-primary-focus",
        secondary:
          "bg-secondary text-secondary-content  hover:bg-secondary-focus",
        "secondary-outline":
          "bg-transparent border border-secondary text-secondary hover:bg-secondary-focus hover:text-secondary-content",
        "secondary-subtle":
          "bg-secondary-subtle text-secondary-subtle-content hover:bg-secondary hover:text-secondary-content",
        destructive: "bg-danger text-danger-content hover:bg-danger-focus",
        info: "bg-info text-info-content hover:bg-info-focus",
        success: "bg-success text-success-content hover:bg-success-focus",
        warning: "bg-warning text-warning-content hover:bg-warning-focus",
        outline:
          "bg-transparent border border-primary text-primary hover:bg-primary-focus hover:text-primary-content",
        subtle:
          "bg-primary-subtle text-primary-subtle-content hover:bg-primary hover:text-primary-content",
        ghost:
          "bg-transparent hover:bg-base-2    data-[state=open]:bg-transparent ",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900  hover:bg-transparent ",
        gradient:
          "bg-gradient-to-r from-primary to-secondary text-primary-content",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        xs: "h-fit py-1 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
