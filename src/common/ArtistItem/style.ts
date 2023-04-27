import styled from "styled-components";

export const TopArtItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopArtItemImg = styled.img`
  display: block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  cursor: pointer;
  border-radius: 50%;
`;

export const ArtName = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-top: 10px;
  color: #fff;
`;
