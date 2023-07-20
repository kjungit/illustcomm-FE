import { Route, Routes } from "react-router-dom";
import LifePage from "../pages/LifePage";
import MainPage from "../pages/MainPage";
import ArtLabPage from "../pages/ArtLabPage";
import PicLabPage from "../pages/PicLabPage";
import Header from "../components/Header";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyLabPage from "../pages/MyLabPage";
import CreatePostPage from "../pages/CreatePost";
import ProtectedRouter from "./ProtectedRouter";
import PicLabDetailPage from "../pages/PicLabDetailPage";
import PostUpdatePage from "../pages/PostUpdatePage";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/artlab" element={<ArtLabPage />} />
        <Route path="/piclab" element={<PicLabPage />} />
        <Route path="/piclab/:postid" element={<PicLabDetailPage />} />
        <Route path="/life" element={<LifePage />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/mylab" element={<MyLabPage />} />
          <Route path="/mylab/createpost" element={<CreatePostPage />} />
          <Route path="/mylab/update/:id" element={<PostUpdatePage />} />
        </Route>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
