import { AiOutlineMessage } from "react-icons/ai";
import {
  MyProfile,
  PostCommentContent,
  PostCommentUserId,
  PostCommentView,
  PostCommentWrapper,
  PostIconWrapper,
  PostItemWrapper,
  PostLikeCount,
  PostPicWrapper,
  PostTopWrapper,
  PostUserName,
  PostWrite,
  PostWriteWrapper,
  ProfileImg,
  PostImg,
  CommentLink,
} from "./style";
import { useUserDataStore } from "../../../store";
import Like from "../Like";
import React from "react";
import { PostItemProps } from "./interface";

function PostItem({
  post: { id, body, image, alt, likes, comments, author },
}: PostItemProps) {
  const { userData } = useUserDataStore();
  const like = likes.some((like) => like.user.id === userData.id);
  return (
    <PostItemWrapper>
      <PostTopWrapper>
        <ProfileImg src={author.profileImage} alt={alt} />
        <PostUserName>{author.username}</PostUserName>
      </PostTopWrapper>
      <PostPicWrapper to={"/piclab/" + id} state={id}>
        <PostImg src={image}></PostImg>
      </PostPicWrapper>
      <PostIconWrapper>
        <Like postid={id} isMyLiked={like} />
        <CommentLink to={"/piclab/" + id} state={id}>
          <AiOutlineMessage />
        </CommentLink>
      </PostIconWrapper>
      <PostLikeCount>좋아요 {likes.length}개</PostLikeCount>
      <PostCommentWrapper>
        <PostCommentUserId>{author.username}</PostCommentUserId>
        <PostCommentContent>{body}</PostCommentContent>
      </PostCommentWrapper>
      <PostCommentView>댓글 {comments}개 모두 보기</PostCommentView>
      <PostWriteWrapper>
        <MyProfile src={userData.profileImage}></MyProfile>
        <PostWrite to={"/piclab/" + id} state={id}>
          댓글달기...
        </PostWrite>
      </PostWriteWrapper>
    </PostItemWrapper>
  );
}

export default React.memo(PostItem);
