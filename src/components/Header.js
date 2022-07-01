import React from "react";
import logo from "../assets/img/img-logo-vitalinea.png";

import instagram from "../assets/img/img-social-instagram.svg";
import facebook from "../assets/img/img-social-facebook.svg";
import youtube from "../assets/img/img-social-youtube.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="menu-items">
          <li>
            <a href="#">Nuestros Productos</a>
          </li>
          <li>
            <a href="#">Disfruta Cuidarte</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <div className="social-media">
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={instagram} alt="" /></a>
            <a href=""><img src={youtube} alt="" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
