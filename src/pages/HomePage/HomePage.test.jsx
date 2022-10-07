import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should contain an element button to be disabled", () => {
    render(<HomePage />);

    const ariaLabel = /button-download/i;
    const buttonElement = screen.getByRole("button", {
      name: ariaLabel,
    });

    expect(buttonElement).toBeDisabled();
  });
});
