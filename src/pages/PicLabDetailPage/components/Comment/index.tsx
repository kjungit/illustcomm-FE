import { useMutation, useQueryClient } from "react-query";
import { deleteComment } from "../../../../apis/services/Comment";
import {
  CommentAuthor,
  CommentBody,
  CommentButton,
  CommentButtonWrapper,
  CommentContent,
  CommentItem,
  CommentProfile,
} from "./style";
import { useUserDataStore } from "../../../../store";
import { CommentProps } from "../../../../interface/Post";

function Comment({ comment }: { comment: CommentProps }) {
  const queryClient = useQueryClient();
  const { userData } = useUserDataStore();
  const { mutate } = useMutation(deleteComment, {
    onSuccess: (data) => {
      queryClient.refetchQueries("post");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onClickDelete = () => {
    mutate(comment.id);
  };
  const isMyComment = comment.author.id === userData.id;
  return (
    <CommentItem>
      <CommentProfile src={comment.author.profileImage}></CommentProfile>
      <CommentBody>
        <CommentAuthor>{comment.author.username}</CommentAuthor>
        <CommentContent>{comment.body}</CommentContent>
      </CommentBody>
      <CommentButtonWrapper>
        {isMyComment && (
          <CommentButton onClick={onClickDelete}>삭제</CommentButton>
        )}
      </CommentButtonWrapper>
    </CommentItem>
  );
}

export default Comment;
