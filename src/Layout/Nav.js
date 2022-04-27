import React, { useState } from "react";
import close from "../assets/image/close.svg";
import searchLogo from "../assets/image/Search.svg";
import logo from "../assets/image/logo-8.svg";
import menu from "../assets/image/menu.svg";
import "./nav.css";

const Nav = () => {
  const [search, setSearch] = useState("input");
  const [navColap, setNavColap] = useState("nav-collapse-section");

  const inputSearchIon = () => {
    if (search === "input input-collapse") {
      setSearch("input");
    } else {
      setSearch("input input-collapse");
    }
  };

  const navBarMove = () => {
    if (navColap === "nav-col nav-collapse-section") {
      setNavColap("nav-collapse-section");
    } else {
      setNavColap("nav-col nav-collapse-section");
    }
  };

  return (
    <div className="nav">
      <div className="navbar">
        <img
          src={navColap === "nav-col nav-collapse-section" ? close : menu}
          alt="l"
          onClick={navBarMove}
          className="close"
        />
        <img src={logo} alt="l" className="web-logo" />
        <div className="search">
          <input type="text" placeholder="Search" className={search} />
          <img onClick={inputSearchIon} src={searchLogo} alt="l" className="search-icon" />
        </div>
      </div>

      <div className={navColap}>
        <div className="nav-detail">
          <div className="pages-section">
            <ul>
              <li>VR City's Metaverse 101</li>
              <li>stem </li>
              <li>interactive STEM Program</li>
              <li>Customized STEM Program</li>
              <li>Virtual Flight Courses</li>
              <li>Most Your Own Courses</li>
            </ul>
          </div>
          <div className="pages-section">
            <ul>
              <li>About US</li>
              <li>Bsog</li>
              <li>Map Center</li>
              <li>Find US</li>
              <li>Write Paper</li>
              <li>Context</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
