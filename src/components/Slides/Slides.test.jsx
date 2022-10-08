import { cleanup, render, screen } from "@testing-library/react";
import Slides from "./Slides";

describe("Slides", () => {
  afterEach(cleanup);

  it("should render 3 elements img's", () => {
    render(<Slides />);

    const element = "img";
    const imageLength = 3;

    const image = screen.getAllByRole(element);
    expect(image).toHaveLength(imageLength);
  });

  it("should render 3 elements h3", () => {
    render(<Slides />);

    const titlesLength = 3;
    const titles = screen.getAllByRole("heading", { level: 3 });

    expect(titles).toHaveLength(titlesLength);
  });
});
