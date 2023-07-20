import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { deletePost, getPost } from "../../apis/services/Post";
import Comment from "./components/Comment";
import { AiOutlineHeart } from "react-icons/ai";
import { useForm } from "react-hook-form";
import {
  AuthorName,
  AuthorProfile,
  AuthorWrapper,
  CommentInput,
  CommentInputWrapper,
  CommentSubmitButton,
  CommentTitle,
  DetailPicWrapper,
  LeftWrapper,
  PicTitle,
  PostBody,
  PostCommentWrapper,
  PostDeleteButton,
  PostLikes,
  PostTitle,
  PostUpdateButton,
  PostWrapper,
  PreImage,
  RightWrapper,
  TopWrapper,
} from "./style";
import { createComment } from "../../apis/services/Comment";
import { AxiosError } from "axios";
import { Alert } from "../CreatePost/style";
import { useUserDataStore } from "../../store";
import { ButtonWrapper } from "../MyLabPage/style";

interface CreateCommentProps {
  postId: number;
  body: string;
}

interface FormData {
  body: string;
}

function PicLabDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const { userData } = useUserDataStore();
  const {
    data: post,
    error,
    isLoading,
  } = useQuery(["post", location.state], () => getPost(location.state));

  const { mutate } = useMutation(createComment, {
    onSuccess: (data) => {
      queryClient.refetchQueries("post");
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  const { mutate: deleteMutate } = useMutation(deletePost, {
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    reset,
    setFocus,
  } = useForm<CreateCommentProps>();

  setFocus("body");

  const onSubmitPost = (data: FormData) => {
    const { body } = data;
    mutate({
      postId: location.state,
      body,
    });
    reset();
  };

  const onDeletePost = () => {
    deleteMutate(location.state);
    navigate("/mylab");
  };

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  return (
    <DetailPicWrapper>
      <TopWrapper>
        <PicTitle>{post?.title}</PicTitle>
        {userData.id === post?.author.id ? (
          <ButtonWrapper>
            <PostUpdateButton to={`/mylab/update/${post?.id}`} state={post}>
              수정하기
            </PostUpdateButton>
            <PostDeleteButton onClick={onDeletePost}>삭제하기</PostDeleteButton>
          </ButtonWrapper>
        ) : null}
      </TopWrapper>
      <PostWrapper>
        <LeftWrapper>
          <PreImage src={post?.image as string | undefined} alt={post?.title} />
        </LeftWrapper>
        <RightWrapper>
          <AuthorWrapper>
            <AuthorProfile src={post?.author?.profileImage}></AuthorProfile>
            <AuthorName>{post?.author.username}</AuthorName>
          </AuthorWrapper>
          <PostTitle>{post?.title}</PostTitle>
          <PostBody>{post?.body}</PostBody>
          <PostLikes>
            <AiOutlineHeart />
            좋아요 {post?.likes.length}개
          </PostLikes>
          <PostCommentWrapper>
            <CommentTitle> Comments</CommentTitle>
            <CommentInputWrapper onSubmit={handleSubmit(onSubmitPost)}>
              <CommentInput
                id="body"
                placeholder="댓글을 입력해주세요"
                aria-invalid={
                  !isDirty ? undefined : errors.body ? "true" : "false"
                }
                {...register("body", {
                  required: "댓글은 필수 입력입니다.",
                })}
              />
              <CommentSubmitButton>댓글달기</CommentSubmitButton>
            </CommentInputWrapper>
            {errors.body && <Alert role="alert">{errors.body.message}</Alert>}
            {post?.comments.map((comment) => {
              return <Comment comment={comment} key={comment.id} />;
            })}
          </PostCommentWrapper>
        </RightWrapper>
      </PostWrapper>
    </DetailPicWrapper>
  );
}

export default PicLabDetailPage;
