import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../utils";

export const Tabs = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return <></>;
};
Tabs.displayName = "Tabs";

const Root = TabsPrimitive.Root;
Root.displayName = "Tabs.Root";
Tabs.Root = Root;

/**
 * Default Classes: ~ "mt-2 rounded-md border border-line p-6 " ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn("mt-2 rounded-md border border-line p-6 ", className)}
    {...props}
    ref={ref}
  />
));
Content.displayName = "Tabs.Content";
Tabs.Content = Content;

/**
 * Default Classes: ~ "inline-flex items-center justify-center rounded-md bg-base-2 p-1" ~
 *
 */
const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-base-2 p-1",
      className
    )}
    {...props}
  />
));
List.displayName = "Tabs.List";
Tabs.List = List;

/**
 * Default Classes: ~ "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-base-content-2 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-base data-[state=active]:text-base-content data-[state=active]:shadow-sm" ~
 *
 */
const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-base-content-2 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-base data-[state=active]:text-base-content data-[state=active]:shadow-sm",
      className
    )}
    {...props}
    ref={ref}
  />
));

Trigger.displayName = "Tabs.Trigger";
Tabs.Trigger = Trigger;
