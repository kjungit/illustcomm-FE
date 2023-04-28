import styled, { css } from "styled-components";

export const inputStyles = css`
  color: #fff;
  width: 100%;
  height: 50px;
  border: none;
  padding: 10px;
  background-color: #181817;
`;

export const RegisterUpTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  margin: 60px 0 30px;
  color: #fff;
`;

export const RegisterFormWrapper = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;

  width: 300px;
  & > input,
  button {
    width: 100%;
    height: 50px;
    border: none;
    padding: 10px;
  }
`;

export const RegisterEmailInput = styled.input`
  max-width: 220px;
  ${inputStyles}
`;
export const RegisterUsernameInput = styled.input`
  max-width: 300px;
  ${inputStyles}
`;
export const RegisterPassWordInput = styled.input`
  color: #fff;
  background-color: #181817;
`;

export const RegisterPassWordCheckInput = styled.input`
  color: #fff;
  background-color: #181817;
  margin-top: 10px;
`;

export const Alert = styled.div`
  font-size: 14px;
  color: #e01300;
  margin-top: 5px;
`;

export const FormWrapper = styled.form``;

export const ProfileInput = styled.input`
  display: none;
`;

export const PreImage = styled.img`
  display: block;
  margin-top: 40px;
  width: 100px;
  align-self: center;
  border-radius: 50%;
`;

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: 700;

  cursor: pointer;
  background-color: #202020;
  &:hover {
    background-color: #0f0f0f;
    border: 1px solid #5c5c5c;
  }
`;

export const RegisterButton = styled.button`
  background-color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  &:hover {
    background-color: #cacaca;
  }
`;

export const Emailwrapper = styled.div`
  width: 100%;
`;
export const EmailCheckButton = styled.button`
  max-width: 80px;
  color: #ffffff;

  background-color: #202020;
  &:hover {
    background-color: #0f0f0f;
    border: 1px solid #5c5c5c;
  }
`;

export const Label = styled.label`
  display: block;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 0 10px;
  margin-bottom: 6px;
  margin-top: 30px;
  // 마지막 요소
  &:nth-child(8) {
    margin-top: 0;
  }
`;
