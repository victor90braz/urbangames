import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import Title from "./Title";

describe("Title", () => {
  afterEach(cleanup);
  it("should render a title of aplication", () => {
    render(<Title />);

    const expectedTitle = "UrbanGames";
    screen.getByText(expectedTitle);
  });

  it("should render an element h1", () => {
    render(<Title />);

    screen.getByRole("heading", { level: 1 });
  });
});

export default Title;
