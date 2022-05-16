<<<<<<< HEAD
import { MainContainer, Container, TextContainer, Image, Input } from "./style";

=======
import { Container,TextContainer, Image, Input } from "./style";
import React from "react";
>>>>>>> 752da9004938d37aaa56ea0f960942444dff8f1e

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
