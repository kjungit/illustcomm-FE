import { UseMutateFunction } from "react-query";
import { AuthResponse, LoginRequest } from "../../interface/Auth";
import { AxiosError } from "axios";

export interface LoginFormProps {
  mutate: UseMutateFunction<AuthResponse, AxiosError, LoginRequest>;
  isError: boolean;
}

export interface LoginInputs {
  email: string;
  password: string;
}
