import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_nav">
        <div className="navbar_nav-logo">
          <img src="32 (2).png" alt="" />
        </div>
        <div className="navbar_nav-menu">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Packages</a>
          <a href="#">About us</a>
          <a href="#">Buy now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
