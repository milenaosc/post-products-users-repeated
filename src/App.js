import "./index.scss";
import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
