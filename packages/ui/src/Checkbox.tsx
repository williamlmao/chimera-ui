import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "../utils";

export const Checkbox = ({ className }: { className: string }) => {
  return (
    <Checkbox.Root className={className}>
      <Checkbox.Indicator className={cn("flex items-center justify-center")}>
        <Check className="h-4 w-4" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

Checkbox.displayName = "Checkbox";

const Root = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-line focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-input",
      className
    )}
    {...props}
  >
    {props.children}
  </CheckboxPrimitive.Root>
));

Root.displayName = "Checkbox.Root";
Checkbox.Root = Root;

const Indicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>(({ className, children, ...props }, ref) => (
  <CheckboxPrimitive.Indicator
    ref={ref}
    className={cn("flex items-center justify-center")}
    {...props}
  >
    {children || <Check className="h-4 w-4" />}
  </CheckboxPrimitive.Indicator>
));

Indicator.displayName = "Checkbox.Indicator";
Checkbox.Indicator = Indicator;
