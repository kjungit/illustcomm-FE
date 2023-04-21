import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
`;
const NavbarTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  height: auto;
  padding: 0 40px;
`;
const NavbarLink = styled(NavLink)`
  min-width: 60px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  padding: 10px 0 10px;
  &.active {
    border-bottom: 3px solid #fff;
  }
`;

const NavbarBottom = styled.div`
  border-top: 1px solid #4b4b4b;
  width: 100%;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTop>
        <NavbarLink to="/">
          <span>MAIN</span>
        </NavbarLink>
        <NavbarLink to="/artLab">
          <span>ART LAB</span>
        </NavbarLink>
        <NavbarLink to="/picLab">
          <span>PIC LAB</span>
        </NavbarLink>
        <NavbarLink to="/life">
          <span>LIFE</span>
        </NavbarLink>
      </NavbarTop>
      <NavbarBottom></NavbarBottom>
    </NavbarContainer>
  );
}

export default Navbar;
