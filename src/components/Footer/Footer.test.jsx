import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("render", () => {
    render(<Footer />);

    const expectedIcon = screen.getByTestId("idLinkedin");

    expect(expectedIcon).toBeInTheDocument();
  });
});
