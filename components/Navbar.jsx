import React, {useState} from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {

    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }
  return (
    <div className="navbar">
      <div className="navbar_nav">
        <div className="navbar_nav-logo">
          <img src="Group 1.png" alt="" />
        </div>

        <div className="navbar_nav_mobile" onClick={handleMenu}>
        <div htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </div>
        </div>

        <div className={menuOpen ? 'navbar_nav-menu menu_show' : 'navbar_nav-menu'}>
          <div className="link">
            <a href="#">Home</a>
          </div>
          <div className="link">
            <a href="#">Our Services</a>
          </div>
          <div className="link">
            <a href="#">Packages</a>
          </div>
          <div className="link">
            <a href="#">About Us</a>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
