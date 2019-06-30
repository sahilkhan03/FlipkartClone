import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink exact activeStyle={{ color: "red" }} to="/">
          Home
        </NavLink>
        <NavLink exact activeStyle={{ color: "red" }} to="/cart">
          Cart
        </NavLink>
        <NavLink exact activeStyle={{ color: "red" }} to="/login">
          Login
        </NavLink>
        <NavLink exact activeStyle={{ color: "red" }} to="/signup">
          Signup
        </NavLink>
        <NavLink exact activeStyle={{ color: "red" }} to="/about">
          About
        </NavLink>
      </div>
    );
  }
}
