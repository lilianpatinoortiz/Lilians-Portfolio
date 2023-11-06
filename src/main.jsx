import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/reset.css";
import "./assets/css/index.css";

// Initializes the DOM, renders the App component and mounts it to the DOM.
ReactDOM.createRoot(document.getElementById("root")).render(
  // This is our root component
  <React.StrictMode>
    <App /> {/* App is our top-level component */}
  </React.StrictMode>
);
