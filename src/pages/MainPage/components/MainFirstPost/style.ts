import styled from "styled-components";

export const PostImgWrapper = styled.div`
  width: 600px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding-right: 10px;
  img {
    width: 600px;
    border: 10px solid #fff;
    overflow: hidden;
  }
  height: auto;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px;
  background-color: rgb(35, 35, 35, 0.8);
  border-radius: 10px;
  position: absolute;
  bottom: 30px;
`;

export const Title = styled.div`
  font-size: 20px;
  color: #fff;
`;
