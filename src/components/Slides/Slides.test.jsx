import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import Slides from "./Slides";
import SlidesImages from "./SlidesAssets";

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

  it("should render an element title, image,description", () => {
    render(<Slides />);

    SlidesImages.forEach((slide) =>
      screen.getByText(slide.title, slide.description, slide.image)
    );
  });
});
