import styled from "styled-components";

export const CommentItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: auto;
`;
export const CommentProfile = styled.img`
  width: 50px;
`;
export const CommentBody = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: auto;
`;
export const CommentAuthor = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 6px;
`;
export const CommentContent = styled.div`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const CommentButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CommentButton = styled.button`
  color: #fff;
  width: 60px;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
