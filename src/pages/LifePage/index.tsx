import React from "react";
import styled from "styled-components";
import Collaboration from "./components/Collaboration";
import Exhibition from "./components/Exhibition";
import EventBanner from "../MainPage/components/EventBanner";

const LifePageWrapper = styled.div``;

function LifePage() {
  return (
    <LifePageWrapper>
      <EventBanner></EventBanner>
      <Collaboration />
      <Exhibition />
    </LifePageWrapper>
  );
}

export default LifePage;
