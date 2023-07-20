import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostItemWrapper = styled.div`
  max-width: 400px;
  color: #fff;
  padding: 10px;
`;

export const PostTopWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 16px 0;
`;

export const ProfileImg = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export const PostUserName = styled.div`
  font-size: 22px;
  margin-left: 14px;
`;

export const PostPicWrapper = styled(Link)`
  max-width: 300px;
`;

export const PostImg = styled.img`
  width: 420px;
  border: 5px solid #fff;
`;

export const PostIconWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 30px;
  & > svg {
    margin-right: 10px;
    cursor: pointer;
  }
  margin: 10px 0 6px;
`;

export const CommentLink = styled(Link)``;

export const PostLikeCount = styled.div`
  font-size: 20px;
`;

export const PostCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 10px;
`;

export const PostCommentUserId = styled.div`
  font-size: 20px;
`;

export const PostCommentContent = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: 200;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PostCommentView = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 6px 0;
`;

export const PostWriteWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  cursor: pointer;
`;

export const MyProfile = styled.img`
  width: 30px;
  border-radius: 50%;
`;

export const PostWrite = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  font-weight: 300;
`;
