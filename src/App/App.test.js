import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders APIs link", async () => {
  render(<App />);
  const linkElement = await screen.getByText(/UrbanGames/i);
  expect(linkElement).toBeInTheDocument();
});
