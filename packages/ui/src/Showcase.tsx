// Import raw text of DaisySelect.tsx
// @ts-ignore
// Leaving this here as a reference for using raw-loader
// import ButtonRaw from "!!raw-loader!../../../packages/ui/src/Button.tsx";
import React, { useEffect } from "react";
import { Button } from "./Button";
// @ts-ignore
import reactElementToJSXString from "react-element-to-jsx-string";
import { twMerge } from "tailwind-merge";
import { findSubcomponent } from "../utils/utils";
import { Item } from "./RadixSelect";
import { ThemePicker } from "./ThemePicker";

export const Showcase = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  // Get the individual subcomponents, Preview, Code, Children by checking name property
  const title = findSubcomponent(childrenArray, "Title");
  const preview = findSubcomponent(childrenArray, "Preview");

  return (
    <div className="my-4">
      <div className="mb-4">{title}</div>
      <div className="rounded-theme relative">{preview}</div>
    </div>
  );
};

/**
 *
 * @param componentPreviewClassName Default: bg-gradient-to-tr from-pink-300 via-orange-200 to-red-300 text-on-surface p-4 rounded-theme flex items-center justify-center gap-4 mb-4
 * @param codePreviewClassName Default: bg-gray-800 p-4 rounded-theme
 * @returns
 */
const Preview = ({
  children,
  componentPreviewClassName,
  codePreviewClassName,
}: {
  children: React.ReactNode;
  componentPreviewClassName: string;
  codePreviewClassName: string;
}) => {
  const [copied, setCopied] = React.useState(false);

  const childrenArray = Array.isArray(children) ? children : [children];
  const childrenCode = childrenArray
    .map((child) => {
      if (React.isValidElement(child)) {
        return reactElementToJSXString(child, {
          displayName: (element) => {
            if (React.isValidElement(element)) {
              // Check if type of element is a string
              if (typeof element?.type === "string") {
                return element?.type;
              }
              // @ts-ignore
              if (typeof element?.type?.displayName === "string") {
                // @ts-ignore
                return element?.type.displayName;
              }
              if (typeof element?.type.name === "string") {
                return element?.type.name;
              }

              return "NoDisplayName";
            }
          },
        });
      }
    })
    .join("\n");

  return (
    <div>
      <div
        className={twMerge(
          "bg-gradient-to-tr from-base-2 via-base to-base-1 text-on-surface p-4 rounded-theme flex items-center justify-center gap-4 mb-4 relative",
          componentPreviewClassName
        )}
      >
        <div className="absolute top-2 right-2">
          <ThemePicker />
        </div>
        {children}
      </div>
      <pre
        className={twMerge(
          "bg-gray-800 text-white p-4 rounded-theme",
          codePreviewClassName
        )}
      >
        <Button
          onClick={() => {
            navigator.clipboard.writeText(childrenCode);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
          className="absolute top-2 right-2 text-xs px-2 py-1 rounded-md"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
        <code>{childrenCode}</code>
      </pre>
    </div>
  );
};

Showcase.Preview = Preview;

const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-base text-on-surface p-2 rounded-theme">{children}</div>
  );
};

Showcase.Code = Code;

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl">{children}</div>;
};

Showcase.Title = Title;
