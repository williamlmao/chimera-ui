import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "../utils";

export const Menubar = () => {
  return <></>;
};

const Menu = MenubarPrimitive.Menu;
Menu.displayName = "Menubar.Menu";
Menubar.Menu = Menu;

const Group = MenubarPrimitive.Group;
Group.displayName = "Menubar.Group";
Menubar.Group = Group;

const Portal = MenubarPrimitive.Portal;
Portal.displayName = "Menubar.Portal";
Menubar.Portal = Portal;

const Sub = MenubarPrimitive.Sub;
Sub.displayName = "Menubar.Sub";
Menubar.Sub = Sub;

const RadioGroup = MenubarPrimitive.RadioGroup;
RadioGroup.displayName = "Menubar.RadioGroup";
Menubar.RadioGroup = RadioGroup;

const Root = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border border-line bg-overlay p-1 ",
      className
    )}
    {...props}
  />
));
Root.displayName = `Menubar.Root`;

Menubar.Root = Root;

const Trigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-[0.2rem] py-1.5 px-3 text-sm font-medium outline-none  hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content data-[state=open]:bg-slate-10",
      className
    )}
    {...props}
  />
));
Trigger.displayName = "Menubar.Trigger";
Menubar.Trigger = Trigger;
const SubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[state=open]:bg-primary  data-[state=open]:text-primary-content",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
SubTrigger.displayName = "Menubar.SubTrigger";
Menubar.SubTrigger = SubTrigger;
const SubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-line bg-overlay p-1 shadow-md animate-in slide-in-from-left-1 ",
      className
    )}
    {...props}
  />
));
SubContent.displayName = "Menubar.SubContent";
Menubar.SubContent = SubContent;
const Content = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border border-line bg-base p-1 text-base-content shadow-md animate-in slide-in-from-top-1 ",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
Content.displayName = "Menubar.Content";
Menubar.Content = Content;
const Item = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative cursor-default bg-overlay select-none rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary focus:text-primary-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
Item.displayName = "Menubar.Item";
Menubar.Item = Item;

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex flex-1 cursor-default justify-between select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    <span>{children}</span>
  </MenubarPrimitive.CheckboxItem>
));
CheckboxItem.displayName = "Menubar.CheckboxItem";
Menubar.CheckboxItem = CheckboxItem;
const RadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-base-3 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
RadioItem.displayName = "Menubar.RadioItem";
Menubar.RadioItem = RadioItem;
const Label = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-overlay-content ",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
Label.displayName = "Menubar.Label";
Menubar.Label = Label;
const Separator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-base-2 ", className)}
    {...props}
  />
));
Separator.displayName = "Menubar.Separator";
Menubar.Separator = Separator;
const Shortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-base-content-2",
        className
      )}
      {...props}
    />
  );
};
Shortcut.displayName = "Menubar.Shortcut";
Menubar.Shortcut = Shortcut;
