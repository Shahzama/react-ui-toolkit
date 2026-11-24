import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ variant = "primary", className = "", type = "button", children, ...props }: ButtonProps) {
  return <button className={`rui-button rui-button--${variant} ${className}`.trim()} type={type} {...props}>{children}</button>;
}