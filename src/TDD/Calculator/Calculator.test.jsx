import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Calculator from "./Calculator";
import { numbers, operators } from "./CalculatorAssets";

describe("Calculator", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(<Calculator />);
  });

  it("should render a title", () => {
    render(<Calculator />);

    screen.getByText("Calculator");
  });

  it("should render numbers", () => {
    render(<Calculator />);

    numbers.map((number) => screen.getByText(number));
  });

  it("should render 4 rows", () => {
    render(<Calculator />);

    const expectedRows = screen.getAllByRole("row");
    expect(expectedRows).toHaveLength(4);
  });

  it("should render operators", () => {
    render(<Calculator />);

    operators.map((operator) => screen.getByText(operator));
  });

  it("should render equal", () => {
    render(<Calculator />);

    screen.getByText("=");
  });

  it("should render an input", () => {
    render(<Calculator />);

    screen.getByRole("textbox");
  });
});
