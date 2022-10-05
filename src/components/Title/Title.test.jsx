import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Title from "./Title";
import { TitleAssets } from "./TitleAssets";

describe("Title", () => {
  it("should render a title", () => {
    render(<Title />);

    screen.getByText(TitleAssets.title);
  });
});

export default Title;
