import React from "react";
import { CollaborationWrapper, Item, ItemImg, ItemList, Title } from "./style";

function Collaboration() {
  return (
    <CollaborationWrapper>
      <Title>Collaboration</Title>
      <ItemList>
        {Array.from({ length: 18 }).map((_, index) => {
          return (
            <Item key={index}>
              <ItemImg src={"../public/hoody.jpeg"} alt={"img"} />
            </Item>
          );
        })}
      </ItemList>
    </CollaborationWrapper>
  );
}

export default Collaboration;
