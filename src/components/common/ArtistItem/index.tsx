import { ArtName, TopArtItem, TopArtItemImg } from "./style";
import React from "react";

interface ArtistItemProps {
  key: number;
  src: string;
  alt: string;
  username: string;
  width: number;
}

function ArtistItem({ src, alt, username, width }: ArtistItemProps) {
  return (
    <TopArtItem>
      <TopArtItemImg src={src} alt={alt} width={width} />
      <ArtName>{username}</ArtName>
    </TopArtItem>
  );
}

export default React.memo(ArtistItem);
