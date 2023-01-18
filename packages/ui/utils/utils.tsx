import React from "react";

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
