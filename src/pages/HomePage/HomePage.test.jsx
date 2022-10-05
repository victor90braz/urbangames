import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render the HomePageAssets", () => {
    render(<HomePage />);

    screen.getAllByRole("button");
  });
});
