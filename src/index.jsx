import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/i18n";
import "./styles/index.scss";
import App from "./App";
import { AppProvider } from "./contexts/app.context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
