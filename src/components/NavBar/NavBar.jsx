import React from "react";
import { NavLink } from "react-router-dom";
import "./_navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar container">
      <div>Logo</div>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/posts"
        >
          Posts
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
