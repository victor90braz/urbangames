import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hola Mondo link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hola Mondo/i);
  expect(linkElement).toBeInTheDocument();
});

