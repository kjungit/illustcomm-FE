import PostItem from "../../common/PostItem";
import Masonry from "react-masonry-css";
import { PicLabWrapper } from "./style";
import { getPosts } from "../../apis/services/Post";
import { useQuery } from "react-query";
import { PostItemProps } from "../../common/PostItem/interface";

const breakpointBlogPostColumnsObj = {
  default: 2,
  1200: 1,
};

function PicLabPage() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery("posts", getPosts, {
    onSuccess: (data) => {
      data
        .sort((a: any, b: any) => {
          return a.updatedAt - b.updatedAt;
        })
        .reverse();
    },
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || !posts) {
    return <div>error...</div>;
  }

  return (
    <PicLabWrapper>
      <Masonry
        breakpointCols={breakpointBlogPostColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
      >
        {posts.map((post) => {
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

export default PicLabPage;
