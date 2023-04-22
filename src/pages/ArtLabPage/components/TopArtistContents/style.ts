import styled from "styled-components";

export const TopArtWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border-top: 1px solid #4b4b4b;
  padding-top: 50px;
`;

export const TopArtTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
  color: #fff;
`;

export const TopArtList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 40px;
`;
