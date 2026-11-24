import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { Button } from "./Button";

test("renders as a primary button by default", () => {
  render(<Button>Save</Button>);

  const button = screen.getByRole("button", { name: "Save" });
  expect(button).toHaveAttribute("type", "button");
  expect(button).toHaveClass("rui-button", "rui-button--primary");
});

test("applies a selected variant and forwards button props", () => {
  const onClick = vi.fn();
  render(<Button variant="outline" type="submit" onClick={onClick}>Send</Button>);

  const button = screen.getByRole("button", { name: "Send" });
  fireEvent.click(button);

  expect(button).toHaveAttribute("type", "submit");
  expect(button).toHaveClass("rui-button--outline");
  expect(onClick).toHaveBeenCalledOnce();
});
