import { render, screen, cleanup, fireEvent } from "@testing-library/react";
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

  it("should user input after clicking a number", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("1");
  });

  it("should user input after clicking several numbers", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const two = screen.getByText("2");
    fireEvent.click(two);

    const three = screen.getByText("3");
    fireEvent.click(three);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("123");
  });

  it("should user input after clicking an operator", () => {
    render(<Calculator />);

    const plus = screen.getByText("+");
    fireEvent.click(plus);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("+");
  });

  it("should calculate based on user input and show the calculation", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const plus = screen.getByText("+");
    fireEvent.click(plus);

    fireEvent.click(one);

    const equal = screen.getByText("=");
    fireEvent.click(equal);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("2");
  });
});
