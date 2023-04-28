import styled from "styled-components";

export const PostListWrapper = styled.div`
  width: 1200px;
  .my-masonry-grid {
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
export const MainLikePostsTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  padding: 60px 20px 0px;
`;
export const LikePostList = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;
