import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="bg-red-400">{props.children}</button>;
}

Button.displayName = "Button";
