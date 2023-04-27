import styled from "styled-components";

export const MainBannerWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
`;
export const LeftWrapper = styled.div`
  img {
    padding-top: 10px;
    height: 800px;
  }
`;
export const RightWrapper = styled.div`
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
