import MainBanner from "./components/MainBanner";
import MainNewPosts from "./components/MainNewPosts";
import AutherPostList from "./components/AutherPostList";
import { Linkbar, MainWrapper } from "./styled";
import EventBanner from "./components/EventBanner";

function MainPage() {
  return (
    <MainWrapper>
      <MainBanner />
      <Linkbar />
      <MainNewPosts></MainNewPosts>
      <Linkbar />
      <EventBanner />
      <Linkbar />
      <AutherPostList></AutherPostList>
    </MainWrapper>
  );
}

export default MainPage;
