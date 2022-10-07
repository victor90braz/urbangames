import { render, screen } from "@testing-library/react";
import MenuHamburger from "./MenuHamburger";

describe("MenuHamburger", () => {
  it("should render an icon Hamburguesa", () => {
    render(<MenuHamburger />);

    const expectedIcon = screen.getByTestId("idMenuHamburger");

    expect(expectedIcon).toBeInTheDocument();
  });
});
