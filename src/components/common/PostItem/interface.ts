export interface PostItemProps {
  key: number;
  post: {
    id: number;
    body: string;
    image: string;
    alt: string;
    likes: likesProps[];
    comments: number;
    author: {
      id: number;
      email: string;
      username: string;
      profileImage?: string;
    };
  };
}

export interface likesProps {
  id: number;
  user: {
    id: number;
    username: string;
    profileImage: string;
  };
}
