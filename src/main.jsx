import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/index.scss";
import { Toaster } from "react-hot-toast";
import { Provider as LocalizationProvider } from "./context/languages.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
    <Toaster position="top-right" />
  </React.StrictMode>
);
