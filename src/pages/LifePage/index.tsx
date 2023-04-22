import React from "react";
import styled from "styled-components";
import EventBanner from "../../common/EventBanner";
import Collaboration from "./components/Collaboration";
import Exhibition from "./components/Exhibition";

const LifePageWrapper = styled.div``;

function LifePage() {
  return (
    <LifePageWrapper>
      <EventBanner
        src={"../public/life-banner.png"}
        alt={"banner"}
      ></EventBanner>
      <Collaboration />
      <Exhibition />
    </LifePageWrapper>
  );
}

export default LifePage;
