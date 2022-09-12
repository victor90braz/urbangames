import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Cat Fact API link", async () => {
  render(<App />);
  const linkElement = await screen.getByText(/Cat Fact API/i);
  expect(linkElement).toBeInTheDocument();
});
