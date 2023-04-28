export interface LoginState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export interface LoginResState {
  id: number;
  email: string;
  username: string;
  profileImage?: string;
}

export interface LoginResStateSet {
  userData: LoginResState;
  setUserData: (userdata: LoginResState) => void;
}

export interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export interface ModalPostIdState {
  postId: number;
  setPostId: (postId: number) => void;
}
