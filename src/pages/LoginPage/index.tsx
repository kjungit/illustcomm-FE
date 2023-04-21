import React from "react";
import LoginForm from "../../componets/LoginForm";
import { useMutation } from "react-query";
import { login } from "../../apis/services/Auth";
import { setCookie } from "../../utils/cookies";
import { AxiosError } from "axios";
import { AuthResponse, LoginRequest } from "../../interface/Auth";

function LoginPage() {
  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      setCookie("accessToken", data.accessToken, {
        path: "/",
        maxAge: data.content.exp - data.content.iat,
      });
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
  return <LoginForm mutate={mutate} />;
}

export default LoginPage;
