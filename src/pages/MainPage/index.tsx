import React from "react";
import LoginForm from "../../componets/LoginForm";
import LoginPage from "../LoginPage";
import MainBanner from "../../componets/MainBanner";
import styled from "styled-components";

const MainWrapper = styled.div`
  max-width: 1200px;
`;
const Linkbar = styled.div`
  width: 100%;
  border-bottom: 1px solid #4b4b4b;
`;

function MainPage() {
  return (
    <MainWrapper>
      <MainBanner />
      <Linkbar></Linkbar>
    </MainWrapper>
  );
}

export default MainPage;
