import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as WebRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <WebRouter>
      <App />
    </WebRouter>
);
