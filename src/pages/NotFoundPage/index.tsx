import React from "react";
import styled from "styled-components";
const NotWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  img {
    height: 600px;
  }
`;
function NotFoundPage() {
  return (
    <NotWrapper>
      <img src="../public/notfound.jpg" alt="" />
    </NotWrapper>
  );
}

export default NotFoundPage;
