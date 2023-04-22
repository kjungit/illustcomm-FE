import MainFirstPost from "../MainFirstPost";
import NewPost from "../../../../common/NewPost";
import {
  MainNewPostsTitle,
  MainNewPostsWrapper,
  MainPostsWrapper,
  NewMainPost,
  NewPostList,
} from "./style";

const POST_SIZE = 220;

function MainNewPosts() {
  return (
    <MainNewPostsWrapper>
      <MainNewPostsTitle>
        <span>New</span>
      </MainNewPostsTitle>
      <MainPostsWrapper>
        <NewMainPost>
          <MainFirstPost></MainFirstPost>
        </NewMainPost>
        <NewPostList>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
          <NewPost
            width={POST_SIZE}
            src={"../public/basic.jpeg"}
            alt={"img"}
          ></NewPost>
        </NewPostList>
      </MainPostsWrapper>
    </MainNewPostsWrapper>
  );
}

export default MainNewPosts;
