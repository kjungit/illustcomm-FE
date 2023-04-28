import styled from "styled-components";

export const MainNewPostsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .my-masonry-grid {
    height: 590px;
    overflow: auto;
    display: flex;
    width: auto;
  }
  .my-masonry-grid-column {
    background-clip: padding-box;
  }
  .my-masonry-grid-column > li {
    margin-bottom: 130px;
  }
`;

export const MainNewPostsTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #fff;
  padding: 40px 20px 20px;
`;

export const MainPostsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewMainPost = styled.div`
  width: 600px;
`;
