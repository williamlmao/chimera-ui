import { useState } from "react";
import { handleTailwindClassOverrides } from "../utils/utils";
import { Tooltip } from "./Tooltip";

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

  const defaultClasses = `w-fit flex items-center justify-center relative group px-4 py-2 tracking-wide bg-primary-500 text-on-primary-100 rounded-theme transition duration-100 ease-in-out ${
    pressed ? "translate-y-[2px] scale-[0.99]" : "translate-y-0 scale-[1]"
  }  ${disabled ? "opacity-60 cursor-not-allowed" : ""}`;

  return (
    // Tailwind transition to make the button look like it's being pressed
    <button
      className={
        className
          ? handleTailwindClassOverrides(defaultClasses, className)
          : defaultClasses
      }
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
      {disabled && disabledReason && <Tooltip message={disabledReason} />}
    </button>
  );
};
