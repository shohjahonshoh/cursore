import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          React CRUD
        </Link>
        <div>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/create-user" className="nav-link">
            Create User
          </Link>
          <Link to="/show-user" className="nav-link">
            Show User
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
