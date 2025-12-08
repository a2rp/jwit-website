import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./theme.css";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/scrollToTop/index.jsx";

createRoot(document.getElementById("root")).render(
    <>
        <BrowserRouter basename="/jwit-website">
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </>
);


