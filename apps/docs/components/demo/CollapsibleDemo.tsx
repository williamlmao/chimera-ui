import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "chimera-tw";

export const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <Button></Button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="Text text-2xl mr-6">
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
          <button className="IconButton">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <div className="Repository">
        <span className="Text">@radix-ui/primitives</span>
      </div>

      <Collapsible.Content>
        <div className="Repository">
          <span className="Text">@radix-ui/colors</span>
        </div>
        <div className="Repository">
          <span className="Text">@stitches/react</span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleDemo;
