"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "../utils";

export const Select = () => {
  return <></>;
};

const Root = SelectPrimitive.Root;
Root.displayName = "Select.Root";
Select.Root = Root;

const Group = SelectPrimitive.Group;
Group.displayName = "Select.Group";
Select.Group = Group;

const Value = SelectPrimitive.Value;
Value.displayName = "Select.Value";
Select.Value = Value;

/**
 * Default Classes: ~ "flex h-10 w-full items-center justify-between rounded-md border border-line bg-input py-2 px-3 text-sm text-input-content placeholder:text-input-content-2 focus:outline-none focus:ring-2 focus:ring-line focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " ~
 *
 */
const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-line bg-input py-2 px-3 text-sm text-input-content placeholder:text-input-content-2 focus:outline-none focus:ring-2 focus:ring-line focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
      className
    )}
    {...props}
  >
    {children}
    {/* <ChevronDown className="h-4 w-4 opacity-50" /> */}
  </SelectPrimitive.Trigger>
));
Trigger.displayName = "Select.Trigger";
Select.Trigger = Trigger;

/**
 * Default Classes: ~ "h-4 w-4 opacity-50" ~
 *
 */
const Icon = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Icon>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Icon
    ref={ref}
    className={cn("h-4 w-4 opacity-50", className)}
    {...props}
  >
    {props.children || <ChevronDown className="h-4 w-4 opacity-50" />}
  </SelectPrimitive.Icon>
));
Icon.displayName = "Select.Icon";
Select.Icon = Icon;

/**
 * Default Classes: ~ "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in fade-in-80" ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay text-overlay-content shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
Content.displayName = "Select.Content";
Select.Content = Content;

/**
 * Default Classes: ~ "py-1.5 pr-2 pl-8 text-md font-semibold text-overlay-content-3" ~
 *
 */
const Label = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "py-1.5 pr-2 pl-8 text-md font-semibold text-overlay-content-3",
      className
    )}
    {...props}
  />
));
Label.displayName = "Select.Label";
Select.Label = Label;

/**
 * Default Classes: ~ "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50" ~
 *
 */
const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
Item.displayName = "Select.Item";
Select.Item = Item;

/**
 * Default Classes: ~ "-mx-1 my-1 h-px bg-line" ~
 *
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-line", className)}
    {...props}
  />
));
Separator.displayName = "Select.Separator";
Select.Separator = Separator;
