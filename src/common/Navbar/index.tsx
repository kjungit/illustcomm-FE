import { NavLink } from "react-router-dom";
import { NavbarBottom, NavbarContainer, NavbarLink, NavbarTop } from "./style";

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
