import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: ${colors.textMuted};
  display: flex;
  font-size: 0.95rem;
  font-weight: 500;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.gradient};
    transition: width 0.3s;
  }

  &:hover {
    color: ${colors.text};
    &::after { width: 100%; }
  }

  &.active {
    color: ${colors.accentLight};
  }
`;

export const Logo = styled(LinkRouter)`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colors.text};
  letter-spacing: -0.5px;

  span {
    background: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${colors.text};
  font-size: 1.6rem;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
