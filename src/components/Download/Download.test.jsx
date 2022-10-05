import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Download from "./Download";

describe("Download", () => {
  it("should render a Download component with a text", () => {
    render(<Download />);

    screen.getByText("Download and play");
  });
});
