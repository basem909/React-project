import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <Link to="./">Home</Link>
    <Link to="./quote">Quote</Link>
    <Link to="./calculator">Calculator</Link>
  </nav>
);

export default Nav;
