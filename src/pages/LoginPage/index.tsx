import React from "react";
import { useMutation } from "react-query";
import { getUser, login } from "../../apis/services/Auth";
import { setCookie } from "../../utils/cookies";
import { UseMutateFunction } from "react-query";
import { AxiosError } from "axios";
import { AuthResponse, LoginRequest } from "../../interface/Auth";
import { useNavigate } from "react-router-dom";
import { useLoginStore, useUserDataStore } from "../../store";
import { useForm } from "react-hook-form";
import { SignInTitle } from "./style";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  const navigate = useNavigate();
  const { setUserData } = useUserDataStore();
  const { mutate: mutateLogin, isError } = useMutation(login, {
    onSuccess: (data) => {
      setCookie("accessToken", data.accessToken, {
        path: "/",
        maxAge: data.content.exp - data.content.iat,
      });
      setUserData(data.content);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  return (
    <>
      <SignInTitle>SIGN IN</SignInTitle>
      <LoginForm mutate={mutateLogin} isError={isError}></LoginForm>
    </>
  );
}

export default LoginPage;
