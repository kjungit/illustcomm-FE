import ArtistItem from "../../../../common/ArtistItem";
import {
  ArtistContentsWrapper,
  ArtistList,
  ArtistTitle,
  ArtistWrapper,
} from "./style";

function ArtistContents() {
  return (
    <ArtistWrapper>
      <ArtistTitle>Artist List</ArtistTitle>
      <ArtistContentsWrapper>
        <ArtistList>
          {Array.from({ length: 12 }).map((_, index) => {
            return (
              <ArtistItem
                key={index}
                src={"../public/basic.jpeg"}
                alt={"logo"}
                username={"username"}
                width={300}
              />
            );
          })}
        </ArtistList>
      </ArtistContentsWrapper>
    </ArtistWrapper>
  );
}

export default ArtistContents;
