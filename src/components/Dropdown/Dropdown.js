import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { colors } from "../../styles/theme";
import { navLinks, personalInfo } from "../../data/portfolioData";

const Sidebar = styled.div`
  background: ${colors.bg};
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 999;
  transition: 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  top: 0;
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: ${colors.text};
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const NavLink = styled(ScrollLink)`
  color: ${colors.text};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${colors.accentLight};
  }
`;

const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <Sidebar isOpen={isOpen}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            onClick={toggle}
            to={link.to}
            smooth={true}
            offset={-80}
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
          onClick={toggle}
        >
          Resume
        </a>
      </NavBtn>
    </Sidebar>
  );
}

export default Dropdown;
