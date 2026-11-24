import { useId } from "react";
import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export function Card({ title, className = "", children, ...props }: CardProps) {
  const titleId = useId();

  return <section className={`rui-card ${className}`.trim()} aria-labelledby={title ? titleId : undefined} {...props}>
    {title && <h2 id={titleId} className="rui-card__title">{title}</h2>}
    {children}
  </section>;
}
