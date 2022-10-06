import React, { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import renderContainer from "./root/root";
import "./index.css";
import App from "./App";

renderContainer.render(
  <StrictMode>
    <App />
  </StrictMode>
);
reportWebVitals();
