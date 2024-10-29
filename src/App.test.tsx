import axe from "axe-core";
import { it, expect } from "vitest";
import App from "./App.tsx";
import { render } from "@testing-library/react";

function renderComponent() {
  const { container } = render(<App />);
  return container;
}

it("renders App sucessfully", () => {
  renderComponent();
});

it("app accessability check", async () => {
  const container = renderComponent();
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});
