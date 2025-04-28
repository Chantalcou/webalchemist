// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Solo usamos uno

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>

);
