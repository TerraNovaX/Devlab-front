import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Import du fichier CSS principal

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
