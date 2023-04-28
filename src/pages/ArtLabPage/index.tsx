import ArtistContents from "./components/ArtistContents";
import Banner from "./components/Banner";
import { MainArtLab } from "./style";

function ArtLabPage() {
  return (
    <MainArtLab>
      <Banner />
      <ArtistContents />
    </MainArtLab>
  );
}

export default ArtLabPage;
