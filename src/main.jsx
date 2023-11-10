import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import "./assets/css/reset.css";
import "./assets/css/index.css";

// Import the data so we can send it to the components
import { projectsData, aboutData, contactData } from "./data/data.jsx";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home data={aboutData} />,
      },
      {
        path: "aboutme",
        element: <AboutMe data={aboutData} />,
      },
      {
        path: "portfolio",
        element: <Project data={projectsData} />,
      },
      {
        path: "contact",
        element: <Contact data={contactData} />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="starscontainer">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
    <RouterProvider router={router} />
  </>
);
