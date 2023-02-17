import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "../utils";

export const RadioGroup = () => {
  return <></>;
};

const Root = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
Root.displayName = "RadioGroup.Root";
RadioGroup.Root = Root;

const Item = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        " h-4 w-4 rounded-full border border-line text-base-content hover:border-primary focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
});
Item.displayName = "RadioGroup.Item";
RadioGroup.Item = Item;

const Indicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <Circle className={cn(className, "h-2.5 w-2.5 fill-primary")} />
    </RadioGroupPrimitive.Indicator>
  );
});
Indicator.displayName = "RadioGroup.Indicator";
RadioGroup.Indicator = Indicator;
