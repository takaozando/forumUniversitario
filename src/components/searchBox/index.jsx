import { MainContainer, Container, TextContainer, Image, Input } from "./style";

import { Container,TextContainer, Image, Input } from "./style";
import React from "react";


const SearchBox = (props) => {
  return (
    <MainContainer>
      <Container >
        <TextContainer>
          <Input placeholder="Buscar" />
        </TextContainer>

        <Image src={props.image} alt="img_icon" />
      </Container>
    </MainContainer>
  )

};

export default SearchBox;
