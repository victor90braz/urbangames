import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello World link", async () => {
  render(<App />);
  const linkElement = await screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
