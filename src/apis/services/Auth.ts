import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  UserPayload,
} from "../../interface/Auth";
import { axiosInstance } from "../axios";
import { User } from "../../interface/Post";

export const login = async (user: LoginRequest) => {
  const { data } = await axiosInstance().post<AuthResponse>(
    "/auth/login",
    user
  );
  return data;
};

export const logout = async () => {
  const { data } = await axiosInstance().post<AuthResponse>("/auth/logout");
  return data;
};

export const signup = async (user: RegisterRequest) => {
  const formData = new FormData();
  formData.append("email", user.email);
  formData.append("password", user.password);
  formData.append("username", user.username);
  formData.append("profileImage", user.profileImage);
  try {
    const { data } = await axiosInstance({ multi: true }).post<AuthResponse>(
      "/auth/register",
      formData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const emailDuplicateCheck = async (email: string) => {
  try {
    const data = await axiosInstance().post(`/auth/emailDuplicateCheck`, {
      email,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const verify = async () => {
  const { data } = await axiosInstance().get<UserPayload>("/auth/verify");
  return data;
};

export const refresh = async () => {
  const { data } = await axiosInstance().get<AuthResponse>("/auth/refresh");
  return data;
};

export const getUsers = async () => {
  const { data } = await axiosInstance().get<User[]>("/auth/users");
  return data;
};

export const getUser = async (userId: number) => {
  const { data } = await axiosInstance().get<User[]>(`/auth/users/${userId}`);
  return data;
};
