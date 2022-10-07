import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("should contain an element img", () => {
    render(<Navigation />);

    const createdRobotHeading = screen.getByRole("img");

    expect(createdRobotHeading).toBeInTheDocument();
  });
});
