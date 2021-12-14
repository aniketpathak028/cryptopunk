import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="punk-logo" className="punkLogo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search-bar-icon" />
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Collection, item or user..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchLogoContainer">
          <img src={themeSwitchIcon} alt="theme-switch-icon" />
        </div>
        <div className="loginBtn">GET IN</div>
      </div>
    </div>
  );
}

export default Header;
