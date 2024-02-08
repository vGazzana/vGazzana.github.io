import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Mouse from "./components/core/Mouse";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Mouse />
  </React.StrictMode>
);
