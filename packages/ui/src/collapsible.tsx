import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { CrossIcon, ExpandIcon } from "lucide-react";

export const Collapsible = () => {
  return <></>;
};

const Root = CollapsiblePrimitive.Root;
Root.displayName = "Collapsible.Root";
Collapsible.Root = Root;

const Trigger = CollapsiblePrimitive.Trigger;
Trigger.displayName = "Collapsible.Trigger";
Collapsible.Trigger = Trigger;

const Content = CollapsiblePrimitive.Content;
Content.displayName = "Collapsible.Content";
Collapsible.Content = Content;
