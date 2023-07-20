import PostItem from "../../components/common/PostItem";
import Masonry from "react-masonry-css";
import { PicLabWrapper } from "./style";
import { getPosts } from "../../apis/services/Post";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { PostResponse } from "../../interface/Post";

const breakpointBlogPostColumnsObj = {
  default: 2,
  1200: 1,
};

function PicLabPage() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<PostResponse[], AxiosError>("posts", getPosts);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || !posts) {
    return <div>error...</div>;
  }

  const arrPosts = posts.sort((a, b) => a.id - a.id).reverse();
  return (
    <PicLabWrapper>
      <Masonry
        breakpointCols={breakpointBlogPostColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
      >
        {arrPosts.map((post) => {
          return (
            <PostItem
              key={post.id}
              post={{
                id: post.id,
                body: post.body,
                image: post.image,
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

export default PicLabPage;
