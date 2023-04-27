export interface PostRequest {
  title: string;
  body: string;
  image: File;
}

export interface PostUpdateRequest extends PostRequest {
  postId: any;
}

export interface PostResponse extends PostRequest {
  id: number;
  userId?: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  likes: Like[];
  comments: Comment[];
}

export interface Comment {
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
