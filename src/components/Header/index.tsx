import Layout from "../../common/Layout";
import TopProfile from "../ProfileIcon";
import { HeaderWrapper, Logo, MyProfile, TopWrapeer } from "./style";

function Header() {
  return (
    <HeaderWrapper>
      <TopWrapeer>
        <Logo>
          <img src="../illust-logo-white.png" alt="" />
        </Logo>
        <MyProfile>
          <TopProfile></TopProfile>
        </MyProfile>
      </TopWrapeer>
      <Layout />
    </HeaderWrapper>
  );
}

export default Header;
