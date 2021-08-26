import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PerilContextProvider } from "./PerilContext";

ReactDOM.render(
  <React.StrictMode>
    <PerilContextProvider>
      <App />
    </PerilContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
