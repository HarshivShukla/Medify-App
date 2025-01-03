import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Medify
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/search-results">Find Hospitals</Link>
          </li>
          <li>
            <Link to="/my-bookings">My Bookings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;