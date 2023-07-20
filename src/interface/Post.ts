export interface PostRequest {
  title: string;
  body: string;
  image: File;
}

export interface PostUpdateRequest {
  postId: {
    id: number;
  };
  title: string;
  body: string;
  image: File;
}
export interface PostResponse {
  title: string;
  body: string;
  image: string;
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  likes: Like[];
  comments: CommentProps[];
}

export interface CommentProps {
  author: Author;
  id: number;
  body: string;
  createdAt: string;
}

export interface Like {
  id: number;
  user: PostUser;
}

export interface PostUser {
  id: number;
  username: string;
  profileImage: string;
}

export interface Author {
  id: number;
  email: string;
  username: string;
  profileImage: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  profileImage: string;
}

export interface CommentRequest {
  postId: number;
  body: string;
}
