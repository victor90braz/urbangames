import React from "react";
import reportWebVitals from "./reportWebVitals";
import renderContainer from "./root/root";
import App from "./App/App";
import IndexStyle from "./indexStyle";

renderContainer.render(
  <IndexStyle>
    <App />
  </IndexStyle>
);
reportWebVitals();
