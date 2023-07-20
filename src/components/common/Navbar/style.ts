import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
`;
export const NavbarTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  height: auto;
  padding: 0 40px;
`;
export const NavbarLink = styled(NavLink)`
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

export const NavbarBottom = styled.div`
  border-top: 1px solid #4b4b4b;
  width: 100%;
`;
