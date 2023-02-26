import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "../utils";
import { Button } from "./Button";

export const Dialog = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <></>;
};

const Root = DialogPrimitive.Root;
Root.displayName = "Dialog.Root";
Dialog.Root = Root;

const DialogTrigger = DialogPrimitive.Trigger;
DialogTrigger.displayName = "Dialog.Trigger";
Dialog.Trigger = DialogTrigger;

/**
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 * Default Classes: ~ undefined ~
 *
 */
const Portal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
Portal.displayName = "Dialog.Portal";
Dialog.Portal = Portal;

/**
 * Default Classes: ~ "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" ~
 *
 */
const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
      className
    )}
    {...props}
    ref={ref}
  />
));
Overlay.displayName = "Dialog.Overlay";
Dialog.Overlay = Overlay;

/**
 * Default Classes: ~ "fixed z-50 grid w-full gap-4 rounded-b-lg bg-overlay p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0" ~
 *
 */
const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      "fixed z-50 grid w-full gap-4 rounded-b-lg bg-overlay p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",

      className
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Content>
));
Content.displayName = "Dialog.Content";
Dialog.Content = Content;

/**
 * Default Classes: ~ "absolute top-0 right-0 z-50 flex items-center justify-center w-8 h-8 rounded-full text-overlay-content hover:text-primary focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2" ~
 *
 */
const Close = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "absolute top-0 right-0 z-50 flex items-center justify-center w-8 h-8 rounded-full text-overlay-content hover:text-primary focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2",
      className
    )}
    {...props}
  >
    {props.children || (
      <button>
        <Cross2Icon />
      </button>
    )}
  </DialogPrimitive.Close>
));
Close.displayName = "Dialog.Close";
Dialog.Close = Close;

/**
 * Default Classes: ~ "z-50 w-full flex justify-end" ~
 *
 */
const Confirm = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn("z-50 w-full flex justify-end", className)}
    {...props}
  >
    {props.children || <Button variant="success">Confirm</Button>}
  </DialogPrimitive.Close>
));
Confirm.displayName = "Dialog.Confirm";
Dialog.Confirm = Confirm;

/**
 * Default Classes: ~ "flex flex-col space-y-2 text-center sm:text-left" ~
 *
 */
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
Header.displayName = "Dialog.Header";
Dialog.Header = Header;

/**
 * Default Classes: ~ "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" ~
 *
 */
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
Footer.displayName = "Dialog.Footer";
Dialog.Footer = Footer;

/**
 * Default Classes: ~ "text-lg font-semibold text-overlay-content" ~
 *
 */
const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-overlay-content",

      className
    )}
    {...props}
  />
));
Title.displayName = "Dialog.Title";
Dialog.Title = Title;

/**
 * Default Classes: ~ "text-sm text-overlay-content-2" ~
 *
 */
const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-overlay-content-2", className)}
    {...props}
  />
));
Description.displayName = "Dialog.Description";
Dialog.Description = Description;
