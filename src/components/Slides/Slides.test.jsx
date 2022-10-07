import { cleanup, render, screen } from "@testing-library/react";
import Slides from "./Slides";

describe("Slides", () => {
  afterEach(cleanup);

  it("should render an element img", () => {
    render(<Slides />);

    screen.getAllByRole("img");
  });

  it("should render an element h3", () => {
    render(<Slides />);
    screen.getAllByRole("heading", { level: 3 });
  });
});
