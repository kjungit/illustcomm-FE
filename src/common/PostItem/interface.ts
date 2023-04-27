export interface PostItemProps {
  key: number;
  post: {
    id: number;
    body: string;
    src: any;
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
