import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to={"./"}>Home</Link>
      <Link to={"./Quote"}>Quote</Link>
      <Link to={"./Calculator"}>Calculator</Link>
    </nav>
  );
};

export default Nav;
