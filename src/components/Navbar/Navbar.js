import React from "react";

const Navbar = (props) => (
  <nav className="navbar fixed-top navbar-dark bg-primary">
    <a className="navbar-brand" href="/">Clicky Game</a>
    <span>{props.action}</span>
    <span>Score: {props.score}</span>
    <span>Top Score: {props.topScore}</span>
  </nav>
);

export default Navbar;
