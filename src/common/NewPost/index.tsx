import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { PostWrapper } from "./style";
import { PostImgWrapper } from "./style";
import { BottomWrapper } from "./style";

interface NewPostProps {
  width: number;
  src: string;
  alt: string;
}

function NewPost({ width, src, alt }: NewPostProps) {
  return (
    <PostWrapper>
      <PostImgWrapper>
        <img width={width} src={src} alt={alt} />
        <BottomWrapper className="parent">
          <AiFillHeart className="icon" />
        </BottomWrapper>
      </PostImgWrapper>
    </PostWrapper>
  );
}

export default NewPost;
