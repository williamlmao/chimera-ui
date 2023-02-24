import React from "react";
import { Button } from "./Button";
import { Copy as CopyIcon, Check } from "lucide-react";
import { cn } from "../utils";

export const Copy = ({
  className,
  contentToCopy,
  copyIcon,
  successIcon,
}: {
  className?: string;
  contentToCopy: string;
  copyIcon?: React.ReactNode;
  successIcon?: React.ReactNode;
}) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(contentToCopy || "");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
      className={cn(
        "absolute top-2 right-2 text-xs p-2 h-fit rounded-md bg-transparent",
        className
      )}
    >
      {copied
        ? successIcon || <Check className="w-4 h-4" />
        : copyIcon || <CopyIcon className="w-4 h-4" />}
    </Button>
  );
};

Copy.displayName = "Copy";
