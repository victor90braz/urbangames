import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("render", () => {
    render(<Footer />);

    const expectedIcon = screen.getByTestId("idLinkedin");

    expect(expectedIcon).toBeInTheDocument();
  });

  it("should have 5 items when using querySelectorAll", () => {
    const { container } = render(<Footer />);

    const expectedItems = '[role="listitem"]';
    const li = container.querySelectorAll(expectedItems);

    expect(li.length).toEqual(5);
  });
});
