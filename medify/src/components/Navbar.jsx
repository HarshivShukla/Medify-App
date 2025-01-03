import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo linking to Landing Page */}
        <Link to="/" className="navbar-logo">
          <span>Medify</span>
        </Link>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li>
            <Link to="/find-doctors" className="navbar-link">
              Find Doctors
            </Link>
          </li>
          <li>
            <Link to="/find-hospitals" className="navbar-link">
              Find Hospitals
            </Link>
          </li>
          <li>
            <Link to="/medicines" className="navbar-link">
              Medicines
            </Link>
          </li>
          <li>
            <Link to="/surgeries" className="navbar-link">
              Surgeries
            </Link>
          </li>
          <li>
            <Link to="/provider-software" className="navbar-link">
              Software for Providers
            </Link>
          </li>
          <li>
            <Link to="/facilities" className="navbar-link">
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/my-bookings" className="navbar-link navbar-my-bookings">
              My Bookings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
