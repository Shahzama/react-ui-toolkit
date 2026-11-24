import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Card } from "./Card";

test("renders a labelled section with its content", () => {
  render(<Card title="Account details">Profile content</Card>);

  expect(screen.getByRole("heading", { name: "Account details" })).toBeInTheDocument();
  expect(screen.getByText("Profile content")).toBeInTheDocument();
  expect(screen.getByRole("region")).toHaveClass("rui-card");
});

test("forwards section attributes and preserves custom classes", () => {
  render(<Card className="featured" aria-label="Featured card">Content</Card>);

  expect(screen.getByLabelText("Featured card")).toHaveClass("rui-card", "featured");
});
