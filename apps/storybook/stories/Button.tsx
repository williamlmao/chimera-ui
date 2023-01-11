import React from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @param children is the content of the button
 * @param className Defaults to: `w-fit flex items-center justify-center relative group px-4 py-2 tracking-wide bg-primary text-on-primary rounded-theme transition duration-100 ease-in-out ${
    pressed ? "translate-y-[2px] scale-[0.99]" : "translate-y-0 scale-[1]"
  }  ${disabled ? "opacity-60 cursor-not-allowed" : ""}`
 * @param onClick is the function that is called when the button is clicked
 * @param disabled is the boolean that determines if the button is disabled
 * @param disabledReason is the reason why the button is disabled, to be shown in a tooltip when button is disabled
 * @returns
 */
export const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  disabledReason = "",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: Function;
  disabled?: boolean;
  disabledReason?: string;
}) => {
  const [pressed, setPressed] = useState(false);

  const defaultClasses = `w-fit flex items-center justify-center relative group px-4 py-2 tracking-wide bg-primary text-on-primary rounded-theme transition duration-100 ease-in-out ${
    pressed ? "translate-y-[2px] scale-[0.99]" : "translate-y-0 scale-[1]"
  }  ${disabled ? "opacity-60 cursor-not-allowed" : ""}`;

  return (
    <button
      className={twMerge(defaultClasses, className)}
      onMouseDown={() => {
        if (!disabled) {
          setPressed(true);
        }
      }}
      onMouseUp={() => {
        setPressed(false);
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};
