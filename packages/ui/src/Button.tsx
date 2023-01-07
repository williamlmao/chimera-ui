import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="bg-red-500">{props.children} sdfsdfsf hi</button>;
}

Button.displayName = "Button";
