import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "../public/pages/Posts/Posts";
import Home from "../public/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
