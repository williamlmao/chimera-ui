import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors data-[state=on]:bg-primary-subtle",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "bg-transparent border border-line hover:bg-base-2",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = ({
  className,
  variant,
  size,
  ...props
}: {
  className?: string;
  variant?: VariantProps<typeof toggleVariants>["variant"];
  size?: VariantProps<typeof toggleVariants>["size"];
  props: React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>;
}) => (
  <TogglePrimitive.Root
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
);

Toggle.displayName = "Toggle";

const Root = React.forwardRef<
React.ElementRef<typeof TogglePrimitive.Root>,
React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
<TogglePrimitive.Root
  ref={ref}
  className={cn(toggleVariants({ variant, size, className }))}
  {...props}
/>
));
Root.displayName = "Toggle.Root";
Toggle.Root = Root;

export { Toggle, toggleVariants };
