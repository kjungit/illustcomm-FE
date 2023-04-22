import React from "react";
import EventBanner from "../../common/EventBanner";
import styled from "styled-components";
import TopArtContents from "./components/TopArtistContents";
import ArtistContents from "./components/ArtistContents";
import { MainArtLab } from "./style";

function ArtLabPage() {
  return (
    <MainArtLab>
      <EventBanner src={"../public/artlab-banner.jpeg"} alt={"banner"} />
      <TopArtContents />
      <ArtistContents />
    </MainArtLab>
  );
}

export default ArtLabPage;
