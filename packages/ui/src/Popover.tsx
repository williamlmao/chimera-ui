import * as React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

export const Popover = ({
  buttonChildren,
  buttonClassName,
  popoverChildren,
  popoverClassName,
  popoverArrowClassName,
}: {
  buttonChildren: React.ReactNode;
  buttonClassName?: string;
  popoverChildren: React.ReactNode;
  popoverClassName?: string;
  popoverArrowClassName?: string;
}) => (
  <RadixPopover.Root>
    <RadixPopover.Trigger
      className={twMerge(
        "px-2 py-1 w-fit bg-primary hover:bg-primary-darker text-on-primary rounded-theme",
        buttonClassName
      )}
    >
      {buttonChildren}
    </RadixPopover.Trigger>
    <RadixPopover.Portal>
      <RadixPopover.Content
        className={twMerge(
          "p-4 flex items-center justify-center bg-overlay mx-2 max-w-[300px] rounded-theme",
          popoverClassName
        )}
      >
        {popoverChildren}
        <RadixPopover.Arrow className="fill-overlay" />
      </RadixPopover.Content>
    </RadixPopover.Portal>
  </RadixPopover.Root>
);
