import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

import { Provider } from "react-redux";
import store from "./store/store";
import Users from "./pages/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";

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
        element: <PostDetail />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/userdetail/:id",
        element: <UserDetail />,
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
