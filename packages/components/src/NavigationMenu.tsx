import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "../utils";

export const NavigationMenu = () => {
  return <></>;
};

/**
 * Default Classes: ~ "relative z-10 flex flex-1 items-center justify-center" ~
 *
 */
const Root = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenu.Viewport />
  </NavigationMenuPrimitive.Root>
));
Root.displayName = "NavigationMenu.Root";
NavigationMenu.Root = Root;

/**
 * Default Classes: ~ "group flex flex-1 list-none items-center justify-center" ~
 *
 */
const List = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center",
      className
    )}
    {...props}
  />
));
List.displayName = "NavigationMenu.List";
NavigationMenu.List = List;

/**
 * Default Classes: ~ "group flex flex-1 items-center justify-center relative" ~
 *
 */
const Item = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn(
      "group flex flex-1 items-center justify-center relative",
      className
    )}
    {...props}
  />
));
Item.displayName = "NavigationMenu.Item";
NavigationMenu.Item = Item;

const navigationMenuTriggerStyle = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-base-focus disabled:opacity-50  disabled:pointer-events-none bg-transparent hover:bg-base-2    data-[state=open]:bg-base-focus  h-10 py-2 px-4 group"
);

/**
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 *
 */
const Trigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
Trigger.displayName = "NavigationMenu.Trigger";
NavigationMenu.Trigger = Trigger;

/**
 * Default Classes: ~ "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute" ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute",
      className
    )}
    {...props}
  />
));
Content.displayName = "NavigationMenu.Content";
NavigationMenu.Content = Content;

const Link = NavigationMenuPrimitive.Link;
Link.displayName = "NavigationMenu.Link";
NavigationMenu.Link = Link;

/**
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 *
 */
const Viewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={
      "perspective-[2000px] absolute top-full left-0 flex w-full justify-center"
    }
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-overlay transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
Viewport.displayName = "NavigationMenu.Viewport";
NavigationMenu.Viewport = Viewport;

/**
 * Default Classes: ~ "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out" ~
 *
 */
const Indicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-overlay shadow-theme-md " />
  </NavigationMenuPrimitive.Indicator>
));
Indicator.displayName = "NavigationMenu.Indicator";
NavigationMenu.Indicator = Indicator;
