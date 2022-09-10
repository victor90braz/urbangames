import reportWebVitals from "./reportWebVitals";
import React from "react";
import { elementDom } from "./RootDom/RootDom";
import App from "./App/App";
import IndexStyle from "./indexStyle";

elementDom.render(
  <IndexStyle>
    <App />
  </IndexStyle>
);
reportWebVitals();
