import { render, screen } from "@testing-library/react";
import Brand from "./Brand";

describe("Brand", () => {
  it("should render an element img", () => {
    render(<Brand />);

    const imgElement = screen.getByRole("img");

    expect(imgElement).toBeInTheDocument();
  });
});
