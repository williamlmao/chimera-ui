"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../utils";

const AlertDialog = () => {
  return <></>;
};

const Root = AlertDialogPrimitive.Root;
Root.displayName = AlertDialogPrimitive.Root.displayName;
AlertDialog.Root = Root;

const Trigger = AlertDialogPrimitive.Trigger;
Trigger.displayName = AlertDialogPrimitive.Trigger.displayName;
AlertDialog.Trigger = Trigger;

const Portal = ({
  className,
  children,
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {children}
    </div>
  </AlertDialogPrimitive.Portal>
);
Portal.displayName = AlertDialogPrimitive.Portal.displayName;
AlertDialog.Portal = Portal;

const Overlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in",
      className
    )}
    {...props}
    ref={ref}
  />
));
Overlay.displayName = AlertDialogPrimitive.Overlay.displayName;
AlertDialog.Overlay = Overlay;

const Content = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Content
    ref={ref}
    className={cn(
      "fixed z-50 grid w-full max-w-lg text-overlay-content-1 scale-100 bg-overlay-1 gap-4 p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-theme-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",

      className
    )}
    {...props}
  >
    {children}
  </AlertDialogPrimitive.Content>
));
Content.displayName = AlertDialogPrimitive.Content.displayName;
AlertDialog.Content = Content;

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
Header.displayName = "AlertDialogHeader";
AlertDialog.Header = Header;

const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
Footer.displayName = "AlertDialogFooter";
AlertDialog.Footer = Footer;

const Title = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-overlay-content-2", className)}
    {...props}
  />
));
Title.displayName = AlertDialogPrimitive.Title.displayName;
AlertDialog.Title = Title;

const Description = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-overlay-content-1", className)}
    {...props}
  />
));
Description.displayName = AlertDialogPrimitive.Description.displayName;
AlertDialog.Description = Description;

const Action = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-theme-md bg-primary text-primary-content py-2 px-4 text-sm font-semibold transition-colors hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Action.displayName = AlertDialogPrimitive.Action.displayName;
AlertDialog.Action = Action;

const Cancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      "mt-2 inline-flex h-10 items-center justify-center rounded-theme-md border border-slate-200 py-2 px-4 text-sm font-semibold text-overlay-content-1 transition-colors hover:bg-overlay-3 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  sm:mt-0",
      className
    )}
    {...props}
  />
));
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName;
AlertDialog.Cancel = Cancel;

export { AlertDialog };
