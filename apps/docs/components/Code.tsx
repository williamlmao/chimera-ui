import { Button, Copy } from "@chimera-ui/components";
import React from "react";

export const Code = ({ children }: { children: string }) => {
  const [copied, setCopied] = React.useState(false);

  return (
    <pre
      className={
        "bg-base-2 text-base-content p-4 rounded-md overflow-auto group w-full"
      }
    >
      <Copy
        contentToCopy={children}
        className="bg-primary text-primary-content hidden group-hover:block"
      />
      <code>{children}</code>
    </pre>
  );
};
