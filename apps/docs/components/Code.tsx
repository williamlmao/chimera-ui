import { Button } from "chimera-tw";
import React from "react";

export const Code = ({ children }: { children: string }) => {
  const [copied, setCopied] = React.useState(false);

  return (
    <pre className={"bg-gray-800 text-white p-4 rounded-md"}>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(children || "");
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded-md max-h-6"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
      <code>{children}</code>
    </pre>
  );
};
