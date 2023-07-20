import MainFirstPost from "../MainFirstPost";
import NewPost from "../../../../components/common/NewPost";
import {
  MainNewPostsTitle,
  MainNewPostsWrapper,
  MainPostsWrapper,
  NewMainPost,
} from "./style";
import { useQuery } from "react-query";
import { getPosts } from "../../../../apis/services/Post";
import Masonry from "react-masonry-css";

function MainNewPosts() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery("posts", getPosts, {
    onSuccess: (data) => {},
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || !posts) {
    return <div>error...</div>;
  }

  const breakpointBlogPostColumnsObj = {
    default: 2,
    1200: 1,
  };

  return (
    <MainNewPostsWrapper>
      <MainNewPostsTitle>
        <span>New</span>
      </MainNewPostsTitle>
      <MainPostsWrapper>
        <NewMainPost>
          <MainFirstPost></MainFirstPost>
        </NewMainPost>
        <Masonry
          breakpointCols={breakpointBlogPostColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid-column"
        >
          {posts.map((post) => {
            return (
              <NewPost
                key={post.id}
                title={post.title}
                src={post.image}
                alt={post.title}
              ></NewPost>
            );
          })}
        </Masonry>
      </MainPostsWrapper>
    </MainNewPostsWrapper>
  );
}

export default MainNewPosts;
