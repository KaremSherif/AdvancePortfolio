import React, { useState } from "react";
import "./header.css";
const Header = () => {
  // toggleMenu
  const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo" title="Karem Sherif">
          KS
        </a>

        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <i className="uil uil-estate uil-icon"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user uil-icon"></i> About
              </a>
            </li>

            {/* <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt uil-icon"></i> Skills
              </a>
            </li> */}

            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="uil uil-briefcase-alt uil-icon"></i> Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="uil uil-scenery uil-icon"></i> Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="uil uil-message uil-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps" title="Menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
