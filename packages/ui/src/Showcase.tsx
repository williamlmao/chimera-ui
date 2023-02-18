// Import raw text of DaisySelect.tsx
// @ts-ignore
// Leaving this here as a reference for using raw-loader
// import ButtonRaw from "!!raw-loader!../../../packages/ui/src/Button.tsx";
import React from "react";
import { Button } from "./ButtonOld";
// @ts-ignore
import reactElementToJSXString from "react-element-to-jsx-string";
import { twMerge } from "tailwind-merge";
import { findSubcomponent } from "../utils";
import { ThemePicker } from "./ThemePicker";

export const Showcase = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  // Get the individual subcomponents, Preview, Code, Children by checking name property
  const title = findSubcomponent(childrenArray, "Showcase.Title");
  const preview = findSubcomponent(childrenArray, "Showcase.Preview");

  return (
    <div className="my-4">
      <div className="mb-4">{title}</div>
      <div className="rounded-md relative">{preview}</div>
    </div>
  );
};

Showcase.displayName = "Showcase";

/**
 *
 * @param componentPreviewClassName Default: bg-gradient-to-tr from-pink-300 via-orange-200 to-red-300 text-on-surface p-4 rounded-md flex items-center justify-center gap-4 mb-4
 * @param codePreviewClassName Default: bg-gray-800 p-4 rounded-md
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
          "bg-gradient-to-tr from-base-2 via-base to-base-2 text-base-content p-4 rounded-md flex items-center justify-center gap-4 mb-4 relative",
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
          "bg-gray-800 text-white p-4 rounded-md",
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
Preview.displayName = "Showcase.Preview";
Showcase.Preview = Preview;

const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-base text-base-content p-2 rounded-md">{children}</div>
  );
};
Code.displayName = "Showcase.Code";
Showcase.Code = Code;

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl">{children}</div>;
};

Title.displayName = "Showcase.Title";
Showcase.Title = Title;
