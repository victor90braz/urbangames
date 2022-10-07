import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("render", () => {
    render(<Footer />);

    const expectedText = screen.getByText("Home");

    expect(expectedText).toBeInTheDocument();
  });
});
