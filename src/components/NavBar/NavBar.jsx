import React from "react";
import { NavLink } from "react-router-dom";
import "./_navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar container">
      <div>Logo</div>
      <ul>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/posts">Posts</NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
