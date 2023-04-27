import PostItem from "../../common/PostItem";
import Masonry from "react-masonry-css";
import { CreatePostButton, PicLabWrapper, TopWrapper } from "./style";
import { getPosts } from "../../apis/services/Post";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useUserDataStore } from "../../store";
import { useLocation } from "react-router-dom";

const breakpointBlogPostColumnsObj = {
  default: 2,
  1200: 1,
};

function MyLabPage() {
  const location = useLocation();
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = useQuery("posts", getPosts);

  // 현재 유저 데이터
  const { userData } = useUserDataStore();

  useEffect(() => {
    if (location.pathname === "/malab") {
      // 경로가 변경되면 데이터 다시 가져오기
      refetch();
    }
  }, [location.pathname, refetch]);
  const filteredData = posts?.filter(
    (post) => post.author.email === userData.email
  );
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || !posts) {
    return <div>error...</div>;
  }

  return (
    <PicLabWrapper>
      <TopWrapper>
        <CreatePostButton to={"/mylab/createpost"}>
          Create My Illuster
        </CreatePostButton>
      </TopWrapper>
      <Masonry
        breakpointCols={breakpointBlogPostColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
      >
        {filteredData?.map((post) => {
          return (
            <PostItem
              key={post.id}
              post={{
                id: post.id,
                body: post.body,
                src: post.image,
                alt: post.title,
                likes: post.likes,
                comments: post.comments.length,
                author: post.author,
              }}
            />
          );
        })}
      </Masonry>
    </PicLabWrapper>
  );
}

export default MyLabPage;
