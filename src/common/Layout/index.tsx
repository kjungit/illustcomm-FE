import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

function Layout() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
    </LayoutWrapper>
  );
}

export default Layout;
