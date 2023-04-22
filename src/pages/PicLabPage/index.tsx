import PostItem from "../../common/PostItem";
import Masonry from "react-masonry-css";
import { PicLabWrapper } from "./style";

const breakpointBlogPostColumnsObj = {
  default: 2,
  1200: 1,
};

function PicLabPage() {
  return (
    <PicLabWrapper>
      <Masonry
        breakpointCols={breakpointBlogPostColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
      >
        <PostItem src={"../public/mainbanner_1.jpeg"} />
        <PostItem src={"../public/basic.jpeg"} />
        <PostItem src={"../public/basic.jpeg"} />
        <PostItem src={"../public/mainbanner_2.jpeg"} />
        <PostItem src={"../public/basic.jpeg"} />
        <PostItem src={"../public/mainbanner_1.jpeg"} />
      </Masonry>
    </PicLabWrapper>
  );
}

export default PicLabPage;
