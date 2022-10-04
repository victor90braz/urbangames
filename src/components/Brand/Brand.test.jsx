import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Brand from "./Brand";

describe("Brand", () => {
  it("should render an element img", () => {
    render(<Brand />);

    screen.getByRole("img");
  });
});
