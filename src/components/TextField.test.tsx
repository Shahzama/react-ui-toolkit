import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { TextField } from "./TextField";

test("connects the label and hint text to the input", () => {
  render(<TextField id="email" label="Email address" hint="We only use this for account updates." />);

  const input = screen.getByRole("textbox", { name: "Email address" });
  expect(input).toHaveAttribute("aria-describedby", "email-message");
  expect(screen.getByText("We only use this for account updates.")).toHaveClass("rui-field__hint");
});

test("exposes the error state to assistive technology", () => {
  render(<TextField id="email" label="Email address" hint="Use your work email." error="Enter a valid email address." />);

  const input = screen.getByRole("textbox", { name: "Email address" });
  expect(input).toHaveAttribute("aria-invalid", "true");
  expect(input).toHaveAttribute("aria-describedby", "email-message");
  expect(screen.getByText("Enter a valid email address.")).toHaveClass("rui-field__error");
  expect(screen.queryByText("Use your work email.")).not.toBeInTheDocument();
});
