const fs = require("fs");
const path = require("path");
const reactDocs = require("react-docgen");

const code = `
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../utils";

export const Accordion = (
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) => {
  return <></>;
};

const Root = AccordionPrimitive.Root;
Root.displayName = AccordionPrimitive.Root.displayName;
Accordion.Root = Root;

/**
 * Default Classes: ~ "border-b border-b-line" ~
 * sdiofh
 */
const Item = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-b-line", className)}
    {...props}
  />
));
Item.displayName = "Accordion.Item";
Accordion.Item = Item;
`;

console.log(reactDocs.parse(code));
