import {
  PostRequest,
  PostResponse,
  PostUpdateRequest,
} from "../../interface/Post";
import { axiosInstance } from "../axios";

export const getPosts = async () => {
  const { data } = await axiosInstance().get<PostResponse[]>("/posts");
  return data;
};

export const getPost = async (id: number) => {
  const { data } = await axiosInstance().get<PostResponse>(`/posts/${id}`);
  return data;
};

export const createPost = async (post: PostRequest) => {
  const formData = new FormData();
  formData.append("title", post.title);
  formData.append("body", post.body);
  formData.append("image", post.image);
  const { data } = await axiosInstance({ multi: true }).post<PostResponse>(
    "/posts",
    formData
  );
  return data;
};

export const updatePost = async (post: PostUpdateRequest) => {
  const formData = new FormData();
  console.log(post.image);
  formData.append("title", post.title);
  formData.append("body", post.body);
  formData.append("image", post.image);
  const { data } = await axiosInstance({ multi: true }).put(
    `/posts/${post.postId.id}`,
    post
  );
  return data;
};

export const deletePost = async (id: number) => {
  const { data } = await axiosInstance().delete(`/posts/${id}`);
  return data;
};

export const likePost = async (id: number) => {
  const { data } = await axiosInstance().post(`/posts/like/${id}`);
  return data;
};
