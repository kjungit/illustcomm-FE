import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import {
  Alert,
  EmailCheckButton,
  Emailwrapper,
  Label,
  PreImage,
  ProfileInput,
  RegisterButton,
  RegisterEmailInput,
  RegisterFormWrapper,
  RegisterPassWordCheckInput,
  RegisterPassWordInput,
  RegisterUpTitle,
  RegisterUsernameInput,
  UploadButton,
} from "./style";
import { emailDuplicateCheck, signup } from "../../apis/services/Auth";

interface RegisterInputs {
  email: string;
  username: string;
  password: string;
  profileImage: File[];
}

interface RequestDataProps extends RegisterInputs {
  passwordConfirm: string;
}

function RegisterForm() {
  const [emailCheck, setEmailCheck] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const navigate = useNavigate();

  const { mutate: emailCheckMutation } = useMutation(emailDuplicateCheck, {
    onSuccess: (data) => {
      setEmailCheck(
        data && data.data
          ? "사용 가능한 이메일입니다."
          : "이미 사용중인 이메일입니다."
      );
    },
    onError: (error: AxiosError) => {
      console.log(error);
      setEmailCheck("이메일 중복 검사에 실패했습니다.");
    },
  });

  const { mutate: signupMutation } = useMutation(signup, {
    onSuccess: (data) => {
      if (data) {
        navigate("/signin");
      }
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    getValues,
    watch,
  } = useForm<RequestDataProps>();

  const avatar = watch("profileImage");

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setImageSrc(URL.createObjectURL(file));
    }
  }, [avatar]);

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const onSubmitRegister = (data: RegisterInputs) => {
    const { email, username, password, profileImage } = data;
    signupMutation({
      email,
      username,
      password,
      profileImage: profileImage ? profileImage[0] : "/noprofile.png",
    });
  };

  const onSubmitEmail = (evevt: MouseEvent) => {
    const englishRegex = /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    const emailRegex = /\S+@\S+\.\S+/;
    evevt.preventDefault();
    const email = getValues("email");
    const isEmailValid = emailRegex.test(email);
    const isEnglishValid = englishRegex.test(email);
    if (!isEmailValid || !isEnglishValid) {
      setEmailCheck("이메일 형식에 맞지 않습니다.");
      return;
    }
    setEmailCheck("");
    emailCheckMutation(email);
  };

  return (
    <>
      <RegisterUpTitle>SIGN UP</RegisterUpTitle>
      <Label>* 이메일 주소 확인</Label>
      <RegisterFormWrapper onSubmit={handleSubmit(onSubmitRegister)}>
        <Emailwrapper>
          <RegisterEmailInput
            id="email"
            type="text"
            placeholder="이메일"
            aria-invalid={
              !isDirty ? undefined : errors.email ? "true" : "false"
            }
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          <EmailCheckButton onClick={onSubmitEmail}>중복확인</EmailCheckButton>
        </Emailwrapper>
        <Alert>{emailCheck}</Alert>
        {errors.email && <Alert role="alert">{errors.email.message}</Alert>}
        <Label>* 유저 User 아이디</Label>
        <RegisterUsernameInput
          id="username"
          type="text"
          placeholder="User ID"
          aria-invalid={
            !isDirty ? undefined : errors.username ? "true" : "false"
          }
          {...register("username", {
            required: "UserName은 필수 입력입니다.",
          })}
        />
        {errors.username && (
          <Alert role="alert">{errors.username.message}</Alert>
        )}
        <Label>* 비밀번호 [ 8자리 이상 ]</Label>
        <RegisterPassWordInput
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
        )}{" "}
        <RegisterPassWordCheckInput
          id="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          aria-invalid={
            !isDirty ? undefined : errors.password ? "true" : "false"
          }
          {...register("passwordConfirm", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
            validate: {
              check: (val) => {
                if (getValues("password") !== val) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            },
          })}
        />{" "}
        {errors.passwordConfirm && (
          <Alert role="alert">{errors.passwordConfirm.message}</Alert>
        )}
        {
          <PreImage
            src={imageSrc || "../public/noprofile.png"}
            alt="preview-img"
          />
        }
        <Label>프로필 사진 등록</Label>
        <UploadButton htmlFor="profile">프로필 등록</UploadButton>
        <ProfileInput
          {...register("profileImage")}
          id="profile"
          type="file"
          accept="image/*"
          className="hidden"
        ></ProfileInput>
        <Alert role="alert">선택하지 않을 시 기본이미지가 적용됩니다.</Alert>
        <RegisterButton onClick={navigateToSignUp}>입력완료</RegisterButton>
      </RegisterFormWrapper>
    </>
  );
}

export default RegisterForm;
