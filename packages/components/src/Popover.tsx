import * as RadixPopover from "@radix-ui/react-popover";
import * as React from "react";
import { cn } from "../utils";

export const Popover = ({
  buttonContent,
  children,
  onClick,
  className,
}: {
  buttonContent: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        className={className}
      >
        {buttonContent}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          {children}
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

Popover.displayName = "Popover";

const Root = ({ children }: { children: React.ReactNode }) => {
  return <RadixPopover.Root>{children}</RadixPopover.Root>;
};
Root.displayName = "Popover.Root";
Popover.Root = Root;

/**
 *
 * @param className Default: `px-2`
 * @returns
 */
const Trigger = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Trigger>
>((props, forwardedRef) => {
  return (
    <RadixPopover.Trigger
      className={cn(
        "px-2 py-1 w-fit bg-primary hover:bg-primary-focus text-primary-content rounded-md",
        props.className
      )}
      onClick={props.onClick}
      ref={forwardedRef}
    >
      {props.children}
    </RadixPopover.Trigger>
  );
});
Trigger.displayName = "Popover.Trigger";
Popover.Trigger = Trigger;

const Portal = ({ children }: { children: React.ReactNode }) => {
  return <RadixPopover.Portal>{children}</RadixPopover.Portal>;
};
Portal.displayName = "Popover.Portal";
Popover.Portal = Portal;

const Content = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content>
>((props, forwardedRef) => {
  return (
    <RadixPopover.Content
      {...props}
      ref={forwardedRef}
      className={cn(
        "p-4 flex items-center justify-center bg-overlay text-overlay-content mx-2 max-w-[300px] rounded-md",
        props.className
      )}
    >
      {props.children}
    </RadixPopover.Content>
  );
});
Content.displayName = "Popover.Content";
Popover.Content = Content;

const Arrow = ({ className }: { className?: string }) => {
  return <RadixPopover.Arrow className={cn("fill-overlay", className)} />;
};
Arrow.displayName = "Popover.Arrow";
Popover.Arrow = Arrow;

const Close = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Close>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Close>
>((props, forwardedRef) => {
  return (
    <RadixPopover.Close
      {...props}
      ref={forwardedRef}
      className={cn("absolute top-1 right-3", props.className)}
    >
      {props.children}
    </RadixPopover.Close>
  );
});

Close.displayName = "Popover.Close";
Popover.Close = Close;
