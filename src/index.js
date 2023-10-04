import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import "./index.css";
import FeaturePage from "./pages/FeaturePage";
import AboutPage from "./pages/AboutPage";
import ImpPage from "./pages/ImpPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "feature",
    element: <FeaturePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "imp",
    element: <ImpPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
)