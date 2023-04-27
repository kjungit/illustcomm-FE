import { CommentRequest } from "../../interface/Post";
import { axiosInstance } from "../axios";

export const createComment = async (post: CommentRequest) => {
  const formData = new FormData();
  formData.append("body", post.body);
  const { data } = await axiosInstance().post(
    `/comments/${post.postId}`,
    formData
  );
  return data;
};

export const deleteComment = async (id: number) => {
  const { data } = await axiosInstance().delete(`/comments/${id}`);
  return data;
};
