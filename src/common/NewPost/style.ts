import styled from "styled-components";

export const PostWrapper = styled.div``;

export const PostImgWrapper = styled.div`
  margin: 0 10px;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
  img {
    ${(props) => props.width && `width: ${props.width}px`}
    border: 10px solid #fff;
  }
  &:hover {
    .parent {
      background-color: rgb(35, 35, 35, 0.9);
      .icon {
        font-size: 30px;
        color: #fff;
        display: flex;
        margin-right: 10px;
      }
    }
  }
`;

export const BottomWrapper = styled.div`
  transition: all 0.3s;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0px;
`;
