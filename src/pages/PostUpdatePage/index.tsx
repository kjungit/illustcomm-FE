import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePost } from "../../apis/services/Post";
import { useForm } from "react-hook-form";
import {
  Alert,
  LeftWrapper,
  PostBodyInput,
  PostButton,
  PostTitleInput,
  PostWrapper,
  PreImage,
  ProfileInput,
  RightWrapper,
  UpdatePostWrapper,
  UpdateTitle,
  UploadButton,
} from "./style";

interface UpdatePostProps {
  title: string;
  body: string;
  image: FileList;
}

function PostUpdatePage() {
  const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const { mutate } = useMutation(updatePost, {
    onSuccess: (data) => {
      queryClient.refetchQueries("posts");
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    watch,
    setFocus,
  } = useForm<UpdatePostProps>();

  setFocus("title");

  const avatar = watch("image");

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setImageSrc(URL.createObjectURL(file));
    }
  }, [avatar]);

  const onSubmitPost = (data: UpdatePostProps) => {
    const { title, body, image } = data;
    mutate({
      title,
      body,
      image: image[0],
      postId: location.state,
    });
    navigate("/mylab");
  };
  return (
    <UpdatePostWrapper>
      <UpdateTitle>Update Illuster</UpdateTitle>
      <PostWrapper onSubmit={handleSubmit(onSubmitPost)}>
        <LeftWrapper>
          {
            <UploadButton htmlFor="image">
              <PreImage
                src={imageSrc || location.state.image}
                alt="preview-img"
              />
            </UploadButton>
          }
          <ProfileInput
            {...register("image")}
            id="image"
            type="file"
            accept="image/*"
            className="hidden"
          ></ProfileInput>
        </LeftWrapper>
        <RightWrapper>
          <PostTitleInput
            id="title"
            type="text"
            defaultValue={location.state.title}
            placeholder="작품 제목"
            aria-invalid={
              !isDirty ? undefined : errors.title ? "true" : "false"
            }
            {...register("title", {
              required: "작품이름은 필수 입력입니다.",
            })}
          />
          {errors.title && <Alert role="alert">{errors.title.message}</Alert>}
          <PostBodyInput
            id="body"
            defaultValue={location.state.body}
            placeholder="작품 설명"
            aria-invalid={!isDirty ? undefined : errors.body ? "true" : "false"}
            {...register("body", {
              required: "작품이름은 필수 입력입니다.",
            })}
          />
          {errors.body && <Alert role="alert">{errors.body.message}</Alert>}
          <PostButton>입력완료</PostButton>
        </RightWrapper>
      </PostWrapper>
    </UpdatePostWrapper>
  );
}

export default PostUpdatePage;
