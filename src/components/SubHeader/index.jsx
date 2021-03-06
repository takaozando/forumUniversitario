import { Container, ImageWrapper, Image, NameWrapper } from "./styles";

import React from "react";
import dbIcon from '../icones/db.png';

export const SubHeader = (props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={props.img} />
      </ImageWrapper>
      <NameWrapper>
        {props.name}
      </NameWrapper>
    </Container>
  )

};
