import styled from "styled-components";

const MainBannerWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
`;
const LeftWrapper = styled.div`
  img {
    padding-top: 10px;
    height: 800px;
  }
`;
const RightWrapper = styled.div`
  position: relative;
  .image-1 {
    position: absolute;
    right: 100px;
    display: block;
    height: 60%;
    border: 10px solid #fff;
    margin-top: 40px;
  }
  .image-2 {
    height: 60%;
    position: absolute;
    z-index: 1;
    top: 200px;
    border: 10px solid #fff;
    right: 300px;
  }
`;

function MainBanner() {
  return (
    <MainBannerWrapper>
      <LeftWrapper>
        <img src="/mainfont.png" alt="" />
      </LeftWrapper>
      <RightWrapper>
        <img className="image-1" src="/mainbanner_1.jpeg" alt="" />
        <img className="image-2" src="/mainbanner_2.jpeg" alt="" />
      </RightWrapper>
    </MainBannerWrapper>
  );
}

export default MainBanner;
