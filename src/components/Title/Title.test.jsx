import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Title from "./Title";

describe("Title", () => {
  it("should render a title", () => {
    render(<Title />);

    screen.getByText("UrbanGames", { level: 1 });
  });
});

export default Title;
