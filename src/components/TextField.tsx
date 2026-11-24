import { useId } from "react";
import type { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function TextField({ label, hint, error, id, className = "", ...props }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;
  return <div className="rui-field">
    <label className="rui-field__label" htmlFor={inputId}>{label}</label>
    <input id={inputId} className={`rui-input ${error ? "rui-input--error" : ""} ${className}`.trim()}
      aria-invalid={Boolean(error)} aria-describedby={hint || error ? messageId : undefined} {...props} />
    {(hint || error) && <p id={messageId} className={error ? "rui-field__error" : "rui-field__hint"}>{error ?? hint}</p>}
  </div>;
}