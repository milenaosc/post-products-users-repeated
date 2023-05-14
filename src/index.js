import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";

import { Provider } from "react-redux";
import store from "./store/store";

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
      {
        path: "/posts/detail/:id",
        element: <PostDetail/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
