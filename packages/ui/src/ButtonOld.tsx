import React from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * @param children is the content of the button
 * @param className Default: `w-fit flex items-center justify-center relative group px-4 py-2 tracking-wide bg-primary text-on-primary rounded-md transition duration-100 ease-in-out`
 * @param pressedClassName Default: `translate-y-[2px] scale-[0.99]`
 * @param disabledClassName Default: `opacity-60 cursor-not-allowed`
 * @param disabled is the boolean that determines if the button is disabled
 * @param disabledReason is the reason why the button is disabled, to be shown in a tooltip when button is disabled
 * @returns
 */

export const Button = ({
  children,
  className,
  pressedClassName,
  disabledClassName,
  onClick,
  disabled = false,
  disabledReason = "",
}: {
  children: React.ReactNode;
  className?: string;
  pressedClassName?: string;
  disabledClassName?: string;
  onClick?: Function;
  disabled?: boolean;
  disabledReason?: string;
}) => {
  const [pressed, setPressed] = useState(false);
  const mergedClassNames = twMerge(
    `w-fit flex items-center justify-center relative group px-4 py-2 tracking-wide bg-primary text-primary-content rounded-md transition duration-100 ease-in-out`,
    className
  );
  const mergedPressedClassNames = twMerge(
    `translate-y-[2px] scale-[0.99]`,
    className
  );
  const disabledClassNames = twMerge(
    `opacity-60 cursor-not-allowed`,
    className
  );
  return (
    <button
      className={clsx({
        [mergedClassNames]: true,
        [mergedPressedClassNames]: pressed && !disabled,
        [disabledClassNames]: disabled,
      })}
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

Button.displayName = "Button";

export default Button;
