import { Button, Copy } from "@chimera-ui/components";
import React from "react";

export const Code = ({ children }: { children: string }) => {
  const [copied, setCopied] = React.useState(false);

  return (
    <pre
      className={"bg-gray-800 text-white p-4 rounded-md overflow-auto group"}
    >
      <Copy
        contentToCopy={children}
        className="bg-gray-900 text-white hidden group-hover:block"
      />
      <code>{children}</code>
    </pre>
  );
};
