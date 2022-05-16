import { Container, ImageWrapper, Image } from "./styles";
import logo from './logo facens.png';
import React from "react";

export const Header = () => {
  return (
    <Container>
        <ImageWrapper>
          <Image src={logo} />
        </ImageWrapper>
    </Container>
  )

};
