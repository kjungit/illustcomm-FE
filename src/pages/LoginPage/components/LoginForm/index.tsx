import {
  Alert,
  SignEmailInput,
  SignFormWrapper,
  SignInButton,
  SignPassWordInput,
  SignUpButton,
} from "./style";
import { useLoginStore } from "../../../../store";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginFormProps, LoginInputs } from "../../interface";

function LoginForm({ mutate, isError }: LoginFormProps) {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useLoginStore();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    setFocus,
  } = useForm<LoginInputs>();

  const onSubmit = (data: LoginInputs) => {
    mutate(data);
    setIsLogin(!isLogin);
  };

  setFocus("email");

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <SignFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SignEmailInput
          id="email"
          type="text"
          placeholder="이메일"
          aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <Alert role="alert">{errors.email.message}</Alert>}
        <SignPassWordInput
          id="password"
          type="password"
          placeholder="비밀번호"
          aria-invalid={
            !isDirty ? undefined : errors.password ? "true" : "false"
          }
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
        />{" "}
        {errors.password && (
          <Alert role="alert">{errors.password.message}</Alert>
        )}
        {isError && <Alert>로그인 정보가 일치하지 않습니다.</Alert>}
        <SignInButton type="submit" disabled={isSubmitting}>
          로그인
        </SignInButton>
        <SignUpButton onClick={navigateToSignUp}>회원가입</SignUpButton>
      </SignFormWrapper>
    </>
  );
}

export default LoginForm;
