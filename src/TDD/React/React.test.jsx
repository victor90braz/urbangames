import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [["7", "8", "9"], ["4", "5", "6"], ["1", "2", "3"], ["0"]];
const operators = ["+", "-", "x", "÷"];

function Calculator() {
  return (
    <section>
      <h1>Calculator</h1>
      <div role="grid">
        {rows.map((row) => (
          <div key={row} role="row">
            {row.map((number) => (
              <span key={number}>{number}</span>
            ))}
          </div>
        ))}
        {operators.map((operator) => (
          <span key={operator}>{operator}</span>
        ))}
        <span>=</span>
      </div>
    </section>
  );
}

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
});
