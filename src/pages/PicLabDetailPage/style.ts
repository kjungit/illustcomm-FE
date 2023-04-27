import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailPicWrapper = styled.div`
  width: 1200px;
  color: #fff;
  display: flex;
  flex-direction: column;
`;
export const PicTitle = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  margin: 40px 0 20px;
`;
export const PostWrapper = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
`;
export const LeftWrapper = styled.div`
  width: 50%;
`;
export const PreImage = styled.img`
  width: 100%;
  display: block;
  border: 5px solid #fff;
`;
export const RightWrapper = styled.div`
  width: 50%;
  padding: 0 30px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const AuthorProfile = styled.img`
  width: 50px;
`;

export const AuthorName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;

export const PostTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-left: 10px;
`;
export const PostBody = styled.div`
  font-size: 20px;
  height: 40px;
  padding-left: 10px;
`;

export const PostLikes = styled.div`
  font-size: 20px;
  height: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 10px;
    font-size: 30px;
  }
`;
export const PostCommentWrapper = styled.div`
  width: 100%;
`;

export const CommentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  border-top: 1px solid #fff;
  padding-top: 30px;
`;

export const CommentInputWrapper = styled.form`
  display: flex;
`;
export const CommentInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 0 20px;
  margin-bottom: 10px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
`;
export const CommentSubmitButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
`;

export const TopWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
`;
export const BottomWrapper = styled.div``;

export const PostUpdateButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #e2e2e2;
  }
`;
export const PostDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  margin-left: 10px;
  &:hover {
    background-color: #e2e2e2;
  }
`;
