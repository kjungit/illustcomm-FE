import styled from "styled-components";

export const UpdatePostWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UpdateTitle = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  margin: 40px 0 20px;
`;
export const PostWrapper = styled.form`
  display: flex;
  flex-direction: row;
  height: auto;
  min-width: 500px;
  & > div {
    margin: 0 20px;
  }
`;
export const LeftWrapper = styled.div`
  width: 500px;
  border: 1px solid #000;
`;

export const RightWrapper = styled.div`
  width: 500px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
`;

export const PreImage = styled.img`
  width: 100%;
  display: block;
  border: 5px solid #fff;
`;

export const ProfileInput = styled.input`
  display: none;
`;
export const UploadButton = styled.label``;

export const PostTitleInput = styled.input`
  background-color: #181817;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 60px;
  padding: 20px;
  &:focus {
    outline: none;
  }
`;
export const PostBodyInput = styled.textarea`
  background-color: #181817;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: auto;
  min-height: 320px;
  padding: 20px;
  margin-top: 20px;
  &:focus {
    outline: none;
  }
`;
export const PostButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: rgb(212, 212, 212);
  font-size: 20px;
  font-weight: 600;
  border: none;
  margin-top: auto;
  cursor: pointer;
  &:hover {
    background-color: #303030;
    color: #fff;
  }
`;

export const Alert = styled.div`
  font-size: 14px;
  color: #e01300;
  margin-top: 5px;
`;
