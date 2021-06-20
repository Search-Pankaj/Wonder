import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./Context";

import "./style.css";

ReactDOM.render(
  <ContextProvider>
    <div class="animation-area">
      <App />
    </div>
  </ContextProvider>,
  document.getElementById("root")
);
