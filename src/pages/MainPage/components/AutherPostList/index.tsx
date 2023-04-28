import { useQuery } from "react-query";
import { getPosts } from "../../../../apis/services/Post";
import NewPost from "../../../../common/NewPost";
import { MainLikePostsTitle, PostListWrapper } from "./style";
import Masonry from "react-masonry-css";

function AutherPostList() {
  const { data: posts, error, isLoading } = useQuery("posts", getPosts);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || !posts) {
    return <div>error...</div>;
  }

  const breakpointBlogPostColumnsObj = {
    default: 3,
    1200: 2,
  };

  return (
    <PostListWrapper>
      <MainLikePostsTitle>
        <span>Like</span>
      </MainLikePostsTitle>
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
    </PostListWrapper>
  );
}

export default AutherPostList;
