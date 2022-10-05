import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import MenuHamburger from "./MenuHamburger";

describe("MenuHamburger", () => {
  it("should render an icon Hamburguesa", () => {
    render(<MenuHamburger />);
    screen.getByTestId("idMenuHamburger");
  });
});
