import styled from "styled-components";

export const PostWrapper = styled.div``;

export const PostImgWrapper = styled.div`
  margin: 20px 10px;
  position: relative;
  overflow: hidden;
  border: 10px solid #fff;
  &:hover {
    .parent {
      background-color: rgb(35, 35, 35, 0.9);
      .icon {
        font-size: 30px;
        color: #fff;
      }
      div {
        width: 160px;
        font-size: 20px;
        display: block;
        color: #fff;
        margin-right: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const PostImg = styled.img`
  display: block;
  width: 100%;
`;

export const BottomWrapper = styled.div`
  transition: all 0.3s;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-size: 0px;
`;

export const Title = styled.div`
  font-weight: 800;
`;
