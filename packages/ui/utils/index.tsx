import clsx, { ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function findSubcomponent(
  children: React.ReactNode | React.ReactNode[],
  displayName: string
) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;
    // @ts-ignore
    return child?.type?.displayName === displayName ? child : null;
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
