import React, { useRef } from "react";
import "./Navbar.css";
import LOGO from "../../assets/LOGO.png";
import menu_icon from "../../assets/menu_open.svg";
import close_menu from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRefe = useRef();
  const openMenu = () => {
    menuRefe.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRefe.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="logoImg" src={LOGO} alt="LOGO" />
      <img
        src={menu_icon}
        alt="open menu icon"
        onClick={openMenu}
        className="open-mobile-nav"
      />
      <div className="nav-menu">
        <ul ref={menuRefe}>
          <img
            src={close_menu}
            alt="close menu icon"
            onClick={closeMenu}
            className="close-mobile-nav"
          />
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
