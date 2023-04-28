import styled from "styled-components";

export const SignFormWrapper = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 300px;
  //  자식요소
  & > input,
  button {
    width: 100%;
    max-width: 300px;
    height: 50px;
    border: none;
    padding: 10px;
  }
`;
export const SignEmailInput = styled.input`
  background-color: #181817;
  color: #fff;
`;
export const SignPassWordInput = styled.input`
  background-color: #181817;
  color: #fff;
  margin-top: 10px;
`;
export const SignInButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  background-color: #d4d4d4;
  margin: 30px 0 10px;
`;

export const SignUpButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  background-color: #08b2c8;
`;
export const Alert = styled.div`
  font-size: 14px;
  color: #e01300;
  margin-top: 5px;
`;
