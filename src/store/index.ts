import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  LoginResStateSet,
  LoginState,
  ModalPostIdState,
  ModalState,
} from "./interface";

export const useLoginStore = create(
  persist<LoginState>(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin) => set({ isLogin }),
    }),
    {
      name: "login",
      getStorage: () => localStorage,
    }
  )
);

// 사용자 정보 저장
export const useUserDataStore = create(
  persist<LoginResStateSet>(
    (set) => ({
      userData: {
        id: 0,
        email: "",
        username: "",
        profileImage: "../public/noprofile.png",
      },
      setUserData: (userData) => set({ userData }),
    }),
    {
      name: "userData",
      getStorage: () => localStorage,
    }
  )
);

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => set({ isModalOpen: isModalOpen }),
}));

export const useMadalIdStore = create<ModalPostIdState>((set) => ({
  postId: 0,
  setPostId: (postId) => set({ postId: postId }),
}));
