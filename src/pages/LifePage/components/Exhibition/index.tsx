import React from "react";
import {
  ExhibitionTitle,
  ExhibitionWrapper,
  MapWrapper,
  PlaceButton,
  PlaceButtonWrapper,
  PlaceTitle,
  Title,
} from "./style";
function Exhibition() {
  return (
    <ExhibitionWrapper>
      <Title>Exhibition</Title>
      <MapWrapper></MapWrapper>
      <PlaceButtonWrapper>
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <PlaceButton key={index}>
              <PlaceTitle>서울 코엑스</PlaceTitle>
              <ExhibitionTitle>K-일러스트레이션페어</ExhibitionTitle>
            </PlaceButton>
          );
        })}
      </PlaceButtonWrapper>
    </ExhibitionWrapper>
  );
}

export default Exhibition;
