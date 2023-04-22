import MainBanner from "./components/MainBanner";
import MainNewPosts from "./components/MainNewPosts";
import EventBanner from "../../common/EventBanner";
import AutherPostList from "../../componets/AutherPostList";
import { Linkbar, MainWrapper } from "./styled";

function MainPage() {
  return (
    <MainWrapper>
      <MainBanner />
      <Linkbar />
      <MainNewPosts></MainNewPosts>
      <Linkbar />
      <EventBanner></EventBanner>
      <Linkbar />
      <AutherPostList></AutherPostList>
      <Linkbar />
    </MainWrapper>
  );
}

export default MainPage;
