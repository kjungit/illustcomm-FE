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

interface Props {
  comment: any;
}

function Comment({ comment }: Props) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteComment, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.refetchQueries("post");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickDelete = () => {
    mutate(comment.id);
  };

  return (
    <CommentItem>
      <CommentProfile src={comment.author.profileImage}></CommentProfile>
      <CommentBody>
        <CommentAuthor>{comment.author.username}</CommentAuthor>
        <CommentContent>{comment.body}</CommentContent>
      </CommentBody>
      <CommentButtonWrapper>
        <CommentButton onClick={onClickDelete}>삭제</CommentButton>
      </CommentButtonWrapper>
    </CommentItem>
  );
}

export default Comment;
