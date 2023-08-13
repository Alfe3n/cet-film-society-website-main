import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex Navbar justify-content-end md:px-5 font-outfit">
      <div className="navbar-links d-flex">
        <Link to="/">
          <div className="navbar-link active-nav">Home</div>
        </Link>
        <Link to="/about">
          <div className="navbar-link">About</div>
        </Link>
        <Link to="/reviews">
          <div className="navbar-link">Reviews</div>
        </Link>
        <div className="navbar-link">Rangam</div>
        <div className="navbar-link">Activities</div>
        <div className="navbar-link">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
