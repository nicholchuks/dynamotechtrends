import React from "react";
import "./footer.css";
import logo from "../../assets/img2/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_left">
        <h3>PAGES</h3>
        <h4 className="footer_top_p">About Dynamo Tech Trends</h4>
        <h4 className="footer_top_p2">Contact us</h4>
      </div>
      <div className="footer_middle">
        <h3>FOLLOW US</h3>

        <div className="footer_socials">
          <div className="footer_socials_links">
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
          </div>
        </div>

        <div className="btn">
          <Link>
            <button className="btn_primary">SUBCRIBE</button>
          </Link>
        </div>
      </div>

      <div className="footer_middle2">
        <h3>CATEGORIES</h3>
        <div className="category_link">
          <a href="#green">GREEN HYDROGEN</a>
          <a href="#smart">SMART TECHNOLOGY</a>
          <a href="#solar">SOLAR ENERGY</a>
          <a href="#sustain">SUSTAINABLE BUILDING</a>
        </div>
      </div>
      <div className="footer_bottom">
        <img
          src={logo}
          alt="logo"
          className="footer_logo"
          width="150px"
          height="150px"
        />
        <div className="footer_bottom_p">
          <p className="bottom_p1">
            Discover the latest in solar energy and technology on our blog.
            Explore innovations, trends, and the path to a cleaner future
            powered by the sun.
          </p>
          <p>
            © Copyright 2023 built and managed by{" "}
            <a href="kalu" target="_blank" rel="noopener">
              Chinonso Kalu
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
