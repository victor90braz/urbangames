import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello World link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
