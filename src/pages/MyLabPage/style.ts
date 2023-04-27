import { Link } from "react-router-dom";
import styled from "styled-components";

export const PicLabWrapper = styled.div`
  .my-masonry-grid {
    margin-right: 80px;
    display: flex;
    width: auto;
  }
  .my-masonry-grid-column {
    padding: 0 60px;
    background-clip: padding-box;
  }
  .my-masonry-grid-column > li {
    margin-bottom: 130px;
  }
`;

export const CreatePostButton = styled(Link)`
  padding: 20px;
  color: #fff;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  border: 1px solid #000;

  font-size: 20px;
  font-weight: 700;

  &:hover {
    background-color: #000;
    border: 1px solid #fff;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 20px;
`;

export const CreateButton = styled.div`
  padding: 20px;
  color: #fff;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  border: 1px solid #1a1a1a;

  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #000;
    border: 1px solid #fff;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 10px;
`;
