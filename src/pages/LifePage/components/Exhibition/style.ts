import styled from "styled-components";

export const ExhibitionWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 40px;
  border-top: 1px solid #4b4b4b;
  margin-top: 60px;
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: #252525;
`;
export const PlaceButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
`;
export const PlaceButton = styled.div`
  width: 200px;
  height: 100px;
  background-color: #252525;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #4b4b4b;
  }
`;
export const PlaceTitle = styled.div`
  font-size: 24px;
`;
export const ExhibitionTitle = styled.div`
  font-size: 16px;
  padding-top: 10px;
`;
