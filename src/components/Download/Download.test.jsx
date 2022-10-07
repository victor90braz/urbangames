import { render, screen } from "@testing-library/react";
import Download from "./Download";

describe("Download", () => {
  it("should render a Download component with a text", () => {
    render(<Download />);

    const expectedText = screen.getByText("Download and play");

    expect(expectedText).toBeInTheDocument();
  });
});
