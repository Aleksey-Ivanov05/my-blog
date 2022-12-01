import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between mt-3">
      <h4>My blog</h4>
      <div className="row">
        <NavLink to="/" className="col">Home</NavLink>
        <NavLink to="/new-post" className="col">Add</NavLink>
        <NavLink to="/about" className="col">About</NavLink>
        <NavLink to="/contacts" className="col">Add</NavLink>
      </div>
    </div>
  );
};

export default Navbar;