import { PostImg, PostWrapper, Title } from "./style";
import { PostImgWrapper } from "./style";
import { BottomWrapper } from "./style";
interface PostItemProps {
  title: string;
  src: string;
  alt: string;
}

function NewPost({ src, alt, title }: PostItemProps) {
  return (
    <PostWrapper>
      <PostImgWrapper>
        <PostImg src={src} alt={alt} />
        <BottomWrapper className="parent">
          <Title>{title}</Title>
        </BottomWrapper>
      </PostImgWrapper>
    </PostWrapper>
  );
}

export default NewPost;
