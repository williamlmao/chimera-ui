import React from "react";

export function findSubcomponent(
  children: React.ReactNode | React.ReactNode[],
  name: string
) {
  const childrenArray = Array.isArray(children) ? children : [children];
  // Get the individual subcomponents, Preview, Code, Children by checking name property
  return childrenArray.find((child) => {
    if (!React.isValidElement(child)) return false;
    // @ts-ignore
    return child.type.name === name;
  });
}
