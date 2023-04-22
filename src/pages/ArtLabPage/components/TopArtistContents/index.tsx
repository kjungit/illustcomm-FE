import ArtistItem from "../../../../common/ArtistItem";
import { TopArtList, TopArtTitle, TopArtWrapper } from "./style";

function TopArtContents() {
  return (
    <TopArtWrapper>
      <TopArtTitle>Top10 Artists</TopArtTitle>
      <TopArtList>
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <ArtistItem
              key={index}
              src={"../public/basic.jpeg"}
              alt={"logo"}
              username={"username"}
              width={180}
            />
          );
        })}
      </TopArtList>
    </TopArtWrapper>
  );
}

export default TopArtContents;
