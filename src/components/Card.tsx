import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export function Card({ title, className = "", children, ...props }: CardProps) {
  return <section className={`rui-card ${className}`.trim()} {...props}>
    {title && <h2 className="rui-card__title">{title}</h2>}
    {children}
  </section>;
}