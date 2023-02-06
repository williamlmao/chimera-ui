"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../utils";

// const Arrow = ({ className }: { className?: string }) => {
//   return <RadixPopover.Arrow className={twMerge("fill-overlay", className)} />;
// };

// Arrow.displayName = "Popover.Arrow";
// Popover.Arrow = Arrow;

export const Tooltip = ({ ...props }) => <TooltipPrimitive.Root {...props} />;
Tooltip.displayName = TooltipPrimitive.Root.displayName;

const Provider = TooltipPrimitive.Provider;
Provider.displayName = TooltipPrimitive.Provider.displayName;
Tooltip.Provider = Provider;

const Trigger = TooltipPrimitive.Trigger;
Trigger.displayName = TooltipPrimitive.Trigger.displayName;
Tooltip.Trigger = Trigger;

const Content = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-theme-md border border-slate-100 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-theme-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",
      className
    )}
    {...props}
  />
));
Content.displayName = TooltipPrimitive.Content.displayName;
Tooltip.Content = Content;
