import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { navLinks, personalInfo } from "../../data/portfolioData";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <span>CB</span>
        </Logo>
        <NavMenu>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className="menu-item"
              to={link.to}
              smooth={true}
              spy={true}
              offset={-80}
              activeClass="active"
            >
              {link.label}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
