import React, { useState } from "react";
import logo from "../../assets/img2/logo.png";
import "./header.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="nav_left">
          <div className="toggle_div" onClick={toggleMenu}>
            <GiHamburgerMenu
              width="40.44px"
              height="50px"
              className="menu-icon"
            />
          </div>
          <img
            src={logo}
            alt="logo"
            width="150px"
            height="150px"
            className="logo"
          />
        </div>

        <div className="nav_lists">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="socials nav_right">
          <Link to="#">
            <button className="box">
              <FaFacebookF className="icon" />
            </button>
          </Link>

          <Link to="#">
            <button className="box">
              <FaTwitter className="icon" />
            </button>
          </Link>

          <Link to="#">
            <button className="box">
              <FaLinkedinIn className="icon" />
            </button>
          </Link>

          <div className="socials_search">
            <Link to="#">
              <button className="box">
                <BiSearch className="search" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className={`nav_items ${isOpen ? "open" : ""}`}> */}
      <div className="nav_items">
        <ul className={`nav_item ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
