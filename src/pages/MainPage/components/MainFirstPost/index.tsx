import { BottomWrapper, PostImgWrapper, Title } from "./style";

function MainFirstPost() {
  return (
    <>
      <PostImgWrapper>
        <img src="../public/basic.jpeg" alt="" />
        <BottomWrapper>
          <Title>다른 작품 보기</Title>
        </BottomWrapper>
      </PostImgWrapper>
    </>
  );
}

export default MainFirstPost;
