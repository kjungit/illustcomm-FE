import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { createPost } from "../../apis/services/Post";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  CreatePostWrapper,
  CreateTitle,
  LeftWrapper,
  PostBodyInput,
  PostButton,
  PostTitleInput,
  PostWrapper,
  PreImage,
  ProfileInput,
  RightWrapper,
  UploadButton,
} from "./style";

interface CreatePostProps {
  title: string;
  body: string;
  image: FileList;
}

function CreatePostPage() {
  const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();

  const { mutate } = useMutation(createPost, {
    onSuccess: (data) => {
      console.log(data);
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
  } = useForm<CreatePostProps>();

  setFocus("title");
  const avatar = watch("image");

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setImageSrc(URL.createObjectURL(file));
    }
  }, [avatar]);

  const onSubmitPost = (data: CreatePostProps) => {
    const { title, body, image } = data;
    mutate({
      title,
      body,
      image: image[0],
    });
    navigate("/mylab");
  };

  return (
    <CreatePostWrapper>
      <CreateTitle>Create Illuster</CreateTitle>
      <PostWrapper onSubmit={handleSubmit(onSubmitPost)}>
        <LeftWrapper>
          {
            <UploadButton htmlFor="image">
              <PreImage src={imageSrc || "/nopic.jpg"} alt="preview-img" />
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
    </CreatePostWrapper>
  );
}

export default CreatePostPage;
